//Reference: https://docs.mapbox.com/mapbox.js/example/v1.0.0/layers/
L.mapbox.accessToken = 'pk.eyJ1IjoiZWJyYWhpbWthcmFtIiwiYSI6ImNrMXo3bnR3cTBtd2kzY212cDZobjh0YW4ifQ.z2aZQYb-0Vm53QgxZYBgRw';
var layers = document.getElementById('menu-ui');

addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'), 'Base Map', 1);
addLayer(L.mapbox.tileLayer('examples.bike-lanes'), 'Bike Lanes', 2);
addLayer(L.mapbox.tileLayer('examples.bike-locations'), 'Bike Stations', 3);

function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);

    // Create a simple layer switcher that
    // toggles layers on and off.
    var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            this.className = '';
        } else {
            map.addLayer(layer);
            this.className = 'active';
        }
    };

    layers.appendChild(link);
}