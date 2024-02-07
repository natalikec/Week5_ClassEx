mapboxgl.accessToken = 'pk.eyJ1IjoibmF0a2VjIiwiYSI6ImNscjZudnpsdjJhcm8ya21jMXJuY29iYWwifQ.KonIboWryT9OOwjzC-0GTg'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-79.398007, 43.660335], // starting position [lng, lat]
    zoom: 12, // starting zoom
});

map.on('load', () => { // after everything has been loaded, this will happen
    //the .on -> adds a listener = listening out for our map to be loaded. everything after the curly brackets will happen after the maps has been loaded.
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {  // source id (the first parameter), then in the backets you have to have the type of data and the source
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }// instead of havign all the data here, link a data source to have it be less messy/more efficient. Get URL from hithub
                }
            ]
        }
    });
    map.addLayer({ //to visualize a layer from the added source
        'id': 'uoft-pnt', //the layer needs a unique id 
        'type': 'circle',// this will be different depending on type of data source
        'source': 'uoft-data',// use id used in the add source above
        'paint': { // these parameters are different based on the type
            'circle-radius': 6,
            'circle-color': '#B42222'
        }//this doesn't have to be in this positon in the javascript, can be under a button click or hover. currently this is in the load. 
    });
});