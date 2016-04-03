var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Listings = require('./components/listingsindex');
var HeaderNav = require('./components/header_nav');
var ListingShow = require('./components/listingshow');
var LoginForm = require('./components/login_form');
var SearchForm = require('./components/searchform');
var BrowserHistory = require('react-router').browserHistory;
var SessionStore = require('./stores/session');
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
          <HeaderNav/>
        </nav>
        <h1 className="logo">AveEasy</h1>
        <br/>
        {this.props.children}
      </div>
    );
  }
});

var requireAuth = function (nextState, replace, asyncCompletionCallback) {
    if (!SessionStore.currentUserHasBeenFetched()) {
      ApiUtil.fetchCurrentUser();
      asyncCompletionCallback();
    }
  };

var routes = (
  <Route path="/" component={App} onEnter={requireAuth}>
		<IndexRoute component={SearchForm}/>
		<Route path="/listings" component={Listings} />
    <Route path="/listing/:id" component={ListingShow}/>
  </Route>
);

window.showModal = function(){
  $("#modal").addClass("is-active");
};

window.hideModal = function(){
$("#modal").removeClass("is-active");
};

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={BrowserHistory}>{routes}</Router>, document.getElementById('content'));
});
