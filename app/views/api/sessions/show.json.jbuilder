json.user @current_user
json.saved_listings @current_user.savedlistings do |savedlisting|
  json.savedlisting savedlisting.id
end
