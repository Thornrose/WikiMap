var map = L.map("map").setView([49.2, -123.0], 13);
var marker = L.marker([49.2, -123.0]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
