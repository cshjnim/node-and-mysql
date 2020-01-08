// node JS - mysql & inquire
var mysql = require("mysql");
var inquirer = require("inquire");

// Connect first
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "986680Hj!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
})

// display all of the items available for sale 

// inquire prompt 1. ask them the id of the product 2. how many units of the product

// prompt to check if your store has enought of the product to meet customer's request

// results - phrase "insufficient quantity!" or fulfill the customer's order (updating the SQL database & customer's total cost of their purchase)

