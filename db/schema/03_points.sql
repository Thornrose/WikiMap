-- Drop and recreate Points table

DROP TABLE IF EXISTS points CASCADE;
CREATE TABLE points (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE,
  latitude VARCHAR(100),
  longitude VARCHAR(100),
  title VARCHAR(100),
  description VARCHAR(255),
  image_url TEXT

);
