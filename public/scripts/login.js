// Login Script
$(() => {
  $("#login_form").submit(function (e) {
    e.preventDefault();
    $.post(
      "users/login",
      {
        usernumber: $(".usernumber").val(),
      },
      function (data, status) {
        if (status === "success") {
          const url = "http://localhost:8080/maps/1";
          $(location).attr("href", url);
        }
      }
    );
  });
});
