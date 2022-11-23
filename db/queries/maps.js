const db = require('../connection');

const contributionMapQueries = function(contribution) {
  return db
    .query(`SELECT maps.name AS map_name, user_id AS userID, users.name AS user_name FROM user_contributions
    JOIN users ON user_id = users.id
    JOIN points ON point_id = points.id
    JOIN maps ON map_id = maps.id
    WHERE users.id = $1
    GROUP BY maps.name, user_contributions.user_id, users.name;
    `, [contribution])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ", err.message);
    });
};

const favouriteMapQueries = function(favourite) {
  return db
    .query(`SELECT maps.name AS name, user_id AS user_id, users.name AS user FROM user_favourites
             JOIN maps ON map_id = maps.id
            JOIN users ON user_id = users.id
            WHERE user_id = $1
            ;`, [favourite])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ", err.message);
    });
};



module.exports = { contributionMapQueries, favouriteMapQueries };
