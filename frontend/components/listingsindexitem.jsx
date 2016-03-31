var React = require('react');
var MarkerStore = require('../stores/marker');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var ApiActions = require('../actions/api_action');

var Listing = React.createClass({
  getInitialState: function () {
    return {};
  },

  place_marker: function () {
    var pos = {};
    pos.lat = this.props.listing.lat;
    pos.lng = this.props.listing.lng;
    var marker = new google.maps.Marker({
      position: pos,
    });
    ApiActions.updateMarker(marker, pos);
  },
  render: function () {

    return(
    <li onMouseOver={this.place_marker} className="idx_listing group">
      <p className="idx_address detail"> {this.props.listing.address}</p>
      <p className="idx_price detail"> ${this.props.listing.price} FOR SALE</p>
      <p className="idx_beds detail"> {this.props.listing.beds} beds</p>
      <p className="idx_baths detail"> {this.props.listing.baths} bath</p>
      <p className="idx_category detail"> {this.props.listing.category}</p>
      <p className="idx_company detail"> Listed by {this.props.listing.company}</p>
    </li>);
 }
});

module.exports = Listing;
