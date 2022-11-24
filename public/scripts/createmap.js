$(document).ready(function() {
  $('.create-map').on('click', () => {
    $.ajax({
      method: 'POST',
      url: '/api/maps/',
    })
  });
});
