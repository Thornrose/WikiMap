const popup = L.popup();

function onMapClick(e) {
  console.log("+++++++++++ map was clicked 2-anon");
    popup
        .setLatLng(e.latlng)
        .setContent("Login to add points to this map!")
        .openOn(map);
}

map.on('click', onMapClick);
