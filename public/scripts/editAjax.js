
$('#map').on('submit', '#edit_point_form', function(event) {
  event.preventDefault();

  const formContents = $(this).serialize();


  const pointID = document.getElementsByClassName("edit_form_point_id")[0].getAttribute("value");

  $.ajax({
    method: 'PUT',
    url:`/api/points/${pointID}`, // trying to use point id here - may need to pull from form, hardcoding for now
    data: formContents
  }).then((result)=>{
    window.location.reload()
  })

});
