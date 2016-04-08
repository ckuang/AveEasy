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
      signin_register: "Sign In"
    };
  },

	resetState: function () {
		this.setState({
      name: "",
      password: "",
      signin_register: "Sign In"
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

        <h1 id="signin"> {this.state.signin_register} </h1>
    <span className="modal-close" onClick={this.hide}>CANCEL</span>
        <p> Register for free to access all AveEasy has to offer including premium data and advanced features. </p>

        <ul className="group modal-tabs-container">
          <li className="register-tab" onClick={this.updateRegister} >Register</li>
          <li className="signIn-tab" onClick={this.updateSignIn}>Sign In</li>
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
                <button class="submit-button">{this.state.signin_register}</button>
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
