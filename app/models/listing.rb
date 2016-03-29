class Listing < ActiveRecord::Base
  validates :address, :beds, :baths, :price, :category, :user_id, :lat, :lng, presence: true
  belongs_to :user
end
