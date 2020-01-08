/* create database called "bamazon"*/

DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

/* create a table inside of that database called 'products'*/
/* The products table should have each of the following columns:
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)*/

CREATE TABLE product (
    position INT NOT NULL,
    item_id VARCHAR(100) NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (position)
);

/*Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).