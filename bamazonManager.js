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
        choiceS: ["View Products for Sale", "View Low Inventory", "Add New Product", "Quit"],
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
function loadLowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function(err,res) {
        if (err) throw err;
        console.table(res);
        managerMenu();
    });
}

// add to inventory function

function addInventory(inventory) {
    console.table(inventory);
    inquirer
    .prompt([
        {
            type: "input",
            name: "choice",
            message: "What is the ID of the item you would like to add?",
            validate: function(val) {
                return !isNaN(val);
            }
        }
    ])
    .then(function(val) {
        var choiceId = parseInt(val.choice);
        var product = checkInventory(choiceId, inventory);

        if (product) {
            promptManagerForQuantity(product);
        }
        else {
            console.log("that item is not in the inventory.");
            managerMenu();
        }
    });
}

function promptManagerForQuantity(product) {
    inquirer
    .prompt([
        {
            type: "input",
            name: "quantity",
            message: "How many?",
            validate: function(val) {
                return val > 0;
            }
        }
    ])
    .then(function(val) {
        var quantity = parseInt(val.quantity);
        addQuantity(product,quantity);
    });
}

function addQuantity(product,quantity) {
    connection.query(
        "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
        [product.stock_quantity + quantity, product.item_id],
        function(err, res) {
            console.log("Successfully added " + quantity + " " + product.product_name +"");
            managerMenu();
        }
    );
}

// add new product function

function addNewProduct() {
    getDepartments(function(err, departments) {
        getProductInfo(departments).then(insertNewProduct);
    });
}

function getProductInfo(departments) {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "product_name",
            message: "What is the name of the product to add?"
        },
        {
            type: "list",
            name: "department_name",
            choices: getDepartmentNames(departments),
            message: "Which department of your adding product?"
        },
        {
            type: "input",
            name: "price",
            message: "How much does it cost?",
            validate: function(val) {
                return val > 0;
            }
        },
        {
            type: "input",
            name: "quantity",
            message: "How many do we have?",
            validate: function(val) {
                return !isNaN(val);
            }
        }
    ]);
}

// add new product to Database

function insertNewProduct(val) {
    connection.query(
        "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)",
        [val.product_name, val.department_name, val.price, val.quantity],
        function(err, res) {
            if (err) throw err;
            console.log(val.product_name + " ADDED TO BAMAZON!");
            managerMenu();
        }
    );
}

function getDepartments(cb) {
    connection.query("SELECT * FROM departments", cb);
}

function getDepartmentNames(departments) {
    return departments.map(function(department) {
        return departments.department_name;
    });
}

//add function for checking inventory

function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
       if (inventory[i].item_id === choiceId) {
           return inventory[i];
       }
    }
    //otherwise,
    return null;
}