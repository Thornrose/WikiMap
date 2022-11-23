/*
 * All routes for points Data are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /api/maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { application } = require('express');
const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const pointsController = require ('../db/controllers/pointsController')

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

router.post('/api/points/:id', pointsController.addPoint);



// Read all points

router.get('/api/points', pointsController.getAll);


// Read One Point

router.get('/api/points/:id', pointsController.getById);

// Update

router.put('/api/points/:id', pointsController.update)

//Delete

router.delete('/api/points/:id', pointsController.remove)

module.exports = router;
