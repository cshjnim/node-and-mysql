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
    loadProduct();
})

// display all of the items available for sale 

function loadProduct() {
    connection.query("SELECT * FROOM products", function(err,res) {
        if (err) throw err;
        console.table(res);
        askCustomer(res);
    });
}

// inquire prompt 1. ask them the id of the product 2. how many units of the product

function askCustomer(inventory) {
    inquirer
    .prompt([{
        name: "choice",
        type: "input",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q}",
        validate: function(val) {
            return !isNaN(Val) || val.toLowerCase() === "q";
        }
    }])
    .then(function(val) {
       checkIfWantExit(val.choice);
       var choiceID = parseInt(val.choice);
       var product = checkInventory(choiceID, inventory);

       if (product) {
           askCustomerTwo(product);
       }
       else {
        console.log("That item is not in the inventory");
        loadProduct();
       }
    });
}
// prompt to check if your store has enought of the product to meet customer's request
// results - phrase "insufficient quantity!" or fulfill the customer's order (updating the SQL database & customer's total cost of their purchase)

function askCustomerTwo(product) {
    inquirer
    .prompt([
        {
            type: "input",
            name: "quantity",
            message: "How many would you want to purchase? [Quit with Q}",
            validate: function(val) {
                return val > 0 || val.toLowerCase() === "q";
            }
        }
    ])
    .then(function(val) {
        checkIfWantExit(val.quantity);
        var quantity = parseInt(val.quantity);

        if (quantity > product.stock_quantity) {
            console.log("Insufficient Quantity!");
            loadProduct();
        }
        else {
            makePurchase(product, quantity);
        }
    });
}

function checkIfWantExit(choice) {
    if(choice.toLowerCase() === "q") {
        console.log("Bye now");
        process.exit(0);
    }
}