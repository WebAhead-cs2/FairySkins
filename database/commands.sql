BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email INTEGER,
  phonenumber VARCHAR(255),
   password VARCHAR(255)
);
 CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    product_id INTEGER  NOT NULL,
    image VARCHAR(255),
    name VARCHAR(255), 
    price INTEGER,
    category VARCHAR(255)
);



COMMIT;