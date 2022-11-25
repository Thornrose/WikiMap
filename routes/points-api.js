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
const pointsModel = require ('../db/queries/pointsDBmodel')
// Create Point

router.post('/', pointsController.addPoint);

// Read all points

router.get('/', pointsController.getAll);


// Read One Point

router.get('/:id', pointsController.getById);

// Update

router.put('/:id', pointsController.update);

//Delete

router.delete('/:id', pointsController.remove)

module.exports = router;
