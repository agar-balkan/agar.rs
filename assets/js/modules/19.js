module.exports = function (e) {
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var o = n[i] = {
      exports: {},
      id: i,
      loaded: false
    };
    e[i].call(o.exports, o, o.exports, t);
    o.loaded = true;
    return o.exports;
  }
  var n = {};
  t.m = e;
  t.c = n;
  t.p = "";
  return t(0);
}([function (e, t, n) {
  e.exports = n(1);
}, function (e, t, n) {
  "use strict";

  function i(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var a = i(n(2));
  var s = i(n(3));
  var r = function (e) {
    if (e && e.__esModule) {
      return e;
    }
    var t = {};
    if (e != null) {
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[n] = e[n];
        }
      }
    }
    t.default = e;
    return t;
  }(n(4));
  function l(e, t, n) {
    n &&= n.map(function (e) {
      return e.toLowerCase();
    });
    t.afterEach(function (t) {
      if (!n || n.indexOf(t.name.toLowerCase()) === -1) {
        e.analytics.trackView(t.meta.analytics || t.name);
      }
    });
    return n;
  }
  t.default = {
    install: function (e, t = {}) {
      (function (e, t, n, i, o, a, s) {
        e.GoogleAnalyticsObject = o;
        e[o] = e[o] || function () {
          (e[o].q = e[o].q || []).push(arguments);
        };
        e[o].l = new Date() * 1;
        a = t.createElement(n);
        s = t.getElementsByTagName(n)[0];
        a.async = 1;
        a.src = "/agar.rs/assets/js/analytics.js";
        s.parentNode.insertBefore(a, s);
      })(window, document, "script", 0, "ga");
      t = o({}, a.default, t);
      r.checkMandatoryParams(t);
      a.default.debug = t.debug;
      a.default.globalDimensions = t.globalDimensions;
      a.default.globalMetrics = t.globalMetrics;
      ga("create", t.trackingId, "auto", {
        transport: "beacon"
      });
      ga("set", "appName", t.appName);
      ga("set", "appVersion", t.appVersion);
      if (t.globalDimensions) {
        t.globalDimensions.forEach(function (e) {
          ga("set", "dimension" + e.dimension, e.value);
        });
      }
      if (t.globalMetrics) {
        t.globalMetrics.forEach(function (e) {
          ga("set", "metric" + e.metric, e.value);
        });
      }
      if (t.vueRouter) {
        l(e, t.vueRouter, t.ignoredViews);
      }
      e.prototype.$analytics = e.prototype.$ua = e.analytics = new s.default();
    }
  };
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.default = {
    debug: false,
    globalDimensions: [],
    globalMetrics: []
  };
}, function (e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
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
  var a = n(4);
  var s = function (e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }(n(2));
  var r = function () {
    function e() {
      i(this, e);
    }
    o(e, [{
      key: "trackView",
      value: function (e) {
        (0, a.logDebug)("Dispatching TrackView", {
          screenName: e
        });
        ga("set", "screenName", e);
        ga("send", "screenview");
      }
    }, {
      key: "trackEvent",
      value: function (e, t = null, n = null, i = null) {
        (0, a.logDebug)("Dispatching event", {
          category: e,
          action: t,
          label: n,
          value: i
        });
        ga("send", "event", e, t, n, i);
      }
    }, {
      key: "trackException",
      value: function (e, t = false) {
        ga("send", "exception", {
          exDescription: e,
          exFatal: t
        });
      }
    }, {
      key: "trackTiming",
      value: function (e, t, n, i = null) {
        var o = {
          hitType: "timing",
          timingCategory: e,
          timingVar: t,
          timingValue: n
        };
        if (i) {
          o.timingLabel = i;
        }
        (0, a.logDebug)("Dispatching timing", o);
        ga("send", o);
      }
    }, {
      key: "injectGlobalDimension",
      value: function (e, t) {
        (0, a.logDebug)("Trying dimension Injection...", {
          dimensionNumber: e,
          value: t
        });
        if (s.default.globalDimensions.find(function (t) {
          return t.dimension === e;
        })) {
          throw new Error("VueAnalytics : Dimension already registered");
        }
        var n = {
          dimension: e,
          value: t
        };
        s.default.globalDimensions.push(n);
        ga("set", "dimension" + n.dimension, n.value);
        (0, a.logDebug)("Dimension injected");
      }
    }, {
      key: "injectGlobalMetric",
      value: function (e, t) {
        (0, a.logDebug)("Trying metric Injection...", {
          metricNumber: e,
          value: t
        });
        if (s.default.globalMetrics.find(function (t) {
          return t.metric === e;
        })) {
          throw new Error("VueAnalytics : Metric already registered");
        }
        var n = {
          metric: e,
          value: t
        };
        s.default.globalMetrics.push(n);
        ga("set", "metric" + n.metric, n.value);
        (0, a.logDebug)("Metric injected");
      }
    }, {
      key: "changeSessionLanguage",
      value: function (e) {
        (0, a.logDebug)("Changing application localisation & language to " + e);
        ga("set", "language", e);
      }
    }]);
    return e;
  }();
  t.default = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.cordovaApp = t.checkMandatoryParams = t.logDebug = undefined;
  var i = function (e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }(n(2));
  t.logDebug = function (e) {
    if (i.default.debug) {
      var t;
      (t = console).log.apply(t, ["VueAnalytics :"].concat(Array.prototype.slice.call(arguments)));
    }
  };
  t.checkMandatoryParams = function (e) {
    ["trackingId", "appName", "appVersion"].forEach(function (t) {
      if (!e[t]) {
        throw new Error("VueAnalytics : Please provide a \"" + t + "\" from the config.");
      }
    });
  };
  t.cordovaApp = {
    bootstrapWindows: function () {
      window.ActiveXObject = undefined;
      ga("set", "checkProtocolTask", null);
    }
  };
}]);