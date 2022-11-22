-- Drop and recreate user favorites table (Example)

DROP TABLE IF EXISTS user_favourites CASCADE;
CREATE TABLE user_favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
);
