var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var Listing = require('./listingsindexitem');
var GoogleMap = require('./map');
var ListingStore = require('../stores/listing');
var ListingShow = React.createClass({

  getStateFromStore: function () {
    return { listing: ListingStore.find(parseInt(this.props.params.id) - 1) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
   return this.getStateFromStore();
  },

  render: function () {
    return(

      <ul>
        <li className="show_address detail"> {this.state.listing.address}</li>
        <li className="show_price detail"> ${this.state.listing.price} FOR SALE</li>
        <li className="show_beds detail"> {this.state.listing.beds} beds</li>
        <li className="show_baths detail"> {this.state.listing.baths} bath</li>
        <li className="show_category detail"> {this.state.listing.category}</li>
        <li className="show_company detail"> Listed by {this.state.listing.company}</li>
      </ul>

    );

  }
});

module.exports = ListingShow;
