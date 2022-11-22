-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS points CASCADE;
CREATE TABLE points (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER REFERENCES maps(id) NOT NULL,
  coordinates VARCHAR(50),
  title VARCHAR(100),
  description VARCHAR(255),
  image_url TEXT
);
