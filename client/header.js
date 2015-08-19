var m = require("mithril");

var header = function() {
  return m("header", {
    class: "nav"
  }, [
    m("header", [
      m("h4", {
        id: "title"
      }, "jonath@n.", m("a[href='/#/']", "sener.is", {
        config: m.route
      })),
      m("a[href='/#/blog']", "blog", {
        config: m.route
      }),
      m("a[href='/#/about']", "about", {
        config: m.route
      }),      
      m("a[href='/#/writing']", "writing", {
        config: m.route
      }),
      m("a", {
        href: "https://angel.co/jonathanseneris#project",
        target: "_blank"
      }, "projects"),
      m("a", {
        href: "http://github.com/jonathanseneris/",
        target: "_blank"
      }, "github"),
      m("a", {
        href: "https://www.facebook.com/jonathanseneris",
        target: "_blank"
      }, "facebook"),
      m("a", {
        href: "https://www.linkedin.com/in/jonathanseneris",
        target: "_blank"
      }, "linkedin"),
      m("a", {
        href: "https://instagram.com/jonathanseneris/",
        target: "_blank"
      }, "instagram")
    ])
  ]);
};

module.exports = header;
