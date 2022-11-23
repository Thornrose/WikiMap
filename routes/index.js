const express = require('express');

const pointsRoutes = require('./points-api');

const router = express.Router();

// // RENDERING ROUTES
// router.use('/', IndexRoutes);

// // AUTHENTICATION ROUTES
// router.use('/api/auth', AuthRoutes);

// CRUD REST API FRUITS ROUTES
router.use('/api/points', pointsRoutes);

// Catch all route
router.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

module.exports = router;
