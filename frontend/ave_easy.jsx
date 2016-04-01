var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Listings = require('./components/listingsindex');
var HeaderNav = require('./components/header_nav');
var ListingShow = require('./components/listingshow');
var LoginForm = require('./components/login_form');

var ApiUtil = require('./util/api_util');
window.ApiUtil = ApiUtil;

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
      <div>
        <LoginForm />
        <nav className="group">
          <p className="nyc">New York City</p>
          <HeaderNav />
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
    <Route path="/listings" component={Listings}>
  </Route>
    <Route path="listing/:id" component={ListingShow}/>
  </Route>
);

window.showModal = function(){
  $("#modal").addClass("is-active");
};

window.hideModal = function(){
$("#modal").removeClass("is-active");
};

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('content'));
});
