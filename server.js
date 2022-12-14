// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2", "key3"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const mapsApiRoutes = require("./routes/maps-api");
const pointsApiRoutes = require("./routes/points-api");
const usersRoutes = require("./routes/users");
const mapsRoutes = require("./routes/maps");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/maps", mapsApiRoutes);
app.use("/api/points", pointsApiRoutes);
app.use("/maps", mapsRoutes);
app.use("/users", usersRoutes);
app.use("/users/1", usersRoutes);
app.use("/users/login/1", usersRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const user = req.session.user_id;
  if (!user) {
    const templateVars = { user: null };
    return res.render("index", templateVars);
  }
  const templateVars = { user };
  return res.render("index", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
