-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS user_contributions CASCADE;
CREATE TABLE user_contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL
);
