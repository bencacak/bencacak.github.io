mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW5jMzUiLCJhIjoiY2pzMjhwcnQ4MDJkazN5cXp1ZWNpaG1ncyJ9.gba9wGkxQHKfiUQMVyYGww';

	let geojson = {
    "type": "FeatureCollection",
    "features": [{
         "type": "Feature",
         "geometry": {
             "type": "Point",
             "coordinates": [-122.651875, 45.634957]
         },
         "properties": {
             "title": "Clark College Main Campus",
             "description": "Vancouver, WA",
             "url": '#mainCampus'
         }
     },
     {
         "type": "Feature",
         "geometry": {
         "type": "Point",
         "coordinates": [-122.482128, 45.616178]
        },
         "properties": {
             "title": "Clark College at Columbia Tech Center",
             "description": "Camas, WA",
             "url": '#ctc'
         }
     },
     {
         "type": "Feature",
         "geometry": {
         "type": "Point",
         "coordinates": [-122.635336, 45.733324]
        },
         "properties": {
             "title": "Clark College at WSU Vancouver",
             "description": "Salmon Creek, WA",
             "url": '#ccw' }
         },
         {
         "type": "Feature",
         "geometry": {
             "type": "Point",
             "coordinates": [-122.670603, 45.625599]
         },
         "properties": {
             "title": "Clark College Economic and Community Development",
             "description": "Downtown Vancouver, WA",
             "url": '#cce'
         }
     },
     {
         "type": "Feature",
         "geometry": {
         "type": "Point",
         "coordinates": [-122.685821, 45.816102]
        },
         "properties": {
             "title": "Clark College at Boschma Gardens",
             "description": "Ridgefield, WA",
             "url": '#boschma'
         }
     },
     {
         "type": "Feature",
         "geometry": {
         "type": "Point",
         "coordinates": [-121.463970, 45.712855]
        },
         "properties": {
             "title": "Clark College in the Gorge",
             "description": "Bingen, WA",
             "url": '#ccg'
         }
     }]
}; 


let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/benjaminc35/cjsmlragz1ecu1fpfrpdxejvc',

center: [-122.107455, 45.714900], // starting position [lng, lat]
zoom: 8, // starting zoom
});

//add fullscreen mode to map

map.addControl(new mapboxgl.FullscreenControl());


// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

// add markers to map
    geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        let el = document.createElement('div');
        el.className = 'marker';


        el.addEventListener('click', function() {
            map.flyTo({
                center: marker.geometry.coordinates, 
                zoom: 16
            });
            window.location = marker.properties.url;
            $('button').delay(3000).fadeIn(1000);
        });

        

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
                .setHTML(`<h3>${marker.properties.title}</h3><h4>${marker.properties.description}</h4>`))
            .addTo(map);


    });



//jQuery

   $(document).ready(function(){

      // zoom out and reset center with jQuery
      $('button').on('click', function() {
          map.setZoom(8);
          map.setCenter([-122.107455, 45.714900]);

      })



   }); 