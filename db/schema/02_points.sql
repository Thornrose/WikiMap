-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS points CASCADE;
CREATE TABLE points (
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INTEGER,
  coordinates INTEGER,
  title VARCHAR(100),
  description VARCHAR(255),
  image TEXT
);
