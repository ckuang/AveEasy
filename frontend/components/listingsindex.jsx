var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var Listing = require('./listingsindexitem');
var GoogleMap = require('./map');

var Listings = React.createClass({
  getInitialState: function () {
    return { listings: false };
  },
  _listingChanged: function () {
    this.setState({listings: ListingStore.all()});
  },
  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._listingChanged);
		ApiUtil.fetchListings(this.props.location.query);
  },
  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  render: function () {
		if (this.state.listings) {
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
		} else {
			return (<div></div>);
		}
  }
});

module.exports = Listings;
