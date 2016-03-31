var AppDispatcher = require('../dispatcher/dispatcher');
var ListingConstants = require('../constants/listing_constants');

var ApiActions = {
  receiveAll: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  },
  updateMarker: function(marker, pos) {
    AppDispatcher.dispatch({
      actionType: "updatemarker",
      marker: marker,
      pos: pos
    });
  }
};

module.exports = ApiActions;
