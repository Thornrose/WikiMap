const db = require('../connection');

const addPoint = function(point) {
  return db
    .query(`INSERT INTO points (map_id, latitude, longitude, title, description, image_url
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`, [point.map_id, point.latitude, point.longitude, point.title, point.description, point.image_url])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = { addPoint };
