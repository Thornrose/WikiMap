$(() => {

    $.ajax({
      method: 'GET',
      url: '/maps/list-api'
    })
    .done((response) => {
      console.log("the response from ajax: ", response)
      $('#list_of_favourite_maps').empty();
      $('#list_of_contribution_maps').empty();

      for(const maps of response) {
        $(`<li class="favourite_maps">`).text(maps.name).appendTo($('#list_of_favourite_maps'));
        // $(`<li class="maps">`).text(maps.owner_id).appendTo($('#list_of_all_maps'));
      }
      for(const maps of response) {
        $(`<li class="contributed_maps">`).text(maps.name).appendTo($('#list_of_contribution_maps'));


    });


  // const loadMapLists = function() {
  //   $.ajax('/list', { method: 'GET' })
  //     .then((mapData) => {
  //       console.log('yeah?')
  //       console.log("is this going through?", mapData);
  //       renderMapLists(mapData);
  //     })
  //     .catch((err) => {
  //       console.log("this error message is coming from map.js: ",err.message);
  //     });
  // };

  // loadMapLists()

  // const createMapElement = function(maps) {
  //   protects the app from attacks using <script> being rendered
  //   const escape = function(str) {
  //     let div = document.createElement("div");
  //     div.appendChild(document.createTextNode(str));
  //     return div.innerHTML;
  //   };

  //   let $maps =
  //   `<div>
  //   <header>
  //   please render this text
  //   <a>THIS IS ${maps}!</a>
  //   </header>
  //   </div>`;

  //   return $maps;
  // };

  // const renderMapLists = function(mapLists) {
  //   $('#list_of_all_maps').empty();
  //   console.log("is this rendering?: ",mapLists)

  //   // for (let maps of mapLists) {
  //     const mapElement = createMapElement(mapsLists);
  //     $('#list_of_all_maps').append(mapElement)
  //   }


});
