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
  },
	updateRegister: function (register) {
		AppDispatcher.dispatch({
			actionType: "updateregister",
			register: register,
		});
	}
};

module.exports = ApiActions;
