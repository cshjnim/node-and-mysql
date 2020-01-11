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

function managerMenu() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        managerOptions(res);
    });
}

function managerOptions(products) {
    inquirer
    .prompt({
        type: "list",
        name: "choice",
        choiceS: ["View Products for Sale", "View Low Inventory", "Add New Product", "Quit"]
        message: "What do you want to check?"
    })
    .then(function(val){
        switch(val.choice){
            case "View Products for Sale":
                console.table(products);
                managerMenu();
                break;
            case "View Low Inventory":
                loadLowInventory();
                break;
            case "Add to Inventory":
                addInventory(products);
                break;
            case "Add New Product":
                addNewProduct(products);
                break;
            default:
                console.log("Bye-now!");
                process.exit(0);
                break;
        }
    });
}

// view products for sale function

// view low inventory function


// add to inventory function

// add new product function