$(() => {

  const loadMapLists = function() {
    $.ajax('/list', { method: 'GET' })
      .then((mapData) => {
        console.log('yeah?')
        console.log("is this going through?", mapData)
        renderMapLists(mapData);
      });
      .catch((err) => {
        console.log("this error message is coming from map.js: ",err.message);
      });
  };

  loadMapLists()

  const createMapElement = function(maps) {
    // protects the app from attacks using <script> being rendered
    // const escape = function(str) {
    //   let div = document.createElement("div");
    //   div.appendChild(document.createTextNode(str));
    //   return div.innerHTML;
    // };

    let $maps =
    `<div class="favouriteLists">
    <header>
    please render this text
    <a>THIS IS ${maps}!</a>
    </header>
    </div>`;

    return $maps;
  };

  const renderMapLists = function(mapLists) {
    $('#list_of_all_maps').empty();
    console.log(mapLists)

    // for (let maps of mapLists) {
      const mapElement = createMapElement(mapsLists);
      $('#list_of_all_maps').append(mapElement)
    }


});
