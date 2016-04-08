json.array!(@listings) do |listing|
	json.partial!('listing', listing: listing)
  json.image asset_path(listing.pictures.first.image.url)
  json.company listing.user.realtor_company
  json.saved @savedlistings.include?(listing)
end
