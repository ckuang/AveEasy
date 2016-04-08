var React = require('react');
var ListingStore = require('../stores/listing');
var SessionStore = require('../stores/session');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var Listing = require('./listingsindexitem');
var GoogleMap = require('./map');


var Listings = React.createClass({
  getInitialState: function () {
    return { listings: false, signedIn: false };
  },
  _listingChanged: function () {
    this.setState({listings: ListingStore.all()});
  },
  loginChanged: function () {
    this.setState({signedIn: SessionStore.isLoggedIn()});
  },
  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this._listingChanged);
    this.sessionListener = SessionStore.addListener(this.loginChanged);
    ApiUtil.fetchListings(this.props.location.query);
    ApiUtil.fetchCurrentUser();
  },
  componentWillUnmount: function () {
    this.listingListener.remove();
    this.sessionListener.remove();
  },

  render: function () {
    var loggedIn = this.state.signedIn;
    if (this.state.listings) {
			return(
	      <div>
	      <ul className="idx_listings">
          <div id="map" className="group">
            <GoogleMap />
          </div>
        {this.state.listings.map(function (listing) {
	          return <Listing key={listing.id} loggedIn={loggedIn} listing={listing} />;
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
