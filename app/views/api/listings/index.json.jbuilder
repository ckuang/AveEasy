json.array!(@listings) do |listing|
	json.partial!('listing', listing: listing)
	json.image listing.pictures.first.image.url
end
