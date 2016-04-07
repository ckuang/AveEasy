class Listing < ActiveRecord::Base
  include PgSearch
  pg_search_scope :trgm, :against => :neighborhood, :using => {:trigram =>  {:threshold => 0.1}}
  pg_search_scope :tsrch, :against => :neighborhood, :using => {:tsearch => {:prefix => true}}
  validates :address, :beds, :baths, :price, :neighborhood, :category, :user_id, :lat, :lng, presence: true
  belongs_to :user
	has_many :pictures, as: :imageable
  # after_initialize :ensure_neighborhood

	def ensure_neighborhood
		streeteasykey = "867a8b6ea743f335d75b71f9f64a63f8a56c6966"
		req = "http://streeteasy.com/nyc/api/areas/for_location?lon=" + self.lng.to_s + "&lat=" + self.lat.to_s + "&key=" + streeteasykey + "&format=json";
		response = RestClient.get req
		neighborhood = JSON.parse response
		self.neighborhood = neighborhood["name"]
	end

end
