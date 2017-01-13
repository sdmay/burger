var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dali0328",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
    var query = "SELECT * FROM burgers";
  connection.query(query, function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { burgers: data });

  });
});

// app.get("/", function(req, res) {
//     var query = "SELECT * FROM burgers WHERE devoured = ?";
//   connection.query(query, [!0], function(err, data) {
//     if (err) {
//       throw err;
//     }

//     res.render("index", { devoured: data });

//   });
// });


app.post("/create", function(req, res) {
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
    //   var n = req.body.burger;
    //   if(n = " "){
    //       alert("Make a burger")
    //       return false;
    //   }
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.put("/update", function(req, res) {

  connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [
    1, req.body.this.id
  ], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.listen(port);