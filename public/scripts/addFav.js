$(document).ready(function() {
  $('#add-favourite').on('click', () => {
    const mapPath = document.location.pathname;
    const mapID = mapPath.charAt(mapPath.length-1);
    $.ajax({
      method: 'POST',
      url: '/api/maps/favourites',
      data: { mapID }
    })
  });
});
