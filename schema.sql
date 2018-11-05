DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INTEGER(11)  AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(200) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  department_name VARCHAR(200),
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;