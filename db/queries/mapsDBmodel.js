const db = require('../connection');

const addMap = function(map) {
  return db
    .query(`INSERT INTO maps (map_id, owner_id, name,
    VALUES ($1, $2, $3, )
    RETURNING *;`, [map.map_id, map.owner_id, map.name ])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getAll = () => {
  return db
    .query('SELECT * FROM maps')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM maps WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update =  (  owner_id, name, mapID) => {
  return db
    .query(
      'UPDATE points SET owner_id = $1, name = $2, , WHERE mapID = $3 RETURNING *',
      [ owner_id, name, public, mapID]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM maps WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { addMap, getAll, getById, update, remove };