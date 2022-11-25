$(document).ready(function() {
$('#map').on('click', '.edit-button', function() {


  const pointID = document.getElementsByClassName("pointID")[0].innerText;
  const lat = document.getElementsByClassName("pointLatitude")[0].innerText;
  const lng = document.getElementsByClassName("pointLongitude")[0].innerText;


  map.closePopup()
  .openPopup(`
  <div class='popup'>

    <form class='edit_point_form' id='edit_point_form'>
      <input name='point_title' type='text' placeholder='point title'></input>
      <input name='point_description' type='text' placeholder='point description'></input>
      <input name='point_image_url' type='text' placeholder='point image url'></input>
      <input type="hidden" name = "point_latitude" value="<${lat}">
      <input type="hidden" name = "point_longitude" value="${lng}">
      <input type="hidden" name = "point_id" class="edit_form_point_id" value="${pointID}">
      <button type='submit'>ADD</button>
      </form>
    </div>
  `, [lat, lng])
});

});
