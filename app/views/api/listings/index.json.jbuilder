a = "boardwalk_hotel.jpg"
b = "boardwalk.jpg"
c = "hotels.jpg"
d = "houses.jpg"
e = "pass_go.jpg"
pics = [a, b, c, d, e]

json.array!(@listings) do |listing|
	json.partial!('listing', listing: listing)
  json.image asset_path(pics.sample)
  json.company listing.user.realtor_company
  json.saved @savedlistings.include?(listing)
end
