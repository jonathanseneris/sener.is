var m = require("mithril");
var mu = require("./mu.js");

var profile = {};

profile.model = function(data) {
  this.email = data.email;
  this.username = data.username;
  this.zipcode = data.zipcode;
  this.picture = data.picture;
};

profile.vm = {
  init: function() {
    profile.vm.email = m.prop("");
    profile.vm.username = m.prop("Username");
    profile.vm.zipcode = m.prop("90046");
    profile.vm.picture = m.prop("http://sener.is/hank.gif");
  }
};

profile.controller = function() {
  profile.vm.init();
};

profile.view = function() {
  return m("div", [
    m("h1", profile.vm.username()),
    m("h3", profile.vm.zipcode()),
    m("img", {
      src: profile.vm.picture()
    })
  ]);
};

module.exports = profile;
