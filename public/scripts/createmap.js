// Create New Map Script
$(document).ready(function () {
  $(".create-map").on("click", () => {
    $.ajax({
      method: "POST",
      url: "/api/maps/",
    }).then((result) => {
      window.location.href = result;
    });
  });
});
