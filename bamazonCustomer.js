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
        console.log(res[i].id + " | " + res[i].item + " | " + res[i].price + " | " + res[i].department_name);
      }
      console.log("-----------------------------------");
      //inquirer function
      start();
    });
  }

// ask user what product they would like to buy
function start(){
inquirer.prompt([
    {
        name: "buyItem",
        type: "input",
        message: "Enter product id and quantity you would like to purchase?"
    }
  ])
}
// ask user quantity they would like to purchase 



