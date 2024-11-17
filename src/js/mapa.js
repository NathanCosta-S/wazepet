var map = L.map("map").setView([-22.2195, -49.9497], 13);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


var neighborhoods = [
  {
    coords: [-22.211518808745954, -49.950987669317485],
    text: "<b>Cobasi Marília</b><br>Av. Sampaio Vidal, 1225",
  },
  {
    coords: [-22.23042472134207, -49.92297136319723],
    text: "<b>Terminal Rodoviário</b><br>Av. Carlos Artêncio, 1001",
  },
  {
    coords: [-22.220583533416292, -49.94832997092486],
    text: "<b>Museu de Paleontologia</b><br>Av. Sampaio Vidal, 245",
  },
  {
    coords: [-22.22383480698206, -49.93388641902097],
    text: "<b>Esmeralda Shopping</b><br>Av Das Esmeraldas, 701",
  },
];


neighborhoods.forEach(function (neighborhood) {
  var marker = L.marker(neighborhood.coords).addTo(map);
  marker.bindPopup(neighborhood.text);
});
