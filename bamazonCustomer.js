var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connetion
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllProducts()
  });

  // display products function
  function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].department_name);
      }
      console.log("-----------------------------------");
      //inquirer function
      start();
    });
  }

// Inquierer function
function start(){
inquirer.prompt([
    {
        name: "item_id",
        type: "input",
        message: "Enter product id of item you would like to purchase?"
    },
    {
      name: "quantity",
      type: "input",
      message: "Enter quantity you would like to purchase?"
  }
  ]).then(function(answer) {
		connection.query('SELECT * FROM `products` WHERE ?', {
			item_id: answer.item_id
		}, function (err, res) {
			if (err) throw err;
			var dbName = res[0].product_name;
			var dbQuantity = res[0].stock_quantity;
			var total = res[0].price * answer.quantity;
			// Check if enough items in stock to complete sale
			if (answer.quantity <= dbQuantity) {
				// Update quantity of product in database
				var newQuantity = dbQuantity - answer.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [{
						stock_quantity: newQuantity
					}, {
						item_id: answer.item_id
					}], function(err, res) {
						if (err) throw err;
						// Confirmation of complete sale
						inquirer.prompt([{
							name: 'return',
							message: 'Purchase complete!\nItem: ' + dbName + '\nQuantity: ' + answer.quantity + '\nTotal: $' + total,
							type: 'list',
							choices: ['Return']
						}]).then(function(answer) {
							queryAllProducts();
						});
					}
				);
			} else {
				inquirer.prompt([{
					name: 'error',
					message: 'Error - Not enough in stock',
					type: 'list',
					choices: ['Return']
				}]).then(function(answer) {
					queryAllProducts();
				});
			}
		});
	});
}




