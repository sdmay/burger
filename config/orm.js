var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    var table = "burgers"
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result)
    });
  },
  create: function(table, field, vals, cb) {

    var queryString = "INSERT INTO " +"("+ table +")" +  " " + field + " VALUES(??)";

    console.log(queryString);

    connection.query(queryString, [table, field, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
//    create: function(tableInput,col, value, cb) {
//     var queryString = "INSERT INTO ?? (??) VALUES (?)";
//    console.log(queryString)
//     connection.query(queryString, [tableInput, col, value], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       console.log(result)
//       cb(result);
//     });
//   }
// }


}



module.exports = orm;