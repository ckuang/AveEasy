var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Listings = require('./components/listings');

var ApiUtil = require('./util/api_util');
window.ApiUtil = ApiUtil;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>Ave Easy</h1></header>
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
  ReactDOM.render(<Listings />, document.getElementById('content'));
});
