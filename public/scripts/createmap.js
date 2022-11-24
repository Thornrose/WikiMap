$(document).ready(function() {
  $('.create-map').on('click', () => {
    $.ajax({
      method: 'POST',
      url: '/api/maps/',
    })
    .then((result) => {
      console.log("AJAX result:", { result });
      window.location.href = result;
    })
  });
});
