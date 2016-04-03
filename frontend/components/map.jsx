var React = require('react');
var MarkerStore = require('../stores/marker.js');
var ApiUtil = require('../util/api_util.js');



var Map = React.createClass({
	getInitialState: function () {
		return { marker: false };
  },

	_onChange: function () {
    if (this.state.marker) {
      this.state.marker.setMap(null);
    }
    this.setState({ marker: MarkerStore.marker() });
  },

	componentDidMount: function(){
		this.markerListener = MarkerStore.addListener(this._onChange);

		var mapDOMNode = this.refs.map;
		var mapOptions = {
			center: {lat: 40.72493, lng: -73.996704},
			zoom: 13
		};
		this.map = new google.maps.Map(mapDOMNode, mapOptions);

    },

    componentWillUnmount: function () {
      this.markerListener.remove();
    },

	render: function () {

    if (this.state.marker) {
      this.state.marker.setMap(this.map);
    }
    if (this.map && this.state.marker) {
      var position = new google.maps.LatLng(MarkerStore.pos());
      this.map.panTo(position);}

		return (
			<div className="map" ref="map">

			</div>
		);
	}
});


module.exports = Map;
