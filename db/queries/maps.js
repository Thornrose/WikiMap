// Queries for listing favourites and contributed to maps
const db = require("../connection");

const contributionMapQueries = function (contribution) {
  return db
    .query(
      `SELECT maps.id AS map_name, user_id AS userID, users.name AS user_name
    FROM users
    JOIN maps ON users.id = owner_id
    JOIN points ON maps.id= map_id
    WHERE points.user_id = $1
    GROUP BY maps.id, points.user_id, users.name;
    `,
      [contribution]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ", err.message);
    });
};

const favouriteMapQueries = function (favourite) {
  return db
    .query(
      `SELECT maps.id AS name, user_id AS user_id, users.name AS user FROM user_favourites
            JOIN maps ON map_id = maps.id
            JOIN users ON user_id = users.id
            WHERE user_id = $1
            ;`,
      [favourite]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      console.log("this error message is coming from query: ", err.message);
    });
};

module.exports = { contributionMapQueries, favouriteMapQueries };
