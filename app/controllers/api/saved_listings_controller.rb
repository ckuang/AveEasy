class Api::SavedListingsController < ApplicationController

  def create
    @saved_listing = SavedListing.new(save_listing_params)
    @saved_listing.user_id = current_user.id
    @saved_listing.save!
    render json: {}
  end

  def destroy
  end

  private
  def save_listing_params
    params.require("save_listing").permit("listing_id")
  end

end
