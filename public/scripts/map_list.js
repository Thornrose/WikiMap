$(() => {
  $.ajax({
    method: 'GET',
    url: '/maps/favourite-list'
  })
    .done((response) => {
       $('#list_of_favourite_maps').empty();

      for (const favouriteMaps of response) {
        $(`<li class="favourite_maps">`).text(favouriteMaps.name).appendTo($('#list_of_favourite_maps'));
      }
    });

  $.ajax({
    method: 'GET',
    url: '/maps/contributions-list'
  })
    .done((response) => {
      $('#list_of_contribution_maps').empty();

      for (const contributionMaps of response) {
        $(`<li class="contributed_maps">`).text(contributionMaps.map_name).appendTo($('#list_of_contribution_maps'));
      }
    });
});
