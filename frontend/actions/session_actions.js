var AppDispatcher = require('../dispatcher/dispatcher');

var SessionActions = {
  currentUserReceived: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: "current_user_received",
      currentUser: currentUser
    });
  },

  checkedForUser: function() {
    AppDispatcher.dispatch({
      actionType: "checkedForUser",
    });
  },

  logout: function() {
    AppDispatcher.dispatch({
      actionType: "logout"
    });
  }
};

module.exports = SessionActions;
