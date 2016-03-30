var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var ApiUtil = require('../util/api_util');

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
    var output = [];
    for (var x = 0; x < this.state.listings.length; x++ ) {
      var listing = this.state.listings[x];
      var values = [];
      for(var key in listing) {
          if(listing.hasOwnProperty(key)) {
            var value = listing[key];
            values.push(value);
          }
      }
      output.push(<li>{values}</li>);
    }


    return (
      <ul>
        {output}
      </ul>
    );
  }
});

module.exports = Listings;
