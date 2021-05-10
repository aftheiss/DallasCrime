// Creating map object
var ballerMap = L.map("map", {
  center: [32.776665, -96.796989],
  zoom: 11,
});

// Adding tile layer to the map
var lightlayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(ballerMap);

// Our style object
// var mapStyle = {
//   color: "black",
//   fillOpacity: 0,
//   weight: 2

// };


var layers = {
  group2020: new L.LayerGroup(),
  group2019: new L.LayerGroup()
};

// Use this link to get the geojson data.
var link = "dallas_coordinates.json";

function chooseColor(neighborhood) {
  switch (neighborhood) {
  case "Far North Dallas":
    return "navy";
  case "University Park":
    return "darkturquoise";
  case "North Dallas":
    return "navajowhite";
  case "Northeast Dallas":
    return "violet";
  case "East Dallas":
    return "mediumspringgreen";
  case "Lakewood":
    return "darkolivegreen";
  case "Lowest Greenville":
    return "lime";
  case "Henderson Avenue":
    return "dimgray";
  case "Lower Greenville":
    return "slateblue";
  case "Upper Greenville":
    return "gold";
  case "Knox":
    return "orange";
  case "Uptown":
    return "pink";
  case "Oak Lawn":
    return "sienna";
  case "Downtown":
    return "darkslategray";
  case "Deep Ellum":
    return "goldenrod";
  case "Old East Dallas":
    return "peru";
    case "Fair Park":
    return "crimson";
  case "Southeast Dallas":
    return "dodgerblue";
  case "Design District":
    return "cornflowerblue";
  case "North Oak Cliff":
    return "fuchsia";
  case "South Oak Cliff":
    return "darkorange";
  case "Northwest Dallas":
    return "maroon";
  case "West Dallas":
    return "yellow";
  case "Southwest Dallas":
    return "skyblue";
  case "South Dallas":
    return "greenyellow";
  default:
    return "whitesmoke";
  }
}

// Grabbing our Neighborhood GeoJSON data..
d3.json(link).then(function (data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Passing in our style object
    style: function(feature) {
      return {
        color: "black",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
        fillColor: chooseColor(feature.properties.name),
        fillOpacity: 0.5,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          ballerMap.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h1>" + feature.properties.name);
      layer.on('mouseover', function (e) {
          this.openPopup();
      });
      layer.on('mouseout', function (e) {
          this.closePopup();
      });

    }
  }).addTo(ballerMap);
});

// Create an overlays object to add to the layer control
var overlays = {
  "2020": layers.group2020,
  "2019": layers.group2019
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(ballerMap);

// Create a legend to display information about our map
// var info = L.control({
//   position: "bottomright"
// });

// // When the layer control is added, insert a div with the class of "legend"
// info.onAdd = function () {
//   var div = L.DomUtil.create("div", "legend");
//   return div;
// };
// Add the info legend to the map
// info.addTo(ballerMap);

const crimeIcon2020 = L.icon({
  iconUrl: "transparent-crime-icon-thief-icon-5e15e152944fe7.7732321215784922426075.jpg",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [0, 0] // point of the icon which will correspond to marker's location
});

const crimeIcon2019 = L.icon({
  iconUrl: "crime-icon-hat-icon-detective-icon-V4ut3MNS.jpeg",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
});

const myUrl2020 = "https://www.dallasopendata.com/resource/qv6i-rri7.json?year2=2020&$limit=500";
const myUrl2019 = "https://www.dallasopendata.com/resource/qv6i-rri7.json?year2=2019&$limit=500";


d3.json(myUrl2020).then(function (response) {


  for (var i = 0; i < response.length; i++) {

    var geocode = response[i].geocoded_column;

    if (!geocode) { continue };

    var latitude = geocode.latitude;
    var longitude = geocode.longitude;
    var modusOperandi = response[i].mo;
    var category = response[i].nibrs_crime_category;

    if (!modusOperandi || !category || !longitude || !latitude) { continue };

    L.marker([latitude, longitude], { icon: crimeIcon2020 })
    .bindPopup("Modus Operandi: " + modusOperandi + "<br>Category: " + category)
      .addTo(layers.group2020);
  }
});

d3.json(myUrl2019).then(function (response) {


  for (var i = 0; i < response.length; i++) {

    var geocode = response[i].geocoded_column;

    if (!geocode) { continue };

    var latitude = geocode.latitude;
    var longitude = geocode.longitude;
    var modusOperandi = response[i].mo;
    var category = response[i].nibrs_crime_category;

    if (!modusOperandi || !category || !longitude || !latitude) { continue };

    L.marker([latitude, longitude], { icon: crimeIcon2019 })
    .bindPopup("Modus Operandi: " + modusOperandi + "<br>Category: " + category)
    .addTo(layers.group2019);
  }
});

