$(document).ready(function() {
  $('.create-map').on('click', () => {
    $.ajax({
      method: 'POST',
      url: '/api/maps/',
    })
    .then ((data) =>{
      window.location.href='/maps/3';
    })
  });
});
