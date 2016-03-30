var ApiActions = require('../actions/api_action');

var ApiUtil = {
  fetchListings: function () {
    $.ajax({
      url: "api/listings",
      success: function (listings) {
        ApiActions.receiveAll(listings);
      }
    });
  }
};

module.exports = ApiUtil;
