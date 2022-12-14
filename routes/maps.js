const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const { getMapByID } = require("../db/queries/mapDBhelper");
const { getAll } = require("../db/queries/mapsDBmodel");
const { addPoint } = require("../db/queries/pointsDBmodel");
const {
  getContributionMaps,
  getFavouriteMaps,
} = require("../db/queries/maps.js");

router.post("/maps/:id/points", (req, res) => {
  addPoint();
});

router.get("/list", (req, res) => {
  const userID = req.session.user_id;

  if (!userID) {
    return res.redirect("/");
  }
  const templateVars = {
    user: userID,
  };
  return res.render("list", templateVars);
});

router.get('/all', (req, res) => {
  const userID = req.session.user_id;
  const templateVars = {
    user: userID
  };
  return res.render('all', templateVars);
});

router.get("/favourite-list", (req, res) => {
  const mapID = req.query;
  const userID = req.session.user_id;
  getFavouriteMaps(userID)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log("this error message is coming from map.js: ", err.message);
    });
});

router.get("/contributions-list", (req, res) => {
  const mapID = req.query;
  const userID = req.session.user_id;
  getContributionMaps(userID)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log("this error message is coming from map.js: ", err.message);
    });
});

router.get('/all-list', (req, res) => {
  getAll()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log("this error message is coming from map.js: ", err.message);
    });
});

router.get("/:id", (req, res) => {
  const mapID = req.params.id;
  const userID = req.session.user_id;
  getMapByID(mapID).then((data) => {
    const templateVars = {
      user: userID,
    };
    res.render("mapView", templateVars);
  });
});

module.exports = router;
