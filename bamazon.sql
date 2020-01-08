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

CREATE TABLE products (
    position INT NOT NULL,
    item_id VARCHAR(100) NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (position)
);

SELECT * FROM products;

/*Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).*/

INSERT INTO products (product_name, department_name, price, stock_quntity)
VALUES 
("iPad", "Computers", 499.99, 100),
("Jeggings", "Apparels", 29.99, 84),
("LEGO: Princess Castle", "Board Games", 329.99, 25),
("Matrix", "Films", 9.99, 12),
("Levono", "Computers", 1099.99, 38),
("Denim Jeans", "Apparels", 39.99, 89),
("Monopoly", "Board Games", 20.39, 58),
("Mad Max", "Films", 19.99, 48),
("Bath Towels", "Necessities", 19.99, 88),
("Earpuff", "Apparels", 9.99, 1);

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    over_head_costs DECIMAL(10,2) NOT NULL,
    primary key(department_id)
);

SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs)
VALUES
("Computers", 200),
("Apparels", 50),
("Necessities", 200),
("Films", 40),
("Board Games", 0);