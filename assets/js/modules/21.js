function n(e, t) {
  var i = {
    name: e.name,
    path: e.path,
    hash: e.hash,
    query: e.query,
    params: e.params,
    fullPath: e.fullPath,
    meta: e.meta
  };
  if (t) {
    i.from = n(t);
  }
  return Object.freeze(i);
}
exports.sync = function (e, t, i) {
  var o = (i || {}).moduleName || "route";
  e.registerModule(o, {
    namespaced: true,
    state: n(t.currentRoute),
    mutations: {
      ROUTE_CHANGED: function (t, i) {
        e.state[o] = n(i.to, i.from);
      }
    }
  });
  var a;
  var s = false;
  var r = e.watch(function (e) {
    return e[o];
  }, function (e) {
    var n = e.fullPath;
    if (n !== a) {
      if (a != null) {
        s = true;
        t.push(e);
      }
      a = n;
    }
  }, {
    sync: true
  });
  var l = t.afterEach(function (t, n) {
    if (s) {
      s = false;
    } else {
      a = t.fullPath;
      e.commit(o + "/ROUTE_CHANGED", {
        to: t,
        from: n
      });
    }
  });
  return function () {
    if (l != null) {
      l();
    }
    if (r != null) {
      r();
    }
    e.unregisterModule(o);
  };
};