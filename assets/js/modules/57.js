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
var a = function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}(require("./56.js"));
var s = function () {
  function e(t) {
    i(this, e);
    this.originalData = t;
    for (var n in t) {
      this[n] = t[n];
    }
    this.errors = new a.default();
  }
  o(e, [{
    key: "data",
    value: function () {
      var e = {};
      for (var t in this.originalData) {
        e[t] = this[t];
      }
      return e;
    }
  }, {
    key: "reset",
    value: function () {
      for (var e in this.originalData) {
        this[e] = "";
      }
      this.errors.clear();
    }
  }, {
    key: "post",
    value: function (e, t, n = 0) {
      return this.submit("post", e, t, n);
    }
  }, {
    key: "put",
    value: function (e) {
      return this.submit("put", e);
    }
  }, {
    key: "patch",
    value: function (e) {
      return this.submit("patch", e);
    }
  }, {
    key: "delete",
    value: function (e) {
      return this.submit("delete", e);
    }
  }, {
    key: "submit",
    value: function (e, t, n = this.data()) {
      if (arguments[3] === 1) {
        var i = false;
        var o = false;
        var a = "multipart/form-data";
      } else {
        var o = "application/x-www-form-urlencoded";
        var a = false;
        var i = true;
      }
      return new Promise(function (s, r) {
        $.ajax({
          url: t,
          enctype: a,
          crossDomain: true,
          contentType: o,
          type: e,
          dataType: "json",
          data: n,
          processData: i,
          success: function (e) {
            s(e);
          },
          error: function (e, t, n) {
            r(t);
          }
        });
      });
    }
  }, {
    key: "get_json",
    value: function (e) {
      return this.getjson(e);
    }
  }, {
    key: "getjson",
    value: function (e) {
      return new Promise(function (t, n) {
        $.getJSON(e, function (e) {}).done(function (e) {
          t(e);
        }).fail(function (e) {
          n(e);
        });
      });
    }
  }, {
    key: "onSuccess",
    value: function (e) {
      console.log("uspeh");
    }
  }, {
    key: "onFail",
    value: function (e) {
      alert(e);
      this.errors.record(e);
    }
  }, {
    key: "checkIfEmpty",
    value: function (e) {
      var t = {};
      for (var n in e) {
        if (e[n] == "") {
          t[n] = i18n.messages[lang].login.required;
          this.errors.record(t);
        }
      }
    }
  }, {
    key: "validateEmail",
    value: function (e) {
      var t = {};
      var n = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      for (var i in e) {
        if (!n.test(e[i])) {
          t[i] = i18n.messages[lang].login.email_invalid;
          this.errors.record(t);
        }
      }
    }
  }, {
    key: "minPasswordLength",
    value: function (e, t = 4, n = 16) {
      var i = {};
      for (var o in e) {
        if (e[o].length < t || e[o].length > n) {
          i[o] = i18n.messages[lang].login.min_pass;
          this.errors.record(i);
        }
      }
    }
  }]);
  return e;
}();
exports.default = s;