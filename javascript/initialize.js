var map;
var geocoder;
var chicago = new google.maps.LatLng(41.850033, -87.6500523);



function initialize() {
    
    var mapDiv = document.getElementById("map_canvas");

    var myOptions = {
        center: new google.maps.LatLng(40.443504, -79.941571),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(mapDiv, myOptions);

    geocoder = new GClientGeocoder();


    // Create the DIV to hold the control and call the HomeControl() constructor
    // passing in this DIV.
    var homeControlDiv = document.createElement('DIV');
    var homeControl = new HomeControl(homeControlDiv, map);
    
    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BUTTON_CENTER].push(homeControlDiv);

}
