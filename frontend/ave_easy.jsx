var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Listings = require('./components/listingsindex');

var ApiUtil = require('./util/api_util');
window.ApiUtil = ApiUtil;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="group">
          <p className="nyc">New York City</p>
          <p className="register">REGISTER (IT'S FREE)</p>
          <p className="signin">Sign In</p>
        </nav>
        <h1 className="logo">AveEasy</h1>
        <br/>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Listings}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
