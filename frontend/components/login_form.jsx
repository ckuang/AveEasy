var React = require('react');
var ApiUtil = require('../util/api_util');
var ApiActions = require('../actions/api_action');
var RegisterStore = require('../stores/register');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      name: "",
      password: "",
      signin_register: ""
    };
  },

	resetState: function () {
		this.setState({
      name: "",
      password: "",
      signin_register: ""
		});
	},

  componentDidMount: function () {
    RegisterStore.addListener(this.setRegister);
  },
	setRegister: function () {
		this.setState({signin_register: RegisterStore.register()});
	},


  updateRegister: function () {
    this.setState({signin_register: "Register"});
  },
  updateSignIn: function () {
    this.setState({signin_register: "Sign In"});
  },

	hide: function() {
		this.resetState();
		window.hideModal();
	},

  render: function() {
    return (
      <section id="modal" className="modal ">
        <article className="modal-content">
          <span className="modal-close" onClick={this.hide}>CANCEL</span>

        <h1 id="signin"> {this.state.signin_register} </h1>
        <p> Register for free to access all AveEasy has to offer including premium data and advanced features. </p>
        <ul className="group">
          <li onClick={this.updateRegister} className="signintab">Register</li>
          <li onClick={this.updateSignIn} className="signintab">Sign In</li>
        </ul>

          <form onSubmit={this.handleSubmit}>
            <input  onChange={this.updateName}
                    type="text"
                    placeholder="Email Address"
                    value={this.state.name}/>
            <input  onChange={this.updatePassword}
                    type="password"
                    placeholder="Password (At Least 5 Characters)"
                    value={this.state.password}/>
            <button>{this.state.signin_register}</button>
          </form>

        </article>
        <div onClick={this.hide} className="modal-screen"></div>
      </section>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = {username: this.state.name, password: this.state.password};
    if (this.state.signin_register === "Sign In") {
      ApiUtil.login(user);
    } else {
      ApiUtil.register(user);
    }

    this.hide();
  },

  updateName: function(e) {
    this.setState({ name: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
