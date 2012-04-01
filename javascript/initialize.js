function initialize() {
    var myOptions = {
        center: new google.maps.LatLng(40.443504, -79.941571),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
				  myOptions);
}