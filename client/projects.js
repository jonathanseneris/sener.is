var m = require("mithril");
var mu = require("./mu.js");
var projects = {};

// http://ratfactor.com/daves-guide-to-mithril-js?/shire
projects.model = function(data) {
  this.email = m.prop(data.email);
  this.password = m.prop(data.password);
};

projects.vm = {
  init: function() {
    projects.vm.email = m.prop("");
    projects.vm.password = m.prop("");
    projects.vm.attempt = function() {
      if (projects.vm.email() && projects.vm.password()) {
        console.log("NEXT STEP");
      } else {
        console.log("NOT COMPLETE");
      }
    };
  }
};

projects.controller = function() {
  projects.vm.init();
};

projects.view = function() {
  return m("main", [
    m("div", {
      class: "projects"
    }, [
      m("a", {
        href: "http://lea.gg/",
        target: "_blank",
        class: "projectTitle"
      }, "lea.gg"),
      m("h5", "compatibility engine for e-sports teams"),
      m("iframe", {
        src: "https://player.vimeo.com/video/135079058",
        width: "250",
        height: "141",
        frameborder: "0"
      }),
      m("h6", {
        class: "stack"
      }, "react, postgres, node, express, gulp"),
      m("h6", {
        class: "stack"
      }, "axios, bcrypt, browserify, sequelize"),
      m("a", {
        href: "https://github.com/talentgg/talentgg",
        target: "_blank",
        class: "gitlink"
      }, "source code")
    ])
  ]);
};

module.exports = projects;
