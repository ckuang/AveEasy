# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

csv_text = File.read("db/addresses.csv")
csv = CSV.parse(csv_text, :headers => true)
x = 0
byebug
while x < 100
	coop = csv[x].to_hash.values[1].split("\n")
	address = coop[0]
	lat_lng = coop[2].delete("()").split(", ")
	lat = lat_lng[0]
	lng = lat_lng[1]
	new_listing = Listing.new(
		address: address,
		beds: rand(10),
	  baths: rand(5),
		price: (rand(40) * 25000) + 500000,
		category: "coop",
	  user_id: 3,
		lat: lat.to_f,
	  lng: lng.to_f)
	new_listing.save!
	x += 1
end

listing_category = ["condo", "coop", "house"]

sennacy = User.create!(username: 'sennacy', password: 'starwars', realtor: true, realtor_company: 'App Academy')
mr_monopoly = User.create!(username: 'monopoly', password: 'password', realtor: true, realtor_company: 'Hasbro')
jordan = User.create!(username: "jordan", password: "rodriguez", realtor: true, realtor_company: "Compass")
boardwalk = Listing.create!(address: 'Boardwalk', beds: 8, baths: 6, price: 400, category: "condo", user_id: 2, lat: 40.7176157, lng: -74.0138261)
pennsylvania = Listing.create!(address: "Pennsylvania Ave", beds: 6, baths: 3, price: 320, category: "coop", user_id: 2, lat: 40.7032775, lng: -74.0170279)
app_academy = Listing.create!(address: '598 Broadway', beds: 0, baths: 2, price: 15000, category: "office", user_id: 1, lat: 40.7250849, lng: -73.9976342)
