$(document).ready(function() {
  $('#add-favourite').on('click', () => {
    const mapPath = document.location.pathname;
    const mapID = mapPath.charAt(mapPath.length-1);
    console.log(mapID);
    $.ajax({
      method: 'POST',
      url: '/api/maps/favourites',
      data: { mapID }
    })
    .then(() => {
      console.log('fav button has been clicked');
    });
  });
});
