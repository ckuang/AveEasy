var React = require('react');
var ApiUtil = require('../util/api_util');
var ApiActions = require('../actions/api_action');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      name: "",
      password: "",
      signin_register: "Register"
    };
  },
  updateRegister: function () {
    this.setState({signin_register: "Register"});
  },
  updateSignIn: function () {
    this.setState({signin_register: "Sign In"});
  },
  render: function() {
    return (
      <section id="modal" className="modal ">
        <article className="modal-content">
          <span className="modal-close" onClick={window.hideModal}>CANCEL</span>

        <h1 id="signin"> SIGN IN </h1>
        <p> Register for free to access all AveEasy has to offer including premium data and advanced features. </p>
        <ul className="group">
          <li onClick={this.updateRegister} className="signintab">Register</li>
          <li onClick={this.updateSignIn} className="signintab">Sign In</li>
        </ul>

          <form onSubmit={this.handleSubmit}>
            <input onChange={this.updateName} type="text" placeholder="Email Address" value={this.state.name}/>
            <input onChange={this.updatePassword} type="password" placeholder="Password (At Least 5 Characters)" value={this.state.password}/>
            <button>{this.state.signin_register}</button>
          </form>

        </article>
        <div onClick={window.hideModal} className="modal-screen js-hide-modal"></div>
      </section>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user = {username: this.state.name, password: this.state.password};
    ApiUtil.login(user, function() {});
  },

  updateName: function(e) {
    this.setState({ name: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
