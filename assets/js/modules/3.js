function i(e) {
  if (C) {
    e._devtoolHook = C;
    C.emit("vuex:init", e);
    C.on("vuex:travel-to-state", function (t) {
      e.replaceState(t);
    });
    e.subscribe(function (e, t) {
      C.emit("vuex:mutation", e, t);
    });
  }
}
function o(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function a(e) {
  return e !== null && typeof e == "object";
}
function s(e) {
  return e && typeof e.then == "function";
}
function r(e, t, n) {
  t.update(n);
  if (n.modules) {
    for (var i in n.modules) {
      if (!t.getChild(i)) {
        return;
      }
      r(e.concat(i), t.getChild(i), n.modules[i]);
    }
  }
}
function l(e, t) {
  e._actions = Object.create(null);
  e._mutations = Object.create(null);
  e._wrappedGetters = Object.create(null);
  e._modulesNamespaceMap = Object.create(null);
  var n = e.state;
  u(e, n, [], e._modules.root, true);
  c(e, n, t);
}
function c(e, t, n) {
  var i = e._vm;
  e.getters = {};
  var a = {};
  o(e._wrappedGetters, function (t, n) {
    a[n] = function () {
      return t(e);
    };
    Object.defineProperty(e.getters, n, {
      get: function () {
        return e._vm[n];
      },
      enumerable: true
    });
  });
  var s = P.config.silent;
  P.config.silent = true;
  e._vm = new P({
    data: {
      $$state: t
    },
    computed: a
  });
  P.config.silent = s;
  if (e.strict) {
    g(e);
  }
  if (i) {
    if (n) {
      e._withCommit(function () {
        i._data.$$state = null;
      });
    }
    P.nextTick(function () {
      return i.$destroy();
    });
  }
}
function u(e, t, n, i, o) {
  var a = !n.length;
  var s = e._modules.getNamespace(n);
  if (i.namespaced) {
    e._modulesNamespaceMap[s] = i;
  }
  if (!a && !o) {
    var r = v(t, n.slice(0, -1));
    var l = n[n.length - 1];
    e._withCommit(function () {
      P.set(r, l, i.state);
    });
  }
  var c = i.context = d(e, s, n);
  i.forEachMutation(function (t, n) {
    f(e, s + n, t, c);
  });
  i.forEachAction(function (t, n) {
    h(e, s + n, t, c);
  });
  i.forEachGetter(function (t, n) {
    m(e, s + n, t, c);
  });
  i.forEachChild(function (i, a) {
    u(e, t, n.concat(a), i, o);
  });
}
function d(e, t, n) {
  var i = t === "";
  var o = {
    dispatch: i ? e.dispatch : function (n, i, o) {
      var a = b(n, i, o);
      var s = a.payload;
      var r = a.options;
      var l = a.type;
      if (!r || !r.root) {
        l = t + l;
      }
      return e.dispatch(l, s);
    },
    commit: i ? e.commit : function (n, i, o) {
      var a = b(n, i, o);
      var s = a.payload;
      var r = a.options;
      var l = a.type;
      if (!r || !r.root) {
        l = t + l;
      }
      e.commit(l, s, r);
    }
  };
  Object.defineProperties(o, {
    getters: {
      get: i ? function () {
        return e.getters;
      } : function () {
        return p(e, t);
      }
    },
    state: {
      get: function () {
        return v(e.state, n);
      }
    }
  });
  return o;
}
function p(e, t) {
  var n = {};
  var i = t.length;
  Object.keys(e.getters).forEach(function (o) {
    if (o.slice(0, i) === t) {
      var a = o.slice(i);
      Object.defineProperty(n, a, {
        get: function () {
          return e.getters[o];
        },
        enumerable: true
      });
    }
  });
  return n;
}
function f(e, t, n, i) {
  (e._mutations[t] ||= []).push(function (t) {
    n.call(e, i.state, t);
  });
}
function h(e, t, n, i) {
  (e._actions[t] ||= []).push(function (t, o) {
    var a = n.call(e, {
      dispatch: i.dispatch,
      commit: i.commit,
      getters: i.getters,
      state: i.state,
      rootGetters: e.getters,
      rootState: e.state
    }, t, o);
    if (!s(a)) {
      a = Promise.resolve(a);
    }
    if (e._devtoolHook) {
      return a.catch(function (t) {
        e._devtoolHook.emit("vuex:error", t);
        throw t;
      });
    } else {
      return a;
    }
  });
}
function m(e, t, n, i) {
  e._wrappedGetters[t] ||= function (e) {
    return n(i.state, i.getters, e.state, e.getters);
  };
}
function g(e) {
  e._vm.$watch(function () {
    return this._data.$$state;
  }, function () {}, {
    deep: true,
    sync: true
  });
}
function v(e, t) {
  if (t.length) {
    return t.reduce(function (e, t) {
      return e[t];
    }, e);
  } else {
    return e;
  }
}
function b(e, t, n) {
  if (a(e) && e.type) {
    n = t;
    t = e;
    e = e.type;
  }
  return {
    type: e,
    payload: t,
    options: n
  };
}
export function install(e) {
  if (!P || e !== P) {
    P = e;
    x(P);
  }
}
function w(e) {
  if (Array.isArray(e)) {
    return e.map(function (e) {
      return {
        key: e,
        val: e
      };
    });
  } else {
    return Object.keys(e).map(function (t) {
      return {
        key: t,
        val: e[t]
      };
    });
  }
}
function _(e) {
  return function (t, n) {
    if (typeof t != "string") {
      n = t;
      t = "";
    } else if (t.charAt(t.length - 1) !== "/") {
      t += "/";
    }
    return e(t, n);
  };
}
function k(e, t, n) {
  return e._modulesNamespaceMap[n];
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
function x(e) {
  function t() {
    var e = this.$options;
    if (e.store) {
      this.$store = typeof e.store == "function" ? e.store() : e.store;
    } else if (e.parent && e.parent.$store) {
      this.$store = e.parent.$store;
    }
  }
  if (Number(e.version.split(".")[0]) >= 2) {
    e.mixin({
      beforeCreate: t
    });
  } else {
    var n = e.prototype._init;
    e.prototype._init = function (e = {}) {
      e.init = e.init ? [t].concat(e.init) : t;
      n.call(this, e);
    };
  }
}
var C = typeof window != "undefined" && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function S(e, t) {
  this.runtime = t;
  this._children = Object.create(null);
  this._rawModule = e;
  var n = e.state;
  this.state = (typeof n == "function" ? n() : n) || {};
}
var A = {
  namespaced: {
    configurable: true
  }
};
A.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
S.prototype.addChild = function (e, t) {
  this._children[e] = t;
};
S.prototype.removeChild = function (e) {
  delete this._children[e];
};
S.prototype.getChild = function (e) {
  return this._children[e];
};
S.prototype.update = function (e) {
  this._rawModule.namespaced = e.namespaced;
  if (e.actions) {
    this._rawModule.actions = e.actions;
  }
  if (e.mutations) {
    this._rawModule.mutations = e.mutations;
  }
  if (e.getters) {
    this._rawModule.getters = e.getters;
  }
};
S.prototype.forEachChild = function (e) {
  o(this._children, e);
};
S.prototype.forEachGetter = function (e) {
  if (this._rawModule.getters) {
    o(this._rawModule.getters, e);
  }
};
S.prototype.forEachAction = function (e) {
  if (this._rawModule.actions) {
    o(this._rawModule.actions, e);
  }
};
S.prototype.forEachMutation = function (e) {
  if (this._rawModule.mutations) {
    o(this._rawModule.mutations, e);
  }
};
Object.defineProperties(S.prototype, A);
function T(e) {
  this.register([], e, false);
}
T.prototype.get = function (e) {
  return e.reduce(function (e, t) {
    return e.getChild(t);
  }, this.root);
};
T.prototype.getNamespace = function (e) {
  var t = this.root;
  return e.reduce(function (e, n) {
    t = t.getChild(n);
    return e + (t.namespaced ? n + "/" : "");
  }, "");
};
T.prototype.update = function (e) {
  r([], this.root, e);
};
T.prototype.register = function (e, t, n) {
  var i = this;
  if (n === undefined) {
    n = true;
  }
  var a = new S(t, n);
  if (e.length === 0) {
    this.root = a;
  } else {
    this.get(e.slice(0, -1)).addChild(e[e.length - 1], a);
  }
  if (t.modules) {
    o(t.modules, function (t, o) {
      i.register(e.concat(o), t, n);
    });
  }
};
T.prototype.unregister = function (e) {
  var t = this.get(e.slice(0, -1));
  var n = e[e.length - 1];
  if (t.getChild(n).runtime) {
    t.removeChild(n);
  }
};
var P;
export function Store(e) {
  var t = this;
  if (e === undefined) {
    e = {};
  }
  if (!P && typeof window != "undefined" && window.Vue) {
    install(window.Vue);
  }
  var n = e.plugins;
  if (n === undefined) {
    n = [];
  }
  var o = e.strict;
  if (o === undefined) {
    o = false;
  }
  var a = e.state;
  if (a === undefined) {
    a = {};
  }
  if (typeof a == "function") {
    a = a();
  }
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new T(e);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new P();
  var s = this;
  var r = this;
  var l = r.dispatch;
  var d = r.commit;
  this.dispatch = function (e, t) {
    return l.call(s, e, t);
  };
  this.commit = function (e, t, n) {
    return d.call(s, e, t, n);
  };
  this.strict = o;
  u(this, a, [], this._modules.root);
  c(this, a);
  n.forEach(function (e) {
    return e(t);
  });
  if (P.config.devtools) {
    i(this);
  }
}
var E = {
  state: {
    configurable: true
  }
};
E.state.get = function () {
  return this._vm._data.$$state;
};
E.state.set = function (e) {};
Store.prototype.commit = function (e, t, n) {
  var i = this;
  var o = b(e, t, n);
  var a = o.type;
  var s = o.payload;
  o.options;
  var r = {
    type: a,
    payload: s
  };
  var l = this._mutations[a];
  if (l) {
    this._withCommit(function () {
      l.forEach(function (e) {
        e(s);
      });
    });
    this._subscribers.forEach(function (e) {
      return e(r, i.state);
    });
  }
};
Store.prototype.dispatch = function (e, t) {
  var n = b(e, t);
  var i = n.type;
  var o = n.payload;
  var a = this._actions[i];
  if (a) {
    if (a.length > 1) {
      return Promise.all(a.map(function (e) {
        return e(o);
      }));
    } else {
      return a[0](o);
    }
  }
};
Store.prototype.subscribe = function (e) {
  var t = this._subscribers;
  if (t.indexOf(e) < 0) {
    t.push(e);
  }
  return function () {
    var n = t.indexOf(e);
    if (n > -1) {
      t.splice(n, 1);
    }
  };
};
Store.prototype.watch = function (e, t, n) {
  var i = this;
  return this._watcherVM.$watch(function () {
    return e(i.state, i.getters);
  }, t, n);
};
Store.prototype.replaceState = function (e) {
  var t = this;
  this._withCommit(function () {
    t._vm._data.$$state = e;
  });
};
Store.prototype.registerModule = function (e, t) {
  if (typeof e == "string") {
    e = [e];
  }
  this._modules.register(e, t);
  u(this, this.state, e, this._modules.get(e));
  c(this, this.state);
};
Store.prototype.unregisterModule = function (e) {
  var t = this;
  if (typeof e == "string") {
    e = [e];
  }
  this._modules.unregister(e);
  this._withCommit(function () {
    var n = v(t.state, e.slice(0, -1));
    P.delete(n, e[e.length - 1]);
  });
  l(this);
};
Store.prototype.hotUpdate = function (e) {
  this._modules.update(e);
  l(this, true);
};
Store.prototype._withCommit = function (e) {
  var t = this._committing;
  this._committing = true;
  e();
  this._committing = t;
};
Object.defineProperties(Store.prototype, E);
export var mapState = _(function (e, t) {
  var n = {};
  w(t).forEach(function (t) {
    var i = t.key;
    var o = t.val;
    n[i] = function () {
      var t = this.$store.state;
      var n = this.$store.getters;
      if (e) {
        var i = k(this.$store, 0, e);
        if (!i) {
          return;
        }
        t = i.context.state;
        n = i.context.getters;
      }
      if (typeof o == "function") {
        return o.call(this, t, n);
      } else {
        return t[o];
      }
    };
    n[i].vuex = true;
  });
  return n;
});
export var mapMutations = _(function (e, t) {
  var n = {};
  w(t).forEach(function (t) {
    var i = t.key;
    var o = t.val;
    n[i] = function () {
      var t = [];
      for (var n = arguments.length; n--;) {
        t[n] = arguments[n];
      }
      var i = this.$store.commit;
      if (e) {
        var a = k(this.$store, 0, e);
        if (!a) {
          return;
        }
        i = a.context.commit;
      }
      if (typeof o == "function") {
        return o.apply(this, [i].concat(t));
      } else {
        return i.apply(this.$store, [o].concat(t));
      }
    };
  });
  return n;
});
export var mapGetters = _(function (e, t) {
  var n = {};
  w(t).forEach(function (t) {
    var i = t.key;
    var o = t.val;
    o = e + o;
    n[i] = function () {
      if (!e || k(this.$store, 0, e)) {
        return this.$store.getters[o];
      }
    };
    n[i].vuex = true;
  });
  return n;
});
export var mapActions = _(function (e, t) {
  var n = {};
  w(t).forEach(function (t) {
    var i = t.key;
    var o = t.val;
    n[i] = function () {
      var t = [];
      for (var n = arguments.length; n--;) {
        t[n] = arguments[n];
      }
      var i = this.$store.dispatch;
      if (e) {
        var a = k(this.$store, 0, e);
        if (!a) {
          return;
        }
        i = a.context.dispatch;
      }
      if (typeof o == "function") {
        return o.apply(this, [i].concat(t));
      } else {
        return i.apply(this.$store, [o].concat(t));
      }
    };
  });
  return n;
});
export function createNamespacedHelpers(e) {
  return {
    mapState: mapState.bind(null, e),
    mapGetters: mapGetters.bind(null, e),
    mapMutations: mapMutations.bind(null, e),
    mapActions: mapActions.bind(null, e)
  };
}
var M = {
  Store: Store,
  install: install,
  version: "2.4.1",
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};
exports.default = M;