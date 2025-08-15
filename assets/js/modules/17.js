function i(e, t) {
  if (typeof console != "undefined") {
    console.warn("[vue-i18n] " + e);
    if (t) {
      console.warn(t.stack);
    }
  }
}
function o(e) {
  return e !== null && typeof e == "object";
}
function a(e) {
  return I.call(e) === $;
}
function s(e) {
  return e === null || e === undefined;
}
function r() {
  var e = [];
  for (var t = arguments.length; t--;) {
    e[t] = arguments[t];
  }
  var n = null;
  var i = null;
  if (e.length === 1) {
    if (o(e[0]) || Array.isArray(e[0])) {
      i = e[0];
    } else if (typeof e[0] == "string") {
      n = e[0];
    }
  } else if (e.length === 2) {
    if (typeof e[0] == "string") {
      n = e[0];
    }
    if (o(e[1]) || Array.isArray(e[1])) {
      i = e[1];
    }
  }
  return {
    locale: n,
    params: i
  };
}
function l(e) {
  if (e) {
    if (e > 1) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return 1;
  }
}
function c(e, t) {
  e = Math.abs(e);
  if (t === 2) {
    return l(e);
  } else if (e) {
    return Math.min(e, 2);
  } else {
    return 0;
  }
}
function u(e, t) {
  if (!e && typeof e != "string") {
    return null;
  }
  var n = e.split("|");
  t = c(t, n.length);
  if (n[t]) {
    return n[t].trim();
  } else {
    return e;
  }
}
function d(e) {
  return JSON.parse(JSON.stringify(e));
}
function p(e, t) {
  if (e.length) {
    var n = e.indexOf(t);
    if (n > -1) {
      return e.splice(n, 1);
    }
  }
}
function f(e, t) {
  return M.call(e, t);
}
function h(e) {
  var t = arguments;
  var n = Object(e);
  for (var i = 1; i < arguments.length; i++) {
    var a = t[i];
    if (a !== undefined && a !== null) {
      var s = undefined;
      for (s in a) {
        if (f(a, s)) {
          if (o(a[s])) {
            n[s] = h(n[s], a[s]);
          } else {
            n[s] = a[s];
          }
        }
      }
    }
  }
  return n;
}
function m(e, t) {
  if (e === t) {
    return true;
  }
  var n = o(e);
  var i = o(t);
  if (!n || !i) {
    return !n && !i && String(e) === String(t);
  }
  try {
    var a = Array.isArray(e);
    var s = Array.isArray(t);
    if (a && s) {
      return e.length === t.length && e.every(function (e, n) {
        return m(e, t[n]);
      });
    }
    if (a || s) {
      return false;
    }
    var r = Object.keys(e);
    var l = Object.keys(t);
    return r.length === l.length && r.every(function (n) {
      return m(e[n], t[n]);
    });
  } catch (e) {
    return false;
  }
}
function g(e) {
  e.prototype.$t = function (e) {
    var t = [];
    for (var n = arguments.length - 1; n-- > 0;) {
      t[n] = arguments[n + 1];
    }
    var i = this.$i18n;
    return i._t.apply(i, [e, i.locale, i._getMessages(), this].concat(t));
  };
  e.prototype.$tc = function (e, t) {
    var n = [];
    for (var i = arguments.length - 2; i-- > 0;) {
      n[i] = arguments[i + 2];
    }
    var o = this.$i18n;
    return o._tc.apply(o, [e, o.locale, o._getMessages(), this, t].concat(n));
  };
  e.prototype.$te = function (e, t) {
    var n = this.$i18n;
    return n._te(e, n.locale, n._getMessages(), t);
  };
  e.prototype.$d = function (e) {
    var t = [];
    for (var n = arguments.length - 1; n-- > 0;) {
      t[n] = arguments[n + 1];
    }
    return (i = this.$i18n).d.apply(i, [e].concat(t));
    var i;
  };
  e.prototype.$n = function (e) {
    var t = [];
    for (var n = arguments.length - 1; n-- > 0;) {
      t[n] = arguments[n + 1];
    }
    return (i = this.$i18n).n.apply(i, [e].concat(t));
    var i;
  };
}
function v(e, t, n) {
  if (y(e, n)) {
    _(e, t, n);
  }
}
function b(e, t, n, i) {
  if (y(e, n)) {
    if (!w(e, n) || !m(t.value, t.oldValue)) {
      _(e, t, n);
    }
  }
}
function y(e, t) {
  var n = t.context;
  if (n) {
    return !!n.$i18n || (i("not exist VueI18n instance in Vue instance"), false);
  } else {
    i("not exist Vue instance in VNode context");
    return false;
  }
}
function w(e, t) {
  var n = t.context;
  return e._locale === n.$i18n.locale;
}
function _(e, t, n) {
  var o = k(t.value);
  var a = o.path;
  var s = o.locale;
  var r = o.args;
  if (a || s || r) {
    if (a) {
      var l = n.context;
      e._vt = e.textContent = (c = l.$i18n).t.apply(c, [a].concat(x(s, r)));
      e._locale = l.$i18n.locale;
      var c;
    } else {
      i("required `path` in v-t directive");
    }
  } else {
    i("not support value type");
  }
}
function k(e) {
  var t;
  var n;
  var i;
  if (typeof e == "string") {
    t = e;
  } else if (a(e)) {
    t = e.path;
    n = e.locale;
    i = e.args;
  }
  return {
    path: t,
    locale: n,
    args: i
  };
}
function x(e, t) {
  var n = [];
  if (e) {
    n.push(e);
  }
  if (t && (Array.isArray(t) || a(t))) {
    n.push(t);
  }
  return n;
}
function C(e) {
  if ((D = e).version) {
    Number(D.version.split(".")[0]);
  }
  C.installed = true;
  Object.defineProperty(D.prototype, "$i18n", {
    get: function () {
      return this._i18n;
    }
  });
  g(D);
  D.mixin(L);
  D.directive("t", {
    bind: v,
    update: b
  });
  D.component(R.name, R);
  var t = D.config.optionMergeStrategies;
  t.i18n = t.methods;
}
function S(e) {
  var t = [];
  for (var n = 0, i = ""; n < e.length;) {
    var o = e[n++];
    if (o === "{") {
      if (i) {
        t.push({
          type: "text",
          value: i
        });
      }
      i = "";
      var a = "";
      for (o = e[n++]; o !== "}";) {
        a += o;
        o = e[n++];
      }
      var s = B.test(a) ? "list" : q.test(a) ? "named" : "unknown";
      t.push({
        value: a,
        type: s
      });
    } else if (o === "%") {
      if (e[n] !== "{") {
        i += o;
      }
    } else {
      i += o;
    }
  }
  if (i) {
    t.push({
      type: "text",
      value: i
    });
  }
  return t;
}
function A(e, t) {
  var n = [];
  var i = 0;
  var a = Array.isArray(t) ? "list" : o(t) ? "named" : "unknown";
  if (a === "unknown") {
    return n;
  }
  while (i < e.length) {
    var s = e[i];
    switch (s.type) {
      case "text":
        n.push(s.value);
        break;
      case "list":
        n.push(t[parseInt(s.value, 10)]);
        break;
      case "named":
        if (a === "named") {
          n.push(t[s.value]);
        }
    }
    i++;
  }
  return n;
}
function T(e) {
  return te.test(e);
}
function P(e) {
  var t = e.charCodeAt(0);
  if (t !== e.charCodeAt(e.length - 1) || t !== 34 && t !== 39) {
    return e;
  } else {
    return e.slice(1, -1);
  }
}
function j(e) {
  if (e === undefined || e === null) {
    return "eof";
  }
  var t = e.charCodeAt(0);
  switch (t) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
    case 48:
      return e;
    case 95:
    case 36:
    case 45:
      return "ident";
    case 32:
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "ws";
  }
  if (t >= 97 && t <= 122 || t >= 65 && t <= 90) {
    return "ident";
  } else if (t >= 49 && t <= 57) {
    return "number";
  } else {
    return "else";
  }
}
function E(e) {
  var t = e.trim();
  return (e.charAt(0) !== "0" || !isNaN(e)) && (T(t) ? P(t) : "*" + t);
}
function N(e) {
  var t;
  var n;
  var i;
  var o;
  var a;
  var s;
  var r;
  var l = [];
  var c = -1;
  var u = Y;
  var d = 0;
  var p = [];
  p[U] = function () {
    if (n !== undefined) {
      l.push(n);
      n = undefined;
    }
  };
  p[V] = function () {
    if (n === undefined) {
      n = i;
    } else {
      n += i;
    }
  };
  p[W] = function () {
    p[V]();
    d++;
  };
  p[G] = function () {
    if (d > 0) {
      d--;
      u = K;
      p[V]();
    } else {
      d = 0;
      if ((n = E(n)) === false) {
        return false;
      }
      p[U]();
    }
  };
  while (u !== null) {
    c++;
    if ((t = e[c]) !== "\\" || !function () {
      var t = e[c + 1];
      if (u === J && t === "'" || u === X && t === "\"") {
        c++;
        i = "\\" + t;
        p[V]();
        return true;
      }
    }()) {
      o = j(t);
      r = ee[u];
      if ((a = r[o] || r.else || Q) === Q) {
        return;
      }
      u = a[0];
      if ((s = p[a[1]]) && (i = a[2], i = i === undefined ? t : i, s() === false)) {
        return;
      }
      if (u === Z) {
        return l;
      }
    }
  }
}
function O(e) {
  return !!Array.isArray(e) && e.length === 0;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var D;
var I = Object.prototype.toString;
var $ = "[object Object]";
var M = Object.prototype.hasOwnProperty;
var z = typeof Intl != "undefined" && Intl.DateTimeFormat !== undefined;
var F = typeof Intl != "undefined" && Intl.NumberFormat !== undefined;
var L = {
  beforeCreate: function () {
    var e = this.$options;
    e.i18n = e.i18n || (e.__i18n ? {} : null);
    if (e.i18n) {
      if (e.i18n instanceof ie) {
        if (e.__i18n) {
          try {
            var t = {};
            e.__i18n.forEach(function (e) {
              t = h(t, JSON.parse(e));
            });
            Object.keys(t).forEach(function (n) {
              e.i18n.mergeLocaleMessage(n, t[n]);
            });
          } catch (e) {}
        }
        this._i18n = e.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (a(e.i18n)) {
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof ie) {
          e.i18n.root = this.$root.$i18n;
          e.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          e.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
        }
        if (e.__i18n) {
          try {
            var n = {};
            e.__i18n.forEach(function (e) {
              n = h(n, JSON.parse(e));
            });
            e.i18n.messages = n;
          } catch (e) {}
        }
        this._i18n = new ie(e.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
        if (e.i18n.sync === undefined || e.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof ie) {
      this._i18n = this.$root.$i18n;
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (e.parent && e.parent.$i18n && e.parent.$i18n instanceof ie) {
      this._i18n = e.parent.$i18n;
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },
  beforeDestroy: function () {
    if (this._i18n) {
      if (this._subscribing) {
        this._i18n.unsubscribeDataChanging(this);
        delete this._subscribing;
      }
      if (this._i18nWatcher) {
        this._i18nWatcher();
        delete this._i18nWatcher;
      }
      if (this._localeWatcher) {
        this._localeWatcher();
        delete this._localeWatcher;
      }
      this._i18n = null;
    }
  }
};
var R = {
  name: "i18n",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "span"
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function (e, t) {
    var n = t.props;
    var o = t.data;
    var a = t.children;
    var s = t.parent.$i18n;
    a = (a || []).filter(function (e) {
      return e.tag || (e.text = e.text.trim());
    });
    if (!s) {
      return a;
    }
    var r = n.path;
    var l = n.locale;
    var c = {};
    var u = n.places || {};
    var d = Array.isArray(u) ? u.length > 0 : Object.keys(u).length > 0;
    var p = a.every(function (e) {
      if (e.data && e.data.attrs) {
        var t = e.data.attrs.place;
        return t !== undefined && t !== "";
      }
    });
    if (d && a.length > 0 && !p) {
      i("If places prop is set, all child elements must have place prop set.");
    }
    if (Array.isArray(u)) {
      u.forEach(function (e, t) {
        c[t] = e;
      });
    } else {
      Object.keys(u).forEach(function (e) {
        c[e] = u[e];
      });
    }
    a.forEach(function (e, t) {
      var n = p ? "" + e.data.attrs.place : "" + t;
      c[n] = e;
    });
    return e(n.tag, o, s.i(r, l, c));
  }
};
function H() {
  this._caches = Object.create(null);
}
H.prototype.interpolate = function (e, t) {
  var n = this._caches[e];
  if (!n) {
    n = S(e);
    this._caches[e] = n;
  }
  return A(n, t);
};
var B = /^(\d)+/;
var q = /^(\w)+/;
var V = 0;
var U = 1;
var W = 2;
var G = 3;
var Y = 0;
var K = 4;
var J = 5;
var X = 6;
var Z = 7;
var Q = 8;
var ee = [];
ee[Y] = {
  ws: [Y],
  ident: [3, V],
  "[": [K],
  eof: [Z]
};
ee[1] = {
  ws: [1],
  ".": [2],
  "[": [K],
  eof: [Z]
};
ee[2] = {
  ws: [2],
  ident: [3, V],
  0: [3, V],
  number: [3, V]
};
ee[3] = {
  ident: [3, V],
  0: [3, V],
  number: [3, V],
  ws: [1, U],
  ".": [2, U],
  "[": [K, U],
  eof: [Z, U]
};
ee[K] = {
  "'": [J, V],
  "\"": [X, V],
  "[": [K, W],
  "]": [1, G],
  eof: Q,
  else: [K, V]
};
ee[J] = {
  "'": [K, V],
  eof: Q,
  else: [J, V]
};
ee[X] = {
  "\"": [K, V],
  eof: Q,
  else: [X, V]
};
var te = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ne() {
  this._cache = Object.create(null);
}
ne.prototype.parsePath = function (e) {
  var t = this._cache[e];
  if (!t) {
    if (t = N(e)) {
      this._cache[e] = t;
    }
  }
  return t || [];
};
ne.prototype.getPathValue = function (e, t) {
  if (!o(e)) {
    return null;
  }
  var n = this.parsePath(t);
  if (O(n)) {
    return null;
  }
  for (var i = n.length, a = e, s = 0; s < i;) {
    var r = a[n[s]];
    if (r === undefined) {
      a = null;
      break;
    }
    a = r;
    s++;
  }
  return a;
};
function ie(e) {
  var t = this;
  if (e === undefined) {
    e = {};
  }
  var n = e.locale || "en-US";
  var i = e.fallbackLocale || "en-US";
  var o = e.messages || {};
  var a = e.dateTimeFormats || {};
  var r = e.numberFormats || {};
  this._vm = null;
  this._formatter = e.formatter || new H();
  this._missing = e.missing || null;
  this._root = e.root || null;
  this._sync = e.sync === undefined || !!e.sync;
  this._fallbackRoot = e.fallbackRoot === undefined || !!e.fallbackRoot;
  this._silentTranslationWarn = e.silentTranslationWarn !== undefined && !!e.silentTranslationWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new ne();
  this._dataListeners = [];
  this._exist = function (e, n) {
    return !!e && !!n && !s(t._path.getPathValue(e, n));
  };
  this._initVM({
    locale: n,
    fallbackLocale: i,
    messages: o,
    dateTimeFormats: a,
    numberFormats: r
  });
}
var oe = {
  vm: {},
  messages: {},
  dateTimeFormats: {},
  numberFormats: {},
  locale: {},
  fallbackLocale: {},
  missing: {},
  formatter: {},
  silentTranslationWarn: {}
};
ie.prototype._initVM = function (e) {
  var t = D.config.silent;
  D.config.silent = true;
  this._vm = new D({
    data: e
  });
  D.config.silent = t;
};
ie.prototype.subscribeDataChanging = function (e) {
  this._dataListeners.push(e);
};
ie.prototype.unsubscribeDataChanging = function (e) {
  p(this._dataListeners, e);
};
ie.prototype.watchI18nData = function () {
  var e = this;
  return this._vm.$watch("$data", function () {
    for (var t = e._dataListeners.length; t--;) {
      D.nextTick(function () {
        if (e._dataListeners[t]) {
          e._dataListeners[t].$forceUpdate();
        }
      });
    }
  }, {
    deep: true
  });
};
ie.prototype.watchLocale = function () {
  if (!this._sync || !this._root) {
    return null;
  }
  var e = this._vm;
  return this._root.vm.$watch("locale", function (t) {
    e.$set(e, "locale", t);
    e.$forceUpdate();
  }, {
    immediate: true
  });
};
oe.vm.get = function () {
  return this._vm;
};
oe.messages.get = function () {
  return d(this._getMessages());
};
oe.dateTimeFormats.get = function () {
  return d(this._getDateTimeFormats());
};
oe.numberFormats.get = function () {
  return d(this._getNumberFormats());
};
oe.locale.get = function () {
  return this._vm.locale;
};
oe.locale.set = function (e) {
  this._vm.$set(this._vm, "locale", e);
};
oe.fallbackLocale.get = function () {
  return this._vm.fallbackLocale;
};
oe.fallbackLocale.set = function (e) {
  this._vm.$set(this._vm, "fallbackLocale", e);
};
oe.missing.get = function () {
  return this._missing;
};
oe.missing.set = function (e) {
  this._missing = e;
};
oe.formatter.get = function () {
  return this._formatter;
};
oe.formatter.set = function (e) {
  this._formatter = e;
};
oe.silentTranslationWarn.get = function () {
  return this._silentTranslationWarn;
};
oe.silentTranslationWarn.set = function (e) {
  this._silentTranslationWarn = e;
};
ie.prototype._getMessages = function () {
  return this._vm.messages;
};
ie.prototype._getDateTimeFormats = function () {
  return this._vm.dateTimeFormats;
};
ie.prototype._getNumberFormats = function () {
  return this._vm.numberFormats;
};
ie.prototype._warnDefault = function (e, t, n, i) {
  if (s(n)) {
    if (this.missing) {
      this.missing.apply(null, [e, t, i]);
    }
    return t;
  } else {
    return n;
  }
};
ie.prototype._isFallbackRoot = function (e) {
  return !e && !s(this._root) && this._fallbackRoot;
};
ie.prototype._interpolate = function (e, t, n, i, o, r) {
  if (!t) {
    return null;
  }
  var l = this._path.getPathValue(t, n);
  if (Array.isArray(l)) {
    return l;
  }
  var c;
  if (s(l)) {
    if (!a(t)) {
      return null;
    }
    if (typeof (c = t[n]) != "string") {
      return null;
    }
  } else {
    if (typeof l != "string") {
      return null;
    }
    c = l;
  }
  if (c.indexOf("@:") >= 0) {
    c = this._link(e, t, c, i, o, r);
  }
  if (r) {
    return this._render(c, o, r);
  } else {
    return c;
  }
};
ie.prototype._link = function (e, t, n, i, o, a) {
  var s = this;
  var r = n;
  var l = r.match(/(@:[\w\-_|.]+)/g);
  for (var c in l) {
    if (l.hasOwnProperty(c)) {
      var u = l[c];
      var d = u.substr(2);
      var p = s._interpolate(e, t, d, i, o === "raw" ? "string" : o, o === "raw" ? undefined : a);
      if (s._isFallbackRoot(p)) {
        if (!s._root) {
          throw Error("unexpected error");
        }
        var f = s._root;
        p = f._translate(f._getMessages(), f.locale, f.fallbackLocale, d, i, o, a);
      }
      r = (p = s._warnDefault(e, d, p, i)) ? r.replace(u, p) : r;
    }
  }
  return r;
};
ie.prototype._render = function (e, t, n) {
  var i = this._formatter.interpolate(e, n);
  if (t === "string") {
    return i.join("");
  } else {
    return i;
  }
};
ie.prototype._translate = function (e, t, n, i, o, a, r) {
  var l = this._interpolate(t, e[t], i, o, a, r);
  if (s(l)) {
    l = this._interpolate(n, e[n], i, o, a, r);
    if (s(l)) {
      return null;
    } else {
      return l;
    }
  } else {
    return l;
  }
};
ie.prototype._t = function (e, t, n, i) {
  var o = [];
  for (var a = arguments.length - 4; a-- > 0;) {
    o[a] = arguments[a + 4];
  }
  if (!e) {
    return "";
  }
  var s = r.apply(undefined, o);
  var l = s.locale || t;
  var c = this._translate(n, l, this.fallbackLocale, e, i, "string", s.params);
  if (this._isFallbackRoot(c)) {
    if (!this._root) {
      throw Error("unexpected error");
    }
    return (u = this._root).t.apply(u, [e].concat(o));
  }
  return this._warnDefault(l, e, c, i);
  var u;
};
ie.prototype.t = function (e) {
  var t = [];
  for (var n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  return (i = this)._t.apply(i, [e, this.locale, this._getMessages(), null].concat(t));
  var i;
};
ie.prototype._i = function (e, t, n, i, o) {
  var a = this._translate(n, t, this.fallbackLocale, e, i, "raw", o);
  if (this._isFallbackRoot(a)) {
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.i(e, t, o);
  }
  return this._warnDefault(t, e, a, i);
};
ie.prototype.i = function (e, t, n) {
  if (e) {
    if (typeof t != "string") {
      t = this.locale;
    }
    return this._i(e, t, this._getMessages(), null, n);
  } else {
    return "";
  }
};
ie.prototype._tc = function (e, t, n, i, o) {
  var a = [];
  for (var s = arguments.length - 5; s-- > 0;) {
    a[s] = arguments[s + 5];
  }
  if (e) {
    if (o === undefined) {
      o = 1;
    }
    return u((r = this)._t.apply(r, [e, t, n, i].concat(a)), o);
  } else {
    return "";
  }
  var r;
};
ie.prototype.tc = function (e, t) {
  var n = [];
  for (var i = arguments.length - 2; i-- > 0;) {
    n[i] = arguments[i + 2];
  }
  return (o = this)._tc.apply(o, [e, this.locale, this._getMessages(), null, t].concat(n));
  var o;
};
ie.prototype._te = function (e, t, n) {
  var i = [];
  for (var o = arguments.length - 3; o-- > 0;) {
    i[o] = arguments[o + 3];
  }
  var a = r.apply(undefined, i).locale || t;
  return this._exist(n[a], e);
};
ie.prototype.te = function (e, t) {
  return this._te(e, this.locale, this._getMessages(), t);
};
ie.prototype.getLocaleMessage = function (e) {
  return d(this._vm.messages[e] || {});
};
ie.prototype.setLocaleMessage = function (e, t) {
  this._vm.messages[e] = t;
};
ie.prototype.mergeLocaleMessage = function (e, t) {
  this._vm.messages[e] = D.util.extend(this._vm.messages[e] || {}, t);
};
ie.prototype.getDateTimeFormat = function (e) {
  return d(this._vm.dateTimeFormats[e] || {});
};
ie.prototype.setDateTimeFormat = function (e, t) {
  this._vm.dateTimeFormats[e] = t;
};
ie.prototype.mergeDateTimeFormat = function (e, t) {
  this._vm.dateTimeFormats[e] = D.util.extend(this._vm.dateTimeFormats[e] || {}, t);
};
ie.prototype._localizeDateTime = function (e, t, n, i, o) {
  var a = t;
  var r = i[a];
  if (s(r) || s(r[o])) {
    a = n;
    r = i[a];
  }
  if (s(r) || s(r[o])) {
    return null;
  }
  var l = r[o];
  var c = a + "__" + o;
  var u = this._dateTimeFormatters[c];
  u ||= this._dateTimeFormatters[c] = new Intl.DateTimeFormat(a, l);
  return u.format(e);
};
ie.prototype._d = function (e, t, n) {
  if (!n) {
    return new Intl.DateTimeFormat(t).format(e);
  }
  var i = this._localizeDateTime(e, t, this.fallbackLocale, this._getDateTimeFormats(), n);
  if (this._isFallbackRoot(i)) {
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.d(e, n, t);
  }
  return i || "";
};
ie.prototype.d = function (e) {
  var t = [];
  for (var n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  var i = this.locale;
  var a = null;
  if (t.length === 1) {
    if (typeof t[0] == "string") {
      a = t[0];
    } else if (o(t[0])) {
      if (t[0].locale) {
        i = t[0].locale;
      }
      if (t[0].key) {
        a = t[0].key;
      }
    }
  } else if (t.length === 2) {
    if (typeof t[0] == "string") {
      a = t[0];
    }
    if (typeof t[1] == "string") {
      i = t[1];
    }
  }
  return this._d(e, i, a);
};
ie.prototype.getNumberFormat = function (e) {
  return d(this._vm.numberFormats[e] || {});
};
ie.prototype.setNumberFormat = function (e, t) {
  this._vm.numberFormats[e] = t;
};
ie.prototype.mergeNumberFormat = function (e, t) {
  this._vm.numberFormats[e] = D.util.extend(this._vm.numberFormats[e] || {}, t);
};
ie.prototype._localizeNumber = function (e, t, n, i, o) {
  var a = t;
  var r = i[a];
  if (s(r) || s(r[o])) {
    a = n;
    r = i[a];
  }
  if (s(r) || s(r[o])) {
    return null;
  }
  var l = r[o];
  var c = a + "__" + o;
  var u = this._numberFormatters[c];
  u ||= this._numberFormatters[c] = new Intl.NumberFormat(a, l);
  return u.format(e);
};
ie.prototype._n = function (e, t, n) {
  if (!n) {
    return new Intl.NumberFormat(t).format(e);
  }
  var i = this._localizeNumber(e, t, this.fallbackLocale, this._getNumberFormats(), n);
  if (this._isFallbackRoot(i)) {
    if (!this._root) {
      throw Error("unexpected error");
    }
    return this._root.n(e, n, t);
  }
  return i || "";
};
ie.prototype.n = function (e) {
  var t = [];
  for (var n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  var i = this.locale;
  var a = null;
  if (t.length === 1) {
    if (typeof t[0] == "string") {
      a = t[0];
    } else if (o(t[0])) {
      if (t[0].locale) {
        i = t[0].locale;
      }
      if (t[0].key) {
        a = t[0].key;
      }
    }
  } else if (t.length === 2) {
    if (typeof t[0] == "string") {
      a = t[0];
    }
    if (typeof t[1] == "string") {
      i = t[1];
    }
  }
  return this._n(e, i, a);
};
Object.defineProperties(ie.prototype, oe);
ie.availabilities = {
  dateTimeFormat: z,
  numberFormat: F
};
ie.install = C;
ie.version = "7.3.1";
if (typeof window != "undefined" && window.Vue) {
  window.Vue.use(ie);
}
exports.default = ie;