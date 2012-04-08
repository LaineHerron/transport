var map;
var geocoder;

function initialize() {
    
    var mapDiv = document.getElementById("map_canvas");

    var myOptions = {
        center: new google.maps.LatLng(40.443504, -79.941571),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(mapDiv, myOptions);

    geocoder = new GClientGeocoder();


}
