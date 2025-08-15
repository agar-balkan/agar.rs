function i(e, t) {}
function o(e) {
  return Object.prototype.toString.call(e).indexOf("Error") > -1;
}
function a(e, t) {
  switch (typeof t) {
    case "undefined":
      return;
    case "object":
      return t;
    case "function":
      return t(e);
    case "boolean":
      if (t) {
        return e.params;
      } else {
        return undefined;
      }
  }
}
function s(e, t = {}, n) {
  var i;
  var o = n || r;
  try {
    i = o(e || "");
  } catch (e) {
    i = {};
  }
  for (var a in t) {
    var s = t[a];
    i[a] = Array.isArray(s) ? s.slice() : s;
  }
  return i;
}
function r(e) {
  var t = {};
  if (e = e.trim().replace(/^(\?|#|&)/, "")) {
    e.split("&").forEach(function (e) {
      var n = e.replace(/\+/g, " ").split("=");
      var i = Ie(n.shift());
      var o = n.length > 0 ? Ie(n.join("=")) : null;
      if (t[i] === undefined) {
        t[i] = o;
      } else if (Array.isArray(t[i])) {
        t[i].push(o);
      } else {
        t[i] = [t[i], o];
      }
    });
    return t;
  } else {
    return t;
  }
}
function l(e) {
  var t = e ? Object.keys(e).map(function (t) {
    var n = e[t];
    if (n === undefined) {
      return "";
    }
    if (n === null) {
      return De(t);
    }
    if (Array.isArray(n)) {
      var i = [];
      n.forEach(function (e) {
        if (e !== undefined) {
          if (e === null) {
            i.push(De(t));
          } else {
            i.push(De(t) + "=" + De(e));
          }
        }
      });
      return i.join("&");
    }
    return De(t) + "=" + De(n);
  }).filter(function (e) {
    return e.length > 0;
  }).join("&") : null;
  if (t) {
    return "?" + t;
  } else {
    return "";
  }
}
function c(e, t, n, i) {
  var o = i && i.options.stringifyQuery;
  var a = {
    name: t.name || e && e.name,
    meta: e && e.meta || {},
    path: t.path || "/",
    hash: t.hash || "",
    query: t.query || {},
    params: t.params || {},
    fullPath: d(t, o),
    matched: e ? u(e) : []
  };
  if (n) {
    a.redirectedFrom = d(n, o);
  }
  return Object.freeze(a);
}
function u(e) {
  var t = [];
  for (; e;) {
    t.unshift(e);
    e = e.parent;
  }
  return t;
}
function d(e, t) {
  var n = e.path;
  var i = e.query;
  if (i === undefined) {
    i = {};
  }
  var o = e.hash;
  if (o === undefined) {
    o = "";
  }
  var a = t || l;
  return (n || "/") + a(i) + o;
}
function p(e, t) {
  if (t === Me) {
    return e === t;
  } else {
    return !!t && (e.path && t.path ? e.path.replace($e, "") === t.path.replace($e, "") && e.hash === t.hash && f(e.query, t.query) : !!e.name && !!t.name && e.name === t.name && e.hash === t.hash && f(e.query, t.query) && f(e.params, t.params));
  }
}
function f(e = {}, t = {}) {
  var n = Object.keys(e);
  var i = Object.keys(t);
  return n.length === i.length && n.every(function (n) {
    var i = e[n];
    var o = t[n];
    if (typeof i == "object" && typeof o == "object") {
      return f(i, o);
    } else {
      return String(i) === String(o);
    }
  });
}
function h(e, t) {
  return e.path.replace($e, "/").indexOf(t.path.replace($e, "/")) === 0 && (!t.hash || e.hash === t.hash) && m(e.query, t.query);
}
function m(e, t) {
  for (var n in t) {
    if (!(n in e)) {
      return false;
    }
  }
  return true;
}
function g(e) {
  if (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.defaultPrevented && (e.button === undefined || e.button === 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute && /\b_blank\b/i.test(e.currentTarget.getAttribute("target"))) {
      return;
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
    return true;
  }
}
function v(e) {
  if (e) {
    var t;
    for (var n = 0; n < e.length; n++) {
      if ((t = e[n]).tag === "a") {
        return t;
      }
      if (t.children && (t = v(t.children))) {
        return t;
      }
    }
  }
}
function b(e) {
  if (!b.installed) {
    b.installed = true;
    Pe = e;
    function t(e) {
      return e !== undefined;
    }
    function n(e, n) {
      var i = e.$options._parentVnode;
      if (t(i) && t(i = i.data) && t(i = i.registerRouteInstance)) {
        i(e, n);
      }
    }
    e.mixin({
      beforeCreate: function () {
        if (t(this.$options.router)) {
          this._routerRoot = this;
          this._router = this.$options.router;
          this._router.init(this);
          e.util.defineReactive(this, "_route", this._router.history.current);
        } else {
          this._routerRoot = this.$parent && this.$parent._routerRoot || this;
        }
        n(this, this);
      },
      destroyed: function () {
        n(this);
      }
    });
    Object.defineProperty(e.prototype, "$router", {
      get: function () {
        return this._routerRoot._router;
      }
    });
    Object.defineProperty(e.prototype, "$route", {
      get: function () {
        return this._routerRoot._route;
      }
    });
    e.component("router-view", je);
    e.component("router-link", Le);
    var i = e.config.optionMergeStrategies;
    i.beforeRouteEnter = i.beforeRouteLeave = i.beforeRouteUpdate = i.created;
  }
}
function y(e, t, n) {
  var i = e.charAt(0);
  if (i === "/") {
    return e;
  }
  if (i === "?" || i === "#") {
    return t + e;
  }
  var o = t.split("/");
  if (!n || !o[o.length - 1]) {
    o.pop();
  }
  for (var a = e.replace(/^\//, "").split("/"), s = 0; s < a.length; s++) {
    var r = a[s];
    if (r === "..") {
      o.pop();
    } else if (r !== ".") {
      o.push(r);
    }
  }
  if (o[0] !== "") {
    o.unshift("");
  }
  return o.join("/");
}
function w(e) {
  var t = "";
  var n = "";
  var i = e.indexOf("#");
  if (i >= 0) {
    t = e.slice(i);
    e = e.slice(0, i);
  }
  var o = e.indexOf("?");
  if (o >= 0) {
    n = e.slice(o + 1);
    e = e.slice(0, o);
  }
  return {
    path: e,
    query: n,
    hash: t
  };
}
function _(e) {
  return e.replace(/\/\//g, "/");
}
function k(e, t) {
  for (var n, i = [], o = 0, a = 0, s = "", r = t && t.delimiter || "/"; (n = We.exec(e)) != null;) {
    var l = n[0];
    var c = n[1];
    var u = n.index;
    s += e.slice(a, u);
    a = u + l.length;
    if (c) {
      s += c[1];
    } else {
      var d = e[a];
      var p = n[2];
      var f = n[3];
      var h = n[4];
      var m = n[5];
      var g = n[6];
      var v = n[7];
      if (s) {
        i.push(s);
        s = "";
      }
      var b = p != null && d != null && d !== p;
      var y = g === "+" || g === "*";
      var w = g === "?" || g === "*";
      var _ = n[2] || r;
      var k = h || m;
      i.push({
        name: f || o++,
        prefix: p || "",
        delimiter: _,
        optional: w,
        repeat: y,
        partial: b,
        asterisk: !!v,
        pattern: k ? T(k) : v ? ".*" : "[^" + A(_) + "]+?"
      });
    }
  }
  if (a < e.length) {
    s += e.substr(a);
  }
  if (s) {
    i.push(s);
  }
  return i;
}
function x(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function C(e) {
  return encodeURI(e).replace(/[?#]/g, function (e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
function S(e) {
  var t = new Array(e.length);
  for (var n = 0; n < e.length; n++) {
    if (typeof e[n] == "object") {
      t[n] = new RegExp("^(?:" + e[n].pattern + ")$");
    }
  }
  return function (n, i) {
    var o = "";
    var a = n || {};
    var s = (i || {}).pretty ? x : encodeURIComponent;
    for (var r = 0; r < e.length; r++) {
      var l = e[r];
      if (typeof l != "string") {
        var c;
        var u = a[l.name];
        if (u == null) {
          if (l.optional) {
            if (l.partial) {
              o += l.prefix;
            }
            continue;
          }
          throw new TypeError("Expected \"" + l.name + "\" to be defined");
        }
        if (He(u)) {
          if (!l.repeat) {
            throw new TypeError("Expected \"" + l.name + "\" to not repeat, but received `" + JSON.stringify(u) + "`");
          }
          if (u.length === 0) {
            if (l.optional) {
              continue;
            }
            throw new TypeError("Expected \"" + l.name + "\" to not be empty");
          }
          for (var d = 0; d < u.length; d++) {
            c = s(u[d]);
            if (!t[r].test(c)) {
              throw new TypeError("Expected all \"" + l.name + "\" to match \"" + l.pattern + "\", but received `" + JSON.stringify(c) + "`");
            }
            o += (d === 0 ? l.prefix : l.delimiter) + c;
          }
        } else {
          c = l.asterisk ? C(u) : s(u);
          if (!t[r].test(c)) {
            throw new TypeError("Expected \"" + l.name + "\" to match \"" + l.pattern + "\", but received \"" + c + "\"");
          }
          o += l.prefix + c;
        }
      } else {
        o += l;
      }
    }
    return o;
  };
}
function A(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function T(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function P(e, t) {
  e.keys = t;
  return e;
}
function j(e) {
  if (e.sensitive) {
    return "";
  } else {
    return "i";
  }
}
function E(e, t) {
  var n = e.source.match(/\((?!\?)/g);
  if (n) {
    for (var i = 0; i < n.length; i++) {
      t.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return P(e, t);
}
function N(e, t, n) {
  var i = [];
  for (var o = 0; o < e.length; o++) {
    i.push(I(e[o], t, n).source);
  }
  return P(new RegExp("(?:" + i.join("|") + ")", j(n)), t);
}
function O(e, t, n) {
  return D(k(e, n), t, n);
}
function D(e, t, n) {
  if (!He(t)) {
    n = t || n;
    t = [];
  }
  var i = (n = n || {}).strict;
  var o = n.end !== false;
  var a = "";
  for (var s = 0; s < e.length; s++) {
    var r = e[s];
    if (typeof r == "string") {
      a += A(r);
    } else {
      var l = A(r.prefix);
      var c = "(?:" + r.pattern + ")";
      t.push(r);
      if (r.repeat) {
        c += "(?:" + l + c + ")*";
      }
      a += c = r.optional ? r.partial ? l + "(" + c + ")?" : "(?:" + l + "(" + c + "))?" : l + "(" + c + ")";
    }
  }
  var u = A(n.delimiter || "/");
  var d = a.slice(-u.length) === u;
  if (!i) {
    a = (d ? a.slice(0, -u.length) : a) + "(?:" + u + "(?=$))?";
  }
  a += o ? "$" : i && d ? "" : "(?=" + u + "|$)";
  return P(new RegExp("^" + a, j(n)), t);
}
function I(e, t, n) {
  if (!He(t)) {
    n = t || n;
    t = [];
  }
  n = n || {};
  if (e instanceof RegExp) {
    return E(e, t);
  } else if (He(e)) {
    return N(e, t, n);
  } else {
    return O(e, t, n);
  }
}
function $(e, t, n) {
  try {
    return (Ge[e] ||= Be.compile(e))(t || {}, {
      pretty: true
    });
  } catch (e) {
    return "";
  }
}
function M(e, t, n, i) {
  var o = t || [];
  var a = n || Object.create(null);
  var s = i || Object.create(null);
  e.forEach(function (e) {
    z(o, a, s, e);
  });
  for (var r = 0, l = o.length; r < l; r++) {
    if (o[r] === "*") {
      o.push(o.splice(r, 1)[0]);
      l--;
      r--;
    }
  }
  return {
    pathList: o,
    pathMap: a,
    nameMap: s
  };
}
function z(e, t, n, i, o, a) {
  var s = i.path;
  var r = i.name;
  var l = L(s, o);
  var c = i.pathToRegexpOptions || {};
  if (typeof i.caseSensitive == "boolean") {
    c.sensitive = i.caseSensitive;
  }
  var u = {
    path: l,
    regex: F(l, c),
    components: i.components || {
      default: i.component
    },
    instances: {},
    name: r,
    parent: o,
    matchAs: a,
    redirect: i.redirect,
    beforeEnter: i.beforeEnter,
    meta: i.meta || {},
    props: i.props == null ? {} : i.components ? i.props : {
      default: i.props
    }
  };
  if (i.children) {
    i.children.forEach(function (i) {
      var o = a ? _(a + "/" + i.path) : undefined;
      z(e, t, n, i, u, o);
    });
  }
  if (i.alias !== undefined) {
    (Array.isArray(i.alias) ? i.alias : [i.alias]).forEach(function (a) {
      var s = {
        path: a,
        children: i.children
      };
      z(e, t, n, s, o, u.path || "/");
    });
  }
  if (!t[u.path]) {
    e.push(u.path);
    t[u.path] = u;
  }
  if (r) {
    n[r] ||= u;
  }
}
function F(e, t) {
  return Be(e, [], t);
}
function L(e, t) {
  if ((e = e.replace(/\/$/, ""))[0] === "/") {
    return e;
  } else if (t == null) {
    return e;
  } else {
    return _(t.path + "/" + e);
  }
}
function R(e, t, n, i) {
  var o = typeof e == "string" ? {
    path: e
  } : e;
  if (o.name || o._normalized) {
    return o;
  }
  if (!o.path && o.params && t) {
    (o = H({}, o))._normalized = true;
    var a = H(H({}, t.params), o.params);
    if (t.name) {
      o.name = t.name;
      o.params = a;
    } else if (t.matched.length) {
      var r = t.matched[t.matched.length - 1].path;
      o.path = $(r, a, "path " + t.path);
    }
    return o;
  }
  var l = w(o.path || "");
  var c = t && t.path || "/";
  var u = l.path ? y(l.path, c, n || o.append) : c;
  var d = s(l.query, o.query, i && i.options.parseQuery);
  var p = o.hash || l.hash;
  if (p && p.charAt(0) !== "#") {
    p = "#" + p;
  }
  return {
    _normalized: true,
    path: u,
    query: d,
    hash: p
  };
}
function H(e, t) {
  for (var n in t) {
    e[n] = t[n];
  }
  return e;
}
function B(e, t) {
  function n(e, n, i) {
    var o = R(e, n, false, t);
    var s = o.name;
    if (s) {
      var c = u[s];
      if (!c) {
        return a(null, o);
      }
      var d = c.regex.keys.filter(function (e) {
        return !e.optional;
      }).map(function (e) {
        return e.name;
      });
      if (typeof o.params != "object") {
        o.params = {};
      }
      if (n && typeof n.params == "object") {
        for (var p in n.params) {
          if (!(p in o.params) && d.indexOf(p) > -1) {
            o.params[p] = n.params[p];
          }
        }
      }
      if (c) {
        o.path = $(c.path, o.params, "named route \"" + s + "\"");
        return a(c, o, i);
      }
    } else if (o.path) {
      o.params = {};
      for (var f = 0; f < r.length; f++) {
        var h = r[f];
        var m = l[h];
        if (q(m.regex, o.path, o.params)) {
          return a(m, o, i);
        }
      }
    }
    return a(null, o);
  }
  function i(e, i) {
    var o = e.redirect;
    var s = typeof o == "function" ? o(c(e, i, null, t)) : o;
    if (typeof s == "string") {
      s = {
        path: s
      };
    }
    if (!s || typeof s != "object") {
      return a(null, i);
    }
    var r = s;
    var l = r.name;
    var d = r.path;
    var p = i.query;
    var f = i.hash;
    var h = i.params;
    p = r.hasOwnProperty("query") ? r.query : p;
    f = r.hasOwnProperty("hash") ? r.hash : f;
    h = r.hasOwnProperty("params") ? r.params : h;
    if (l) {
      u[l];
      return n({
        _normalized: true,
        name: l,
        query: p,
        hash: f,
        params: h
      }, undefined, i);
    }
    if (d) {
      var m = V(d, e);
      return n({
        _normalized: true,
        path: $(m, h, "redirect route with path \"" + m + "\""),
        query: p,
        hash: f
      }, undefined, i);
    }
    return a(null, i);
  }
  function o(e, t, i) {
    var o = n({
      _normalized: true,
      path: $(i, t.params, "aliased route with path \"" + i + "\"")
    });
    if (o) {
      var s = o.matched;
      var r = s[s.length - 1];
      t.params = o.params;
      return a(r, t);
    }
    return a(null, t);
  }
  function a(e, n, a) {
    if (e && e.redirect) {
      return i(e, a || n);
    } else if (e && e.matchAs) {
      return o(e, n, e.matchAs);
    } else {
      return c(e, n, a, t);
    }
  }
  var s = M(e);
  var r = s.pathList;
  var l = s.pathMap;
  var u = s.nameMap;
  return {
    match: n,
    addRoutes: function (e) {
      M(e, r, l, u);
    }
  };
}
function q(e, t, n) {
  var i = t.match(e);
  if (!i) {
    return false;
  }
  if (!n) {
    return true;
  }
  for (var o = 1, a = i.length; o < a; ++o) {
    var s = e.keys[o - 1];
    var r = typeof i[o] == "string" ? decodeURIComponent(i[o]) : i[o];
    if (s) {
      n[s.name] = r;
    }
  }
  return true;
}
function V(e, t) {
  return y(e, t.parent ? t.parent.path : "/", true);
}
function U() {
  window.addEventListener("popstate", function (e) {
    G();
    if (e.state && e.state.key) {
      ne(e.state.key);
    }
  });
}
function W(e, t, n, i) {
  if (e.app) {
    var o = e.options.scrollBehavior;
    if (o) {
      e.app.$nextTick(function () {
        var e = Y();
        var a = o(t, n, i ? e : null);
        if (a) {
          var s = typeof a == "object";
          if (s && typeof a.selector == "string") {
            var r = document.querySelector(a.selector);
            if (r) {
              var l = a.offset && typeof a.offset == "object" ? a.offset : {};
              e = K(r, l = Z(l));
            } else if (J(a)) {
              e = X(a);
            }
          } else if (s && J(a)) {
            e = X(a);
          }
          if (e) {
            window.scrollTo(e.x, e.y);
          }
        }
      });
    }
  }
}
function G() {
  var e = te();
  if (e) {
    Ye[e] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}
function Y() {
  var e = te();
  if (e) {
    return Ye[e];
  }
}
function K(e, t) {
  var n = document.documentElement.getBoundingClientRect();
  var i = e.getBoundingClientRect();
  return {
    x: i.left - n.left - t.x,
    y: i.top - n.top - t.y
  };
}
function J(e) {
  return Q(e.x) || Q(e.y);
}
function X(e) {
  return {
    x: Q(e.x) ? e.x : window.pageXOffset,
    y: Q(e.y) ? e.y : window.pageYOffset
  };
}
function Z(e) {
  return {
    x: Q(e.x) ? e.x : 0,
    y: Q(e.y) ? e.y : 0
  };
}
function Q(e) {
  return typeof e == "number";
}
function ee() {
  return Je.now().toFixed(3);
}
function te() {
  return Xe;
}
function ne(e) {
  Xe = e;
}
function ie(e, t) {
  G();
  var n = window.history;
  try {
    if (t) {
      n.replaceState({
        key: Xe
      }, "", e);
    } else {
      Xe = ee();
      n.pushState({
        key: Xe
      }, "", e);
    }
  } catch (n) {
    window.location[t ? "replace" : "assign"](e);
  }
}
function oe(e) {
  ie(e, true);
}
function ae(e, t, n) {
  function i(o) {
    if (o >= e.length) {
      n();
    } else if (e[o]) {
      t(e[o], function () {
        i(o + 1);
      });
    } else {
      i(o + 1);
    }
  }
  i(0);
}
function se(e) {
  return function (t, n, i) {
    var a = false;
    var s = 0;
    var r = null;
    re(e, function (e, t, n, l) {
      if (typeof e == "function" && e.cid === undefined) {
        a = true;
        s++;
        var c;
        var u = ce(function (t) {
          if (t.__esModule && t.default) {
            t = t.default;
          }
          e.resolved = typeof t == "function" ? t : Pe.extend(t);
          n.components[l] = t;
          if (--s <= 0) {
            i();
          }
        });
        var d = ce(function (e) {
          var t = "Failed to resolve async component " + l + ": " + e;
          if (!r) {
            r = o(e) ? e : new Error(t);
            i(r);
          }
        });
        try {
          c = e(u, d);
        } catch (e) {
          d(e);
        }
        if (c) {
          if (typeof c.then == "function") {
            c.then(u, d);
          } else {
            var p = c.component;
            if (p && typeof p.then == "function") {
              p.then(u, d);
            }
          }
        }
      }
    });
    if (!a) {
      i();
    }
  };
}
function re(e, t) {
  return le(e.map(function (e) {
    return Object.keys(e.components).map(function (n) {
      return t(e.components[n], e.instances[n], e, n);
    });
  }));
}
function le(e) {
  return Array.prototype.concat.apply([], e);
}
function ce(e) {
  var t = false;
  return function () {
    var n = [];
    for (var i = arguments.length; i--;) {
      n[i] = arguments[i];
    }
    if (!t) {
      t = true;
      return e.apply(this, n);
    }
  };
}
function ue(e) {
  if (!e) {
    if (Re) {
      var t = document.querySelector("base");
      e = (e = t && t.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "");
    } else {
      e = "/";
    }
  }
  if (e.charAt(0) !== "/") {
    e = "/" + e;
  }
  return e.replace(/\/$/, "");
}
function de(e, t) {
  var n;
  var i = Math.max(e.length, t.length);
  for (n = 0; n < i && e[n] === t[n]; n++);
  return {
    updated: t.slice(0, n),
    activated: t.slice(n),
    deactivated: e.slice(n)
  };
}
function pe(e, t, n, i) {
  var o = re(e, function (e, i, o, a) {
    var s = fe(e, t);
    if (s) {
      if (Array.isArray(s)) {
        return s.map(function (e) {
          return n(e, i, o, a);
        });
      } else {
        return n(s, i, o, a);
      }
    }
  });
  return le(i ? o.reverse() : o);
}
function fe(e, t) {
  if (typeof e != "function") {
    e = Pe.extend(e);
  }
  return e.options[t];
}
function he(e) {
  return pe(e, "beforeRouteLeave", ge, true);
}
function me(e) {
  return pe(e, "beforeRouteUpdate", ge);
}
function ge(e, t) {
  if (t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
}
function ve(e, t, n) {
  return pe(e, "beforeRouteEnter", function (e, i, o, a) {
    return be(e, o, a, t, n);
  });
}
function be(e, t, n, i, o) {
  return function (a, s, r) {
    return e(a, s, function (e) {
      r(e);
      if (typeof e == "function") {
        i.push(function () {
          ye(e, t.instances, n, o);
        });
      }
    });
  };
}
function ye(e, t, n, i) {
  if (t[n]) {
    e(t[n]);
  } else if (i()) {
    setTimeout(function () {
      ye(e, t, n, i);
    }, 16);
  }
}
function we(e) {
  var t = window.location.pathname;
  if (e && t.indexOf(e) === 0) {
    t = t.slice(e.length);
  }
  return (t || "/") + window.location.search + window.location.hash;
}
function _e(e) {
  var t = we(e);
  if (!/^\/#/.test(t)) {
    window.location.replace(_(e + "/#" + t));
    return true;
  }
}
function ke() {
  var e = xe();
  return e.charAt(0) === "/" || (Se("/" + e), false);
}
function xe() {
  var e = window.location.href;
  var t = e.indexOf("#");
  if (t === -1) {
    return "";
  } else {
    return e.slice(t + 1);
  }
}
function Ce(e) {
  window.location.hash = e;
}
function Se(e) {
  var t = window.location.href;
  var n = t.indexOf("#");
  var i = n >= 0 ? t.slice(0, n) : t;
  window.location.replace(i + "#" + e);
}
function Ae(e, t) {
  e.push(t);
  return function () {
    var n = e.indexOf(t);
    if (n > -1) {
      e.splice(n, 1);
    }
  };
}
function Te(e, t, n) {
  var i = n === "hash" ? "#" + t : t;
  if (e) {
    return _(e + "/" + i);
  } else {
    return i;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var Pe;
var je = {
  name: "router-view",
  functional: true,
  props: {
    name: {
      type: String,
      default: "default"
    }
  },
  render: function (e, t) {
    var n = t.props;
    var i = t.children;
    var o = t.parent;
    var s = t.data;
    s.routerView = true;
    var r = o.$createElement;
    var l = n.name;
    var c = o.$route;
    var u = o._routerViewCache ||= {};
    var d = 0;
    var p = false;
    for (; o && o._routerRoot !== o;) {
      if (o.$vnode && o.$vnode.data.routerView) {
        d++;
      }
      if (o._inactive) {
        p = true;
      }
      o = o.$parent;
    }
    s.routerViewDepth = d;
    if (p) {
      return r(u[l], s, i);
    }
    var f = c.matched[d];
    if (!f) {
      u[l] = null;
      return r();
    }
    var h = u[l] = f.components[l];
    s.registerRouteInstance = function (e, t) {
      var n = f.instances[l];
      if (t && n !== e || !t && n === e) {
        f.instances[l] = t;
      }
    };
    (s.hook ||= {}).prepatch = function (e, t) {
      f.instances[l] = t.componentInstance;
    };
    s.props = a(c, f.props && f.props[l]);
    return r(h, s, i);
  }
};
var Ee = /[!'()*]/g;
function Ne(e) {
  return "%" + e.charCodeAt(0).toString(16);
}
var Oe = /%2C/g;
function De(e) {
  return encodeURIComponent(e).replace(Ee, Ne).replace(Oe, ",");
}
var Ie = decodeURIComponent;
var $e = /\/?$/;
var Me = c(null, {
  path: "/"
});
var ze = [String, Object];
var Fe = [String, Array];
var Le = {
  name: "router-link",
  props: {
    to: {
      type: ze,
      required: true
    },
    tag: {
      type: String,
      default: "a"
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: Fe,
      default: "click"
    }
  },
  render: function (e) {
    var t = this;
    var n = this.$router;
    var i = this.$route;
    var o = n.resolve(this.to, i, this.append);
    var a = o.location;
    var s = o.route;
    var r = o.href;
    var l = {};
    var u = n.options.linkActiveClass;
    var d = n.options.linkExactActiveClass;
    var f = u == null ? "router-link-active" : u;
    var m = d == null ? "router-link-exact-active" : d;
    var b = this.activeClass == null ? f : this.activeClass;
    var y = this.exactActiveClass == null ? m : this.exactActiveClass;
    var w = a.path ? c(null, a, null, n) : s;
    l[y] = p(i, w);
    l[b] = this.exact ? l[y] : h(i, w);
    function _(e) {
      if (g(e)) {
        if (t.replace) {
          n.replace(a);
        } else {
          n.push(a);
        }
      }
    }
    var k = {
      click: g
    };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        k[e] = _;
      });
    } else {
      k[this.event] = _;
    }
    var x = {
      class: l
    };
    if (this.tag === "a") {
      x.on = k;
      x.attrs = {
        href: r
      };
    } else {
      var C = v(this.$slots.default);
      if (C) {
        C.isStatic = false;
        var S = Pe.util.extend;
        (C.data = S({}, C.data)).on = k;
        (C.data.attrs = S({}, C.data.attrs)).href = r;
      } else {
        x.on = k;
      }
    }
    return e(this.tag, x, this.$slots.default);
  }
};
var Re = typeof window != "undefined";
var He = Array.isArray || function (e) {
  return Object.prototype.toString.call(e) == "[object Array]";
};
var Be = I;
var qe = k;
var Ve = S;
var Ue = D;
var We = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
Be.parse = qe;
Be.compile = function (e, t) {
  return S(k(e, t));
};
Be.tokensToFunction = Ve;
Be.tokensToRegExp = Ue;
var Ge = Object.create(null);
var Ye = Object.create(null);
var Ke = Re && function () {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") === -1 && e.indexOf("Android 4.0") === -1 || e.indexOf("Mobile Safari") === -1 || e.indexOf("Chrome") !== -1 || e.indexOf("Windows Phone") !== -1) && window.history && "pushState" in window.history;
}();
var Je = Re && window.performance && window.performance.now ? window.performance : Date;
var Xe = ee();
function Ze(e, t) {
  this.router = e;
  this.base = ue(t);
  this.current = Me;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
}
Ze.prototype.listen = function (e) {
  this.cb = e;
};
Ze.prototype.onReady = function (e, t) {
  if (this.ready) {
    e();
  } else {
    this.readyCbs.push(e);
    if (t) {
      this.readyErrorCbs.push(t);
    }
  }
};
Ze.prototype.onError = function (e) {
  this.errorCbs.push(e);
};
Ze.prototype.transitionTo = function (e, t, n) {
  var i = this;
  var o = this.router.match(e, this.current);
  this.confirmTransition(o, function () {
    i.updateRoute(o);
    if (t) {
      t(o);
    }
    i.ensureURL();
    if (!i.ready) {
      i.ready = true;
      i.readyCbs.forEach(function (e) {
        e(o);
      });
    }
  }, function (e) {
    if (n) {
      n(e);
    }
    if (e && !i.ready) {
      i.ready = true;
      i.readyErrorCbs.forEach(function (t) {
        t(e);
      });
    }
  });
};
Ze.prototype.confirmTransition = function (e, t, n) {
  var a = this;
  var s = this.current;
  function r(e) {
    if (o(e)) {
      if (a.errorCbs.length) {
        a.errorCbs.forEach(function (t) {
          t(e);
        });
      } else {
        i();
        console.error(e);
      }
    }
    if (n) {
      n(e);
    }
  }
  if (p(e, s) && e.matched.length === s.matched.length) {
    this.ensureURL();
    return r();
  }
  var l = de(this.current.matched, e.matched);
  var c = l.updated;
  var u = l.deactivated;
  var d = l.activated;
  var f = [].concat(he(u), this.router.beforeHooks, me(c), d.map(function (e) {
    return e.beforeEnter;
  }), se(d));
  this.pending = e;
  function h(t, n) {
    if (a.pending !== e) {
      return r();
    }
    try {
      t(e, s, function (e) {
        if (e === false || o(e)) {
          a.ensureURL(true);
          r(e);
        } else if (typeof e == "string" || typeof e == "object" && (typeof e.path == "string" || typeof e.name == "string")) {
          r();
          if (typeof e == "object" && e.replace) {
            a.replace(e);
          } else {
            a.push(e);
          }
        } else {
          n(e);
        }
      });
    } catch (e) {
      r(e);
    }
  }
  ae(f, h, function () {
    var n = [];
    ae(ve(d, n, function () {
      return a.current === e;
    }).concat(a.router.resolveHooks), h, function () {
      if (a.pending !== e) {
        return r();
      }
      a.pending = null;
      t(e);
      if (a.router.app) {
        a.router.app.$nextTick(function () {
          n.forEach(function (e) {
            e();
          });
        });
      }
    });
  });
};
Ze.prototype.updateRoute = function (e) {
  var t = this.current;
  this.current = e;
  if (this.cb) {
    this.cb(e);
  }
  this.router.afterHooks.forEach(function (n) {
    if (n) {
      n(e, t);
    }
  });
};
var Qe = function (e) {
  function t(t, n) {
    var i = this;
    e.call(this, t, n);
    var o = t.options.scrollBehavior;
    if (o) {
      U();
    }
    window.addEventListener("popstate", function (e) {
      var n = i.current;
      i.transitionTo(we(i.base), function (e) {
        if (o) {
          W(t, e, n, true);
        }
      });
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.go = function (e) {
    window.history.go(e);
  };
  t.prototype.push = function (e, t, n) {
    var i = this;
    var o = this.current;
    this.transitionTo(e, function (e) {
      ie(_(i.base + e.fullPath));
      W(i.router, e, o, false);
      if (t) {
        t(e);
      }
    }, n);
  };
  t.prototype.replace = function (e, t, n) {
    var i = this;
    var o = this.current;
    this.transitionTo(e, function (e) {
      oe(_(i.base + e.fullPath));
      W(i.router, e, o, false);
      if (t) {
        t(e);
      }
    }, n);
  };
  t.prototype.ensureURL = function (e) {
    if (we(this.base) !== this.current.fullPath) {
      var t = _(this.base + this.current.fullPath);
      if (e) {
        ie(t);
      } else {
        oe(t);
      }
    }
  };
  t.prototype.getCurrentLocation = function () {
    return we(this.base);
  };
  return t;
}(Ze);
var et = function (e) {
  function t(t, n, i) {
    e.call(this, t, n);
    if (!i || !_e(this.base)) {
      ke();
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.setupListeners = function () {
    var e = this;
    window.addEventListener("hashchange", function () {
      if (ke()) {
        e.transitionTo(xe(), function (e) {
          Se(e.fullPath);
        });
      }
    });
  };
  t.prototype.push = function (e, t, n) {
    this.transitionTo(e, function (e) {
      Ce(e.fullPath);
      if (t) {
        t(e);
      }
    }, n);
  };
  t.prototype.replace = function (e, t, n) {
    this.transitionTo(e, function (e) {
      Se(e.fullPath);
      if (t) {
        t(e);
      }
    }, n);
  };
  t.prototype.go = function (e) {
    window.history.go(e);
  };
  t.prototype.ensureURL = function (e) {
    var t = this.current.fullPath;
    if (xe() !== t) {
      if (e) {
        Ce(t);
      } else {
        Se(t);
      }
    }
  };
  t.prototype.getCurrentLocation = function () {
    return xe();
  };
  return t;
}(Ze);
var tt = function (e) {
  function t(t, n) {
    e.call(this, t, n);
    this.stack = [];
    this.index = -1;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.push = function (e, t, n) {
    var i = this;
    this.transitionTo(e, function (e) {
      i.stack = i.stack.slice(0, i.index + 1).concat(e);
      i.index++;
      if (t) {
        t(e);
      }
    }, n);
  };
  t.prototype.replace = function (e, t, n) {
    var i = this;
    this.transitionTo(e, function (e) {
      i.stack = i.stack.slice(0, i.index).concat(e);
      if (t) {
        t(e);
      }
    }, n);
  };
  t.prototype.go = function (e) {
    var t = this;
    var n = this.index + e;
    if (!(n < 0) && !(n >= this.stack.length)) {
      var i = this.stack[n];
      this.confirmTransition(i, function () {
        t.index = n;
        t.updateRoute(i);
      });
    }
  };
  t.prototype.getCurrentLocation = function () {
    var e = this.stack[this.stack.length - 1];
    if (e) {
      return e.fullPath;
    } else {
      return "/";
    }
  };
  t.prototype.ensureURL = function () {};
  return t;
}(Ze);
function nt(e = {}) {
  this.app = null;
  this.apps = [];
  this.options = e;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = B(e.routes || [], this);
  var t = e.mode || "hash";
  this.fallback = t === "history" && !Ke && e.fallback !== false;
  if (this.fallback) {
    t = "hash";
  }
  if (!Re) {
    t = "abstract";
  }
  this.mode = t;
  switch (t) {
    case "history":
      this.history = new Qe(this, e.base);
      break;
    case "hash":
      this.history = new et(this, e.base, this.fallback);
      break;
    case "abstract":
      this.history = new tt(this, e.base);
  }
}
var it = {
  currentRoute: {}
};
nt.prototype.match = function (e, t, n) {
  return this.matcher.match(e, t, n);
};
it.currentRoute.get = function () {
  return this.history && this.history.current;
};
nt.prototype.init = function (e) {
  var t = this;
  this.apps.push(e);
  if (!this.app) {
    this.app = e;
    var n = this.history;
    if (n instanceof Qe) {
      n.transitionTo(n.getCurrentLocation());
    } else if (n instanceof et) {
      function i() {
        n.setupListeners();
      }
      n.transitionTo(n.getCurrentLocation(), i, i);
    }
    n.listen(function (e) {
      t.apps.forEach(function (t) {
        t._route = e;
      });
    });
  }
};
nt.prototype.beforeEach = function (e) {
  return Ae(this.beforeHooks, e);
};
nt.prototype.beforeResolve = function (e) {
  return Ae(this.resolveHooks, e);
};
nt.prototype.afterEach = function (e) {
  return Ae(this.afterHooks, e);
};
nt.prototype.onReady = function (e, t) {
  this.history.onReady(e, t);
};
nt.prototype.onError = function (e) {
  this.history.onError(e);
};
nt.prototype.push = function (e, t, n) {
  this.history.push(e, t, n);
};
nt.prototype.replace = function (e, t, n) {
  this.history.replace(e, t, n);
};
nt.prototype.go = function (e) {
  this.history.go(e);
};
nt.prototype.back = function () {
  this.go(-1);
};
nt.prototype.forward = function () {
  this.go(1);
};
nt.prototype.getMatchedComponents = function (e) {
  var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
  if (t) {
    return [].concat.apply([], t.matched.map(function (e) {
      return Object.keys(e.components).map(function (t) {
        return e.components[t];
      });
    }));
  } else {
    return [];
  }
};
nt.prototype.resolve = function (e, t, n) {
  var i = R(e, t || this.history.current, n, this);
  var o = this.match(i, t);
  var a = o.redirectedFrom || o.fullPath;
  return {
    location: i,
    route: o,
    href: Te(this.history.base, a, this.mode),
    normalizedTo: i,
    resolved: o
  };
};
nt.prototype.addRoutes = function (e) {
  this.matcher.addRoutes(e);
  if (this.history.current !== Me) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
Object.defineProperties(nt.prototype, it);
nt.install = b;
nt.version = "2.7.0";
if (Re && window.Vue) {
  window.Vue.use(nt);
}
exports.default = nt;