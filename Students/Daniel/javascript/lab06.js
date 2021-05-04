// from key.js
const accessToken = leaf_key();
console.log(accessToken);

var mymap = L.map('mapid').setView([34.87, -120.41], 13);



var marker = L.marker([34.87, -120.41]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");


axios.get('https://jsonplaceholder.typicode.com/users', {

  })
  .then((response) => {
      processUsers(response);
  }, (error) => {
    console.log(error);
  });

  function processUsers(data){
    var i;
    console.log("ran");
    console.log(data["data"].length);
    for (i = 0; i < data["data"].length-1; i++){
        console.log(data["data"][i]["address"]["geo"]["lat"]);
        var marker = L.marker([data["data"][i]["address"]["geo"]["lat"],data["data"][i]["address"]["geo"]["lng"]]).addTo(mymap);

    }
    data = data["data"];
    console.log(data[0]);
    // console.log(data.findIndex(-37.3159));
    console.log(typeof(data));
  }

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var popup = L.popup();




// var circle = L.circle([34,-120], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([34.87, -120.41])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);


    // function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    // }
    
    // mymap.on('click', onMapClick);




// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);



