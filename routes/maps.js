const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getMapByID } = require('../db/queries/mapDBhelper');


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
