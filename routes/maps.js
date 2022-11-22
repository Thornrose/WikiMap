const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getMapByID } = require('../db/queries/mapDBhelper');


router.get('/:id', (req, res) => {
  const mapID = req.params.id;
  getMapByID(mapID)
  .then((data) => {
    console.log(data);
    console.log(data[0].name);
    const templateVars = {
      mapName: data[0].name
    };
    console.log(templateVars);
    res.render('index', templateVars);
  })

});


module.exports = router;
