var MyMap = React.createClass({
componentDidMount: function() {

	var latLong = new google.maps.LatLng(-47.888723, 444.675360);

	var options = {
		zoom: 2,
		center: latLong
	},
	map = new google.maps.Map(ReactDOM.findDOMNode(this), options),
	marker = new google.maps.Marker({
		map:map,
		animation: google.maps.Animation.BOUNCE,
		position: latLong
	});
},
render: function(){
		return(
			<div id="map"><span></span></div>
		);
	}
});

ReactDOM.render(<MyMap/>, document.getElementById('main'));