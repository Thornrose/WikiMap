// Delete Point Script
function onPopupOpen(id) {
  $.ajax({
    method: "DELETE",
    url: `/api/points/${id}`,
  }).then(() => {
    window.location.reload();
  });
}
