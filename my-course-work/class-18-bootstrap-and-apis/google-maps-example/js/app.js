$(document).ready(function(){

	var map;

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 47.7127, lng: -74.0059},
			zoom: 8
		});
	}
initMap()


})