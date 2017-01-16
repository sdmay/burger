var connection = require("./connection.js");

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    var table = "burgers"
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    });
  },
  create: function(values, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [values], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
},

  delete: (table, condition, cb)=>{
    var queryString = "DELETE FROM ?? WHERE ?? "
    connection.query(queryString, [table, condition], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;