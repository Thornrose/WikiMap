const db = require('../connection');

const mapQueries = function() {
  return db.query(`SELECT * FROM maps LIMIT 10;`)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ",err.message);
    });
};

module.exports = { mapQueries };
