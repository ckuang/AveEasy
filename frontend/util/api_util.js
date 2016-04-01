var ApiActions = require('../actions/api_action');

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

  login: function(credentials, callback) {

    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: {user: credentials},
      success: function(currentUser) {
        debugger
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
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
