$(() => {
  const loadMapLists = function() {
    $.ajax('/maps-api', { method: 'GET' })
      .then((mapData) => {
        renderMapLists(mapData);
      });
  };

  loadMapLists()

  const createMapElement = function(maps) {
    // protects the app from attacks using <script> being rendered
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    let $maps =
    `<div class="favouriteLists">
    <header>
    <a>THIS IS MAPS!</a>
    </header>
    </div>`;
  };

  const renderMapLists = function(mapLists) {
    $('#maps-container').empty();

    for (let maps of mapLists) {
      const mapElement = createMapElement(maps);
      $('#maps-container').append(mapElement)
    }
  };

});
