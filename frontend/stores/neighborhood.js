var Store = require('flux/utils').Store;
var _neighborhoods = [];
var ListingConstants = require('../constants/listing_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var NeighborhoodStore = new Store(AppDispatcher);


NeighborhoodStore.all = function () {
  return _neighborhoods;
};

NeighborhoodStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ListingConstants.LISTINGS_RECEIVED:
      NeighborhoodStore.__emitChange();
      break;
    case ListingConstants.LISTING_RECEIVED:
      NeighborhoodStore.__emitChange();
      break;
  }
};

module.exports = NeighborhoodStore;
