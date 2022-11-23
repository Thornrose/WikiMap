const db = require('../connection');

const contributionMapQueries = function() {
  return db
    .query(`SELECT * FROM user_contributions
            JOIN points ON point_id = points.id
            JOIN users ON user_id = users.id
            WHERE user_id = 1
            ;`)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ", err.message);
    });
};

const favouriteMapQueries = function() {
  return db
    .query(`SELECT * FROM user_favourites
             JOIN maps ON map_id = maps.id
            JOIN users ON user_id = users.id
            WHERE user_id = 1
            ;`)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ", err.message);
    });
};



module.exports = { contributionMapQueries, favouriteMapQueries };
