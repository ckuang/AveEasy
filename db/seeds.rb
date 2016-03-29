# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

mr_monopoly = User.create!(username: 'monopoly', password: 'boardwalk', realtor: true, realtor_company: 'hasbro')
boardwalk = Listing.create!(address: 'Boardwalk', beds: 8, baths: 6, price: 400, category: "condo", user_id: 1, lat: 0, lng: 0)
pennsylvania = Listing.create!(address: "Pennsylvania Ave", beds: 6, baths: 3, price: 320, category: "coop", user_id: 1, lat: 1, lng: 1)
electric = Listing.create!(address: 'Electric Company', beds: 0, baths: 1, price: 150, category: "commercial", user_id: 1, lat: 2, lng: 2)
