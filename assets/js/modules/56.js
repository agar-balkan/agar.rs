function i(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) {
        i.writable = true;
      }
      Object.defineProperty(e, i.key, i);
    }
  }
  return function (t, n, i) {
    if (n) {
      e(t.prototype, n);
    }
    if (i) {
      e(t, i);
    }
    return t;
  };
}();
var a = function () {
  function e() {
    i(this, e);
    this.errors = {};
  }
  o(e, [{
    key: "has",
    value: function (e) {
      return this.errors.hasOwnProperty(e);
    }
  }, {
    key: "any",
    value: function () {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "get",
    value: function (e) {
      if (this.errors[e]) {
        return this.errors[e];
      }
    }
  }, {
    key: "record",
    value: function (e) {
      this.errors = e;
    }
  }, {
    key: "clear",
    value: function (e) {
      if (e) {
        delete this.errors[e];
      } else {
        this.errors = {};
      }
    }
  }, {
    key: "hideError",
    value: function (e) {
      if (e) {
        delete this.errors[e];
      }
    }
  }]);
  return e;
}();
exports.default = a;