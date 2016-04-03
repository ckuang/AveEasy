var AppDispatcher = require('../dispatcher/dispatcher');
var ListingConstants = require('../constants/listing_constants');

var ApiActions = {
  receiveAll: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  },
  receiveListing: function(listing) {
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTING_RECEIVED,
      listing: listing
    });
  },
  updateMarker: function(marker, pos) {
    AppDispatcher.dispatch({
      actionType: "updatemarker",
      marker: marker,
      pos: pos
    });
  },
	updateRegister: function (register) {
		AppDispatcher.dispatch({
			actionType: "updateregister",
			register: register,
		});
	}
};

module.exports = ApiActions;
