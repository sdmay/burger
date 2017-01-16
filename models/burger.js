var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, cb) {
    orm.create("burgers", cols, function(res) {
      cb(res);
    });
  },



}

module.exports = burger;