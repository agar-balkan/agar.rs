function i(e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    var i = u[n.id];
    if (i) {
      i.refs++;
      for (s = 0; s < i.parts.length; s++) {
        i.parts[s](n.parts[s]);
      }
      for (; s < n.parts.length; s++) {
        i.parts.push(a(n.parts[s]));
      }
      if (i.parts.length > n.parts.length) {
        i.parts.length = n.parts.length;
      }
    } else {
      var o = [];
      for (var s = 0; s < n.parts.length; s++) {
        o.push(a(n.parts[s]));
      }
      u[n.id] = {
        id: n.id,
        refs: 1,
        parts: o
      };
    }
  }
}
function o() {
  var e = document.createElement("style");
  e.type = "text/css";
  d.appendChild(e);
  return e;
}
function a(e) {
  var t;
  var n;
  var i = document.querySelector("style[data-vue-ssr-id~=\"" + e.id + "\"]");
  if (i) {
    if (h) {
      return m;
    }
    i.parentNode.removeChild(i);
  }
  if (g) {
    var a = f++;
    i = p ||= o();
    t = s.bind(null, i, a, false);
    n = s.bind(null, i, a, true);
  } else {
    i = o();
    t = r.bind(null, i);
    n = function () {
      i.parentNode.removeChild(i);
    };
  }
  t(e);
  return function (i) {
    if (i) {
      if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap) {
        return;
      }
      t(e = i);
    } else {
      n();
    }
  };
}
function s(e, t, n, i) {
  var o = n ? "" : i.css;
  if (e.styleSheet) {
    e.styleSheet.cssText = v(t, o);
  } else {
    var a = document.createTextNode(o);
    var s = e.childNodes;
    if (s[t]) {
      e.removeChild(s[t]);
    }
    if (s.length) {
      e.insertBefore(a, s[t]);
    } else {
      e.appendChild(a);
    }
  }
}
function r(e, t) {
  var n = t.css;
  var i = t.media;
  var o = t.sourceMap;
  if (i) {
    e.setAttribute("media", i);
  }
  if (o) {
    n += "\n/*# sourceURL=" + o.sources[0] + " */";
    n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */";
  }
  if (e.styleSheet) {
    e.styleSheet.cssText = n;
  } else {
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
    e.appendChild(document.createTextNode(n));
  }
}
var l = typeof document != "undefined";
if (typeof DEBUG != "undefined" && DEBUG && !l) {
  throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
}
var c = require("./167.js");
var u = {};
var d = l && (document.head || document.getElementsByTagName("head")[0]);
var p = null;
var f = 0;
var h = false;
function m() {}
var g = typeof navigator != "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
module.exports = function (e, t, n) {
  h = n;
  var o = c(e, t);
  i(o);
  return function (t) {
    var n = [];
    for (var a = 0; a < o.length; a++) {
      var s = o[a];
      (r = u[s.id]).refs--;
      n.push(r);
    }
    if (t) {
      o = c(e, t);
      i(o);
    } else {
      o = [];
    }
    for (a = 0; a < n.length; a++) {
      var r = n[a];
      if (r.refs === 0) {
        for (var l = 0; l < r.parts.length; l++) {
          r.parts[l]();
        }
        delete u[r.id];
      }
    }
  };
};
var v = function () {
  var e = [];
  return function (t, n) {
    e[t] = n;
    return e.filter(Boolean).join("\n");
  };
}();