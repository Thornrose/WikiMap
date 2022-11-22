-- Drop and recreate user contributions table

DROP TABLE IF EXISTS user_contributions CASCADE;
CREATE TABLE user_contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  point_id INTEGER REFERENCES points(id) ON DELETE CASCADE
);
