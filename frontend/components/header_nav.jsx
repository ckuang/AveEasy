var React = require('react');
var SessionStore = require('../stores/session');
var ApiActions = require('../actions/api_action');
var ApiUtil = require('../util/api_util');

var HeaderNav = React.createClass({
	getInitialState: function () {
		return({loggedIn: false});
	},
	changeState: function () {
		this.setState({loggedIn: SessionStore.isLoggedIn()});
	},
	componentDidMount: function () {
		SessionStore.addListener(this.changeState);
	},
	register: function () {
		ApiActions.updateRegister("Register");
		window.showModal();
	},
	signIn: function () {
		ApiActions.updateRegister("Sign In");
		window.showModal();
	},
	render: function () {
		if (this.state.loggedIn) {
			return (
				<ul>
					<li>My Properties</li>
					<li onClick={ApiUtil.logout}>LogOut</li>
				</ul>
		);
		} else {
		return (
      <div>
        <p className="register" onClick={this.register}>REGISTER (IT'S FREE)</p>
        <p className="signin" onClick={this.signIn}>Sign In</p>
			</div>
    );
		}
  }
});

module.exports = HeaderNav;
