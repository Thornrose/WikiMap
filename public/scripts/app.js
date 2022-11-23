// Client facing scripts here
$(() => {
  // redirect button to favourted and contirubted maps
  $('.fav-link').on('click', function() {
    window.location.href='/maps/list';
  });
});
