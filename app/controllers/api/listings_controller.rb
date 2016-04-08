class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.find(params["id"])
  end

  def neighborhoods
    string = params["string"]
    if string == "all"
      @neighborhoods = Listing.all.pluck(:neighborhood).uniq.sort
      render json: @neighborhoods
    else
      trigram = Listing.trgm(string).pluck(:neighborhood)
      tsearch = Listing.tsrch(string).pluck(:neighborhood)
      @neighborhoods = (trigram + tsearch).uniq.sort
      render json: @neighborhoods
    end
  end

  def index
    if current_user
      @savedlistings = current_user.savedlistings
    else
      @savedlistings = []
    end

    if listings_params["userid"] == "signedin"
      @listings = current_user.savedlistings
    else
      x = address == "any" ? Listing.where("") : Listing.location(address)
      @listings =
        x.where(beds)
        .where(baths)
        .where(category)
        .where(pricelow)
        .where(pricehigh)
        .includes(:pictures)
    end
  end

	private
	def listings_params
		params.require("listings").permit("location", "beds", "baths", "pricelow", "pricehigh", "category", "userid")
	end

	def address
    listings_params["location"]
  end

	def beds
    bed = listings_params["beds"]
    return bed == "any" ? "" : "beds = #{bed}"
	end

	def baths
    bath = listings_params["baths"]
    return bath == "any" ? "" : "baths = #{bath}"
	end

  def pricelow
    low = listings_params["pricelow"]
    return low == "any" ? "" : "price > #{low}"
  end

  def pricehigh
    high = listings_params["pricehigh"]
    return high == "any" ? "" : "price < #{high}"
  end

	def category
    type = listings_params["category"]
    return type == "any" ? "" : "category = '#{type}'"
	end

end
