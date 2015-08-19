var m = require("mithril");
var mu = require("./mu.js");
var blog = {};

blog.view = function() {
  return m("iframe", {    
    src: "http://sener.is/blog",
    frameborder: "0"
  });
};

module.exports = blog;
