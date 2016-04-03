var Store = require('flux/utils').Store;
var _listings = [];
var _listing = {};
var ListingConstants = require('../constants/listing_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ListingStore = new Store(AppDispatcher);

var resetListings = function(listings){
  _listings = listings.slice(0);
};

ListingStore.listing = function () {
  return _listing;
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
      resetListings(payload.listings);
      ListingStore.__emitChange();
      break;
    case ListingConstants.LISTING_RECEIVED:
      _listing = payload.listing;
      ListingStore.__emitChange();
      break;
  }
};

module.exports = ListingStore;
