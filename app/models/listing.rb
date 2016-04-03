class Listing < ActiveRecord::Base
  validates :address, :beds, :baths, :price, :category, :user_id, :lat, :lng, presence: true
  belongs_to :user
  # after_initialize :ensure_neighborhood


	def ensure_neighborhood(lat, lng)
    req = "http://streeteasy.com/nyc/api/areas/for_location?lon=" + lng + "&lat=" + lat + "&key=" + streeteasykey + "&format=json";
    response = RestClient.get req
	end

end
