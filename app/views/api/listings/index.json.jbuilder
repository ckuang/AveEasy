json.array!(@listings) do |listing|
  json.partial!('listing', listing: listing)
  json.company listing.user.realtor_company
end
