const popup = L.popup();

function onMapClick(e) {
  popup

    .setLatLng(e.latlng)
    .setContent(`
      <div class='popup'>
        <form class='new_point_form'>
          <input name='point_title' type='text' placeholder='point title'></input>
          <input name='point_description' type='text' placeholder='point description'></input>
          <input name='point_image_url' type='text' placeholder='point image url'></input>
          <input name='lat' value = '${e.latlng.lat}'></input>
          <input name='long' value = '${e.latlng.lng}'></input>
          <button type='submit' action='post'>ADD</button>
          </form>
        </div>
      `)
    .openOn(map);}


map.on("click", onMapClick);

