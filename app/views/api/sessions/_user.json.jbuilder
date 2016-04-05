json.user user

json.savedlistings user.savedlistings do |savedlisting|
  json.savedlisting savedlisting.listing
end
