class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.find(params["id"])
    render json: @listing
  end

  def index
    @listings = Listing.all
  end


end
