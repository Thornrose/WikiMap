const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getMapByID } = require('../db/queries/mapDBhelper');
const { addPoint } = require('../db/queries/pointsDBmodel')



router.post('/maps/:id/points', (req, res) => {

  addPoint()

})

router.get('/list', (req, res) => {
  const mapID = req.query;
  const userID = req.session.user_id;
  mapQueries()
    .then(data => {
      console.log(data)
      const templateVars = {
        mapName: data[0].name,
        user: userID
      };
      res.render('list', templateVars);
      // res.json({ maps });
    })
    .catch((err) => {
      console.log("this error message is coming from map.js: ",err.message);
    });
});

router.get('/:id', (req, res) => {
  const mapID = req.params.id;
  const userID = req.session.user_id;
  getMapByID(mapID)
  .then((data) => {
    const templateVars = {
      mapName: data[0].name,
      user: userID
    };
    res.render('mapView', templateVars);
  })
});

module.exports = router;
