class Api::SavedListingsController < ApplicationController

  def create
    @saved_listing = SavedListing.new(listing_params)
    @saved_listing.user_id = current_user.id
    @saved_listing.save!
    render json: {}
  end

  def destroy
    byebug
    @delete_listing = SavedListing.find(params["listing"]["listing_id"].to_i)
    @delete_listing.destroy!
    render json: {}
  end

  private
  def listing_params
    params.require("listing").permit("listing_id")
  end

end
