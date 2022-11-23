/*
 * All routes for maps Data are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /api/maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const addPoint = require('../db/queries/points');
const { getMapByID } = require('../db/queries/mapDBHelper');

// router.get('/', (req, res) => {
//   const query = `SELECT * FROM maps`;
//   console.log(query);
//   db.query(query)
//     .then(data => {
//       const maps = data.rows;
//       res.json({ maps });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });




router.post('/:id/points', (req, res) => {

  const mapID = req.params.id;
  console.log("map id?: ", map_id);
  addPoint({...req.body, map_id: mapID})
  .then(point => {
    res.send(point);
  })
  .catch(err => {
    console.error(err);
    res.send(err)
  });




});

module.exports = router;
