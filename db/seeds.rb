# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = File.open("#{Rails.root}/app/assets/images/boardwalk_hotel.jpg")
b = File.open("#{Rails.root}/app/assets/images/boardwalk.jpg")
c = File.open("#{Rails.root}/app/assets/images/hotels.jpg")
d = File.open("#{Rails.root}/app/assets/images/houses.jpg")
e = File.open("#{Rails.root}/app/assets/images/pass_go.jpg")
pics = [a, b, c, d, e]

# a = "boardwalk_hotel.jpg"
# b = "boardwalk.jpg"
# c = "hotels.jpg"
# d = "houses.jpg"
# e = "pass_go.jpg"
# pics = [a, b, c, d, e]

require 'csv'

csv_text = File.read("db/addresses.csv")
csv = CSV.parse(csv_text, :headers => true)
x = 0
while x < 200
  category = (x % 2 == 0) ? "coop" : "condo"
	coop = csv[x * 10].to_hash.values[1].split("\n")
	address = coop[0]
	lat_lng = coop[2].delete("()").split(", ")
	lat = lat_lng[0]
	lng = lat_lng[1]
	new_listing = Listing.new(
		address: address,
		beds: rand(10),
	  baths: rand(5),
		price: (rand(40) * 25000) + 500000,
		category: category,
	  user_id: 3,
		lat: lat.to_f,
	  lng: lng.to_f,
		neighborhood: csv[x * 10].to_hash.values[2])
	new_listing.save!
	pic = Listing.find_by_address(address).pictures.new
	pic.image = pics[rand(5)]
  # pic.image.url = pics.sample
  pic.save!
	x += 1
end

sennacy = User.create!(username: 'sennacy', password: 'starwars', realtor: true, realtor_company: 'App Academy')
mr_monopoly = User.create!(username: 'monopoly', password: 'password', realtor: true, realtor_company: 'Hasbro')
jordan = User.create!(username: "jordan", password: "rodriguez", realtor: true, realtor_company: "Compass")

y = 1
while y <= 10
  SavedListing.create!(listing_id: y, user_id: 1)
  y += 1
end
