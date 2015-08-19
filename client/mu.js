var m = require("mithril");
var mu = {};


mu.binds = function(data) {
  return {
    onchange: function(e) {
      data[e.target.name] = e.target.value;
    }
  };
};

// mu.layout = function(nav, body) {
//   return function() {
//     return m(".layout", [
//       m("header", nav(),
//         m("main", body()))
//     ]);
//   };
// };

module.exports = mu;
