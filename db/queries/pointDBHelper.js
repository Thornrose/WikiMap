const db = require('../connection');

const getPointsByMap = function(mapID) {
  return db
    .query(`SELECT * FROM points
    WHERE map_id = $1
    ;`, [mapID])
    .then(data => {
      return data.rows;
    });
}


module.exports = { getPointsByMap };
