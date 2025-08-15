module.exports = function (e, t, n, i) {
  var o;
  var a = e = e || {};
  var s = typeof e.default;
  if (s === "object" || s === "function") {
    o = e;
    a = e.default;
  }
  var r = typeof a == "function" ? a.options : a;
  if (t) {
    r.render = t.render;
    r.staticRenderFns = t.staticRenderFns;
  }
  if (n) {
    r._scopeId = n;
  }
  if (i) {
    var l = Object.create(r.computed || null);
    Object.keys(i).forEach(function (e) {
      var t = i[e];
      l[e] = function () {
        return t;
      };
    });
    r.computed = l;
  }
  return {
    esModule: o,
    exports: a,
    options: r
  };
};