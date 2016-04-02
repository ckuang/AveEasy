
class Listing < ActiveRecord::Base
  validates :address, :beds, :baths, :price, :category, :user_id, :lat, :lng, presence: true
  belongs_to :user

	def self.get_neighborhood(lat, lng)
		response = RestClient.get 'http://streeteasy.com/nyc/api/areas/for_location?lon=-73.9976342&lat=40.7250849&key=867a8b6ea743f335d75b71f9f64a63f8a56c6966&format=json'
	end

end
