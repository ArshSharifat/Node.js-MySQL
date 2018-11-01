DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INTEGER(11)  AUTO_INCREMENT NOT NULL,
  item VARCHAR(200) NULL,
  price DECIMAL(6,2) NOT NULL,
  department_name VARCHAR(200) NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, price, department_name, stock_quantity)
VALUES ("legos", 34.99, "toys", 346 ),("dell laptop", 999.99, "electronics", 63 ),("rc airplane", 199.99, "toys", 49 ),
("iPhone", 1199.99, "electronics", 148 ),("screw driver", 9.99, "tools", 488 ),("diapers", 24.99, "baby", 349 ),
("macbook pro", 2299.99, "toys", 25 ),("hammer", 12.99, "tools", 246 ),("baby wipes", 9.99, "baby", 88 ),
("lip stick", 6.99, "beauty", 488 ),("eye cream", 29.99, "beauty", 77 );


SELECT * FROM products;
