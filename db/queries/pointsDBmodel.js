const db = require('../connection');

const addPoint = function(point) {
  return db
    .query(`INSERT INTO points (map_id, user_id, latitude, longitude, title, description, image_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`, [point.map_id, point.user_id, point.latitude, point.longitude, point.title, point.description, point.image_url])
    .then((result) => {
      return result.rows[0];
    })





    .catch((err) => {
      console.log(err.message);
    });
  }


const getAll = () => {
  return db
    .query('SELECT * FROM points')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM points WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update =  ( title, description, imageURL, latitude, longitude, pointID) => {
  console.log("made it to the db query");
  return db
    .query(
      'UPDATE points SET title = $1, description = $2, image_url = $3 , latitude = $4 , longitude =$5  WHERE points.id = $6 RETURNING *',
      [ title, description, imageURL, latitude, longitude , pointID]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM points WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { addPoint, getAll, getById, update, remove };


