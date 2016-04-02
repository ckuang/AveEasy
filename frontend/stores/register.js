var Store = require('flux/utils').Store;
var _register = "";
var AppDispatcher = require('../dispatcher/dispatcher');
var RegisterStore = new Store(AppDispatcher);

RegisterStore.register = function () {
  return _register;
};

RegisterStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "updateregister":
			_register = payload.register;
      RegisterStore.__emitChange();
      break;
  }
};

module.exports = RegisterStore;
