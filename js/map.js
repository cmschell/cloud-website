function createSearchBox(mapObj, type) {
    // Create the search box and link it to the UI element.
    window.input = document.getElementById(type);
    window.searchBox = new google.maps.places.SearchBox(window.input);

    mapObj.controls[google.maps.ControlPosition.TOP_LEFT].push(window.input);
        
    // Bias the SearchBox results towards current map's viewport.
    mapObj.addListener('bounds_changed', function() {
        window.searchBox.setBounds(mapObj.getBounds());
    });

    // Bias the SearchBox results towards current map's viewport.
    mapObj.addListener('bounds_changed', function() {
        window.searchBox.setBounds(mapObj.getBounds());
    });
}

function createMapObj(type) {
    var lat = (document.location.pathname.indexOf('/assignments/two.html') > -1) ? 32.7157 : 32.809906;
    var long = (document.location.pathname.indexOf('/assignments/two.html') > -1) ? -117.1611 : -117.148945;
    var mapId = (document.location.pathname.indexOf('/assignments/two.html') > -1) ? "map": type;

    var map = new google.maps.Map(document.getElementById(mapId), {
        center: {
            lat: lat,
            lng: long
        },
        zoom: 14, 
        mapTypeId: type
        }
    );

    var myLatLng = {lat: lat, lng: long};

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Pin'
    });

    return map;

}

function createMarker(mapObj) {

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: mapObj,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        mapObj.fitBounds(bounds);
    });

}

function initAutocomplete() {

    // Create different maps
    if (document.location.pathname.indexOf('/assignments/two.html') > -1) {
        var map = createMapObj('roadmap','map');
    } else {
        var satellite = createMapObj('satellite');
        var hybrid = createMapObj('hybrid');

    }

    if (document.location.pathname.indexOf('/assignments/two.html') > -1) {
        createSearchBox(map, 'pac-input');
    } else {
        createSearchBox(satellite, 'pac-input-sattelite');
        createSearchBox(hybrid, 'pac-input-hybrid');

    }

    if (document.location.pathname.indexOf('/assignments/two.html') > -1) {
        createMarker(map);               
    } else {
        createMarker(satellite);
        createMarker(hybrid);
    }
}