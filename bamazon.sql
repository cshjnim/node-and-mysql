
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    product_sales DECIMAL(10,2) DEFAULT 0,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("iPad", "Computers", 499.99, 100),
("Jeggings", "Apparels", 29.99, 84),
("LEGO: Princess Castle", "Board Games", 329.99, 25),
("Matrix", "Films", 9.99, 12),
("Levono", "Computers", 999.99, 38),
("Denim Jeans", "Apparels", 39.99, 89),
("Monopoly", "Board Games", 20.39, 58),
("Mad Max", "Films", 19.99, 48),
("Bath Towels", "Necessities", 19.99, 88),
("Earpuff", "Apparels", 9.99, 1);

CREATE TABLE departments(
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