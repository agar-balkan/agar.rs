function i(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = i(require("./7.js"));
var a = i(require("./3.js"));
var s = i(require("./54.js"));
var r = i(require("./55.js"));
o.default.use(a.default);
exports.default = new a.default.Store({
  modules: {
    main: s.default,
    servers: r.default
  }
});