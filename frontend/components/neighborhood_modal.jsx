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
  handleClick: function (e) {
    ApiActions.updateSearchLocation(e.currentTarget.innerHTML);
    window.hideModal2();
    this.setState({neighborhoods: []});
  },
	render: function() {
    var neighborhoods = [];
    for (var x = 0; x < this.state.neighborhoods.length; x++) {
      neighborhoods.push(<li className="neighborhood-li"onClick ={this.handleClick} key={x}>{this.state.neighborhoods[x]}</li>);
    }
    return (
      <section id="modal2" className="modal2 ">
      <ul className="modal2-content">
        {neighborhoods}
      </ul>
      <div onClick={window.hideModal2} className="modal2-screen"></div>
      </section>
  );
	},

});

module.exports = Neighborhoods;
