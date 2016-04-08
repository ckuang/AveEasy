var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');
var Listing = require('./listingsindexitem');
var GoogleMap = require('./map');
var ListingStore = require('../stores/listing');
var BrowserHistory = require('react-router').browserHistory;
function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
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
      <div className="show-container group">
        <img className="show_image" src={this.state.listing.image}></img>
      <ul className="listing-show group">
        <li className="show_address detail"> {this.state.listing.listing.address}</li>
        <li className="show_price detail"> ${numberWithCommas(this.state.listing.listing.price)} FOR SALE</li>
        <li className="show_beds detail"> {this.state.listing.listing.beds} beds</li>
        <li className="show_baths detail"> {this.state.listing.listing.baths} bath</li>
        <li className="show_category detail">
          {this.state.listing.listing.category} in {this.state.listing.listing.neighborhood}</li>
        <li className="show_company detail"> Listed by {this.state.listing.company}</li>
      </ul>
    </div>
    );
    }
  }
});

module.exports = ListingShow;
