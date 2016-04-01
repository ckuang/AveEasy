# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

sennacy = User.create!(username: 'sennacy', password: 'starwars', realtor: true, realtor_company: 'App Academy')
mr_monopoly = User.create!(username: 'monopoly', password: 'password', realtor: true, realtor_company: 'Hasbro')
boardwalk = Listing.create!(address: 'Boardwalk', beds: 8, baths: 6, price: 400, category: "condo", user_id: 2, lat: 40.7176157, lng: -74.0138261)
pennsylvania = Listing.create!(address: "Pennsylvania Ave", beds: 6, baths: 3, price: 320, category: "coop", user_id: 2, lat: 40.7032775, lng: -74.0170279)
app_academy = Listing.create!(address: '598 Broadway', beds: 0, baths: 2, price: 15000, category: "office", user_id: 1, lat: 40.7250849, lng: -73.9976342)
