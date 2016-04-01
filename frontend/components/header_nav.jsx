var React = require('react');
var SessionStore = require('../stores/session');

var HeaderNav = React.createClass({
  render: function () {
    return (
      <div>
        <p className="register" onClick={window.showModal}>REGISTER (IT'S FREE)</p>
        <p className="signin" onClick={window.showModal}>Sign In</p>
      </div>
    );
  }
});

module.exports = HeaderNav;
