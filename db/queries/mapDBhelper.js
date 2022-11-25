//
const db = require("../connection");

const getMapByID = function (id) {
  return db
    .query(
      `SELECT * FROM maps
    WHERE id = $1
    ;`,
      [id]
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getMapByID, getContributionMaps, getFavouriteMaps };
