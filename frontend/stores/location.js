var Store = require('flux/utils').Store;
var _location = "";
var AppDispatcher = require('../dispatcher/dispatcher');
var LocationStore = new Store(AppDispatcher);

LocationStore.location = function () {
  return _location;
};

LocationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "updatesearchlocation":
			_location = payload.location;
      LocationStore.__emitChange();
      break;
  }
};

module.exports = LocationStore;
