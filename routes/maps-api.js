/*
 * All routes for maps Data are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /api/maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const addPoint = require('../db/queries/pointsDBmodel');
const { getMapByID } = require('../db/queries/mapDBhelper');
const mapsController = require ('../db/controllers/mapsController')
const mapsModel = require ('../db/queries/mapsDBmodel')

// Create Point

router.post('/', mapsController.addMap);

// Read all points

router.get('/', mapsController.getAll);


// Read One Point

router.get('/:id', mapsController.getById);

// Update

router.put('/:id', mapsController.update)

//Delete

router.delete('/:id', mapsController.remove)




// router.post('/:id/points', (req, res) => {

//   const mapID = req.params.id;
//   console.log("map id?: ", map_id);
//   addPoint({...req.body, map_id: mapID})
//   .then(point => {
//     res.send(point);
//   })
//   .catch(err => {
//     console.error(err);
//     res.send(err)
//   });




// });

module.exports = router;
