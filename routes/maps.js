const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getMapByID } = require('../db/queries/mapDBhelper');
const { addPoint } = require('../db/queries/pointsDBmodel');
const { contributionMapQueries, favouriteMapQueries } = require('../db/queries/maps.js');



router.post('/maps/:id/points', (req, res) => {

  addPoint();

});

router.get('/list', (req, res) => {
  const mapID = req.query;
  const userID = req.session.user_id;
  if (!userID) {
    return res.redirect('/');
  }
  const templateVars = {
    user: userID
  };
  return res.render('list', templateVars);
});

router.get('/list-api', (req, res) => {
  const mapID = req.query;
  const userID = req.session.user_id;
  contributionMapQueries()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log("this error message is coming from map.js: ", err.message);
    });

    favouriteMapQueries()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log("this error message is coming from map.js: ", err.message);
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
    });
});

module.exports = router;
