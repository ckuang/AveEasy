json.array!(@listings) do |listing|
	json.partial!('listing', listing: listing)
	json.image listing.pictures.first.image.url
  json.company listing.user.realtor_company
  json.saved @savedlistings.include?(listing)
end
