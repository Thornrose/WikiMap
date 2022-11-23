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
const { getPointsByMap } = require('../db/queries/pointDBHelper');
const mapsController = require ('../db/controllers/mapsController');
const mapsModel = require ('../db/queries/mapsDBmodel');
const { addFavMap } = require ('../db/queries/addFavourite');

// Create Point

router.post('/', mapsController.addMap);

// Read all points

router.get('/', mapsController.getAll);


// Read One Point

// router.get('/:id', mapsController.getById);

// Update

router.put('/:id', mapsController.update);

//Delete

router.delete('/:id', mapsController.remove);


router.get('/:id', (req, res) => {
  const mapID = req.params.id;
  getPointsByMap(mapID)
  .then((points) => {
    res.json({ points });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
    });
});

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

router.post('/favourites', (req, res) => {
  console.log("body: ", req.body.mapID);
  console.log("userID: ", req.session.user_id);
  const queryVars = {
    user_id: req.session.user_id,
    map_id: req.body.mapID
  }
  addFavMap(queryVars)
  .then((queryRes) => {
    console.log(queryRes);
  })
})

module.exports = router;
