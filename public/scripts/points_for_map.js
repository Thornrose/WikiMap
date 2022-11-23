$(document).ready(function() {
  const mapPath = document.location.pathname;
    $.ajax({
      method: 'GET',
      url: `/api${mapPath}`
    })
    .then((res) => {
      console.log("+++++++++++++", res.points);
      console.log("response is: ", res);
      for (let i = 0; i < res.points.length; i++) {
        const lat = res.points[i].latitude;
        const lng = res.points[i].longitude;
        const title = res.points[i].title;
        const description = res.points[i].description;
        const imageURL = res.points[i].image_url;

        const pointMarker = L.marker([lat, lng]).addTo(map);
        pointMarker.bindPopup(`
        <div class="d-flex flex-column mb-3">
          <img src="${imageURL}" class="img-thumbnail">
          <span class="popup-text border border-5 border-success">${title}</span>
          <span class="popup-text border border-2 border-dark">${description}</span>
          <div class="container">
            <button type="button" class="btn btn-success">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
        `);
      }
    });
  });
