var m = require("mithril");
var mu = require("./mu.js");
var about = {};

about.vm = {
  init: function() {}
};

about.controller = function() {
  about.vm.init();
};

about.view = function() {
  return m("main", [
    m("img", {
      id: "snap",
      src: "http://sener.is/prof.jpg"
    }),
    m("div", {
      class: "about"
    }, [
      m("p", "scar on my pinky: trying to pierce a dictionary with a pocket knife"),
      m("p", "july 1997 culinary employee of the month, red lobster, wayne, nj"),
      m("p", "scar on my foot: playing near an ironing board (not recent)"),
      m("p", "mfa, creative writing, nonfiction, the new school"),
      m("p", "p'haal of fame,", m("a", {
        href: "http://www.phaalhalloffame.com/"
      }, "brick lane curry house"), ", nyc"),
      m("p", "plate in my arm: falling off a soccer goal"),
      m("p", "lactose intolerant"),
      m("p", "2.9% neanderthal"),
      m("p", m("a", {
        href: "http://theboilerjournal.com/2014/03/10/spring-issue-xi/"
      }, "ant enthusiast")),
      m("p", m("a", {
        href: "http://hackreactor.com/"
      }, "rb6"))
    ]),
  ]);
};

module.exports = about;
