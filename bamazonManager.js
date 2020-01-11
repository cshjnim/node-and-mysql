// node JS - sql & function
var mysql = require ("mysql");
var inquirer = require ("inquirer");
require("console.table");

//MySQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "986680Hj!",
    database: "bamazon"
});

connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack);
    }
    managerMenu();
})

// list a set of menu options (view procuts for sale, view low inventory, add to inventory, add new product)

// view products for sale function

// view low inventory function

// add to inventory function

// add new product function