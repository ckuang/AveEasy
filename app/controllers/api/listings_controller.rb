class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.find(params["id"])
    render json: @listing
  end

  def neighborhoods
    string = params["string"]
    trigram = Listing.trgm(string).pluck(:neighborhood)
    tsearch = Listing.tsrch(string).pluck(:neighborhood)
    @neighborhoods = (trigram + tsearch).uniq.sort
    render json: @neighborhoods
  end

  def index
    if user_id
      @listings = current_user.savedlistings
    else
      @listings =
        Listing.where(beds)
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

  def user_id
    listings_params["userid"] == "signedin"
  end

end
