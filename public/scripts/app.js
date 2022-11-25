// Client facing scripts here
$(() => {
  // redirect button to favourited and contributed maps
  $(".fav-link").on("click", function () {
    window.location.href = "/maps/list";
  });
});
