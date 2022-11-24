$(document).ready(function() {
  $('#add-favourite').on('click', () => {
    console.log("fav button clicked");
    const mapPath = document.location.pathname;
    const mapID = mapPath.charAt(mapPath.length-1);
    $.ajax({
      method: 'POST',
      url: '/api/maps/favourites',
      data: { mapID }
    })
  });
});
