const db = require('../connection');

const addPoint = function(point) {
  return db
    .query(`INSERT INTO points (map_id, coordinates, title, description, image_url
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`, [point.map_id, point.coordinates, point.title, point.description, point.image_url])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = { addPoint };
