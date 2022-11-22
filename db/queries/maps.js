const db = require('../connection');

const getMaps = () => {
  return db.query('SELECT * FROM maps LIMIT 10;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMaps };
