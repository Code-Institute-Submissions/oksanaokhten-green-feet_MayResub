//Code was taken from Resume tutorial and changed for this project needs.

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 51.784854,
            lng: -8.363539
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.879268, lng: -8.517152 },
        { lat: 51.81463, lng: -8.39042 },
        { lat: 51.71010, lng: -8.51517 }
    ];

    var markers = locations.map(function(location, i) {
        var marker = new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });

        /*Code for addListener was taken from https://developers.google.com/maps/documentation/javascript/events and added by my Mentor. */

        marker.addListener("click", () => {
            window.open("https://calendly.com/green-feet/book-a-treatment");
        });

        return marker;
    });

    new MarkerClusterer(map, markers, {
    imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
}