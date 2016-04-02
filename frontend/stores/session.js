var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionStore = new Store(AppDispatcher);

var _currentUser;
var _currentUserHasBeenFetched = false;

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.isLoggedIn = function() {
  return !!_currentUser;
};

SessionStore.currentUserHasBeenFetched = function() {
  return _currentUserHasBeenFetched;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "current_user_received":
      _currentUser = payload.currentUser;
      _currentUserHasBeenFetched = true;
      SessionStore.__emitChange();
      break;
    case "logout":
      _currentUser = null;
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
