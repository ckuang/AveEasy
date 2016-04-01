var Store = require('flux/utils').Store;
var _listings = [];
var ListingConstants = require('../constants/listing_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ListingStore = new Store(AppDispatcher);

var resetListings = function(listings){
  _listings = listings.slice(0);
};

ListingStore.all = function () {
  return _listings.slice(0);
};

ListingStore.find = function (id) {
  return _listings[id];
};

ListingStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.LISTINGS_RECEIVED:
      var result = resetListings(payload.listings);
      ListingStore.__emitChange();
      break;
  }
};

module.exports = ListingStore;
