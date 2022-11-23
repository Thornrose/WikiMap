const db = require('../connection');

const addFavMap = function(data) {
  return db
    .query(`INSERT INTO user_favourites (user_id, map_id)
    VALUES ($1, $2)
    RETURNING *;`, [data.user_id, data.map_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("error at add favorite: ", err.message);
    });
};


module.exports = { addFavMap };
