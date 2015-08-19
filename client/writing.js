var m = require("mithril");
var mu = require("./mu.js");
var writing = {};

writing.vm = {
  init: function() {
  }
};

writing.controller = function() {
  writing.vm.init();
};

writing.view = function() {
  return m("main", [
    m("img", {
      id: "snap",
      src: "http://sener.is/hankhat.jpg"
    }),
    m("div", {
      class: "about"
    }, [      
      m("p", "mfa, creative writing, nonfiction, the new school"),
      m("p", m("a", {
        href: "http://theboilerjournal.com/2014/03/10/spring-issue-xi/"
      }, "the matador")),
      m("a[href='/#/lastwinter']", "last winter", {
        config: m.route
      })
    ]),
  ]);
};

module.exports = writing;
