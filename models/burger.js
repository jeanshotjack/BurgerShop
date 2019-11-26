var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectall("burgname", function(res) {
      cb(res);
    });
  },

  create: function() {
    orm.insertOne("burgname", function(res) {
      cb(res);
    });
  },
  update: function() {
    orm.updateOne("burgname", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
