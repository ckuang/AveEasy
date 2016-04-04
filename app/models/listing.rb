require 'rest-client'

class Listing < ActiveRecord::Base
  validates :address, :beds, :baths, :price, :neighborhood, :category, :user_id, :lat, :lng, presence: true
  belongs_to :user
  after_initialize :ensure_neighborhood

	def self.ensure_neighborhood(lat, lng)
		streeteasykey = "867a8b6ea743f335d75b71f9f64a63f8a56c6966"
		req = "http://streeteasy.com/nyc/api/areas/for_location?lon=" + lng.to_s + "&lat=" + lat.to_s + "&key=" + streeteasykey + "&format=json";
		response = RestClient.get req
		neighborhood = JSON.parse response
		neighborhood["name"]
	end

end
