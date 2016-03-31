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
  }
};

module.exports = ApiUtil;
