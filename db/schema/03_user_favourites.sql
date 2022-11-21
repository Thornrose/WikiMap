-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS user_favourites CASCADE;
CREATE TABLE user_favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  maps_id INTEGER REFERENCES maps(id) NOT NULL
);
