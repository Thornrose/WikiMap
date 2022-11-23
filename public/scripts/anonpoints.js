const popup = L.popup();

function onMapClick(e) {
  console.log("+++++++++++ map was clicked 2-anon");
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
