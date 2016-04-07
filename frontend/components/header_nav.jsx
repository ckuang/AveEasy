var React = require('react');
var SessionStore = require('../stores/session');
var ApiActions = require('../actions/api_action');
var ApiUtil = require('../util/api_util');

var HeaderNav = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
		return({
      currentUser: {},
      loggedIn: false,
      usercheck: false
    });
	},
	changeState: function () {
		this.setState({
      loggedIn: SessionStore.isLoggedIn(),
      currentUser: SessionStore.currentUser(),
      usercheck: true
    });
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

  showSavedListings: function () {
    this.context.router.push({
		  pathname: '/listings',
      query: {
        location: "",
        category: "any",
        pricelow: "any",
        pricehigh: "any",
        beds: "any",
        baths: "any",
        userid: "signedin"
			},
		  state: {}
		});
	},

	render: function () {
    if (this.state.usercheck) {
  		if (this.state.loggedIn) {
  			return (
  				<ul>
  					<li onClick={this.showSavedListings}>My Properties</li>
  					<li onClick={ApiUtil.logout}>LogOut</li>
  				</ul>
  		);
  		} else {
  		return (
        <div>
          <p className="register register-link" onClick={this.register}>REGISTER (IT'S FREE)</p>
          <p className="signin" onClick={this.signIn}>Sign In</p>
  			</div>
      );
  		}
    } else {
      return (<div></div>);
    }

  }
});

module.exports = HeaderNav;
