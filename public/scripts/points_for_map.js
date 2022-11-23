$(document).ready(function() {
    $.ajax({
      method: 'GET',
      url: '/api/maps/3'
    })
    .done((res) => {
      console.log("ajax response: ", res);
      console.log("point id?: ", res.points[0].id);
      for (let i = 0; i < res.points.length; i++) {
        const lat = res.points[i].latitude;
        const lng = res.points[i].longitude;
        const title = res.points[i].title;
        const description = res.points[i].description;
        const imageURL = res.points[i].image_url;

        L.marker([lat, lng]).addTo(map).bindPopup("<b>testing....</b>");
      }
    });
  });
