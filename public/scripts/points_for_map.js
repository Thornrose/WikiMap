$(document).ready(function() {
  const mapPath = document.location.pathname;
    $.ajax({
      method: 'GET',
      url: `/api${mapPath}`
    })
    .done((res) => {
      for (let i = 0; i < res.points.length; i++) {
        const lat = res.points[i].latitude;
        const lng = res.points[i].longitude;
        const title = res.points[i].title;
        const description = res.points[i].description;
        const imageURL = res.points[i].image_url;

        L.marker([lat, lng]).addTo(map).bindPopup(`
        <div class="d-flex flex-column mb-3">
          <img src="${imageURL}" class="img-thumbnail">
          <div class="container">
            <span class="border border-5 border-success">${title}</span>
            <span class="border border-2 border-dark">${description}</span>
          </div>
          <div class="container">
          <button type="button" class="btn btn-success">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>`);
      }
    });
  });
