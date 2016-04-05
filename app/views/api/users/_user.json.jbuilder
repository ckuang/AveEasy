json.user user
if user.savedlistings.length > 0
  json.array!(user.savedlistings) do |savedlisting|
    json.savedlisting savedlisting.listing_id
  end
end
