var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var Listing = require('./listingsindexitem');
var GoogleMap = require('./map');
var ListingStore = require('../stores/listing');
var BrowserHistory = require('react-router').browserHistory;

var ListingShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  _listingChanged: function () {
    this.setState({listing: ListingStore.listing()});
  },
  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._listingChanged);
    ApiUtil.fetchListing(this.props.params.id);
  },
  componentWillUnmount: function () {
    this.listingListener.remove();
  },
  getInitialState: function () {
   return {listing: false};
  },

  render: function () {
    if (!this.state.listing) {
      return (<div></div>);
    } else {
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
  }
});

module.exports = ListingShow;
