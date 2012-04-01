

// Create a div to hold the control.
var controlDiv = document.createElement('DIV');

// Set CSS styles for the DIV containing the control
// Setting padding to 5 px will offset the control
// from the edge of the map.
controlDiv.style.padding = '5px';

// Set CSS for the control border.
var controlUI = document.createElement('DIV');
controlUI.style.backgroundColor = 'white';
controlUI.style.borderStyle = 'solid';
controlUI.style.borderWidth = '2px';
controlUI.style.cursor = 'pointer';
controlUI.style.textAlign = 'center';
controlUI.title = 'Click to set the map to Home';
controlDiv.appendChild(controlUI);

// Set CSS for the control interior.
var controlText = document.createElement('DIV');
controlText.style.fontFamily = 'Arial,sans-serif';
controlText.style.fontSize = '12px';
controlText.style.paddingLeft = '4px';
controlText.style.paddingRight = '4px';
controlText.innerHTML = 'Home';
controlUI.appendChild(controlText);