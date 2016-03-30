var AppDispatcher = require('../dispatcher/dispatcher');
var ListingConstants = require('../constants/listing_constants');

var ApiActions = {
  receiveAll: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  }
};

module.exports = ApiActions;
