/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { request } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/1', (req, res) => {
  res.render('user_profile');
});

router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;

  return res.redirect('/');
});

router.post('/login', (req, res) => {
  console.log("body: ", req.body);

  req.session.user_id = req.body.usernumber;
  console.log(req.session.user_id);
  return res.redirect('/');
});

module.exports = router;
