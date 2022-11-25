// Script for pop up for anonymous users
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Login to add points to this map!")
    .openOn(map);
}

map.on("click", onMapClick);
