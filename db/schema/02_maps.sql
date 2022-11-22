-- Drop and recreate Maps table

DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  public BOOLEAN NOT NULL DEFAULT TRUE
);
