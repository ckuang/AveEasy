class Api::SavedListingsController < ApplicationController

  def create
    @saved_listing = SavedListing.new(listing_params)
    @saved_listing.user_id = current_user.id
    @saved_listing.save!
    render json: {}
  end

  def destroy
    listing_id = params["listing"]["listing_id"].to_i
    @delete_listing = SavedListing
      .where("listing_id = #{listing_id}")
      .where("user_id = #{current_user.id}")
    SavedListing.delete(@delete_listing.first.id)
    render json: {}
  end

  private
  def listing_params
    params.require("listing").permit("listing_id")
  end

end
