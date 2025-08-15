var i = require("./64.js");
if (typeof i == "string") {
  i = [[module.i, i, ""]];
}
if (i.locals) {
  module.exports = i.locals;
}
require("./2.js")("8915f532", i, true);