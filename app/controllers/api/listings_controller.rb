class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.find(params["id"])
    render json: @listing
  end

  def index
    byebug
    if params.length == 3
      @listings = current_user.savedlistings
    else
      @listings = category(price(baths(beds)))
    end
  end

	private
	def listings_params
		params.require("listings").permit("location", "beds", "baths", "pricelow", "pricehigh", "category", "userid")
	end

	def address
	end

	def beds
		if listings_params["beds"] == "any"
			return Listing.all
		else
			Listing.where("beds = #{listings_params["beds"]}")
		end
	end

	def baths(listings)
		if listings_params["baths"] == "any"
			return listings
		else
			listings.where("baths = #{listings_params["baths"]}")
		end
	end

	def price(listings)
		low = listings_params["pricelow"]
		high = listings_params["pricehigh"]
		if low == "any" && high != "any"
			listings.where("price < #{high}")
		elsif low != "any" && high == "any"
			listings.where("price > #{low}")
		elsif low == "any" && high == "any"
			listings
		else
			listings.where("price BETWEEN #{low} and #{high}")
		end

	end

	def category(listings)
		if listings_params["category"] == "any"
			return listings
		else
			listings.where("category = ?", "#{listings_params["category"]}")
		end
	end

	def user_id
	end

end
