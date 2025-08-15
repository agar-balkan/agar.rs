function i(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
var o = i(require("./19.js"));
var a = i(require("./18.js"));
var s = require("./9.js");
var r = require("./11.js");
var l = require("./13.js");
var c = require("./10.js");
var u = require("./14.js");
var d = require("./12.js");
var p = i(require("./17.js"));
var f = i(require("./7.js"));
var h = i(require("./20.js"));
var m = i(require("./6.js"));
var g = i(require("./16.js"));
var v = i(require("./15.js"));
var b = require("./21.js");
window.base_url = location.protocol + "//agar.rs/";
window.base_url2 = "/agar.rs/services/";
window.YT_API = "";
window.choosenSkin = "";
window.serverLocation = "";
window.domainFrom = window.location.host;
window.gameKeys = {
  splitCell: " ",
  eject: "w",
  macroEject: "",
  close: "escape",
  spectate: "q",
  doubleSplit: null,
  quadSplit: null,
  zoomIn: "1",
  zoomOut: "2",
  arrowup: "arrowup",
  arrowdown: "arrowdown",
  arrowleft: "arrowleft",
  arrowright: "arrowright"
};
if (localStorage.getItem("gameKeys")) {
  try {
    var y = JSON.parse(localStorage.getItem("gameKeys"));
    for (var w in y) {
      if (y[w] != null) {
        window.gameKeys[w] = y[w];
      }
    }
  } catch (e) {
    console.log(e);
  }
}
f.default.use(a.default);
f.default.use(p.default);
var _ = {
  ba: s.lang_ba,
  hr: r.lang_hr,
  rs: l.lang_rs,
  gb: c.lang_gb,
  si: u.lang_si,
  mk: d.lang_mk
};
var k = ("; " + document.cookie).split("; lang=");
if (k.length == 2) {
  var x = k.pop().split(";").shift();
}
if (x) {
  window.lang = x;
} else if (domainFrom == "agar-balkan.github.io" || domainFrom == "agar-balkan.github.io") {
  window.lang = "gb";
} else {
  window.lang = "gb";
}
window.i18n = new p.default({
  locale: lang,
  fallbackLocale: "gb",
  messages: _
});
window.onbeforeunload = function () {
  return true;
};
var C = new a.default({
  mode: "history",
  scrollBehavior: function (e, t, n) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: v.default,
  linkActiveClass: "active"
});
f.default.use(o.default, {
  appName: "Agar Balkan",
  appVersion: "1.0.0",
  trackingId: "UA-100000000-1",
  debug: false,
  vueRouter: C
});
(0, b.sync)(g.default, C);
f.default.use(h.default);
new f.default({
  router: C,
  store: g.default,
  i18n: i18n,
  render: function (e) {
    return e(m.default);
  }
}).$mount("#app");