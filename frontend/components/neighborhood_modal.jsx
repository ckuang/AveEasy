var React = require('react');
var ApiUtil = require('../util/api_util');
var ApiActions = require('../actions/api_action');
var NeighborhoodStore = require('../stores/neighborhood');


var Neighborhoods = React.createClass({
	getInitialState: function () {
		return {neighborhoods: []};
	},
  _neighborhoodsChanged: function () {
    this.setState({neighborhoods: NeighborhoodStore.all()});
  },
  componentDidMount: function () {
    this.neighborhoodlistener = NeighborhoodStore.addListener(this._neighborhoodsChanged);
  },
  componentWillUnmount: function () {
    this.neighborhoodlistener.remove();
  },
	render: function() {
    var neighborhoods = [];
    for (var x = 0; x < this.state.neighborhoods.length; x++) {
      neighborhoods.push();
    }
    return (
      <section id="modal2" className="modal2 ">
      <ul className="modal2-content">
        <li>Soho</li>
        <li>Fidi</li>
        <li>LES</li>
        <li>East Village</li>
        <li>West Village</li>
        <li>Soho</li>
        <li>Fidi</li>
        <li>LES</li>
        <li>East Village</li>
        <li>West Village</li>
        <li>Soho</li>
        <li>Fidi</li>
        <li>LES</li>
        <li>East Village</li>
        <li>West Village</li>
        <li>Soho</li>
        <li>Fidi</li>
        <li>LES</li>
        <li>East Village</li>
        <li>West Village</li>
      </ul>
      <div onClick={window.hideModal2} className="modal2-screen"></div>
      </section>
  );
	},

});

module.exports = Neighborhoods;
