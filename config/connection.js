var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

 else{connection = mysql.createConnection({
  host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "aqe8rn2l8bf7yezi",
  password: "r901bbhibdt4g5xm",
  database: "oappb3i2pd7x718e"
});
 }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;