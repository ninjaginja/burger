var connection = require("./connection.js");

var orm = {

  selectAll: function(whatToSelect, tableName) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(tableName, colName, nameInput) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName, colName, nameInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(tableName, colName) {
    // var queryString = "UPDATE ?? SET ?? WHERE ";
    connection.query(queryString, [], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }

module.exports = orm;
