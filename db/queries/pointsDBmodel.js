// Points API DB Model
const db = require("../connection");
// Crud functions
// Create
const addPoint = function (point) {
  return db
    .query(
      `INSERT INTO points (map_id, user_id, latitude, longitude, title, description, image_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`,
      [
        point.map_id,
        point.user_id,
        point.latitude,
        point.longitude,
        point.title,
        point.description,
        point.image_url,
      ]
    )
    .then((result) => {
      return result.rows[0];
    })

    .catch((err) => {
      console.log(err.message);
    });
};
// Read All
const getAll = () => {
  return db
    .query("SELECT * FROM points")
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};
//Read One
const getById = (id) => {
  return db
    .query("SELECT * FROM points WHERE id = $1", [id])
    .then((data) => data.rows[0])
    .catch((err) => console.error(err.stack));
};
// Update
const update = (title, description, imageURL, latitude, longitude, pointID) => {
  return db
    .query(
      "UPDATE points SET title = $1, description = $2, imageURL = $3 , latitude = $4 , longitude =$5  WHERE pointid = $6 RETURNING *",
      [title, description, imageURL, latitude, longitude, pointID]
    )
    .then((data) => data.rows[0])
    .catch((err) => console.error(err.stack));
};
// Delete
const remove = (id) => {
  return db
    .query("DELETE FROM points WHERE id = $1", [id])
    .then((data) => data.rows)
    .catch((err) => console.error(err.stack));
};

module.exports = { addPoint, getAll, getById, update, remove };
