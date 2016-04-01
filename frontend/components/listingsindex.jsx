var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var Listing = require('./listingsindexitem');
var GoogleMap = require('./map');

var Listings = React.createClass({
  getInitialState: function () {
    return { listings: [] };
  },
  _listingChanged: function () {
    this.setState({listings: ListingStore.all()});
  },
  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._listingChanged);
    ApiUtil.fetchListings();
  },
  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  render: function () {
    return(
      <div>
      <ul className="idx_listings">
        <GoogleMap />
        {this.state.listings.map(function (listing) {
          return <Listing key={listing.id} listing={listing} />;
        })}
      </ul>
        {this.props.children}
      </div>
    );

  }
});

module.exports = Listings;
