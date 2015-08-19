var m = require("mithril");
var mu = require("./mu.js");
var header = require("./header.js");
var profile = require("./profile.js");
var about = require("./about.js");
var blog = require("./blog.js");
var writing = require("./writing.js");
var lastwinter = require("./lastwinter.js");
var projects = require("./projects.js");

var app = function(nav, body) {
  return function() {
    return m(".layout", [
      m("header", nav(),
        m("main", body()))
    ]);
  };
};

var home = {};

home.model = function(data) {
  this.email = m.prop(data.email);
  this.name = m.prop(data.name);
};

home.vm = {
  init: function() {
    home.vm.email = m.prop("");
    home.vm.name = m.prop("");
    home.vm.attempt = function() {
      if (home.vm.email() && home.vm.name()) {
        console.log("NEXT STEP");
      } else {
        console.log("NOT COMPLETE");
      }
    };
  }
};

home.controller = function() {
  home.vm.init();
};


home.view = function() {
  return m("html", [
    m("body"), [
      m("img", {
        src: "http://sener.is/hank.gif",
        class: "hero"
      }),
      m("div", {
        class: "mailinglist"
      }, [
        m("h1", "mailing list"),

        m("p", "need mail? i can help!"),
        m("form", mu.binds(home.vm), [
            m("input[placeholder=email]", {
              onchange: m.withAttr("value", home.vm.email),
              value: home.vm.email()
            }),
            m("input[placeholder=name]", {
              onchange: m.withAttr("value", home.vm.name),
              value: home.vm.name()
            }),
            m("button", {
              onclick: home.vm.attempt
            }, "home")
          ],
          home.vm.email(),
          home.vm.name()
        )
      ])
    ]
  ]);
};

m.route.mode = "hash";
m.route(document.body, "/", {
  "/": {
    controller: home.controller,
    view: app(header, home.view)
  },
  "/about": {
    controller: about.controller,
    view: app(header, about.view)
  },
  "/blog": {
    controller: blog.controller,
    view: app(header, blog.view)
  },
  "/profile": {
    controller: profile.controller,
    view: app(header, profile.view)
  },
  "/projects": {
    controller: projects.controller,
    view: app(header, projects.view)
  },
  "/writing": {
    controller: writing.controller,
    view: app(header, writing.view)
  },
  "/lastwinter": lastwinter  
});
