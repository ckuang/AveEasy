var Store = require('flux/utils').Store;
var _marker = {};
var _pos = {};
var AppDispatcher = require('../dispatcher/dispatcher');
var MarkerStore = new Store(AppDispatcher);

MarkerStore.marker = function () {
  return _marker;
};

MarkerStore.pos = function () {
  return _pos;
};

MarkerStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "updatemarker":
      _marker = payload.marker;
      _pos = payload.pos;
      MarkerStore.__emitChange();
      break;
  }
};

module.exports = MarkerStore;
