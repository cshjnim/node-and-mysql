# node-and-mysql

# Contributor 
Created By: Hyejin Kim, Creator

Date: January Jan. 5, 2020

Updated: as of Jan. 11, 2020

- - -

### Overview

"In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage."

   
- - -

### Quick Instructions

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

### Challenge: Manager View (Next Level)

* Create a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.


### SCREENSHOTS

* MySQL: 

![Screenshots](/screenshots/sql1.png)
![Screenshots](/screenshots/sql2.png)

* Customer node:

![Screenshots](/screenshots/customer2.png)
![Screenshots](/screenshots/customer3.png)
![Screenshots](/screenshots/customer4.png)

* Manager node:

![Screenshots](/screenshots/manager1.png)
![Screenshots](/screenshots/manager2.png)
![Screenshots](/screenshots/manager3.png)

### Links & Portfolio's Links
*  [Github page](https://github.com/cshjnim/node-and-mysql.git)
*  [Hyejin's Portfolio](https://cshjnim.github.io/)

### Summary of Technologies Used on this project

* Javascript
* Git
* GitHub
* MySql
* Node
* JSON
* NPM Packages

- - -
### CHECKLISTS

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why) &check;
2. Give a high-level overview of how the app is organized &check;
3. Give start-to-finish instructions on how to run the app &check;
4. Include screenshots, gifs or videos of the app functioning &check;
5. Contain a link to a deployed version of the app &check;
6. Clearly list the technologies used in the app &check;
7. State your role in the app development &check;

# Node.js & MySQL
