var ApiActions = require('../actions/api_action');
var SessionActions = require('../actions/session_actions');
var streeteasykey = "867a8b6ea743f335d75b71f9f64a63f8a56c6966";

var ApiUtil = {
  fetchListings: function () {
    $.ajax({
      url: "api/listings",
      success: function (listings) {
        ApiActions.receiveAll(listings);
      }
    });
  },
  fetchAddressCoord: function (address) {
    var parse_add = address.split(" ").join("+");
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + parse_add + "&key=AIzaSyBn5UpAKkZeSm6HA0EREHCz8IVFE-r0L2Q",
      success: function (address_location) {
        var address_coord = address_location.results[0].geometry.location;

      }
    });
  },
	fetchNeigborhood: function (coord) {
		var lat = coord.lat.toString();
		var lng = coord.lng.toString();
		var req = "http://streeteasy.com/nyc/api/areas/for_location?lon=" + lng + "&lat=" + lat + "&key=" + streeteasykey + "&format=json";
		$.ajax({
			url: req,
			success: function (neighborhood) {
				debugger
				var address_coord = address_location.results[0].geometry.location;
			}
		});
	},


  login: function(credentials) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: {user: credentials},
      success: function(currentUser) {
				SessionActions.currentUserReceived(currentUser);
			}
    });
  },

  logout: function() {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
      }
    });
  },

  fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  }
};

module.exports = ApiUtil;
