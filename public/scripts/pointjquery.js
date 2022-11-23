
$(() => {
  console.log("Im running")
$('#new_point_form' ).submit(function( event ) {
  console.log("Im running 2")
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});
});
