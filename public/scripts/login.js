// Login Script
$(() => {
  $("#login_form").submit(function (e) {
    e.preventDefault();
    console.log("it worked!");
    $.post(
      "users/login",
      {
        usernumber: $(".usernumber").val(),
      },
      function (data, status) {
        console.log(status);
        if (status === "success") {
          const url = "http://localhost:8080/maps/1";
          $(location).attr("href", url);
        }
      }
    );
  });
});
