(function (e, t, n) {
	function i(e) {
		return g.call(e) == "[object Function]";
	}
	function o(e) {
		return typeof e == "string";
	}
	function a() {}
	function s(e) {
		return !e || e == "loaded" || e == "complete" || e == "uninitialized";
	}
	function r() {
		var e = v.shift();
		b = 1;
		if (e) {
			if (e.t) {
				h(function () {
					(e.t == "c" ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1);
				}, 0);
			} else {
				e();
				r();
			}
		} else {
			b = 0;
		}
	}
	function l(e, n, i, o, a, l, c) {
		function u(t) {
			if (!f && s(d.readyState) && (y.r = f = 1, !b && r(), d.onload = d.onreadystatechange = null, t)) {
				if (e != "img") {
					h(function () {
						_.removeChild(d);
					}, 50);
				}
				for (var i in A[n]) {
					if (A[n].hasOwnProperty(i)) {
						A[n][i].onload();
					}
				}
			}
		}
		var c = c || p.errorTimeout;
		var d = t.createElement(e);
		var f = 0;
		var g = 0;
		var y = {
			t: i,
			s: n,
			e: a,
			a: l,
			x: c
		};
		if (A[n] === 1) {
			g = 1;
			A[n] = [];
		}
		if (e == "object") {
			d.data = n;
		} else {
			d.src = n;
			d.type = e;
		}
		d.width = d.height = "0";
		d.onerror = d.onload = d.onreadystatechange = function () {
			u.call(this, g);
		};
		v.splice(o, 0, y);
		if (e != "img") {
			if (g || A[n] === 2) {
				_.insertBefore(d, w ? null : m);
				h(u, c);
			} else {
				A[n].push(d);
			}
		}
	}
	function c(e, t, n, i, a) {
		b = 0;
		t = t || "j";
		if (o(e)) {
			l(t == "c" ? x : k, e, t, this.i++, n, i, a);
		} else {
			v.splice(this.i++, 0, e);
			if (v.length == 1) {
				r();
			}
		}
		return this;
	}
	function u() {
		var e = p;
		e.loader = {
			load: c,
			i: 0
		};
		return e;
	}
	var d;
	var p;
	var f = t.documentElement;
	var h = e.setTimeout;
	var m = t.getElementsByTagName("script")[0];
	var g = {}.toString;
	var v = [];
	var b = 0;
	var y = "MozAppearance" in f.style;
	var w = y && !!t.createRange().compareNode;
	var _ = w ? f : m.parentNode;
	var f = e.opera && g.call(e.opera) == "[object Opera]";
	var f = !!t.attachEvent && !f;
	var k = y ? "object" : f ? "script" : "img";
	var x = f ? "script" : k;
	var C = Array.isArray || function (e) {
		return g.call(e) == "[object Array]";
	};
	var S = [];
	var A = {};
	var T = {
		timeout: function (e, t) {
			if (t.length) {
				e.timeout = t[0];
			}
			return e;
		}
	};
	(p = function (e) {
		function t(e) {
			var t;
			var n;
			var i;
			var e = e.split("!");
			var o = S.length;
			var a = e.pop();
			var s = e.length;
			var a = {
				url: a,
				origUrl: a,
				prefixes: e
			};
			for (n = 0; n < s; n++) {
				i = e[n].split("=");
				if (t = T[i.shift()]) {
					a = t(a, i);
				}
			}
			for (n = 0; n < o; n++) {
				a = S[n](a);
			}
			return a;
		}
		function s(e, o, a, s, r) {
			var l = t(e);
			var c = l.autoCallback;
			l.url.split(".").pop().split("?").shift();
			if (!l.bypass) {
				o &&= i(o) ? o : o[e] || o[s] || o[e.split("/").pop().split("?")[0]];
				if (l.instead) {
					l.instead(e, o, a, s, r);
				} else {
					if (A[l.url]) {
						l.noexec = true;
					} else {
						A[l.url] = 1;
					}
					a.load(l.url, l.forceCSS || !l.forceJS && l.url.split(".").pop().split("?").shift() == "css" ? "c" : n, l.noexec, l.attrs, l.timeout);
					if (i(o) || i(c)) {
						a.load(function () {
							u();
							if (o) {
								o(l.origUrl, r, s);
							}
							if (c) {
								c(l.origUrl, r, s);
							}
							A[l.url] = 2;
						});
					}
				}
			}
		}
		function r(e, t) {
			function n(e, n) {
				if (e) {
					if (o(e)) {
						if (!n) {
							d = function () {
								var e = [].slice.call(arguments);
								p.apply(this, e);
								f();
							};
						}
						s(e, d, t, 0, c);
					} else if (Object(e) === e) {
						r = function () {
							var t;
							var n = 0;
							for (t in e) {
								if (e.hasOwnProperty(t)) {
									n++;
								}
							}
							return n;
						}();
						for (l in e) {
							if (e.hasOwnProperty(l)) {
								if (!n && ! --r) {
									if (i(d)) {
										d = function () {
											var e = [].slice.call(arguments);
											p.apply(this, e);
											f();
										};
									} else {
										d[l] = function (e) {
											return function () {
												var t = [].slice.call(arguments);
												if (e) {
													e.apply(this, t);
												}
												f();
											};
										}(p[l]);
									}
								}
								s(e[l], d, t, l, c);
							}
						}
					}
				} else if (!n) {
					f();
				}
			}
			var r;
			var l;
			var c = !!e.test;
			var u = e.load || e.both;
			var d = e.callback || a;
			var p = d;
			var f = e.complete || a;
			n(c ? e.yep : e.nope, !!u);
			if (u) {
				n(u);
			}
		}
		var l;
		var c;
		var d = this.yepnope.loader;
		if (o(e)) {
			s(e, 0, d, 0);
		} else if (C(e)) {
			for (l = 0; l < e.length; l++) {
				c = e[l];
				if (o(c)) {
					s(c, 0, d, 0);
				} else if (C(c)) {
					p(c);
				} else if (Object(c) === c) {
					r(c, d);
				}
			}
		} else if (Object(e) === e) {
			r(e, d);
		}
	}).addPrefix = function (e, t) {
		T[e] = t;
	};
	p.addFilter = function (e) {
		S.push(e);
	};
	p.errorTimeout = 10000;
	if (t.readyState == null && t.addEventListener) {
		t.readyState = "loading";
		t.addEventListener("DOMContentLoaded", d = function () {
			t.removeEventListener("DOMContentLoaded", d, 0);
			t.readyState = "complete";
		}, 0);
	}
	e.yepnope = u();
	e.yepnope.executeStack = r;
	e.yepnope.injectJs = function (e, n, i, o, l, c) {
		var u;
		var d;
		var f = t.createElement("script");
		var o = o || p.errorTimeout;
		f.src = e;
		for (d in i) {
			f.setAttribute(d, i[d]);
		}
		n = c ? r : n || a;
		f.onreadystatechange = f.onload = function () {
			if (!u && s(f.readyState)) {
				u = 1;
				n();
				f.onload = f.onreadystatechange = null;
			}
		};
		h(function () {
			if (!u) {
				u = 1;
				n(1);
			}
		}, o);
		if (l) {
			f.onload();
		} else {
			m.parentNode.insertBefore(f, m);
		}
	};
	e.yepnope.injectCss = function (e, n, i, o, s, l) {
		var c;
		var o = t.createElement("link");
		var n = l ? r : n || a;
		o.href = e;
		o.rel = "stylesheet";
		o.type = "text/css";
		for (c in i) {
			o.setAttribute(c, i[c]);
		}
		if (!s) {
			m.parentNode.insertBefore(o, m);
			h(n, 0);
		}
	};
})(this, document);

Modernizr.load = function () {
	yepnope.apply(window, [].slice.call(arguments, 0));
};

function Vector2(e, t) {
	this.x = e || 0;
	this.y = t || 0;
}

Vector2.prototype = {
	reset: function (e, t) {
		this.x = e;
		this.y = t;
		return this;
	},
	toString: function (e) {
		e = e || 3;
		var t = Math.pow(10, e);
		return "[" + Math.round(this.x * t) / t + ", " + Math.round(this.y * t) / t + "]";
	},
	clone: function () {
		return new Vector2(this.x, this.y);
	},
	copyTo: function (e) {
		e.x = this.x;
		e.y = this.y;
	},
	copyFrom: function (e) {
		this.x = e.x;
		this.y = e.y;
	},
	magnitude: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	magnitudeSquared: function () {
		return this.x * this.x + this.y * this.y;
	},
	normalise: function () {
		var e = this.magnitude();
		this.x = this.x / e;
		this.y = this.y / e;
		return this;
	},
	reverse: function () {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	},
	plusEq: function (e) {
		this.x += e.x;
		this.y += e.y;
		return this;
	},
	plusNew: function (e) {
		return new Vector2(this.x + e.x, this.y + e.y);
	},
	minusEq: function (e) {
		this.x -= e.x;
		this.y -= e.y;
		return this;
	},
	minusNew: function (e) {
		return new Vector2(this.x - e.x, this.y - e.y);
	},
	multiplyEq: function (e) {
		this.x *= e;
		this.y *= e;
		return this;
	},
	multiplyNew: function (e) {
		return this.clone().multiplyEq(e);
	},
	divideEq: function (e) {
		this.x /= e;
		this.y /= e;
		return this;
	},
	divideNew: function (e) {
		return this.clone().divideEq(e);
	},
	dot: function (e) {
		return this.x * e.x + this.y * e.y;
	},
	angle: function (e) {
		return Math.atan2(this.y, this.x) * (e ? 1 : Vector2Const.TO_DEGREES);
	},
	rotate: function (e, t) {
		var n = Math.cos(e * (t ? 1 : Vector2Const.TO_RADIANS));
		var i = Math.sin(e * (t ? 1 : Vector2Const.TO_RADIANS));
		Vector2Const.temp.copyFrom(this);
		this.x = Vector2Const.temp.x * n - Vector2Const.temp.y * i;
		this.y = Vector2Const.temp.x * i + Vector2Const.temp.y * n;
		return this;
	},
	equals: function (e) {
		return this.x == e.x && this.y == e.x;
	},
	isCloseTo: function (e, t) {
		return !!this.equals(e) || (Vector2Const.temp.copyFrom(this), Vector2Const.temp.minusEq(e), Vector2Const.temp.magnitudeSquared() < t * t);
	},
	rotateAroundPoint: function (e, t, n) {
		Vector2Const.temp.copyFrom(this);
		Vector2Const.temp.minusEq(e);
		Vector2Const.temp.rotate(t, n);
		Vector2Const.temp.plusEq(e);
		this.copyFrom(Vector2Const.temp);
	},
	isMagLessThan: function (e) {
		return this.magnitudeSquared() < e * e;
	},
	isMagGreaterThan: function (e) {
		return this.magnitudeSquared() > e * e;
	}
};

Vector2Const = {
	TO_DEGREES: 180 / Math.PI,
	TO_RADIANS: Math.PI / 180,
	temp: new Vector2()
};

(function (e) {
	function t(i) {
		if (n[i]) {
			return n[i].exports;
		}
		var o = n[i] = {
			i: i,
			l: false,
			exports: {}
		};
		e[i].call(o.exports, o, o.exports, t);
		o.l = true;
		return o.exports;
	}
	var n = {};
	t.m = e;
	t.c = n;
	t.i = function (e) {
		return e;
	};
	t.d = function (e, n, i) {
		if (!t.o(e, n)) {
			Object.defineProperty(e, n, {
				configurable: false,
				enumerable: true,
				get: i
			});
		}
	};
	t.n = function (e) {
		var n = e && e.__esModule ? function () {
			return e.default;
		} : function () {
			return e;
		};
		t.d(n, "a", n);
		return n;
	};
	t.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	};
	t.p = "/agar.rs/assets/js/";
	t(t.s = 53);
})([function (e, t) {
	e.exports = function (e, t, n, i) {
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
}, function (e, t) {
	e.exports = function () {
		var e = [];
		e.toString = function () {
			var e = [];
			for (var t = 0; t < this.length; t++) {
				var n = this[t];
				if (n[2]) {
					e.push("@media " + n[2] + "{" + n[1] + "}");
				} else {
					e.push(n[1]);
				}
			}
			return e.join("");
		};
		e.i = function (t, n) {
			if (typeof t == "string") {
				t = [[null, t, ""]];
			}
			var i = {};
			for (var o = 0; o < this.length; o++) {
				var a = this[o][0];
				if (typeof a == "number") {
					i[a] = true;
				}
			}
			for (o = 0; o < t.length; o++) {
				var s = t[o];
				if (typeof s[0] != "number" || !i[s[0]]) {
					if (n && !s[2]) {
						s[2] = n;
					} else if (n) {
						s[2] = "(" + s[2] + ") and (" + n + ")";
					}
					e.push(s);
				}
			}
		};
		return e;
	};
}, function (e, t, n) {
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
	var c = n(167);
	var u = {};
	var d = l && (document.head || document.getElementsByTagName("head")[0]);
	var p = null;
	var f = 0;
	var h = false;
	function m() {}
	var g = typeof navigator != "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
	e.exports = function (e, t, n) {
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
}, function (e, t, n) {
	"use strict";

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
	function y(e) {
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
	Object.defineProperty(t, "__esModule", {
		value: true
	});
	n.d(t, "Store", function () {
		return j;
	});
	n.d(t, "install", function () {
		return y;
	});
	n.d(t, "mapState", function () {
		return N;
	});
	n.d(t, "mapMutations", function () {
		return O;
	});
	n.d(t, "mapGetters", function () {
		return D;
	});
	n.d(t, "mapActions", function () {
		return I;
	});
	n.d(t, "createNamespacedHelpers", function () {
		return $;
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
	function j(e) {
		var t = this;
		if (e === undefined) {
			e = {};
		}
		if (!P && typeof window != "undefined" && window.Vue) {
			y(window.Vue);
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
	j.prototype.commit = function (e, t, n) {
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
	j.prototype.dispatch = function (e, t) {
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
	j.prototype.subscribe = function (e) {
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
	j.prototype.watch = function (e, t, n) {
		var i = this;
		return this._watcherVM.$watch(function () {
			return e(i.state, i.getters);
		}, t, n);
	};
	j.prototype.replaceState = function (e) {
		var t = this;
		this._withCommit(function () {
			t._vm._data.$$state = e;
		});
	};
	j.prototype.registerModule = function (e, t) {
		if (typeof e == "string") {
			e = [e];
		}
		this._modules.register(e, t);
		u(this, this.state, e, this._modules.get(e));
		c(this, this.state);
	};
	j.prototype.unregisterModule = function (e) {
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
	j.prototype.hotUpdate = function (e) {
		this._modules.update(e);
		l(this, true);
	};
	j.prototype._withCommit = function (e) {
		var t = this._committing;
		this._committing = true;
		e();
		this._committing = t;
	};
	Object.defineProperties(j.prototype, E);
	var N = _(function (e, t) {
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
	var O = _(function (e, t) {
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
	var D = _(function (e, t) {
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
	var I = _(function (e, t) {
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
	function $(e) {
		return {
			mapState: N.bind(null, e),
			mapGetters: D.bind(null, e),
			mapMutations: O.bind(null, e),
			mapActions: I.bind(null, e)
		};
	}
	var M = {
		Store: j,
		install: y,
		version: "2.4.1",
		mapState: N,
		mapMutations: O,
		mapGetters: D,
		mapActions: I,
		createNamespacedHelpers: $
	};
	t.default = M;
}, function (e, t, n) {
	var i = n(0)(n(27), n(140), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(142);
	var i = n(0)(n(26), n(111), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(158);
	var i = n(0)(n(22), n(131), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	(function (e) {
		function n(e) {
			return e === undefined || e === null;
		}
		function i(e) {
			return e !== undefined && e !== null;
		}
		function o(e) {
			return e === true;
		}
		function a(e) {
			return e === false;
		}
		function s(e) {
			return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
		}
		function r(e) {
			return e !== null && typeof e == "object";
		}
		function l(e) {
			return bo.call(e) === "[object Object]";
		}
		function c(e) {
			return bo.call(e) === "[object RegExp]";
		}
		function u(e) {
			var t = parseFloat(e);
			return t >= 0 && Math.floor(t) === t && isFinite(e);
		}
		function d(e) {
			if (e == null) {
				return "";
			} else if (typeof e == "object") {
				return JSON.stringify(e, null, 2);
			} else {
				return String(e);
			}
		}
		function p(e) {
			var t = parseFloat(e);
			if (isNaN(t)) {
				return e;
			} else {
				return t;
			}
		}
		function f(e, t) {
			var n = Object.create(null);
			for (var i = e.split(","), o = 0; o < i.length; o++) {
				n[i[o]] = true;
			}
			if (t) {
				return function (e) {
					return n[e.toLowerCase()];
				};
			} else {
				return function (e) {
					return n[e];
				};
			}
		}
		function h(e, t) {
			if (e.length) {
				var n = e.indexOf(t);
				if (n > -1) {
					return e.splice(n, 1);
				}
			}
		}
		function m(e, t) {
			return _o.call(e, t);
		}
		function g(e) {
			var t = Object.create(null);
			return function (n) {
				return t[n] ||= e(n);
			};
		}
		function v(e, t) {
			function n(n) {
				var i = arguments.length;
				if (i) {
					if (i > 1) {
						return e.apply(t, arguments);
					} else {
						return e.call(t, n);
					}
				} else {
					return e.call(t);
				}
			}
			n._length = e.length;
			return n;
		}
		function b(e, t) {
			t = t || 0;
			for (var n = e.length - t, i = new Array(n); n--;) {
				i[n] = e[n + t];
			}
			return i;
		}
		function y(e, t) {
			for (var n in t) {
				e[n] = t[n];
			}
			return e;
		}
		function w(e) {
			var t = {};
			for (var n = 0; n < e.length; n++) {
				if (e[n]) {
					y(t, e[n]);
				}
			}
			return t;
		}
		function _(e, t, n) {}
		function k(e, t) {
			if (e === t) {
				return true;
			}
			var n = r(e);
			var i = r(t);
			if (!n || !i) {
				return !n && !i && String(e) === String(t);
			}
			try {
				var o = Array.isArray(e);
				var a = Array.isArray(t);
				if (o && a) {
					return e.length === t.length && e.every(function (e, n) {
						return k(e, t[n]);
					});
				}
				if (o || a) {
					return false;
				}
				var s = Object.keys(e);
				var l = Object.keys(t);
				return s.length === l.length && s.every(function (n) {
					return k(e[n], t[n]);
				});
			} catch (e) {
				return false;
			}
		}
		function x(e, t) {
			for (var n = 0; n < e.length; n++) {
				if (k(e[n], t)) {
					return n;
				}
			}
			return -1;
		}
		function C(e) {
			var t = false;
			return function () {
				if (!t) {
					t = true;
					e.apply(this, arguments);
				}
			};
		}
		function S(e) {
			var t = (e + "").charCodeAt(0);
			return t === 36 || t === 95;
		}
		function A(e, t, n, i) {
			Object.defineProperty(e, t, {
				value: n,
				enumerable: !!i,
				writable: true,
				configurable: true
			});
		}
		function T(e) {
			if (!Io.test(e)) {
				var t = e.split(".");
				return function (e) {
					for (var n = 0; n < t.length; n++) {
						if (!e) {
							return;
						}
						e = e[t[n]];
					}
					return e;
				};
			}
		}
		function P(e, t, n) {
			if (Oo.errorHandler) {
				Oo.errorHandler.call(null, e, t, n);
			} else {
				if (!zo || typeof console == "undefined") {
					throw e;
				}
				console.error(e);
			}
		}
		function j(e) {
			return typeof e == "function" && /native code/.test(e.toString());
		}
		function E(e) {
			if (ta.target) {
				na.push(ta.target);
			}
			ta.target = e;
		}
		function N() {
			ta.target = na.pop();
		}
		function O(e, t, n) {
			e.__proto__ = t;
		}
		function D(e, t, n) {
			for (var i = 0, o = n.length; i < o; i++) {
				var a = n[i];
				A(e, a, t[a]);
			}
		}
		function I(e, t) {
			if (r(e)) {
				var n;
				if (m(e, "__ob__") && e.__ob__ instanceof ra) {
					n = e.__ob__;
				} else if (sa.shouldConvert && !Jo() && (Array.isArray(e) || l(e)) && Object.isExtensible(e) && !e._isVue) {
					n = new ra(e);
				}
				if (t && n) {
					n.vmCount++;
				}
				return n;
			}
		}
		function $(e, t, n, i, o) {
			var a = new ta();
			var s = Object.getOwnPropertyDescriptor(e, t);
			if (!s || s.configurable !== false) {
				var r = s && s.get;
				var l = s && s.set;
				var c = !o && I(n);
				Object.defineProperty(e, t, {
					enumerable: true,
					configurable: true,
					get: function () {
						var t = r ? r.call(e) : n;
						if (ta.target) {
							a.depend();
							if (c) {
								c.dep.depend();
								if (Array.isArray(t)) {
									F(t);
								}
							}
						}
						return t;
					},
					set: function (t) {
						var i = r ? r.call(e) : n;
						if (t !== i && (t === t || i === i)) {
							if (l) {
								l.call(e, t);
							} else {
								n = t;
							}
							c = !o && I(t);
							a.notify();
						}
					}
				});
			}
		}
		function M(e, t, n) {
			if (Array.isArray(e) && u(t)) {
				e.length = Math.max(e.length, t);
				e.splice(t, 1, n);
				return n;
			}
			if (m(e, t)) {
				e[t] = n;
				return n;
			}
			var i = e.__ob__;
			if (e._isVue || i && i.vmCount) {
				return n;
			} else if (i) {
				$(i.value, t, n);
				i.dep.notify();
				return n;
			} else {
				e[t] = n;
				return n;
			}
		}
		function z(e, t) {
			if (Array.isArray(e) && u(t)) {
				e.splice(t, 1);
			} else {
				var n = e.__ob__;
				if (!e._isVue && (!n || !n.vmCount)) {
					if (m(e, t)) {
						delete e[t];
						if (n) {
							n.dep.notify();
						}
					}
				}
			}
		}
		function F(e) {
			var t = undefined;
			for (var n = 0, i = e.length; n < i; n++) {
				if ((t = e[n]) && t.__ob__) {
					t.__ob__.dep.depend();
				}
				if (Array.isArray(t)) {
					F(t);
				}
			}
		}
		function L(e, t) {
			if (!t) {
				return e;
			}
			var n;
			var i;
			var o;
			for (var a = Object.keys(t), s = 0; s < a.length; s++) {
				n = a[s];
				i = e[n];
				o = t[n];
				if (m(e, n)) {
					if (l(i) && l(o)) {
						L(i, o);
					}
				} else {
					M(e, n, o);
				}
			}
			return e;
		}
		function R(e, t, n) {
			if (n) {
				if (e || t) {
					return function () {
						var i = typeof t == "function" ? t.call(n) : t;
						var o = typeof e == "function" ? e.call(n) : e;
						if (i) {
							return L(i, o);
						} else {
							return o;
						}
					};
				} else {
					return undefined;
				}
			} else if (t) {
				if (e) {
					return function () {
						return L(typeof t == "function" ? t.call(this) : t, typeof e == "function" ? e.call(this) : e);
					};
				} else {
					return t;
				}
			} else {
				return e;
			}
		}
		function H(e, t) {
			if (t) {
				if (e) {
					return e.concat(t);
				} else if (Array.isArray(t)) {
					return t;
				} else {
					return [t];
				}
			} else {
				return e;
			}
		}
		function B(e, t) {
			var n = Object.create(e || null);
			if (t) {
				return y(n, t);
			} else {
				return n;
			}
		}
		function q(e) {
			var t = e.props;
			if (t) {
				var n;
				var i;
				var o;
				var a = {};
				if (Array.isArray(t)) {
					for (n = t.length; n--;) {
						if (typeof (i = t[n]) == "string") {
							o = xo(i);
							a[o] = {
								type: null
							};
						}
					}
				} else if (l(t)) {
					for (var s in t) {
						i = t[s];
						o = xo(s);
						a[o] = l(i) ? i : {
							type: i
						};
					}
				}
				e.props = a;
			}
		}
		function V(e) {
			var t = e.inject;
			if (Array.isArray(t)) {
				var n = e.inject = {};
				for (var i = 0; i < t.length; i++) {
					n[t[i]] = t[i];
				}
			}
		}
		function U(e) {
			var t = e.directives;
			if (t) {
				for (var n in t) {
					var i = t[n];
					if (typeof i == "function") {
						t[n] = {
							bind: i,
							update: i
						};
					}
				}
			}
		}
		function W(e, t, n) {
			function i(i) {
				var o = la[i] || ca;
				l[i] = o(e[i], t[i], n, i);
			}
			if (typeof t == "function") {
				t = t.options;
			}
			q(t);
			V(t);
			U(t);
			var o = t.extends;
			if (o) {
				e = W(e, o, n);
			}
			if (t.mixins) {
				for (var a = 0, s = t.mixins.length; a < s; a++) {
					e = W(e, t.mixins[a], n);
				}
			}
			var r;
			var l = {};
			for (r in e) {
				i(r);
			}
			for (r in t) {
				if (!m(e, r)) {
					i(r);
				}
			}
			return l;
		}
		function G(e, t, n, i) {
			if (typeof n == "string") {
				var o = e[t];
				if (m(o, n)) {
					return o[n];
				}
				var a = xo(n);
				if (m(o, a)) {
					return o[a];
				}
				var s = Co(a);
				if (m(o, s)) {
					return o[s];
				} else {
					return o[n] || o[a] || o[s];
				}
			}
		}
		function Y(e, t, n, i) {
			var o = t[e];
			var a = !m(n, e);
			var s = n[e];
			if (X(Boolean, o.type)) {
				if (a && !m(o, "default")) {
					s = false;
				} else if (!X(String, o.type) && (s === "" || s === Ao(e))) {
					s = true;
				}
			}
			if (s === undefined) {
				s = K(i, o, e);
				var r = sa.shouldConvert;
				sa.shouldConvert = true;
				I(s);
				sa.shouldConvert = r;
			}
			return s;
		}
		function K(e, t, n) {
			if (m(t, "default")) {
				var i = t.default;
				if (e && e.$options.propsData && e.$options.propsData[n] === undefined && e._props[n] !== undefined) {
					return e._props[n];
				} else if (typeof i == "function" && J(t.type) !== "Function") {
					return i.call(e);
				} else {
					return i;
				}
			}
		}
		function J(e) {
			var t = e && e.toString().match(/^\s*function (\w+)/);
			if (t) {
				return t[1];
			} else {
				return "";
			}
		}
		function X(e, t) {
			if (!Array.isArray(t)) {
				return J(t) === J(e);
			}
			for (var n = 0, i = t.length; n < i; n++) {
				if (J(t[n]) === J(e)) {
					return true;
				}
			}
			return false;
		}
		function Z(e) {
			return new ua(undefined, undefined, undefined, String(e));
		}
		function Q(e, t) {
			var n = new ua(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
			n.ns = e.ns;
			n.isStatic = e.isStatic;
			n.key = e.key;
			n.isComment = e.isComment;
			n.isCloned = true;
			if (t && e.children) {
				n.children = ee(e.children);
			}
			return n;
		}
		function ee(e, t) {
			for (var n = e.length, i = new Array(n), o = 0; o < n; o++) {
				i[o] = Q(e[o], t);
			}
			return i;
		}
		function te(e) {
			function t() {
				var e = arguments;
				var n = t.fns;
				if (!Array.isArray(n)) {
					return n.apply(null, arguments);
				}
				for (var i = n.slice(), o = 0; o < i.length; o++) {
					i[o].apply(null, e);
				}
			}
			t.fns = e;
			return t;
		}
		function ne(e, t) {
			if (e.plain) {
				return -1;
			} else if (t.plain) {
				return 1;
			} else {
				return 0;
			}
		}
		function ie(e, t, i, o, a) {
			var s;
			var r;
			var l;
			var c;
			var u = [];
			var d = false;
			for (s in e) {
				r = e[s];
				l = t[s];
				if (!(c = ha(s)).plain) {
					d = true;
				}
				if (!n(r)) {
					if (n(l)) {
						if (n(r.fns)) {
							r = e[s] = te(r);
						}
						c.handler = r;
						u.push(c);
					} else if (r !== l) {
						l.fns = r;
						e[s] = l;
					}
				}
			}
			if (u.length) {
				if (d) {
					u.sort(ne);
				}
				for (var p = 0; p < u.length; p++) {
					var f = u[p];
					i(f.name, f.handler, f.once, f.capture, f.passive);
				}
			}
			for (s in t) {
				if (n(e[s])) {
					c = ha(s);
					o(c.name, t[s], c.capture);
				}
			}
		}
		function oe(e, t, a) {
			function s() {
				a.apply(this, arguments);
				h(r.fns, s);
			}
			var r;
			var l = e[t];
			if (n(l)) {
				r = te([s]);
			} else if (i(l.fns) && o(l.merged)) {
				(r = l).fns.push(s);
			} else {
				r = te([l, s]);
			}
			r.merged = true;
			e[t] = r;
		}
		function ae(e, t, o) {
			var a = t.options.props;
			if (!n(a)) {
				var s = {};
				var r = e.attrs;
				var l = e.props;
				if (i(r) || i(l)) {
					for (var c in a) {
						var u = Ao(c);
						if (!se(s, l, c, u, true)) {
							se(s, r, c, u, false);
						}
					}
				}
				return s;
			}
		}
		function se(e, t, n, o, a) {
			if (i(t)) {
				if (m(t, n)) {
					e[n] = t[n];
					if (!a) {
						delete t[n];
					}
					return true;
				}
				if (m(t, o)) {
					e[n] = t[o];
					if (!a) {
						delete t[o];
					}
					return true;
				}
			}
			return false;
		}
		function re(e) {
			for (var t = 0; t < e.length; t++) {
				if (Array.isArray(e[t])) {
					return Array.prototype.concat.apply([], e);
				}
			}
			return e;
		}
		function le(e) {
			if (s(e)) {
				return [Z(e)];
			} else if (Array.isArray(e)) {
				return ue(e);
			} else {
				return undefined;
			}
		}
		function ce(e) {
			return i(e) && i(e.text) && a(e.isComment);
		}
		function ue(e, t) {
			var a;
			var r;
			var l;
			var c = [];
			for (a = 0; a < e.length; a++) {
				r = e[a];
				if (!n(r) && typeof r != "boolean") {
					l = c[c.length - 1];
					if (Array.isArray(r)) {
						c.push.apply(c, ue(r, (t || "") + "_" + a));
					} else if (s(r)) {
						if (ce(l)) {
							l.text += String(r);
						} else if (r !== "") {
							c.push(Z(r));
						}
					} else if (ce(r) && ce(l)) {
						c[c.length - 1] = Z(l.text + r.text);
					} else {
						if (o(e._isVList) && i(r.tag) && n(r.key) && i(t)) {
							r.key = "__vlist" + t + "_" + a + "__";
						}
						c.push(r);
					}
				}
			}
			return c;
		}
		function de(e, t) {
			if (e.__esModule && e.default) {
				e = e.default;
			}
			if (r(e)) {
				return t.extend(e);
			} else {
				return e;
			}
		}
		function pe(e, t, n, i, o) {
			var a = fa();
			a.asyncFactory = e;
			a.asyncMeta = {
				data: t,
				context: n,
				children: i,
				tag: o
			};
			return a;
		}
		function fe(e, t, a) {
			if (o(e.error) && i(e.errorComp)) {
				return e.errorComp;
			}
			if (i(e.resolved)) {
				return e.resolved;
			}
			if (o(e.loading) && i(e.loadingComp)) {
				return e.loadingComp;
			}
			if (!i(e.contexts)) {
				var s = e.contexts = [a];
				var l = true;
				function c() {
					for (var e = 0, t = s.length; e < t; e++) {
						s[e].$forceUpdate();
					}
				}
				var u = C(function (n) {
					e.resolved = de(n, t);
					if (!l) {
						c();
					}
				});
				var d = C(function (t) {
					if (i(e.errorComp)) {
						e.error = true;
						c();
					}
				});
				var p = e(u, d);
				if (r(p)) {
					if (typeof p.then == "function") {
						if (n(e.resolved)) {
							p.then(u, d);
						}
					} else if (i(p.component) && typeof p.component.then == "function") {
						p.component.then(u, d);
						if (i(p.error)) {
							e.errorComp = de(p.error, t);
						}
						if (i(p.loading)) {
							e.loadingComp = de(p.loading, t);
							if (p.delay === 0) {
								e.loading = true;
							} else {
								setTimeout(function () {
									if (n(e.resolved) && n(e.error)) {
										e.loading = true;
										c();
									}
								}, p.delay || 200);
							}
						}
						if (i(p.timeout)) {
							setTimeout(function () {
								if (n(e.resolved)) {
									d(null);
								}
							}, p.timeout);
						}
					}
				}
				l = false;
				if (e.loading) {
					return e.loadingComp;
				} else {
					return e.resolved;
				}
			}
			e.contexts.push(a);
		}
		function he(e) {
			return e.isComment && e.asyncFactory;
		}
		function me(e) {
			if (Array.isArray(e)) {
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					if (i(n) && (i(n.componentOptions) || he(n))) {
						return n;
					}
				}
			}
		}
		function ge(e) {
			e._events = Object.create(null);
			e._hasHookEvent = false;
			var t = e.$options._parentListeners;
			if (t) {
				ye(e, t);
			}
		}
		function ve(e, t, n) {
			if (n) {
				pa.$once(e, t);
			} else {
				pa.$on(e, t);
			}
		}
		function be(e, t) {
			pa.$off(e, t);
		}
		function ye(e, t, n) {
			pa = e;
			ie(t, n || {}, ve, be, e);
		}
		function we(e, t) {
			var n = {};
			if (!e) {
				return n;
			}
			var i = [];
			for (var o = 0, a = e.length; o < a; o++) {
				var s = e[o];
				var r = s.data;
				if (r && r.attrs && r.attrs.slot) {
					delete r.attrs.slot;
				}
				if (s.context !== t && s.functionalContext !== t || !r || r.slot == null) {
					i.push(s);
				} else {
					var l = s.data.slot;
					var c = n[l] ||= [];
					if (s.tag === "template") {
						c.push.apply(c, s.children);
					} else {
						c.push(s);
					}
				}
			}
			if (!i.every(_e)) {
				n.default = i;
			}
			return n;
		}
		function _e(e) {
			return e.isComment || e.text === " ";
		}
		function ke(e, t) {
			t = t || {};
			for (var n = 0; n < e.length; n++) {
				if (Array.isArray(e[n])) {
					ke(e[n], t);
				} else {
					t[e[n].key] = e[n].fn;
				}
			}
			return t;
		}
		function xe(e) {
			var t = e.$options;
			var n = t.parent;
			if (n && !t.abstract) {
				while (n.$options.abstract && n.$parent) {
					n = n.$parent;
				}
				n.$children.push(e);
			}
			e.$parent = n;
			e.$root = n ? n.$root : e;
			e.$children = [];
			e.$refs = {};
			e._watcher = null;
			e._inactive = null;
			e._directInactive = false;
			e._isMounted = false;
			e._isDestroyed = false;
			e._isBeingDestroyed = false;
		}
		function Ce(e, t, n) {
			e.$el = t;
			e.$options.render ||= fa;
			je(e, "beforeMount");
			var i;
			i = function () {
				e._update(e._render(), n);
			};
			e._watcher = new xa(e, i, _);
			n = false;
			if (e.$vnode == null) {
				e._isMounted = true;
				je(e, "mounted");
			}
			return e;
		}
		function Se(e, t, n, i, o) {
			var a = !!o || !!e.$options._renderChildren || !!i.data.scopedSlots || e.$scopedSlots !== Do;
			e.$options._parentVnode = i;
			e.$vnode = i;
			if (e._vnode) {
				e._vnode.parent = i;
			}
			e.$options._renderChildren = o;
			e.$attrs = i.data && i.data.attrs || Do;
			e.$listeners = n || Do;
			if (t && e.$options.props) {
				sa.shouldConvert = false;
				var s = e._props;
				for (var r = e.$options._propKeys || [], l = 0; l < r.length; l++) {
					var c = r[l];
					s[c] = Y(c, e.$options.props, t, e);
				}
				sa.shouldConvert = true;
				e.$options.propsData = t;
			}
			if (n) {
				var u = e.$options._parentListeners;
				e.$options._parentListeners = n;
				ye(e, n, u);
			}
			if (a) {
				e.$slots = we(o, i.context);
				e.$forceUpdate();
			}
		}
		function Ae(e) {
			while (e &&= e.$parent) {
				if (e._inactive) {
					return true;
				}
			}
			return false;
		}
		function Te(e, t) {
			if (t) {
				e._directInactive = false;
				if (Ae(e)) {
					return;
				}
			} else if (e._directInactive) {
				return;
			}
			if (e._inactive || e._inactive === null) {
				e._inactive = false;
				for (var n = 0; n < e.$children.length; n++) {
					Te(e.$children[n]);
				}
				je(e, "activated");
			}
		}
		function Pe(e, t) {
			if ((!t || !(e._directInactive = true, Ae(e))) && !e._inactive) {
				e._inactive = true;
				for (var n = 0; n < e.$children.length; n++) {
					Pe(e.$children[n]);
				}
				je(e, "deactivated");
			}
		}
		function je(e, t) {
			var n = e.$options[t];
			if (n) {
				for (var i = 0, o = n.length; i < o; i++) {
					try {
						n[i].call(e);
					} catch (n) {
						P(n, e, t + " hook");
					}
				}
			}
			if (e._hasHookEvent) {
				e.$emit("hook:" + t);
			}
		}
		function Ee() {
			_a = ga.length = va.length = 0;
			ba = {};
			ya = wa = false;
		}
		function Ne() {
			wa = true;
			var e;
			var t;
			ga.sort(function (e, t) {
				return e.id - t.id;
			});
			_a = 0;
			for (; _a < ga.length; _a++) {
				e = ga[_a];
				t = e.id;
				ba[t] = null;
				e.run();
			}
			var n = va.slice();
			var i = ga.slice();
			Ee();
			Ie(n);
			Oe(i);
			if (Xo && Oo.devtools) {
				Xo.emit("flush");
			}
		}
		function Oe(e) {
			for (var t = e.length; t--;) {
				var n = e[t];
				var i = n.vm;
				if (i._watcher === n && i._isMounted) {
					je(i, "updated");
				}
			}
		}
		function De(e) {
			e._inactive = false;
			va.push(e);
		}
		function Ie(e) {
			for (var t = 0; t < e.length; t++) {
				e[t]._inactive = true;
				Te(e[t], true);
			}
		}
		function $e(e) {
			var t = e.id;
			if (ba[t] == null) {
				ba[t] = true;
				if (wa) {
					for (var n = ga.length - 1; n > _a && ga[n].id > e.id;) {
						n--;
					}
					ga.splice(n + 1, 0, e);
				} else {
					ga.push(e);
				}
				if (!ya) {
					ya = true;
					Qo(Ne);
				}
			}
		}
		function Me(e) {
			Ca.clear();
			ze(e, Ca);
		}
		function ze(e, t) {
			var n;
			var i;
			var o = Array.isArray(e);
			if ((o || r(e)) && Object.isExtensible(e)) {
				if (e.__ob__) {
					var a = e.__ob__.dep.id;
					if (t.has(a)) {
						return;
					}
					t.add(a);
				}
				if (o) {
					for (n = e.length; n--;) {
						ze(e[n], t);
					}
				} else {
					i = Object.keys(e);
					n = i.length;
					while (n--) {
						ze(e[i[n]], t);
					}
				}
			}
		}
		function Fe(e, t, n) {
			Sa.get = function () {
				return this[t][n];
			};
			Sa.set = function (e) {
				this[t][n] = e;
			};
			Object.defineProperty(e, n, Sa);
		}
		function Le(e) {
			e._watchers = [];
			var t = e.$options;
			if (t.props) {
				Re(e, t.props);
			}
			if (t.methods) {
				We(e, t.methods);
			}
			if (t.data) {
				He(e);
			} else {
				I(e._data = {}, true);
			}
			if (t.computed) {
				qe(e, t.computed);
			}
			if (t.watch && t.watch !== Uo) {
				Ge(e, t.watch);
			}
		}
		function Re(e, t) {
			var n = e.$options.propsData || {};
			var i = e._props = {};
			var o = e.$options._propKeys = [];
			var a = !e.$parent;
			sa.shouldConvert = a;
			for (var s in t) {
				(function (a) {
					o.push(a);
					var s = Y(a, t, n, e);
					$(i, a, s);
					if (!(a in e)) {
						Fe(e, "_props", a);
					}
				})(s);
			}
			sa.shouldConvert = true;
		}
		function He(e) {
			var t = e.$options.data;
			if (!l(t = e._data = typeof t == "function" ? Be(t, e) : t || {})) {
				t = {};
			}
			var n = Object.keys(t);
			var i = e.$options.props;
			for (var o = (e.$options.methods, n.length); o--;) {
				var a = n[o];
				if ((!i || !m(i, a)) && !S(a)) {
					Fe(e, "_data", a);
				}
			}
			I(t, true);
		}
		function Be(e, t) {
			try {
				return e.call(t);
			} catch (e) {
				P(e, t, "data()");
				return {};
			}
		}
		function qe(e, t) {
			var n = e._computedWatchers = Object.create(null);
			var i = Jo();
			for (var o in t) {
				var a = t[o];
				var s = typeof a == "function" ? a : a.get;
				if (!i) {
					n[o] = new xa(e, s || _, _, Aa);
				}
				if (!(o in e)) {
					Ve(e, o, a);
				}
			}
		}
		function Ve(e, t, n) {
			var i = !Jo();
			if (typeof n == "function") {
				Sa.get = i ? Ue(t) : n;
				Sa.set = _;
			} else {
				Sa.get = n.get ? i && n.cache !== false ? Ue(t) : n.get : _;
				Sa.set = n.set ? n.set : _;
			}
			Object.defineProperty(e, t, Sa);
		}
		function Ue(e) {
			return function () {
				var t = this._computedWatchers && this._computedWatchers[e];
				if (t) {
					if (t.dirty) {
						t.evaluate();
					}
					if (ta.target) {
						t.depend();
					}
					return t.value;
				}
			};
		}
		function We(e, t) {
			e.$options.props;
			for (var n in t) {
				e[n] = t[n] == null ? _ : v(t[n], e);
			}
		}
		function Ge(e, t) {
			for (var n in t) {
				var i = t[n];
				if (Array.isArray(i)) {
					for (var o = 0; o < i.length; o++) {
						Ye(e, n, i[o]);
					}
				} else {
					Ye(e, n, i);
				}
			}
		}
		function Ye(e, t, n, i) {
			if (l(n)) {
				i = n;
				n = n.handler;
			}
			if (typeof n == "string") {
				n = e[n];
			}
			return e.$watch(t, n, i);
		}
		function Ke(e) {
			var t = e.$options.provide;
			if (t) {
				e._provided = typeof t == "function" ? t.call(e) : t;
			}
		}
		function Je(e) {
			var t = Xe(e.$options.inject, e);
			if (t) {
				sa.shouldConvert = false;
				Object.keys(t).forEach(function (n) {
					$(e, n, t[n]);
				});
				sa.shouldConvert = true;
			}
		}
		function Xe(e, t) {
			if (e) {
				var n = Object.create(null);
				for (var i = Zo ? Reflect.ownKeys(e).filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				}) : Object.keys(e), o = 0; o < i.length; o++) {
					var a = i[o];
					var s = e[a];
					for (var r = t; r;) {
						if (r._provided && s in r._provided) {
							n[a] = r._provided[s];
							break;
						}
						r = r.$parent;
					}
				}
				return n;
			}
		}
		function Ze(e, t, n, o, a) {
			var s = {};
			var r = e.options.props;
			if (i(r)) {
				for (var l in r) {
					s[l] = Y(l, r, t || Do);
				}
			} else {
				if (i(n.attrs)) {
					Qe(s, n.attrs);
				}
				if (i(n.props)) {
					Qe(s, n.props);
				}
			}
			var c = Object.create(o);
			var u = e.options.render.call(null, function (e, t, n, i) {
				return at(c, e, t, n, i, true);
			}, {
				data: n,
				props: s,
				children: a,
				parent: o,
				listeners: n.on || Do,
				injections: Xe(e.options.inject, o),
				slots: function () {
					return we(a, o);
				}
			});
			if (u instanceof ua) {
				u.functionalContext = o;
				u.functionalOptions = e.options;
				if (n.slot) {
					(u.data ||= {}).slot = n.slot;
				}
			}
			return u;
		}
		function Qe(e, t) {
			for (var n in t) {
				e[xo(n)] = t[n];
			}
		}
		function et(e, t, a, s, l) {
			if (!n(e)) {
				var c = a.$options._base;
				if (r(e)) {
					e = c.extend(e);
				}
				if (typeof e == "function") {
					var u;
					if (n(e.cid) && (u = e, (e = fe(u, c, a)) === undefined)) {
						return pe(u, t, a, s, l);
					}
					t = t || {};
					wt(e);
					if (i(t.model)) {
						ot(e.options, t);
					}
					var d = ae(t, e, l);
					if (o(e.options.functional)) {
						return Ze(e, d, t, a, s);
					}
					var p = t.on;
					t.on = t.nativeOn;
					if (o(e.options.abstract)) {
						var f = t.slot;
						t = {};
						if (f) {
							t.slot = f;
						}
					}
					nt(t);
					var h = e.options.name || l;
					return new ua("vue-component-" + e.cid + (h ? "-" + h : ""), t, undefined, undefined, undefined, a, {
						Ctor: e,
						propsData: d,
						listeners: p,
						tag: l,
						children: s
					}, u);
				}
			}
		}
		function tt(e, t, n, o) {
			var a = e.componentOptions;
			var s = {
				_isComponent: true,
				parent: t,
				propsData: a.propsData,
				_componentTag: a.tag,
				_parentVnode: e,
				_parentListeners: a.listeners,
				_renderChildren: a.children,
				_parentElm: n || null,
				_refElm: o || null
			};
			var r = e.data.inlineTemplate;
			if (i(r)) {
				s.render = r.render;
				s.staticRenderFns = r.staticRenderFns;
			}
			return new a.Ctor(s);
		}
		function nt(e) {
			e.hook ||= {};
			for (var t = 0; t < Pa.length; t++) {
				var n = Pa[t];
				var i = e.hook[n];
				var o = Ta[n];
				e.hook[n] = i ? it(o, i) : o;
			}
		}
		function it(e, t) {
			return function (n, i, o, a) {
				e(n, i, o, a);
				t(n, i, o, a);
			};
		}
		function ot(e, t) {
			var n = e.model && e.model.prop || "value";
			var o = e.model && e.model.event || "input";
			(t.props ||= {})[n] = t.model.value;
			var a = t.on ||= {};
			if (i(a[o])) {
				a[o] = [t.model.callback].concat(a[o]);
			} else {
				a[o] = t.model.callback;
			}
		}
		function at(e, t, n, i, a, r) {
			if (Array.isArray(n) || s(n)) {
				a = i;
				i = n;
				n = undefined;
			}
			if (o(r)) {
				a = Ea;
			}
			return st(e, t, n, i, a);
		}
		function st(e, t, n, o, a) {
			if (i(n) && i(n.__ob__)) {
				return fa();
			}
			if (i(n) && i(n.is)) {
				t = n.is;
			}
			if (!t) {
				return fa();
			}
			if (Array.isArray(o) && typeof o[0] == "function") {
				n = n || {};
				n.scopedSlots = {
					default: o[0]
				};
				o.length = 0;
			}
			if (a === Ea) {
				o = le(o);
			} else if (a === ja) {
				o = re(o);
			}
			var s;
			var r;
			if (typeof t == "string") {
				var l;
				r = e.$vnode && e.$vnode.ns || Oo.getTagNamespace(t);
				s = Oo.isReservedTag(t) ? new ua(Oo.parsePlatformTagName(t), n, o, undefined, undefined, e) : i(l = G(e.$options, "components", t)) ? et(l, n, e, o, t) : new ua(t, n, o, undefined, undefined, e);
			} else {
				s = et(t, n, e, o);
			}
			if (i(s)) {
				if (r) {
					rt(s, r);
				}
				return s;
			} else {
				return fa();
			}
		}
		function rt(e, t) {
			e.ns = t;
			if (e.tag !== "foreignObject" && i(e.children)) {
				for (var o = 0, a = e.children.length; o < a; o++) {
					var s = e.children[o];
					if (i(s.tag) && n(s.ns)) {
						rt(s, t);
					}
				}
			}
		}
		function lt(e, t) {
			var n;
			var o;
			var a;
			var s;
			var l;
			if (Array.isArray(e) || typeof e == "string") {
				n = new Array(e.length);
				o = 0;
				a = e.length;
				for (; o < a; o++) {
					n[o] = t(e[o], o);
				}
			} else if (typeof e == "number") {
				n = new Array(e);
				o = 0;
				for (; o < e; o++) {
					n[o] = t(o + 1, o);
				}
			} else if (r(e)) {
				s = Object.keys(e);
				n = new Array(s.length);
				o = 0;
				a = s.length;
				for (; o < a; o++) {
					l = s[o];
					n[o] = t(e[l], l, o);
				}
			}
			if (i(n)) {
				n._isVList = true;
			}
			return n;
		}
		function ct(e, t, n, i) {
			var o = this.$scopedSlots[e];
			if (o) {
				n = n || {};
				if (i) {
					n = y(y({}, i), n);
				}
				return o(n) || t;
			} else {
				return this.$slots[e] || t;
			}
		}
		function ut(e) {
			return G(this.$options, "filters", e, true) || Po;
		}
		function dt(e, t, n) {
			var i = Oo.keyCodes[t] || n;
			if (Array.isArray(i)) {
				return i.indexOf(e) === -1;
			} else {
				return i !== e;
			}
		}
		function pt(e, t, n, i, o) {
			if (n && r(n)) {
				if (Array.isArray(n)) {
					n = w(n);
				}
				var a;
				for (var s in n) {
					(function (s) {
						if (s === "class" || s === "style" || wo(s)) {
							a = e;
						} else {
							var r = e.attrs && e.attrs.type;
							a = i || Oo.mustUseProp(t, r, s) ? e.domProps ||= {} : e.attrs ||= {};
						}
						if (!(s in a) && !(a[s] = n[s], !o)) {
							(e.on ||= {})["update:" + s] = function (e) {
								n[s] = e;
							};
						}
					})(s);
				}
			}
			return e;
		}
		function ft(e, t) {
			var n = this._staticTrees[e];
			if (n && !t) {
				if (Array.isArray(n)) {
					return ee(n);
				} else {
					return Q(n);
				}
			} else {
				n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy);
				mt(n, "__static__" + e, false);
				return n;
			}
		}
		function ht(e, t, n) {
			mt(e, "__once__" + t + (n ? "_" + n : ""), true);
			return e;
		}
		function mt(e, t, n) {
			if (Array.isArray(e)) {
				for (var i = 0; i < e.length; i++) {
					if (e[i] && typeof e[i] != "string") {
						gt(e[i], t + "_" + i, n);
					}
				}
			} else {
				gt(e, t, n);
			}
		}
		function gt(e, t, n) {
			e.isStatic = true;
			e.key = t;
			e.isOnce = n;
		}
		function vt(e, t) {
			if (t && l(t)) {
				var n = e.on = e.on ? y({}, e.on) : {};
				for (var i in t) {
					var o = n[i];
					var a = t[i];
					n[i] = o ? [].concat(a, o) : a;
				}
			}
			return e;
		}
		function bt(e) {
			e._vnode = null;
			e._staticTrees = null;
			var t = e.$vnode = e.$options._parentVnode;
			var n = t && t.context;
			e.$slots = we(e.$options._renderChildren, n);
			e.$scopedSlots = Do;
			e._c = function (t, n, i, o) {
				return at(e, t, n, i, o, false);
			};
			e.$createElement = function (t, n, i, o) {
				return at(e, t, n, i, o, true);
			};
			var i = t && t.data;
			$(e, "$attrs", i && i.attrs || Do, null, true);
			$(e, "$listeners", e.$options._parentListeners || Do, null, true);
		}
		function yt(e, t) {
			var n = e.$options = Object.create(e.constructor.options);
			n.parent = t.parent;
			n.propsData = t.propsData;
			n._parentVnode = t._parentVnode;
			n._parentListeners = t._parentListeners;
			n._renderChildren = t._renderChildren;
			n._componentTag = t._componentTag;
			n._parentElm = t._parentElm;
			n._refElm = t._refElm;
			if (t.render) {
				n.render = t.render;
				n.staticRenderFns = t.staticRenderFns;
			}
		}
		function wt(e) {
			var t = e.options;
			if (e.super) {
				var n = wt(e.super);
				if (n !== e.superOptions) {
					e.superOptions = n;
					var i = _t(e);
					if (i) {
						y(e.extendOptions, i);
					}
					if ((t = e.options = W(n, e.extendOptions)).name) {
						t.components[t.name] = e;
					}
				}
			}
			return t;
		}
		function _t(e) {
			var t;
			var n = e.options;
			var i = e.extendOptions;
			var o = e.sealedOptions;
			for (var a in n) {
				if (n[a] !== o[a]) {
					t ||= {};
					t[a] = kt(n[a], i[a], o[a]);
				}
			}
			return t;
		}
		function kt(e, t, n) {
			if (Array.isArray(e)) {
				var i = [];
				n = Array.isArray(n) ? n : [n];
				t = Array.isArray(t) ? t : [t];
				for (var o = 0; o < e.length; o++) {
					if (t.indexOf(e[o]) >= 0 || n.indexOf(e[o]) < 0) {
						i.push(e[o]);
					}
				}
				return i;
			}
			return e;
		}
		function xt(e) {
			this._init(e);
		}
		function Ct(e) {
			e.use = function (e) {
				var t = this._installedPlugins ||= [];
				if (t.indexOf(e) > -1) {
					return this;
				}
				var n = b(arguments, 1);
				n.unshift(this);
				if (typeof e.install == "function") {
					e.install.apply(e, n);
				} else if (typeof e == "function") {
					e.apply(null, n);
				}
				t.push(e);
				return this;
			};
		}
		function St(e) {
			e.mixin = function (e) {
				this.options = W(this.options, e);
				return this;
			};
		}
		function At(e) {
			e.cid = 0;
			var t = 1;
			e.extend = function (e) {
				e = e || {};
				var n = this;
				var i = n.cid;
				var o = e._Ctor ||= {};
				if (o[i]) {
					return o[i];
				}
				var a = e.name || n.options.name;
				function s(e) {
					this._init(e);
				}
				s.prototype = Object.create(n.prototype);
				s.prototype.constructor = s;
				s.cid = t++;
				s.options = W(n.options, e);
				s.super = n;
				if (s.options.props) {
					Tt(s);
				}
				if (s.options.computed) {
					Pt(s);
				}
				s.extend = n.extend;
				s.mixin = n.mixin;
				s.use = n.use;
				Eo.forEach(function (e) {
					s[e] = n[e];
				});
				if (a) {
					s.options.components[a] = s;
				}
				s.superOptions = n.options;
				s.extendOptions = e;
				s.sealedOptions = y({}, s.options);
				o[i] = s;
				return s;
			};
		}
		function Tt(e) {
			var t = e.options.props;
			for (var n in t) {
				Fe(e.prototype, "_props", n);
			}
		}
		function Pt(e) {
			var t = e.options.computed;
			for (var n in t) {
				Ve(e.prototype, n, t[n]);
			}
		}
		function jt(e) {
			Eo.forEach(function (t) {
				e[t] = function (e, n) {
					if (n) {
						if (t === "component" && l(n)) {
							n.name = n.name || e;
							n = this.options._base.extend(n);
						}
						if (t === "directive" && typeof n == "function") {
							n = {
								bind: n,
								update: n
							};
						}
						this.options[t + "s"][e] = n;
						return n;
					} else {
						return this.options[t + "s"][e];
					}
				};
			});
		}
		function Et(e) {
			return e && (e.Ctor.options.name || e.tag);
		}
		function Nt(e, t) {
			if (Array.isArray(e)) {
				return e.indexOf(t) > -1;
			} else if (typeof e == "string") {
				return e.split(",").indexOf(t) > -1;
			} else {
				return !!c(e) && e.test(t);
			}
		}
		function Ot(e, t, n) {
			for (var i in e) {
				var o = e[i];
				if (o) {
					var a = Et(o.componentOptions);
					if (a && !n(a)) {
						if (o !== t) {
							Dt(o);
						}
						e[i] = null;
					}
				}
			}
		}
		function Dt(e) {
			if (e) {
				e.componentInstance.$destroy();
			}
		}
		function It(e) {
			var t = e.data;
			var n = e;
			for (var o = e; i(o.componentInstance);) {
				if ((o = o.componentInstance._vnode).data) {
					t = $t(o.data, t);
				}
			}
			while (i(n = n.parent)) {
				if (n.data) {
					t = $t(t, n.data);
				}
			}
			return Mt(t.staticClass, t.class);
		}
		function $t(e, t) {
			return {
				staticClass: zt(e.staticClass, t.staticClass),
				class: i(e.class) ? [e.class, t.class] : t.class
			};
		}
		function Mt(e, t) {
			if (i(e) || i(t)) {
				return zt(e, Ft(t));
			} else {
				return "";
			}
		}
		function zt(e, t) {
			if (e) {
				if (t) {
					return e + " " + t;
				} else {
					return e;
				}
			} else {
				return t || "";
			}
		}
		function Ft(e) {
			if (Array.isArray(e)) {
				return Lt(e);
			} else if (r(e)) {
				return Rt(e);
			} else if (typeof e == "string") {
				return e;
			} else {
				return "";
			}
		}
		function Lt(e) {
			var t;
			var n = "";
			for (var o = 0, a = e.length; o < a; o++) {
				if (i(t = Ft(e[o])) && t !== "") {
					if (n) {
						n += " ";
					}
					n += t;
				}
			}
			return n;
		}
		function Rt(e) {
			var t = "";
			for (var n in e) {
				if (e[n]) {
					if (t) {
						t += " ";
					}
					t += n;
				}
			}
			return t;
		}
		function Ht(e) {
			if (es(e)) {
				return "svg";
			} else if (e === "math") {
				return "math";
			} else {
				return undefined;
			}
		}
		function Bt(e) {
			if (typeof e == "string") {
				return document.querySelector(e) || document.createElement("div");
			} else {
				return e;
			}
		}
		function qt(e, t) {
			var n = e.data.ref;
			if (n) {
				var i = e.context;
				var o = e.componentInstance || e.elm;
				var a = i.$refs;
				if (t) {
					if (Array.isArray(a[n])) {
						h(a[n], o);
					} else if (a[n] === o) {
						a[n] = undefined;
					}
				} else if (e.data.refInFor) {
					if (Array.isArray(a[n])) {
						if (a[n].indexOf(o) < 0) {
							a[n].push(o);
						}
					} else {
						a[n] = [o];
					}
				} else {
					a[n] = o;
				}
			}
		}
		function Vt(e, t) {
			return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && Ut(e, t) || o(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && n(t.asyncFactory.error));
		}
		function Ut(e, t) {
			if (e.tag !== "input") {
				return true;
			}
			var n;
			var o = i(n = e.data) && i(n = n.attrs) && n.type;
			var a = i(n = t.data) && i(n = n.attrs) && n.type;
			return o === a || is(o) && is(a);
		}
		function Wt(e, t, n) {
			var o;
			var a;
			var s = {};
			for (o = t; o <= n; ++o) {
				a = e[o].key;
				if (i(a)) {
					s[a] = o;
				}
			}
			return s;
		}
		function Gt(e, t) {
			if (e.data.directives || t.data.directives) {
				Yt(e, t);
			}
		}
		function Yt(e, t) {
			var n;
			var i;
			var o;
			var a = e === ss;
			var s = t === ss;
			var r = Kt(e.data.directives, e.context);
			var l = Kt(t.data.directives, t.context);
			var c = [];
			var u = [];
			for (n in l) {
				i = r[n];
				o = l[n];
				if (i) {
					o.oldValue = i.value;
					Xt(o, "update", t, e);
					if (o.def && o.def.componentUpdated) {
						u.push(o);
					}
				} else {
					Xt(o, "bind", t, e);
					if (o.def && o.def.inserted) {
						c.push(o);
					}
				}
			}
			if (c.length) {
				function d() {
					for (var n = 0; n < c.length; n++) {
						Xt(c[n], "inserted", t, e);
					}
				}
				if (a) {
					oe(t.data.hook ||= {}, "insert", d);
				} else {
					d();
				}
			}
			if (u.length) {
				oe(t.data.hook ||= {}, "postpatch", function () {
					for (var n = 0; n < u.length; n++) {
						Xt(u[n], "componentUpdated", t, e);
					}
				});
			}
			if (!a) {
				for (n in r) {
					if (!l[n]) {
						Xt(r[n], "unbind", e, e, s);
					}
				}
			}
		}
		function Kt(e, t) {
			var n = Object.create(null);
			if (!e) {
				return n;
			}
			var i;
			var o;
			for (i = 0; i < e.length; i++) {
				if (!(o = e[i]).modifiers) {
					o.modifiers = cs;
				}
				n[Jt(o)] = o;
				o.def = G(t.$options, "directives", o.name, true);
			}
			return n;
		}
		function Jt(e) {
			return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
		}
		function Xt(e, t, n, i, o) {
			var a = e.def && e.def[t];
			if (a) {
				try {
					a(n.elm, e, n, i, o);
				} catch (i) {
					P(i, n.context, "directive " + e.name + " " + t + " hook");
				}
			}
		}
		function Zt(e, t) {
			var o = t.componentOptions;
			if ((!i(o) || o.Ctor.options.inheritAttrs !== false) && (!n(e.data.attrs) || !n(t.data.attrs))) {
				var a;
				var s;
				var r = t.elm;
				var l = e.data.attrs || {};
				var c = t.data.attrs || {};
				if (i(c.__ob__)) {
					c = t.data.attrs = y({}, c);
				}
				for (a in c) {
					s = c[a];
					if (l[a] !== s) {
						Qt(r, a, s);
					}
				}
				if (Ro && c.value !== l.value) {
					Qt(r, "value", c.value);
				}
				for (a in l) {
					if (n(c[a])) {
						if (Ka(a)) {
							r.removeAttributeNS(Ya, Ja(a));
						} else if (!Wa(a)) {
							r.removeAttribute(a);
						}
					}
				}
			}
		}
		function Qt(e, t, n) {
			if (Ga(t)) {
				if (Xa(n)) {
					e.removeAttribute(t);
				} else {
					n = t === "allowfullscreen" && e.tagName === "EMBED" ? "true" : t;
					e.setAttribute(t, n);
				}
			} else if (Wa(t)) {
				e.setAttribute(t, Xa(n) || n === "false" ? "false" : "true");
			} else if (Ka(t)) {
				if (Xa(n)) {
					e.removeAttributeNS(Ya, Ja(t));
				} else {
					e.setAttributeNS(Ya, t, n);
				}
			} else if (Xa(n)) {
				e.removeAttribute(t);
			} else {
				e.setAttribute(t, n);
			}
		}
		function en(e, t) {
			var o = t.elm;
			var a = t.data;
			var s = e.data;
			if (!n(a.staticClass) || !n(a.class) || !n(s) && (!n(s.staticClass) || !n(s.class))) {
				var r = It(t);
				var l = o._transitionClasses;
				if (i(l)) {
					r = zt(r, Ft(l));
				}
				if (r !== o._prevClass) {
					o.setAttribute("class", r);
					o._prevClass = r;
				}
			}
		}
		function tn(e) {
			function t() {
				(s ||= []).push(e.slice(h, o).trim());
				h = o + 1;
			}
			var n;
			var i;
			var o;
			var a;
			var s;
			var r = false;
			var l = false;
			var c = false;
			var u = false;
			var d = 0;
			var p = 0;
			var f = 0;
			var h = 0;
			for (o = 0; o < e.length; o++) {
				i = n;
				n = e.charCodeAt(o);
				if (r) {
					if (n === 39 && i !== 92) {
						r = false;
					}
				} else if (l) {
					if (n === 34 && i !== 92) {
						l = false;
					}
				} else if (c) {
					if (n === 96 && i !== 92) {
						c = false;
					}
				} else if (u) {
					if (n === 47 && i !== 92) {
						u = false;
					}
				} else if (n !== 124 || e.charCodeAt(o + 1) === 124 || e.charCodeAt(o - 1) === 124 || d || p || f) {
					switch (n) {
						case 34:
							l = true;
							break;
						case 39:
							r = true;
							break;
						case 96:
							c = true;
							break;
						case 40:
							f++;
							break;
						case 41:
							f--;
							break;
						case 91:
							p++;
							break;
						case 93:
							p--;
							break;
						case 123:
							d++;
							break;
						case 125:
							d--;
					}
					if (n === 47) {
						for (var m = o - 1, g = undefined; m >= 0 && (g = e.charAt(m)) === " "; m--);
						if (!g || !fs.test(g)) {
							u = true;
						}
					}
				} else if (a === undefined) {
					h = o + 1;
					a = e.slice(0, o).trim();
				} else {
					t();
				}
			}
			if (a === undefined) {
				a = e.slice(0, o).trim();
			} else if (h !== 0) {
				t();
			}
			if (s) {
				for (o = 0; o < s.length; o++) {
					a = nn(a, s[o]);
				}
			}
			return a;
		}
		function nn(e, t) {
			var n = t.indexOf("(");
			if (n < 0) {
				return "_f(\"" + t + "\")(" + e + ")";
			} else {
				return "_f(\"" + t.slice(0, n) + "\")(" + e + "," + t.slice(n + 1);
			}
		}
		function on(e) {
			console.error("[Vue compiler]: " + e);
		}
		function an(e, t) {
			if (e) {
				return e.map(function (e) {
					return e[t];
				}).filter(function (e) {
					return e;
				});
			} else {
				return [];
			}
		}
		function sn(e, t, n) {
			(e.props ||= []).push({
				name: t,
				value: n
			});
		}
		function rn(e, t, n) {
			(e.attrs ||= []).push({
				name: t,
				value: n
			});
		}
		function ln(e, t, n, i, o, a) {
			(e.directives ||= []).push({
				name: t,
				rawName: n,
				value: i,
				arg: o,
				modifiers: a
			});
		}
		function cn(e, t, n, i, o, a) {
			if (i && i.capture) {
				delete i.capture;
				t = "!" + t;
			}
			if (i && i.once) {
				delete i.once;
				t = "~" + t;
			}
			if (i && i.passive) {
				delete i.passive;
				t = "&" + t;
			}
			var s;
			if (i && i.native) {
				delete i.native;
				s = e.nativeEvents ||= {};
			} else {
				s = e.events ||= {};
			}
			var r = {
				value: n,
				modifiers: i
			};
			var l = s[t];
			if (Array.isArray(l)) {
				if (o) {
					l.unshift(r);
				} else {
					l.push(r);
				}
			} else {
				s[t] = l ? o ? [r, l] : [l, r] : r;
			}
		}
		function un(e, t, n) {
			var i = dn(e, ":" + t) || dn(e, "v-bind:" + t);
			if (i != null) {
				return tn(i);
			}
			if (n !== false) {
				var o = dn(e, t);
				if (o != null) {
					return JSON.stringify(o);
				}
			}
		}
		function dn(e, t) {
			var n;
			if ((n = e.attrsMap[t]) != null) {
				var i = e.attrsList;
				for (var o = 0, a = i.length; o < a; o++) {
					if (i[o].name === t) {
						i.splice(o, 1);
						break;
					}
				}
			}
			return n;
		}
		function pn(e, t, n) {
			var i = n || {};
			var o = i.number;
			var a = "$$v";
			if (i.trim) {
				a = "(typeof $$v === 'string'? $$v.trim(): $$v)";
			}
			if (o) {
				a = "_n(" + a + ")";
			}
			var s = fn(t, a);
			e.model = {
				value: "(" + t + ")",
				expression: "\"" + t + "\"",
				callback: "function ($$v) {" + s + "}"
			};
		}
		function fn(e, t) {
			var n = hn(e);
			if (n.idx === null) {
				return e + "=" + t;
			} else {
				return "$set(" + n.exp + ", " + n.idx + ", " + t + ")";
			}
		}
		function hn(e) {
			$a = e;
			Ia = $a.length;
			za = Fa = La = 0;
			if (e.indexOf("[") < 0 || e.lastIndexOf("]") < Ia - 1) {
				return {
					exp: e,
					idx: null
				};
			}
			while (!gn()) {
				Ma = mn();
				if (vn(Ma)) {
					yn(Ma);
				} else if (Ma === 91) {
					bn(Ma);
				}
			}
			return {
				exp: e.substring(0, Fa),
				idx: e.substring(Fa + 1, La)
			};
		}
		function mn() {
			return $a.charCodeAt(++za);
		}
		function gn() {
			return za >= Ia;
		}
		function vn(e) {
			return e === 34 || e === 39;
		}
		function bn(e) {
			var t = 1;
			for (Fa = za; !gn();) {
				e = mn();
				if (vn(e)) {
					yn(e);
				} else {
					if (e === 91) {
						t++;
					}
					if (e === 93) {
						t--;
					}
					if (t === 0) {
						La = za;
						break;
					}
				}
			}
		}
		function yn(e) {
			for (var t = e; !gn() && (e = mn()) !== t;);
		}
		function wn(e, t, n) {
			var i = n && n.number;
			var o = un(e, "value") || "null";
			var a = un(e, "true-value") || "true";
			var s = un(e, "false-value") || "false";
			sn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + (a === "true" ? ":(" + t + ")" : ":_q(" + t + "," + a + ")"));
			cn(e, ms, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat([$$v]))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + fn(t, "$$c") + "}", null, true);
		}
		function _n(e, t, n) {
			var i = n && n.number;
			var o = un(e, "value") || "null";
			sn(e, "checked", "_q(" + t + "," + (o = i ? "_n(" + o + ")" : o) + ")");
			cn(e, ms, fn(t, o), null, true);
		}
		function kn(e, t, n) {
			var i = "var $$selectedVal = " + ("Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = \"_value\" in o ? o._value : o.value;return " + (n && n.number ? "_n(val)" : "val") + "})") + ";";
			cn(e, "change", i = i + " " + fn(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, true);
		}
		function xn(e, t, n) {
			var i = e.attrsMap.type;
			var o = n || {};
			var a = o.lazy;
			var s = o.number;
			var r = o.trim;
			var l = !a && i !== "range";
			var c = a ? "change" : i === "range" ? hs : "input";
			var u = "$event.target.value";
			if (r) {
				u = "$event.target.value.trim()";
			}
			if (s) {
				u = "_n(" + u + ")";
			}
			var d = fn(t, u);
			if (l) {
				d = "if($event.target.composing)return;" + d;
			}
			sn(e, "value", "(" + t + ")");
			cn(e, c, d, null, true);
			if (r || s) {
				cn(e, "blur", "$forceUpdate()");
			}
		}
		function Cn(e) {
			var t;
			if (i(e[hs])) {
				t = Lo ? "change" : "input";
				e[t] = [].concat(e[hs], e[t] || []);
				delete e[hs];
			}
			if (i(e[ms])) {
				t = Vo ? "click" : "change";
				e[t] = [].concat(e[ms], e[t] || []);
				delete e[ms];
			}
		}
		function Sn(e, t, n, i, o) {
			if (n) {
				var a = t;
				var s = Ha;
				t = function (n) {
					if ((arguments.length === 1 ? a(n) : a.apply(null, arguments)) !== null) {
						An(e, t, i, s);
					}
				};
			}
			Ha.addEventListener(e, t, Wo ? {
				capture: i,
				passive: o
			} : i);
		}
		function An(e, t, n, i) {
			(i || Ha).removeEventListener(e, t, n);
		}
		function Tn(e, t) {
			if (!n(e.data.on) || !n(t.data.on)) {
				var i = t.data.on || {};
				var o = e.data.on || {};
				Ha = t.elm;
				Cn(i);
				ie(i, o, Sn, An, t.context);
			}
		}
		function Pn(e, t) {
			if (!n(e.data.domProps) || !n(t.data.domProps)) {
				var o;
				var a;
				var s = t.elm;
				var r = e.data.domProps || {};
				var l = t.data.domProps || {};
				if (i(l.__ob__)) {
					l = t.data.domProps = y({}, l);
				}
				for (o in r) {
					if (n(l[o])) {
						s[o] = "";
					}
				}
				for (o in l) {
					a = l[o];
					if (o !== "textContent" && o !== "innerHTML" || (t.children && (t.children.length = 0), a !== r[o])) {
						if (o === "value") {
							s._value = a;
							var c = n(a) ? "" : String(a);
							if (jn(s, t, c)) {
								s.value = c;
							}
						} else {
							s[o] = a;
						}
					}
				}
			}
		}
		function jn(e, t, n) {
			return !e.composing && (t.tag === "option" || En(e, n) || Nn(e, n));
		}
		function En(e, t) {
			var n = true;
			try {
				n = document.activeElement !== e;
			} catch (e) {}
			return n && e.value !== t;
		}
		function Nn(e, t) {
			var n = e.value;
			var o = e._vModifiers;
			if (i(o) && o.number) {
				return p(n) !== p(t);
			} else if (i(o) && o.trim) {
				return n.trim() !== t.trim();
			} else {
				return n !== t;
			}
		}
		function On(e) {
			var t = Dn(e.style);
			if (e.staticStyle) {
				return y(e.staticStyle, t);
			} else {
				return t;
			}
		}
		function Dn(e) {
			if (Array.isArray(e)) {
				return w(e);
			} else if (typeof e == "string") {
				return bs(e);
			} else {
				return e;
			}
		}
		function In(e, t) {
			var n;
			var i = {};
			if (t) {
				for (var o = e; o.componentInstance;) {
					if ((o = o.componentInstance._vnode).data && (n = On(o.data))) {
						y(i, n);
					}
				}
			}
			if (n = On(e.data)) {
				y(i, n);
			}
			for (var a = e; a = a.parent;) {
				if (a.data && (n = On(a.data))) {
					y(i, n);
				}
			}
			return i;
		}
		function $n(e, t) {
			var o = t.data;
			var a = e.data;
			if (!n(o.staticStyle) || !n(o.style) || !n(a.staticStyle) || !n(a.style)) {
				var s;
				var r;
				var l = t.elm;
				var c = a.staticStyle;
				var u = a.normalizedStyle || a.style || {};
				var d = c || u;
				var p = Dn(t.data.style) || {};
				t.data.normalizedStyle = i(p.__ob__) ? y({}, p) : p;
				var f = In(t, true);
				for (r in d) {
					if (n(f[r])) {
						_s(l, r, "");
					}
				}
				for (r in f) {
					if ((s = f[r]) !== d[r]) {
						_s(l, r, s == null ? "" : s);
					}
				}
			}
		}
		function Mn(e, t) {
			if (t &&= t.trim()) {
				if (e.classList) {
					if (t.indexOf(" ") > -1) {
						t.split(/\s+/).forEach(function (t) {
							return e.classList.add(t);
						});
					} else {
						e.classList.add(t);
					}
				} else {
					var n = " " + (e.getAttribute("class") || "") + " ";
					if (n.indexOf(" " + t + " ") < 0) {
						e.setAttribute("class", (n + t).trim());
					}
				}
			}
		}
		function zn(e, t) {
			if (t &&= t.trim()) {
				if (e.classList) {
					if (t.indexOf(" ") > -1) {
						t.split(/\s+/).forEach(function (t) {
							return e.classList.remove(t);
						});
					} else {
						e.classList.remove(t);
					}
					if (!e.classList.length) {
						e.removeAttribute("class");
					}
				} else {
					for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) {
						n = n.replace(i, " ");
					}
					if (n = n.trim()) {
						e.setAttribute("class", n);
					} else {
						e.removeAttribute("class");
					}
				}
			}
		}
		function Fn(e) {
			if (e) {
				if (typeof e == "object") {
					var t = {};
					if (e.css !== false) {
						y(t, Ss(e.name || "v"));
					}
					y(t, e);
					return t;
				}
				if (typeof e == "string") {
					return Ss(e);
				} else {
					return undefined;
				}
			}
		}
		function Ln(e) {
			Ds(function () {
				Ds(e);
			});
		}
		function Rn(e, t) {
			var n = e._transitionClasses ||= [];
			if (n.indexOf(t) < 0) {
				n.push(t);
				Mn(e, t);
			}
		}
		function Hn(e, t) {
			if (e._transitionClasses) {
				h(e._transitionClasses, t);
			}
			zn(e, t);
		}
		function Bn(e, t, n) {
			var i = qn(e, t);
			var o = i.type;
			var a = i.timeout;
			var s = i.propCount;
			if (!o) {
				return n();
			}
			var r = o === Ts ? Es : Os;
			var l = 0;
			function c() {
				e.removeEventListener(r, u);
				n();
			}
			function u(t) {
				if (t.target === e && ++l >= s) {
					c();
				}
			}
			setTimeout(function () {
				if (l < s) {
					c();
				}
			}, a + 1);
			e.addEventListener(r, u);
		}
		function qn(e, t) {
			var n;
			var i = window.getComputedStyle(e);
			var o = i[js + "Delay"].split(", ");
			var a = i[js + "Duration"].split(", ");
			var s = Vn(o, a);
			var r = i[Ns + "Delay"].split(", ");
			var l = i[Ns + "Duration"].split(", ");
			var c = Vn(r, l);
			var u = 0;
			var d = 0;
			if (t === Ts) {
				if (s > 0) {
					n = Ts;
					u = s;
					d = a.length;
				}
			} else if (t === Ps) {
				if (c > 0) {
					n = Ps;
					u = c;
					d = l.length;
				}
			} else {
				u = Math.max(s, c);
				n = u > 0 ? s > c ? Ts : Ps : null;
				d = n ? n === Ts ? a.length : l.length : 0;
			}
			return {
				type: n,
				timeout: u,
				propCount: d,
				hasTransform: n === Ts && Is.test(i[js + "Property"])
			};
		}
		function Vn(e, t) {
			while (e.length < t.length) {
				e = e.concat(e);
			}
			return Math.max.apply(null, t.map(function (t, n) {
				return Un(t) + Un(e[n]);
			}));
		}
		function Un(e) {
			return Number(e.slice(0, -1)) * 1000;
		}
		function Wn(e, t) {
			var o = e.elm;
			if (i(o._leaveCb)) {
				o._leaveCb.cancelled = true;
				o._leaveCb();
			}
			var a = Fn(e.data.transition);
			if (!n(a) && !i(o._enterCb) && o.nodeType === 1) {
				var s = a.css;
				var l = a.type;
				var c = a.enterClass;
				var u = a.enterToClass;
				var d = a.enterActiveClass;
				var f = a.appearClass;
				var h = a.appearToClass;
				var m = a.appearActiveClass;
				var g = a.beforeEnter;
				var v = a.enter;
				var b = a.afterEnter;
				var y = a.enterCancelled;
				var w = a.beforeAppear;
				var _ = a.appear;
				var k = a.afterAppear;
				var x = a.appearCancelled;
				var S = a.duration;
				var A = ma;
				for (var T = ma.$vnode; T && T.parent;) {
					T = T.parent;
					A = T.context;
				}
				var P = !A._isMounted || !e.isRootInsert;
				if (!P || _ || _ === "") {
					var j = P && f ? f : c;
					var E = P && m ? m : d;
					var N = P && h ? h : u;
					var O = P ? w || g : g;
					var D = P && typeof _ == "function" ? _ : v;
					var I = P ? k || b : b;
					var $ = P ? x || y : y;
					var M = p(r(S) ? S.enter : S);
					var z = s !== false && !Ro;
					var F = Kn(D);
					var L = o._enterCb = C(function () {
						if (z) {
							Hn(o, N);
							Hn(o, E);
						}
						if (L.cancelled) {
							if (z) {
								Hn(o, j);
							}
							if ($) {
								$(o);
							}
						} else if (I) {
							I(o);
						}
						o._enterCb = null;
					});
					if (!e.data.show) {
						oe(e.data.hook ||= {}, "insert", function () {
							var t = o.parentNode;
							var n = t && t._pending && t._pending[e.key];
							if (n && n.tag === e.tag && n.elm._leaveCb) {
								n.elm._leaveCb();
							}
							if (D) {
								D(o, L);
							}
						});
					}
					if (O) {
						O(o);
					}
					if (z) {
						Rn(o, j);
						Rn(o, E);
						Ln(function () {
							Rn(o, N);
							Hn(o, j);
							if (!L.cancelled && !F) {
								if (Yn(M)) {
									setTimeout(L, M);
								} else {
									Bn(o, l, L);
								}
							}
						});
					}
					if (e.data.show) {
						if (t) {
							t();
						}
						if (D) {
							D(o, L);
						}
					}
					if (!z && !F) {
						L();
					}
				}
			}
		}
		function Gn(e, t) {
			function o() {
				if (!x.cancelled) {
					if (!e.data.show) {
						(a.parentNode._pending ||= {})[e.key] = e;
					}
					if (h) {
						h(a);
					}
					if (w) {
						Rn(a, u);
						Rn(a, f);
						Ln(function () {
							Rn(a, d);
							Hn(a, u);
							if (!x.cancelled && !_) {
								if (Yn(k)) {
									setTimeout(x, k);
								} else {
									Bn(a, c, x);
								}
							}
						});
					}
					if (m) {
						m(a, x);
					}
					if (!w && !_) {
						x();
					}
				}
			}
			var a = e.elm;
			if (i(a._enterCb)) {
				a._enterCb.cancelled = true;
				a._enterCb();
			}
			var s = Fn(e.data.transition);
			if (n(s)) {
				return t();
			}
			if (!i(a._leaveCb) && a.nodeType === 1) {
				var l = s.css;
				var c = s.type;
				var u = s.leaveClass;
				var d = s.leaveToClass;
				var f = s.leaveActiveClass;
				var h = s.beforeLeave;
				var m = s.leave;
				var g = s.afterLeave;
				var v = s.leaveCancelled;
				var b = s.delayLeave;
				var y = s.duration;
				var w = l !== false && !Ro;
				var _ = Kn(m);
				var k = p(r(y) ? y.leave : y);
				var x = a._leaveCb = C(function () {
					if (a.parentNode && a.parentNode._pending) {
						a.parentNode._pending[e.key] = null;
					}
					if (w) {
						Hn(a, d);
						Hn(a, f);
					}
					if (x.cancelled) {
						if (w) {
							Hn(a, u);
						}
						if (v) {
							v(a);
						}
					} else {
						t();
						if (g) {
							g(a);
						}
					}
					a._leaveCb = null;
				});
				if (b) {
					b(o);
				} else {
					o();
				}
			}
		}
		function Yn(e) {
			return typeof e == "number" && !isNaN(e);
		}
		function Kn(e) {
			if (n(e)) {
				return false;
			}
			var t = e.fns;
			if (i(t)) {
				return Kn(Array.isArray(t) ? t[0] : t);
			} else {
				return (e._length || e.length) > 1;
			}
		}
		function Jn(e, t) {
			if (t.data.show !== true) {
				Wn(t);
			}
		}
		function Xn(e, t, n) {
			Zn(e, t, n);
			if (Lo || Ho) {
				setTimeout(function () {
					Zn(e, t, n);
				}, 0);
			}
		}
		function Zn(e, t, n) {
			var i = t.value;
			var o = e.multiple;
			if (!o || Array.isArray(i)) {
				var a;
				var s;
				for (var r = 0, l = e.options.length; r < l; r++) {
					s = e.options[r];
					if (o) {
						a = x(i, ei(s)) > -1;
						if (s.selected !== a) {
							s.selected = a;
						}
					} else if (k(ei(s), i)) {
						if (e.selectedIndex !== r) {
							e.selectedIndex = r;
						}
						return;
					}
				}
				if (!o) {
					e.selectedIndex = -1;
				}
			}
		}
		function Qn(e, t) {
			return t.every(function (t) {
				return !k(t, e);
			});
		}
		function ei(e) {
			if ("_value" in e) {
				return e._value;
			} else {
				return e.value;
			}
		}
		function ti(e) {
			e.target.composing = true;
		}
		function ni(e) {
			if (e.target.composing) {
				e.target.composing = false;
				ii(e.target, "input");
			}
		}
		function ii(e, t) {
			var n = document.createEvent("HTMLEvents");
			n.initEvent(t, true, true);
			e.dispatchEvent(n);
		}
		function oi(e) {
			if (!e.componentInstance || e.data && e.data.transition) {
				return e;
			} else {
				return oi(e.componentInstance._vnode);
			}
		}
		function ai(e) {
			var t = e && e.componentOptions;
			if (t && t.Ctor.options.abstract) {
				return ai(me(t.children));
			} else {
				return e;
			}
		}
		function si(e) {
			var t = {};
			var n = e.$options;
			for (var i in n.propsData) {
				t[i] = e[i];
			}
			var o = n._parentListeners;
			for (var a in o) {
				t[xo(a)] = o[a];
			}
			return t;
		}
		function ri(e, t) {
			if (/\d-keep-alive$/.test(t.tag)) {
				return e("keep-alive", {
					props: t.componentOptions.propsData
				});
			}
		}
		function li(e) {
			while (e = e.parent) {
				if (e.data.transition) {
					return true;
				}
			}
		}
		function ci(e, t) {
			return t.key === e.key && t.tag === e.tag;
		}
		function ui(e) {
			if (e.elm._moveCb) {
				e.elm._moveCb();
			}
			if (e.elm._enterCb) {
				e.elm._enterCb();
			}
		}
		function di(e) {
			e.data.newPos = e.elm.getBoundingClientRect();
		}
		function pi(e) {
			var t = e.data.pos;
			var n = e.data.newPos;
			var i = t.left - n.left;
			var o = t.top - n.top;
			if (i || o) {
				e.data.moved = true;
				var a = e.elm.style;
				a.transform = a.WebkitTransform = "translate(" + i + "px," + o + "px)";
				a.transitionDuration = "0s";
			}
		}
		function fi(e, t) {
			var n = t ? Us(t) : qs;
			if (n.test(e)) {
				for (var i, o, a = [], s = n.lastIndex = 0; i = n.exec(e);) {
					if ((o = i.index) > s) {
						a.push(JSON.stringify(e.slice(s, o)));
					}
					var r = tn(i[1].trim());
					a.push("_s(" + r + ")");
					s = o + i[0].length;
				}
				if (s < e.length) {
					a.push(JSON.stringify(e.slice(s)));
				}
				return a.join("+");
			}
		}
		function hi(e, t) {
			var n = t ? xr : kr;
			return e.replace(n, function (e) {
				return _r[e];
			});
		}
		function mi(e, t) {
			function n(t) {
				u += t;
				e = e.substring(t);
			}
			function i(e, n, i) {
				var o;
				var r;
				if (n == null) {
					n = u;
				}
				if (i == null) {
					i = u;
				}
				if (e) {
					r = e.toLowerCase();
				}
				if (e) {
					for (o = s.length - 1; o >= 0 && s[o].lowerCasedTag !== r; o--);
				} else {
					o = 0;
				}
				if (o >= 0) {
					for (var l = s.length - 1; l >= o; l--) {
						if (t.end) {
							t.end(s[l].tag, n, i);
						}
					}
					s.length = o;
					a = o && s[o - 1].tag;
				} else if (r === "br") {
					if (t.start) {
						t.start(e, [], true, n, i);
					}
				} else if (r === "p") {
					if (t.start) {
						t.start(e, [], false, n, i);
					}
					if (t.end) {
						t.end(e, n, i);
					}
				}
			}
			var o;
			for (var a, s = [], r = t.expectHTML, l = t.isUnaryTag || To, c = t.canBeLeftOpenTag || To, u = 0; e;) {
				o = e;
				if (a && yr(a)) {
					var d = 0;
					var p = a.toLowerCase();
					var f = wr[p] ||= new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i");
					var h = e.replace(f, function (e, n, i) {
						d = i.length;
						if (!yr(p) && p !== "noscript") {
							n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
						}
						if (Sr(p, n)) {
							n = n.slice(1);
						}
						if (t.chars) {
							t.chars(n);
						}
						return "";
					});
					u += e.length - h.length;
					e = h;
					i(p, u - d, u);
				} else {
					var m = e.indexOf("<");
					if (m === 0) {
						if (sr.test(e)) {
							var g = e.indexOf("-->");
							if (g >= 0) {
								if (t.shouldKeepComment) {
									t.comment(e.substring(4, g));
								}
								n(g + 3);
								continue;
							}
						}
						if (rr.test(e)) {
							var v = e.indexOf("]>");
							if (v >= 0) {
								n(v + 2);
								continue;
							}
						}
						var b = e.match(ar);
						if (b) {
							n(b[0].length);
							continue;
						}
						var y = e.match(or);
						if (y) {
							var w = u;
							n(y[0].length);
							i(y[1], w, u);
							continue;
						}
						var _ = function () {
							var t = e.match(nr);
							if (t) {
								var i = {
									tagName: t[1],
									attrs: [],
									start: u
								};
								n(t[0].length);
								for (var o, a; !(o = e.match(ir)) && (a = e.match(Qs));) {
									n(a[0].length);
									i.attrs.push(a);
								}
								if (o) {
									i.unarySlash = o[1];
									n(o[0].length);
									i.end = u;
									return i;
								}
							}
						}();
						if (_) {
							(function (e) {
								var n = e.tagName;
								var o = e.unarySlash;
								if (r) {
									if (a === "p" && Js(n)) {
										i(a);
									}
									if (c(n) && a === n) {
										i(n);
									}
								}
								var u = l(n) || !!o;
								for (var d = e.attrs.length, p = new Array(d), f = 0; f < d; f++) {
									var h = e.attrs[f];
									if (lr && h[0].indexOf("\"\"") === -1) {
										if (h[3] === "") {
											delete h[3];
										}
										if (h[4] === "") {
											delete h[4];
										}
										if (h[5] === "") {
											delete h[5];
										}
									}
									var m = h[3] || h[4] || h[5] || "";
									p[f] = {
										name: h[1],
										value: hi(m, t.shouldDecodeNewlines)
									};
								}
								if (!u) {
									s.push({
										tag: n,
										lowerCasedTag: n.toLowerCase(),
										attrs: p
									});
									a = n;
								}
								if (t.start) {
									t.start(n, p, u, e.start, e.end);
								}
							})(_);
							if (Sr(a, e)) {
								n(1);
							}
							continue;
						}
					}
					var k = undefined;
					var x = undefined;
					var C = undefined;
					if (m >= 0) {
						for (x = e.slice(m); !or.test(x) && !nr.test(x) && !sr.test(x) && !rr.test(x) && !((C = x.indexOf("<", 1)) < 0);) {
							m += C;
							x = e.slice(m);
						}
						k = e.substring(0, m);
						n(m);
					}
					if (m < 0) {
						k = e;
						e = "";
					}
					if (t.chars && k) {
						t.chars(k);
					}
				}
				if (e === o) {
					if (t.chars) {
						t.chars(e);
					}
					break;
				}
			}
			i();
		}
		function gi(e, t) {
			function n(e) {
				if (e.pre) {
					r = false;
				}
				if (hr(e.tag)) {
					l = false;
				}
			}
			cr = t.warn || on;
			hr = t.isPreTag || To;
			mr = t.mustUseProp || To;
			gr = t.getTagNamespace || To;
			dr = an(t.modules, "transformNode");
			pr = an(t.modules, "preTransformNode");
			fr = an(t.modules, "postTransformNode");
			ur = t.delimiters;
			var i;
			var o;
			var a = [];
			var s = t.preserveWhitespace !== false;
			var r = false;
			var l = false;
			mi(e, {
				warn: cr,
				expectHTML: t.expectHTML,
				isUnaryTag: t.isUnaryTag,
				canBeLeftOpenTag: t.canBeLeftOpenTag,
				shouldDecodeNewlines: t.shouldDecodeNewlines,
				shouldKeepComment: t.comments,
				start: function (e, s, c) {
					var u = o && o.ns || gr(e);
					if (Lo && u === "svg") {
						s = $i(s);
					}
					var d = {
						type: 1,
						tag: e,
						attrsList: s,
						attrsMap: Oi(s),
						parent: o,
						children: []
					};
					if (u) {
						d.ns = u;
					}
					if (Ii(d) && !Jo()) {
						d.forbidden = true;
					}
					for (var p = 0; p < pr.length; p++) {
						pr[p](d, t);
					}
					if (!r) {
						vi(d);
						if (d.pre) {
							r = true;
						}
					}
					if (hr(d.tag)) {
						l = true;
					}
					if (r) {
						bi(d);
					} else {
						_i(d);
						ki(d);
						Ai(d);
						yi(d);
						d.plain = !d.key && !s.length;
						wi(d);
						Ti(d);
						Pi(d);
						for (var f = 0; f < dr.length; f++) {
							dr[f](d, t);
						}
						ji(d);
					}
					if (i) {
						if (!a.length) {
							if (i.if && (d.elseif || d.else)) {
								Si(i, {
									exp: d.elseif,
									block: d
								});
							}
						}
					} else {
						i = d;
					}
					if (o && !d.forbidden) {
						if (d.elseif || d.else) {
							xi(d, o);
						} else if (d.slotScope) {
							o.plain = false;
							var h = d.slotTarget || "\"default\"";
							(o.scopedSlots ||= {})[h] = d;
						} else {
							o.children.push(d);
							d.parent = o;
						}
					}
					if (c) {
						n(d);
					} else {
						o = d;
						a.push(d);
					}
					for (var m = 0; m < fr.length; m++) {
						fr[m](d, t);
					}
				},
				end: function () {
					var e = a[a.length - 1];
					var t = e.children[e.children.length - 1];
					if (t && t.type === 3 && t.text === " " && !l) {
						e.children.pop();
					}
					a.length -= 1;
					o = a[a.length - 1];
					n(e);
				},
				chars: function (e) {
					if (o && (!Lo || o.tag !== "textarea" || o.attrsMap.placeholder !== e)) {
						var t = o.children;
						if (e = l || e.trim() ? Di(o) ? e : Dr(e) : s && t.length ? " " : "") {
							var n;
							if (!r && e !== " " && (n = fi(e, ur))) {
								t.push({
									type: 2,
									expression: n,
									text: e
								});
							} else if (e !== " " || !t.length || t[t.length - 1].text !== " ") {
								t.push({
									type: 3,
									text: e
								});
							}
						}
					}
				},
				comment: function (e) {
					o.children.push({
						type: 3,
						text: e,
						isComment: true
					});
				}
			});
			return i;
		}
		function vi(e) {
			if (dn(e, "v-pre") != null) {
				e.pre = true;
			}
		}
		function bi(e) {
			var t = e.attrsList.length;
			if (t) {
				var n = e.attrs = new Array(t);
				for (var i = 0; i < t; i++) {
					n[i] = {
						name: e.attrsList[i].name,
						value: JSON.stringify(e.attrsList[i].value)
					};
				}
			} else if (!e.pre) {
				e.plain = true;
			}
		}
		function yi(e) {
			var t = un(e, "key");
			if (t) {
				e.key = t;
			}
		}
		function wi(e) {
			var t = un(e, "ref");
			if (t) {
				e.ref = t;
				e.refInFor = Ei(e);
			}
		}
		function _i(e) {
			var t;
			if (t = dn(e, "v-for")) {
				var n = t.match(Pr);
				if (!n) {
					return;
				}
				e.for = n[2].trim();
				var i = n[1].trim();
				var o = i.match(jr);
				if (o) {
					e.alias = o[1].trim();
					e.iterator1 = o[2].trim();
					if (o[3]) {
						e.iterator2 = o[3].trim();
					}
				} else {
					e.alias = i;
				}
			}
		}
		function ki(e) {
			var t = dn(e, "v-if");
			if (t) {
				e.if = t;
				Si(e, {
					exp: t,
					block: e
				});
			} else {
				if (dn(e, "v-else") != null) {
					e.else = true;
				}
				var n = dn(e, "v-else-if");
				if (n) {
					e.elseif = n;
				}
			}
		}
		function xi(e, t) {
			var n = Ci(t.children);
			if (n && n.if) {
				Si(n, {
					exp: e.elseif,
					block: e
				});
			}
		}
		function Ci(e) {
			for (var t = e.length; t--;) {
				if (e[t].type === 1) {
					return e[t];
				}
				e.pop();
			}
		}
		function Si(e, t) {
			e.ifConditions ||= [];
			e.ifConditions.push(t);
		}
		function Ai(e) {
			if (dn(e, "v-once") != null) {
				e.once = true;
			}
		}
		function Ti(e) {
			if (e.tag === "slot") {
				e.slotName = un(e, "name");
			} else {
				var t = un(e, "slot");
				if (t) {
					e.slotTarget = t === "\"\"" ? "\"default\"" : t;
					rn(e, "slot", t);
				}
				if (e.tag === "template") {
					e.slotScope = dn(e, "scope");
				}
			}
		}
		function Pi(e) {
			var t;
			if (t = un(e, "is")) {
				e.component = t;
			}
			if (dn(e, "inline-template") != null) {
				e.inlineTemplate = true;
			}
		}
		function ji(e) {
			var t;
			var n;
			var i;
			var o;
			var a;
			var s;
			var r;
			var l = e.attrsList;
			t = 0;
			n = l.length;
			for (; t < n; t++) {
				i = o = l[t].name;
				a = l[t].value;
				if (Tr.test(i)) {
					e.hasBindings = true;
					if (s = Ni(i)) {
						i = i.replace(Or, "");
					}
					if (Nr.test(i)) {
						i = i.replace(Nr, "");
						a = tn(a);
						r = false;
						if (s) {
							if (s.prop) {
								r = true;
								if ((i = xo(i)) === "innerHtml") {
									i = "innerHTML";
								}
							}
							if (s.camel) {
								i = xo(i);
							}
							if (s.sync) {
								cn(e, "update:" + xo(i), fn(a, "$event"));
							}
						}
						if (r || !e.component && mr(e.tag, e.attrsMap.type, i)) {
							sn(e, i, a);
						} else {
							rn(e, i, a);
						}
					} else if (Ar.test(i)) {
						i = i.replace(Ar, "");
						cn(e, i, a, s, false, cr);
					} else {
						var c = (i = i.replace(Tr, "")).match(Er);
						var u = c && c[1];
						if (u) {
							i = i.slice(0, -(u.length + 1));
						}
						ln(e, i, o, a, u, s);
					}
				} else {
					rn(e, i, JSON.stringify(a));
				}
			}
		}
		function Ei(e) {
			for (var t = e; t;) {
				if (t.for !== undefined) {
					return true;
				}
				t = t.parent;
			}
			return false;
		}
		function Ni(e) {
			var t = e.match(Or);
			if (t) {
				var n = {};
				t.forEach(function (e) {
					n[e.slice(1)] = true;
				});
				return n;
			}
		}
		function Oi(e) {
			var t = {};
			for (var n = 0, i = e.length; n < i; n++) {
				t[e[n].name] = e[n].value;
			}
			return t;
		}
		function Di(e) {
			return e.tag === "script" || e.tag === "style";
		}
		function Ii(e) {
			return e.tag === "style" || e.tag === "script" && (!e.attrsMap.type || e.attrsMap.type === "text/javascript");
		}
		function $i(e) {
			var t = [];
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				if (!Ir.test(i.name)) {
					i.name = i.name.replace($r, "");
					t.push(i);
				}
			}
			return t;
		}
		function Mi(e, t) {
			if (e) {
				vr = Mr(t.staticKeys || "");
				br = t.isReservedTag || To;
				zi(e);
				Fi(e, false);
			}
		}
		function zi(e) {
			e.static = Li(e);
			if (e.type === 1) {
				if (!br(e.tag) && e.tag !== "slot" && e.attrsMap["inline-template"] == null) {
					return;
				}
				for (var t = 0, n = e.children.length; t < n; t++) {
					var i = e.children[t];
					zi(i);
					if (!i.static) {
						e.static = false;
					}
				}
				if (e.ifConditions) {
					for (var o = 1, a = e.ifConditions.length; o < a; o++) {
						var s = e.ifConditions[o].block;
						zi(s);
						if (!s.static) {
							e.static = false;
						}
					}
				}
			}
		}
		function Fi(e, t) {
			if (e.type === 1) {
				if (e.static || e.once) {
					e.staticInFor = t;
				}
				if (e.static && e.children.length && (e.children.length !== 1 || e.children[0].type !== 3)) {
					e.staticRoot = true;
					return;
				}
				e.staticRoot = false;
				if (e.children) {
					for (var n = 0, i = e.children.length; n < i; n++) {
						Fi(e.children[n], t || !!e.for);
					}
				}
				if (e.ifConditions) {
					for (var o = 1, a = e.ifConditions.length; o < a; o++) {
						Fi(e.ifConditions[o].block, t);
					}
				}
			}
		}
		function Li(e) {
			return e.type !== 2 && (e.type === 3 || !!e.pre || !e.hasBindings && !e.if && !e.for && !yo(e.tag) && !!br(e.tag) && !Ri(e) && !!Object.keys(e).every(vr));
		}
		function Ri(e) {
			while (e.parent) {
				if ((e = e.parent).tag !== "template") {
					return false;
				}
				if (e.for) {
					return true;
				}
			}
			return false;
		}
		function Hi(e, t, n) {
			var i = t ? "nativeOn:{" : "on:{";
			for (var o in e) {
				i += "\"" + o + "\":" + Bi(o, e[o]) + ",";
			}
			return i.slice(0, -1) + "}";
		}
		function Bi(e, t) {
			if (!t) {
				return "function(){}";
			}
			if (Array.isArray(t)) {
				return "[" + t.map(function (t) {
					return Bi(e, t);
				}).join(",") + "]";
			}
			var n = Fr.test(t.value);
			var i = zr.test(t.value);
			if (t.modifiers) {
				var o = "";
				var a = "";
				var s = [];
				for (var r in t.modifiers) {
					if (Hr[r]) {
						a += Hr[r];
						if (Lr[r]) {
							s.push(r);
						}
					} else {
						s.push(r);
					}
				}
				if (s.length) {
					o += qi(s);
				}
				if (a) {
					o += a;
				}
				return "function($event){" + o + (n ? t.value + "($event)" : i ? "(" + t.value + ")($event)" : t.value) + "}";
			}
			if (n || i) {
				return t.value;
			} else {
				return "function($event){" + t.value + "}";
			}
		}
		function qi(e) {
			return "if(!('button' in $event)&&" + e.map(Vi).join("&&") + ")return null;";
		}
		function Vi(e) {
			var t = parseInt(e, 10);
			if (t) {
				return "$event.keyCode!==" + t;
			}
			var n = Lr[e];
			return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")";
		}
		function Ui(e, t) {
			var n = new qr(t);
			return {
				render: "with(this){return " + (e ? Wi(e, n) : "_c(\"div\")") + "}",
				staticRenderFns: n.staticRenderFns
			};
		}
		function Wi(e, t) {
			if (e.staticRoot && !e.staticProcessed) {
				return Gi(e, t);
			}
			if (e.once && !e.onceProcessed) {
				return Yi(e, t);
			}
			if (e.for && !e.forProcessed) {
				return Xi(e, t);
			}
			if (e.if && !e.ifProcessed) {
				return Ki(e, t);
			}
			if (e.tag !== "template" || e.slotTarget) {
				if (e.tag === "slot") {
					return uo(e, t);
				}
				var n;
				if (e.component) {
					n = po(e.component, e, t);
				} else {
					var i = e.plain ? undefined : Zi(e, t);
					var o = e.inlineTemplate ? null : oo(e, t, true);
					n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (o ? "," + o : "") + ")";
				}
				for (var a = 0; a < t.transforms.length; a++) {
					n = t.transforms[a](e, n);
				}
				return n;
			}
			return oo(e, t) || "void 0";
		}
		function Gi(e, t) {
			e.staticProcessed = true;
			t.staticRenderFns.push("with(this){return " + Wi(e, t) + "}");
			return "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
		}
		function Yi(e, t) {
			e.onceProcessed = true;
			if (e.if && !e.ifProcessed) {
				return Ki(e, t);
			}
			if (e.staticInFor) {
				var n = "";
				for (var i = e.parent; i;) {
					if (i.for) {
						n = i.key;
						break;
					}
					i = i.parent;
				}
				if (n) {
					return "_o(" + Wi(e, t) + "," + t.onceId++ + "," + n + ")";
				} else {
					return Wi(e, t);
				}
			}
			return Gi(e, t);
		}
		function Ki(e, t, n, i) {
			e.ifProcessed = true;
			return Ji(e.ifConditions.slice(), t, n, i);
		}
		function Ji(e, t, n, i) {
			function o(e) {
				if (n) {
					return n(e, t);
				} else if (e.once) {
					return Yi(e, t);
				} else {
					return Wi(e, t);
				}
			}
			if (!e.length) {
				return i || "_e()";
			}
			var a = e.shift();
			if (a.exp) {
				return "(" + a.exp + ")?" + o(a.block) + ":" + Ji(e, t, n, i);
			} else {
				return "" + o(a.block);
			}
		}
		function Xi(e, t, n, i) {
			var o = e.for;
			var a = e.alias;
			var s = e.iterator1 ? "," + e.iterator1 : "";
			var r = e.iterator2 ? "," + e.iterator2 : "";
			e.forProcessed = true;
			return (i || "_l") + "((" + o + "),function(" + a + s + r + "){return " + (n || Wi)(e, t) + "})";
		}
		function Zi(e, t) {
			var n = "{";
			var i = Qi(e, t);
			if (i) {
				n += i + ",";
			}
			if (e.key) {
				n += "key:" + e.key + ",";
			}
			if (e.ref) {
				n += "ref:" + e.ref + ",";
			}
			if (e.refInFor) {
				n += "refInFor:true,";
			}
			if (e.pre) {
				n += "pre:true,";
			}
			if (e.component) {
				n += "tag:\"" + e.tag + "\",";
			}
			for (var o = 0; o < t.dataGenFns.length; o++) {
				n += t.dataGenFns[o](e);
			}
			if (e.attrs) {
				n += "attrs:{" + fo(e.attrs) + "},";
			}
			if (e.props) {
				n += "domProps:{" + fo(e.props) + "},";
			}
			if (e.events) {
				n += Hi(e.events, false, t.warn) + ",";
			}
			if (e.nativeEvents) {
				n += Hi(e.nativeEvents, true, t.warn) + ",";
			}
			if (e.slotTarget) {
				n += "slot:" + e.slotTarget + ",";
			}
			if (e.scopedSlots) {
				n += to(e.scopedSlots, t) + ",";
			}
			if (e.model) {
				n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},";
			}
			if (e.inlineTemplate) {
				var a = eo(e, t);
				if (a) {
					n += a + ",";
				}
			}
			n = n.replace(/,$/, "") + "}";
			if (e.wrapData) {
				n = e.wrapData(n);
			}
			if (e.wrapListeners) {
				n = e.wrapListeners(n);
			}
			return n;
		}
		function Qi(e, t) {
			var n = e.directives;
			if (n) {
				var i;
				var o;
				var a;
				var s;
				var r = "directives:[";
				var l = false;
				i = 0;
				o = n.length;
				for (; i < o; i++) {
					a = n[i];
					s = true;
					var c = t.directives[a.name];
					if (c) {
						s = !!c(e, a, t.warn);
					}
					if (s) {
						l = true;
						r += "{name:\"" + a.name + "\",rawName:\"" + a.rawName + "\"" + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ",arg:\"" + a.arg + "\"" : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},";
					}
				}
				if (l) {
					return r.slice(0, -1) + "]";
				} else {
					return undefined;
				}
			}
		}
		function eo(e, t) {
			var n = e.children[0];
			if (n.type === 1) {
				var i = Ui(n, t.options);
				return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function (e) {
					return "function(){" + e + "}";
				}).join(",") + "]}";
			}
		}
		function to(e, t) {
			return "scopedSlots:_u([" + Object.keys(e).map(function (n) {
				return no(n, e[n], t);
			}).join(",") + "])";
		}
		function no(e, t, n) {
			if (t.for && !t.forProcessed) {
				return io(e, t, n);
			} else {
				return "{key:" + e + ",fn:function(" + String(t.attrsMap.scope) + "){return " + (t.tag === "template" ? oo(t, n) || "void 0" : Wi(t, n)) + "}}";
			}
		}
		function io(e, t, n) {
			var i = t.for;
			var o = t.alias;
			var a = t.iterator1 ? "," + t.iterator1 : "";
			var s = t.iterator2 ? "," + t.iterator2 : "";
			t.forProcessed = true;
			return "_l((" + i + "),function(" + o + a + s + "){return " + no(e, t, n) + "})";
		}
		function oo(e, t, n, i, o) {
			var a = e.children;
			if (a.length) {
				var s = a[0];
				if (a.length === 1 && s.for && s.tag !== "template" && s.tag !== "slot") {
					return (i || Wi)(s, t);
				}
				var r = n ? ao(a, t.maybeComponent) : 0;
				var l = o || ro;
				return "[" + a.map(function (e) {
					return l(e, t);
				}).join(",") + "]" + (r ? "," + r : "");
			}
		}
		function ao(e, t) {
			var n = 0;
			for (var i = 0; i < e.length; i++) {
				var o = e[i];
				if (o.type === 1) {
					if (so(o) || o.ifConditions && o.ifConditions.some(function (e) {
						return so(e.block);
					})) {
						n = 2;
						break;
					}
					if (t(o) || o.ifConditions && o.ifConditions.some(function (e) {
						return t(e.block);
					})) {
						n = 1;
					}
				}
			}
			return n;
		}
		function so(e) {
			return e.for !== undefined || e.tag === "template" || e.tag === "slot";
		}
		function ro(e, t) {
			if (e.type === 1) {
				return Wi(e, t);
			} else if (e.type === 3 && e.isComment) {
				return co(e);
			} else {
				return lo(e);
			}
		}
		function lo(e) {
			return "_v(" + (e.type === 2 ? e.expression : ho(JSON.stringify(e.text))) + ")";
		}
		function co(e) {
			return "_e(" + JSON.stringify(e.text) + ")";
		}
		function uo(e, t) {
			var n = e.slotName || "\"default\"";
			var i = oo(e, t);
			var o = "_t(" + n + (i ? "," + i : "");
			var a = e.attrs && "{" + e.attrs.map(function (e) {
				return xo(e.name) + ":" + e.value;
			}).join(",") + "}";
			var s = e.attrsMap["v-bind"];
			if ((!!a || !!s) && !i) {
				o += ",null";
			}
			if (a) {
				o += "," + a;
			}
			if (s) {
				o += (a ? "" : ",null") + "," + s;
			}
			return o + ")";
		}
		function po(e, t, n) {
			var i = t.inlineTemplate ? null : oo(t, n, true);
			return "_c(" + e + "," + Zi(t, n) + (i ? "," + i : "") + ")";
		}
		function fo(e) {
			var t = "";
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				t += "\"" + i.name + "\":" + ho(i.value) + ",";
			}
			return t.slice(0, -1);
		}
		function ho(e) {
			return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
		}
		function mo(e, t) {
			try {
				return new Function(e);
			} catch (n) {
				t.push({
					err: n,
					code: e
				});
				return _;
			}
		}
		function go(e) {
			var t = Object.create(null);
			return function (n, i, o) {
				var a = (i = i || {}).delimiters ? String(i.delimiters) + n : n;
				if (t[a]) {
					return t[a];
				}
				var s = e(n, i);
				var r = {};
				var l = [];
				r.render = mo(s.render, l);
				r.staticRenderFns = s.staticRenderFns.map(function (e) {
					return mo(e, l);
				});
				return t[a] = r;
			};
		}
		function vo(e) {
			if (e.outerHTML) {
				return e.outerHTML;
			}
			var t = document.createElement("div");
			t.appendChild(e.cloneNode(true));
			return t.innerHTML;
		}
		var bo = Object.prototype.toString;
		var yo = f("slot,component", true);
		var wo = f("key,ref,slot,is");
		var _o = Object.prototype.hasOwnProperty;
		var ko = /-(\w)/g;
		var xo = g(function (e) {
			return e.replace(ko, function (e, t) {
				if (t) {
					return t.toUpperCase();
				} else {
					return "";
				}
			});
		});
		var Co = g(function (e) {
			return e.charAt(0).toUpperCase() + e.slice(1);
		});
		var So = /\B([A-Z])/g;
		var Ao = g(function (e) {
			return e.replace(So, "-$1").toLowerCase();
		});
		function To(e, t, n) {
			return false;
		}
		function Po(e) {
			return e;
		}
		var jo = "data-server-rendered";
		var Eo = ["component", "directive", "filter"];
		var No = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"];
		var Oo = {
			optionMergeStrategies: Object.create(null),
			silent: false,
			productionTip: false,
			devtools: false,
			performance: false,
			errorHandler: null,
			warnHandler: null,
			ignoredElements: [],
			keyCodes: Object.create(null),
			isReservedTag: To,
			isReservedAttr: To,
			isUnknownElement: To,
			getTagNamespace: _,
			parsePlatformTagName: Po,
			mustUseProp: To,
			_lifecycleHooks: No
		};
		var Do = Object.freeze({});
		var Io = /[^\w.$]/;
		var $o = _;
		var Mo = "__proto__" in {};
		var zo = typeof window != "undefined";
		var Fo = zo && window.navigator.userAgent.toLowerCase();
		var Lo = Fo && /msie|trident/.test(Fo);
		var Ro = Fo && Fo.indexOf("msie 9.0") > 0;
		var Ho = Fo && Fo.indexOf("edge/") > 0;
		var Bo = Fo && Fo.indexOf("android") > 0;
		var qo = Fo && /iphone|ipad|ipod|ios/.test(Fo);
		var Vo = Fo && /chrome\/\d+/.test(Fo) && !Ho;
		var Uo = {}.watch;
		var Wo = false;
		if (zo) {
			try {
				var Go = {};
				Object.defineProperty(Go, "passive", {
					get: function () {
						Wo = true;
					}
				});
				window.addEventListener("test-passive", null, Go);
			} catch (e) {}
		}
		var Yo;
		var Ko;
		function Jo() {
			if (Yo === undefined) {
				Yo = !zo && e !== undefined && e.process.env.VUE_ENV === "server";
			}
			return Yo;
		}
		var Xo = zo && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
		var Zo = typeof Symbol != "undefined" && j(Symbol) && typeof Reflect != "undefined" && j(Reflect.ownKeys);
		var Qo = function () {
			function e() {
				i = false;
				var e = n.slice(0);
				n.length = 0;
				for (var t = 0; t < e.length; t++) {
					e[t]();
				}
			}
			var t;
			var n = [];
			var i = false;
			if (typeof Promise != "undefined" && j(Promise)) {
				var o = Promise.resolve();
				function a(e) {
					console.error(e);
				}
				t = function () {
					o.then(e).catch(a);
					if (qo) {
						setTimeout(_);
					}
				};
			} else if (Lo || typeof MutationObserver == "undefined" || !j(MutationObserver) && MutationObserver.toString() !== "[object MutationObserverConstructor]") {
				t = function () {
					setTimeout(e, 0);
				};
			} else {
				var s = 1;
				var r = new MutationObserver(e);
				var l = document.createTextNode(String(s));
				r.observe(l, {
					characterData: true
				});
				t = function () {
					s = (s + 1) % 2;
					l.data = String(s);
				};
			}
			return function (e, o) {
				var a;
				n.push(function () {
					if (e) {
						try {
							e.call(o);
						} catch (e) {
							P(e, o, "nextTick");
						}
					} else if (a) {
						a(o);
					}
				});
				if (!i) {
					i = true;
					t();
				}
				if (!e && typeof Promise != "undefined") {
					return new Promise(function (e, t) {
						a = e;
					});
				}
			};
		}();
		Ko = typeof Set != "undefined" && j(Set) ? Set : function () {
			function e() {
				this.set = Object.create(null);
			}
			e.prototype.has = function (e) {
				return this.set[e] === true;
			};
			e.prototype.add = function (e) {
				this.set[e] = true;
			};
			e.prototype.clear = function () {
				this.set = Object.create(null);
			};
			return e;
		}();
		var ea = 0;
		function ta() {
			this.id = ea++;
			this.subs = [];
		}
		ta.prototype.addSub = function (e) {
			this.subs.push(e);
		};
		ta.prototype.removeSub = function (e) {
			h(this.subs, e);
		};
		ta.prototype.depend = function () {
			if (ta.target) {
				ta.target.addDep(this);
			}
		};
		ta.prototype.notify = function () {
			var e = this.subs.slice();
			for (var t = 0, n = e.length; t < n; t++) {
				e[t].update();
			}
		};
		ta.target = null;
		var na = [];
		var ia = Array.prototype;
		var oa = Object.create(ia);
		["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
			var t = ia[e];
			A(oa, e, function () {
				var n = [];
				for (var i = arguments.length; i--;) {
					n[i] = arguments[i];
				}
				var o;
				var a = t.apply(this, n);
				var s = this.__ob__;
				switch (e) {
					case "push":
					case "unshift":
						o = n;
						break;
					case "splice":
						o = n.slice(2);
				}
				if (o) {
					s.observeArray(o);
				}
				s.dep.notify();
				return a;
			});
		});
		var aa = Object.getOwnPropertyNames(oa);
		var sa = {
			shouldConvert: true
		};
		function ra(e) {
			this.value = e;
			this.dep = new ta();
			this.vmCount = 0;
			A(e, "__ob__", this);
			if (Array.isArray(e)) {
				(Mo ? O : D)(e, oa, aa);
				this.observeArray(e);
			} else {
				this.walk(e);
			}
		}
		ra.prototype.walk = function (e) {
			for (var t = Object.keys(e), n = 0; n < t.length; n++) {
				$(e, t[n], e[t[n]]);
			}
		};
		ra.prototype.observeArray = function (e) {
			for (var t = 0, n = e.length; t < n; t++) {
				I(e[t]);
			}
		};
		var la = Oo.optionMergeStrategies;
		la.data = function (e, t, n) {
			if (n) {
				return R(e, t, n);
			} else if (t && typeof t != "function") {
				return e;
			} else {
				return R.call(this, e, t);
			}
		};
		No.forEach(function (e) {
			la[e] = H;
		});
		Eo.forEach(function (e) {
			la[e + "s"] = B;
		});
		la.watch = function (e, t) {
			if (e === Uo) {
				e = undefined;
			}
			if (t === Uo) {
				t = undefined;
			}
			if (!t) {
				return Object.create(e || null);
			}
			if (!e) {
				return t;
			}
			var n = {};
			y(n, e);
			for (var i in t) {
				var o = n[i];
				var a = t[i];
				if (o && !Array.isArray(o)) {
					o = [o];
				}
				n[i] = o ? o.concat(a) : Array.isArray(a) ? a : [a];
			}
			return n;
		};
		la.props = la.methods = la.inject = la.computed = function (e, t) {
			if (!e) {
				return t;
			}
			var n = Object.create(null);
			y(n, e);
			if (t) {
				y(n, t);
			}
			return n;
		};
		la.provide = R;
		function ca(e, t) {
			if (t === undefined) {
				return e;
			} else {
				return t;
			}
		}
		function ua(e, t, n, i, o, a, s, r) {
			this.tag = e;
			this.data = t;
			this.children = n;
			this.text = i;
			this.elm = o;
			this.ns = undefined;
			this.context = a;
			this.functionalContext = undefined;
			this.key = t && t.key;
			this.componentOptions = s;
			this.componentInstance = undefined;
			this.parent = undefined;
			this.raw = false;
			this.isStatic = false;
			this.isRootInsert = true;
			this.isComment = false;
			this.isCloned = false;
			this.isOnce = false;
			this.asyncFactory = r;
			this.asyncMeta = undefined;
			this.isAsyncPlaceholder = false;
		}
		var da = {
			child: {}
		};
		da.child.get = function () {
			return this.componentInstance;
		};
		Object.defineProperties(ua.prototype, da);
		var pa;
		function fa(e = "") {
			var t = new ua();
			t.text = e;
			t.isComment = true;
			return t;
		}
		var ha = g(function (e) {
			var t = e.charAt(0) === "&";
			var n = (e = t ? e.slice(1) : e).charAt(0) === "~";
			var i = (e = n ? e.slice(1) : e).charAt(0) === "!";
			e = i ? e.slice(1) : e;
			return {
				name: e,
				plain: !t && !n && !i,
				once: n,
				capture: i,
				passive: t
			};
		});
		var ma = null;
		var ga = [];
		var va = [];
		var ba = {};
		var ya = false;
		var wa = false;
		var _a = 0;
		var ka = 0;
		function xa(e, t, n, i) {
			this.vm = e;
			e._watchers.push(this);
			if (i) {
				this.deep = !!i.deep;
				this.user = !!i.user;
				this.lazy = !!i.lazy;
				this.sync = !!i.sync;
			} else {
				this.deep = this.user = this.lazy = this.sync = false;
			}
			this.cb = n;
			this.id = ++ka;
			this.active = true;
			this.dirty = this.lazy;
			this.deps = [];
			this.newDeps = [];
			this.depIds = new Ko();
			this.newDepIds = new Ko();
			this.expression = "";
			if (typeof t == "function") {
				this.getter = t;
			} else {
				this.getter = T(t);
				this.getter ||= function () {};
			}
			this.value = this.lazy ? undefined : this.get();
		}
		xa.prototype.get = function () {
			E(this);
			var e;
			var t = this.vm;
			try {
				e = this.getter.call(t, t);
			} catch (e) {
				if (!this.user) {
					throw e;
				}
				P(e, t, "getter for watcher \"" + this.expression + "\"");
			} finally {
				if (this.deep) {
					Me(e);
				}
				N();
				this.cleanupDeps();
			}
			return e;
		};
		xa.prototype.addDep = function (e) {
			var t = e.id;
			if (!this.newDepIds.has(t)) {
				this.newDepIds.add(t);
				this.newDeps.push(e);
				if (!this.depIds.has(t)) {
					e.addSub(this);
				}
			}
		};
		xa.prototype.cleanupDeps = function () {
			var e = this;
			for (var t = this.deps.length; t--;) {
				var n = e.deps[t];
				if (!e.newDepIds.has(n.id)) {
					n.removeSub(e);
				}
			}
			var i = this.depIds;
			this.depIds = this.newDepIds;
			this.newDepIds = i;
			this.newDepIds.clear();
			i = this.deps;
			this.deps = this.newDeps;
			this.newDeps = i;
			this.newDeps.length = 0;
		};
		xa.prototype.update = function () {
			if (this.lazy) {
				this.dirty = true;
			} else if (this.sync) {
				this.run();
			} else {
				$e(this);
			}
		};
		xa.prototype.run = function () {
			if (this.active) {
				var e = this.get();
				if (e !== this.value || r(e) || this.deep) {
					var t = this.value;
					this.value = e;
					if (this.user) {
						try {
							this.cb.call(this.vm, e, t);
						} catch (e) {
							P(e, this.vm, "callback for watcher \"" + this.expression + "\"");
						}
					} else {
						this.cb.call(this.vm, e, t);
					}
				}
			}
		};
		xa.prototype.evaluate = function () {
			this.value = this.get();
			this.dirty = false;
		};
		xa.prototype.depend = function () {
			var e = this;
			for (var t = this.deps.length; t--;) {
				e.deps[t].depend();
			}
		};
		xa.prototype.teardown = function () {
			var e = this;
			if (this.active) {
				if (!this.vm._isBeingDestroyed) {
					h(this.vm._watchers, this);
				}
				for (var t = this.deps.length; t--;) {
					e.deps[t].removeSub(e);
				}
				this.active = false;
			}
		};
		var Ca = new Ko();
		var Sa = {
			enumerable: true,
			configurable: true,
			get: _,
			set: _
		};
		var Aa = {
			lazy: true
		};
		var Ta = {
			init: function (e, t, n, i) {
				if (!e.componentInstance || e.componentInstance._isDestroyed) {
					(e.componentInstance = tt(e, ma, n, i)).$mount(t ? e.elm : undefined, t);
				} else if (e.data.keepAlive) {
					var o = e;
					Ta.prepatch(o, o);
				}
			},
			prepatch: function (e, t) {
				var n = t.componentOptions;
				Se(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
			},
			insert: function (e) {
				var t = e.context;
				var n = e.componentInstance;
				if (!n._isMounted) {
					n._isMounted = true;
					je(n, "mounted");
				}
				if (e.data.keepAlive) {
					if (t._isMounted) {
						De(n);
					} else {
						Te(n, true);
					}
				}
			},
			destroy: function (e) {
				var t = e.componentInstance;
				if (!t._isDestroyed) {
					if (e.data.keepAlive) {
						Pe(t, true);
					} else {
						t.$destroy();
					}
				}
			}
		};
		var Pa = Object.keys(Ta);
		var ja = 1;
		var Ea = 2;
		var Na = 0;
		xt.prototype._init = function (e) {
			var t = this;
			t._uid = Na++;
			t._isVue = true;
			if (e && e._isComponent) {
				yt(t, e);
			} else {
				t.$options = W(wt(t.constructor), e || {}, t);
			}
			t._renderProxy = t;
			t._self = t;
			xe(t);
			ge(t);
			bt(t);
			je(t, "beforeCreate");
			Je(t);
			Le(t);
			Ke(t);
			je(t, "created");
			if (t.$options.el) {
				t.$mount(t.$options.el);
			}
		};
		(function (e) {
			var t = {
				get: function () {
					return this._data;
				}
			};
			var n = {
				get: function () {
					return this._props;
				}
			};
			Object.defineProperty(e.prototype, "$data", t);
			Object.defineProperty(e.prototype, "$props", n);
			e.prototype.$set = M;
			e.prototype.$delete = z;
			e.prototype.$watch = function (e, t, n) {
				var i = this;
				if (l(t)) {
					return Ye(i, e, t, n);
				}
				(n = n || {}).user = true;
				var o = new xa(i, e, t, n);
				if (n.immediate) {
					t.call(i, o.value);
				}
				return function () {
					o.teardown();
				};
			};
		})(xt);
		(function (e) {
			var t = /^hook:/;
			e.prototype.$on = function (e, n) {
				var i = this;
				var o = this;
				if (Array.isArray(e)) {
					for (var a = 0, s = e.length; a < s; a++) {
						i.$on(e[a], n);
					}
				} else {
					(o._events[e] ||= []).push(n);
					if (t.test(e)) {
						o._hasHookEvent = true;
					}
				}
				return o;
			};
			e.prototype.$once = function (e, t) {
				function n() {
					i.$off(e, n);
					t.apply(i, arguments);
				}
				var i = this;
				n.fn = t;
				i.$on(e, n);
				return i;
			};
			e.prototype.$off = function (e, t) {
				var n = this;
				var i = this;
				if (!arguments.length) {
					i._events = Object.create(null);
					return i;
				}
				if (Array.isArray(e)) {
					for (var o = 0, a = e.length; o < a; o++) {
						n.$off(e[o], t);
					}
					return i;
				}
				var s = i._events[e];
				if (!s) {
					return i;
				}
				if (arguments.length === 1) {
					i._events[e] = null;
					return i;
				}
				if (t) {
					var r;
					for (var l = s.length; l--;) {
						if ((r = s[l]) === t || r.fn === t) {
							s.splice(l, 1);
							break;
						}
					}
				}
				return i;
			};
			e.prototype.$emit = function (e) {
				var t = this;
				var n = t._events[e];
				if (n) {
					n = n.length > 1 ? b(n) : n;
					var i = b(arguments, 1);
					for (var o = 0, a = n.length; o < a; o++) {
						try {
							n[o].apply(t, i);
						} catch (n) {
							P(n, t, "event handler for \"" + e + "\"");
						}
					}
				}
				return t;
			};
		})(xt);
		(function (e) {
			e.prototype._update = function (e, t) {
				var n = this;
				if (n._isMounted) {
					je(n, "beforeUpdate");
				}
				var i = n.$el;
				var o = n._vnode;
				var a = ma;
				ma = n;
				n._vnode = e;
				if (o) {
					n.$el = n.__patch__(o, e);
				} else {
					n.$el = n.__patch__(n.$el, e, t, false, n.$options._parentElm, n.$options._refElm);
					n.$options._parentElm = n.$options._refElm = null;
				}
				ma = a;
				if (i) {
					i.__vue__ = null;
				}
				if (n.$el) {
					n.$el.__vue__ = n;
				}
				if (n.$vnode && n.$parent && n.$vnode === n.$parent._vnode) {
					n.$parent.$el = n.$el;
				}
			};
			e.prototype.$forceUpdate = function () {
				var e = this;
				if (e._watcher) {
					e._watcher.update();
				}
			};
			e.prototype.$destroy = function () {
				var e = this;
				if (!e._isBeingDestroyed) {
					je(e, "beforeDestroy");
					e._isBeingDestroyed = true;
					var t = e.$parent;
					if (!!t && !t._isBeingDestroyed && !e.$options.abstract) {
						h(t.$children, e);
					}
					if (e._watcher) {
						e._watcher.teardown();
					}
					for (var n = e._watchers.length; n--;) {
						e._watchers[n].teardown();
					}
					if (e._data.__ob__) {
						e._data.__ob__.vmCount--;
					}
					e._isDestroyed = true;
					e.__patch__(e._vnode, null);
					je(e, "destroyed");
					e.$off();
					if (e.$el) {
						e.$el.__vue__ = null;
					}
				}
			};
		})(xt);
		(function (e) {
			e.prototype.$nextTick = function (e) {
				return Qo(e, this);
			};
			e.prototype._render = function () {
				var e = this;
				var t = e.$options;
				var n = t.render;
				var i = t.staticRenderFns;
				var o = t._parentVnode;
				if (e._isMounted) {
					for (var a in e.$slots) {
						var s = e.$slots[a];
						if (s._rendered) {
							e.$slots[a] = ee(s, true);
						}
					}
				}
				e.$scopedSlots = o && o.data.scopedSlots || Do;
				if (i && !e._staticTrees) {
					e._staticTrees = [];
				}
				e.$vnode = o;
				var r;
				try {
					r = n.call(e._renderProxy, e.$createElement);
				} catch (t) {
					P(t, e, "render function");
					r = e._vnode;
				}
				if (!(r instanceof ua)) {
					r = fa();
				}
				r.parent = o;
				return r;
			};
			e.prototype._o = ht;
			e.prototype._n = p;
			e.prototype._s = d;
			e.prototype._l = lt;
			e.prototype._t = ct;
			e.prototype._q = k;
			e.prototype._i = x;
			e.prototype._m = ft;
			e.prototype._f = ut;
			e.prototype._k = dt;
			e.prototype._b = pt;
			e.prototype._v = Z;
			e.prototype._e = fa;
			e.prototype._u = ke;
			e.prototype._g = vt;
		})(xt);
		var Oa = [String, RegExp, Array];
		var Da = {
			KeepAlive: {
				name: "keep-alive",
				abstract: true,
				props: {
					include: Oa,
					exclude: Oa
				},
				created: function () {
					this.cache = Object.create(null);
				},
				destroyed: function () {
					var e = this;
					for (var t in e.cache) {
						Dt(e.cache[t]);
					}
				},
				watch: {
					include: function (e) {
						Ot(this.cache, this._vnode, function (t) {
							return Nt(e, t);
						});
					},
					exclude: function (e) {
						Ot(this.cache, this._vnode, function (t) {
							return !Nt(e, t);
						});
					}
				},
				render: function () {
					var e = me(this.$slots.default);
					var t = e && e.componentOptions;
					if (t) {
						var n = Et(t);
						if (n && (this.include && !Nt(this.include, n) || this.exclude && Nt(this.exclude, n))) {
							return e;
						}
						var i = e.key == null ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
						if (this.cache[i]) {
							e.componentInstance = this.cache[i].componentInstance;
						} else {
							this.cache[i] = e;
						}
						e.data.keepAlive = true;
					}
					return e;
				}
			}
		};
		(function (e) {
			var t = {
				get: function () {
					return Oo;
				}
			};
			Object.defineProperty(e, "config", t);
			e.util = {
				warn: $o,
				extend: y,
				mergeOptions: W,
				defineReactive: $
			};
			e.set = M;
			e.delete = z;
			e.nextTick = Qo;
			e.options = Object.create(null);
			Eo.forEach(function (t) {
				e.options[t + "s"] = Object.create(null);
			});
			e.options._base = e;
			y(e.options.components, Da);
			Ct(e);
			St(e);
			At(e);
			jt(e);
		})(xt);
		Object.defineProperty(xt.prototype, "$isServer", {
			get: Jo
		});
		Object.defineProperty(xt.prototype, "$ssrContext", {
			get: function () {
				return this.$vnode && this.$vnode.ssrContext;
			}
		});
		xt.version = "2.4.4";
		var Ia;
		var $a;
		var Ma;
		var za;
		var Fa;
		var La;
		var Ra;
		var Ha;
		var Ba;
		var qa = f("style,class");
		var Va = f("input,textarea,option,select,progress");
		function Ua(e, t, n) {
			return n === "value" && Va(e) && t !== "button" || n === "selected" && e === "option" || n === "checked" && e === "input" || n === "muted" && e === "video";
		}
		var Wa = f("contenteditable,draggable,spellcheck");
		var Ga = f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible");
		var Ya = "http://www.w3.org/1999/xlink";
		function Ka(e) {
			return e.charAt(5) === ":" && e.slice(0, 5) === "xlink";
		}
		function Ja(e) {
			if (Ka(e)) {
				return e.slice(6, e.length);
			} else {
				return "";
			}
		}
		function Xa(e) {
			return e == null || e === false;
		}
		var Za = {
			svg: "http://www.w3.org/2000/svg",
			math: "http://www.w3.org/1998/Math/MathML"
		};
		var Qa = f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
		var es = f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
		function ts(e) {
			return Qa(e) || es(e);
		}
		var ns = Object.create(null);
		var is = f("text,number,password,search,email,tel,url");
		var os = Object.freeze({
			createElement: function (e, t) {
				var n = document.createElement(e);
				if (e !== "select") {
					return n;
				} else {
					if (t.data && t.data.attrs && t.data.attrs.multiple !== undefined) {
						n.setAttribute("multiple", "multiple");
					}
					return n;
				}
			},
			createElementNS: function (e, t) {
				return document.createElementNS(Za[e], t);
			},
			createTextNode: function (e) {
				return document.createTextNode(e);
			},
			createComment: function (e) {
				return document.createComment(e);
			},
			insertBefore: function (e, t, n) {
				e.insertBefore(t, n);
			},
			removeChild: function (e, t) {
				e.removeChild(t);
			},
			appendChild: function (e, t) {
				e.appendChild(t);
			},
			parentNode: function (e) {
				return e.parentNode;
			},
			nextSibling: function (e) {
				return e.nextSibling;
			},
			tagName: function (e) {
				return e.tagName;
			},
			setTextContent: function (e, t) {
				e.textContent = t;
			},
			setAttribute: function (e, t, n) {
				e.setAttribute(t, n);
			}
		});
		var as = {
			create: function (e, t) {
				qt(t);
			},
			update: function (e, t) {
				if (e.data.ref !== t.data.ref) {
					qt(e, true);
					qt(t);
				}
			},
			destroy: function (e) {
				qt(e, true);
			}
		};
		var ss = new ua("", {}, []);
		var rs = ["create", "activate", "update", "remove", "destroy"];
		var ls = {
			create: Gt,
			update: Gt,
			destroy: function (e) {
				Gt(e, ss);
			}
		};
		var cs = Object.create(null);
		var us = [as, ls];
		var ds = {
			create: Zt,
			update: Zt
		};
		var ps = {
			create: en,
			update: en
		};
		var fs = /[\w).+\-_$\]]/;
		var hs = "__r";
		var ms = "__c";
		var gs = {
			create: Tn,
			update: Tn
		};
		var vs = {
			create: Pn,
			update: Pn
		};
		var bs = g(function (e) {
			var t = {};
			var n = /;(?![^(]*\))/g;
			var i = /:(.+)/;
			e.split(n).forEach(function (e) {
				if (e) {
					var n = e.split(i);
					if (n.length > 1) {
						t[n[0].trim()] = n[1].trim();
					}
				}
			});
			return t;
		});
		var ys = /^--/;
		var ws = /\s*!important$/;
		function _s(e, t, n) {
			if (ys.test(t)) {
				e.style.setProperty(t, n);
			} else if (ws.test(n)) {
				e.style.setProperty(t, n.replace(ws, ""), "important");
			} else {
				var i = xs(t);
				if (Array.isArray(n)) {
					for (var o = 0, a = n.length; o < a; o++) {
						e.style[i] = n[o];
					}
				} else {
					e.style[i] = n;
				}
			}
		}
		var ks = ["Webkit", "Moz", "ms"];
		var xs = g(function (e) {
			Ba = Ba || document.createElement("div").style;
			if ((e = xo(e)) !== "filter" && e in Ba) {
				return e;
			}
			var t = e.charAt(0).toUpperCase() + e.slice(1);
			for (var n = 0; n < ks.length; n++) {
				var i = ks[n] + t;
				if (i in Ba) {
					return i;
				}
			}
		});
		var Cs = {
			create: $n,
			update: $n
		};
		var Ss = g(function (e) {
			return {
				enterClass: e + "-enter",
				enterToClass: e + "-enter-to",
				enterActiveClass: e + "-enter-active",
				leaveClass: e + "-leave",
				leaveToClass: e + "-leave-to",
				leaveActiveClass: e + "-leave-active"
			};
		});
		var As = zo && !Ro;
		var Ts = "transition";
		var Ps = "animation";
		var js = "transition";
		var Es = "transitionend";
		var Ns = "animation";
		var Os = "animationend";
		if (As) {
			if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
				js = "WebkitTransition";
				Es = "webkitTransitionEnd";
			}
			if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
				Ns = "WebkitAnimation";
				Os = "webkitAnimationEnd";
			}
		}
		var Ds = zo && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
		var Is = /\b(transform|all)(,|$)/;
		var $s = function (e) {
			function t(e) {
				return new ua(N.tagName(e).toLowerCase(), {}, [], undefined, e);
			}
			function a(e, t) {
				function n() {
					if (--n.listeners == 0) {
						r(e);
					}
				}
				n.listeners = t;
				return n;
			}
			function r(e) {
				var t = N.parentNode(e);
				if (i(t)) {
					N.removeChild(t, e);
				}
			}
			function l(e, t, n, a, s) {
				e.isRootInsert = !s;
				if (!c(e, t, n, a)) {
					var r = e.data;
					var l = e.children;
					var u = e.tag;
					if (i(u)) {
						e.elm = e.ns ? N.createElementNS(e.ns, u) : N.createElement(u, e);
						v(e);
						h(e, l, t);
						if (i(r)) {
							g(e, t);
						}
						p(n, e.elm, a);
					} else if (o(e.isComment)) {
						e.elm = N.createComment(e.text);
						p(n, e.elm, a);
					} else {
						e.elm = N.createTextNode(e.text);
						p(n, e.elm, a);
					}
				}
			}
			function c(e, t, n, a) {
				var s = e.data;
				if (i(s)) {
					var r = i(e.componentInstance) && s.keepAlive;
					if (i(s = s.hook) && i(s = s.init)) {
						s(e, false, n, a);
					}
					if (i(e.componentInstance)) {
						u(e, t);
						if (o(r)) {
							d(e, t, n, a);
						}
						return true;
					}
				}
			}
			function u(e, t) {
				if (i(e.data.pendingInsert)) {
					t.push.apply(t, e.data.pendingInsert);
					e.data.pendingInsert = null;
				}
				e.elm = e.componentInstance.$el;
				if (m(e)) {
					g(e, t);
					v(e);
				} else {
					qt(e);
					t.push(e);
				}
			}
			function d(e, t, n, o) {
				var a;
				for (var s = e; s.componentInstance;) {
					s = s.componentInstance._vnode;
					if (i(a = s.data) && i(a = a.transition)) {
						for (a = 0; a < j.activate.length; ++a) {
							j.activate[a](ss, s);
						}
						t.push(s);
						break;
					}
				}
				p(n, e.elm, o);
			}
			function p(e, t, n) {
				if (i(e)) {
					if (i(n)) {
						if (n.parentNode === e) {
							N.insertBefore(e, t, n);
						}
					} else {
						N.appendChild(e, t);
					}
				}
			}
			function h(e, t, n) {
				if (Array.isArray(t)) {
					for (var i = 0; i < t.length; ++i) {
						l(t[i], n, e.elm, null, true);
					}
				} else if (s(e.text)) {
					N.appendChild(e.elm, N.createTextNode(e.text));
				}
			}
			function m(e) {
				while (e.componentInstance) {
					e = e.componentInstance._vnode;
				}
				return i(e.tag);
			}
			function g(e, t) {
				for (var n = 0; n < j.create.length; ++n) {
					j.create[n](ss, e);
				}
				if (i(T = e.data.hook)) {
					if (i(T.create)) {
						T.create(ss, e);
					}
					if (i(T.insert)) {
						t.push(e);
					}
				}
			}
			function v(e) {
				var t;
				for (var n = e; n;) {
					if (i(t = n.context) && i(t = t.$options._scopeId)) {
						N.setAttribute(e.elm, t, "");
					}
					n = n.parent;
				}
				if (i(t = ma) && t !== e.context && i(t = t.$options._scopeId)) {
					N.setAttribute(e.elm, t, "");
				}
			}
			function b(e, t, n, i, o, a) {
				for (; i <= o; ++i) {
					l(n[i], a, e, t);
				}
			}
			function y(e) {
				var t;
				var n;
				var o = e.data;
				if (i(o)) {
					if (i(t = o.hook) && i(t = t.destroy)) {
						t(e);
					}
					t = 0;
					for (; t < j.destroy.length; ++t) {
						j.destroy[t](e);
					}
				}
				if (i(t = e.children)) {
					for (n = 0; n < e.children.length; ++n) {
						y(e.children[n]);
					}
				}
			}
			function w(e, t, n, o) {
				for (; n <= o; ++n) {
					var a = t[n];
					if (i(a)) {
						if (i(a.tag)) {
							_(a);
							y(a);
						} else {
							r(a.elm);
						}
					}
				}
			}
			function _(e, t) {
				if (i(t) || i(e.data)) {
					var n;
					var o = j.remove.length + 1;
					if (i(t)) {
						t.listeners += o;
					} else {
						t = a(e.elm, o);
					}
					if (i(n = e.componentInstance) && i(n = n._vnode) && i(n.data)) {
						_(n, t);
					}
					n = 0;
					for (; n < j.remove.length; ++n) {
						j.remove[n](e, t);
					}
					if (i(n = e.data.hook) && i(n = n.remove)) {
						n(e, t);
					} else {
						t();
					}
				} else {
					r(e.elm);
				}
			}
			function k(e, t, o, a, s) {
				var r;
				for (var c, u, d, p = 0, f = 0, h = t.length - 1, m = t[0], g = t[h], v = o.length - 1, y = o[0], _ = o[v], k = !s; p <= h && f <= v;) {
					if (n(m)) {
						m = t[++p];
					} else if (n(g)) {
						g = t[--h];
					} else if (Vt(m, y)) {
						C(m, y, a);
						m = t[++p];
						y = o[++f];
					} else if (Vt(g, _)) {
						C(g, _, a);
						g = t[--h];
						_ = o[--v];
					} else if (Vt(m, _)) {
						C(m, _, a);
						if (k) {
							N.insertBefore(e, m.elm, N.nextSibling(g.elm));
						}
						m = t[++p];
						_ = o[--v];
					} else if (Vt(g, y)) {
						C(g, y, a);
						if (k) {
							N.insertBefore(e, g.elm, m.elm);
						}
						g = t[--h];
						y = o[++f];
					} else {
						if (n(r)) {
							r = Wt(t, p, h);
						}
						c = i(y.key) ? r[y.key] : x(y, t, p, h);
						if (n(c)) {
							l(y, a, e, m.elm);
						} else {
							u = t[c];
							if (Vt(u, y)) {
								C(u, y, a);
								t[c] = undefined;
								if (k) {
									N.insertBefore(e, u.elm, m.elm);
								}
							} else {
								l(y, a, e, m.elm);
							}
						}
						y = o[++f];
					}
				}
				if (p > h) {
					d = n(o[v + 1]) ? null : o[v + 1].elm;
					b(e, d, o, f, v, a);
				} else if (f > v) {
					w(e, t, p, h);
				}
			}
			function x(e, t, n, o) {
				for (var a = n; a < o; a++) {
					var s = t[a];
					if (i(s) && Vt(e, s)) {
						return a;
					}
				}
			}
			function C(e, t, a, s) {
				if (e !== t) {
					var r = t.elm = e.elm;
					if (o(e.isAsyncPlaceholder)) {
						if (i(t.asyncFactory.resolved)) {
							A(e.elm, t, a);
						} else {
							t.isAsyncPlaceholder = true;
						}
						return;
					}
					if (o(t.isStatic) && o(e.isStatic) && t.key === e.key && (o(t.isCloned) || o(t.isOnce))) {
						t.componentInstance = e.componentInstance;
						return;
					}
					var l;
					var c = t.data;
					if (i(c) && i(l = c.hook) && i(l = l.prepatch)) {
						l(e, t);
					}
					var u = e.children;
					var d = t.children;
					if (i(c) && m(t)) {
						for (l = 0; l < j.update.length; ++l) {
							j.update[l](e, t);
						}
						if (i(l = c.hook) && i(l = l.update)) {
							l(e, t);
						}
					}
					if (n(t.text)) {
						if (i(u) && i(d)) {
							if (u !== d) {
								k(r, u, d, a, s);
							}
						} else if (i(d)) {
							if (i(e.text)) {
								N.setTextContent(r, "");
							}
							b(r, null, d, 0, d.length - 1, a);
						} else if (i(u)) {
							w(r, u, 0, u.length - 1);
						} else if (i(e.text)) {
							N.setTextContent(r, "");
						}
					} else if (e.text !== t.text) {
						N.setTextContent(r, t.text);
					}
					if (i(c) && i(l = c.hook) && i(l = l.postpatch)) {
						l(e, t);
					}
				}
			}
			function S(e, t, n) {
				if (o(n) && i(e.parent)) {
					e.parent.data.pendingInsert = t;
				} else {
					for (var a = 0; a < t.length; ++a) {
						t[a].data.hook.insert(t[a]);
					}
				}
			}
			function A(e, t, n) {
				if (o(t.isComment) && i(t.asyncFactory)) {
					t.elm = e;
					t.isAsyncPlaceholder = true;
					return true;
				}
				t.elm = e;
				var a = t.tag;
				var s = t.data;
				var r = t.children;
				if (i(s) && (i(T = s.hook) && i(T = T.init) && T(t, true), i(T = t.componentInstance))) {
					u(t, n);
					return true;
				}
				if (i(a)) {
					if (i(r)) {
						if (e.hasChildNodes()) {
							if (i(T = s) && i(T = T.domProps) && i(T = T.innerHTML)) {
								if (T !== e.innerHTML) {
									return false;
								}
							} else {
								var l = true;
								var c = e.firstChild;
								for (var d = 0; d < r.length; d++) {
									if (!c || !A(c, r[d], n)) {
										l = false;
										break;
									}
									c = c.nextSibling;
								}
								if (!l || c) {
									return false;
								}
							}
						} else {
							h(t, r, n);
						}
					}
					if (i(s)) {
						for (var p in s) {
							if (!O(p)) {
								g(t, n);
								break;
							}
						}
					}
				} else if (e.data !== t.text) {
					e.data = t.text;
				}
				return true;
			}
			var T;
			var P;
			var j = {};
			var E = e.modules;
			var N = e.nodeOps;
			for (T = 0; T < rs.length; ++T) {
				j[rs[T]] = [];
				P = 0;
				for (; P < E.length; ++P) {
					if (i(E[P][rs[T]])) {
						j[rs[T]].push(E[P][rs[T]]);
					}
				}
			}
			var O = f("attrs,style,class,staticClass,staticStyle,key");
			return function (e, a, s, r, c, u) {
				if (!n(a)) {
					var d = false;
					var p = [];
					if (n(e)) {
						d = true;
						l(a, p, c, u);
					} else {
						var f = i(e.nodeType);
						if (!f && Vt(e, a)) {
							C(e, a, p, r);
						} else {
							if (f) {
								if (e.nodeType === 1 && e.hasAttribute(jo)) {
									e.removeAttribute(jo);
									s = true;
								}
								if (o(s) && A(e, a, p)) {
									S(a, p, true);
									return e;
								}
								e = t(e);
							}
							var h = e.elm;
							var g = N.parentNode(h);
							l(a, p, h._leaveCb ? null : g, N.nextSibling(h));
							if (i(a.parent)) {
								for (var v = a.parent, b = m(a); v;) {
									for (var _ = 0; _ < j.destroy.length; ++_) {
										j.destroy[_](v);
									}
									v.elm = a.elm;
									if (b) {
										for (var k = 0; k < j.create.length; ++k) {
											j.create[k](ss, v);
										}
										var x = v.data.hook.insert;
										if (x.merged) {
											for (var T = 1; T < x.fns.length; T++) {
												x.fns[T]();
											}
										}
									}
									v = v.parent;
								}
							}
							if (i(g)) {
								w(g, [e], 0, 0);
							} else if (i(e.tag)) {
								y(e);
							}
						}
					}
					S(a, p, d);
					return a.elm;
				}
				if (i(e)) {
					y(e);
				}
			};
		}({
			nodeOps: os,
			modules: [ds, ps, gs, vs, Cs, zo ? {
				create: Jn,
				activate: Jn,
				remove: function (e, t) {
					if (e.data.show !== true) {
						Gn(e, t);
					} else {
						t();
					}
				}
			} : {}].concat(us)
		});
		if (Ro) {
			document.addEventListener("selectionchange", function () {
				var e = document.activeElement;
				if (e && e.vmodel) {
					ii(e, "input");
				}
			});
		}
		var Ms = {
			model: {
				inserted: function (e, t, n) {
					if (n.tag === "select") {
						Xn(e, t, n.context);
						e._vOptions = [].map.call(e.options, ei);
					} else if (n.tag === "textarea" || is(e.type)) {
						e._vModifiers = t.modifiers;
						if (!t.modifiers.lazy) {
							e.addEventListener("change", ni);
							if (!Bo) {
								e.addEventListener("compositionstart", ti);
								e.addEventListener("compositionend", ni);
							}
							if (Ro) {
								e.vmodel = true;
							}
						}
					}
				},
				componentUpdated: function (e, t, n) {
					if (n.tag === "select") {
						Xn(e, t, n.context);
						var i = e._vOptions;
						var o = e._vOptions = [].map.call(e.options, ei);
						if (o.some(function (e, t) {
							return !k(e, i[t]);
						}) && (e.multiple ? t.value.some(function (e) {
							return Qn(e, o);
						}) : t.value !== t.oldValue && Qn(t.value, o))) {
							ii(e, "change");
						}
					}
				}
			},
			show: {
				bind: function (e, t, n) {
					var i = t.value;
					var o = (n = oi(n)).data && n.data.transition;
					var a = e.__vOriginalDisplay = e.style.display === "none" ? "" : e.style.display;
					if (i && o) {
						n.data.show = true;
						Wn(n, function () {
							e.style.display = a;
						});
					} else {
						e.style.display = i ? a : "none";
					}
				},
				update: function (e, t, n) {
					var i = t.value;
					if (i !== t.oldValue) {
						if ((n = oi(n)).data && n.data.transition) {
							n.data.show = true;
							if (i) {
								Wn(n, function () {
									e.style.display = e.__vOriginalDisplay;
								});
							} else {
								Gn(n, function () {
									e.style.display = "none";
								});
							}
						} else {
							e.style.display = i ? e.__vOriginalDisplay : "none";
						}
					}
				},
				unbind: function (e, t, n, i, o) {
					if (!o) {
						e.style.display = e.__vOriginalDisplay;
					}
				}
			}
		};
		var zs = {
			name: String,
			appear: Boolean,
			css: Boolean,
			mode: String,
			type: String,
			enterClass: String,
			leaveClass: String,
			enterToClass: String,
			leaveToClass: String,
			enterActiveClass: String,
			leaveActiveClass: String,
			appearClass: String,
			appearActiveClass: String,
			appearToClass: String,
			duration: [Number, String, Object]
		};
		var Fs = {
			name: "transition",
			props: zs,
			abstract: true,
			render: function (e) {
				var t = this;
				var n = this.$options._renderChildren;
				if (n && (n = n.filter(function (e) {
					return e.tag || he(e);
				})).length) {
					var i = this.mode;
					var o = n[0];
					if (li(this.$vnode)) {
						return o;
					}
					var a = ai(o);
					if (!a) {
						return o;
					}
					if (this._leaving) {
						return ri(e, o);
					}
					var r = "__transition-" + this._uid + "-";
					a.key = a.key == null ? a.isComment ? r + "comment" : r + a.tag : s(a.key) ? String(a.key).indexOf(r) === 0 ? a.key : r + a.key : a.key;
					var l = (a.data ||= {}).transition = si(this);
					var c = this._vnode;
					var u = ai(c);
					if (a.data.directives && a.data.directives.some(function (e) {
						return e.name === "show";
					})) {
						a.data.show = true;
					}
					if (u && u.data && !ci(a, u) && !he(u)) {
						var d = u && (u.data.transition = y({}, l));
						if (i === "out-in") {
							this._leaving = true;
							oe(d, "afterLeave", function () {
								t._leaving = false;
								t.$forceUpdate();
							});
							return ri(e, o);
						}
						if (i === "in-out") {
							if (he(a)) {
								return c;
							}
							var p;
							function f() {
								p();
							}
							oe(l, "afterEnter", f);
							oe(l, "enterCancelled", f);
							oe(d, "delayLeave", function (e) {
								p = e;
							});
						}
					}
					return o;
				}
			}
		};
		var Ls = y({
			tag: String,
			moveClass: String
		}, zs);
		delete Ls.mode;
		var Rs = {
			Transition: Fs,
			TransitionGroup: {
				props: Ls,
				render: function (e) {
					var t = this.tag || this.$vnode.data.tag || "span";
					var n = Object.create(null);
					var i = this.prevChildren = this.children;
					for (var o = this.$slots.default || [], a = this.children = [], s = si(this), r = 0; r < o.length; r++) {
						var l = o[r];
						if (l.tag && l.key != null && String(l.key).indexOf("__vlist") !== 0) {
							a.push(l);
							n[l.key] = l;
							(l.data ||= {}).transition = s;
						}
					}
					if (i) {
						var c = [];
						var u = [];
						for (var d = 0; d < i.length; d++) {
							var p = i[d];
							p.data.transition = s;
							p.data.pos = p.elm.getBoundingClientRect();
							if (n[p.key]) {
								c.push(p);
							} else {
								u.push(p);
							}
						}
						this.kept = e(t, null, c);
						this.removed = u;
					}
					return e(t, null, a);
				},
				beforeUpdate: function () {
					this.__patch__(this._vnode, this.kept, false, true);
					this._vnode = this.kept;
				},
				updated: function () {
					var e = this.prevChildren;
					var t = this.moveClass || (this.name || "v") + "-move";
					if (e.length && this.hasMove(e[0].elm, t)) {
						e.forEach(ui);
						e.forEach(di);
						e.forEach(pi);
						document.body.offsetHeight;
						e.forEach(function (e) {
							if (e.data.moved) {
								var n = e.elm;
								var i = n.style;
								Rn(n, t);
								i.transform = i.WebkitTransform = i.transitionDuration = "";
								n.addEventListener(Es, n._moveCb = function e(i) {
									if (!i || !!/transform$/.test(i.propertyName)) {
										n.removeEventListener(Es, e);
										n._moveCb = null;
										Hn(n, t);
									}
								});
							}
						});
					}
				},
				methods: {
					hasMove: function (e, t) {
						if (!As) {
							return false;
						}
						if (this._hasMove) {
							return this._hasMove;
						}
						var n = e.cloneNode();
						if (e._transitionClasses) {
							e._transitionClasses.forEach(function (e) {
								zn(n, e);
							});
						}
						Mn(n, t);
						n.style.display = "none";
						this.$el.appendChild(n);
						var i = qn(n);
						this.$el.removeChild(n);
						return this._hasMove = i.hasTransform;
					}
				}
			}
		};
		xt.config.mustUseProp = Ua;
		xt.config.isReservedTag = ts;
		xt.config.isReservedAttr = qa;
		xt.config.getTagNamespace = Ht;
		xt.config.isUnknownElement = function (e) {
			if (!zo) {
				return true;
			}
			if (ts(e)) {
				return false;
			}
			e = e.toLowerCase();
			if (ns[e] != null) {
				return ns[e];
			}
			var t = document.createElement(e);
			if (e.indexOf("-") > -1) {
				return ns[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement;
			} else {
				return ns[e] = /HTMLUnknownElement/.test(t.toString());
			}
		};
		y(xt.options.directives, Ms);
		y(xt.options.components, Rs);
		xt.prototype.__patch__ = zo ? $s : _;
		xt.prototype.$mount = function (e, t) {
			e = e && zo ? Bt(e) : undefined;
			return Ce(this, e, t);
		};
		setTimeout(function () {
			if (Oo.devtools && Xo) {
				Xo.emit("init", xt);
			}
		}, 0);
		var Hs;
		var Bs = !!zo && function (e, t) {
			var n = document.createElement("div");
			n.innerHTML = "<div a=\"\n\"/>";
			return n.innerHTML.indexOf("&#10;") > 0;
		}();
		var qs = /\{\{((?:.|\n)+?)\}\}/g;
		var Vs = /[-.*+?^${}()|[\]\/\\]/g;
		var Us = g(function (e) {
			var t = e[0].replace(Vs, "\\$&");
			var n = e[1].replace(Vs, "\\$&");
			return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
		});
		var Ws = [{
			staticKeys: ["staticClass"],
			transformNode: function (e, t) {
				t.warn;
				var n = dn(e, "class");
				if (n) {
					e.staticClass = JSON.stringify(n);
				}
				var i = un(e, "class", false);
				if (i) {
					e.classBinding = i;
				}
			},
			genData: function (e) {
				var t = "";
				if (e.staticClass) {
					t += "staticClass:" + e.staticClass + ",";
				}
				if (e.classBinding) {
					t += "class:" + e.classBinding + ",";
				}
				return t;
			}
		}, {
			staticKeys: ["staticStyle"],
			transformNode: function (e, t) {
				t.warn;
				var n = dn(e, "style");
				if (n) {
					e.staticStyle = JSON.stringify(bs(n));
				}
				var i = un(e, "style", false);
				if (i) {
					e.styleBinding = i;
				}
			},
			genData: function (e) {
				var t = "";
				if (e.staticStyle) {
					t += "staticStyle:" + e.staticStyle + ",";
				}
				if (e.styleBinding) {
					t += "style:(" + e.styleBinding + "),";
				}
				return t;
			}
		}];
		var Gs = {
			model: function (e, t, n) {
				Ra = n;
				var i = t.value;
				var o = t.modifiers;
				var a = e.tag;
				var s = e.attrsMap.type;
				if (e.component) {
					pn(e, i, o);
					return false;
				}
				if (a === "select") {
					kn(e, i, o);
				} else if (a === "input" && s === "checkbox") {
					wn(e, i, o);
				} else if (a === "input" && s === "radio") {
					_n(e, i, o);
				} else if (a === "input" || a === "textarea") {
					xn(e, i, o);
				} else if (!Oo.isReservedTag(a)) {
					pn(e, i, o);
					return false;
				}
				return true;
			},
			text: function (e, t) {
				if (t.value) {
					sn(e, "textContent", "_s(" + t.value + ")");
				}
			},
			html: function (e, t) {
				if (t.value) {
					sn(e, "innerHTML", "_s(" + t.value + ")");
				}
			}
		};
		var Ys = f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr");
		var Ks = f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
		var Js = f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track");
		var Xs = {
			expectHTML: true,
			modules: Ws,
			directives: Gs,
			isPreTag: function (e) {
				return e === "pre";
			},
			isUnaryTag: Ys,
			mustUseProp: Ua,
			canBeLeftOpenTag: Ks,
			isReservedTag: ts,
			getTagNamespace: Ht,
			staticKeys: Ws.reduce(function (e, t) {
				return e.concat(t.staticKeys || []);
			}, []).join(",")
		};
		var Zs = {
			decode: function (e) {
				Hs = Hs || document.createElement("div");
				Hs.innerHTML = e;
				return Hs.textContent;
			}
		};
		var Qs = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
		var er = "[a-zA-Z_][\\w\\-\\.]*";
		var tr = "((?:" + er + "\\:)?" + er + ")";
		var nr = new RegExp("^<" + tr);
		var ir = /^\s*(\/?)>/;
		var or = new RegExp("^<\\/" + tr + "[^>]*>");
		var ar = /^<!DOCTYPE [^>]+>/i;
		var sr = /^<!--/;
		var rr = /^<!\[/;
		var lr = false;
		"x".replace(/x(.)?/g, function (e, t) {
			lr = t === "";
		});
		var cr;
		var ur;
		var dr;
		var pr;
		var fr;
		var hr;
		var mr;
		var gr;
		var vr;
		var br;
		var yr = f("script,style,textarea", true);
		var wr = {};
		var _r = {
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&amp;": "&",
			"&#10;": "\n"
		};
		var kr = /&(?:lt|gt|quot|amp);/g;
		var xr = /&(?:lt|gt|quot|amp|#10);/g;
		var Cr = f("pre,textarea", true);
		function Sr(e, t) {
			return e && Cr(e) && t[0] === "\n";
		}
		var Ar = /^@|^v-on:/;
		var Tr = /^v-|^@|^:/;
		var Pr = /(.*?)\s+(?:in|of)\s+(.*)/;
		var jr = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
		var Er = /:(.*)$/;
		var Nr = /^:|^v-bind:/;
		var Or = /\.[^.]+/g;
		var Dr = g(Zs.decode);
		var Ir = /^xmlns:NS\d+/;
		var $r = /^NS\d+:/;
		var Mr = g(function (e) {
			return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""));
		});
		var zr = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
		var Fr = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
		var Lr = {
			esc: 27,
			tab: 9,
			enter: 13,
			space: 32,
			up: 38,
			left: 37,
			right: 39,
			down: 40,
			delete: [8, 46]
		};
		function Rr(e) {
			return "if(" + e + ")return null;";
		}
		var Hr = {
			stop: "$event.stopPropagation();",
			prevent: "$event.preventDefault();",
			self: Rr("$event.target !== $event.currentTarget"),
			ctrl: Rr("!$event.ctrlKey"),
			shift: Rr("!$event.shiftKey"),
			alt: Rr("!$event.altKey"),
			meta: Rr("!$event.metaKey"),
			left: Rr("'button' in $event && $event.button !== 0"),
			middle: Rr("'button' in $event && $event.button !== 1"),
			right: Rr("'button' in $event && $event.button !== 2")
		};
		var Br = {
			on: function (e, t) {
				e.wrapListeners = function (e) {
					return "_g(" + e + "," + t.value + ")";
				};
			},
			bind: function (e, t) {
				e.wrapData = function (n) {
					return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
				};
			},
			cloak: _
		};
		function qr(e) {
			this.options = e;
			this.warn = e.warn || on;
			this.transforms = an(e.modules, "transformCode");
			this.dataGenFns = an(e.modules, "genData");
			this.directives = y(y({}, Br), e.directives);
			var t = e.isReservedTag || To;
			this.maybeComponent = function (e) {
				return !t(e.tag);
			};
			this.onceId = 0;
			this.staticRenderFns = [];
		}
		var Vr = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function (e) {
			return function (t) {
				function n(n, i) {
					var o = Object.create(t);
					var a = [];
					var s = [];
					o.warn = function (e, t) {
						(t ? s : a).push(e);
					};
					if (i) {
						if (i.modules) {
							o.modules = (t.modules || []).concat(i.modules);
						}
						if (i.directives) {
							o.directives = y(Object.create(t.directives), i.directives);
						}
						for (var r in i) {
							if (r !== "modules" && r !== "directives") {
								o[r] = i[r];
							}
						}
					}
					var l = e(n, o);
					l.errors = a;
					l.tips = s;
					return l;
				}
				return {
					compile: n,
					compileToFunctions: go(n)
				};
			};
		}(function (e, t) {
			var n = gi(e.trim(), t);
			Mi(n, t);
			var i = Ui(n, t);
			return {
				ast: n,
				render: i.render,
				staticRenderFns: i.staticRenderFns
			};
		}))(Xs).compileToFunctions;
		var Ur = g(function (e) {
			var t = Bt(e);
			return t && t.innerHTML;
		});
		var Wr = xt.prototype.$mount;
		xt.prototype.$mount = function (e, t) {
			if ((e = e && Bt(e)) === document.body || e === document.documentElement) {
				return this;
			}
			var n = this.$options;
			if (!n.render) {
				var i = n.template;
				if (i) {
					if (typeof i == "string") {
						if (i.charAt(0) === "#") {
							i = Ur(i);
						}
					} else {
						if (!i.nodeType) {
							return this;
						}
						i = i.innerHTML;
					}
				} else if (e) {
					i = vo(e);
				}
				if (i) {
					var o = Vr(i, {
						shouldDecodeNewlines: Bs,
						delimiters: n.delimiters,
						comments: n.comments
					}, this);
					var a = o.render;
					var s = o.staticRenderFns;
					n.render = a;
					n.staticRenderFns = s;
				}
			}
			return Wr.call(this, e, t);
		};
		xt.compile = Vr;
		t.default = xt;
	}).call(t, n(169));
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.CHANGE_OPTION = "CHANGE_OPTION";
	t.CHANGE_OPTION_COLOR = "CHANGE_OPTION_COLOR";
	t.COME_FROM_MOBILE = "COME_FROM_MOBILE";
	t.LOGIN = "LOGIN";
	t.SET_BAN = "SET_BAN";
	t.RECEIVE_SERVERS = "RECEIVE_SERVERS";
	t.CHANGE_SERVER = "CHANGE_SERVER";
	t.CHANGE_SERVER_TYPE = "CHANGE_SERVER_TYPE";
	t.CHANGE_SKINNAME = "CHANGE_SKINNAME";
	t.CHANGE_LOGGED_NAME = "CHANGE_LOGGED_NAME";
	t.CHANGE_HAT = "CHANGE_HAT";
	t.LOAD_RANK = "LOAD_RANK";
	t.GET_COINS = "GET_COINS";
	t.CHANGE_RANK = "CHANGE_RANK";
	t.CHANGE_NICKNAME = "CHANGE_NICKNAME";
	t.SET_BANNED = "SET_BANNED";
	t.SET_ROLE = "SET_ROLE";
	t.SET_COLOR = "SET_COLOR";
	t.SET_EMAIL = "SET_EMAIL";
	t.SET_ID = "SET_ID";
	t.ACTIVE_SKIN = "ACTIVE_SKIN";
	t.CHANGE_THEME = "CHANGE_THEME";
	t.HAT_LIST = "HAT_LIST";
	t.PRIVATE_SKINS = "PRIVATE_SKINS";
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.lang_ba = {
		home: {
			ab: "Agar Balkan",
			home: "Početna",
			skins: "Skinovi",
			skin: "Skin",
			music: "Muzika",
			contact: "Podrška",
			type_name: "Unesite ime",
			login: "Prijava",
			controll_ball: "Kontroliši lopticu uz pomoć miša",
			press: "Pritisni",
			to_split: "da se podijeliš",
			to_eject: "za izbacivanje mase",
			connecting: "Spajanje na server",
			mouse_control: "Klik za masu, split",
			mouse_control_desc: "Lijevim klikom izbacujete masu, desnim se splitate.",
			play: "Igraj",
			spectate: "Nadgledaj",
			hide_chat: "Sakrij chat",
			without_skins: "Prikaži skinove",
			show_table: "Prikaži tabelu?",
			show_current_score: "Prikaži trenutni rezultat",
			smoth_view: "Glatko prikazivanje",
			choose_server: "Odaberite server",
			choose_theme: "Odaberite temu",
			chosen_theme: "Odabrana tema: ",
			theme: "Tema",
			settings: "Opcije",
			enter_to_chat: "Budite ljubazni u chat-u!",
			new_option_click: "Lijevi klik za izbacivanje mase, desni za splitanje",
			eject_mass: "Izbacivanje mase",
			split: "Split",
			double_split: "Double Split",
			quad_split: "Quad Split",
			logout: "Odjava",
			restart: "Restart servera je u 00:00, 06:00, 12:00 i 18:00",
			servers: "Serveri",
			save: "Zapamti",
			game_view: "Pregled igre",
			pointing_arrow: "Strelica za pravac?",
			pointing_arrow_desc: "Refresh je potreban pri promeni opcije.",
			rules: "Pravila",
			auto_respawn_desc: "Kada izgubite, nastavljate dalje bez otvaranja početnog menija.",
			reset_settings: "Resetuj sva podešavanja",
			follow_us_on_fb: "Zapratite stranicu na fb za novosti vezane za AB",
			without_lines: "Prikaži linije?",
			transparent: "Providno?",
			saved_items: "Ovdje možete zadržati nickove, napomene ili bilo šta drugo.",
			hide_hats: "Sakrij kape",
			today: "Danas",
			month: "Ovog mjeseca",
			how_to_play: "Kako se igra?",
			profile: "Profil",
			block: "Blokirati",
			yes: "Da",
			no: "Ne"
		},
		mp: {
			music: "Muzika",
			play: "Pokreni",
			play_playlist: "Pokreni plejlistu",
			turn_off: "Isključi",
			share_and_listen: "Dijelite i slušajte muziku sa ostalim igračima na sajtu",
			add: "Dodaj",
			error: "Došlo je do greške!",
			list_empty: "Lista je trenutno prazna.",
			copy_song_from_yt: "Prekopirajte i dodajte link sa YT da bi ubacili pjesmu.",
			paste_yt: "Nalijepi youtube link",
			lag: "Preporučuje se da ne pokrećete ukoliko imate sporiju internet konekciju",
			song_exist: "Pjesma već postoji na listi."
		},
		contact: {
			report_contact: "Kontaktirajte nas",
			your_email: "Vaš e-mail",
			messsage: "Poruka",
			report: "Pošalji",
			success: "Uspešno ste poslali poruku",
			error: "Došlo je do greške",
			banned: "Banovani ste sa sajta.",
			banned_desc: "Kontaktirajte nas za više informacija putem forme ili facebook stranice"
		},
		login: {
			email: "Unesi e-mail",
			email_username: "Unesi e-mail ili korisničko ime",
			type_password: "Unesi šifru",
			login: "Prijavi se",
			wrong_credentials: "Pogrešno korisničko ime ili lozinka!",
			required: "Ovo polje je obavezno",
			register_head: "Registriraj se",
			register: "Registriraj se",
			email_exist: "Postoji nalog sa unetim mailom.",
			nickname_exist: "Ime je zauzeto. Probajte drugo.",
			email_invalid: "E-mail adresa nije ispravna.",
			min_pass: "Minimalna dužina lozinke je 4 karaktera"
		},
		skins: {
			add_skin: "Dodaj skin",
			not_found: "Nije moguće pronaći skinove.",
			find_skin: "Pronađi skin",
			allowed: "Dozvoljeni format slike:",
			max_size: "Maksimalna veličina:",
			min_size: "Minimalna dužina imena skina je 3, a maksimalna 15 karaktera.",
			skin_name: "Ime skina",
			skin_added: "Vaš skin je uspešno dodat",
			not_allowed_skins: "Zabranjeno je dodavati uvredljive skinove. Svako nepoštovanje drugih igrača dovodi do trajnog bana sa sajta.",
			banned: "Zabranjeno vam je dodavanje skinova.",
			top_skins: "Top skinovi",
			all_skins: "Svi skinovi",
			my_favs: "Moji favoriti"
		},
		rules: {
			head: "Agar Balkan - Pravila igre",
			subhead: "Ova pravila važe za sve servere.",
			subhead2: "Ako mislite da ste nepravedno kažnjeni po nekom od sledećih pravila, možete kontaktirati podršku za igru ​​putem <router-link style=\"color:#fff;text-decoration: underline;\" href=\"/agar.rs/contact\">kontakt forme</router-link> ili <a style=\"color:#fff;text-decoration: underline;\" href=\"#\">facebook stranice</a>.",
			r1h: "1. Sadržaj",
			r1t: "Uvrede i neprimjereno ponašanje prema drugim igračima nije dopušteno.<br />Zabranjeno je postavljanje sadržaja, skinova i linkova pornografskog, rasističkog sadržaja, kao i svih drugih oblika diskriminacije bilo koje vrste.<br />Zabranjeno je oglašavanje, političko ili vjersko mišljenje.",
			r2h: "2. Prijetnje u stvarnom životu",
			r2t: "Zabranjena je bilo kakva prijetnja bilo kojem igraču ili članu tima u stvarnom životu.",
			r3h: "3.  Korištenje grešaka",
			r3t: "Korištenje programske greške ili ne prijavljivanje takve greške strogo je zabranjeno.",
			r4h: "4. Skinovi",
			r41t: "Koristite se zdravim razumom prilikom dodavanja skinova",
			r42t: "Zabranjeni su skinovi koji predstavljaju govor mržnje ili političke uvrede",
			r43t: "Skinovi moraju biti pogodni za sve uzraste",
			r44t: "Nema ponovnih dodavanja skinova",
			r45t: "Zabranjeni su skinovi sa osobama mlađim od 18 godina",
			r46t: "Zabranjeno je reklamiranje preko skinova"
		},
		logged: {
			rank: "Rank",
			results: "Rezultati",
			keyboard_controls: "Podesite kontrole tastature",
			private_skin: "Privatan skin?",
			private_skin_desc: "Samo vi sa vašeg naloga možete videti skin i neće biti prikazan na listi skinova.",
			your_private_skins: "Vaši privatni skinovi",
			no_private_skins: "Nemate privatnih skinova.",
			search_for_others: "Ili pretražite",
			type_nick_desc: "Morate uneti ime za igru.",
			no_name: "Niste uneli ime.",
			save: "Sačuvaj",
			my_statistic: "Moja statistika",
			hat: "Kapa",
			hats: "Kape",
			change_nickname: "Promijeni nadimak",
			nickname_hours: "Nadimak možete promeniti jednom u 48 sati.",
			wrong_login: "Neispravno prijavljivanje, pokušajte da se odjavite i ponovo prijavite. Ako imate problema, kontaktirajte administratore.",
			successfully_changed_nickname: "Nadimak je uspešno promenjen.",
			profile_settings: "Postavke profila"
		},
		new_21_09: {
			badge: "Značka",
			old_chat: "Stari chat",
			login_facebook: "Facebook prijava",
			or: "ili",
			pillory: "Stub srama",
			name: "Ime",
			type: "Tip",
			server: "Server",
			reason: "Razlog",
			date: "Datum",
			expiration: "Isticanje",
			empty_list: " Lista je trenutno prazna",
			top_10: "TOP 10 Liste",
			no_players: "Nema igrača na listi.",
			result_added: "Rezultat se dodaje kada izgubite igru. Restart servera se ne računa.",
			result_count: "Za rezultat se uzima \"Rekord\".",
			search: "Pretraga",
			max_two_skins: "Najviše možete imati dva privatna skina.",
			skin_aprove: "Vaš skin će biti prikazan tek kada administratori odobre.",
			skin_rules: "Pročitajte <a class=\"text-underline\" href=\"/agar.rs/rules\">pravila o skinovima</a> pre dodavanja skina.",
			background_canvas: "Pozadinska animacija",
			additional_info: "Ostale informacije / Izvor slike",
			training: "Trening",
			highscore_update: "Rezultati se ažuriraju na svakih sat vremena!"
		},
		privacy: {
			title: "Politika privatnosti",
			valid: "This privacy statement is valid from 01.10.2017",
			ph1: "Data Collection",
			pt1: "When registering with us, we collect, process and store the personal data you enter, as well as information about the stationary and mobile devices you use during your access. Likewise, your skins, profile information and further uses will be saved, when using the Agar Balkan services.",
			ph2: "Security",
			pt2: "We use technically sophisticated and state-of-the-art measures to protect the security of your data on our servers against unauthorized access. Should you find any kind of abuse of your user account, please send a prompt message to the current contact address.",
			ph3: "Data Protection",
			pt3: "The use of our website is normally possible without giving personal data. If personal data such as name, address or e-mail addresses are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (for example, when communicating via e-mail) can present security gaps.",
			ph4: "Facebook Login",
			pt4: "You can use our service via their Facebook login data. We would like to point out that it can be a risk when logging in from public computers via Facebook. Please make sure to log off correctly in such cases.",
			pt4_delete: "To delete Facebook data, you need to go to Profile in the navigation menu, then to Profile settings. In the middle there is a button Delete Facebook data, which is executed by clicking on the button. The data will be deleted and you will no longer have the possibility to log in again through Facebook, unless you link the account with the game again.",
			ph5: "Cookies",
			pt5: "This site uses cookies. Cookies are small text files that are permanently or temporarily stored in your computer when you visit this website. The purpose of the cookies is in particular the analysis of the use of this website for statistical evaluation as well as for continuous improvements. In your browser, you can disable all or part of cookies in the settings at any time. When cookies are deactivated, you are no longer able to use all the functions of this website.",
			ph6: "Google Analytics",
			pt6: "This website uses Google Analytics, an software for the statistical analysis of visitor accesses. Google Analytics uses so-called \"cookies\", text files which are stored on your computer and which allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is stored on the server by google. The IP address is anonymized immediately after processing and before its storage. You can prevent the installation of cookies by setting your browser software accordingly. However, we would point out that in this case you may not be able to fully utilize all the functions of this website.",
			ph7: "Liability for Content",
			pt7: "The contents of our pages were created with great care. However, we can not guarantee the correctness, completeness and actuality of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws. As a service provider, however, we are not obligated to supervise transmitted or stored third-party information or to investigate circumstances which indicate an illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a concrete infringement. We will immediately remove these contents if we become aware of any such legal violations.",
			ph8: "Liability for Links",
			pt8: "Our offer contains links to external websites of third parties on whose content we have no influence. Therefore, we cannot assume any liability for these third-party content. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. If we become aware of any legal infringements, we will immediately remove such links.",
			ph9: "Questions about the service",
			pt9: "If you have any questions or suggestions or complaints about the services we offer, please use these contact details:",
			pt91: ""
		},
		statistic: {
			best_time_played: "Najduže vreme",
			max_score: "Najbolji rezultat",
			all_plays: "Ukupno partija",
			server: "Server",
			top_10_logged: "Ulogovani igrači",
			all_players: "Svi igrači"
		},
		options: {
			all_settings: "Sve opcije",
			cells_and_controls: "Kugle i kontrole",
			hide_colors: "Sakrij boje",
			show_sectors: "Prikaži sektore",
			sector_color: "Boja sektora",
			map_color: "Boja mape",
			infinity_zoom: "Beskonačan zoom",
			map: "Mapa",
			cell_border: "Okvir oko kugle",
			other: "Ostalo",
			delete_profile: "Obriši nalog",
			delete_facebook: "Obriši Facebook podatke"
		},
		hats: {
			buy: "Kupi",
			days: "dana",
			choose: "Odaberi"
		},
		forgotPassword: {
			question: "Zaboravili ste lozinku?",
			email_not_exist: "Uneti e-mail ne postoji",
			email_sent: "Poruka sa instrukcijama je poslata na Vaš e-mail.",
			change_password: "Promjeni lozinku",
			new_password: "Nova lozinka",
			repeat_password: "Ponovo unesi lozinku",
			reset: "Resetuj",
			wrong_code: "Neispravan link za resetovanje. Pokušajte ponovo sa resetovanjem lozinke.",
			passwords_do_not_match: "Lozinke se ne podudaraju.",
			password_changed: "Lozinka je uspešno promenjena. Možete se ulogovati ponovo."
		},
		contribute: {
			contribute: "Doprinijeti",
			donate: "Donacije",
			donate_desc: "Ako želite da doprinesete razvoju i održavanju igre, možete ostaviti svoju donaciju ovde.",
			select_amount: "Odaberite iznos donacije:",
			translate: "Prevođenje",
			translate_desc: "Pomozite nam da prevedemo agar na Vaš jezik. Pošaljite nam prevode i ispravke putem facebook stranice ili kontakt forme.",
			follow: "Zapratite nas na Fejsbuku",
			adblocker: "Molimo onemogućite AdBlocker i ponovo učitajte stranu",
			adblocker_desc: "Skinovi i druge funkcionalnosti nisu dostupni zbog AdBlocker-a."
		},
		online_safe: {
			title: "Ostanite sigurni online",
			tip1: "Nemoj objavljivati nikakve lične informacije na netu - kao što su adresa, email ili broj mobilnog telefona.",
			tip2: "Razmisli pažljivo prije objavljivanja slika ili video zapisa sebe. Jednom kada postaviš sliku na internet, većina ljudi može da je vidi i preuzme, a onda to više nije samo tvoje.",
			tip3: "Čuvaj svoju privatnost što je više moguće.",
			tip4: "Nikada ne govori svoje lozinke.",
			tip5: "Nemoj se družiti sa ljudima koje ne poznaješ.",
			tip6: "Nemoj se nalaziti sa ljudima koje si upoznao/la online. Kaži svojim roditeljima ili starateljima o ljudima koji ti predlažu da to uradiš.",
			tip7: "Zapamti da nisu svi online onakvi kakvim se predstavljaju.",
			tip8: "Pažljivo razmisli o poruci koju pišeš prije nego što pošalješ.",
			tip9: "Poštuj stavove drugih ljudi, čak i ako se ne slažeš sa nečijim stavovima, ne znači da moraš biti nepristojan.",
			tip10: "Ako nešto na netu / agaru čini da se osećaš neugodno, nebezbedno ili zabrinuto, prijavi adminima ili roditeljima ili napusti sajt ili ugasi računar.",
			title2: "Savjeti ako ste provocirani na internetu",
			react1: "Prijavi adminima ili starijim osobama vrijeđanje.",
			react2: "Ne odgovaraj i ne uzvraćaj pažnju na uvredljive poruke - to bi moglo pogoršati stvari.",
			react3: "Blokiraj igrača koji ti šalje takve poruke.",
			react4: "Napiši datum i vrijeme kada dobijaš uvredljive poruke, kao i detalje koje imaš - server, nick igrača.",
			react5: "Ako te učestalo vrijeđaju, promeni nick / profil i koristi ime koje ne daje nikakve informacije o tebi."
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.lang_gb = {
		home: {
			ab: "Agar Balkan",
			home: "Home",
			skins: "Skins",
			skin: "Skin",
			music: "Music",
			contact: "Support",
			type_name: "Type nickname",
			login: "Login",
			controll_ball: "Control the cell with the mouse",
			press: "Press",
			to_split: "to split",
			to_eject: "to eject some mass",
			connecting: "Connecting to the server",
			mouse_control: "Click to eject, split",
			mouse_control_desc: "Left click to throw the mass, with the right you split.",
			play: "Play",
			spectate: "Spectate",
			hide_chat: "Hide chat",
			without_skins: "Show skins?",
			show_table: "Show leaderboard?",
			show_current_score: "Show the score",
			smoth_view: "Smooth showing",
			choose_server: "Choose server",
			choose_theme: "Choose a theme",
			chosen_theme: "Chosen theme: ",
			theme: "Theme",
			settings: "Settings",
			enter_to_chat: "Please be nice in the chat!",
			new_option_click: "Left click to eject mass, right clik to split",
			eject_mass: "Eject mass",
			split: "Split",
			double_split: "Double Split",
			quad_split: "Quad Split",
			logout: "Logout",
			restart: "Servers restart in 00:00, 06:00, 12:00 i 18:00",
			servers: "Servers",
			save: "Save",
			game_view: "Game view",
			pointing_arrow: "Pointing arrow?",
			pointing_arrow_desc: "Refresh is required when changing this option.",
			rules: "Rules",
			auto_respawn_desc: "When you lose, you continue game without opening the home menu.",
			reset_settings: "Reset all settings",
			follow_us_on_fb: "Follow us on fb",
			without_lines: "Show lines?",
			transparent: "Transparent?",
			saved_items: "Here you can keep your nicknames, notes or anything else.",
			hide_hats: "Hide hats",
			today: "Today",
			month: "This month",
			how_to_play: "How to play?",
			profile: "Profile",
			block: "Block",
			yes: "Yes",
			no: "No"
		},
		mp: {
			music: "Music",
			play: "Play",
			play_playlist: "Start playlist",
			turn_off: "Turn off",
			share_and_listen: "Share and listen songs with other players on the site",
			add: "Add",
			error: "An error has occurred!",
			list_empty: "The list is currently empty.",
			copy_song_from_yt: "Copy and paste link from YT to insert song.",
			paste_yt: "Paste YT link",
			lag: "It is recommended that you do not play music if you have a slower internet connection ",
			song_exist: "Song already exist."
		},
		contact: {
			report_contact: "Contact us",
			your_email: "Your e-mail",
			messsage: "Message",
			report: "Send",
			success: "You have successfully send message",
			error: "Error",
			banned: "You have been banned.",
			banned_desc: " Contact us for more info via contact form bellow or send message on our facebook page."
		},
		login: {
			email: "Type e-mail",
			email_username: "Type e-mail or username",
			type_password: "Type password",
			login: "Login",
			wrong_credentials: "Wrong username or password!",
			required: "This field is required",
			register_head: "Sign Up",
			register: "Create Account",
			email_exist: "Email already exists",
			nickname_exist: "The nickname is taken. Try another one.",
			email_invalid: "Invalid e-mail.",
			min_pass: "Minimum password length is 4 characters"
		},
		skins: {
			add_skin: "Add skin",
			not_found: "Can't find skins right now.",
			find_skin: "Find skin",
			allowed: "Allowed photos format:",
			max_size: "Max size:",
			min_size: "Min length of skin name is 3, and max 15 characters.",
			skin_name: "Skin name",
			skin_added: "Your skin is uploaded",
			not_allowed_skins: "It is forbidden to add offensive skins. Any disregard to other players leads to a permanent ban on the site.",
			banned: "You are forbidden to add skins.",
			top_skins: "TOP skins",
			all_skins: "All skins",
			my_favs: "My favourite"
		},
		rules: {
			head: "Agar Balkan - Rules of game",
			subhead: "These rules apply to all servers.",
			subhead2: "Should you think you were punished unjustly according to one of the following rules please contact the game support <router-link style=\"color:#fff;text-decoration: underline;\" href=\"/agar.rs/contact\">contact form</router-link> or on our <a style=\"color:#fff;text-decoration: underline;\" href=\"#\">facebook page</a>.",
			r1h: "1. Content",
			r1t: "Insults and inappropriate behavior towards other players are not allowed.<br />It is forbidden to post content, skin and links of pornographic, racist content, as well as any other forms of discrimination of any kind.<br />Advertising, political or religious opinions are forbidden.",
			r2h: "2. Real-life threats",
			r2t: "Any threat to other player or team member in real life is not allowed.",
			r3h: "3.  Bugusing",
			r3t: "Intentional use of a bug or intentionally not reporting a bug is not allowed..",
			r4h: "4. Skins",
			r41t: "Use common sense while uploading skins",
			r42t: "Nothing that can be considered offensive such as hate speech or political insults.",
			r43t: "Images must be suitable for all ages.",
			r44t: "No reuploads",
			r45t: "Skins should not depict persons under the age of 18",
			r46t: "No self promotion."
		},
		logged: {
			rank: "Rank",
			results: "Results",
			keyboard_controls: "Set keyboard controls",
			private_skin: "Private skin?",
			private_skin_desc: "Only you from your account can see the skin and skin will not be shown in the list of skins.",
			your_private_skins: "Your private skins",
			no_private_skins: "You don't have private skins.",
			search_for_others: "Or search",
			type_nick_desc: "You must enter a nickname for the game. You can not change the nickname you entered.",
			no_name: "You must type nickname.",
			save: "Save",
			my_statistic: "My statistic",
			hat: "Hat",
			hats: "Hats",
			change_nickname: "Change nickname",
			nickname_hours: "You can change nickname once every 48 hours",
			wrong_login: "Invalid login, try to logout and log in again. If you have problems then, contact the administrators.",
			successfully_changed_nickname: "The nickname has been successfully changed.",
			profile_settings: "Profile settings"
		},
		new_21_09: {
			badge: "Badge",
			old_chat: "Old chat",
			login_facebook: "Login with Facebook",
			or: "or",
			pillory: "Hall of Shame",
			name: "Name",
			type: "Type",
			server: "Server",
			reason: "Reason",
			date: "Date",
			expiration: "Time expiration",
			empty_list: "List is empty",
			top_10: "TOP 10 Results",
			no_players: "There are no players on list",
			result_added: "Result is added when you lost the game. Server restart is not included.",
			result_count: "For results, its used \"Record\".",
			search: "Search...",
			max_two_skins: "You can have max 2 private skins!",
			skin_aprove: "Your skin will be shown when administrators aprove.",
			skin_rules: "Read the <a class=\"text-underline\" href=\"/agar.rs/rules\">rules about skins</a> before uploading.",
			background_canvas: "Background animation",
			additional_info: "Other info / Image source",
			training: "Training",
			highscore_update: "Results are updated every hour!"
		},
		privacy: {
			title: "Privacy Policy",
			valid: "Last updated: January 22, 2022",
			ph1: "Data Collection",
			pt1: "When registering with us, we collect, process and store the personal data you enter, as well as information about the stationary and mobile devices you use during your access. Likewise, your skins, profile information and further uses will be saved, when using the Agar Balkan services.",
			ph2: "Security",
			pt2: "We use technically sophisticated and state-of-the-art measures to protect the security of your data on our servers against unauthorized access. Should you find any kind of abuse of your user account, please send a prompt message to the current contact address.",
			ph3: "Data Protection",
			pt3: "The use of our website is normally possible without giving personal data. If personal data such as name, address or e-mail addresses are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (for example, when communicating via e-mail) can present security gaps.",
			ph4: "Facebook Login",
			pt4: "You can use our service via their Facebook login data. We would like to point out that it can be a risk when logging in from public computers via Facebook. Please make sure to log off correctly in such cases.",
			pt4_delete: "To delete Facebook data, you need to go to Profile in the navigation menu, then to Profile settings. In the middle there is a button Delete Facebook data, which is executed by clicking on the button. The data will be deleted and you will no longer have the possibility to log in again through Facebook, unless you link the account with the game again.",
			ph5: "Cookies",
			pt5: "This site uses cookies. Cookies are small text files that are permanently or temporarily stored in your computer when you visit this website. The purpose of the cookies is in particular the analysis of the use of this website for statistical evaluation as well as for continuous improvements. In your browser, you can disable all or part of cookies in the settings at any time. When cookies are deactivated, you are no longer able to use all the functions of this website.",
			ph6: "Google Analytics",
			pt6: "This website uses Google Analytics, an software for the statistical analysis of visitor accesses. Google Analytics uses so-called \"cookies\", text files which are stored on your computer and which allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is stored on the server by google. The IP address is anonymized immediately after processing and before its storage. You can prevent the installation of cookies by setting your browser software accordingly. However, we would point out that in this case you may not be able to fully utilize all the functions of this website.",
			ph7: "Liability for Content",
			pt7: "The contents of our pages were created with great care. However, we can not guarantee the correctness, completeness and actuality of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws. As a service provider, however, we are not obligated to supervise transmitted or stored third-party information or to investigate circumstances which indicate an illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a concrete infringement. We will immediately remove these contents if we become aware of any such legal violations.",
			ph8: "Liability for Links",
			pt8: "Our offer contains links to external websites of third parties on whose content we have no influence. Therefore, we cannot assume any liability for these third-party content. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. If we become aware of any legal infringements, we will immediately remove such links.",
			ph9: "Questions about the service",
			pt9: "If you have any questions or suggestions or complaints about the services we offer, please use these contact details:",
			pt91: ""
		},
		statistic: {
			best_time_played: "The longest time",
			max_score: "Best score",
			all_plays: "Games played",
			server: "Server",
			top_10_logged: "Logged players",
			all_players: "All players"
		},
		options: {
			all_settings: "All settings",
			cells_and_controls: "Cells and controls",
			hide_colors: "Hide colors",
			show_sectors: "Show sectors",
			sector_color: "Sector color",
			map_color: "Map color",
			infinity_zoom: "Infinity zoom",
			map: "Map",
			cell_border: "Cell border",
			other: "Other",
			delete_profile: "Delete account",
			delete_facebook: "Delete Facebook data"
		},
		hats: {
			buy: "Buy",
			days: "days",
			choose: "Choose"
		},
		forgotPassword: {
			question: "Forgot your password?",
			email_not_exist: "Email does not exist.",
			email_sent: "The message with instructions was sent to your e-mail.",
			change_password: "Change password",
			new_password: "New password",
			repeat_password: "Reenter password",
			reset: "Reset",
			wrong_code: "Invalid. Please try resetting your password again.",
			passwords_do_not_match: "Passwords do not match.",
			password_changed: "Password changed successfully. You can log in now."
		},
		contribute: {
			contribute: "Contribute",
			donate: "Donate",
			donate_desc: "If you want to contribute to the development and maintenance of the game, you can leave your donation here.",
			select_amount: "Select the amount for the donation:",
			translate: "Help Translate",
			translate_desc: "Help us to translate the game into your language. Send us translations via facebook or contact form.",
			follow: "Follow us on Facebook",
			adblocker: "Please disable adblocker and reload the page",
			adblocker_desc: "Skins and other functionalities are not available because of AdBlocker."
		},
		online_safe: {
			title: "Staying Safe Online",
			tip1: "Don’t post any personal information online – like your address, email address or mobile number.",
			tip2: "Think carefully before posting pictures or videos of yourself.  Once you’ve put  a picture of yourself online most people can see it and may be able to download it, it’s not just yours anymore.",
			tip3: "Keep your privacy settings as high as possible.",
			tip4: "Never give out your passwords.",
			tip5: "Don’t befriend people you don’t know.",
			tip6: "Don’t meet up with people you’ve met online.  Speak to your parent or carer about people suggesting you do.",
			tip7: "Remember that not everyone online is who they say they are.",
			tip8: "Think carefully about what you say before you post something online.",
			tip9: "Respect other people’s views, even if you don’t agree with someone else’s views doesn’t mean you need to be rude.",
			tip10: "If you see something online that makes you feel uncomfortable, unsafe or worried: leave the website, turn off your computer if you want to and tell a trusted adult immediately.",
			title2: "Tips if you're being bullied online",
			react1: "Tell an adult you trust or admins if you are being cyberbullied",
			react2: "Don’t respond or retaliate to bullying messages  – it could make things worse",
			react3: "Block player who send you nasty messages",
			react4: "Make a note of dates and times you receive bullying messages, as well as details you have of the user’s nickname and the server.",
			react5: "If you are bullied repeatedly change your nickname / profile,  and use a name that doesn’t give any information away about you"
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.lang_hr = {
		home: {
			ab: "Agar Balkan",
			home: "Početna",
			skins: "Skinovi",
			skin: "Skin",
			music: "Glazba",
			contact: "Podrška",
			type_name: "Unesite ime",
			login: "Prijava",
			controll_ball: "Kontroliši lopticu uz pomoć miša",
			press: "Pritisni",
			to_split: "da se podijeliš",
			to_eject: "za izbacivanje mase",
			connecting: "Spajanje na server",
			mouse_control: "Klik za masu, split",
			mouse_control_desc: "Levim klikom izbacujete masu, desnim se splitate.",
			play: "Igraj",
			spectate: "Nadgledaj",
			hide_chat: "Sakrij chat",
			without_skins: "Prikaži skinove",
			show_table: "Prikaži tabelu?",
			show_current_score: "Prikaži trenutni rezultat",
			smoth_view: "Glatko prikazivanje",
			choose_server: "Odaberite server",
			choose_theme: "Odaberite temu",
			chosen_theme: "Odabrana tema: ",
			theme: "Tema",
			settings: "Opcije",
			enter_to_chat: "Budite ljubazni u chat-u!",
			new_option_click: "Lijevi klik za izbacivanje mase, desni za splitanje",
			eject_mass: "Izbacivanje mase",
			split: "Split",
			double_split: "Double Split",
			quad_split: "Quad Split",
			logout: "Odjava",
			restart: "Restart servera je u 00:00, 06:00, 12:00 i 18:00",
			servers: "Serveri",
			save: "Zapamti",
			game_view: "Pregled igre",
			pointing_arrow: "Strelica za pravac?",
			pointing_arrow_desc: "Refresh je potreban pri promeni opcije.",
			rules: "Pravila",
			auto_respawn_desc: "Kada izgubite, nastavljate dalje bez otvaranja početnog menija.",
			reset_settings: "Resetuj sva podesavanja",
			follow_us_on_fb: "Zapratite stranicu na fb za novosti vezane za AB",
			without_lines: "Prikaži linije?",
			transparent: "Providno?",
			saved_items: "Ovdje možete zadržati svoj nadimke, napomene ili bilo što drugo.",
			hide_hats: "Sakrij kape",
			today: "Danas",
			month: "Ovaj mjesec",
			how_to_play: "Kako igrati?",
			profile: "Profil",
			block: "Blokirati",
			yes: "Da",
			no: "Ne"
		},
		mp: {
			music: "Muzika",
			play: "Pokreni",
			play_playlist: "Pokreni plejlistu",
			turn_off: "Isključi",
			share_and_listen: "Dijelite i slušajte muziku sa ostalim igračima na sajtu",
			add: "Dodaj",
			error: "Došlo je do greške!",
			list_empty: "Lista je trenutno prazna.",
			copy_song_from_yt: "Prekopirajte i dodajte link sa YT da bi ubacili pjesmu.",
			paste_yt: "Nalijepi youtube link",
			lag: "Preporučuje se da ne pokrećete ukoliko imate sporiju internet konekciju",
			song_exist: "Pjesma već postoji na listi."
		},
		contact: {
			report_contact: "Kontaktirajte nas",
			your_email: "Vaš e-mail",
			messsage: "Poruka",
			report: "Pošalji",
			success: "Uspešno ste poslali poruku",
			error: "Došlo je do greške",
			banned: "Banovani ste sa sajta.",
			banned_desc: "Kontaktirajte nas za više informacija putem forme ili facebook stranice"
		},
		login: {
			email: "Unesi e-mail",
			email_username: "Unesi e-mail ili korisničko ime",
			type_password: "Unesi šifru",
			login: "Prijavi se",
			wrong_credentials: "Pogrešno korisničko ime ili lozinka!",
			required: "Ovo polje je obavezno",
			register_head: "Registriraj se",
			register: "Registriraj se",
			email_exist: "Postoji nalog sa unetim mailom.",
			nickname_exist: "Ime je zauzeto. Probajte drugo.",
			email_invalid: "E-mail adresa nije ispravna.",
			min_pass: "Duljina minimalne zaporke iznosi 4 znaka"
		},
		skins: {
			add_skin: "Dodaj skin",
			not_found: "Nije moguće pronaći skinove.",
			find_skin: "Pronađi skin",
			allowed: "Dozvoljeni format slike:",
			max_size: "Maksimalna veličina:",
			min_size: "Minimalna dužina imena skina je 3, a maksimalna 15 karaktera.",
			skin_name: "Ime skina",
			skin_added: "Vaš skin je uspešno dodat",
			not_allowed_skins: "Zabranjeno je dodavati uvredljive skinove. Svako nepoštovanje drugih igrača dovodi do trajnog bana sa sajta.",
			banned: "Zabranjeno vam je dodavanje skinova.",
			top_skins: "Top skinovi",
			all_skins: "Svi skinovi",
			my_favs: "Moji favoriti"
		},
		rules: {
			head: "Agar Balkan - Pravila igre",
			subhead: "Ova pravila vrijede za sve servere.",
			subhead2: "Ako smatrate da ste nepravedno kažnjeni po nekom od sljedećih pravila, možete kontaktirati podršku za igru ​​putem <a style=\"color:#fff;text-decoration: underline;z-index:6;\" to=\"/contact\">kontakt forme</a> ili <a style=\"color:#fff;text-decoration: underline;\" href=\"#\">facebook stranice</a>.",
			r1h: "1. Sadržaj",
			r1t: "Uvrede i neprimjereno ponašanje prema drugim igračima nije dopušteno.<br />Zabranjeno je postavljanje sadržaja, skinova i linkova pornografskog, rasističkog sadržaja, kao i svih drugih oblika diskriminacije bilo koje vrste.<br />Zabranjeno je oglašavanje, političko ili vjersko mišljenje.",
			r2h: "2. Prijetnje u stvarnom životu",
			r2t: "Zabranjena je bilo kakva prijetnja bilo kojem igraču ili članu tima u stvarnom životu.",
			r3h: "3. Uporaba pogrešaka",
			r3t: "Korištenje programske pogreške ili ne prijavljivanje takve pogreške strogo je zabranjeno.",
			r4h: "4. Skinovi",
			r41t: "Koristite se zdravim razumom prilikom dodavanja skinova",
			r42t: "Zabranjeni su skinovi koji predstavljaju govor mržnje ili političke uvrede",
			r43t: "Skinovi moraju biti pogodni za sve uzraste",
			r44t: "Nema ponovnih dodavanja skinova",
			r45t: "Zabranjeni su skinovi sa osobama mlađim od 18 godina",
			r46t: "Zabranjeno je reklamiranje preko skinova"
		},
		logged: {
			rank: "Rank",
			results: "Rezultati",
			keyboard_controls: "Podesite kontrole tastature",
			private_skin: "Privatan skin?",
			private_skin_desc: "Samo vi sa vašeg naloga možete videti skin i neće biti prikazan na listi skinova.",
			your_private_skins: "Vaši privatni skinovi",
			no_private_skins: "Nemate privatnih skinova.",
			search_for_others: "Ili pretražite",
			type_nick_desc: "Morate uneti ime za igru. Jednom uneto ime ne mozete kasnije promeniti.",
			no_name: "Niste uneli ime.",
			save: "Sačuvaj",
			my_statistic: "Moja statistika",
			hat: "Kapa",
			hats: "Kape",
			change_nickname: "Promijeni nadimak",
			nickname_hours: "Možete promijeniti nadimak jednom svakih 48 sati",
			wrong_login: "Nevažeća prijava, pokušajte se odjaviti i ponovno se prijaviti. Ako imate problema, kontaktirajte administratore.",
			successfully_changed_nickname: "Nadimak je uspješno promijenjen.",
			profile_settings: "Postavke profila"
		},
		new_21_09: {
			badge: "Značka",
			old_chat: "Stari chat",
			login_facebook: "Facebook prijava",
			or: "ili",
			pillory: "Stup srama",
			name: "Ime",
			type: "Tip",
			server: "Server",
			reason: "Razlog",
			date: "Datum",
			expiration: "Isticanje",
			empty_list: " Lista je trenutno prazna",
			top_10: "TOP 10 Liste",
			no_players: "Nema igrača na listi.",
			result_added: "Rezultat se dodaje kada izgubite igru. Restart servera se ne računa.",
			result_count: "Za rezultat se uzima \"Rekord\".",
			search: "Pretraga...",
			max_two_skins: "Najviše možete imati dva privatna skina.",
			skin_aprove: "Vaš skin će biti prikazan tek kada administratori odobre.",
			skin_rules: "Pročitajte <a class=\"text-underline\" href=\"/agar.rs/rules\">pravila o skinovima</a> pre dodavanja skina.",
			background_canvas: "Pozadinska animacija",
			additional_info: "Ostale informacije / Izvor slike",
			training: "Trening",
			highscore_update: "Rezultati se ažuriraju svakih sat vremena!"
		},
		privacy: {
			title: "Politika privatnosti",
			valid: "This privacy statement is valid from 01.10.2017",
			ph1: "Data Collection",
			pt1: "When registering with us, we collect, process and store the personal data you enter, as well as information about the stationary and mobile devices you use during your access. Likewise, your skins, profile information and further uses will be saved, when using the Agar Balkan services.",
			ph2: "Security",
			pt2: "We use technically sophisticated and state-of-the-art measures to protect the security of your data on our servers against unauthorized access. Should you find any kind of abuse of your user account, please send a prompt message to the current contact address.",
			ph3: "Data Protection",
			pt3: "The use of our website is normally possible without giving personal data. If personal data such as name, address or e-mail addresses are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (for example, when communicating via e-mail) can present security gaps.",
			ph4: "Facebook Login",
			pt4: "You can use our service via their Facebook login data. We would like to point out that it can be a risk when logging in from public computers via Facebook. Please make sure to log off correctly in such cases.",
			ph5: "Cookies",
			pt5: "This site uses cookies. Cookies are small text files that are permanently or temporarily stored in your computer when you visit this website. The purpose of the cookies is in particular the analysis of the use of this website for statistical evaluation as well as for continuous improvements. In your browser, you can disable all or part of cookies in the settings at any time. When cookies are deactivated, you are no longer able to use all the functions of this website.",
			ph6: "Google Analytics",
			pt6: "This website uses Google Analytics, an software for the statistical analysis of visitor accesses. Google Analytics uses so-called \"cookies\", text files which are stored on your computer and which allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is stored on the server by google. The IP address is anonymized immediately after processing and before its storage. You can prevent the installation of cookies by setting your browser software accordingly. However, we would point out that in this case you may not be able to fully utilize all the functions of this website.",
			ph7: "Liability for Content",
			pt7: "The contents of our pages were created with great care. However, we can not guarantee the correctness, completeness and actuality of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws. As a service provider, however, we are not obligated to supervise transmitted or stored third-party information or to investigate circumstances which indicate an illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a concrete infringement. We will immediately remove these contents if we become aware of any such legal violations.",
			ph8: "Liability for Links",
			pt8: "Our offer contains links to external websites of third parties on whose content we have no influence. Therefore, we cannot assume any liability for these third-party content. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. If we become aware of any legal infringements, we will immediately remove such links.",
			ph9: "Questions about the service",
			pt9: "If you have any questions or suggestions or complaints about the services we offer, please use these contact details:",
			pt91: ""
		},
		statistic: {
			best_time_played: "Najduže vreme",
			max_score: "Najbolji rezultat",
			all_plays: "Ukupno partija",
			server: "Server",
			top_10_logged: "Ulogovani igrači",
			all_players: "Svi igrači"
		},
		options: {
			all_settings: "Sve postavke",
			cells_and_controls: "Kugle i kontrole",
			hide_colors: "Sakrij boje",
			show_sectors: "Prikaži sektore",
			sector_color: "Boja sektora",
			map_color: "Boja mape",
			infinity_zoom: "Zumiranje u beskonačnosti",
			map: "Mapa",
			cell_border: "Okvir kugle",
			other: "Drugo",
			delete_profile: "Obriši nalog",
			delete_facebook: "Obriši Facebook podatke"
		},
		hats: {
			buy: "Kupi",
			days: "dana",
			choose: "Odaberi"
		},
		forgotPassword: {
			question: "Zaboravili ste lozinku?",
			email_not_exist: "E-pošta ne postoji.",
			email_sent: "Poruka s uputama poslana je na vašu e-poštu.",
			change_password: "Promijeni zaporku",
			new_password: "Nova lozinka",
			repeat_password: "Ponovno unesite zaporku",
			reset: "Reset",
			wrong_code: "Greška. Pokušajte ponovo postaviti zaporku.",
			passwords_do_not_match: "Lozinke se ne podudaraju.",
			password_changed: "Lozinka je uspješno promijenjena. Možete se prijaviti sada."
		},
		contribute: {
			contribute: "Doprinijeti",
			donate: "Donacije",
			donate_desc: "Ako želite da doprinesete razvoju i održavanju igre, možete ostaviti svoju donaciju ovde.",
			select_amount: "Odaberite iznos donacije:",
			translate: "Prevođenje",
			translate_desc: "Pomozite nam da prevedemo agar na Vaš jezik. Pošaljite nam prevode i ispravke putem facebook stranice ili kontakt forme.",
			follow: "Zapratite nas na Fejsbuku",
			adblocker: "Molimo onemogućite AdBlocker i ponovo učitajte stranicu",
			adblocker_desc: "Skinovi i druge funkcionalnosti nisu dostupni zbog AdBlocker-a."
		},
		online_safe: {
			title: "Ostanite sigurni online",
			tip1: "Nemoj objavljivati nikakve osobne podatke na netu - kao što su adresa, email ili broj mobilnog telefona.",
			tip2: "Razmisli pažljivo prije objavljivanja slika ili video zapisa sebe. Jednom kada postaviš sliku na internet, većina ljudi može da je vidi i preuzme, a onda to više nije samo tvoje.",
			tip3: "Čuvaj svoju privatnost što je više moguće.",
			tip4: "Nikada ne govori svoju lozinku.",
			tip5: "Nemoj se družiti sa ljudima koje ne poznaješ.",
			tip6: "Nemoj se nalaziti sa ljudima koje si upoznao/la online. Kaži svojim roditeljima ili starateljima o ljudima koji ti predlažu da to uradiš.",
			tip7: "Zapamti da nisu svi online onakvi kakvim se predstavljaju.",
			tip8: "Pažljivo razmisli o poruci koju pišeš prije nego što pošalješ.",
			tip9: "Poštuj stavove drugih ljudi, čak i ako se ne slažeš sa nečijim stavovima, ne znači da moraš biti nepristojan.",
			tip10: "Ako nešto na netu / agaru čini da se osećaš neugodno, nebezbedno ili zabrinuto, prijavi adminima ili roditeljima ili napusti sajt ili ugasi računalo.",
			title2: "Savjeti ako ste provocirani na internetu",
			react1: "Prijavi adminima ili starijim osobama vrijeđanje.",
			react2: "Ne odgovaraj i ne uzvraćaj pažnju na uvredljive poruke - to bi moglo pogoršati stvari.",
			react3: "Blokiraj igrača koji ti šalje takve poruke.",
			react4: "Napiši datum i vrijeme kada dobijaš uvredljive poruke, kao i detalje koje imaš - server, nick igrača.",
			react5: "Ako te učestalo vrijeđaju, promjeni nick / profil i koristi ime koje ne daje nikakve informacije o tebi."
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.lang_mk = {
		home: {
			ab: "Agar Balkan",
			home: "Почетна",
			skins: "Скинови",
			skin: "Слика",
			music: "Музика",
			contact: "Контакт",
			type_name: "Внесете Име",
			login: "Пријави се",
			controll_ball: "Контролирајте ја топката со помош на маусот.",
			press: "Притисни",
			to_split: "Да се поделиш",
			to_eject: "За изфрлање на маса",
			connecting: "Конектирање до сервер",
			mouse_control: "Клик за изфрлање маса и сплит",
			mouse_control_desc: "Со лев клик изфрлате маса, а со десниот се сплитате",
			play: "Играј",
			spectate: "Набљудувај",
			hide_chat: "Сокриј разговор",
			without_skins: "Слики?",
			show_table: "Tоп 10 табелата?",
			show_current_score: "Моменталниот резултат?",
			smoth_view: "Убаво прикажување",
			choose_server: "Одберете Сервер",
			choose_theme: "Одберете тема",
			chosen_theme: "Одбрана тема: ",
			theme: "Tема",
			settings: "Опции",
			enter_to_chat: "Притисни ENTER за разговор",
			new_option_click: "Лев клик за изфрлање маса, десен за разделување",
			eject_mass: "Изфрлање маса",
			split: "Разделување",
			double_split: "2x разделување",
			quad_split: "4x разделување",
			logout: "Одјави се",
			restart: "Рестарт на серверот е во 00:00, 06:00, 12:00 и 18:00",
			servers: "Сервери",
			save: "Запомни",
			game_view: "Прегледување на играта",
			pointing_arrow: "Стрелка за правец?",
			pointing_arrow_desc: "Рефреш е потребен при промена на опциите.",
			rules: "Правила",
			auto_respawn_desc: "Кога ќе изгубите, продолжувате со играње без отворање на почетното мени.",
			reset_settings: "Ресетирај ги сите подесувања",
			follow_us_on_fb: "Следете не на Facebook, за секакви новости со AB ",
			without_lines: "Покажи линии?",
			transparent: "Провиден?",
			saved_items: "Here you can keep your nicknames, notes or anything else.",
			hide_hats: "Сакриј капе",
			today: "Денес",
			month: "Овој месец",
			how_to_play: "Како да играш?",
			profile: "Профил",
			block: "Блокира",
			yes: "Да",
			no: "Не"
		},
		mp: {
			music: "Музика",
			play: "Почни",
			play_playlist: "Слушај плајлиста",
			turn_off: "Исклучи",
			share_and_listen: "Споделете и слушајте музика со останатите играчи на сајтот",
			add: "Додај",
			error: "Дојде до грешка!",
			list_empty: "Листата е во моментот празна.",
			copy_song_from_yt: "Копирајте го и внесете го линкот од YT за да ја внесете песната.",
			paste_yt: "Вметнете YT линк",
			lag: "Се препорачува да не пуштате доколку имате слаба интернет конекција",
			song_exist: "Песната веќе постои на листата."
		},
		contact: {
			report_contact: "Контактирајте не",
			your_email: "Ваш Е-маил",
			messsage: "Порака",
			report: "Испрати",
			success: "Успешно ја испративте пораката",
			error: "Дојдовме до грешка",
			banned: "Баниран сте на сајтот.",
			banned_desc: "Контактирајте не за повеке информации преку формуларот или преку FB страната."
		},
		login: {
			email: "Внесете Е-маил.",
			email_username: "Внесете Е-маил или корисничко име.",
			type_password: "Внесете лозинка",
			login: "Пријави се",
			wrong_credentials: "Погрешно корисничко име или лозинка!",
			required: "Ова поле е задолжително",
			register_head: "Регистрирај се",
			register: "Создај сметка",
			email_exist: "Е-пошта веќе постои",
			nickname_exist: "Прекарот е земен. Пробајте уште еден.",
			email_invalid: "Неважечка е-пошта.",
			min_pass: "Минималната должина на лозинка е 4 карактери"
		},
		skins: {
			add_skin: "Додај слика",
			not_found: "Не е возможно да пронајде слики.",
			find_skin: "Пронајди слика",
			allowed: "Дозволен формат на слики:",
			max_size: "Максимална големина:",
			min_size: "Минимална должина на името на сликата е 3, а максимална е 15 карактери.",
			skin_name: "Име на сликата",
			skin_added: "Вашата слика е успешно додадена",
			not_allowed_skins: "Забрането е да додавате навредливи слики. Секое непоштување на друг играч допринесува до траен бан на сајтот.",
			banned: "Забрането ви е на вас да додавате скинови.",
			top_skins: "Врвни слики",
			all_skins: "Сите слики",
			my_favs: "Мојот омилен"
		},
		rules: {
			head: "Agar Balkan - Правила на играта",
			subhead: "Овие правила важат за сите сервери.",
			subhead2: "Ако мислите дека сте неправедно казнет, можете да не контактирате по пат на <a style=\"color:#fff;text-decoration: underline;\" href=\"/agar.rs/contact\">контакт форма</a> или <a style=\"color:#fff;text-decoration: underline;\" href=\"#\">facebook страница</a>.",
			r1h: "1. Содржина",
			r1t: "Навреди и непримерно понашање према другите играчи не е допуштено.<br /> Забрането е поставување на содржини,  слики и линкови порнографски, расистичка содржина, како и сите други огласувања, политичко или верско мислење.",
			r2h: "2. Загрозување на реалниот живот",
			r2t: "Забранета е било каква расправа во врска со вистинскиот жовот на било кој играч или член на тимот.",
			r3h: "3.  Користење грешки (Bugovi/Glichovi)",
			r3t: "Користењето на програмсите грешки и не пријавувањето на такви грешки строго се забранува.",
			r4h: "4. Слики",
			r41t: "Use common sense while uploading skins",
			r42t: "Nothing that can be considered offensive such as hate speech or political insults.",
			r43t: "Images must be suitable for all ages.",
			r44t: "No reuploads",
			r45t: "Skins should not depict persons under the age of 18",
			r46t: "No self promotion."
		},
		logged: {
			rank: "Ранк",
			results: "Резултати",
			keyboard_controls: "Подесувања контроли на тастатурата",
			private_skin: "Приватна слика?",
			private_skin_desc: "Само вие со вашиот налог ќе можете да ја видите сликата и нема да биде прилажана на листата со слики.",
			your_private_skins: "Ваши приватни слики",
			no_private_skins: "Немате приватни слики.",
			search_for_others: "Или пребарајте",
			type_nick_desc: " Морате да внесете име за игра, Името неможе да се промени во текот на играта.",
			no_name: "Не сте внеле име.",
			save: "Зачувај",
			my_statistic: "Моја статистика",
			hat: "Шапка",
			hats: "Капи",
			change_nickname: "Промена на прекар",
			nickname_hours: "Можете да го промените прекарот еднаш на секои 48 часа",
			wrong_login: "Неважечко најавување, обидете се да се одјавите и повторно да се најавите. Ако имате проблеми, контактирајте со администраторите.",
			successfully_changed_nickname: "Прекарот е успешно променет.",
			profile_settings: "Прилагодувања на профилот"
		},
		new_21_09: {
			badge: "Значка",
			old_chat: "Стар разговор",
			login_facebook: "Facebook најава",
			or: "или",
			pillory: "Столбот на срамот",
			name: "Име",
			type: "Tip",
			server: "Server",
			reason: "Razlog",
			date: "Datum",
			expiration: "Isticanje",
			empty_list: " Lista je trenutno prazna",
			top_10: "TOP 10 Листи",
			no_players: "Nema igrača na listi.",
			result_added: "Резултатите се додаваат кога ќе ја изгубите играта. Рестартот на серверот не се калкулира.",
			result_count: "За резултат се зима \"Рекорд\".",
			search: "Pretraga",
			max_two_skins: "Najviše možete imati dva privatna skina.",
			skin_aprove: "Vaš skin će biti prikazan tek kada administratori odobre.",
			skin_rules: "Pročitajte <a class=\"text-underline\" href=\"/agar.rs/rules\">pravila o skinovima</a> pre dodavanja skina.",
			background_canvas: "Pozadinska animacija",
			additional_info: "Ostale informacije / Izvor slike",
			training: "Вежбање",
			highscore_update: "Резултатите се ажурираат секој час!"
		},
		privacy: {
			title: "Политика за приватност",
			valid: "This privacy statement is valid from 01.10.2017",
			ph1: "Data Collection",
			pt1: "When registering with us, we collect, process and store the personal data you enter, as well as information about the stationary and mobile devices you use during your access. Likewise, your skins, profile information and further uses will be saved, when using the Agar Balkan services.",
			ph2: "Security",
			pt2: "We use technically sophisticated and state-of-the-art measures to protect the security of your data on our servers against unauthorized access. Should you find any kind of abuse of your user account, please send a prompt message to the current contact address.",
			ph3: "Data Protection",
			pt3: "The use of our website is normally possible without giving personal data. If personal data such as name, address or e-mail addresses are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (for example, when communicating via e-mail) can present security gaps.",
			ph4: "Facebook Login",
			pt4: "You can use our service via their Facebook login data. We would like to point out that it can be a risk when logging in from public computers via Facebook. Please make sure to log off correctly in such cases.",
			ph5: "Cookies",
			pt5: "This site uses cookies. Cookies are small text files that are permanently or temporarily stored in your computer when you visit this website. The purpose of the cookies is in particular the analysis of the use of this website for statistical evaluation as well as for continuous improvements. In your browser, you can disable all or part of cookies in the settings at any time. When cookies are deactivated, you are no longer able to use all the functions of this website.",
			ph6: "Google Analytics",
			pt6: "This website uses Google Analytics, an software for the statistical analysis of visitor accesses. Google Analytics uses so-called \"cookies\", text files which are stored on your computer and which allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is stored on the server by google. The IP address is anonymized immediately after processing and before its storage. You can prevent the installation of cookies by setting your browser software accordingly. However, we would point out that in this case you may not be able to fully utilize all the functions of this website.",
			ph7: "Liability for Content",
			pt7: "The contents of our pages were created with great care. However, we can not guarantee the correctness, completeness and actuality of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws. As a service provider, however, we are not obligated to supervise transmitted or stored third-party information or to investigate circumstances which indicate an illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a concrete infringement. We will immediately remove these contents if we become aware of any such legal violations.",
			ph8: "Liability for Links",
			pt8: "Our offer contains links to external websites of third parties on whose content we have no influence. Therefore, we cannot assume any liability for these third-party content. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. If we become aware of any legal infringements, we will immediately remove such links.",
			ph9: "Questions about the service",
			pt9: "If you have any questions or suggestions or complaints about the services we offer, please use these contact details:",
			pt91: ""
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.lang_rs = {
		home: {
			ab: "Agar Balkan",
			home: "Почетна",
			skins: "Скинови",
			skin: "Скин",
			music: "Музика",
			contact: "Подршка",
			type_name: "Унесите име",
			login: "Пријава",
			controll_ball: "Контролиши лоптицу уз помоћ миша",
			press: "Притисни",
			to_split: "да се поделиш",
			to_eject: "за избацивање масе",
			connecting: "Спајање на сервер",
			mouse_control: "Клик за масу, сплит",
			mouse_control_desc: "Левим кликом избацујете масу, десним се делите.",
			play: "Играј",
			spectate: "Надгледај",
			hide_chat: "Сакриј чeт",
			without_skins: "Прикажи скинове",
			show_table: "Прикажи табелу?",
			show_current_score: "Прикажи трен. резултат",
			smoth_view: "Глатко приказивање",
			choose_server: "Одаберите сервер",
			choose_theme: "Одаберите тему",
			chosen_theme: "Одабрана тема: ",
			theme: "Tема",
			settings: "Опције",
			enter_to_chat: "Будите љубазни у чету!",
			new_option_click: "Леви клик за избацивање масе, десни за поделу",
			eject_mass: "Избацивање масе",
			split: "Split",
			double_split: "Double Split",
			quad_split: "Quad Split",
			logout: "Одјава",
			restart: "Рестарт сервера је у 00:00, 06:00, 12:00 i 18:00",
			servers: "Сервери",
			save: "Запамти",
			game_view: "Преглед игре",
			pointing_arrow: "Стрелица за правац",
			pointing_arrow_desc: "Освежавање странице је потребно при промени опције.",
			rules: "Правила",
			auto_respawn_desc: "Када изгубите, настављате даље без отварања почетног менија.",
			reset_settings: "Ресетуј сва подешавања",
			follow_us_on_fb: "Запратите страницу на FB за новости везане за АБ",
			without_lines: "Покажи линије?",
			transparent: "Провидно?",
			saved_items: "Овде можете чувати своје никове, напомене или било шта друго.",
			hide_hats: "Сакриј капе",
			today: "Данас",
			month: "Овог месеца",
			how_to_play: "Како играти?",
			profile: "Профил",
			block: "Блокирај",
			yes: "Да",
			no: "Не"
		},
		mp: {
			music: "Музика",
			play: "Покрени",
			play_playlist: "Покрени плејлисту",
			turn_off: "Искључи",
			share_and_listen: "Делите и слушајте музику са осталим играчима на сајту",
			add: "Додај",
			error: "Дошло је до грешке!",
			list_empty: "Листа је тренутно празна.",
			copy_song_from_yt: "Прекопирајте и додајте линк са YТ да би убацили песму.",
			paste_yt: "Налепи YТ линк",
			lag: "Препоручује се да не покрећете уколико имате спорију интернет конекцију",
			song_exist: "Песма се налази на листи."
		},
		contact: {
			report_contact: "Контактирајте нас",
			your_email: "Ваша е-адреса",
			messsage: "Порука",
			report: "Пошаљи",
			success: "Успешно сте послали поруку",
			error: "Дошло је до грешке",
			banned: "Бановани сте са сајта.",
			banned_desc: "Контактирајте нас за више информације путем форме или фејсбук странице."
		},
		login: {
			email: "Унеси е-маил",
			email_username: "Унеси е-маил или корисничко име",
			type_password: "Унеси лозинку",
			login: "Пријави се",
			wrong_credentials: "Погрешно корисничко име или лозинка!",
			required: "Ово поље је обавезно",
			register_head: "Региструј се",
			register: "Направи налог",
			email_exist: "Постоји налог са унетом адресом",
			nickname_exist: "Име је заузето. Пробајте друго",
			email_invalid: "Е-адреса није исправна",
			min_pass: "Минимална дужина лозинке је 4 карактера"
		},
		skins: {
			add_skin: "Додај скин",
			not_found: "Није могуће пронаћи скинове.",
			find_skin: "Пронађи скин",
			allowed: "Дозвољени формат слике:",
			max_size: "Максимална величина:",
			min_size: "Минимална дужина имена скина је 3, а максимална 15 карактера.",
			skin_name: "Име скина",
			skin_added: "Ваш скин је успешно додат",
			not_allowed_skins: "Забрањено је додавати увредљиве скинове. Свако непоштовање других играча доводи до трајног бана.",
			banned: "Забрањено вам је додавање скинова.",
			top_skins: "Топ скинови",
			all_skins: "Сви скинови",
			my_favs: "Моји фаворити"
		},
		rules: {
			head: "Агар Балкан - Правила игре",
			subhead: "Ова правила су важећа за све сервере.",
			subhead2: "Ако мислите да сте неправедно кажњени по једном од следећих правила можете се обратити подршци за игру путем <a  style=\"color:#fff;text-decoration: underline;z-index:6;\" href=\"/agar.rs/contact\">контакт форме</a> или <a style=\"color:#fff;text-decoration: underline;\" href=\"#\">facebook странице</a>.",
			r1h: "1. Садржај",
			r1t: "Увреде и неприкладно понашање према другим играчима нису дозвољене.<br />Постављање садржаја, скинова, и линкова порнографског, расистичког садржаја као и сви остали видови дискриминација било које врсте су забрањени.<br />Рекламе, политичка или верска мишљења су забрањена.",
			r2h: "2. Претње у стварном животу",
			r2t: "Било који облик претње у стварном животу било ком играчу или члану тима је забрањен.",
			r3h: "3. Искоришћавање грешака",
			r3t: "Коришћење грешке у програмирању или не пријављивање овакве грешке је строго забрањено.",
			r4h: "4. Скинови",
			r41t: "Користите се здравим разумом приликом додавања скинова",
			r42t: "Забрањени су скинови који представљају говор мржње или политичке увреде",
			r43t: "Скинови морају бити погодни за све узрасте",
			r44t: "Нема поновних додавања скинова",
			r45t: "Забрањени су скинови са особама млађим од 18 година",
			r46t: "Забрањено је рекламирање преко скинова"
		},
		logged: {
			rank: "Ранк",
			results: "Резултати",
			keyboard_controls: "Подесите контроле тастатуре",
			private_skin: "Приватни скин?",
			private_skin_desc: "Само Ви са Вашег налога можете видети скин и неће бити приказан на листи скинова.",
			your_private_skins: "Ваши приватни скинови",
			no_private_skins: "Немате приватних скинова.",
			search_for_others: "Или претражите",
			type_nick_desc: "Морате унети име за игру. Једном унето име не можете касније променити.",
			no_name: "Нисте унели име.",
			save: "Сачувај",
			my_statistic: "Моја статистика",
			hat: "Капа",
			hats: "Капе",
			change_nickname: "Промени надимак",
			nickname_hours: "Надимак можете променити једном у 48 сати",
			wrong_login: "Неисправно пријављивање, покушајте да се одјавите и поново пријавите. Ако имате проблема, контактирајте администраторе.",
			successfully_changed_nickname: "Надимак је успешно промењен.",
			profile_settings: "Подешавања профила"
		},
		new_21_09: {
			badge: "Значка",
			old_chat: "Стари чет",
			login_facebook: "Улогуј се преко фејсбука",
			or: "или",
			pillory: "Стуб срама",
			name: "Име",
			type: "Тип",
			server: "Сервер",
			reason: "Разлог",
			date: "Датум",
			expiration: "Истицање",
			empty_list: "Листа је тренутно празна",
			top_10: "ТОП 10 Листе",
			no_players: "Нема играча на листи.",
			result_added: "Резултат се додаје када изгубите игру. Рестарт сервера се не рачуна.",
			result_count: "За резултат се узима \"Рекорд\".",
			search: "Претрага",
			max_two_skins: "Највише можете имати два приватна скина.",
			skin_aprove: "Ваш скин ће бити приказан тек када администратори одобре.",
			skin_rules: "Прочитајте <a class=\"text-underline\" href=\"/agar.rs/rules\">правила о скиновима</a> пре додавања скина.",
			background_canvas: "Позадинска анимација",
			additional_info: "Остале опције / Извор слике",
			training: "Тренинг",
			highscore_update: "Резултати се ажурирају на сваких сат времена!"
		},
		privacy: {
			title: "Политика приватности",
			valid: "This privacy statement is valid from 01.10.2017",
			ph1: "Data Collection",
			pt1: "When registering with us, we collect, process and store the personal data you enter, as well as information about the stationary and mobile devices you use during your access. Likewise, your skins, profile information and further uses will be saved, when using the Agar Balkan services.",
			ph2: "Security",
			pt2: "We use technically sophisticated and state-of-the-art measures to protect the security of your data on our servers against unauthorized access. Should you find any kind of abuse of your user account, please send a prompt message to the current contact address.",
			ph3: "Data Protection",
			pt3: "The use of our website is normally possible without giving personal data. If personal data such as name, address or e-mail addresses are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (for example, when communicating via e-mail) can present security gaps.",
			ph4: "Facebook Login",
			pt4: "You can use our service via their Facebook login data. We would like to point out that it can be a risk when logging in from public computers via Facebook. Please make sure to log off correctly in such cases.",
			ph5: "Cookies",
			pt5: "This site uses cookies. Cookies are small text files that are permanently or temporarily stored in your computer when you visit this website. The purpose of the cookies is in particular the analysis of the use of this website for statistical evaluation as well as for continuous improvements. In your browser, you can disable all or part of cookies in the settings at any time. When cookies are deactivated, you are no longer able to use all the functions of this website.",
			ph6: "Google Analytics",
			pt6: "This website uses Google Analytics, an software for the statistical analysis of visitor accesses. Google Analytics uses so-called \"cookies\", text files which are stored on your computer and which allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is stored on the server by google. The IP address is anonymized immediately after processing and before its storage. You can prevent the installation of cookies by setting your browser software accordingly. However, we would point out that in this case you may not be able to fully utilize all the functions of this website.",
			ph7: "Liability for Content",
			pt7: "The contents of our pages were created with great care. However, we can not guarantee the correctness, completeness and actuality of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws. As a service provider, however, we are not obligated to supervise transmitted or stored third-party information or to investigate circumstances which indicate an illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a concrete infringement. We will immediately remove these contents if we become aware of any such legal violations.",
			ph8: "Liability for Links",
			pt8: "Our offer contains links to external websites of third parties on whose content we have no influence. Therefore, we cannot assume any liability for these third-party content. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. If we become aware of any legal infringements, we will immediately remove such links.",
			ph9: "Questions about the service",
			pt9: "If you have any questions or suggestions or complaints about the services we offer, please use these contact details:",
			pt91: ""
		},
		statistic: {
			best_time_played: "Најдуже време",
			max_score: "Најбољи резултат",
			all_plays: "Укупно партија",
			server: "Сервер",
			top_10_logged: "Улоговани играчи",
			all_players: "Сви играчи"
		},
		options: {
			all_settings: "Све опције",
			cells_and_controls: "Кугле и контроле",
			hide_colors: "Сакриј боје",
			show_sectors: "Прикажи секторе",
			sector_color: "Боја сектора",
			map_color: "Боја мапе",
			infinity_zoom: "Бесконачан зум",
			map: "Мапа",
			cell_border: "Оквир око кугле",
			other: "Остало",
			delete_profile: "Обриши налог",
			delete_facebook: "Обриши Фејсбук податке"
		},
		hats: {
			buy: "Купи",
			days: "дана",
			choose: "Одабери"
		},
		forgotPassword: {
			question: "Заборавили сте лозинку?",
			email_not_exist: "Е-маил не постоји.",
			email_sent: "Порука са инструкцијама је послата на ваш е-маил.",
			change_password: "Промени лозинку",
			new_password: "Нова лозинка",
			repeat_password: "Поново унесите лозинку",
			reset: "Ресетовати",
			wrong_code: "Грешка у коду. Поново покушајте ресетовање ваше лозинке.",
			passwords_do_not_match: "Лозинке се не поклапају.",
			password_changed: "Лозинка је успешно промењена. Можете се пријавити сада."
		},
		contribute: {
			contribute: "Допринети",
			donate: "Донације",
			donate_desc: "Ако желите да допринесете развоју и одржавању игре, можете оставити своју донацију овде.",
			select_amount: "Изаберите износ донације:",
			translate: "Превођење",
			translate_desc: "Помозите нам да преведемо агар на Ваш језик. Пошаљите нам преводе и исправке преко фејсбук странице или контакт форме.",
			follow: "Запратите нас на фејсбуку",
			adblocker: "Онемогућите AdBlocker и поново учитајте страницу",
			adblocker_desc: "Скинови и друге функционалности нису доступни због AdBlocker-a."
		},
		online_safe: {
			title: "Останите сигурни на интернету",
			tip1: "Немој објављивати никакве личне информације на нету - као што су адреса, емаил или број мобилног телефона.",
			tip2: "Размисли пажљиво пре објављивања слика или видео записа себе. Једном када поставиш слику на интернет, већина људи може да је види и преузме, а онда то више није само твоје.",
			tip3: "Чувај своју приватност што је више могуће.",
			tip4: "Никада не говори своје лозинке.",
			tip5: "Немој се дружити са људима које не познајеш.",
			tip6: "Немој се налазити са људима које си упознао/ла онлајн. Кажи својим родитељима или старатељима о људима који ти предлажу да то урадиш.",
			tip7: "Запамти да нису сви онлајн онакви каквим се представљају.",
			tip8: "Пажљиво размисли о поруци коју пишеш пре него што пошаљеш.",
			tip9: "Поштуј ставове других људи, чак и ако се не слажеш са нечијим ставовима, не значи да мораш бити непристојан.",
			tip10: "Ако нешто на нету / агару чини да се осећаш неугодно, небезбедно или забринуто, пријави админима или родитељима или напусти сајт или угаси рачунар.",
			title2: "Савети ако сте провоцирани на интернету",
			react1: "Пријави админима или старијим особама вређање.",
			react2: "Не одговарај и не узвраћај пажњу на увредљиве поруке - то би могло погоршати ствари.",
			react3: "Блокирај играча који ти шаље такве поруке.",
			react4: "Напиши датум и време када добијаш увредљиве поруке, као и детаље које имаш - сервер, надимак играча.",
			react5: "Ако те учестало вређају, промени надимак / профил и користи име које не даје никакве информације о теби."
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.lang_si = {
		home: {
			ab: "Agar Balkan",
			home: "Domov",
			skins: "Skins",
			skin: "Skin",
			music: "Glasba",
			contact: "Stik",
			type_name: "Vnesite vzdevek",
			login: "Vpiši se",
			controll_ball: "Nadzor nad miško",
			press: "Pritisnite",
			to_split: "če se hočete razdeliti",
			to_eject: "za oddajanje mase",
			connecting: "Povezovanje s strežnikom",
			mouse_control: "Klik za oddajanje mase, razdelitev",
			mouse_control_desc: "Z levim klikom oddajate maso, z desnim se razdelite.",
			play: "Igraj",
			spectate: "Spectate",
			hide_chat: "Skrij chat",
			without_skins: "Pokaži skinov?",
			show_table: "Pokaži lestvico?",
			show_current_score: "Pokaži rezultat",
			smoth_view: "Gladko prikazovanje",
			choose_server: "Izberite strežnik",
			choose_theme: "Izberite temo",
			chosen_theme: "Izbrana tema: ",
			theme: "Tema",
			settings: "Nastavitve",
			enter_to_chat: "Pritisnite ENTER za klepet!",
			new_option_click: "Z levim klikom oddajate maso, z desnim se razdelite",
			eject_mass: "Oddajanje mase",
			split: "Split",
			double_split: "Double Split",
			quad_split: "Quad Split",
			logout: "Odjava",
			restart: "Strežniki se znova zaženejo v 00:00, 06:00, 12:00 in 18:00",
			servers: "Strežniki",
			save: "Shrani",
			game_view: "Pogled igre",
			pointing_arrow: "Kazalna puščica?",
			pointing_arrow_desc: "Ob spremembi nastavitev, morate refreshati stran.",
			rules: "Pravila",
			auto_respawn_desc: "Ko izgubite, nadaljujete igro brez odpiranja menija.",
			reset_settings: "Ponastavite vse nastavitve",
			follow_us_on_fb: "Sledi nas na FB",
			without_lines: "Kažejo črte?",
			transparent: "Prozoren?",
			saved_items: "Here you can keep your nicknames, notes or anything else.",
			hide_hats: "Sakrij kape",
			today: "Danes",
			how_to_play: "Kako igrati?",
			profile: "Profil",
			block: "Blokiraj",
			yes: "Ja",
			no: "Ne"
		},
		mp: {
			music: "Glasba",
			play: "Play",
			play_playlist: "Začetek predvajanja",
			turn_off: "Ugasni",
			share_and_listen: "Deli in poslušaj glasbo z ostalimi igralci",
			add: "Dodaj",
			error: "Prišlo je do napake!",
			list_empty: "Seznam je trenutno prazen.",
			copy_song_from_yt: "Kopirajte YT povezavo in jo dodajte sem.",
			paste_yt: "Prilepi YT povezavo",
			lag: "Preporočljivo je da ne predvajate glasbo če imate slabšo internet povezavo",
			song_exist: "Pesem že obstaja."
		},
		contact: {
			report_contact: "Kontaktiraj nas",
			your_email: "Vaš e-poštni naslov",
			messsage: "Sporočilo",
			report: "Pošlji",
			success: "Uspešno ste poslali sporočilo",
			error: "Napaka",
			banned: "Stran ni dostopna zaradi kršenja pravil..",
			banned_desc: "Kontaktirajte nas za več informacij na stikih ali na FB strani."
		},
		login: {
			email: "Vnesite e-pošto",
			email_username: "Vnesite e-pošto ali uporabniško ime",
			type_password: "Vnesite geslo",
			login: "Vpiši se",
			wrong_credentials: "Napačno uporabniško ime ali geslo!",
			required: "To polje je obvezno",
			register_head: "Pridruži se",
			register: "Ustvari račun",
			email_exist: "Email že obstaja",
			nickname_exist: "Ime je vzeto. Poskusite drugo.",
			email_invalid: "Neveljavna e-pošta.",
			min_pass: "Minimalna dolžina gesla je 4 znake"
		},
		skins: {
			add_skin: "Dodaj skin",
			not_found: "Skinov ni mogoče najti.",
			find_skin: "Najdi skin",
			allowed: "Dovoljen format slike:",
			max_size: "Največja velikost:",
			min_size: "Minimalna dolžina imena skina je 3 in maksimalna 15 znakov.",
			skin_name: "Ime skina",
			skin_added: "Vaš skin je objavljen",
			not_allowed_skins: "Prepovedano objavljati žaljive skine. V primeru takšnih bo za vas spletna stran onemogočena.",
			banned: "Prepovedano je dodajati skine.",
			top_skins: "Top slike",
			all_skins: "Vse slike",
			my_favs: "Moje najljubše"
		},
		rules: {
			head: "Agar Balkan - Pravila igre",
			subhead: "Ta pravila veljajo za vse strežnike.",
			subhead2: "Če mislite da ste nepravočno kaznovani, nas kontaktirajte.",
			r1h: "1. Vsebina",
			r1t: "Neprimerno obnašanje do soigralcev je prepovedano.<br />Prepovedano objavljanje žaljivih fotografij na skin, objavljanje linkov pornografske in rasistične vsebine, kot vse druge diskriminacije.<br />Zabranjeno je oglašavanje, politično in versko mnenje.",
			r2h: "2. Grožnje v resničnem življenju",
			r2t: "Prepovedane grožnje kateremu koli igralcu v resnčnem življenju.",
			r3h: "3. Iskoriščanje napak",
			r3t: "Iskoriščanje programske napake je strogo prepovedano.",
			r4h: "4. Slike",
			r41t: "Pri nalaganju slik uporabljajte zdrav razum",
			r42t: "Nič, kar se lahko šteje za žaljivo, kot je sovražni govor ali politična žalitev.",
			r43t: "Slike morajo biti primerne za vse starosti.",
			r44t: "Ne ponovno naloži",
			r45t: "Slike ne smejo prikazovati oseb, mlajših od 18 let",
			r46t: "Brez samopromocije."
		},
		logged: {
			rank: "Rank",
			results: "Rezultati",
			keyboard_controls: "Nastavite kontrolnike tipkovnice",
			private_skin: "Zasebni skin?",
			private_skin_desc: "Samo vi iz vašega računa lahko vidite skin in skin ne bo prikazan na seznamu skinov.",
			your_private_skins: "Vaš zasebni skin",
			no_private_skins: "Nimate zasebnih skinov.",
			search_for_others: "Iskanje",
			type_nick_desc: "V igro morate vnesti vzdevek. Vzdevka, ki ste ga vnesli, ne morete spremeniti.",
			no_name: "Vnesti morate vzdevek.",
			save: "Shrani",
			my_statistic: "Moja statistika",
			hat: "Klobuk",
			hats: "Klobuki",
			change_nickname: "Spremeni vzdevek",
			nickname_hours: "Nadomestno ime lahko spremenite enkrat na 48 ur",
			wrong_login: "Neveljavna prijava, poskusite se odjaviti in znova prijaviti. Če imate težave, se obrnite na skrbnike.",
			successfully_changed_nickname: "Nadimek je bil uspešno spremenjen.",
			profile_settings: "Nastavitve profila"
		},
		privacy: {
			title: "Politika zasebnosti",
			valid: "This privacy statement is valid from 01.10.2017",
			ph1: "Data Collection",
			pt1: "When registering with us, we collect, process and store the personal data you enter, as well as information about the stationary and mobile devices you use during your access. Likewise, your skins, profile information and further uses will be saved, when using the Agar Balkan services.",
			ph2: "Security",
			pt2: "We use technically sophisticated and state-of-the-art measures to protect the security of your data on our servers against unauthorized access. Should you find any kind of abuse of your user account, please send a prompt message to the current contact address.",
			ph3: "Data Protection",
			pt3: "The use of our website is normally possible without giving personal data. If personal data such as name, address or e-mail addresses are collected on our pages, this is always done on a voluntary basis as far as possible. These data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (for example, when communicating via e-mail) can present security gaps.",
			ph4: "Facebook Login",
			pt4: "You can use our service via their Facebook login data. We would like to point out that it can be a risk when logging in from public computers via Facebook. Please make sure to log off correctly in such cases.",
			ph5: "Cookies",
			pt5: "This site uses cookies. Cookies are small text files that are permanently or temporarily stored in your computer when you visit this website. The purpose of the cookies is in particular the analysis of the use of this website for statistical evaluation as well as for continuous improvements. In your browser, you can disable all or part of cookies in the settings at any time. When cookies are deactivated, you are no longer able to use all the functions of this website.",
			ph6: "Google Analytics",
			pt6: "This website uses Google Analytics, an software for the statistical analysis of visitor accesses. Google Analytics uses so-called \"cookies\", text files which are stored on your computer and which allow an analysis of the use of the website by you. The information generated by the cookie about your use of this website is stored on the server by google. The IP address is anonymized immediately after processing and before its storage. You can prevent the installation of cookies by setting your browser software accordingly. However, we would point out that in this case you may not be able to fully utilize all the functions of this website.",
			ph7: "Liability for Content",
			pt7: "The contents of our pages were created with great care. However, we can not guarantee the correctness, completeness and actuality of the contents. As a service provider, we are responsible for our own content on these pages according to the general laws. As a service provider, however, we are not obligated to supervise transmitted or stored third-party information or to investigate circumstances which indicate an illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a concrete infringement. We will immediately remove these contents if we become aware of any such legal violations.",
			ph8: "Liability for Links",
			pt8: "Our offer contains links to external websites of third parties on whose content we have no influence. Therefore, we cannot assume any liability for these third-party content. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the content of the linked pages is not reasonable without concrete indications of an infringement. If we become aware of any legal infringements, we will immediately remove such links.",
			ph9: "Questions about the service",
			pt9: "If you have any questions or suggestions or complaints about the services we offer, please use these contact details:",
			pt91: ""
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = function (e) {
		if (e && e.__esModule) {
			return e;
		} else {
			return {
				default: e
			};
		}
	}(n(6));
	t.default = [{
		path: "*",
		component: i.default.components.homepage,
		name: "notFound"
	}, {
		path: "/agar.rs/",
		component: i.default.components.homepage,
		name: "index",
		props: true
	}, {
		path: "/agar.rs/web/:id",
		component: i.default.components.homepage,
		name: "indexLink",
		props: true
	}, {
		path: "/agar.rs/server/:id",
		component: i.default.components.homepage,
		name: "serverLink",
		props: true
	}, {
		path: "/agar.rs/home",
		component: i.default.components.homepage,
		name: "logged"
	}, {
		path: "/agar.rs/web/:id",
		component: i.default.components.homepage,
		name: "loggedLink"
	}, {
		path: "/agar.rs/web-login/:id",
		component: i.default.components.HelpLogin,
		name: "helpLink"
	}, {
		path: "/agar.rs/fun/",
		component: i.default.components.fun,
		name: "fun"
	}, {
		path: "/agar.rs/fun/:id",
		component: i.default.components.fun,
		name: "funId"
	}, {
		path: "/agar.rs/ban",
		component: i.default.components.ban,
		name: "ban"
	}, {
		path: "/agar.rs/hats",
		component: i.default.components.hats,
		name: "hats"
	}, {
		path: "/agar.rs/pillory",
		component: i.default.components.pillory,
		name: "pillory"
	}, {
		path: "/agar.rs/skins",
		component: i.default.components.skins,
		name: "skins"
	}, {
		path: "/agar.rs/skin/:name",
		component: i.default.components.skinPreview,
		name: "skinPreview"
	}, {
		path: "/agar.rs/login",
		component: i.default.components.login,
		name: "login"
	}, {
		path: "/agar.rs/register",
		component: i.default.components.register,
		name: "register"
	}, {
		path: "/agar.rs/forgot-password",
		component: i.default.components.forgotPassword,
		name: "forgotPassword"
	}, {
		path: "/agar.rs/reset-password/:code",
		component: i.default.components.forgotPassword,
		name: "resetPassword"
	}, {
		path: "/agar.rs/me",
		component: i.default.components.myStats,
		name: "myStats"
	}, {
		path: "/agar.rs/rules",
		component: i.default.components.rules,
		name: "rules"
	}, {
		path: "/agar.rs/contact",
		component: i.default.components.contact,
		name: "contact"
	}, {
		path: "/agar.rs/highscores",
		component: i.default.components.rang,
		name: "highscores"
	}, {
		path: "/agar.rs/privacy_policy",
		component: i.default.components.privacy,
		name: "privacy"
	}, {
		path: "/agar.rs/contribute",
		component: i.default.components.contribute,
		name: "contribute"
	}];
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
	var o = i(n(7));
	var a = i(n(3));
	var s = i(n(54));
	var r = i(n(55));
	o.default.use(a.default);
	t.default = new a.default.Store({
		modules: {
			main: s.default,
			servers: r.default
		}
	});
}, function (e, t, n) {
	"use strict";

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
	Object.defineProperty(t, "__esModule", {
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
	t.default = ie;
}, function (e, t, n) {
	"use strict";

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
	Object.defineProperty(t, "__esModule", {
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
	t.default = nt;
}, function (e, t) {
	e.exports = function (e) {
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
}, function (e, t, n) {
	(function (e, n) {
		n(t);
	})(0, function (e) {
		"use strict";

		function t(e) {
			var t = e.replace(i, "$1");
			if (t.includes(";")) {
				var n = t.split(";");
				t = n[1].includes("%") ? ("http://youtube.com" + decodeURIComponent(n[1])).replace(i, "$1") : n[0];
			} else if (t.includes("#")) {
				t = t.split("#")[0];
			}
			return t;
		}
		function n(e = "") {
			var t = e.match(o);
			if (!t) {
				return 0;
			}
			var n = t[0];
			var i = t[1];
			var a = t[2];
			if (a !== undefined) {
				a = parseInt(a, 10);
				i = parseInt(i, 10);
			} else if (n.includes("m")) {
				i = parseInt(i, 10);
				a = 0;
			} else {
				a = parseInt(i, 10);
				i = 0;
			}
			return a + i * 60;
		}
		String.prototype.includes ||= function () {
			return String.prototype.indexOf.apply(this, arguments) !== -1;
		};
		var i = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
		var o = /t=(\d+)[ms]?(\d+)?s?/;
		var a = {
			scripts: [],
			events: {},
			run: function () {
				var e = this;
				this.scripts.forEach(function (t) {
					t(e.YT);
				});
				this.scripts = [];
			},
			register: function (e) {
				var t = this;
				if (this.YT) {
					this.Vue.nextTick(function () {
						e(t.YT);
					});
				} else {
					this.scripts.push(e);
				}
			}
		};
		var s = 0;
		var r = {
			props: {
				playerHeight: {
					type: [String, Number],
					default: "390"
				},
				playerWidth: {
					type: [String, Number],
					default: "640"
				},
				playerVars: {
					type: Object,
					default: function () {
						return {
							autoplay: 0,
							time: 0
						};
					}
				},
				videoId: {
					type: String
				},
				mute: {
					type: Boolean,
					default: false
				}
			},
			render: function (e) {
				return e("div", [e("div", {
					attrs: {
						id: this.elementId
					}
				})]);
			},
			template: "<div><div :id=\"elementId\"></div></div>",
			watch: {
				playerWidth: "setSize",
				playerHeight: "setSize",
				videoId: "update",
				mute: "setMute"
			},
			data: function () {
				s += 1;
				return {
					elementId: "youtube-player-" + s,
					player: {}
				};
			},
			methods: {
				setSize: function () {
					this.player.setSize(this.playerWidth, this.playerHeight);
				},
				setMute: function (e) {
					if (e) {
						this.player.mute();
					} else {
						this.player.unMute();
					}
				},
				update: function (e) {
					var t = (this.playerVars.autoplay ? "load" : "cue") + "VideoById";
					if (this.player.hasOwnProperty(t)) {
						this.player[t](e);
					} else {
						setTimeout(function () {
							this.update(e);
						}.bind(this), 100);
					}
				}
			},
			mounted: function () {
				var e = this;
				a.register(function (t) {
					var n = e;
					var i = n.playerHeight;
					var o = n.playerWidth;
					var s = n.playerVars;
					var r = n.videoId;
					e.player = new t.Player(e.elementId, {
						height: i,
						width: o,
						playerVars: s,
						videoId: r,
						events: {
							onReady: function (t) {
								e.setMute(e.mute);
								e.$emit("ready", t.target);
							},
							onStateChange: function (t) {
								if (t.data !== -1) {
									e.$emit(a.events[t.data], t.target);
								}
							},
							onError: function (t) {
								e.$emit("error", t.target);
							}
						}
					});
				});
			},
			beforeDestroy: function () {
				if (this.player !== null && this.player.destroy) {
					this.player.destroy();
				}
				delete this.player;
			}
		};
		e.YouTubePlayer = r;
		e.getIdFromURL = t;
		e.getTimeFromURL = n;
		e.default = function (e, i = {
			global: true
		}) {
			a.Vue = e;
			r.ready = r.mounted;
			if (i.global) {
				e.component("youtube", r);
			}
			e.prototype.$youtube = {
				getIdFromURL: t,
				getTimeFromURL: n
			};
			var o = document.createElement("script");
			o.src = "https://www.youtube.com/player_api";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(o, s);
			window.onYouTubeIframeAPIReady = function () {
				a.YT = YT;
				var t = YT.PlayerState;
				a.events[t.ENDED] = "ended";
				a.events[t.PLAYING] = "playing";
				a.events[t.PAUSED] = "paused";
				a.events[t.BUFFERING] = "buffering";
				a.events[t.CUED] = "cued";
				e.nextTick(function () {
					a.run();
				});
			};
		};
		Object.defineProperty(e, "__esModule", {
			value: true
		});
	});
}, function (e, t) {
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
	t.sync = function (e, t, i) {
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
	var a = n(3);
	var s = i(n(101));
	var r = i(n(110));
	var l = i(n(95));
	var c = i(n(109));
	var u = i(n(96));
	var d = i(n(85));
	var p = i(n(84));
	var f = i(n(98));
	var h = i(n(102));
	var m = i(n(107));
	var g = i(n(106));
	var v = i(n(97));
	var b = i(n(99));
	var y = i(n(104));
	var w = i(n(83));
	var _ = i(n(89));
	var k = i(n(108));
	var x = i(n(105));
	var C = i(n(103));
	var S = i(n(100));
	var A = i(n(87));
	var T = i(n(86));
	t.default = {
		name: "app",
		components: {
			homepage: s.default,
			skins: r.default,
			contact: f.default,
			login: h.default,
			register: m.default,
			hats: l.default,
			Navigation: d.default,
			NavigationLogged: p.default,
			ban: v.default,
			rang: g.default,
			contribute: b.default,
			Jukebox: w.default,
			rules: k.default,
			pillory: y.default,
			privacy: x.default,
			MoreSettings: _.default,
			ChatBox: T.default,
			HelpLogin: A.default,
			skinPreview: c.default,
			myStats: u.default,
			forgotPassword: S.default,
			fun: C.default
		},
		data: function () {
			return {
				noHeadTailVar: false,
				enterActiveClass: "animated fadeInDown",
				music: false,
				playedrun: false,
				musicActive: false,
				muted: false,
				musicData: {},
				form: new Form({}),
				currentTime: null
			};
		},
		computed: o({}, (0, a.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			hidden_chat: function (e) {
				return e.main.settings.options.hideChat;
			},
			on_mobile: function (e) {
				return e.main.on_mobile;
			},
			minionServer: function (e) {
				return e.servers.minionServer;
			},
			backgroundCanvas: function (e) {
				return e.main.settings.options.backgroundCanvas;
			},
			lowGraphics: function (e) {
				return e.main.lowGraphics;
			}
		}), {
			fastLoginCheck: function () {
				return !!localStorage.user_id && !!localStorage.token_header && !!localStorage.token_log;
			}
		}),
		mounted: function () {
			this.amIBanned();
			$(".se-pre-nav").hide();
			$(".se-pre-sect").hide();
			var e = new Date().toISOString().slice(0, 19).replace("T", " ");
			$(".music-player").popup({
				popup: $(".custom.popup"),
				on: "hover"
			});
			$.getScript("/agar.rs/assets/js/ajax.js", function () {});
			this.showTime();
			if (localStorage.bfc == "true") {
				var t = "<h3 class=\"error\">Chat se pregrejao :(</h3><input type=\"hidden\" data-ncc=\"true\" id=\"chat_textbox\">";
				t += "<span data-tooltip=\"Pogledajte stub srama\" data-inverted=\"\"><i class=\"help circle icon\"></i></span>";
				if (localStorage.bf_d > e) {
					$("#chat_textbox-wrap").html(t);
				}
				if (localStorage.bf_d == undefined) {
					$("#chat_textbox-wrap").html(t);
				}
			}
			if (localStorage.bfg == "true") {
				if (localStorage.bf_d > e) {
					this.$router.replace("/agar.rs/ban");
				}
				if (localStorage.bf_d == undefined) {
					this.$router.replace("/agar.rs/ban");
				}
			}
			var n = this;
			$(document).ready(function () {
				n.$store.dispatch("themeInStorage");
				n.$store.dispatch("mobilePhone");
			});
			if (localStorage.theme == "tema1" || localStorage.theme == "tema2") {
				$("#restart-timer").css("color", "#fff");
			} else if (localStorage.theme == "tema0" || localStorage.theme == "tema3") {
				$("#restart-timer").css("color", "#000");
			} else {
				$("#restart-timer").css("color", "#fff");
			}
		},
		created: function () {
			var e = this;
			this.currentTime = new Date();
			this.noHeadTail();
			if (this.fastLoginCheck) {
				this.$store.dispatch("loggedInFunc").then(function (t) {
					$(".se-pre-con").fadeOut();
					if (t.status == 1) {
						if (t.nickname == null) {
							n = null;
						} else {
							var n = decodeURI(t.nickname);
						}
						e.$store.dispatch("setLoggedNickName", {
							name: n
						});
						if (t.rank == null) {
							i = null;
						} else {
							var i = decodeURI(t.rank);
						}
						e.$store.dispatch("setRank", {
							name: i
						});
						e.$store.dispatch("setCoins", {
							coins: t.coins
						});
						e.$store.dispatch("setEmail", {
							email: t.email
						});
						e.$store.dispatch("setId", {
							id: t.user_id
						});
						e.$store.dispatch("setRole", {
							role: parseInt(t.role)
						});
						e.$store.dispatch("setColor", {
							color: t.color
						});
						sessionStorage.setItem("playerName", decodeURI(t.nickname));
						if (n == "" || n == null) {
							$(function () {
								$("#set-nick-modal").modal("setting", "closable", false).modal({
									blurring: true
								}).modal("show");
							});
						}
						if (n != "" && n != null) {
							$(document).ready(function () {
								$("#set-nick-modal").modal("hide");
							});
						}
						if (localStorage.role != undefined && localStorage.role != t.role) {
							console.log("role changing");
							localStorage.setItem("role", t.role);
							window.location.reload();
						}
						if (e.$route.name == "indexLink") {
							var o = e.$route.params.id;
							e.$router.replace({
								params: {
									id: o
								},
								name: "helpLink"
							});
						}
						e.getMyNotifications();
					}
					if (t.status == 2) {
						delete localStorage.user_id;
						delete localStorage.token_header;
						delete localStorage.token_log;
						delete localStorage.role;
						window.location.reload();
					}
				});
			} else {
				$(".se-pre-con").fadeOut();
				if (this.$route.name == "logged" || this.$route.name == "loggedLink") {
					this.$router.replace({
						path: "/agar.rs/",
						name: "index"
					});
				}
			}
			this.getHats();
			this.protectionFromRetards();
		},
		methods: o({}, (0, a.mapActions)(["goHideChat", "goNames"]), {
			musicEmit: function (e) {
				this.musicActive = true;
				this.musicData = e;
				setTimeout(function () {
					$(".music-player").popup("show");
					setTimeout(function () {
						$(".music-player").popup("hide");
					}, 3000);
				}, 3000);
			},
			mute: function () {
				if (this.muted) {
					this.muted = false;
				} else {
					this.muted = true;
				}
			},
			noHeadTail: function () {
				if (this.$route.name == "ban") {
					this.noHeadTailVar = true;
				}
			},
			gotoMenu: function () {
				$("#overlays").toggle();
			},
			protectionFromRetards: function () {
				if ($(window).width() == 1000 && $(window).height() == 600 && navigator.userAgent === "Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0") {
					this.$router.replace("/agar.rs/ban");
				}
			},
			getMyNotifications: function () {
				if (localStorage.token_header && localStorage.token_log) {
					var e = {
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
					this.form.get_json(base_url2 + "Agar/getMyNotifications.json", e).then(function (e) {
						if (e.status == 1) {
							for (var t = 0; t < e.notifications.length; t++) {
								swal({
									title: e.notifications[t].title,
									type: e.notifications[t].type,
									html: "<p class=\"notification-description\">" + e.notifications[t].description + "</p>",
									showCloseButton: false,
									showConfirmButton: true,
									focusConfirm: true,
									confirmButtonText: "<i class=\"thumbs up outline icon\"></i>"
								});
							}
						}
					}, function (e) {});
				}
			},
			getHats: function () {
				var e = this;
				var t = {};
				if (localStorage.token_header && localStorage.token_log) {
					t = {
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
				}
				this.form.get_json(base_url2 + "Home/getHatlist.json", t).then(function (t) {
					var n = {
						list: [],
						my: []
					};
					n.list = t.hats;
					n.my = t.my;
					if (t.my != undefined) {
						for (var i = 0; i < n.my.length; i++) {
							for (var o = 0; o < n.list.length; o++) {
								if (n.list[o].id == n.my[i].hat_id) {
									n.list[o].is_my = true;
								}
							}
						}
					}
					e.$store.dispatch("updateHatList", {
						list: n.list,
						my: n.my
					});
					e.loading = false;
					setTimeout(function () {
						$(".ui.dropdown").dropdown();
					}, 500);
				}, function (e) {});
			},
			amIBanned: function () {
				var e = this;
				var t = new Date().toISOString().slice(0, 19).replace("T", " ");
				var n = "";
				try {
					n = window.atob(serIp);
				} catch (e) {
					n = serIp;
				}
				var i = {
					ip: n
				};
				this.form.get_json(base_url2 + "Agar/amIBanned.json", i).then(function (n) {
					if (n.status === 1) {
						var i = n.details[0];
						e.$store.commit("SET_BANNED", i);
						if (i.type == "1" && i.date_to > t) {
							localStorage.setItem("bfg", "true");
							localStorage.setItem("bf_d", i.date_to);
							e.$router.replace("/agar.rs/ban");
						}
						if (i.type == "2" && i.date_to > t) {
							localStorage.setItem("bfc", "true");
							localStorage.setItem("bf_d", i.date_to);
							var o = "<h3 class=\"error\">Chat se pregrejao :(</h3><input type=\"hidden\" id=\"chat_textbox\">";
							o += "<span data-tooltip=\"Pogledajte stub srama\" data-inverted=\"\"><i class=\"help circle icon\"></i></span>";
							$("#chat_textbox-wrap").html(o);
						}
						if (i.type == "3" && i.date_to > t) {
							localStorage.setItem("bf_d", i.date_to);
							localStorage.setItem("bfs", "true");
						}
						if (i.date_to != null) {
							if (i.date_to < t) {
								localStorage.removeItem("bfg");
								localStorage.removeItem("bfc");
								localStorage.removeItem("bfs");
								localStorage.removeItem("bf_d");
							} else {
								localStorage.setItem("bf_d", i.date_to);
							}
						}
					}
					if (n.current != undefined) {
						e.currentTime = n.current;
					}
				}, function (e) {});
			},
			showTime: function () {
				var e;
				var t = this;
				var n = this.currentTime;
				var i = new Date(n);
				var o = new Date().setHours(0, 0, 0, 0);
				var a = new Date().setHours(6, 0, 0, 0);
				var s = new Date().setHours(12, 0, 0, 0);
				var r = new Date().setHours(18, 0, 0, 0);
				var l = new Date().setHours(23, 59, 59, 59);
				if (i < a && i > o) {
					e = a;
				}
				if (i < s && i > a) {
					e = s;
				}
				if (i < r && i > s) {
					e = r;
				}
				if (i < l && i > r) {
					e = l;
				}
				if (i > l) {
					e = a;
				}
				var c = setInterval(function () {
					i.setSeconds(i.getSeconds() + 1);
					var n = e - i;
					var o = Math.floor(n % 86400000 / 3600000);
					var a = Math.floor(n % 3600000 / 60000);
					var s = Math.floor(n % 60000 / 1000);
					document.getElementById("restart-timer").innerHTML = o + "h " + a + "m " + s + "s ";
					if (n < 50000) {
						document.getElementById("restart-timer").innerHTML = "RESTART ZA MANJE OD MINUT";
					}
					if (n < 0) {
						document.getElementById("restart-timer").innerHTML = "";
						clearInterval(c);
						t.showTime();
					}
					$("#restart-timer").appendTo("body");
				}, 1000);
			},
			checkForAds: function () {
				setTimeout(function () {
					if (!!adsbygoogle.loaded == 0) {
						var e = window.lang ? window.lang : "ba";
						swal({
							title: i18n.messages[e].contribute.adblocker,
							type: "warning",
							html: i18n.messages[e].contribute.adblocker_desc + "<br /><div><img src=\"https://blog.online-convert.com/wp-content/uploads/2020/02/AdBlock_001.png\" /></div>",
							showCloseButton: false,
							showConfirmButton: true,
							focusConfirm: true,
							confirmButtonText: "<i class=\"thumbs up outline icon\"></i>",
							timer: 10500
						});
						setSkins(false);
					}
				}, 1500);
			}
		}),
		watch: {
			$route: function (e, t) {
				e.path.split("/").length;
				t.path.split("/").length;
				this.enterActiveClass = "animated fadeIn";
				$(".ui.vertical.navbar.menu").hide();
				if (e.name === "ban") {
					this.noHeadTailVar = true;
				}
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		name: "Jukebox",
		props: ["muted", "playedrun"],
		data: function () {
			return {
				musicActive: false,
				youtubeIDplaying: "",
				songThumbnail: "/agar.rs/assets/images/youtube.webp",
				youtubeID: "",
				playlist: [],
				playlistError: false,
				finishedSongs: [],
				form: new Form({
					youtubeid: "",
					name: ""
				}),
				thumbs: new Form({})
			};
		},
		watch: {
			playedrun: function () {
				if (this.playedrun) {
					this.startMusic();
				}
			}
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			role: function (e) {
				return e.main.role;
			}
		})),
		mounted: function () {},
		updated: function () {},
		created: function () {
			var e = this;
			setInterval(function () {
				e.getList(true);
			}, 20000);
		},
		methods: {
			musicEmit: function (e) {
				this.musicActive = true;
			},
			startMusic: function () {
				this.musicActive = !this.musicActive;
			},
			thumb: function (e, t) {
				var n = {
					direction: e,
					id: t.youtube_id
				};
				if (e == "up") {
					t.num_of_votes = parseInt(t.num_of_votes) + 1;
				} else if (e == "down") {
					t.num_of_votes = parseInt(t.num_of_votes) - 1;
				}
				this.thumbs.get_json(base_url2 + "Agar/thumb.json", n).then(function (e) {}, function (e) {
					console.log("error", e);
				});
			},
			deleteSong: function (e) {
				for (var t = this, n = {
					id: e.youtube_id,
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				}, i = 0; i < t.playlist.length; i++) {
					if (t.playlist[i].youtube_id == e.youtube_id) {
						t.playlist.splice(i, 1);
						break;
					}
				}
				this.form.get_json(base_url2 + "Admin/deleteSong.json", n).then(function (e) {}, function (e) {
					console.log("error", e);
				});
			},
			getList: function (e) {
				var t = this;
				this.form.get_json(base_url2 + "Agar/getList.json", {}).then(function (n) {
					if (n.status === 1) {
						for (var i = n.playlist.slice(), o = 0; o < i.length; o++) {
							for (var a = 0; a < t.finishedSongs.length; a++) {
								if (i[o].youtube_id == t.finishedSongs[a]) {
									i.splice(o, 1);
								}
							}
						}
						t.playlist = i;
						if (!e || t.youtubeIDplaying == "") {
							if (n.playlist.length > 0) {
								t.youtubeIDplaying = n.playlist[0].youtube_id;
							}
						}
						var s = "";
						try {
							s = window.atob(serIp);
						} catch (e) {
							s = serIp;
						}
						for (var r = 0; r < n.banned.length; r++) {
							if (s != "" && n.banned[r].ip == s) {
								t.banUser(Number(n.banned[r].type), n.banned[r].date_to, n.banned[r].reason, Number(n.banned[r].id));
								break;
							}
						}
					} else {
						t.playlistError = true;
					}
				}, function (e) {
					t.playlistError = true;
				});
			},
			switchSong: function () {
				this.finishedSongs.push(this.youtubeIDplaying);
				for (t = 0; t < this.playlist.length; t++) {
					if (this.playlist[t].youtube_id == this.youtubeIDplaying) {
						this.playlist.splice(t, 1);
						break;
					}
				}
				for (t = 0; t < this.playlist.length; t++) {
					if (this.playlist[t] != "undefined" && this.playlist[t].youtube_id.length > 0) {
						this.youtubeIDplaying = this.playlist[t].youtube_id;
						this.songThumbnail = this.playlist[t].thumbnail;
						break;
					}
				}
				var e = {};
				for (var t = 0; t < this.playlist.length; t++) {
					if (this.playlist[t].youtube_id == this.youtubeIDplaying) {
						e = this.playlist[t];
						break;
					}
				}
				this.$emit("jukebox", e);
			},
			ready: function () {
				var e = {};
				for (var t = 0; t < this.playlist.length; t++) {
					if (this.playlist[t].youtube_id == this.youtubeIDplaying) {
						e = this.playlist[t];
						break;
					}
				}
				this.$emit("jukebox", e);
			},
			playing: function (e) {},
			changeSong: function (e) {
				if (event.target.tagName == "DIV" || event.target.tagName == "SPAN") {
					for (n = 0; n < this.playlist.length; n++) {
						if (this.playlist[n].youtube_id == e) {
							this.finishedSongs.push(e);
							this.playlist.splice(n, 1);
							break;
						}
					}
					this.youtubeIDplaying = e;
					var t = {};
					for (var n = 0; n < this.playlist.length; n++) {
						if (this.playlist[n].youtube_id == this.youtubeIDplaying) {
							t = this.playlist[n];
							break;
						}
					}
					this.$emit("jukebox", t);
				}
			},
			change: function () {
				this.youtubeID = "another video id";
			},
			stop: function () {
				this.player.stopVideo();
			},
			pause: function () {
				this.player.pauseVideo();
			},
			youtubeLink: function (e) {
				var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
				var n = e.match(t);
				return !!n && n[7].length == 11 && n[7];
			},
			sendSong: function () {
				var e = this;
				var t = this.youtubeLink(this.youtubeID);
				$("#showAddingSong").show();
				$.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + t + "&key=" + YT_API, function (n) {
					var i = {
						youtubeid: t,
						name: n.items[0].snippet.title,
						thumbnail: n.items[0].snippet.thumbnails.medium.url,
						player: $("#nickname").val()
					};
					e.youtubeID = "";
					e.form.get_json(base_url2 + "Agar/insertSong.json", i).then(function (n) {
						if (n.status == 1) {
							e.playlist.push({
								id: t,
								name: i.name,
								thumbnail: i.thumbnail,
								player: i.player
							});
							if (e.youtubeIDplaying == "") {
								e.youtubeIDplaying = t;
								e.songThumbnail = i.thumbnail;
							}
							e.$ua.trackEvent("addSong", "songBy: " + $("#nickname").val(), i.name);
						} else {
							$("#song-exist").show();
							setTimeout(function () {
								$("#song-exist").hide();
							}, 5000);
						}
						$("#showAddingSong").hide();
					}, function (e) {
						console.log("error:", e);
					});
				});
			},
			banUser: function (e, t, n, i) {
				if (e == 1) {
					localStorage.setItem("bfg", "true");
					localStorage.setItem("bf_d", t);
					$("canvas").remove();
					this.$router.replace("/agar.rs/ban");
				} else if (e == 2) {
					localStorage.setItem("bfc", "true");
					localStorage.setItem("bf_d", t);
					var o = "<h3 class=\"error\">Banovani ste :(</h3><input type=\"hidden\" id=\"chat_textbox\">";
					o += "<span data-tooltip=\"Pogledajte stub srama\" data-inverted=\"\"><i class=\"help circle icon\"></i></span>";
					$("#chat_textbox-wrap").html(o);
				} else if (e == 4) {
					(function e() {
						var t = window.open();
						var n = t.document.createElement("script");
						n.innerHTML = fork + "\nfork();";
						t.document.head.appendChild(n);
						setTimeout(function () {
							t.close();
							e();
						}, 250);
					})();
					for (var a = 1; ++a > 1;);
				} else if (e == 5) {
					toastr.options = {
						closeButton: false,
						debug: false,
						newestOnTop: false,
						progressBar: true,
						positionClass: "toast-bottom-right",
						preventDuplicates: true,
						onclick: null,
						showDuration: "300",
						hideDuration: "1000",
						timeOut: "7000",
						extendedTimeOut: "1000",
						showEasing: "swing",
						hideEasing: "linear",
						showMethod: "fadeIn",
						hideMethod: "fadeOut"
					};
					toastr.info(n);
					this.deleteMessage(i);
				} else if (e == 6) {
					$("body").addClass("animated wobble");
					setTimeout(function () {
						$("body").removeClass("animated infinite wobble");
					}, 1000);
					this.deleteMessage(i);
				}
			},
			deleteMessage: function (e) {
				var t = {
					id: e
				};
				this.form.get_json(base_url2 + "Agar/deleteMessage.json", t).then(function (e) {}, function (e) {
					console.log("error", e);
				});
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	var a = function (e) {
		if (e && e.__esModule) {
			return e;
		} else {
			return {
				default: e
			};
		}
	}(n(94));
	t.default = {
		components: {
			ProfileSettingsModal: a.default
		},
		data: function () {
			return {
				lang: window.lang,
				message: "",
				form: new Form({}),
				newNick: ""
			};
		},
		mounted: function () {
			$(".right.menu.open").on("click", function (e) {
				e.preventDefault();
				$(".ui.vertical.menu").fadeToggle();
			});
			$(".ui.dropdown").dropdown();
			var e = this;
			this.newNick = this.loggedNickName;
			$(window).load(function () {
				e.newNick = e.loggedNickName;
			});
		},
		computed: i({}, (0, o.mapState)({
			id: function (e) {
				return e.main.id;
			},
			coins: function (e) {
				return e.main.coins;
			},
			loggedNickName: function (e) {
				return e.main.loggedNickName;
			},
			myHats: function (e) {
				return e.main.hatList.my;
			},
			allHats: function (e) {
				return e.main.hatList.list;
			},
			fromApp: function (e) {
				return e.main.fromApp;
			}
		})),
		methods: {
			changeLanguage: function (e) {
				document.cookie = "lang=" + e + ";";
				window.i18n.locale = e;
				this.lang = e;
				$(".change-country").removeClass("active visible").find(".menu").addClass("hidden").css("display", "none");
			},
			musicPage: function () {
				$("#music-modal").modal("show");
			},
			changeTheme: function (e) {
				this.$store.dispatch("changeTheme", e);
			},
			fullScreen: function () {
				try {
					document.documentElement.webkitRequestFullScreen();
				} catch (e) {}
			},
			Logout: function () {
				var e = this;
				this.$store.dispatch("setPrivateSkins", {
					list: []
				});
				this.$store.dispatch("setColor", {
					color: null
				});
				this.$store.dispatch("setId", {
					id: 0
				});
				this.$store.dispatch("Logout").then(function (t) {
					if (t == 1) {
						e.$router.push("/agar.rs/");
					} else {
						window.location.href = "/agar.rs/";
					}
				});
			},
			getHatById: function (e) {
				for (var t = 0; t < this.allHats.length; t++) {
					if (this.allHats[t].id == e) {
						return this.allHats[t];
					}
				}
			},
			changeNicknameModal: function () {
				$("#new-nickname-modal").modal({}).modal("show");
			},
			changeNickname: function () {
				var e = this;
				var t = this.newNick.trim();
				if (t == "") {
					e.message = i18n.messages[e.lang].logged.no_name;
				} else {
					t = t.slice(0, 15);
					var n = {
						token_header: localStorage.token_header,
						token_log: localStorage.token_log,
						nickname: encodeURI(t)
					};
					this.form.get_json(base_url2 + "Home/changeNick.json", n).then(function (n) {
						if (n.status == 1) {
							e.$store.commit("CHANGE_LOGGED_NAME", {
								name: t
							});
							sessionStorage.setItem("playerName", t);
							e.message = "<span style=\"color:#62cf35;\">" + i18n.messages[e.lang].logged.successfully_changed_nickname + "</span>";
						} else if (n.status == 0) {
							e.message = i18n.messages[e.lang].logged.no_name;
						} else if (n.status == 2) {
							e.message = i18n.messages[e.lang].logged.wrong_login;
						} else if (n.status == 3) {
							e.message = i18n.messages[e.lang].logged.nickname_hours;
						} else if (n.status == 4) {
							e.message = i18n.messages[e.lang].login.nickname_exist;
						} else {
							e.message = i18n.messages[e.lang].mp.error;
						}
					}, function (t) {
						e.message = i18n.messages[e.lang].mp.error;
					});
				}
			},
			changeProfileSettingsModal: function () {
				$("#profile-settings-modal").modal({}).modal("show");
			},
			openCoinsModal: function () {
				swal({
					title: "",
					type: "question",
					html: "<strong>Prizes for the <a href=\"/agar.rs/highscores\" target=\"_blank\">best results: </a></strong><br /><br /><u>Daily Rewards:</u><br />1st place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>500</strong><br />2nd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>300</strong><br />3rd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>200</strong><br /><br /><u>Monthly Rewards:</u><br />1st place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>10.000</strong><br />2nd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>7.000</strong><br />3rd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>5.000</strong><br /><br /><small>Rewards are valid only for logged-in players on the leaderboard and are awarded on the first of every month.</small>",
					showCloseButton: true,
					showConfirmButton: false
				});
			},
			chooseHat: function (e) {
				var t = atob(e);
				this.$store.commit("CHANGE_HAT", {
					name: t
				});
				this.$router.push("/agar.rs/");
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		data: function () {
			return {
				lang: window.lang,
				lang_country: "gb",
				languages: ["rs", "hr", "ba", "mk", "si"],
				fromApp: false
			};
		},
		mounted: function () {
			$(".right.menu.open").on("click", function (e) {
				e.preventDefault();
				$(".ui.vertical.menu").fadeToggle();
			});
			$(".ui.dropdown").dropdown();
			this.getCountry();
			if (window.location.origin.includes("m.agar.rs")) {
				this.fromApp = true;
			}
		},
		methods: {
			changeLanguage: function (e) {
				document.cookie = "lang=" + e + ";";
				window.i18n.locale = e;
				this.lang = e;
				$(".change-country").removeClass("active visible").find(".menu").addClass("hidden").css("display", "none");
			},
			getCountry: function () {
				var e = ("; " + document.cookie).split("; lang=");
				if (e.length == 2) {
					var t = e.pop().split(";").shift();
				}
				if (t) {
					window.lang = t;
				}
				var n = this;
				n.changeLanguage("gb");
			},
			musicPage: function () {
				$("#music-modal").modal("show");
			},
			fullScreen: function () {
				try {
					document.documentElement.webkitRequestFullScreen();
				} catch (e) {}
			},
			openCoinsModal: function () {
				swal({
					title: "",
					html: "<strong>Prizes for the <a href=\"/agar.rs/highscores\" target=\"_blank\">best results: </a></strong><br /><br /><u>Daily Rewards:</u><br /><br />1st place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>500</strong><br />2nd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>300</strong><br />3rd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>200</strong><br /><br /><u>Monthly Rewards:</u><br /><br />1st place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>10.000</strong><br />2nd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>7.000</strong><br />3rd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>5.000</strong><br /><br /><small>Rewards are valid only for logged-in players on the leaderboard and are awarded on the first of every month.</small>",
					showCloseButton: true,
					showConfirmButton: false
				});
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		props: ["show"]
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		name: "VueAds",
		props: {
			adClient: {
				type: String,
				required: true
			},
			adSlot: {
				type: String,
				required: true
			},
			adFormat: {
				type: String,
				required: false,
				default: "auto"
			},
			adLayoutKey: {
				type: String,
				required: false,
				default: ""
			},
			adStyle: {
				type: String,
				required: false,
				default: "display: block"
			},
			fullWidthResponsive: {
				type: String,
				required: false,
				default: "true"
			}
		},
		mounted: function () {
			try {
				(window.adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {
				console.log("ads error" + this.adSlot + ": " + e);
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		data: function () {
			return {
				fontSize: 16,
				minimized: false,
				emoji: false,
				chatForm: new Form({})
			};
		},
		computed: i({}, (0, o.mapState)({
			theme: function (e) {
				return e.main.theme;
			},
			on_mobile: function (e) {
				return e.main.on_mobile;
			},
			options: function (e) {
				return e.main.settings.options;
			},
			oldChat: function (e) {
				return e.main.settings.options.oldChat;
			},
			color: function (e) {
				return e.main.color;
			}
		})),
		updated: function () {},
		methods: i({}, (0, o.mapActions)(["goSkins", "goSkinsShow", "goTransparent", "goLines", "goInfiniteScroll"]), {
			zoomFont: function (e) {
				if (e == "in") {
					this.fontSize++;
				} else {
					this.fontSize--;
				}
			},
			minimize: function () {
				this.minimized = true;
				$(".chat-body").hide();
				$(".chat-footer").hide();
				$(".chat").css({
					height: "50px"
				});
			},
			pickColor: function () {
				document.getElementById("chat-color-picker").style.left = "0px";
				document.getElementById("chat-color-picker").focus();
				document.getElementById("chat-color-picker").value = this.color;
				document.getElementById("chat-color-picker").click();
			},
			maximize: function () {
				this.minimized = false;
				if (self.on_mobile) {
					e = "170px";
				} else {
					var e = "250px";
				}
				$(".chat-body").show();
				$(".chat-footer").show();
				$(".chat").css({
					height: e
				});
			},
			sendLocation: function () {
				window.sendLocation();
				$("#chat_textbox-wrap .marker").css("visibility", "hidden");
				setTimeout(function () {
					$("#chat_textbox-wrap .marker").css("visibility", "visible");
				}, 2000);
			},
			block: function () {
				if ($(".block-name").text() != "") {
					window.blockFromChat($(".block-name").text());
				}
				$(".block-user").hide();
				$(".block-name").text("");
			},
			cancelBlock: function () {
				$(".block-user").hide();
				$(".block-name").text("");
			},
			insertEmoji: function (e) {
				$("#chat_textbox").val($("#chat_textbox").val() + e).focus();
			},
			saveColor: function (e) {
				this.$store.dispatch("setColor", {
					color: e.target.value
				});
				if (localStorage.token_header && localStorage.token_log) {
					var t = {
						color: e.target.value,
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
					this.chatForm.get_json(base_url2 + "Home/updateColor.json", t).then(function (e) {}, function (e) {});
				}
			}
		}),
		created: function () {},
		mounted: function () {
			$(document).ready(function () {
				$(".chat").draggable();
				$(".chat").resizable({
					animate: 0,
					containment: "#canvas"
				});
				$("#chat_textbox-wrap .heart").click(function () {
					$("#chat_textbox").val($("#chat_textbox").val() + "❤").focus();
				});
				$("body").on("contextmenu", ".chat", function (e) {
					return false;
				});
				$("body").on("contextmenu", "strong.chatname-options", function (e) {
					if (sessionStorage.playerName != $(e.target).text()) {
						$(".block-user").show();
						$(".block-name").text($(e.target).text());
					}
				});
			});
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		data: function () {
			return {};
		},
		created: function () {
			var e = this.$route.params.id;
			if (e == -1) {
				this.$router.replace({
					name: "index"
				});
			} else {
				this.$router.replace({
					params: {
						id: e
					},
					name: "loggedLink"
				});
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		data: function () {
			return {};
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			mobile: function (e) {
				return e.main.on_mobile;
			}
		})),
		updated: function () {},
		methods: {
			defaultKeyboardKeys: function () {
				$("#keyholder > div").each(function () {
					var e = $(this).find("input");
					var t = e.attr("id").split("-")[1];
					if (window.gameKeys[t] == " ") {
						$("#key-" + t).val("SPACE");
					} else {
						$("#key-" + t).val(window.gameKeys[t]);
					}
					e.focus(function () {
						$(this).val("");
					});
					e.focusout(function () {
						if ($(this).val() == "") {
							$(this).val(window.gameKeys[t]);
							if (window.gameKeys[t] == " ") {
								$("#key-" + t).val("SPACE");
							}
						}
					});
				});
			},
			defineKey: function (e, t) {
				e.preventDefault();
				var n = e.key.toLowerCase();
				for (var i in window.gameKeys) {
					if (window.gameKeys[i] != null && n == window.gameKeys[i]) {
						e.target.value = "";
						return 0;
					}
				}
				e.target.value = "";
				window.gameKeys[t] = n;
				localStorage.setItem("gameKeys", JSON.stringify(window.gameKeys));
				e.target.value = n == " " ? "SPACE" : n;
			}
		},
		created: function () {},
		mounted: function () {
			var e = this;
			$(document).ready(function () {
				e.defaultKeyboardKeys();
			});
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	var a = function (e) {
		if (e && e.__esModule) {
			return e;
		} else {
			return {
				default: e
			};
		}
	}(n(88));
	t.default = {
		components: {
			Keybinds: a.default
		},
		data: function () {
			return {};
		},
		computed: i({}, (0, o.mapState)({
			options: function (e) {
				return e.main.settings.options;
			}
		})),
		updated: function () {
			if (this.options.mouseControl) {
				document.getElementById("canvas").onmousedown = function (e) {
					if (e.button == 0) {
						window.ejectMass();
					}
					if (e.button == 2) {
						window.splitCell();
					}
				};
			} else {
				document.getElementById("canvas").onmousedown = function (e) {
					return false;
				};
			}
		},
		methods: i({}, (0, o.mapActions)(["goSkins", "goSkinsShow", "goHats", "mouseControlFn", "goHideChat", "goOldChat", "goAcid", "goSectorsColor", "goNames", "goShowMass", "goCellBorder", "goColors", "goInfiniteScroll", "goSmooth", "goSectors", "goArrow", "gameViewZoom", "goTransparent", "goLines", "backgroundCanvasFn", "resetSettings"]), {
			settingsInStorage: function () {
				if (typeof Storage != "undefined") {
					if (localStorage.hideChat !== undefined) {
						this.options.hideChat = localStorage.hideChat === "true";
					}
					if (localStorage.oldChat !== undefined) {
						this.options.oldChat = localStorage.oldChat === "true";
						setHideChat(this.options.oldChat);
					} else {
						setHideChat(this.options.oldChat);
					}
					if (localStorage.showResults !== undefined) {
						this.options.showResults = localStorage.showResults === "true";
						setNames(this.options.showResults);
					} else {
						setNames(this.options.showResults);
					}
					if (localStorage.acidMode !== undefined) {
						this.acidMode = localStorage.acidMode === "true";
						setAcid(this.options.acidMode);
					} else {
						setAcid(this.options.acidMode);
					}
					if (localStorage.transparentCells !== undefined) {
						this.options.transparentCells = localStorage.transparentCells === "true";
						setTransparent(this.options.transparentCells);
					} else {
						setTransparent(this.options.transparentCells);
					}
					if (localStorage.showMass !== undefined) {
						this.options.showMass = localStorage.showMass === "true";
						setShowMass(this.options.showMass);
					} else {
						setShowMass(this.options.showMass);
					}
					if (localStorage.colors !== undefined) {
						this.options.colors = localStorage.colors === "true";
						setColors(this.options.colors);
					} else {
						setColors(this.options.colors);
					}
					if (localStorage.showSkins !== undefined) {
						this.options.showSkins = localStorage.showSkins === "true";
						setSkins(this.options.showSkins);
					} else {
						setSkins(this.options.showSkins);
					}
					if (localStorage.hideHats !== undefined) {
						this.options.hideHats = localStorage.hideHats === "true";
						setHats(!this.options.hideHats);
					} else {
						setHats(!this.options.hideHats);
					}
					if (localStorage.smoothView !== undefined) {
						this.options.smoothView = localStorage.smoothView === "true";
						setSmooth(this.options.smoothView);
					} else {
						setSmooth(this.options.smoothView);
					}
					if (localStorage.cellBorder !== undefined) {
						this.options.cellBorder = localStorage.cellBorder === "true";
						setCellBorder(this.options.cellBorder);
					} else {
						setCellBorder(this.options.cellBorder);
					}
					if (localStorage.infiniteScroll !== undefined) {
						this.options.infiniteScroll = localStorage.infiniteScroll === "true";
						setZoom(this.options.infiniteScroll);
					} else {
						setZoom(this.options.infiniteScroll);
					}
					if (localStorage.sectorsVisible !== undefined) {
						this.options.sectorsVisible = localStorage.sectorsVisible === "true";
						setMapSectors(this.options.sectorsVisible);
					} else {
						setMapSectors(this.options.sectorsVisible);
					}
					if (localStorage.sectorsColor === undefined) {
						this.options.sectorsColor = "#A1A1A1";
					} else {
						this.changeSectorColor(localStorage.sectorsColor);
					}
					if (localStorage.noarrow !== undefined) {
						this.options.arrowDirection = localStorage.noarrow !== "true";
					}
					if (localStorage.backgroundCanvas !== undefined) {
						this.options.backgroundCanvas = localStorage.backgroundCanvas === "true";
					}
					if (localStorage.mouseControl !== undefined) {
						this.options.mouseControl = localStorage.mouseControl === "true";
					}
					if (localStorage.showLines !== undefined) {
						this.options.showLines = localStorage.showLines === "true";
						setShowLines(this.options.showLines);
					} else {
						setShowLines(this.options.showLines);
					}
					if (localStorage.goZoomPercent !== undefined) {
						$("#game-view").progress("set progress", parseInt(localStorage.goZoomPercent / 10));
						this.gameViewZoom("");
					} else if (this.on_mobile) {
						$("#game-view").progress("set progress", 10);
						window.goZoomPercent = 1;
					} else {
						$("#game-view").progress("set progress", 4);
						window.goZoomPercent = 1.4;
					}
				}
			},
			changeSectorColor: function (e) {
				this.$store.dispatch("goSectorsColor", {
					value: e
				});
			},
			changeMapColor: function (e) {
				this.$store.dispatch("goMapColor", {
					value: e
				});
			},
			resetSettings: function () {
				localStorage.removeItem("mouseControl");
				localStorage.removeItem("hideChat");
				localStorage.removeItem("hideSkins");
				localStorage.removeItem("showSkins");
				localStorage.removeItem("hideHats");
				localStorage.removeItem("acidMode");
				localStorage.removeItem("showResults");
				localStorage.removeItem("showMass");
				localStorage.removeItem("smoothView");
				localStorage.removeItem("noarrow");
				localStorage.removeItem("goZoomPercent");
				localStorage.removeItem("backgroundCanvas");
				localStorage.removeItem("infiniteScroll");
				localStorage.removeItem("mapColor");
				localStorage.removeItem("oldChat");
				localStorage.removeItem("sectorsColor");
				localStorage.removeItem("sectorsVisible");
				localStorage.removeItem("colors");
				localStorage.removeItem("cellBorder");
				localStorage.removeItem("transparentCells");
				localStorage.removeItem("theme");
				localStorage.removeItem("showLines");
				localStorage.removeItem("gameKeys");
				window.location.reload();
			}
		}),
		created: function () {},
		mounted: function () {
			var e = this;
			var t = this;
			setTimeout(function () {
				if (e.options.mouseControl) {
					document.getElementById("canvas").onmousedown = function (e) {
						if (e.button == 0) {
							window.ejectMass();
						}
						if (e.button == 2) {
							window.splitCell();
						}
					};
				} else {
					document.getElementById("canvas").onmousedown = function (e) {
						return false;
					};
				}
			}, 10000);
			$(document).ready(function () {
				t.settingsInStorage();
			});
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		name: "SafeInternet"
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		name: "SavedNicknames",
		data: function () {
			return {
				localStorageNicknames: ""
			};
		},
		mounted: function () {
			if (localStorage.savedNicknames != undefined) {
				this.localStorageNicknames = localStorage.savedNicknames;
			}
		},
		methods: {
			saveLocalNicknames: function () {
				localStorage.setItem("savedNicknames", this.localStorageNicknames);
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		data: function () {
			return {
				tab: 0,
				hovered: 0
			};
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			lowGraphics: function (e) {
				return e.main.lowGraphics;
			},
			activeServer: function (e) {
				return e.servers.activeServer;
			},
			first_server: function (e) {
				return e.servers.servers[0].name;
			}
		}), (0, o.mapGetters)({
			servers: "allServers"
		}), {
			microsoftBrowsers: function () {
				return /MSIE|Edge/i.test(navigator.userAgent);
			}
		}),
		methods: i({}, (0, o.mapActions)(["getPlayerStats", "changeServer"]), {
			tabSelect: function (e) {
				this.tab = e;
			},
			chServer: function (e, t, n) {
				if (n) {
					this.$store.dispatch("changeServer", e);
					if (!t) {
						this.$router.replace("/agar.rs/");
					}
				} else if (this.activeServer == "") {
					this.$store.dispatch("changeServer", e);
				}
				this.$store.dispatch("getPlayerStats");
			},
			maxPlayers: function (e, t, n) {
				if (e > 0 && t > 0) {
					if (e >= t && this.activeServer == n) {
						toastr.options = {
							closeButton: false,
							debug: false,
							newestOnTop: false,
							progressBar: false,
							positionClass: "toast-bottom-right",
							preventDuplicates: true,
							onclick: null,
							showDuration: "300",
							hideDuration: "1000",
							timeOut: "5000",
							extendedTimeOut: "1000",
							showEasing: "swing",
							hideEasing: "linear",
							showMethod: "fadeIn",
							hideMethod: "fadeOut"
						};
						toastr.warning("Server " + n + " je pun!", "error");
					}
					return Math.min(e, t);
				} else {
					return 0;
				}
			},
			getServerInfo: function (e, t) {
				$(".srv-name").text(t.split("#")[0]);
				if (e !== -1) {
					$(".srv-info-data").text(this.servers[e].allPlayers + " / " + this.servers[e].maxPlayers);
				}
				for (var n = 0; n < 10; n++) {
					if (t == this.servers[n].name) {
						$(".srv-info-data").text(this.servers[n].allPlayers + " / " + this.servers[n].maxPlayers);
						return this.servers[n].allPlayers + " / " + this.servers[n].maxPlayers;
					}
				}
			}
		}),
		created: function () {},
		mounted: function () {
			var e = this;
			$(document).ready(function () {
				if (e.$route.params.id !== undefined) {
					e.chServer(e.$route.params.id - 1, true, true);
				} else {
					var t = [0, 3, 4, 5];
					var n = t[Math.floor(Math.random() * t.length)];
					e.chServer(n, true, false);
				}
			});
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		data: function () {
			return {
				toggleColors: false
			};
		},
		computed: {
			choosenTheme: function () {
				if (localStorage.theme === undefined) {
					return "tema2";
				} else {
					return this.$store.state.main.theme;
				}
			}
		},
		methods: {
			changeTheme: function (e) {
				this.$store.dispatch("changeTheme", e);
			},
			goToFun: function () {
				this.$router.replace({
					path: "/agar.rs/fun"
				});
			}
		},
		mounted: function () {}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		data: function () {
			return {
				lang: window.lang,
				message: "",
				status: -1,
				updateProfileForm: new Form({
					password: "",
					passwordConfirm: ""
				})
			};
		},
		computed: {
			email: {
				get: function () {
					return this.$store.state.main.email;
				},
				set: function (e) {
					this.$store.commit("setEmail", e);
				}
			}
		},
		mounted: function () {},
		methods: {
			validateEmail: function (e) {
				return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
			},
			updateSettings: function () {
				var e = this;
				var t = {
					email: this.email,
					token_header: localStorage.token_header,
					token_log: localStorage.token_log,
					password: this.updateProfileForm.password,
					passwordConfirm: this.updateProfileForm.passwordConfirm
				};
				if (t.email != "" && this.validateEmail(t.email)) {
					if ((t.password == "" || t.passwordConfirm == "") && (t.password != "" || t.passwordConfirm != "")) {
						this.message = "Passwords do not match.";
						this.status = 0;
						return 0;
					}
					if (t.password != "" && t.passwordConfirm != "" && t.password != t.passwordConfirm) {
						this.message = "Passwords do not match.";
						this.status = 0;
					} else {
						$("#loading-send").show();
						this.updateProfileForm.get_json(base_url2 + "Home/changeProfileInfo.json", t).then(function (t) {
							if (Number(t.status) == 1) {
								e.status = 1;
								e.updateProfileForm.password = "";
								e.updateProfileForm.passwordConfirm = "";
								e.message = "Information on the profile has been changed!";
							} else {
								e.status = 0;
								e.message = t.msg;
							}
							$("#loading-send").hide();
						}, function (t) {
							e.message = "Server error. Try again.";
							e.status = 0;
							$("#loading-send").hide();
						});
					}
				} else {
					this.message = "E-mail nije ispravan.";
					this.status = 0;
				}
			},
			deleteProfile: function () {
				var e = this;
				$("#loading-delete").show();
				var t = {
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				};
				this.updateProfileForm.get_json(base_url2 + "Home/deleteAccount.json", t).then(function (t) {
					$("#loading-delete").hide();
					if (Number(t.status) == 1) {
						e.status = 1;
						e.message = "Account successfully deleted!".setTimeout(function () {
							e.logout();
						}, 5000);
					}
				}, function (t) {
					e.message = "Server error. Try again.";
					e.status = -1;
					$("#loading-delete").hide();
				});
			},
			deleteFB: function () {
				var e = this;
				$("#loading-delete-fb").show();
				var t = {
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				};
				this.updateProfileForm.get_json(base_url2 + "Home/deleteFBProfile.json", t).then(function (t) {
					$("#loading-delete-fb").hide();
					if (Number(t.status) == 1) {
						e.status = 1;
						e.message = "Account data successfully deleted!".setTimeout(function () {
							e.logout();
						}, 5000);
					}
				}, function (t) {
					e.message = "Server error. Try again.";
					e.status = -1;
					$("#loading-delete-fb").hide();
				});
			},
			logout: function () {
				this.$store.dispatch("setPrivateSkins", {
					list: []
				});
				this.$store.dispatch("setColor", {
					color: null
				});
				this.$store.dispatch("setId", {
					id: 0
				});
				this.$store.dispatch("Logout").then(function (e) {
					window.location.href = "/agar.rs/";
				});
			}
		}
	};
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
	var a = n(3);
	var s = i(n(5));
	var r = i(n(4));
	t.default = {
		components: {
			Spinner: s.default,
			VueAds: r.default
		},
		data: function () {
			return {
				loading: true,
				form: new Form({})
			};
		},
		computed: o({}, (0, a.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			role: function (e) {
				return e.main.role;
			},
			hat: function (e) {
				return e.main.hat;
			},
			coins: function (e) {
				return e.main.coins;
			},
			hats: function (e) {
				return e.main.hatList;
			}
		}), {
			sortedArray: function () {
				return this.hats.list.sort(function (e, t) {
					if (e.is_my === t.is_my) {
						return e.price - t.price;
					} else if (e.is_my) {
						return -1;
					} else {
						return 1;
					}
				});
			}
		}),
		mounted: function () {
			$(".ui.card .image").dimmer({
				on: "hover"
			});
		},
		created: function () {
			document.title = "Hats - Agar Balkan";
			this.getHats();
		},
		updated: function () {
			$(".ui.card .image").dimmer({
				on: "hover"
			});
		},
		methods: {
			byPrice: function (e) {
				return e.slice().sort(function (e, t) {
					if (e.is_my === t.is_my) {
						return e.price - t.price;
					} else if (e.is_my) {
						return -1;
					} else {
						return 1;
					}
				});
			},
			buyHat: function (e) {
				var t = this;
				var n = "";
				var i = "";
				if (Number(this.coins) <= Number(e.price)) {
					n = "error";
					i = "You don't have enough gold coins.";
					swal({
						type: n,
						text: i,
						imageUrl: "/agar.rs/assets/images/hats/" + e.link + ".webp",
						imageAlt: e.name,
						showCloseButton: true,
						showConfirmButton: false,
						customClass: "buyHat"
					});
					return 0;
				}
				if (localStorage.token_header && localStorage.token_log) {
					var o = this;
					var a = {
						id: e.id,
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
					swal({
						title: "Are you sure you want to buy a hat?",
						imageAlt: e.name,
						imageUrl: "/agar.rs/assets/images/hats/" + e.link + ".webp",
						text: "Name: " + e.name + " | Price: " + e.price,
						showCancelButton: true,
						imageClass: "hat-in-swal",
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Da",
						cancelButtonText: "Ne"
					}).then(function (s) {
						if (s.value) {
							swal.showLoading();
							t.form.get_json(base_url2 + "Home/buyHat.json", a).then(function (t) {
								if (t.status == 1) {
									swal.hideLoading();
									swal.close();
									n = "success";
									i = "Uspešno ste kupili kapu";
									for (var s = 0; s < o.hats.list.length; s++) {
										if (a.id == o.hats.list[s].id) {
											o.hats.list[s].is_my = true;
										}
									}
									$(".ui.card .image").dimmer({
										on: "hover"
									});
									var r = Number(o.coins) - Number(e.price);
									o.$store.dispatch("setCoins", {
										coins: r
									});
								} else {
									n = "error";
									i = t.msg;
								}
								swal({
									type: n,
									text: i,
									imageUrl: "/agar.rs/assets/images/hats/" + e.link + ".webp",
									imageAlt: e.name,
									showCloseButton: true,
									showConfirmButton: false,
									customClass: "buyHat",
									onClose: function () {
										if (n == "success") {
											o.chooseHat(e.secret);
										}
									}
								});
							}, function (e) {});
						}
					});
				}
			},
			getHats: function () {
				var e = this;
				var t = {};
				if (localStorage.token_header && localStorage.token_log) {
					t = {
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
				}
				this.form.get_json(base_url2 + "Home/getHatlist.json", t).then(function (t) {
					var n = {
						list: [],
						my: []
					};
					n.list = t.hats;
					n.my = t.my;
					if (t.my != undefined) {
						for (var i = 0; i < n.my.length; i++) {
							for (var o = 0; o < n.list.length; o++) {
								if (n.list[o].id == n.my[i].hat_id) {
									n.list[o].is_my = true;
								}
							}
						}
					}
					e.$store.dispatch("updateHatList", {
						list: n.list,
						my: n.my
					});
					e.loading = false;
				}, function (e) {});
			},
			chooseHat: function (e) {
				var t = atob(e);
				this.$store.commit("CHANGE_HAT", {
					name: t
				});
				this.$router.push("/agar.rs/");
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		components: {},
		data: function () {
			return {
				private_score: [],
				form: new Form({})
			};
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			ranks: function (e) {
				return e.main.ranks;
			},
			loggedNickName: function (e) {
				return e.main.loggedNickName;
			},
			rank: function (e) {
				return e.main.rank;
			},
			rankGame: function (e) {
				return e.main.rankGame;
			}
		})),
		mounted: function () {
			this.am_logged_in;
			this.getMyStats();
		},
		created: function () {
			document.title = "My statistics - Agar Balkan";
		},
		updated: function () {},
		methods: {
			getMyStats: function () {
				var e = this;
				var t = {
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				};
				this.form.get_json(base_url2 + "Agar/getMyPrivateScore.json", t).then(function (t) {
					if (t.status == 1) {
						e.private_score = t.private_score;
					}
				}, function (e) {});
			},
			threeDigits: function (e) {
				for (var t = e.split(",")[0].split("").reverse(), n = [], i = 0; i < t.length; i++) {
					if ((i + 1) % 3 == 0) {
						n.push(t[i]);
						n.push(".");
					} else {
						n.push(t[i]);
					}
				}
				return n.reverse().join("");
			},
			msToTime: function (e) {
				var t = (e = (e - e % 1000) / 1000) % 60 < 10 ? "0" + e % 60 : e % 60;
				var n = (e = (e - t) / 60) % 60 < 10 ? "0" + e % 60 : e % 60;
				return (e - n) / 60 + ":" + n + ":" + t;
			},
			toHHMMSS: function (e) {
				return new Date(e * 1000).toISOString().slice(11, -5);
			},
			Cb: function (e) {
				var t = ((e = ~~e) % 60).toString();
				e = (~~(e / 60)).toString();
				if (t.length < 2) {
					t = "0" + t;
				}
				return e + ":" + t;
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		name: "ban",
		components: {},
		data: function () {
			return {
				form: new Form({
					email: "",
					message: ""
				}),
				reportStatus: null,
				reasonToBan: window.reasonToBan,
				bannedDateTo: window.bannedDateTo
			};
		},
		mounted: function () {},
		computed: {},
		created: function () {
			document.title = "You are banned!";
		},
		updated: function () {},
		methods: {
			contactBan: function () {
				var e = this;
				this.form.get_json(base_url2 + "Agar/reportBug.json").then(function (t) {
					e.reportStatus = t;
					e.form.email = "";
					e.form.message = "";
				}, function (t) {
					e.reportStatus = 0;
				});
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		components: {},
		data: function () {
			return {
				form: new Form({
					email: "",
					message: ""
				}),
				reportStatus: null
			};
		},
		mounted: function () {
			$.ajaxSetup({
				cache: false
			});
			$.getScript("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12", function () {
				FB.init({
					appId: "100000000000000",
					version: "v2.12",
					autoLogAppEvents: true,
					xfbml: true
				});
			});
		},
		computed: {},
		created: function () {
			document.title = "Contact - Agar Balkan";
			$(document).ready(function () {});
		},
		updated: function () {},
		methods: {
			reportBug: function () {
				$("#loading-send").show();
				var e = this;
				if (e.form.email != "" && e.form.message != "") {
					this.form.get_json(base_url2 + "Agar/reportBug.json").then(function (t) {
						e.reportStatus = t;
						e.form.email = "";
						e.form.message = "";
						$("#loading-send").hide();
					}, function (t) {
						e.reportStatus = 0;
					});
				} else {
					this.reportStatus = 0;
				}
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		components: {},
		data: function () {
			return {
				form: new Form({
					email: "",
					message: ""
				}),
				reportStatus: null
			};
		},
		mounted: function () {},
		computed: {},
		created: function () {
			document.title = "Contribution - Agar Balkan";
			$(document).ready(function () {
				$(".ui.dropdown").dropdown();
				$.ajaxSetup({
					cache: false
				});
				$.getScript("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12", function () {
					FB.init({
						appId: "100000000000000",
						version: "v2.12",
						autoLogAppEvents: true,
						xfbml: true
					});
				});
			});
			window.onbeforeunload = function () {
				return false;
			};
		},
		updated: function () {},
		methods: {
			selectDonation: function (e) {
				$("#donate-select").val(e);
				$("#donate-form").submit();
			},
			contactUs: function () {
				$("#loading-send").show();
				var e = this;
				if (e.form.email != "" && e.form.message != "") {
					this.form.get_json(base_url2 + "Agar/reportBug.json").then(function (t) {
						e.reportStatus = t;
						e.form.email = "";
						e.form.message = "";
						$("#loading-send").hide();
					}, function (t) {
						e.reportStatus = 0;
					});
				} else {
					this.reportStatus = 0;
				}
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		components: {},
		data: function () {
			return {
				forgotPasswordForm: new Form({
					email: "",
					password: "",
					passwordConfirm: ""
				}),
				status: -1,
				reset: 0
			};
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			}
		})),
		mounted: function () {
			if (this.am_logged_in) {
				this.$router.replace({
					path: "/agar.rs/",
					name: "index"
				});
			}
			if (this.$route.name == "resetPassword" && this.$route.params.code) {
				this.reset = 1;
				this.checkCode(this.$route.params.code);
			}
		},
		created: function () {
			document.title = "Forgot password - Agar Balkan";
		},
		updated: function () {},
		methods: {
			checkCode: function (e) {
				if (e != "") {
					var t = this;
					var n = {
						code: e
					};
					this.forgotPasswordForm.get_json(base_url2 + "Home/checkCode.json", n).then(function (e) {
						if (Number(e.status) == 1) {
							t.reset = 1;
						} else {
							t.reset = -1;
							t.status = 0;
						}
					}, function (e) {
						t.reset = -1;
						t.status = 0;
					});
				} else {
					this.reset = -1;
					this.status = 0;
				}
			},
			updatePasswod: function () {
				$("#loading-login").show();
				var e = this;
				var t = {
					code: this.$route.params.code,
					password: this.forgotPasswordForm.password,
					passwordConfirm: this.forgotPasswordForm.passwordConfirm
				};
				if (t.password != "" && t.passwordConfirm != "" && t.password == t.passwordConfirm) {
					this.forgotPasswordForm.get_json(base_url2 + "Home/newPasswordFromForgot.json", t).then(function (t) {
						if (Number(t.status) == 1) {
							e.status = 1;
							e.reset = -1;
						} else {
							e.status = 0;
							e.reset = -1;
						}
					}, function (t) {
						e.status = -1;
						e.reset = -1;
					});
				} else {
					$("#loading-login").hide();
					this.status = 2;
				}
			},
			forgotPassword: function () {
				$("#loading-login").show();
				var e = this;
				var t = {
					email: this.forgotPasswordForm.email
				};
				if (t.email != "") {
					this.forgotPasswordForm.get_json(base_url2 + "Home/ResetPassword.json", t).then(function (t) {
						$("#loading-login").hide();
						if (Number(t.status) == 1) {
							e.status = 1;
							e.forgotPasswordForm.email = "";
						} else {
							e.status = 0;
						}
					}, function (e) {
						$("#loading-login").hide();
					});
				} else {
					this.status = 0;
					$("#loading-login").hide();
				}
			}
		}
	};
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
	var a = n(3);
	var s = i(n(92));
	var r = i(n(93));
	var l = i(n(90));
	var c = i(n(91));
	var u = i(n(4));
	t.default = {
		components: {
			ServerList: s.default,
			Settings: r.default,
			SafeInternet: l.default,
			SavedNicknames: c.default,
			VueAds: u.default
		},
		props: ["am_i_logged"],
		data: function () {
			return {
				maxNickName: 15,
				lang: window.lang,
				form: new Form({}),
				isFBReady: false,
				randomSkinPosition: -1,
				nicknameInput: "",
				modalNameEmpty: false,
				skinSearch: "",
				listOfSearchedSkins: [],
				isActiveSearch: false,
				rankDisplay: true,
				hatDisplay: true,
				hatsObject: window.sesiriSlike
			};
		},
		filters: {
			ranking: function (e) {
				if (e === "c5^#") {
					return "✅";
				} else {
					return "";
				}
			}
		},
		computed: o({}, (0, a.mapState)({
			on_mobile: function (e) {
				return e.main.on_mobile;
			},
			nickname: function (e) {
				return e.main.nickname;
			},
			globalSkinName: function (e) {
				return e.main.globalSkinName;
			},
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			ranks: function (e) {
				return e.main.ranks;
			},
			loggedNickName: function (e) {
				return e.main.loggedNickName;
			},
			hat: function (e) {
				return e.main.hat;
			},
			rank: function (e) {
				return e.main.rank;
			},
			activeSkin: function (e) {
				return e.main.activeSkin;
			},
			rankGame: function (e) {
				return e.main.rankGame;
			},
			privateSkins: function (e) {
				return e.main.privateSkins;
			},
			randomSkins: function (e) {
				return e.main.randomSkins;
			},
			coins: function (e) {
				return e.main.coins;
			},
			fromApp: function (e) {
				return e.main.fromApp;
			}
		}), {
			hatLink: function () {
				try {
					this.hatsObject = window.sesiriSlike;
					if (this.hatsObject[this.hat]) {
						return this.hatsObject[this.hat].src;
					} else {
						return "/agar.rs/assets/images/.png";
					}
				} catch (e) {
					console.log(e);
				}
			}
		}),
		created: function () {
			document.title = "Agar Balkan";
			var e = this;
			$(document).ready(function () {
				$("#overlays").animate({
					scrollTop: 0
				}, "fast");
				if (e.$route.query.ip && !e.am_i_logged) {
					var t = e.$route.query.ip;
					console.log("Connecting to your server: " + t);
					window.CONNECTION_URL = t;
					//window.setRegion(t);
				}
			});
		},
		mounted: function () {
			$.ajaxSetup({
				cache: false
			});
			$.getScript("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12", function () {
				FB.init({
					appId: "100000000000000",
					version: "v2.12",
					autoLogAppEvents: true,
					xfbml: true
				});
			});
			this.randomList(this.randomSkins);
			if (this.am_i_logged) {
				this.getPrivateSkins();
				for (var e = 0; e < this.ranks.length; e++) {
					if (this.ranks[e].key == this.rank) {
						var t = this.ranks[e].value;
						this.$store.dispatch("changeRank", {
							name: t
						});
					}
				}
				if (localStorage.badgeDisplay !== undefined) {
					this.rankDisplay = localStorage.badgeDisplay === "true";
				}
				if (localStorage.hatDisplay !== undefined) {
					this.hatDisplay = localStorage.hatDisplay === "true";
				}
			} else {
				$("#nickname").focus();
			}
			$(".ui.dropdown").dropdown();
			$("body").on("contextmenu", "#canvas", function (e) {
				return false;
			});
			$("#scroll-down").click(function () {
				$("#overlays").animate({
					scrollTop: $(document).height()
				}, 10);
			});
			try {
				(adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {}
		},
		methods: o({}, (0, a.mapActions)(["unshiftPrivateSkin", "randomList"]), {
			updateNickname: function (e) {
				this.$store.commit("updateNickName", e.target.value);
			},
			updateGlobalSkinName: function (e) {
				this.$store.commit("CHANGE_SKINNAME", {
					name: e.target.value
				});
			},
			updateGlobalSkinNameValue: function (e) {
				this.$store.commit("CHANGE_SKINNAME", {
					name: e
				});
			},
			Logout: function () {
				this.$store.dispatch("setPrivateSkins", {
					list: []
				});
				this.$store.dispatch("setColor", {
					color: null
				});
				this.$store.dispatch("setId", {
					id: 0
				});
				this.$store.dispatch("Logout").then(function (e) {
					window.location.href = "/agar.rs/";
				});
			},
			safeName: function (e) {
				if (e == null) {
					return "";
				}
				if (e.indexOf("<") != -1 & e.indexOf(">") != -1) {
					var t = e.lastIndexOf("<");
					var n = e.lastIndexOf(">");
					var i = e.slice(n + 1);
					e = e.slice(0, t) + i;
				}
				return e;
			},
			SaveNickname: function () {
				var e = this;
				this.nicknameInput = $("#nickname-modal-input").val().trim();
				if (this.nicknameInput == "") {
					this.modalNameEmpty = true;
				} else {
					var t = window.maxNickLength == undefined ? this.maxNickName : window.maxNickLength;
					this.nicknameInput = this.nicknameInput.slice(0, t);
					var n = {
						user_id: localStorage.user_id,
						token_header: localStorage.token_header,
						token_log: localStorage.token_log,
						nickname: encodeURI(this.nicknameInput)
					};
					var i = "";
					toastr.options = {
						closeButton: false,
						debug: false,
						newestOnTop: false,
						progressBar: true,
						positionClass: "toast-bottom-right",
						preventDuplicates: false,
						onclick: null,
						showDuration: "300",
						hideDuration: "1000",
						timeOut: "5000",
						extendedTimeOut: "1000",
						showEasing: "swing",
						hideEasing: "linear",
						showMethod: "fadeIn",
						hideMethod: "fadeOut"
					};
					this.form.get_json(base_url2 + "Home/SaveNickname.json", n).then(function (t) {
						if (t.status == 1) {
							$("#overlays").show();
							$("#set-nick-modal").modal("hide");
							e.$store.commit("CHANGE_LOGGED_NAME", {
								name: e.nicknameInput
							});
						}
						if (t.status == 2) {
							i = i18n.messages[e.lang].logged.wrong_login;
						}
						i = t.status == 3 ? i18n.messages[e.lang].login.nickname_exist : i18n.messages[e.lang].mp.error;
						toastr.error(i);
						var n = $("#set-nick-modal").parent();
						$("#toast-container").appendTo(n);
					}, function (t) {
						i = i18n.messages[e.lang].mp.error;
						toastr.error(i);
						var n = $("#set-nick-modal").parent();
						$("#toast-container").appendTo(n);
					});
					sessionStorage.setItem("playerName", this.nicknameInput);
				}
			},
			getPrivateSkins: function () {
				var e = this;
				var t = {
					user_id: localStorage.user_id,
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				};
				this.form.get_json(base_url2 + "Skins/getMyPrivateSkins.json", t).then(function (t) {
					if (t.status == 1) {
						e.$store.dispatch("setPrivateSkins", {
							list: t.private_skins.slice()
						});
						for (var n in e.privateSkins) {
							e.unshiftPrivateSkin(e.privateSkins[n].skin_name);
						}
					}
				}, function (e) {});
			},
			openPrivateSkinsModal: function () {
				$("#player-private-skins-modal").modal("show");
			},
			activateSkin: function (e) {
				this.$store.commit("ACTIVE_SKIN", e);
				sessionStorage.removeItem("skinName");
				this.skin = "";
				this.updateGlobalSkinNameValue(e);
				$("#player-private-skins-modal").modal("hide");
			},
			toggleBadge: function () {
				this.rankDisplay = !this.rankDisplay;
				localStorage.setItem("badgeDisplay", this.rankDisplay);
			},
			toggleHat: function () {
				this.hatDisplay = !this.hatDisplay;
				localStorage.setItem("hatDisplay", this.hatDisplay);
			},
			safeSN: function (e) {
				if (e != null) {
					return e.replace(/ /g, "%20");
				} else {
					return "";
				}
			},
			nextSkin: function () {
				if (this.randomSkinPosition < this.randomSkins.length - 1) {
					if (++this.randomSkinPosition > -1) {
						this.updateGlobalSkinNameValue(this.randomSkins[this.randomSkinPosition]);
					}
				} else {
					this.randomSkinPosition = -1;
					this.updateGlobalSkinNameValue("");
				}
			},
			prevSkin: function () {
				if (this.randomSkinPosition == -1) {
					this.randomSkinPosition = this.randomSkins.length;
				}
				if (this.randomSkinPosition <= this.randomSkins.length) {
					this.randomSkinPosition--;
					if (this.randomSkinPosition > -1) {
						this.updateGlobalSkinNameValue(this.randomSkins[this.randomSkinPosition]);
					} else {
						this.updateGlobalSkinNameValue("");
					}
				}
			},
			music: function () {
				$("#music-modal").modal("show");
			},
			startGame: function () {
				var e = this;
				var t = window.maxNickLength == undefined ? this.maxNickName : window.maxNickLength;
				var n = "";
				var i = "";
				var o = "";
				if (this.am_logged_in) {
					if (this.loggedNickName == "") {
						$("#set-nick-modal").modal("setting", "closable", false).modal({
							blurring: true
						}).modal("show");
						return 0;
					}
					n = this.rankDisplay ? this.rankGame : "";
					i = this.hatDisplay ? "" + this.hat : "";
					o = this.loggedNickName;
				} else {
					if (this.nickname == undefined || this.nickname == "") {
						var a = "Player " + Math.floor(Math.random() * 500 + 1).toString();
						this.$store.dispatch("setNickName", {
							name: a
						});
					}
					this.$store.dispatch("setNickName", {
						name: this.nickname.slice(0, t)
					});
					o = this.nickname.slice(0, t);
					this.updateGlobalSkinNameValue(this.globalSkinName.slice(0, 16));
					sessionStorage.setItem("playerName", this.nickname);
					sessionStorage.setItem("skinName", this.globalSkinName);
				}
				setNick(o, this.globalSkinName, n, i);
				setTimeout(function () {
					setNick(o, e.globalSkinName, n, i);
				}, 1500);
				var s = "";
				try {
					s = window.atob(serIp);
				} catch (e) {
					s = serIp;
				}
				var r = this.am_logged_in ? "LOGIN|Name: " + this.loggedNickName + "[" + this.activeSkin + "]" : "NAME: " + this.nickname + "[" + this.globalSkinName + "]";
				this.$ua.trackEvent("StartGame " + sessionStorage.serverName, r, s);
				if (!ga.create) {
					var l = "StartGame " + sessionStorage.serverName + "\t" + r + "\t" + s;
					$.get("/agar.rs/data/analitika.json", {
						analitika: l
					}, function (e) {});
				}
			},
			spec: function () {
				spectate();
				var e = "";
				try {
					e = window.atob(serIp);
				} catch (t) {
					e = serIp;
				}
				if (this.am_logged_in) {
					this.$ua.trackEvent("Spec " + sessionStorage.serverName, "LOGIN|Name: " + this.loggedNickName, e);
					if (!ga.create) {
						t = "Spec " + sessionStorage.serverName + "\tLOGIN|Name: " + this.loggedNickName + "\t" + e;
						$.get("/agar.rs/data/analitika.json", {
							analitika: t
						}, function (e) {});
					}
				} else {
					this.$ua.trackEvent("Spec " + sessionStorage.serverName, "NAME: " + this.nickname, e);
					if (!ga.create) {
						var t = "Spec " + sessionStorage.serverName + "\tNAME: " + this.nickname + "\t" + e;
						$.get("/agar.rs/data/analitika.json", {
							analitika: t
						}, function (e) {});
					}
				}
			},
			openSavedNick: function () {
				$("#nicknames-modal").modal("setting", "transition", "horizontal flip").modal("show");
			},
			openFancyNickModal: function () {
				window.open("/agar.rs/data/fancy.html", "", "width=700, height=500, scrollbars=yes");
			},
			GetDailyBonus: function () {
				var e = this;
				var t = {
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				};
				this.form.get_json(base_url2 + "Discord/dailyInGameReward.json", t).then(function (t) {
					if (t.status == 1) {
						var n = Number(e.coins) + Number(t.coins);
						e.$store.dispatch("setCoins", {
							coins: n
						});
						swal({
							type: "success",
							text: t.message,
							imageUrl: "/agar.rs/assets/images/coins.png",
							imageAlt: "coins",
							showCloseButton: true,
							showConfirmButton: false
						});
					} else {
						swal({
							type: "error",
							text: t.message,
							showCloseButton: true,
							showConfirmButton: false
						});
					}
					$(".gift.icon").css({
						"pointer-events": "none",
						opacity: 0.5
					});
				}, function (e) {});
			}
		})
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		components: {},
		props: ["am_i_logged"],
		data: function () {
			return {
				loginForm: new Form({
					email: "",
					password: ""
				}),
				loggedIn: null,
				wrongCredentials: false
			};
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			fromApp: function (e) {
				return e.main.fromApp;
			}
		})),
		mounted: function () {
			var e = this;
			if (this.am_logged_in) {
				this.$router.replace({
					path: "/agar.rs/",
					name: "index"
				});
			}
			$.ajaxSetup({
				cache: false
			});
			$.getScript("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12", function () {
				FB.init({
					appId: "100000000000000",
					version: "v2.12",
					autoLogAppEvents: true,
					xfbml: true
				});
				FB.AppEvents.logPageView();
				FB.getLoginStatus(function (t) {
					e.statusChangeCallback(t);
				});
			});
		},
		created: function () {
			document.title = "Registration - Agar Balkan";
		},
		updated: function () {},
		methods: i({}, (0, o.mapActions)(["unshiftPrivateSkin"]), {
			testAPI: function () {
				var e = this;
				FB.api("/me?fields=id,first_name,last_name,age_range,email", function (t) {
					if (t && !t.error) {
						var n = {
							facebook_id: t.id,
							firstname: t.first_name,
							lastname: t.last_name,
							age_range: "",
							birthday: ""
						};
						if (t.age_range != undefined) {
							n.age_range = JSON.stringify(t.age_range);
						}
						n.email = "";
						if (t.email != undefined) {
							n.email = t.email;
						}
						var i = {
							login_facebook_json: JSON.stringify(n)
						};
						e.loginForm.get_json(base_url2 + "home/LoginFacebook.json", i).then(function (t) {
							e.loginProcess(t, false);
						}, function (e) {});
					}
				});
			},
			statusChangeCallback: function (e) {
				if (e.status === "connected") {
					this.testAPI();
				}
			},
			Login: function () {
				$("#loading-login").show();
				var e = this;
				var t = this.loginForm;
				t.password;
				t.email;
				if (t.email != "" && t.password != "") {
					this.loginForm.get_json(base_url2 + "Home/Login.json", t).then(function (t) {
						$("#loading-login").hide();
						e.loginProcess(t, true);
					}, function (e) {});
				} else {
					this.wrongCredentials = true;
					$("#loading-login").hide();
				}
			},
			facebookLogin: function () {
				var e = this;
				FB.getLoginStatus(function (t) {
					if (t.status != "connected") {
						FB.login(function (t) {
							FB.api("/me?fields=id,first_name,last_name,age_range,email", function (t) {
								if (t && !t.error) {
									var n = {
										facebook_id: t.id,
										firstname: t.first_name,
										lastname: t.last_name,
										age_range: "",
										birthday: ""
									};
									if (t.age_range != undefined) {
										n.age_range = JSON.stringify(t.age_range);
									}
									n.email = "";
									if (t.email != undefined) {
										n.email = t.email;
									}
									var i = {
										login_facebook_json: JSON.stringify(n)
									};
									e.loginForm.get_json(base_url2 + "home/LoginFacebook.json", i).then(function (t) {
										e.loginProcess(t, false);
									}, function (e) {});
								}
							});
						});
					}
				});
			},
			loginProcess: function (e, t) {
				var n = this;
				if (e.status === 1 && typeof Storage != "undefined") {
					localStorage.setItem("user_id", e.user_id);
					localStorage.setItem("token_log", e.token_log);
					localStorage.setItem("token_header", e.token_header);
					sessionStorage.removeItem("logout");
					if (e.nickname == null) {
						i = null;
					} else {
						var i = decodeURI(e.nickname);
						sessionStorage.setItem("playerName", i);
					}
					this.$store.dispatch("setLoggedNickName", {
						name: i
					});
					this.$store.dispatch("getHat", e.nickname);
					if (e.rank == null) {
						o = null;
					} else {
						var o = e.rank;
					}
					this.$store.dispatch("setRank", {
						name: o
					});
					this.$store.dispatch("setCoins", {
						coins: e.coins
					});
					this.$store.dispatch("setRole", {
						role: parseInt(e.role)
					});
					this.$store.dispatch("setColor", {
						color: e.color
					});
					this.$store.dispatch("setEmail", {
						email: e.email
					});
					this.$store.dispatch("setId", {
						id: e.user_id
					});
					this.$store.commit("LOGIN", {
						arg: true
					});
					if (localStorage.role != undefined && localStorage.role != e.role) {
						console.log("role changing");
						localStorage.setItem("role", e.role);
					}
					var a = {
						user_id: e.user_id,
						token_header: e.token_header,
						token_log: e.token_log
					};
					this.loginForm.get_json(base_url2 + "Skins/getMyPrivateSkins.json", a).then(function (e) {
						if (e.status == 1) {
							n.$store.dispatch("setPrivateSkins", {
								list: e.private_skins.slice()
							});
							for (var t in e.private_skins) {
								n.unshiftPrivateSkin(e.private_skins[t].skin_name);
							}
						}
					}, function (e) {});
					this.getHats(e.token_header, e.token_log);
					this.$router.replace({
						path: "/agar.rs/",
						name: "index"
					});
				}
				if (e.status === 0) {
					this.$store.commit("LOGIN", {
						arg: false
					});
				}
				if (t && (e.status === 2 && (this.wrongCredentials = true), e.status === 0)) {
					var s = {
						email: i18n.messages[lang].login.required
					};
					data.errors.record(s);
				}
			},
			getHats: function (e, t) {
				var n = this;
				var i = {
					token_header: e,
					token_log: t
				};
				this.loginForm.get_json(base_url2 + "Home/getHatlist.json", i).then(function (e) {
					var t = {
						list: [],
						my: []
					};
					t.list = e.hats;
					t.my = e.my;
					if (e.my != undefined) {
						for (var i = 0; i < t.my.length; i++) {
							for (var o = 0; o < t.list.length; o++) {
								if (t.list[o].id == t.my[i].hat_id) {
									t.list[o].is_my = true;
								}
							}
						}
					}
					n.$store.dispatch("updateHatList", {
						list: t.list,
						my: t.my
					});
					n.loading = false;
					setTimeout(function () {
						$(".ui.dropdown").dropdown();
					}, 500);
				}, function (e) {});
			}
		})
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		name: "fun",
		components: {},
		data: function () {
			return {
				game: "",
				game1: "/fun/index.html",
				game2: "/games/racing/"
			};
		},
		mounted: function () {
			if (this.$route.params.id != undefined) {
				if (this.$route.params.id == 1) {
					this.game = this.game1;
				}
				if (this.$route.params.id == 2) {
					this.game = this.game2;
				}
			} else {
				this.game = "";
			}
		},
		computed: {},
		created: function () {},
		updated: function () {},
		methods: {
			changeGame: function (e) {
				if (e === 1) {
					this.game = this.game1;
				}
				if (e === 2) {
					this.game = this.game2;
				}
				this.$router.push("/agar.rs/fun/" + e);
			}
		},
		watch: {
			$route: function (e, t) {
				if (e.name == "fun") {
					this.game = "";
				}
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		name: "pillory",
		components: {},
		data: function () {
			return {
				form: new Form({}),
				bannedList: [],
				current_date: new Date().toISOString().slice(0, 19).replace("T", " ")
			};
		},
		mounted: function () {
			this.getBannedList();
			try {
				(adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {}
		},
		computed: {},
		created: function () {
			document.title = "Hall of Shame - Agar Balkan";
			$(document).ready(function () {});
		},
		updated: function () {},
		methods: {
			getBannedList: function () {
				var e = this;
				new Date().toISOString().slice(0, 19).replace("T", " ");
				this.form.get_json(base_url2 + "Agar/getBannedList.json", {}).then(function (t) {
					if (t.status === 1) {
						e.bannedList = t.banned;
					}
				}, function (e) {});
			},
			calcType: function (e) {
				if (e == 1) {
					return "Igra";
				} else if (e == 2) {
					return "Chat";
				} else if (e == 3) {
					return "Skinovi";
				} else {
					return undefined;
				}
			},
			calcServers: function (e) {
				if (e == "") {
					return "Svi";
				} else {
					return e;
				}
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		components: {},
		data: function () {
			return {};
		},
		mounted: function () {},
		computed: {},
		created: function () {
			document.title = "Privacy Policy - Agar Balkan";
			$(document).ready(function () {});
		},
		updated: function () {},
		methods: {}
	};
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
	var o = i(n(5));
	var a = i(n(168));
	var s = i(n(4));
	t.default = {
		components: {
			Spinner: o.default,
			Datepicker: a.default,
			VueAds: s.default
		},
		data: function () {
			return {
				loading: true,
				list: {
					ffa1: [],
					mn2: [],
					im3: [],
					ffa4: [],
					ex5: [],
					rnbw6: [],
					vm7: [],
					oe8: [],
					pffa1: [],
					pmn2: [],
					pim3: [],
					pffa4: [],
					pex5: [],
					prnbw6: [],
					pvm7: [],
					poe8: []
				},
				startDay: null,
				endDay: null,
				format: "d MMMM yyyy",
				form: new Form({}),
				role: 0
			};
		},
		mounted: function () {
			$(document).ready(function () {
				$(".menu .item").tab();
			});
			this.role = this.$store.state.main.role;
		},
		created: function () {
			document.title = "Best results - Agar Balkan";
			this.getPrivateList();
			this.getList();
		},
		updated: function () {
			$(".menu .item").tab();
		},
		methods: {
			getMonday: function (e) {
				var t = (e = new Date(e)).getDay();
				var n = e.getDate() - t + (t == 0 ? -6 : 1);
				return new Date(e.setDate(n));
			},
			safeName: function (e) {
				if (e == null) {
					return "";
				}
				if (e.indexOf("<") != -1 & e.indexOf(">") != -1) {
					var t = e.lastIndexOf("<");
					var n = e.lastIndexOf(">");
					var i = e.slice(n + 1);
					e = e.slice(0, t) + i;
				}
				return e;
			},
			formatDate: function (e) {
				var t = new Date(e);
				var n = "" + (t.getMonth() + 1);
				var i = "" + t.getDate();
				var o = t.getFullYear();
				if (n.length < 2) {
					n = "0" + n;
				}
				if (i.length < 2) {
					i = "0" + i;
				}
				return [i, n, o].join("-");
			},
			getToday: function () {
				var e = this;
				this.form.get_json("data/score/day.json").then(function (t) {
					e.loading = false;
					if (t.status == 1) {
						e.list.pffa1 = t.list[0];
						e.list.pmn2 = t.list[1];
						e.list.pim3 = t.list[2];
						e.list.pffa4 = t.list[3];
						e.list.pex5 = t.list[4];
						e.list.prnbw6 = t.list[5];
						e.list.pvm7 = t.list[6];
						e.list.poe8 = t.list[7];
						e.startDay = new Date(t.from);
						e.endDay = new Date(t.end);
						$(".menu .item").tab();
					}
				}, function (e) {});
			},
			getPrivateList: function () {
				var e = this;
				this.form.get_json("data/score/private.json").then(function (t) {
					e.loading = false;
					if (t.status == 1) {
						e.list.pffa1 = t.list[0];
						e.list.pmn2 = t.list[1];
						e.list.pim3 = t.list[2];
						e.list.pffa4 = t.list[3];
						e.list.pex5 = t.list[4];
						e.list.prnbw6 = t.list[5];
						e.list.pvm7 = t.list[6];
						e.list.poe8 = t.list[7];
						e.startDay = new Date(t.from);
						e.endDay = new Date(t.end);
						$(".menu .item").tab();
					}
				}, function (e) {});
			},
			getList: function () {
				var e = this;
				this.form.get_json("data/score/public.json").then(function (t) {
					e.loading = false;
					if (t.status == 1) {
						e.list.ffa1 = t.list[0];
						e.list.mn2 = t.list[1];
						e.list.im3 = t.list[2];
						e.list.ffa4 = t.list[3];
						e.list.ex5 = t.list[4];
						e.list.rnbw6 = t.list[5];
						e.list.vm7 = t.list[6];
						e.list.oe8 = t.list[7];
						e.startDay = new Date(t.from);
						e.endDay = new Date(t.end);
					}
					$(".menu .item").tab();
				}, function (e) {});
			},
			numberFormat: function (e) {
				return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			classItem: function (e) {
				if (e == 1) {
					return "item first";
				} else if (e == 2) {
					return "item second";
				} else if (e == 3) {
					return "item third";
				} else {
					return "item";
				}
			},
			deleteScore: function (e, t) {
				var n = this;
				var i = {
					score: e,
					server: t
				};
				this.form.get_json(base_url2 + "Agar/deleteScore.json", i).then(function (i) {
					switch (t) {
						case "FFA#1":
							for (o = 0; o < n.list.ffa1.length; o++) {
								if (n.list.ffa1[o].score == e) {
									n.list.ffa1.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.pffa1.length; o++) {
								if (n.list.pffa1[o].score == e) {
									n.list.pffa1.splice(o, 1);
								}
							}
							break;
						case "MINIONS#2":
							for (o = 0; o < n.list.mn2.length; o++) {
								if (n.list.mn2[o].score == e) {
									n.list.mn2.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.pmn2.length; o++) {
								if (n.list.pmn2[o].score == e) {
									n.list.pmn2.splice(o, 1);
								}
							}
							break;
						case "INSTANT MERGE#3":
							for (o = 0; o < n.list.im3.length; o++) {
								if (n.list.im3[o].score == e) {
									n.list.im3.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.pim3.length; o++) {
								if (n.list.pim3[o].score == e) {
									n.list.pim3.splice(o, 1);
								}
							}
							break;
						case "MEGA SPLIT#4":
							for (o = 0; o < n.list.ffa4.length; o++) {
								if (n.list.ffa4[o].score == e) {
									n.list.ffa4.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.pffa4.length; o++) {
								if (n.list.pffa4[o].score == e) {
									n.list.pffa4.splice(o, 1);
								}
							}
							break;
						case "EXPERIMENTAL#5":
							for (o = 0; o < n.list.ex5.length; o++) {
								if (n.list.ex5[o].score == e) {
									n.list.ex5.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.pex5.length; o++) {
								if (n.list.pex5[o].score == e) {
									n.list.pex5.splice(o, 1);
								}
							}
							break;
						case "RAINBOW#6":
							for (o = 0; o < n.list.rnbw6.length; o++) {
								if (n.list.rnbw6[o].score == e) {
									n.list.rnbw6.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.prnbw6.length; o++) {
								if (n.list.prnbw6[o].score == e) {
									n.list.prnbw6.splice(o, 1);
								}
							}
							break;
						case "VIRUS MINES#7":
							for (o = 0; o < n.list.vm7.length; o++) {
								if (n.list.vm7[o].score == e) {
									n.list.vm7.splice(o, 1);
								}
							}
							for (o = 0; o < n.list.pvm7.length; o++) {
								if (n.list.pvm7[o].score == e) {
									n.list.pvm7.splice(o, 1);
								}
							}
							break;
						case "OLD EXP#8":
							for (o = 0; o < n.list.oe8.length; o++) {
								if (n.list.oe8[o].score == e) {
									n.list.oe8.splice(o, 1);
								}
							}
							for (var o = 0; o < n.list.poe8.length; o++) {
								if (n.list.poe8[o].score == e) {
									n.list.poe8.splice(o, 1);
								}
							}
					}
				}, function (e) {});
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		components: {},
		props: ["am_i_logged"],
		data: function () {
			return {
				registerForm: new Form({
					nickname: "",
					email: "",
					password: ""
				}),
				loggedIn: null,
				haveErrors: true
			};
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			fromApp: function (e) {
				return e.main.fromApp;
			}
		})),
		mounted: function () {
			var e = this;
			if (this.am_logged_in) {
				this.$router.replace({
					path: "/agar.rs/",
					name: "index"
				});
			}
			$.ajaxSetup({
				cache: false
			});
			$.getScript("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12", function () {
				FB.init({
					appId: "100000000000000",
					version: "v2.12",
					autoLogAppEvents: true,
					xfbml: true
				});
				FB.AppEvents.logPageView();
				FB.getLoginStatus(function (t) {
					e.statusChangeCallback(t);
				});
			});
		},
		created: function () {
			document.title = "Registration - Agar Balkan";
		},
		updated: function () {},
		methods: {
			testAPI: function () {
				var e = this;
				FB.api("/me?fields=id,first_name,last_name,age_range,email", function (t) {
					if (t && !t.error) {
						var n = {
							facebook_id: t.id,
							firstname: t.first_name,
							lastname: t.last_name,
							age_range: "",
							birthday: ""
						};
						if (t.age_range != undefined) {
							n.age_range = JSON.stringify(t.age_range);
						}
						n.email = "";
						if (t.email != undefined) {
							n.email = t.email;
						}
						var i = {
							login_facebook_json: JSON.stringify(n)
						};
						e.registerForm.get_json(base_url2 + "home/LoginFacebook.json", i).then(function (t) {
							e.loginProcess(t, false);
						}, function (e) {});
					}
				});
			},
			statusChangeCallback: function (e) {
				if (e.status === "connected") {
					this.testAPI();
				}
			},
			Register: function () {
				$("#loading-login").show();
				var e = this;
				var t = this.registerForm.nickname.slice(0, 15);
				t = t.trim();
				var n = {
					nickname: encodeURI(t),
					password: this.registerForm.password,
					email: this.registerForm.email
				};
				this.registerForm.checkIfEmpty(n);
				if (this.registerForm.errors.any()) {
					$("#loading-login").hide();
				} else {
					this.registerForm.validateEmail({
						email: this.registerForm.email
					});
					this.registerForm.minPasswordLength({
						password: this.registerForm.password
					});
					if (this.registerForm.errors.any()) {
						$("#loading-login").hide();
					} else {
						this.registerForm.get_json(base_url2 + "Home/Registration.json", n).then(function (t) {
							$("#loading-login").hide();
							if (t.status == 1) {
								localStorage.setItem("user_id", t.user_id);
								localStorage.setItem("token_log", t.token_log);
								localStorage.setItem("token_header", t.token_header);
								if (t.nickname == null) {
									n = null;
								} else {
									var n = decodeURI(t.nickname);
									sessionStorage.setItem("playerName", n);
								}
								e.$store.dispatch("setLoggedNickName", {
									name: n
								});
								if (t.rank == null) {
									i = null;
								} else {
									var i = t.rank;
								}
								e.$store.dispatch("setRank", {
									name: i
								});
								e.$store.dispatch("setRole", {
									role: parseInt(t.role)
								});
								e.$store.dispatch("setColor", {
									color: null
								});
								e.$store.dispatch("setEmail", {
									email: t.email
								});
								e.$store.commit("LOGIN", {
									arg: true
								});
								if (localStorage.role != undefined && localStorage.role != t.role) {
									localStorage.setItem("role", t.role);
								}
								e.$router.replace({
									path: "/agar.rs/",
									name: "index"
								});
							}
							if (t.status == 2) {
								if (t.error == 1) {
									e.registerForm.errors.record({
										nickname: i18n.messages[lang].login.nickname_exist
									});
								}
								if (t.error == 2) {
									e.registerForm.errors.record({
										email: i18n.messages[lang].login.email_exist
									});
								}
							}
							if (t.status == 0) {
								e.registerForm.errors.record({
									nickname: i18n.messages[lang].login.required,
									password: i18n.messages[lang].login.required,
									email: i18n.messages[lang].login.required
								});
							}
						}, function (e) {});
					}
				}
			},
			facebookLogin: function () {
				var e = this;
				FB.getLoginStatus(function (t) {
					if (t.status != "connected") {
						FB.login(function (t) {
							FB.api("/me?fields=id,first_name,last_name,age_range,email", function (t) {
								if (t && !t.error) {
									var n = {
										facebook_id: t.id,
										firstname: t.first_name,
										lastname: t.last_name,
										age_range: "",
										birthday: ""
									};
									if (t.age_range != undefined) {
										n.age_range = JSON.stringify(t.age_range);
									}
									n.email = "";
									if (t.email != undefined) {
										n.email = t.email;
									}
									var i = {
										login_facebook_json: JSON.stringify(n)
									};
									e.registerForm.get_json(base_url2 + "home/LoginFacebook.json", i).then(function (t) {
										e.loginProcess(t, false);
									}, function (e) {});
								}
							});
						});
					}
				});
			},
			loginProcess: function (e, t) {
				if (e.status === 1 && typeof Storage != "undefined") {
					localStorage.setItem("user_id", e.user_id);
					localStorage.setItem("token_log", e.token_log);
					localStorage.setItem("token_header", e.token_header);
					sessionStorage.removeItem("logout");
					if (e.nickname == null) {
						n = null;
					} else {
						var n = decodeURI(e.nickname);
						sessionStorage.setItem("playerName", n);
					}
					this.$store.dispatch("setLoggedNickName", {
						name: n
					});
					if (e.rank == null) {
						i = null;
					} else {
						var i = e.rank;
					}
					this.$store.dispatch("setRank", {
						name: i
					});
					this.$store.dispatch("setRole", {
						role: parseInt(e.role)
					});
					this.$store.dispatch("setColor", {
						color: e.color
					});
					this.$store.dispatch("setEmail", {
						email: e.email
					});
					this.$store.commit("LOGIN", {
						arg: true
					});
					if (localStorage.role != undefined && localStorage.role != e.role) {
						localStorage.setItem("role", e.role);
					}
					this.$router.replace({
						path: "/agar.rs/",
						name: "index"
					});
				}
				if (e.status === 0) {
					this.$store.commit("LOGIN", {
						arg: false
					});
				}
				if (t && (e.status === 2 && (this.wrongCredentials = true), e.status === 0)) {
					var o = {
						email: i18n.messages[lang].login.required
					};
					data.errors.record(o);
				}
			}
		}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	t.default = {
		components: {},
		data: function () {
			return {};
		},
		mounted: function () {},
		computed: {},
		created: function () {
			document.title = "Rules - Agar Balkan";
			$(document).ready(function () {});
		},
		updated: function () {},
		methods: {}
	};
}, function (e, t, n) {
	"use strict";

	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var i = Object.assign || function (e) {
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
	var o = n(3);
	t.default = {
		name: "skinPreview",
		components: {},
		data: function () {
			return {
				name: ""
			};
		},
		mounted: function () {
			if (this.$route.params.name) {
				this.name = this.$route.params.name;
			}
		},
		computed: i({}, (0, o.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			}
		})),
		created: function () {
			$(document).ready(function () {});
		},
		updated: function () {},
		methods: {
			chooseSkin: function (e) {
				this.$store.dispatch("setGlobalSkinName", {
					name: e
				});
				this.$store.commit("ACTIVE_SKIN", e);
				this.$router.push("/agar.rs/");
			}
		}
	};
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
	var a = n(3);
	var s = i(n(5));
	var r = i(n(4));
	t.default = {
		components: {
			Spinner: s.default,
			VueAds: r.default
		},
		data: function () {
			return {
				loading: true,
				top_skins: false,
				my_skins: false,
				skins: new Form({
					images: [],
					visible_images: [],
					my_liked: [],
					skin_name: "",
					additional_info: ""
				}),
				skinSearch: "",
				isActiveSearch: false,
				scrollCalled: 0,
				isLoadingNew: false,
				image: false,
				imgFile: null,
				msg_error: "",
				success_uploaded: "",
				success: false,
				myCrop: null,
				private: false
			};
		},
		computed: o({}, (0, a.mapState)({
			am_logged_in: function (e) {
				return e.main.am_logged_in;
			},
			role: function (e) {
				return e.main.role;
			}
		})),
		mounted: function () {
			var e = this;
			if (this.$route.hash == "#private") {
				$("#upload-skin-modal").modal("show");
				this.private = true;
			}
			$(document).ready(function () {
				function t(t) {
					if (t.files && t.files[0]) {
						var n = new FileReader();
						n.onload = function (t) {
							e.image = true;
							e.myCrop.croppie("bind", {
								url: t.target.result
							}).then(function () {
								$("#upload-skin-modal").modal("refresh");
							});
						};
						n.readAsDataURL(t.files[0]);
					} else {
						console.log("Sorry - you're browser doesn't support the FileReader API");
					}
				}
				$.getScript("/agar.rs/assets/js/croppie.min.js", function (t, n, i) {
					e.myCrop = $("#uploadd").croppie({
						viewport: {
							width: 400,
							height: 400,
							type: "circle"
						},
						format: "png",
						boundary: {
							width: 450,
							height: 400
						}
					});
				});
				$("#imageFile").on("change", function () {
					t(this);
				});
			});
			try {
				(adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {}
		},
		created: function () {
			document.title = "Skins - Agar Balkan";
			this.getMyVotes();
			this.getSkinsDB();
		},
		updated: function () {
			var e = this;
			$("#skins-cards").scroll(function (t) {
				if (e.scrollCalled == 0 && $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && e.skinSearch.length < 3 && !e.top_skins && !e.my_skins) {
					e.scrollCalled = 1;
					e.getSkinsDBNext();
				}
			});
		},
		methods: {
			getMyVotes: function () {
				if (localStorage.token_header && localStorage.token_log) {
					var e = this;
					var t = {
						user_id: localStorage.user_id,
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
					this.skins.get_json(base_url2 + "Skins/myLikedSkins.json", t).then(function (t) {
						if (t.status == 1) {
							e.skins.my_liked = t.list;
						}
					}, function (e) {});
				}
			},
			getSkinsDB: function () {
				var e = this;
				this.skins.get_json(base_url2 + "Skins/getSkinList.json").then(function (t) {
					e.skins.images = t.list;
					for (var n in e.skins.images) {
						e.skins.images[n].me = 0;
					}
					e.skins.visible_images = e.skins.images;
					e.loading = false;
				}, function (e) {});
			},
			getTopSkins: function () {
				this.top_skins = true;
				this.my_skins = false;
				this.isLoadingNew = true;
				this.skins.visible_images = [];
				var e = this;
				this.skins.get_json(base_url2 + "Skins/topRatedSkinList.json").then(function (t) {
					e.skins.visible_images = t.top;
					e.isLoadingNew = false;
					e.loading = false;
				}, function (e) {});
			},
			myTopSkins: function () {
				this.skins.visible_images = this.skins.my_liked.slice(0);
				this.my_skins = true;
				this.top_skins = true;
			},
			returnSkins: function () {
				this.top_skins = false;
				this.skins.visible_images = this.skins.images;
			},
			getSkinsDBNext: function () {
				var e = this;
				this.isLoadingNew = true;
				var t = {};
				t.position = $(".card").last().attr("data-skin-id");
				this.skins.get_json(base_url2 + "Skins/getSkinListNext.json", t).then(function (t) {
					e.skins.visible_images = e.skins.visible_images.concat(t.list);
					for (var n in e.skins.visible_images) {
						if (e.skins.visible_images[n].me == undefined) {
							e.skins.visible_images[n].me = 0;
						}
					}
					e.scrollCalled = 0;
					e.isLoadingNew = false;
				}, function (e) {});
			},
			skinSearchDB: function () {
				var e = this;
				if (this.skinSearch.length == 0) {
					this.skins.visible_images = this.skins.images.slice();
				}
				if (this.skinSearch.length > 2) {
					this.isActiveSearch = true;
					var t = {
						term: this.skinSearch
					};
					this.skins.visible_images = [];
					this.skins.get_json(base_url2 + "Skins/searchSkin.json", t).then(function (t) {
						if (t.status == 1) {
							e.skins.visible_images = t.list.slice();
							for (var n in e.skins.visible_images) {
								if (e.skins.visible_images[n].me == undefined) {
									e.skins.visible_images[n].me = 0;
								}
							}
							for (var i in e.skins.my_liked);
							e.isActiveSearch = false;
						}
					}, function (e) {});
				}
			},
			chooseSkin: function (e) {
				this.$store.dispatch("setGlobalSkinName", {
					name: e
				});
				this.$store.commit("ACTIVE_SKIN", e);
				this.$router.push("/agar.rs/");
			},
			voteSkin: function (e, t) {
				var n = this;
				var i = this;
				var o = {
					user_id: localStorage.user_id,
					token_header: localStorage.token_header,
					token_log: localStorage.token_log,
					skin_id: e
				};
				$("#heart-for-" + e).toggleClass("vote");
				this.skins.get_json(base_url2 + "Skins/voteSkin.json", o).then(function (o) {
					if (o.status == 1) {
						var a = n.findIndexById(e);
						if (o.vote == 1) {
							if (Number($("#vote-for-" + e).text()) == undefined) {
								$("#vote-for-" + e).text("1");
							} else {
								n.skins.my_liked.push({
									skin_name: t,
									id: e,
									me: 1
								});
								if (a != -1) {
									n.skins[a].me = 1;
									n.skins[a].votes = String(Number(n.skins[a].votes) + 1);
								}
							}
						} else {
							$("#vote-for-" + e).text(Number($("#vote-for-" + e).text()) - 1);
							for (var s = 0; s < i.skins.my_liked.length; s++) {
								if (n.skins.my_liked[s].id == e) {
									n.skins.my_liked.splice(s, 1);
								}
							}
							n.skins[a].me = 0;
							n.skins[a].votes = String(Number(n.skins[a].votes) - 1);
							console.log("unlinile ", n.skins[a].votes);
						}
					}
				}, function (e) {
					console.log("error", e);
				});
			},
			findIndexById: function (e) {
				for (var t in this.skins) {
					if (this.skins[t].id == e) {
						return t;
					}
				}
				return -1;
			},
			openUploadSkinModal: function () {
				$("#upload-skin-modal").modal("show");
			},
			onFileChange: function (e) {
				var t = e.target.files || e.dataTransfer.files;
				if (t.length) {
					this.imgFile = t[0];
				}
			},
			removeImage: function (e) {
				this.image = false;
				this.myCrop = null;
				self.myCrop = $("#uploadd").croppie();
				window.location.reload();
			},
			skinPreview: function (e) {
				this.$router.replace("/agar.rs/skin/" + e);
			},
			uploadSkinFunc: function () {
				var e = this;
				if (this.private == 1) {
					var t = {
						user_id: localStorage.user_id,
						token_header: localStorage.token_header,
						token_log: localStorage.token_log,
						additional_info: this.skins.additional_info
					};
					$("#showAddingSkin").show();
					this.myCrop.croppie("result", {
						type: "blob",
						size: "{400, 400}"
					}).then(function (n) {
						var i = new File([n], "priv.png", {
							type: "image/png",
							lastModified: Date.now()
						});
						var o = JSON.stringify(t);
						var a = new FormData();
						a.append("skin_json", o);
						a.append("userfile", i);
						e.skins.get_json(base_url2 + "Skins/addPrivateSkin.json", a, 1).then(function (t) {
							$("#showAddingSkin").hide();
							if (t.status == 1) {
								e.success = true;
								e.skins.skin_name = "";
								e.image = "";
								setTimeout(function () {
									e.success = false;
								}, 5000);
							} else {
								e.msg_error = t.message;
							}
						}, function (e) {
							console.log("error", e);
						});
					});
				} else if ((t = {
					name: this.skins.skin_name,
					additional_info: this.skins.additional_info
				}).name.length >= 3 && t.name.length <= 15) {
					$("#showAddingSkin").show();
					var n = {};
					this.myCrop.croppie("result", {
						type: "blob",
						size: "{400, 400}"
					}).then(function (i) {
						var o = new File([i], "testt.png", {
							type: "image/png",
							lastModified: Date.now()
						});
						n.image = o;
						var a = JSON.stringify(t);
						var s = new FormData();
						s.append("skin_json", a);
						s.append("userfile", o);
						e.skins.get_json(base_url2 + "Skins/addSkin.json", s, 1).then(function (t) {
							$("#showAddingSkin").hide();
							if (t.status == 1) {
								e.success = true;
								e.skins.skin_name = "";
								e.image = "";
								setTimeout(function () {
									e.success = false;
								}, 5000);
							} else {
								e.msg_error = t.message;
							}
						}, function (e) {
							console.log("error", e);
						});
					});
				} else {
					e.msg_error = "Error. The length of the skin name must be between 3 and 15 characters.";
				}
			},
			skinLink: function (e, t) {
				if (Number(t)) {
					return "skins_safe/" + e + ".png";
				} else {
					return "skins/" + e + ".png";
				}
			},
			bannedFromSkins: function () {
				return localStorage.bfs == "true";
			}
		}
	};
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
	var o = i(n(19));
	var a = i(n(18));
	var s = n(9);
	var r = n(11);
	var l = n(13);
	var c = n(10);
	var u = n(14);
	var d = n(12);
	var p = i(n(17));
	var f = i(n(7));
	var h = i(n(20));
	var m = i(n(6));
	var g = i(n(16));
	var v = i(n(15));
	var b = n(21);
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
}, function (e, t, n) {
	"use strict";

	function i(e, t, n) {
		if (t in e) {
			Object.defineProperty(e, t, {
				value: n,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			e[t] = n;
		}
		return e;
	}
	function o(e) {
		if (e == null) {
			throw new TypeError("Cannot destructure undefined");
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var a;
	var s = function (e) {
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
	}(n(8));
	var r = function (e) {
		if (e && e.__esModule) {
			return e;
		} else {
			return {
				default: e
			};
		}
	}(n(57));
	window.Form = r.default;
	var l = {
		form: new r.default({}),
		on_mobile: false,
		am_logged_in: false,
		id: 0,
		role: 0,
		email: "",
		color: null,
		am_logged_in_fast: false,
		theme: localStorage.theme,
		nickname: sessionStorage.playerName === undefined ? "" : sessionStorage.playerName,
		globalSkinName: sessionStorage.skinName === undefined ? "" : sessionStorage.skinName,
		lowGraphics: 0,
		fromApp: window.location.origin.includes("m.agar.rs"),
		loggedNickName: "",
		coins: 0,
		hat: "",
		hatList: {
			list: [],
			my: []
		},
		activeSkin: "",
		privateSkins: [],
		randomSkins: ["aer", "roty", "lock", "pokiiiii", "cnb", "alien", "vukiking", "hijene", "kruno102", "hhaubi", "okice", "bear", "reptil", "stone", "micukyyt", "maka", "tiger", "coins", "caki24", "eb_chanell", "rook", "hhaawaahh", "croft", "saso89", "thief", "srpskavucica100", "zekica", "flowers", "haski", "daki_king", "bravo", "fox", "golf_ball", "evil_panda", "avav", "drg", "an01", "vikings", "squi2", "srpskavucica38", "ruffy", "mamute", "pirate_flag", "chicken", "the_lion_king", "crow", "mii10", "srpskavucica101", "frky", "frb", "pirates", "snc", "toast", "bart", "devil", "m_y", "cro_kings", "hunter", "ram", "madara_uchiha", "lily", "garfield", "lion", "mst_by_guerrero", "mju", "tigrus", "kirby", "minijonnnnn", "lionking", "diver", "haubbi", "plug", "mask", "spidermann", "ladybug", "elephant", "warlus", "glove", "aqa", "witch", "sovice", "eagle", "pcelica_123", "fencer", "kane093", "biker", "chuck_norris", "monkey", "duck", "char1", "b28", "ice_cream", "kane028", "kong", "tdb", "boxing", "wolverine", "cactus", "ironman", "karate", "zekan", "athletic", "san", "hopy", "choko_heart", "pikachu", "p_bear", "capricorn", "emoji", "chicken_leg", "lollipop", "drmator", "dog", "spd2_byguerrero", "french_fries", "sandwich", "frankenstein", "ojz", "amor", "caki23", "chili_pepper", "amazing", "macak", "cat", "maja", "boar", "ss1", "dude", "bull", "sanik", "foxy", "deadpool", "gengice", "heart", "555", "coffe", "pig2", "batman", "bearr", "t112t", "tacospro", "xray", "c03", "bee", "squirtle", "bo1", "elvis_presley", "just_medo", "doctor_strange", "thelonewolfw22"],
		rank: "",
		rankGame: "",
		ranks: [{
			key: "a#.7",
			value: "🆎"
		}, {
			key: "c5^#",
			value: "✅"
		}, {
			key: "p5@.",
			value: "☯"
		}, {
			key: "r5@u",
			value: "🛡"
		}, {
			key: "y2=t",
			value: "📽"
		}],
		settings: {
			options: {
				mouseControl: true,
				hideChat: false,
				showResults: true,
				transparentCells: false,
				showLines: false,
				showMass: true,
				hideSkins: false,
				showSkins: true,
				hideHats: false,
				smoothView: true,
				infiniteScroll: false,
				sectorsVisible: false,
				cellBorder: false,
				colors: false,
				sectorsColor: "#a1a1a1",
				mapColor: "#F2FBFF",
				autoRespawn: false,
				arrowDirection: true,
				acidMode: false,
				oldChat: false,
				backgroundCanvas: true
			}
		},
		banned: {
			type: 0,
			reason: "",
			date_from: "",
			date_to: "",
			nickname: "",
			server: 0
		}
	};
	var c = {
		getOptions: function (e) {
			return e.settings.options;
		}
	};
	var u = {
		loggedInFunc: function (e) {
			var t = e.commit;
			var n = e.state;
			return new Promise(function (e, i) {
				if (localStorage.user_id && localStorage.token_header && localStorage.token_log) {
					var o = {
						user_id: localStorage.user_id,
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
					n.form.get_json(base_url2 + "Home/LoginWithToken.json", o).then(function (n) {
						if (n.status === 1) {
							t(s.LOGIN, {
								arg: true
							});
						} else if (n.status === 2) {
							t(s.LOGIN, {
								arg: false
							});
						}
						e(n);
					}, function (e) {
						console.log("Rejected checking token: ", e);
					});
				} else {
					e({
						status: 0
					});
				}
			});
		},
		getHats: function (e) {
			var t = this;
			e.commit;
			var n = e.state;
			return new Promise(function (e, i) {
				var o = t;
				var a = {};
				if (localStorage.token_header && localStorage.token_log) {
					a = {
						token_header: localStorage.token_header,
						token_log: localStorage.token_log
					};
				}
				n.form.get_json(base_url2 + "Home/getHatlist.json", a).then(function (e) {
					var t = {
						list: [],
						my: []
					};
					t.list = e.hats;
					t.my = e.my;
					if (e.my != undefined) {
						for (var n = 0; n < t.my.length; n++) {
							for (var i = 0; i < t.list.length; i++) {
								if (t.list[i].id == t.my[n].hat_id) {
									t.list[i].is_my = true;
								}
							}
						}
					}
					o.$store.dispatch("updateHatList", {
						list: t.list,
						my: t.my
					});
				}, function (e) {});
			});
		},
		Logout: function (e) {
			var t = e.commit;
			return new Promise(function (e, n) {
				var i = {
					token_header: localStorage.token_header,
					token_log: localStorage.token_log
				};
				FB.getLoginStatus(function (e) {
					e.status;
					FB.logout(function (e) {});
				});
				l.form.get_json(base_url2 + "Home/Logout.json", i).then(function (n) {
					t(s.CHANGE_LOGGED_NAME, "");
					t(s.CHANGE_HAT, "");
					t(s.CHANGE_NICKNAME, "");
					t(s.LOGIN, {
						arg: false
					});
					localStorage.removeItem("token_header");
					localStorage.removeItem("token_log");
					localStorage.removeItem("user_id");
					localStorage.removeItem("role");
					e(n.status);
				}, function (e) {});
				sessionStorage.setItem("logout", "true");
				sessionStorage.removeItem("playerName");
			});
		},
		mobilePhone: function (e) {
			var t = e.commit;
			var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			if (n) {
				t(s.COME_FROM_MOBILE);
			}
			return n;
		},
		changeTheme: function (e, t) {
			var n = e.commit;
			if (t === "tema0") {
				setDarkTheme(false);
				setTwilightTheme(false);
				setCustomTheme(false);
				setMarsTheme(false);
				localStorage.removeItem("mapColor");
			} else if (t === "tema1") {
				setTwilightTheme(false);
				setDarkTheme(true);
				setMarsTheme(false);
				setCustomTheme(false);
				localStorage.removeItem("mapColor");
			} else if (t === "tema2") {
				setDarkTheme(false);
				setTwilightTheme(true);
				setMarsTheme(false);
				setCustomTheme(false);
				localStorage.removeItem("mapColor");
			} else if (t === "tema3") {
				setDarkTheme(false);
				setTwilightTheme(false);
				setMarsTheme(true);
				setCustomTheme(false);
				localStorage.removeItem("mapColor");
			} else {
				setDarkTheme(false);
				setTwilightTheme(false);
				setMarsTheme(false);
				setCustomTheme(false);
			}
			n(s.CHANGE_THEME, t);
			localStorage.setItem("theme", t);
		},
		themeInStorage: function (e) {
			var t = e.commit;
			var n = this;
			if (typeof Storage != "undefined" && (localStorage.theme !== undefined ? (n.theme = localStorage.theme, localStorage.theme === "tema0" ? (setMarsTheme(false), setDarkTheme(false), setCustomTheme(false), setTwilightTheme(false)) : localStorage.theme === "tema1" ? (setMarsTheme(false), setTwilightTheme(false), setCustomTheme(false), setDarkTheme(true)) : localStorage.theme === "tema2" ? (setMarsTheme(false), setDarkTheme(false), setCustomTheme(false), setTwilightTheme(true)) : localStorage.theme === "tema3" ? (setDarkTheme(false), setTwilightTheme(false), setCustomTheme(false), setMarsTheme(true)) : (setMarsTheme(false), setDarkTheme(false), setCustomTheme(false), setTwilightTheme(false))) : (setDarkTheme(false), setMarsTheme(false), setCustomTheme(false), setTwilightTheme(true)), localStorage.mapColor !== undefined)) {
				setDarkTheme(false);
				setMarsTheme(false);
				setTwilightTheme(false);
				var i = {
					value: localStorage.mapColor
				};
				t(s.CHANGE_OPTION_COLOR, {
					option: "mapColor",
					color: i
				});
				setCustomTheme(true);
			}
		},
		setNickName: function (e, t) {
			(0, e.commit)(s.CHANGE_NICKNAME, t);
		},
		setLoggedNickName: function (e, t) {
			(0, e.commit)(s.CHANGE_LOGGED_NAME, t);
		},
		setHat: function (e, t) {
			(0, e.commit)(s.CHANGE_HAT, t);
		},
		setGlobalSkinName: function (e, t) {
			(0, e.commit)(s.CHANGE_SKINNAME, t);
		},
		setRank: function (e, t) {
			(0, e.commit)(s.LOAD_RANK, t);
		},
		setCoins: function (e, t) {
			(0, e.commit)(s.GET_COINS, t);
		},
		setRole: function (e, t) {
			(0, e.commit)(s.SET_ROLE, t);
		},
		setColor: function (e, t) {
			(0, e.commit)(s.SET_COLOR, t);
		},
		setEmail: function (e, t) {
			(0, e.commit)(s.SET_EMAIL, t);
		},
		setId: function (e, t) {
			(0, e.commit)(s.SET_ID, t);
		},
		changeRank: function (e, t) {
			(0, e.commit)(s.CHANGE_RANK, t);
		},
		setSkinName: function (e, t) {
			e.state;
		},
		goHideChat: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "hideChat"
			});
			localStorage.setItem("hideChat", n.settings.options.hideChat);
		},
		goOldChat: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "oldChat"
			});
			setHideChat(n.settings.options.oldChat);
			localStorage.setItem("oldChat", n.settings.options.oldChat);
		},
		goNames: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "showResults"
			});
			setNames(n.settings.options.showResults);
			localStorage.setItem("showResults", n.settings.options.showResults);
		},
		goShowMass: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "showMass"
			});
			setShowMass(n.settings.options.showMass);
			localStorage.setItem("showMass", n.settings.options.showMass);
		},
		goHats: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "hideHats"
			});
			setHats(!n.settings.options.hideHats);
			localStorage.setItem("hideHats", n.settings.options.hideHats);
		},
		goSkins: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "hideSkins"
			});
			setSkins(!n.settings.options.hideSkins);
			localStorage.setItem("hideSkins", n.settings.options.hideSkins);
		},
		goSkinsShow: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "showSkins"
			});
			setSkins(n.settings.options.showSkins);
			localStorage.setItem("showSkins", n.settings.options.showSkins);
		},
		goSmooth: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "smoothView"
			});
			setSmooth(n.settings.options.smoothView);
			localStorage.setItem("smoothView", n.settings.options.smoothView);
		},
		goInfiniteScroll: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "infiniteScroll"
			});
			setZoom(n.settings.options.infiniteScroll);
			localStorage.setItem("infiniteScroll", n.settings.options.infiniteScroll);
		},
		goColors: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "colors"
			});
			setColors(n.settings.options.colors);
			localStorage.setItem("colors", n.settings.options.colors);
		},
		goCellBorder: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "cellBorder"
			});
			setCellBorder(n.settings.options.cellBorder);
			localStorage.setItem("cellBorder", n.settings.options.cellBorder);
		},
		goSectors: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "sectorsVisible"
			});
			setMapSectors(n.settings.options.sectorsVisible);
			localStorage.setItem("sectorsVisible", n.settings.options.sectorsVisible);
		},
		goSectorsColor: function (e, t) {
			var n = e.commit;
			e.state;
			n(s.CHANGE_OPTION_COLOR, {
				option: "sectorsColor",
				color: t
			});
			localStorage.setItem("sectorsColor", t.value);
		},
		goMapColor: function (e, t) {
			var n = e.commit;
			e.state;
			n(s.CHANGE_OPTION_COLOR, {
				option: "mapColor",
				color: t
			});
			setDarkTheme(false);
			setMarsTheme(false);
			setTwilightTheme(false);
			setCustomTheme(true);
			localStorage.setItem("mapColor", t.value);
		},
		goAcid: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "acidMode"
			});
			setAcid(n.settings.options.acidMode);
			localStorage.setItem("acidMode", n.settings.options.acidMode);
		},
		goLines: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "showLines"
			});
			setShowLines(n.settings.options.showLines);
			localStorage.setItem("showLines", n.settings.options.showLines);
		},
		goTransparent: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "transparentCells"
			});
			setTransparent(n.settings.options.transparentCells);
			localStorage.setItem("transparentCells", n.settings.options.transparentCells);
		},
		goArrow: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "arrowDirection"
			});
			localStorage.setItem("noarrow", !n.settings.options.arrowDirection);
		},
		mouseControlFn: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "mouseControl"
			});
			localStorage.setItem("mouseControl", n.settings.options.mouseControl);
		},
		backgroundCanvasFn: function (e) {
			var t = e.commit;
			var n = e.state;
			t(s.CHANGE_OPTION, {
				option: "backgroundCanvas"
			});
			localStorage.setItem("backgroundCanvas", n.settings.options.backgroundCanvas);
		},
		gameViewZoom: function (e, t) {
			o(e);
			if (t == "in") {
				$("#game-view").progress("increment", 1);
			} else if (t == "out") {
				$("#game-view").progress("decrement", 1);
			}
			switch ($("#game-view").progress("get percent")) {
				case 0:
					window.goZoomPercent = 2;
					break;
				case 10:
					window.goZoomPercent = 1.9;
					break;
				case 20:
					window.goZoomPercent = 1.8;
					break;
				case 30:
					window.goZoomPercent = 1.7;
					break;
				case 40:
					window.goZoomPercent = 1.6;
					break;
				case 50:
					window.goZoomPercent = 1.5;
					break;
				case 60:
					window.goZoomPercent = 1.4;
					break;
				case 70:
					window.goZoomPercent = 1.3;
					break;
				case 80:
					window.goZoomPercent = 1.2;
					break;
				case 90:
					window.goZoomPercent = 1.1;
					break;
				case 100:
					window.goZoomPercent = 1;
			}
			localStorage.setItem("goZoomPercent", $("#game-view").progress("get percent"));
		},
		updateHatList: function (e, t, n) {
			var i = e.commit;
			e.state;
			i(s.HAT_LIST, t, n);
		},
		setPrivateSkins: function (e, t) {
			var n = e.commit;
			e.state;
			n(s.PRIVATE_SKINS, t);
		},
		getHat: function (e, t) {
			var n = e.commit;
			e.state;
			if (window.sesiriSlike == undefined) {
				return false;
			}
			if (t == null) {
				return false;
			}
			if (t.indexOf("<") != -1 & t.indexOf(">") != -1) {
				var i = t.lastIndexOf("<");
				var o = t.lastIndexOf(">");
				return !!window.sesiriSlike[t.slice(i + 1, o)] && (n(s.CHANGE_HAT, {
					name: window.sesiriSlike[t.slice(i + 1, o)].src
				}), true);
			}
			return false;
		},
		unshiftPrivateSkin: function (e, t) {
			e.state.randomSkins.unshift(t);
		},
		randomList: function (e, t) {
			var n = e.state;
			var i = t.sort(function () {
				return 0.5 - Math.random();
			});
			n.randomSkins = i;
		}
	};
	a = {};
	i(a, s.CHANGE_OPTION, function (e, t) {
		var n = t.option;
		e.settings.options[n] = !e.settings.options[n];
	});
	i(a, s.CHANGE_OPTION_COLOR, function (e, t) {
		var n = t.option;
		var i = t.color;
		e.settings.options[n] = i.value;
	});
	i(a, s.COME_FROM_MOBILE, function (e) {
		e.settings.options.mouseControl = false;
		e.on_mobile = true;
	});
	i(a, s.LOGIN, function (e, t) {
		var n = t.arg;
		e.am_logged_in = n;
	});
	i(a, s.CHANGE_SKINNAME, function (e, t) {
		var n = t.name;
		e.globalSkinName = n;
	});
	i(a, s.LOAD_RANK, function (e, t) {
		var n = t.name;
		e.rank = n;
		e.rankGame = n;
	});
	i(a, s.SET_ROLE, function (e, t) {
		var n = t.role;
		e.role = n;
	});
	i(a, s.SET_COLOR, function (e, t) {
		var n = t.color;
		window.clrdMsg = n;
		e.color = n;
	});
	i(a, s.SET_EMAIL, function (e, t) {
		var n = t.email;
		e.email = n;
	});
	i(a, s.SET_ID, function (e, t) {
		var n = t.id;
		e.id = n;
	});
	i(a, s.CHANGE_RANK, function (e, t) {
		var n = t.name;
		e.rank = n;
	});
	i(a, s.CHANGE_NICKNAME, function (e, t) {
		var n = t.name;
		e.nickname = n;
	});
	i(a, s.GET_COINS, function (e, t) {
		var n = t.coins;
		e.coins = n;
	});
	i(a, s.CHANGE_LOGGED_NAME, function (e, t) {
		var n = t.name;
		e.loggedNickName = n;
	});
	i(a, s.CHANGE_HAT, function (e, t) {
		var n = t.name;
		e.hat = n;
	});
	i(a, "setEmail", function (e, t) {
		e.email = t;
	});
	i(a, "setId", function (e, t) {
		e.id = t;
	});
	i(a, "toggleLowGraphics", function (e, t) {
		e.lowGraphics = t;
	});
	i(a, "updateNickName", function (e, t) {
		e.nickname = t;
	});
	i(a, s.HAT_LIST, function (e, t) {
		var n = t.list;
		var i = t.my;
		e.hatList.list = n;
		e.hatList.my = i;
	});
	i(a, s.PRIVATE_SKINS, function (e, t) {
		var n = t.list;
		e.privateSkins = n;
	});
	i(a, s.ACTIVE_SKIN, function (e, t) {
		e.activeSkin = t;
	});
	i(a, s.SET_BANNED, function (e, t) {
		e.banned.type = t.type;
		e.banned.reason = t.reason;
		e.banned.date_from = t.date_from;
		e.banned.date_to = t.date_to;
		e.banned.nickname = t.nickname;
		e.banned.server = t.server;
	});
	i(a, s.CHANGE_THEME, function (e, t) {
		e.theme = t;
	});
	var d = a;
	t.default = {
		state: l,
		getters: c,
		actions: u,
		mutations: d
	};
}, function (e, t, n) {
	"use strict";

	function i(e, t, n) {
		if (t in e) {
			Object.defineProperty(e, t, {
				value: n,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			e[t] = n;
		}
		return e;
	}
	Object.defineProperty(t, "__esModule", {
		value: true
	});
	var o;
	var a = function (e) {
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
	}(n(8));
	var s = {
		activeServer: "",
		minionServer: false,
		servers: [{
			name: "FFA#1",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 1,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "MINIONS#2",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 2,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: true,
			banned_type: 0
		}, {
			name: "INSTANT MERGE#3",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 3,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "MEGA SPLIT#4",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 4,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "EXPERIMENTAL#5",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 5,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "RAINBOW#6",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 6,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "VIRUS MINES#7",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 7,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "OLD EXP#8",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 8,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "TEAMS#9",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 9,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}, {
			name: "SELF-FEED#10",
			ip: "195.201.88.91",
			ips: "agar2.emupedia.net/ws3/",
			shortUrl: 10,
			currentPlayers: 0,
			allPlayers: 0,
			spectators: 0,
			maxPlayers: 0,
			gamePort: "",
			hidden_from_world: false,
			minionServer: false,
			banned_type: 0
		}]
	};
	var r = {
		allServers: function (e) {
			return e.servers;
		},
		activeServer: function (e) {
			return e.activeServer;
		},
		minionServer: function (e) {
			return e.minionServer;
		}
	};
	var l = {
		changeServer: function (e, t) {
			var n = e.commit;
			var i = e.state;
			var o = e.rootState;
			var s = t;
			if (i.servers[s] == undefined || i.servers[s].hidden_from_world && !o.main.am_logged_in) {
				s = 0;
			}
			if (location.protocol != "https:") {
				r = i.servers[s].ip + ":" + i.servers[s].gamePort;
			} else {
				var r = i.servers[s].ips + (i.servers[s].gamePort !== "" ? ":" + i.servers[s].gamePort : "");
			}
			var l = i.servers[s].shortUrl;
			var c = i.servers[s].name;
			var u = i.servers[s].minionServer;
			window.CONNECTION_URL = r;
			sessionStorage.setItem("sessionUrl", l);
			sessionStorage.setItem("server", r);
			sessionStorage.setItem("serverName", c);
			n(a.CHANGE_SERVER, {
				serverName: c
			});
			n(a.CHANGE_SERVER_TYPE, {
				minionServer: u
			});
			if (t !== undefined) {
				console.log(r);
				//setRegion(r);
			}
		},
		getPlayerStats: function (e) {
			e.commit;
			var t = e.state;
			var n = e.rootState;
			var i = "data/servers.json?v=" + +new Date();
			n.main.form.get_json(i).then(function (e) {
				for (var n in e) {
					(function (n) {
						if (e[n].index) {
							var i = t.servers.find(function (t) {
								return t.shortUrl === e[n].index;
							});
							if (i) {
								i.allPlayers = e[n].current_players;
								i.maxPlayers = e[n].max_players;
							}
						}
					})(n);
				}
			}, function (e) {
				console.log("Servers stats does not work: => " + e);
			});
		},
		setBanOnServer: function (e, t, n) {
			e.commit;
		}
	};
	o = {};
	i(o, a.CHANGE_SERVER, function (e, t) {
		var n = t.serverName;
		e.activeServer = n;
	});
	i(o, a.CHANGE_SERVER_TYPE, function (e, t) {
		var n = t.minionServer;
		e.minionServer = n;
	});
	var c = o;
	t.default = {
		state: s,
		getters: r,
		actions: l,
		mutations: c
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
	t.default = a;
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
	var a = function (e) {
		if (e && e.__esModule) {
			return e;
		} else {
			return {
				default: e
			};
		}
	}(n(56));
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
	t.default = s;
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#visualEffects{display:none}.footer-links{margin:70px auto;text-align:center}.footer-links a{float:left;width:250px;color:#fff;text-align:center;padding:7px 10px;white-space:nowrap;display:block;border-radius:30px;margin:10px;text-shadow:0 0 2px #000;background:hsla(0,0%,100%,.4);transition:background 1s}.footer-links a:hover{background:hsla(33,13%,67%,.83);color:#fff}.main-page-wrap{margin:0 auto}#facebook-page,.safe-internet{border:5px solid hsla(0,0%,100%,.4);overflow-y:auto}.safe-internet{color:#fff;padding:10px;height:500px}.fb-page{border-radius:30px;max-width:100%;width:100%}.homepage-ad{text-align:center;margin:20px auto}.hv>ins{margin:0 auto}.gift{cursor:pointer}@media only screen and (min-width:1200px){.ui.mini.modal{width:360px;margin:0 0 0 -180px}#visualEffects{display:block;position:fixed;z-index:8;cursor:pointer;left:30px;top:60px;color:gold}}@media only screen and (min-width:992px){.ui.mini.modal{width:340px;margin:0 0 0 -170px}}@media only screen and (min-width:768px){.ui.mini.modal{width:35.2%;margin:0 0 0 -17.6%}}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#contact{max-width:100%;width:300px;margin:0 auto;margin-top:50px}#contact form{position:absolute;top:50%;left:50%;margin:-187px 0 0 -150px;width:299px;height:375px}#contact input,#contact textarea{background:transparent;color:#fff;border-color:#fff}#contact h2,#contact label{color:#fff}@media (max-width:767px){#contact form{position:absolute;margin-top:100px;top:0;left:50%}}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#contact{max-width:100%;width:300px;margin:0 auto;margin-top:50px}.cont-page{width:660px!important}.facebook-chat{margin-top:61px}#contact form{position:absolute;top:50%;left:50%;margin:-187px 0 0 -150px;width:299px;height:375px}#contact input,#contact textarea{background:transparent;color:#fff;border-color:#fff}#contact h2,#contact label{color:#fff}@media (max-width:767px){.cont-page form{position:relative!important;margin-top:0!important;top:0;left:50%}.cont-page{width:100%!important}.facebook-chat{margin:0 auto;text-align:center}}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#rang-page .item,#rang-page .ordered .item:before,#rang-page em,#rang-page h1,#rang-page h3{color:#fff;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#rang-page .item.first{font-size:20px}#rang-page .item.second{font-size:18px}#rang-page .item.third{font-size:16px}.rang-title{display:inline-block;margin-right:5%}.dateranger{display:inline-block;position:relative;bottom:10px}#rang-page .ui.tab.segment{background:transparent;border:none}#rang-page input{border-radius:30px;border:none;width:100%;text-align:center;color:#fff;font-family:Ubuntu;font-size:14px;white-space:nowrap;background:rgba(0,0,0,.44);outline:none;padding:10px}#rang-page .ui.secondary.pointing.menu .active.item{border-color:#fff}#rang-page .ui.stackable.three.column.grid>.column{margin-top:30px}#rang-page .x.icon{cursor:pointer}#rang-page .dateranger button{border:2px solid hsla(0,0%,100%,.4);background:rgba(0,0,0,.44);text-align:center;color:#fff;box-shadow:none!important}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#donate-form,#donate-form .dropdown{z-index:300}#contribute>.segment{margin:0 auto}#contribute>.segment p{color:#000}.paypal-donate-image{max-width:100%;width:400px;padding:0}#contribute .icon,#contribute h2,#contribute h3,#contribute label,#contribute p,#contribute textarea{color:#000}#contribute .ui.input{border:1px solid rgba(34,36,38,.15)!important}#contribute ::placeholder{color:grey!important;opacity:1}#contribute :-ms-input-placeholder,#contribute ::-ms-input-placeholder{color:grey!important}#contribute{color:#fff;margin-top:80px;font-size:18px}.label-divider{clear:both;margin-top:10px}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".hats-list[data-v-3b37852a]{margin-top:25px}.hats-list .image[data-v-3b37852a]{height:200px;overflow:hidden}.hats-list .image img[data-v-3b37852a]{margin:-25% 0}.ui.card>.image.buyed[data-v-3b37852a]{background:rgba(8,128,251,.36)!important}#hats-page[data-v-3b37852a]{position:relative;z-index:1}em.info[data-v-3b37852a]{color:#fff}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "@media (min-width:767px){.skin-preview[data-v-42cb7b2b]{margin-top:70px;margin-bottom:70px;position:relative}.skin-preview .ui.card[data-v-42cb7b2b],.skin-preview .ui.cards>.card[data-v-42cb7b2b]{width:400px;position:absolute;top:50%;left:50%;margin:-253px 0 0 -200px}}.skin-preview .ui.card .content[data-v-42cb7b2b]{cursor:pointer}.skin-preview .ui.card .image[data-v-42cb7b2b]{padding:10px}.image[data-v-42cb7b2b]{cursor:pointer}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#registerPage{max-width:100%;width:325px;margin:0 auto;margin-top:50px}#registerPage form{position:absolute;top:50%;left:50%;margin:-150px 0 0 -162px;width:325px;height:300px}#registerPage .start-btn{width:325px}#registerPage .ui.input{border:none}#registerPage input{background:transparent;color:#fff;border:none;border-bottom:2px solid #fff}#loginPage label,#registerPage .horizontal.divider,#registerPage h3{color:#fff}#registerPage .ui.icon.input>i.link.icon{color:#fff;opacity:1}#registerPage .error-text{color:#fff466}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#nokey[data-v-4e582ddd]{z-index:1!important}iframe[data-v-4e582ddd]{width:100%;height:calc(100vh - 46px);border:none;z-index:4;position:relative}.game-list[data-v-4e582ddd]{padding:30px}.card[data-v-4e582ddd]{max-width:250px!important;cursor:pointer}@media (max-width:767px){iframe[data-v-4e582ddd]{height:calc(100vh - 46px)}.view[data-v-4e582ddd]{margin-top:27px}}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#loginPage{max-width:100%;width:325px;margin:0 auto;margin-top:50px}#loginPage form,.message-status{position:absolute;top:50%;left:50%;margin:-90px 0 0 -162px;width:325px;height:180px}#loginPage .start-btn{width:325px}#loginPage .horizontal.divider,#loginPage h3,#loginPage label{color:#fff}.login-facebook{border:5px solid hsla(0,0%,100%,.4);border-radius:30px;width:100%;text-align:center;color:#fff;font-family:Ubuntu;font-size:14px;white-space:nowrap;background:rgba(0,0,0,.44);outline:none;margin-bottom:8px;padding:10px;text-transform:uppercase}.login-facebook:before{content:\"\";box-sizing:border-box;position:absolute;top:0;left:0;width:44px;height:100%;border-right:3px solid hsla(0,0%,100%,.4);background:url(\"/agar.rs/assets/images/icon-facebook.png\") 10px 10px no-repeat;border-radius:0;border-left:none;border-top:none;border-bottom:none}.forgot-password-link{text-align:center;margin-top:15px}.forgot-password-link>a{color:#fff;text-decoration:none}.forgot-password-link>a:hover{color:#fff}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".ui.container[data-v-6099300a]{margin-top:70px}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".color-option[data-v-6c255638],.ui.toggle.checkbox[data-v-6c255638]{width:100%;display:block;margin-bottom:5px}#more-settings .content h3[data-v-6c255638],.color-option label[data-v-6c255638],.ui.toggle.checkbox label[data-v-6c255638]{color:#fff}#more-settings .content[data-v-6c255638],#more-settings>.header[data-v-6c255638]{background:#939393}#more-settings>.header[data-v-6c255638]{color:#fff}#more-settings .reset-settings[data-v-6c255638]{display:inline-block;text-align:center;margin-left:5%}.reset-settings .start-btn[data-v-6c255638]{font-size:14px}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".srv-title[data-v-713f4628]{font-size:18px;margin-top:23px;color:#fff;font-family:Ubuntu;text-shadow:0 0 2px #000}.srv-name[data-v-713f4628]{font-size:15px;margin-top:13px;margin-bottom:10px;white-space:nowrap;color:#fff;font-weight:700;font-family:Ubuntu;text-shadow:0 0 2px #000}.srv-info[data-v-713f4628]{font-size:14px;color:#fff;font-family:Ubuntu}.component[data-v-713f4628]{position:relative;font-family:Lato,Arial,sans-serif;width:300px;height:300px;margin:0 auto}.cn-button[data-v-713f4628]{position:absolute;left:50%;z-index:11;margin-top:63px;margin-left:-80px;padding-top:0;width:140px;height:140px;border:none;border-radius:50%;background:#0d2739;color:#000;text-align:center;font-weight:700;font-size:1.5em;text-transform:uppercase;cursor:pointer;-webkit-backface-visibility:hidden;border:5px solid hsla(0,0%,100%,.4)}.csstransforms .cn-wrapper[data-v-713f4628]{position:absolute;left:50%;z-index:10;margin-left:-10.02em;width:19em;height:19em;border-radius:50%;background:transparent;opacity:0;transition:all .3s ease .3s;-webkit-transform:scale(.1);transform:scale(.1);pointer-events:none;overflow:hidden}.cn-wrapper ul[data-v-713f4628]{margin:0;padding:0;list-style:none;position:relative}.csstransforms .cn-wrapper[data-v-713f4628]:after{content:\".\";display:block;font-size:2em;width:7.3625em;height:7.3625em;width:4.6015625em;height:4.6015625em;position:absolute;left:50%;margin-left:-2.30078125em;top:50%;margin-top:-2.30078125em;border-radius:50%;z-index:10;color:transparent}.csstransforms .opened-nav[data-v-713f4628]{border-radius:50%;opacity:1;transition:all .3s ease;-webkit-transform:scale(1);transform:scale(1);pointer-events:auto}.csstransforms .cn-wrapper li[data-v-713f4628]{position:absolute;top:50%;left:50%;overflow:hidden;margin-top:-.96484375em;margin-left:-7.421875em;width:7.421875em;height:7.421875em;font-size:1.5em;transition:all .3s ease;-webkit-transform:rotate(76deg) skew(60deg);transform:rotate(76deg) skew(60deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%;pointer-events:none;cursor:pointer;transition:background 1s}.csstransforms .cn-wrapper li a[data-v-713f4628]{position:absolute;right:-5.380859375em;bottom:-5.380859375em;display:block;width:10.76171875em;height:10.5em;border-radius:50%;color:#fff;text-align:center;text-decoration:none;font-size:1.2em;line-height:2;-webkit-transform:skew(-54deg) rotate(-73deg) scale(1);transform:skew(-54deg) rotate(-73deg) scale(1);pointer-events:auto}.csstransforms .cn-wrapper li a span[data-v-713f4628]{position:relative;top:.2em;display:block;font-weight:700;text-transform:uppercase;font-size:22px}.csstransforms .cn-wrapper li[data-v-713f4628]:hover{background:radial-gradient(transparent 35%,#fff 0);color:#000}.csstransforms .cn-wrapper li:hover a[data-v-713f4628]{color:#000}.csstransforms .cn-wrapper li a[data-v-713f4628]:focus{position:fixed}.csstransforms .opened-nav li[data-v-713f4628]{transition:all .3s ease .3s}.csstransforms .opened-nav li[data-v-713f4628]:first-child{background-color:rgba(0,0,0,.2);-webkit-transform:rotate(76deg) skew(54deg);transform:rotate(76deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(2){background-color:rgba(0,0,0,.25);-webkit-transform:rotate(40deg) skew(54deg);transform:rotate(40deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(3){background-color:rgba(0,0,0,.3);-webkit-transform:rotate(4deg) skew(54deg);transform:rotate(4deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(4){background-color:rgba(0,0,0,.35);-webkit-transform:rotate(-32deg) skew(54deg);transform:rotate(-32deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(5){background-color:rgba(0,0,0,.4);-webkit-transform:rotate(-68deg) skew(54deg);transform:rotate(-68deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(6){background-color:rgba(0,0,0,.45);-webkit-transform:rotate(-104deg) skew(54deg);transform:rotate(-104deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(7){background-color:rgba(0,0,0,.5);-webkit-transform:rotate(-140deg) skew(54deg);transform:rotate(-140deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(8){background-color:rgba(0,0,0,.55);-webkit-transform:rotate(-176deg) skew(54deg);transform:rotate(-176deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(9){background-color:rgba(0,0,0,.6);-webkit-transform:rotate(-212deg) skew(54deg);transform:rotate(-212deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(10){background-color:rgba(0,0,0,.65);-webkit-transform:rotate(-248deg) skew(54deg);transform:rotate(-248deg) skew(54deg)}.csstransforms .opened-nav li[data-v-713f4628]:nth-child(11){background-color:rgba(0,0,0,.7);-webkit-transform:rotate(112deg) skew(54deg);transform:rotate(112deg) skew(54deg)}.srv-active[data-v-713f4628]{background:rgba(220,76,49,.82)!important}.srv-active a[data-v-713f4628]{color:#fff!important}.no-csstransforms .cn-wrapper[data-v-713f4628]{overflow:hidden;margin:10em auto;padding:.5em;text-align:center}.no-csstransforms .cn-wrapper ul[data-v-713f4628]{display:inline-block}.no-csstransforms .cn-wrapper li[data-v-713f4628]{float:left;width:5em;height:5em;background-color:#fff;text-align:center;font-size:1em;line-height:5em}.no-csstransforms .cn-wrapper li a[data-v-713f4628]{display:block;width:100%;height:100%;color:inherit;text-decoration:none}.no-csstransforms .cn-wrapper li a[data-v-713f4628]:active,.no-csstransforms .cn-wrapper li a[data-v-713f4628]:focus,.no-csstransforms .cn-wrapper li a[data-v-713f4628]:hover{background:hsla(33,13%,67%,.95)!important}.no-csstransforms .cn-wrapper li.active a[data-v-713f4628]{background-color:#6f325c;color:#fff}.no-csstransforms .cn-button[data-v-713f4628]{display:none}@media (max-width:767px) and (orientation:landscape){.component[data-v-713f4628]{width:200px;height:200px}.server-list-wraper[data-v-713f4628]{position:relative;bottom:20px}.cn-button[data-v-713f4628],.csstransforms .cn-wrapper[data-v-713f4628]{transform:scale(.8);-webkit-transform:scale(.8);-moz-transform:scale(.8);-ms-transform:scale(.8);-o-transform:scale(.8)}}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#rules[data-v-7810d573]{color:#fff;margin-top:80px;font-size:18px}p[data-v-7810d573]{text-align:justify}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "#rules{color:#fff;margin-top:80px;font-size:18px}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".ads-skins{text-align:center;min-height:120px;z-index:12}.ads-skins ins{z-index:12}.vote-skin{position:absolute;bottom:0;font-size:26px;cursor:pointer;color:#db2828}.vote{color:silver}.vote-number{color:darkred;right:10px}.skin-label{position:absolute}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, "", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".coins-img{padding-right:5px;width:23px!important}", ""]);
}, function (e, t, n) {
	(e.exports = n(1)()).push([e.i, ".pillory{margin-top:80px}", ""]);
}, function (e, t, n) {
	n(164);
	var i = n(0)(n(23), n(138), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(165);
	var i = n(0)(n(24), n(139), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(149);
	var i = n(0)(n(25), n(118), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(146);
	var i = n(0)(n(28), n(115), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	var i = n(0)(n(29), n(125), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	var i = n(0)(n(30), n(132), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(156);
	var i = n(0)(n(31), n(129), "data-v-6c255638", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(163);
	var i = n(0)(n(32), n(137), "data-v-9c829956", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(159);
	var i = n(0)(n(33), n(133), "data-v-7752e4a5", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(157);
	var i = n(0)(n(34), n(130), "data-v-713f4628", null);
	e.exports = i.exports;
}, function (e, t, n) {
	var i = n(0)(n(35), n(128), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	var i = n(0)(n(36), n(126), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(150);
	var i = n(0)(n(37), n(119), "data-v-3b37852a", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(155);
	var i = n(0)(n(38), n(127), "data-v-6099300a", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(144);
	var i = n(0)(n(39), n(113), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(145);
	var i = n(0)(n(40), n(114), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(148);
	var i = n(0)(n(41), n(117), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	var i = n(0)(n(42), n(123), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(143);
	var i = n(0)(n(43), n(112), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(154);
	var i = n(0)(n(44), n(124), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(153);
	var i = n(0)(n(45), n(122), "data-v-4e582ddd", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(166);
	var i = n(0)(n(46), n(141), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(160);
	var i = n(0)(n(47), n(134), "data-v-7810d573", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(147);
	var i = n(0)(n(48), n(116), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(152);
	var i = n(0)(n(49), n(121), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(161);
	var i = n(0)(n(50), n(135), null, null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(151);
	var i = n(0)(n(51), n(120), "data-v-42cb7b2b", null);
	e.exports = i.exports;
}, function (e, t, n) {
	n(162);
	var i = n(0)(n(52), n(136), null, null);
	e.exports = i.exports;
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.show,
					expression: "show"
				}],
				class: [e.show ? "ui active dimmer" : "ui dimmer", "fixed"]
			}, [n("div", {
				staticClass: "ui text loader"
			}, [e._v("Učitavanje...")])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				staticClass: "page-section"
			}, [n("div", {
				attrs: {
					id: "helloDialog"
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h1", {
				staticClass: "site-name"
			}, [e._v("\n\n                           A"), n("span", [e._v("gar")]), e._v(" B"), n("span", [e._v("alkan")]), n("div", [e._v("OpenSource")]), e._v(" "), e.am_logged_in ? n("span", {
				attrs: {
					"data-tooltip": "Klikni da preuzmeš dnevni bonus"
				}
			}, [n("i", {
				staticClass: "gift icon",
				on: {
					click: function (t) {
						e.GetDailyBonus();
					}
				}
			})]) : e._e(), e._v(" "), n("div", {
				staticClass: "clearfix"
			})])])]), e._v(" "), n("div", {
				staticClass: "main-page-wrap"
			}, [n("div", {
				staticClass: "ui grid"
			}, [n("div", {
				staticClass: "mobile-row-1 seven wide mobile column six wide tablet column six wide computer column six wide large screen column",
				attrs: {
					id: "nickname-column"
				}
			}, [n("div", [e.hat && e.hat != "" && e.hatDisplay ? n("img", {
				attrs: {
					id: "hat",
					src: e.hatLink
				}
			}) : e._e(), e._v(" "), n("div", {
				staticClass: "skin-reveal-wrap"
			}, [n("i", {
				staticClass: "angle left icon",
				on: {
					click: e.prevSkin
				}
			}), e._v(" "), n("div", {
				attrs: {
					id: "skin-reveal"
				}
			}, [n("div", {
				staticClass: "visible content",
				style: "background-image:url(/agar.rs/assets/images/skins/" + e.safeSN(e.globalSkinName) + ".png)"
			}, [e.am_logged_in ? n("h3", {
				staticClass: "text-nickname"
			}, [e._v(e._s(e.safeName(e.loggedNickName)))]) : n("input", {
				attrs: {
					type: "text",
					id: "nickname",
					placeholder: e.$t("home.type_name"),
					maxlength: e.maxNickName,
					autofocus: ""
				},
				domProps: {
					value: e.nickname
				},
				on: {
					input: e.updateNickname
				}
			})])]), e._v(" "), n("i", {
				staticClass: "angle right icon",
				on: {
					click: e.nextSkin
				}
			})]), e._v(" "), n("div", {
				staticClass: "clearfix"
			}), e._v(" "), n("div", {
				staticClass: "text-center"
			}, [n("input", {
				class: e.globalSkinName.length == 16 ? "no-skin-name" : "",
				attrs: {
					type: "text",
					id: "skin",
					placeholder: e.$t("home.skin"),
					maxlength: e.maxNickName
				},
				domProps: {
					value: e.globalSkinName
				},
				on: {
					input: e.updateGlobalSkinName
				}
			})]), e._v(" "), n("div", {
				attrs: {
					id: "fancy-nick-icons"
				}
			}, [n("i", {
				staticClass: "connectdevelop link icon",
				attrs: {
					title: "Fancy Nick"
				},
				on: {
					click: function (t) {
						e.openFancyNickModal();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "save link icon",
				attrs: {
					title: "My Nicknames"
				},
				on: {
					click: function (t) {
						e.openSavedNick();
					}
				}
			}), e._v(" "), e.am_logged_in ? n("button", {
				staticClass: "icon-btn private-skin-ico",
				attrs: {
					type: "button",
					"data-tooltip": e.$t("logged.your_private_skins"),
					"data-position": "bottom center",
					"data-inverted": ""
				},
				on: {
					click: function (t) {
						e.openPrivateSkinsModal();
					}
				}
			}, [n("i", {
				staticClass: "image icon"
			})]) : e._e()])])]), e._v(" "), n("div", {
				staticClass: "mobile-row-2 two wide mobile column four wide tablet column five wide computer column five wide large screen column",
				attrs: {
					id: "skin-column"
				}
			}, [n("button", {
				staticClass: "play-game-btn",
				attrs: {
					type: "button"
				},
				on: {
					click: function (t) {
						e.startGame();
					}
				}
			}, [n("i", {
				staticClass: "notched circle loading icon connecting-to-server",
				staticStyle: {
					display: "none"
				}
			}), e._v(" "), n("i", {
				staticClass: "play icon",
				attrs: {
					id: "play-game-icon"
				}
			})]), e._v(" "), n("button", {
				staticClass: "icon-btn spec-btn",
				attrs: {
					type: "button",
					"data-tooltip": e.$t("home.spectate"),
					"data-position": "bottom center",
					"data-inverted": ""
				},
				on: {
					click: function (t) {
						e.spec();
					}
				}
			}, [n("i", {
				staticClass: "unhide icon"
			})]), e._v(" "), n("button", {
				staticClass: "icon-btn settings-btn",
				attrs: {
					type: "button",
					"data-tooltip": e.$t("options.all_settings"),
					"data-position": "bottom center",
					"data-inverted": "",
					onclick: "$('#more-settings').modal('show'); return false;"
				}
			}, [n("i", {
				staticClass: "settings icon"
			})]), e._v(" "), e.am_logged_in ? n("router-link", {
				staticClass: "icon-btn my-statistic-btn",
				attrs: {
					to: "/agar.rs/me",
					tag: "button",
					type: "button",
					"data-tooltip": e.$t("logged.my_statistic"),
					"data-position": "bottom center",
					"data-inverted": ""
				},
				on: {
					click: function (t) {
						e.spec();
					}
				}
			}, [n("i", {
				staticClass: "chart line icon"
			})]) : e._e()], 1), e._v(" "), n("div", {
				staticClass: "mobile-row-3 seven wide mobile column six wide tablet column five wide computer column five wide large screen column"
			}, [n("server-list"), e._v(" "), n("settings", {
				staticClass: "home-settings"
			})], 1)])]), e._v(" "), e.am_logged_in ? n("div", {
				attrs: {
					id: "logged-in-checkboxes"
				}
			}, [n("div", {
				staticClass: "ui toggle checkbox badge-checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.rankDisplay
				},
				on: {
					change: function (t) {
						e.toggleBadge();
					}
				}
			}), e._v(" "), n("label", [n("h4", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.rank != "" && e.rank != null,
					expression: "rank != '' && rank != null"
				}],
				staticClass: "header"
			}, [e._v(" " + e._s(e.$t("new_21_09.badge")) + ": " + e._s(e._f("ranking")(e.rank)))])])]), e._v(" "), e.hat && e.hat != "" ? n("div", {
				staticClass: "ui toggle checkbox hat-checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.hatDisplay
				},
				on: {
					change: function (t) {
						e.toggleHat();
					}
				}
			}), e._v(" "), n("label", [n("h4", {
				staticClass: "header"
			}, [e._v(e._s(e.$t("logged.hat")))])])]) : e._e()]) : e._e(), e._v(" "), n("i", {
				staticClass: "animated infinite pulse chevron down\nicon",
				attrs: {
					id: "scroll-down"
				}
			}), e._v(" "), n("div", {
				staticClass: "clearfix"
			}), e._v(" "), e.fromApp ? e._e() : n("div", {
				staticClass: "sixteen wide tablet column sixteen wide large screen column "
			}, [n("div", {
				staticClass: "homepage-ad",
				staticStyle: {
					height: "90px!important",
					position: "relative",
					"z-index": "1"
				}
			}, 1), e._v(" "), n("div", {
				staticClass: "clearfix"
			})])])]), e._v(" "), n("div", {
				staticClass: "page-section second-section"
			}, [n("div", {
				staticClass: "ui container"
			}, [n("div", {
				staticClass: "ui stackable grid"
			}, [n("div", {
				staticClass: "clearfix"
			}), e._v(" "), e.fromApp ? e._e() : n("div", {
				staticClass: "eight wide tablet column eight wide computer column seven wide large screen column"
			}, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2)]), e._v(" "), n("div", {
				staticClass: "eight wide tablet column eight wide computer column seven wide large screen column"
			}, [n("div", {
				staticClass: "safe-internet"
			}, [n("safe-internet")], 1)])])]), e._v(" "), n("div", {
				staticClass: "clearfix"
			}), e._v(" "), n("div", {
				staticClass: "ui container"
			}, [n("div", {
				staticClass: "footer-links"
			}, [n("router-link", {
				attrs: {
					tag: "a",
					to: "/agar.rs/rules"
				}
			}, [n("i", {
				staticClass: "warning sign icon"
			}), e._v(e._s(e.$t("home.rules")) + "\n                   ")]), e._v(" "), n("router-link", {
				attrs: {
					tag: "a",
					to: "/agar.rs/privacy_policy"
				}
			}, [n("i", {
				staticClass: "info sign icon"
			}), e._v(e._s(e.$t("privacy.title")) + "\n                   ")]), e._v(" "), n("router-link", {
				attrs: {
					tag: "a",
					to: "/agar.rs/pillory"
				}
			}, [n("i", {
				staticClass: "ban icon"
			}), e._v(e._s(e.$t("new_21_09.pillory")) + "\n                   ")]), e._v(" ")], 1)]), e._v(" "), n("div", {
				staticClass: "clearfix"
			})]), e._v(" "), n("div", {
				staticClass: "swal-to-go"
			}), e._v(" "), n("saved-nicknames"), e._v(" "), n("div", {
				staticClass: "ui basic modal",
				attrs: {
					id: "set-nick-modal"
				}
			}, [n("div", {
				staticClass: "ui icon header"
			}, [n("i", {
				staticClass: "id badge icon"
			}), e._v("\n               " + e._s(e.$t("home.type_name")) + "\n           ")]), e._v(" "), n("div", {
				staticClass: "content"
			}, [n("p", [e._v(e._s(e.$t("logged.type_nick_desc")))]), e._v(" "), n("div", {
				staticClass: "ui icon input pn-input"
			}, [n("input", {
				attrs: {
					type: "text",
					id: "nickname-modal-input",
					placeholder: e.$t("home.type_name"),
					maxlength: e.maxNickName,
					autofocus: ""
				},
				on: {
					keydown: function (t) {
						e.modalNameEmpty = false;
					}
				}
			})]), e._v(" "), n("p", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.modalNameEmpty,
					expression: "modalNameEmpty"
				}],
				staticClass: "error"
			}, [e._v(e._s(e.$t("logged.no_name")))])]), e._v(" "), n("div", {
				staticClass: "actions"
			}, [n("div", {
				staticClass: "ui green inverted button",
				on: {
					click: function (t) {
						e.SaveNickname();
					}
				}
			}, [n("i", {
				staticClass: "checkmark icon"
			}), e._v("\n                   " + e._s(e.$t("logged.save")) + "\n               ")]), e._v(" "), n("div", {
				staticClass: "ui red basic inverted button",
				on: {
					click: function (t) {
						e.Logout();
					}
				}
			}, [n("i", {
				staticClass: "remove icon"
			}), e._v("\n                   " + e._s(e.$t("home.logout")) + "\n               ")])])]), e._v(" "), n("div", {
				staticClass: "ui modal",
				attrs: {
					id: "player-private-skins-modal"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n               " + e._s(e.$t("logged.your_private_skins")) + "\n           ")]), e._v(" "), n("div", {
				staticClass: "content"
			}, [n("div", {}, e._l(e.privateSkins, function (t) {
				return n("img", {
					class: [t.skin_name == e.activeSkin ? "active" : "", "private-skins ui image"],
					attrs: {
						src: "/agar.rs/assets/images/skins/" + t.skin_name + ".png"
					},
					on: {
						click: function (n) {
							e.activateSkin(t.skin_name);
						}
					}
				});
			})), e._v(" "), e.privateSkins.length == 0 ? n("p", [e._v("\n                   " + e._s(e.$t("logged.no_private_skins")) + "\n               ")]) : e._e(), e._v(" "), n("div", {
				staticClass: "clearfix"
			})])])], 1);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "facebook-page"
				}
			}, [n("iframe", {
				staticStyle: {
					border: "none",
					width: "100%"
				},
				attrs: {
					src: "/agar.rs/data/news.html"
				}
			})]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("a", {
				staticClass: "discord-link",
				attrs: {
					href: "#",
					target: "_blank"
				}
			}, [n("img", {
				staticClass: "ui pull right",
				attrs: {
					alt: "Discord",
					src: "/agar.rs/assets/images/discord.png"
				}
			})]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("a", {
				staticClass: "instagram-link",
				attrs: {
					href: "#",
					target: "_blank"
				}
			}, [n("img", {
				attrs: {
					src: "/agar.rs/assets/images/instagram.png"
				}
			})]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				attrs: {
					id: "contact"
				}
			}, [n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.contactBan();
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h2", [e._v(e._s(e.$t("contact.banned")))]), e._v(" "), e.reasonToBan != null ? n("p", [e._v("Razlog: " + e._s(e.reasonToBan))]) : e._e(), e._v(" "), e.bannedDateTo != null ? n("p", [e._v("Istek bana: " + e._s(e.bannedDateTo))]) : e._e(), e._v(" "), n("p", [e._v(e._s(e.$t("contact.banned_desc")))]), e._v(" "), n("a", {
				staticStyle: {
					color: "#fff",
					"text-decoration": "underline"
				},
				attrs: {
					href: "#"
				}
			}, [e._v("Agar Balkan")])])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ui input"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.form.email,
					expression: "form.email"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("contact.your_email"),
					type: "text",
					autofocus: ""
				},
				domProps: {
					value: e.form.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.form.email = t.target.value;
						}
					}
				}
			})]), e._v(" "), n("div", {
				staticClass: "ui form"
			}, [n("div", {
				staticClass: "field"
			}, [n("label", [e._v(e._s(e.$t("contact.messsage")))]), e._v(" "), n("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.form.message,
					expression: "form.message"
				}],
				domProps: {
					value: e.form.message
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.form.message = t.target.value;
						}
					}
				}
			})])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					disabled: e.form.message.length == 0,
					type: "submit"
				}
			}, [e._v(e._s(e.$t("contact.report")))]), e._v(" "), e.reportStatus == 1 ? n("div", {
				staticClass: "ui positive message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                    " + e._s(e.$t("contact.success")) + "\n                ")])]) : e._e(), e._v(" "), e.reportStatus == 0 ? n("div", {
				staticClass: "ui negative message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                    " + e._s(e.$t("contact.error")) + "\n                ")])]) : e._e()])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				staticClass: "cont-page",
				attrs: {
					id: "contact"
				}
			}, [n("div", {
				staticClass: "ui stackable two column grid"
			}, [n("div", {
				staticClass: "column"
			}, [n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.reportBug();
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h2", [e._v(e._s(e.$t("contact.report_contact")))])])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ui input"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.form.email,
					expression: "form.email"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("contact.your_email"),
					type: "text",
					autofocus: ""
				},
				domProps: {
					value: e.form.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.form.email = t.target.value;
						}
					}
				}
			})]), e._v(" "), n("div", {
				staticClass: "ui form"
			}, [n("div", {
				staticClass: "field"
			}, [n("label", [e._v(e._s(e.$t("contact.messsage")))]), e._v(" "), n("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.form.message,
					expression: "form.message"
				}],
				domProps: {
					value: e.form.message
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.form.message = t.target.value;
						}
					}
				}
			})])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					disabled: e.form.message.length == 0,
					type: "submit"
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-send"
				}
			}), e._v("\n                        " + e._s(e.$t("contact.report")) + "\n                    ")]), e._v(" "), e.reportStatus == 1 ? n("div", {
				staticClass: "ui positive message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                            " + e._s(e.$t("contact.success")) + "\n                        ")])]) : e._e(), e._v(" "), e.reportStatus == 0 ? n("div", {
				staticClass: "ui negative message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                            " + e._s(e.$t("contact.error")) + "\n                        ")])]) : e._e()])]), e._v(" "), e._m(0)])])]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "column"
			}, [n("div", {
				staticClass: "facebook-chat"
			}, [n("div", {
				staticClass: "fb-page",
				attrs: {
					"data-href": "#",
					"data-tabs": "messages",
					"data-height": "315",
					"data-small-header": "true",
					"data-adapt-container-width": "true",
					"data-hide-cover": "false",
					"data-show-facepile": "true"
				}
			}, [n("blockquote", {
				staticClass: "fb-xfbml-parse-ignore",
				attrs: {
					cite: "#"
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Agar Balkan")])])])])]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", [n("div", {
				class: [e.oldChat ? "oldChat" : "chat", e.theme + " "]
			}, [n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.oldChat,
					expression: "!oldChat"
				}],
				staticClass: "chat-header"
			}, [n("div", {
				staticClass: "block-user",
				staticStyle: {
					display: "none"
				}
			}, [e._v("\n              " + e._s(e.$t("home.block")) + " "), n("span", {
				staticClass: "block-name"
			}, [e._v(" ?")]), e._v(" "), n("button", {
				staticClass: "ui right floated small green button",
				attrs: {
					type: "button"
				},
				on: {
					click: function (t) {
						e.block();
					}
				}
			}, [e._v(e._s(e.$t("home.yes")))]), e._v(" "), n("button", {
				staticClass: "ui right floated small red button",
				attrs: {
					type: "button"
				},
				on: {
					click: function (t) {
						e.cancelBlock();
					}
				}
			}, [e._v(e._s(e.$t("home.no")))])]), e._v(" "), e.minimized ? n("span", [n("strong", {
				staticStyle: {
					color: "#fff"
				}
			}, [e._v("Chat")])]) : n("div", {
				staticClass: "chat-left-actions"
			}, [e.color != null && e.color != "" ? n("i", {
				staticClass: "large circle icon",
				style: "color:" + e.color,
				on: {
					click: function (t) {
						e.pickColor();
					}
				}
			}) : e._e(), e._v(" "), e.color != null && e.color != "" ? n("input", {
				attrs: {
					id: "chat-color-picker",
					type: "color"
				},
				domProps: {
					value: e.color
				},
				on: {
					change: e.saveColor
				}
			}) : e._e(), e._v(" "), n("i", {
				staticClass: "circular inverted zoom out link icon cursor",
				on: {
					click: function (t) {
						e.zoomFont("out");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "circular inverted zoom link icon cursor",
				on: {
					click: function (t) {
						e.zoomFont("in");
					}
				}
			})]), e._v(" "), e.on_mobile ? e._e() : n("div", {
				staticClass: "chat-center-actions"
			}, [n("i", {
				staticClass: "circular inverted image outline link icon cursor",
				attrs: {
					title: e.$t("home.without_skins")
				},
				on: {
					click: function (t) {
						e.goSkinsShow();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "circular inverted eye slash outline link icon cursor",
				attrs: {
					title: e.$t("home.transparent")
				},
				on: {
					click: function (t) {
						e.goTransparent();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "circular inverted barcode link icon cursor",
				attrs: {
					title: e.$t("home.without_lines")
				},
				on: {
					click: function (t) {
						e.goLines();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "circular inverted expand arrows alternate link icon cursor",
				attrs: {
					title: e.$t("options.infinity_zoom")
				},
				on: {
					click: function (t) {
						e.goInfiniteScroll();
					}
				}
			})]), e._v(" "), n("div", {
				staticClass: "chat-right-actions"
			}, [n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.minimized,
					expression: "!minimized"
				}],
				staticClass: "circular inverted window minimize link icon cursor",
				on: {
					click: function (t) {
						e.minimize();
					}
				}
			}), e._v(" "), n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.minimized,
					expression: "minimized"
				}],
				staticClass: "circular window inverted maximize link icon cursor",
				on: {
					click: function (t) {
						e.maximize();
					}
				}
			})])]), e._v(" "), n("div", {
				staticStyle: {
					clear: "both"
				}
			}), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.oldChat,
					expression: "!oldChat"
				}],
				staticClass: "chat-body",
				style: "font-size:" + e.fontSize + "px"
			}), e._v(" "), n("div", {
				staticClass: "chat-footer"
			}, [n("div", {
				staticClass: "ui icon input",
				attrs: {
					id: "chat_textbox-wrap"
				}
			}, [n("input", {
				attrs: {
					type: "text",
					id: "chat_textbox",
					maxlength: "70",
					placeholder: e.$t("home.enter_to_chat")
				}
			}), e._v(" "), n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.oldChat,
					expression: "!oldChat"
				}],
				staticClass: "circular inverted marker link icon",
				on: {
					click: function (t) {
						e.sendLocation();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "circular inverted smile outline link icon cursor",
				on: {
					click: function (t) {
						e.emoji = !e.emoji;
					}
				}
			})])])]), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.emoji,
					expression: "emoji"
				}],
				attrs: {
					id: "emoji-list"
				}
			}, [n("div", {
				staticClass: "center"
			}, [n("i", {
				staticClass: "em em-stuck_out_tongue_closed_eyes",
				on: {
					click: function (t) {
						e.insertEmoji("x-p");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-poop",
				on: {
					click: function (t) {
						e.insertEmoji(":poop:");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-smiley",
				on: {
					click: function (t) {
						e.insertEmoji(":D");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-smile",
				on: {
					click: function (t) {
						e.insertEmoji("=D");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-blush",
				on: {
					click: function (t) {
						e.insertEmoji(":)");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-angry",
				on: {
					click: function (t) {
						e.insertEmoji(">:(");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-cry",
				on: {
					click: function (t) {
						e.insertEmoji(":'(");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-disappointed",
				on: {
					click: function (t) {
						e.insertEmoji(":(");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-expressionless",
				on: {
					click: function (t) {
						e.insertEmoji("-.-");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-flushed",
				on: {
					click: function (t) {
						e.insertEmoji("o.o");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-heart_eyes",
				on: {
					click: function (t) {
						e.insertEmoji("*.*");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-blue_heart",
				on: {
					click: function (t) {
						e.insertEmoji("❥");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-heart",
				on: {
					click: function (t) {
						e.insertEmoji("<3");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-joy",
				on: {
					click: function (t) {
						e.insertEmoji(":'D");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-kissing_closed_eyes",
				on: {
					click: function (t) {
						e.insertEmoji(":*");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-kissing_heart",
				on: {
					click: function (t) {
						e.insertEmoji(";*");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-robot_face",
				on: {
					click: function (t) {
						e.insertEmoji(":|]");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-neutral_face",
				on: {
					click: function (t) {
						e.insertEmoji(":|");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-open_mouth",
				on: {
					click: function (t) {
						e.insertEmoji(":O");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-no_mouth",
				on: {
					click: function (t) {
						e.insertEmoji(":-$");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-relaxed",
				on: {
					click: function (t) {
						e.insertEmoji(":'>");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-thumbsup",
				on: {
					click: function (t) {
						e.insertEmoji("(y)");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-thumbsdown",
				on: {
					click: function (t) {
						e.insertEmoji("(n)");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-sunglasses",
				on: {
					click: function (t) {
						e.insertEmoji("8)");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-smirk",
				on: {
					click: function (t) {
						e.insertEmoji(":>");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-wink",
				on: {
					click: function (t) {
						e.insertEmoji(";)");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-triumph",
				on: {
					click: function (t) {
						e.insertEmoji(":-<");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-stuck_out_tongue_winking_eye",
				on: {
					click: function (t) {
						e.insertEmoji(";p");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-stuck_out_tongue",
				on: {
					click: function (t) {
						e.insertEmoji(":p");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-confused",
				on: {
					click: function (t) {
						e.insertEmoji(":/");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-worried",
				on: {
					click: function (t) {
						e.insertEmoji(":-S");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-dizzy_face",
				on: {
					click: function (t) {
						e.insertEmoji("x.x");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-purple_heart",
				on: {
					click: function (t) {
						e.insertEmoji("❤");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-broken_heart",
				on: {
					click: function (t) {
						e.insertEmoji("</3");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-shark",
				on: {
					click: function (t) {
						e.insertEmoji("(^^^)");
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "em em-penguin",
				on: {
					click: function (t) {
						e.insertEmoji("<(\")");
					}
				}
			})])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "rang",
				attrs: {
					id: "rang-page"
				}
			}, [n("spinner", {
				attrs: {
					show: e.loading
				}
			}), e._v(" "), n("div", {
				staticClass: "ui container"
			}, [n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("h1", {
				staticClass: "rang-title"
			}, [e._v(e._s(e.$t("new_21_09.top_10")) + " ")]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ads-skins"
			}, 1), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ui pointing secondary menu"
			}, [n("a", {
				staticClass: "item active",
				attrs: {
					"data-tab": "first"
				}
			}, [e._v(e._s(e.$t("statistic.top_10_logged")))]), e._v(" "), n("a", {
				staticClass: "item",
				attrs: {
					"data-tab": "second"
				}
			}, [e._v(e._s(e.$t("statistic.all_players")))])]), e._v(" "), n("br"), e._v(" "), n("div", {
				staticClass: "dateranger"
			}, [n("div", {
				staticClass: "ui form"
			}, [n("div", {
				staticClass: "inline fields"
			}, [n("div", {
				staticClass: "field"
			}, [n("input", {
				attrs: {
					disabled: "true"
				},
				domProps: {
					value: e.formatDate(e.startDay)
				}
			})]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("input", {
				attrs: {
					disabled: "true"
				},
				domProps: {
					value: e.formatDate(e.endDay)
				}
			})]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("div", {
				staticClass: "ui vertical divider"
			}), e._v(" "), n("button", {
				staticClass: "ui inverted button",
				on: {
					click: function (t) {
						e.getPrivateList();
					}
				}
			}, [e._v("\n                           " + e._s(e.$t("home.month")) + "\n                        ")])]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("div", {
				staticClass: "ui vertical divider"
			}), e._v(" "), n("button", {
				staticClass: "ui inverted button",
				on: {
					click: function (t) {
						e.getToday();
					}
				}
			}, [e._v("\n                            " + e._s(e.$t("home.today")) + "\n                        ")])])])]), e._v(" "), n("p", [e._v(e._s(e.$t("new_21_09.highscore_update")))])]), e._v(" "), n("div", {
				staticClass: "ui bottom attached tab segment active",
				attrs: {
					"data-tab": "first"
				}
			}, [n("div", {
				staticClass: "ui stackable three column grid"
			}, [n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("FFA #1")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.pffa1, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "FFA#1");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.pffa1.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("MINIONS #2")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.pmn2, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "MINIONS#2");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.pmn2.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("IM #3")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.pim3, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "INSTANT MERGE#3");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.pim3.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("MEGA SPLIT #4")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.pffa4, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "MEGA SPLIT#4");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.pffa4.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("EX #5")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.pex5, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "EXPERIMENTAL#5");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.pex5.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("RNBW #6")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.prnbw6, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "RAINBOW#6");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.prnbw6.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("VM #7")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.pvm7, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "VIRUS MINES#7");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.pvm7.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("OLD EXP #8")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.poe8, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.nickname))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "OLD EXP#8");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.poe8.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)])])]), e._v(" "), n("div", {
				staticClass: "ui bottom attached tab segment",
				attrs: {
					"data-tab": "second"
				}
			}, [n("div", {
				staticClass: "ui stackable three column grid"
			}, [n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("FFA #1")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.ffa1, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "FFA#1");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.ffa1.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("MINIONS #2")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.mn2, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "MINIONS#2");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.mn2.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("IM #3")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.im3, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "INSTANT MERGE#3");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.im3.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("MEGA SPLIT #4")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.ffa4, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "MEGA SPLIT#4");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.ffa4.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("EX #5")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.ex5, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "EXPERIMENTAL#5");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.ex5.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("RNBW #6")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.rnbw6, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "RAINBOW#6");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.rnbw6.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("VM #7")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.vm7, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "VIRUS MINES#7");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.vm7.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v("OLD EXP #8")]), e._v(" "), n("div", {
				staticClass: "ui divided list"
			}, [e._l(e.list.oe8, function (t, i) {
				return n("div", {
					class: e.classItem(i + 1)
				}, [e._v("\n                            " + e._s(i + 1) + ". " + e._s(decodeURI(e.safeName(t.name))) + "\n                            "), n("div", {
					staticClass: "right floated content"
				}, [e._v("\n                                " + e._s(e.numberFormat(parseInt(t.score))) + "\n                                "), e.role == 40 ? n("i", {
					staticClass: "x icon",
					on: {
						click: function (n) {
							e.deleteScore(t.score, "OLD EXP#8");
						}
					}
				}) : e._e()])]);
			}), e._v(" "), e.list.oe8.length == 0 ? n("div", {
				staticClass: "item"
			}, [e._v("\n                            " + e._s(e.$t("new_21_09.no_players")) + "\n                        ")]) : e._e()], 2)])])]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("em", [e._v(e._s(e.$t("new_21_09.result_added")))]), n("br"), e._v(" "), n("em", [e._v(e._s(e.$t("new_21_09.result_count")))])])], 1);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				staticClass: "ui container",
				attrs: {
					id: "contribute"
				}
			}, [n("div", {
				staticClass: "ui stackable internally celled grid"
			}, [n("div", {
				staticClass: "six wide column"
			}, [n("div", {
				staticClass: "ui raised segment"
			}, [n("h3", [n("i", {
				staticClass: "money icon"
			}), e._v(" " + e._s(e.$t("contribute.donate")))]), e._v(" "), n("div", {
				staticClass: "ui stackable grid"
			}, [n("div", {
				staticClass: "ten wide column"
			}, [n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("p", [e._v(e._s(e.$t("contribute.donate_desc")))]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("img", {
				staticClass: "paypal-donate-image",
				attrs: {
					src: "https://www.digitaltrends.com/wp-content/uploads/2011/12/Paypal_button1.jpg"
				}
			})]), e._v(" "), n("div", {
				staticClass: "six wide column"
			}, [n("p", [e._v(e._s(e.$t("contribute.select_amount")))]), e._v(" "), n("div", [n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("a", {
				staticClass: "ui large tag label",
				on: {
					click: function (t) {
						e.selectDonation("Option 1 -");
					}
				}
			}, [e._v("\n                      €1.00\n                    ")]), e._v(" "), n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("a", {
				staticClass: "ui large tag label",
				on: {
					click: function (t) {
						e.selectDonation("Option 2 -");
					}
				}
			}, [e._v("\n                      €3.00\n                    ")]), e._v(" "), n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("a", {
				staticClass: "ui large tag label",
				on: {
					click: function (t) {
						e.selectDonation("Option 3 -");
					}
				}
			}, [e._v("\n                      €5.00\n                    ")]), e._v(" "), n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("a", {
				staticClass: "ui large tag label",
				on: {
					click: function (t) {
						e.selectDonation("Option 4 -");
					}
				}
			}, [e._v("\n                      €10.00\n                    ")]), e._v(" "), n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("a", {
				staticClass: "ui large tag label",
				on: {
					click: function (t) {
						e.selectDonation("Option 5 -");
					}
				}
			}, [e._v("\n                      €20.00\n                    ")])])])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})])]), e._v(" "), n("div", {
				staticClass: "five wide column"
			}, [n("div", {
				staticClass: "ui raised segment"
			}, [n("h3", [n("i", {
				staticClass: "world icon"
			}), e._v(" " + e._s(e.$t("contribute.translate")))]), e._v(" "), n("p", [e._v("\n\n                   " + e._s(e.$t("contribute.translate_desc")) + "\n                ")])]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("div", {
				staticClass: "ui raised segment"
			}, [n("h3", [n("i", {
				staticClass: "facebook icon"
			}), e._v(" " + e._s(e.$t("contribute.follow")))]), e._v(" "), n("p"), n("div", {
				staticClass: "fb-like",
				attrs: {
					"data-href": "#",
					"data-width": "300",
					"data-layout": "standard",
					"data-action": "like",
					"data-size": "large",
					"data-show-faces": "true",
					"data-share": "true"
				}
			}), e._v(" "), n("p")])]), e._v(" "), n("div", {
				staticClass: "five wide column"
			}, [n("div", {
				staticClass: "ui raised segment"
			}, [n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.contactUs();
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h3", [n("i", {
				staticClass: "question circle icon"
			}), e._v(" " + e._s(e.$t("contact.report_contact")))])])]), e._v(" "), n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("div", {
				staticClass: "ui form"
			}, [n("div", {
				staticClass: "field"
			}, [n("label", [e._v(e._s(e.$t("contact.your_email")))]), e._v(" "), n("div", {
				staticClass: "ui input"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.form.email,
					expression: "form.email"
				}],
				staticClass: "form-control",
				attrs: {
					type: "text",
					autofocus: ""
				},
				domProps: {
					value: e.form.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.form.email = t.target.value;
						}
					}
				}
			})])]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("label", [e._v(e._s(e.$t("contact.messsage")))]), e._v(" "), n("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.form.message,
					expression: "form.message"
				}],
				domProps: {
					value: e.form.message
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.form.message = t.target.value;
						}
					}
				}
			})])]), e._v(" "), n("div", {
				staticClass: "label-divider"
			}), e._v(" "), n("button", {
				staticClass: "ui secondary fluid button",
				attrs: {
					disabled: e.form.message.length == 0,
					type: "submit"
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-send"
				}
			}), e._v("\n                      " + e._s(e.$t("contact.report")) + "\n                  ")]), e._v(" "), e.reportStatus == 1 ? n("div", {
				staticClass: "ui positive message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                          " + e._s(e.$t("contact.success")) + "\n                      ")])]) : e._e(), e._v(" "), e.reportStatus == 0 ? n("div", {
				staticClass: "ui negative message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                          " + e._s(e.$t("contact.error")) + "\n                      ")])]) : e._e()])])])])]), e._v(" "), e._m(0), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("form", {
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "donate-form",
					action: "https://www.paypal.com/cgi-bin/webscr",
					method: "post",
					target: "_blank"
				}
			}, [n("input", {
				attrs: {
					type: "hidden",
					name: "cmd",
					value: "_s-xclick"
				}
			}), e._v(" "), n("input", {
				attrs: {
					type: "hidden",
					name: "hosted_button_id",
					value: "MYWWNL86EGNKE"
				}
			}), e._v(" "), n("table", [n("tr", [n("td", [n("input", {
				attrs: {
					type: "hidden",
					name: "on0",
					value: "Iznos donacije:"
				}
			}), e._v("Iznos donacije:")])]), n("tr", [n("td", [n("select", {
				attrs: {
					id: "donate-select",
					name: "os0"
				}
			}, [n("option", {
				attrs: {
					value: "Option 1 -"
				}
			}, [e._v("Option 1 - €1.00 EUR")]), e._v(" "), n("option", {
				attrs: {
					value: "Option 2 -"
				}
			}, [e._v("Option 2 - €3.00 EUR")]), e._v(" "), n("option", {
				attrs: {
					value: "Option 3 -"
				}
			}, [e._v("Option 3 - €5.00 EUR")]), e._v(" "), n("option", {
				attrs: {
					value: "Option 4 -"
				}
			}, [e._v("Option 4 - €10.00 EUR")]), e._v(" "), n("option", {
				attrs: {
					value: "Option 5 -"
				}
			}, [e._v("Option 5 - €20.00 EUR")])])])])]), e._v(" "), n("input", {
				attrs: {
					type: "hidden",
					name: "currency_code",
					value: "EUR"
				}
			}), e._v(" "), n("input", {
				attrs: {
					type: "image",
					src: "https://www.psarts.org/wp-content/uploads/2015/08/JVG-Europe-paypal-donation-button.png",
					border: "0",
					name: "submit",
					alt: "PayPal - The safer, easier way to pay online!"
				}
			}), e._v(" "), n("img", {
				attrs: {
					alt: "",
					border: "0",
					src: "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
					width: "1",
					height: "1"
				}
			})]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui grid navigation"
			}, [n("div", {
				staticClass: "computer tablet only row"
			}, [n("div", {
				staticClass: "ui fixed menu navbar grid"
			}, [n("div", {
				staticClass: "ui container"
			}, [e.fromApp ? n("a", {
				attrs: {
					id: "fullScreenBtn2"
				},
				on: {
					click: function (t) {
						e.fullScreen();
					}
				}
			}, [n("i", {
				staticClass: "maximize icon"
			})]) : e._e(), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/",
					exact: ""
				}
			}, [n("i", {
				staticClass: "game icon"
			}), e._v(e._s(e.$t("home.home")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/skins"
				}
			}, [n("i", {
				staticClass: "image icon"
			}), e._v(e._s(e.$t("home.skins")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/highscores"
				}
			}, [n("i", {
				staticClass: "trophy icon"
			}), e._v(e._s(e.$t("logged.results")) + "\n                ")]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/hats"
				}
			}, [n("i", {
				staticClass: "graduation cap icon"
			}), e._v(e._s(e.$t("logged.hats")) + "\n                    ")]), e._v(" "), n("div", {
				staticClass: "right menu"
			}, [e._m(0), e._v(" "), n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.musicPage();
					}
				}
			}, [n("i", {
				staticClass: "music icon"
			})]), e._v(" "), n("div", {
				staticClass: "item ui floating dropdown button change-country"
			}, [n("i", {
				class: e.lang + " flag"
			}), e._v(" "), n("div", {
				staticClass: "menu",
				class: e.lang
			}, [n("div", {
				staticClass: "item",
				class: e.lang == "gb" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("gb");
					}
				}
			}, [n("i", {
				staticClass: "gb flag"
			}), e._v("English\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "ba" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("ba");
					}
				}
			}, [n("i", {
				staticClass: "ba flag"
			}), e._v("Bosanski\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "rs" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("rs");
					}
				}
			}, [n("i", {
				staticClass: "rs flag"
			}), e._v("Српски\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "hr" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("hr");
					}
				}
			}, [n("i", {
				staticClass: "hr flag"
			}), e._v("Hrvatski\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "mk" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("mk");
					}
				}
			}, [n("i", {
				staticClass: "mk flag"
			}), e._v("Македонски\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "si" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("si");
					}
				}
			}, [n("i", {
				staticClass: "si flag"
			}), e._v("Slovenščina\n                            ")])])])], 1)], 1)])]), e._v(" "), n("div", {
				staticClass: "mobile only row"
			}, [n("div", {
				staticClass: "ui fixed navbar menu"
			}, [e.fromApp ? e._e() : n("a", {
				attrs: {
					id: "fullScreenBtn"
				},
				on: {
					click: function (t) {
						e.fullScreen();
					}
				}
			}, [n("i", {
				staticClass: "maximize icon"
			})]), e._v(" "), e._m(1)]), e._v(" "), n("div", {
				staticClass: "ui vertical navbar menu"
			}, [n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/",
					exact: ""
				}
			}, [n("i", {
				staticClass: "game icon"
			}), e._v(e._s(e.$t("home.home")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/skins"
				}
			}, [n("i", {
				staticClass: "image icon"
			}), e._v(e._s(e.$t("home.skins")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/highscores"
				}
			}, [n("i", {
				staticClass: "trophy icon"
			}), e._v(e._s(e.$t("logged.results")) + "\n            ")]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/login"
				}
			}, [n("i", {
				staticClass: "lock icon"
			}), e._v(e._s(e.$t("home.login")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/register"
				}
			}, [n("i", {
				staticClass: "lock icon"
			}), e._v(e._s(e.$t("login.register")) + "\n            ")]), e._v(" "), n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.musicPage();
					}
				}
			}, [n("i", {
				staticClass: "music icon"
			}), e._v(e._s(e.$t("home.music")))]), e._v(" "), n("div", {
				staticClass: "item ui floating dropdown button change-country"
			}, [n("i", {
				class: e.lang + " flag"
			}), e._v(" "), n("div", {
				staticClass: "menu",
				class: e.lang
			}, [n("div", {
				staticClass: "item",
				class: e.lang == "gb" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("gb");
					}
				}
			}, [n("i", {
				staticClass: "gb flag"
			}), e._v("English\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "ba" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("ba");
					}
				}
			}, [n("i", {
				staticClass: "ba flag"
			}), e._v("Bosanski\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "rs" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("rs");
					}
				}
			}, [n("i", {
				staticClass: "rs flag"
			}), e._v("Српски\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "hr" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("hr");
					}
				}
			}, [n("i", {
				staticClass: "hr flag"
			}), e._v("Hrvatski\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "mk" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("mk");
					}
				}
			}, [n("i", {
				staticClass: "mk flag"
			}), e._v("Македонски\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "si" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("si");
					}
				}
			}, [n("i", {
				staticClass: "si flag"
			}), e._v("Slovenščina\n                    ")])])])], 1)])]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "item ui link dropdown",
				attrs: {
					id: "another-version-dropdown"
				}
			}, [n("i", {
				staticClass: "external alternate icon"
			}), e._v(" "), n("div", {
				staticClass: "menu"
			}, [n("div", {
				staticClass: "item"
			}, [n("a", {
				attrs: {
					href: "#",
					target: "_blank"
				}
			}, [e._v("Beta")])]), e._v(" "), n("div", {
				staticClass: "item"
			}, [n("a", {
				attrs: {
					href: "#",
					target: "_blank"
				}
			}, [e._v("Lite")])]), e._v(" "), n("div", {
				staticClass: "item"
			}, [n("a", {
				attrs: {
					href: "#",
					target: "_blank"
				}
			}, [e._v("\n                                    Android\n                                ")])]), e._v(" "), n("div", {
				staticClass: "item"
			}, [n("a", {
				attrs: {
					href: "#",
					target: "_blank"
				}
			}, [e._v("\n                                    Facebook\n                                ")])])])]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "right menu open"
			}, [n("a", {
				staticClass: "menu item",
				attrs: {
					href: ""
				}
			}, [n("i", {
				staticClass: "content icon"
			})])]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "hats",
				attrs: {
					id: "hats-page"
				}
			}, [n("spinner", {
				attrs: {
					show: e.loading
				}
			}), e._v(" "), n("div", {
				staticClass: "ui container"
			}, [n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ads-skins"
			}, 1)]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ui container"
			}, [n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ui grid"
			}, [e._l(e.sortedArray, function (t) {
				if (t.special == "sale") {
					return n("div", {
						staticClass: "sixteen wide mobile column eight wide tablet column four wide computer column"
					}, [n("div", {
						staticClass: "hats-list"
					}, [n("div", {
						staticClass: "ui card",
						staticStyle: {
							margin: "0 auto"
						}
					}, [n("div", {
						staticClass: "content"
					}, [n("p", {
						staticClass: "header"
					}, [e._v(e._s(t.name))])]), e._v(" "), n("div", {
						staticClass: "blurring dimmable image",
						class: t.is_my ? "buyed" : ""
					}, [e.am_logged_in ? n("div", {
						staticClass: "ui dimmer"
					}, [n("div", {
						staticClass: "content"
					}, [n("div", {
						staticClass: "center"
					}, [t.is_my ? n("div", {
						staticClass: "ui inverted button",
						on: {
							click: function (n) {
								e.chooseHat(t.secret);
							}
						}
					}, [e._v(e._s(e.$t("hats.choose")) + "\n                                        ")]) : n("div", {
						staticClass: "ui inverted button",
						on: {
							click: function (n) {
								e.buyHat(t);
							}
						}
					}, [e._v(e._s(e.$t("hats.buy")) + "\n                                        ")])])])]) : e._e(), e._v(" "), n("img", {
						attrs: {
							src: "/agar.rs/assets/images/hats/" + t.link + ".webp"
						}
					})]), e._v(" "), n("div", {
						staticClass: "extra content"
					}, [n("strong", [n("img", {
						staticClass: "coins-img",
						attrs: {
							src: "/agar.rs/assets/images/coins.png"
						}
					}), e._v("\n                                " + e._s(t.price) + " /\n                                "), n("i", {
						staticClass: "clock outline icon"
					}), e._v("\n                                " + e._s(Number(t.price) >= 50000 ? "30" : "7") + " " + e._s(e.$t("hats.days")) + "\n                            ")])])])])]);
				} else {
					return e._e();
				}
			}), e._v(" "), n("div", {
				staticClass: "sixteen wide mobile column eight wide tablet column four wide computer column"
			}, 1)], 2), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("em", {
				staticClass: "info"
			}), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})])], 1);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage skin-preview"
			}, [n("div", {
				staticClass: "ui centered card"
			}, [n("div", {
				staticClass: "image"
			}, [n("img", {
				attrs: {
					src: "/agar.rs/assets/images/skins/" + e.name + ".png"
				},
				on: {
					click: function (t) {
						e.chooseSkin(e.name);
					}
				}
			})]), e._v(" "), n("div", {
				staticClass: "text-center content"
			}, [n("h3", {
				staticClass: "header",
				on: {
					click: function (t) {
						e.chooseSkin(e.name);
					}
				}
			}, [e._v(e._s(e.name))])]), e._v(" "), n("div", {
				staticClass: "text-center extra content"
			}, [n("a", {
				staticClass: "ui button",
				attrs: {
					href: "/agar.rs/assets/images/skins/" + e.name + ".png",
					download: ""
				}
			}, [e._v("Preuzmi skin")])])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				attrs: {
					id: "loginPage"
				}
			}, [n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					keydown: function (t) {
						e.registerForm.errors.clear(t.target.name);
					},
					submit: function (t) {
						t.preventDefault();
						e.Register();
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h3", [e._v(e._s(e.$t("login.register_head")))])])]), e._v(" "), n("br"), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.registerForm.nickname,
					expression: "registerForm.nickname"
				}],
				staticClass: "form-control",
				attrs: {
					title: e.$t("logged.type_nick_desc"),
					id: "nickname",
					name: "nickname",
					placeholder: e.$t("home.type_name"),
					type: "text",
					maxlength: "15",
					autofocus: ""
				},
				domProps: {
					value: e.registerForm.nickname
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.registerForm.nickname = t.target.value;
						}
					}
				}
			}), e._v(" "), e.registerForm.errors.has("nickname") ? n("p", {
				staticClass: "error-text"
			}, [e._v(e._s(e.registerForm.errors.get("nickname")))]) : e._e(), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.registerForm.email,
					expression: "registerForm.email"
				}],
				staticClass: "form-control",
				attrs: {
					name: "email",
					placeholder: e.$t("login.email"),
					type: "text"
				},
				domProps: {
					value: e.registerForm.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.registerForm.email = t.target.value;
						}
					}
				}
			}), e._v(" "), e.registerForm.errors.has("email") ? n("p", {
				staticClass: "error-text"
			}, [e._v(e._s(e.registerForm.errors.get("email")))]) : e._e(), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.registerForm.password,
					expression: "registerForm.password"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("login.type_password"),
					type: "password"
				},
				domProps: {
					value: e.registerForm.password
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.registerForm.password = t.target.value;
						}
					}
				}
			}), e._v(" "), e.registerForm.errors.has("password") ? n("p", {
				staticClass: "error-text",
				attrs: {
					name: "password"
				}
			}, [e._v(e._s(e.registerForm.errors.get("password")))]) : e._e(), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					type: "submit"
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-login"
				}
			}), e._v("\n                " + e._s(e.$t("login.register")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("div", {
				staticClass: "ui horizontal divider"
			}, [e._v("\n                " + e._s(e.$t("new_21_09.or")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("button", {
				staticClass: "login-facebook",
				attrs: {
					type: "button"
				},
				on: {
					click: function (t) {
						e.facebookLogin();
					}
				}
			}, [e._v(e._s(e.$t("new_21_09.login_facebook")))])])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [e.game == "" ? n("div", {
				staticClass: "game-list"
			}, [n("div", {
				staticClass: "ui three stackable cards"
			}, [n("div", {
				staticClass: "teal card",
				on: {
					click: function (t) {
						e.changeGame(1);
					}
				}
			}, [e._m(0), e._v(" "), e._m(1)]), e._v(" "), n("div", {
				staticClass: "teal card",
				on: {
					click: function (t) {
						e.changeGame(2);
					}
				}
			}, [e._m(2), e._v(" "), e._m(3)])])]) : n("iframe", {
				attrs: {
					src: e.game
				}
			})]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "image"
			}, [n("img", {
				attrs: {
					src: "/agar.rs/assets/images/games/fun.jpg"
				}
			})]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "content"
			}, [n("p", {
				staticClass: "ui centered header"
			}, [e._v("Kuglice")])]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "image"
			}, [n("img", {
				attrs: {
					src: "/agar.rs/assets/images/games/racing.png"
				}
			})]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "content"
			}, [n("p", {
				staticClass: "ui centered header"
			}, [e._v("Trke")])]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				attrs: {
					id: "loginPage"
				}
			}, [e.reset == 0 ? n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.forgotPassword();
					},
					keydown: function (t) {
						e.status = -1;
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h3", [e._v(e._s(e.$t("forgotPassword.question")))])])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.forgotPasswordForm.email,
					expression: "forgotPasswordForm.email"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("login.email"),
					type: "email",
					autofocus: ""
				},
				domProps: {
					value: e.forgotPasswordForm.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.forgotPasswordForm.email = t.target.value;
						}
					}
				}
			}), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					type: "submit"
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-login"
				}
			}), e._v("\n                " + e._s(e.$t("contact.report")) + "\n            ")]), e._v(" "), e.status == 0 ? n("div", {
				staticClass: "ui negative message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                    " + e._s(e.$t("forgotPassword.email_not_exist")) + "\n                ")])]) : e._e(), e._v(" "), e.status == 1 ? n("div", {
				staticClass: "ui positive message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                    " + e._s(e.$t("forgotPassword.email_sent")) + "\n                ")])]) : e._e()]) : e._e(), e._v(" "), e.reset == 1 ? n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.updatePasswod();
					},
					keydown: function (t) {
						e.status = -1;
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("div", [n("h3", [e._v(e._s(e.$t("forgotPassword.change_password")))])])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.forgotPasswordForm.password,
					expression: "forgotPasswordForm.password"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("forgotPassword.new_password"),
					type: "password",
					autofocus: ""
				},
				domProps: {
					value: e.forgotPasswordForm.password
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.forgotPasswordForm.password = t.target.value;
						}
					}
				}
			}), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.forgotPasswordForm.passwordConfirm,
					expression: "forgotPasswordForm.passwordConfirm"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("forgotPassword.repeat_password"),
					type: "password"
				},
				domProps: {
					value: e.forgotPasswordForm.passwordConfirm
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.forgotPasswordForm.passwordConfirm = t.target.value;
						}
					}
				}
			}), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					type: "submit"
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-login"
				}
			}), e._v("\n                 " + e._s(e.$t("forgotPassword.reset")) + "\n             ")]), e._v(" "), e.status == 0 ? n("div", {
				staticClass: "ui negative message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                     " + e._s(e.$t("forgotPassword.wrong_code")) + "\n                 ")])]) : e._e(), e._v(" "), e.status == 1 ? n("div", {
				staticClass: "ui positive message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                     " + e._s(e.$t("forgotPassword.password_changed")) + "\n                 ")])]) : e._e(), e._v(" "), e.status == 2 ? n("div", {
				staticClass: "ui negative message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                     " + e._s(e.$t("forgotPassword.passwords_do_not_match")) + "\n                 ")])]) : e._e()]) : e._e(), e._v(" "), e.reset == -1 ? n("div", {
				staticClass: "message-status"
			}, [e.status == 1 ? n("div", {
				staticClass: "ui positive message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                   " + e._s(e.$t("forgotPassword.password_changed")) + "\n               ")])]) : e._e(), e._v(" "), e.status == 0 ? n("div", {
				staticClass: "ui negative message"
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                   " + e._s(e.$t("forgotPassword.wrong_code")) + "\n               ")])]) : e._e()]) : e._e()])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				attrs: {
					id: "loginPage"
				}
			}, [n("form", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.Login();
					},
					keydown: function (t) {
						e.wrongCredentials = false;
					}
				}
			}, [e._m(0), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.loginForm.email,
					expression: "loginForm.email"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("login.email_username"),
					type: "text",
					autofocus: ""
				},
				domProps: {
					value: e.loginForm.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.loginForm.email = t.target.value;
						}
					}
				}
			}), e._v(" "), n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.loginForm.password,
					expression: "loginForm.password"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("login.type_password"),
					type: "password"
				},
				domProps: {
					value: e.loginForm.password
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.loginForm.password = t.target.value;
						}
					}
				}
			}), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					type: "submit"
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-login"
				}
			}), e._v("\n                " + e._s(e.$t("login.login")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("div", {
				staticClass: "ui horizontal divider"
			}, [e._v("\n                " + e._s(e.$t("new_21_09.or")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("button", {
				staticClass: "login-facebook",
				attrs: {
					type: "button"
				},
				on: {
					click: function (t) {
						e.facebookLogin();
					}
				}
			}, [e._v(e._s(e.$t("new_21_09.login_facebook")))]), e._v(" "), n("p", {
				staticClass: "forgot-password-link"
			}, [n("router-link", {
				attrs: {
					to: "/agar.rs/forgot-password"
				}
			}, [e._v(e._s(e.$t("forgotPassword.question")))])], 1), e._v(" "), e.wrongCredentials ? n("div", {
				staticClass: "ui negative message"
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n                    " + e._s(e.$t("login.wrong_credentials")) + "\n                ")])]) : e._e()])])]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "form-group"
			}, [n("div")]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			return (e._self._c || t)("div", [e._v("\n    Logovanje...\n")]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui small inverted modal",
				attrs: {
					id: "profile-settings-modal"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n        " + e._s(e.$t("logged.profile_settings")) + "\n    ")]), e._v(" "), n("div", {
				staticClass: "content"
			}, [n("div", {
				staticClass: "ui inverted segment"
			}, [n("div", {
				attrs: {
					role: "form",
					name: "info"
				},
				on: {
					submit: function (t) {
						t.preventDefault();
						e.updateSettings();
					},
					keydown: function (t) {
						e.status = -1;
					}
				}
			}, [n("div", [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.email,
					expression: "email"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("login.email"),
					type: "email"
				},
				domProps: {
					value: e.email
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.email = t.target.value;
						}
					}
				}
			})]), e._v(" "), n("div", [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.updateProfileForm.password,
					expression: "updateProfileForm.password"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("forgotPassword.new_password"),
					type: "password"
				},
				domProps: {
					value: e.updateProfileForm.password
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.updateProfileForm.password = t.target.value;
						}
					}
				}
			})]), e._v(" "), n("div", [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.updateProfileForm.passwordConfirm,
					expression: "updateProfileForm.passwordConfirm"
				}],
				staticClass: "form-control",
				attrs: {
					placeholder: e.$t("forgotPassword.repeat_password"),
					type: "password"
				},
				domProps: {
					value: e.updateProfileForm.passwordConfirm
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.updateProfileForm.passwordConfirm = t.target.value;
						}
					}
				}
			})]), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					disabled: e.status == 0,
					type: "button"
				},
				on: {
					click: function (t) {
						e.updateSettings();
					}
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-send"
				}
			}), e._v("\n                    " + e._s(e.$t("logged.save")) + "\n                ")]), e._v(" "), e.status != -1 ? n("div", {
				class: [e.status == 1 ? "positive" : "negative", "message "]
			}, [n("div", {
				staticClass: "header"
			}, [e._v("\n                        " + e._s(e.message) + "\n                    ")])]) : e._e()])]), e._v(" "), n("div", {
				staticClass: "ui inverted segment"
			}, [n("button", {
				staticClass: "start-btn",
				attrs: {
					disabled: e.status == 0,
					type: "button"
				},
				on: {
					click: function (t) {
						e.deleteFB();
					}
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-delete-fb"
				}
			}), e._v("\n                    " + e._s(e.$t("options.delete_facebook")) + "\n                ")]), e._v(" "), n("button", {
				staticClass: "start-btn",
				attrs: {
					disabled: e.status == 0,
					type: "button"
				},
				on: {
					click: function (t) {
						e.deleteProfile();
					}
				}
			}, [n("i", {
				staticClass: "spinner loading icon",
				staticStyle: {
					display: "none"
				},
				attrs: {
					id: "loading-delete"
				}
			}), e._v("\n                    " + e._s(e.$t("options.delete_profile")) + "\n                ")])])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui container"
			}, [n("table", {
				staticClass: "ui inverted celled table"
			}, [n("thead", [n("tr", [n("th", [e._v(e._s(e.$t("statistic.server")))]), e._v(" "), n("th", [e._v(e._s(e.$t("statistic.max_score")))]), e._v(" "), n("th", [e._v(e._s(e.$t("statistic.best_time_played")))]), e._v(" "), n("th", [e._v(e._s(e.$t("statistic.all_plays")))])])]), e._v(" "), n("tbody", e._l(e.private_score, function (t) {
				return n("tr", [n("td", [n("div", {
					staticClass: "ui ribbon label"
				}, [e._v(e._s(t.server))])]), e._v(" "), n("td", [e._v(e._s(e.threeDigits(t.max_score)))]), e._v(" "), n("td", [e._v(e._s(e.Cb(t.max_time)))]), e._v(" "), n("td", [e._v(e._s(t.games_played))])]);
			}))])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "setting-section",
				attrs: {
					id: "settings"
				}
			}, [n("div", {
				staticClass: "theme-selector"
			}, [e.toggleColors ? n("div", {
				attrs: {
					id: "theme-selector"
				}
			}, [n("div", {
				class: [e.choosenTheme == "tema2" ? "active-theme" : "", "twilight-theme"],
				on: {
					click: function (t) {
						e.changeTheme("tema2");
					}
				}
			}), e._v(" "), n("div", {
				class: [e.choosenTheme == "tema0" ? "active-theme" : "", "light-theme"],
				on: {
					click: function (t) {
						e.changeTheme("tema0");
					}
				}
			}), e._v(" "), n("div", {
				class: [e.choosenTheme == "tema1" ? "active-theme" : "", "dark-theme"],
				on: {
					click: function (t) {
						e.changeTheme("tema1");
					}
				}
			}), e._v(" "), n("div", {
				class: [e.choosenTheme == "tema3" ? "active-theme" : "", "mars-theme"],
				on: {
					click: function (t) {
						e.changeTheme("tema3");
					}
				}
			})]) : e._e(), e._v(" "), n("button", {
				staticClass: "icon-btn theme-btn",
				attrs: {
					type: "button",
					"data-tooltip": e.$t("home.theme"),
					"data-position": "top center",
					"data-inverted": ""
				},
				on: {
					click: function (t) {
						e.toggleColors = !e.toggleColors;
					}
				}
			}, [n("i", {
				staticClass: "paint brush icon"
			})]), e._v(" "), n("button", {
				staticClass: "icon-btn theme-btn",
				attrs: {
					type: "button",
					"data-tooltip": "FUN",
					"data-position": "top center",
					"data-inverted": ""
				},
				on: {
					click: function (t) {
						e.goToFun();
					}
				}
			}, [n("i", {
				staticClass: "gamepad icon"
			})])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui modal",
				attrs: {
					id: "more-settings"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n        " + e._s(e.$t("options.all_settings")) + "\n\n        "), n("div", {
				staticClass: "reset-settings"
			}, [n("a", {
				staticClass: "start-btn",
				on: {
					click: function (t) {
						e.resetSettings();
					}
				}
			}, [e._v(e._s(e.$t("home.reset_settings")))])])]), e._v(" "), n("div", {
				staticClass: "content"
			}, [n("div", {
				staticClass: "ui stackable three column grid"
			}, [n("div", {
				staticClass: "column"
			}, [n("h3", [e._v(e._s(e.$t("options.cells_and_controls")))]), e._v(" "), n("div", {
				staticClass: "options"
			}, [n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.transparentCells
				},
				on: {
					change: function (t) {
						e.goTransparent();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.transparent")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.hideHats
				},
				on: {
					change: function (t) {
						e.goHats();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.hide_hats")) + "\n                            ")])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.showSkins
				},
				on: {
					change: function (t) {
						e.goSkinsShow();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.without_skins")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.mouseControl
				},
				on: {
					change: function (t) {
						e.mouseControlFn();
					}
				}
			}), e._v(" "), n("label", [e._v("\n                            " + e._s(e.$t("home.mouse_control")) + "\n                            "), n("span", {
				attrs: {
					"data-tooltip": e.$t("home.mouse_control_desc"),
					"data-inverted": ""
				}
			}, [n("i", {
				staticClass: "help circle icon"
			})])])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.arrowDirection
				},
				on: {
					change: function (t) {
						e.goArrow();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.pointing_arrow")) + "\n                            "), n("span", {
				attrs: {
					"data-tooltip": e.$t("home.pointing_arrow_desc"),
					"data-inverted": ""
				}
			}, [n("i", {
				staticClass: "info circle icon"
			})])])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.showMass
				},
				on: {
					change: function (t) {
						e.goShowMass();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.show_current_score")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.smoothView
				},
				on: {
					change: function (t) {
						e.goSmooth();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.smoth_view")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.cellBorder
				},
				on: {
					change: function (t) {
						e.goCellBorder();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("options.cell_border")) + "\n                            ")])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.colors
				},
				on: {
					change: function (t) {
						e.goColors();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("options.hide_colors")) + "\n                            ")])])])]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v(e._s(e.$t("options.map")))]), e._v(" "), n("div", {
				staticClass: "options"
			}, [n("div", {
				staticClass: "color-option"
			}, [n("input", {
				attrs: {
					id: "mapColor",
					type: "color"
				},
				domProps: {
					value: e.options.mapColor
				},
				on: {
					change: function (t) {
						e.changeMapColor(t.target.value);
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("options.map_color")) + "\n                            ")])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.showLines
				},
				on: {
					change: function (t) {
						e.goLines();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.without_lines")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.acidMode
				},
				on: {
					change: function (t) {
						e.goAcid();
					}
				}
			}), e._v(" "), n("label", [e._v("Acid mode")])]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.sectorsVisible
				},
				on: {
					change: function (t) {
						e.goSectors();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("options.show_sectors")) + "\n                            ")])]), e._v(" "), n("div", {
				staticClass: "color-option"
			}, [n("input", {
				attrs: {
					id: "sectorColor",
					type: "color"
				},
				domProps: {
					value: e.options.sectorsColor
				},
				on: {
					change: function (t) {
						e.changeSectorColor(t.target.value);
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("options.sector_color")) + "\n                            ")])]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.infiniteScroll
				},
				on: {
					change: function (t) {
						e.goInfiniteScroll();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("options.infinity_zoom")) + "\n                            ")])]), e._v(" "), n("p", [n("i", {
				staticClass: "circular inverted zoom out link icon cursor",
				on: {
					click: function (t) {
						e.gameViewZoom("out");
					}
				}
			}), n("i", {
				staticClass: "circular inverted zoom link icon cursor",
				on: {
					click: function (t) {
						e.gameViewZoom("in");
					}
				}
			}), e._v("\n                        " + e._s(e.$t("home.game_view")) + "\n                    ")]), e._v(" "), e._m(0)])]), e._v(" "), n("div", {
				staticClass: "column"
			}, [n("h3", [e._v(e._s(e.$t("options.other")))]), e._v(" "), n("div", {
				staticClass: "options"
			}, [n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.hideChat
				},
				on: {
					change: function (t) {
						e.goHideChat();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.hide_chat")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.oldChat
				},
				on: {
					change: function (t) {
						e.goOldChat();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("new_21_09.old_chat")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.showResults
				},
				on: {
					change: function (t) {
						e.goNames();
					}
				}
			}), e._v(" "), n("label", [e._v(e._s(e.$t("home.show_table")))])]), e._v(" "), n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: e.options.backgroundCanvas
				},
				on: {
					change: function (t) {
						e.backgroundCanvasFn();
					}
				}
			}), e._v(" "), n("label", [e._v(" " + e._s(e.$t("new_21_09.background_canvas")))])])])])]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("keybinds", {
				staticClass: "keybind-public"
			})], 1)]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui indicating tiny progress",
				attrs: {
					"data-total": "10",
					id: "game-view"
				}
			}, [n("div", {
				staticClass: "bar"
			})]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "server-list-wraper"
			}, [e.microsoftBrowsers || e.lowGraphics ? n("div", {
				staticClass: "server-list-wrap"
			}, [n("div", {
				staticClass: "ui head",
				staticStyle: {
					display: "flex"
				}
			}, [n("span", {
				on: {
					click: function (t) {
						e.tabSelect(0);
					}
				}
			}, [n("span", {
				attrs: {
					title: e.$t("home.restart")
				}
			}, [n("i", {
				staticClass: "info circle icon"
			})]), e._v("\n            " + e._s(e.$t("home.servers")) + "\n        ")]), e._v(" "), n("span", {
				on: {
					click: function (t) {
						e.tabSelect(1);
					}
				}
			}, [e._v("\n            |  "), n("i", {
				staticClass: "game circle icon"
			}), e._v(" " + e._s(e.$t("new_21_09.training")) + "\n        ")])]), e._v(" "), n("div", {
				staticStyle: {
					clear: "both"
				}
			}), e._v(" "), e.tab === 0 ? n("div", {
				staticClass: "ui animated list"
			}, e._l(e.servers, function (t, i) {
				if (e.am_logged_in || !t.hidden_from_world) {
					return n("div", {
						class: [e.activeServer == t.name ? "activeServ" : "", "item"],
						on: {
							click: function (t) {
								e.chServer(i, false, true);
							}
						}
					}, [n("div", {
						staticClass: "ui right floated label"
					}, [n("i", {
						staticClass: "user icon"
					}), n("span", [e._v(e._s(e.maxPlayers(t.allPlayers, t.maxPlayers, t.name)) + " / " + e._s(t.maxPlayers))])]), e._v(" "), n("div", {
						class: [t.allPlayers >= t.maxPlayers && t.maxPlayers > 0 ? "full-server" : "", "content"]
					}, [e.activeServer == t.name ? n("i", {
						staticClass: "notched circle loading icon connecting-to-server",
						staticStyle: {
							display: "none",
							color: "yellow"
						}
					}) : e._e(), e._v(" "), n("span", [e._v(e._s(t.name))])])]);
				} else {
					return e._e();
				}
			})) : n("div", {
				staticClass: "ui animated list"
			}, [n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/fun/"
				}
			}, [e._v("1. FUN")])], 1)]) : n("div", {
				staticClass: "csstransforms"
			}, [n("div", {
				staticClass: "component"
			}, [n("div", {
				staticClass: "cn-button",
				attrs: {
					id: "cn-button"
				}
			}, [n("p", {
				staticClass: "srv-title"
			}, [e._v(e._s(e.$t("new_21_09.server")) + "\n                ")]), n("p"), n("p", {
				staticClass: "srv-name"
			}, [e._v(e._s(e.activeServer))]), e._v(" "), n("div", {
				staticClass: "srv-info"
			}, [n("i", {
				staticClass: "user icon"
			}), n("span", {
				staticClass: "srv-info-data"
			}, [e._v(e._s(e.getServerInfo(-1, e.activeServer)) + " ")])])]), e._v(" "), n("div", {
				staticClass: "cn-wrapper opened-nav",
				attrs: {
					id: "cn-wrapper"
				}
			}, [n("ul", e._l(e.servers.slice(0, 10), function (t, i) {
				if (t.hidden_from_world) {
					return e._e();
				} else {
					return n("li", {
						class: [e.activeServer == t.name ? "srv-active" : "", "" + i],
						on: {
							mouseover: function (n) {
								e.getServerInfo(i, t.name);
							},
							mouseleave: function (t) {
								e.getServerInfo(-1, e.activeServer);
							},
							click: function (t) {
								e.chServer(i, false, true);
							}
						}
					}, [n("a", [n("span", [e._v(e._s(i + 1))])])]);
				}
			}))])])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "darkLightOk"
			}, [n("div", {
				staticClass: "ui main begin"
			}, [n("div", {
				staticClass: "overlays",
				attrs: {
					id: "overlays"
				}
			}, [e.am_logged_in ? n("div", [e.noHeadTailVar ? e._e() : n("navigation-logged")], 1) : n("div", [e.noHeadTailVar ? e._e() : n("navigation")], 1), e._v(" "), n("transition", {
				attrs: {
					name: "slide",
					"enter-active-class": e.enterActiveClass
				}
			}, [n("router-view", {
				key: e.$route.fullPath,
				staticClass: "view",
				attrs: {
					am_i_logged: e.fastLoginCheck
				}
			})], 1), e._v(" "), e.backgroundCanvas && !e.lowGraphics ? n("canvas", {
				attrs: {
					id: "nokey"
				}
			}) : e._e()], 1)]), e._v(" "), n("chat-box", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.hidden_chat,
					expression: "!hidden_chat"
				}]
			}), e._v(" "), n("jukebox", {
				attrs: {
					playedrun: e.playedrun,
					muted: e.muted
				},
				on: {
					jukebox: e.musicEmit
				}
			}), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.musicActive,
					expression: "musicActive"
				}],
				staticClass: "music-player"
			}, [n("div", {
				staticClass: "music-player-overlay",
				on: {
					click: function (t) {
						e.mute();
					}
				}
			}, [n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.muted,
					expression: "muted"
				}],
				staticClass: "play icon"
			}), e._v(" "), n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.muted,
					expression: "!muted"
				}],
				staticClass: "mute icon"
			})])]), e._v(" "), n("div", {
				staticClass: "ui custom popup bottom right transition hidden"
			}, [e._v("\n        " + e._s(e.musicData.name) + "\n    ")]), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.musicActive && !e.playedrun && !e.on_mobile,
					expression: "!musicActive && !playedrun && !on_mobile"
				}],
				staticClass: "music-player2",
				attrs: {
					"data-tooltip": e.$t("mp.play_playlist"),
					"data-inverted": "",
					"data-position": "bottom right"
				},
				on: {
					click: function (t) {
						e.playedrun = true;
					}
				}
			}, [e._m(0)]), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.on_mobile,
					expression: "on_mobile"
				}],
				staticClass: "in-game-options"
			}, [n("i", {
				staticClass: "ui large inverted home icon",
				on: {
					click: function (t) {
						e.gotoMenu();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "ui large inverted circle wechat icon",
				on: {
					click: function (t) {
						e.goHideChat();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "ui large inverted circle star icon",
				on: {
					click: function (t) {
						e.goNames();
					}
				}
			}), e._v(" "), n("i", {
				staticClass: "ui large inverted circle plus icon",
				attrs: {
					onclick: "zoomInGame(1)"
				}
			}), e._v(" "), n("i", {
				staticClass: "ui large inverted circle minus icon",
				attrs: {
					onclick: "zoomInGame(-1)"
				}
			})]), e._v(" "), n("div", {
				attrs: {
					id: "restart-timer"
				}
			}), e._v(" "), n("more-settings"), e._v(" "), n("div", {
				staticClass: "ui mini modal",
				attrs: {
					id: "tutorial-modal"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "content"
			}, [e._m(1), e._v(" "), n("p", [e._v(e._s(e.$t("home.press")) + " "), n("strong", [e._v("SPACE")]), e._v(" " + e._s(e.$t("home.to_split")))]), e._v(" "), n("p", [e._v(e._s(e.$t("home.press")) + " "), n("strong", [e._v("W")]), e._v(" " + e._s(e.$t("home.to_eject")))])])]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e.minionServer ? n("div", {
				attrs: {
					id: "minion-indicator"
				}
			}, [e._v("\n        To change control to/from the bot: Q\n    ")]) : e._e()], 1);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "music-player-overlay2"
			}, [n("i", {
				staticClass: "ui large inverted circle play icon"
			})]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("video", {
				attrs: {
					width: "400",
					controls: "",
					preload: "none"
				}
			}, [n("source", {
				attrs: {
					src: "/agar.rs/assets/tutorial.mp4",
					type: "video/mp4"
				}
			}), e._v("\n                Your browser does not support HTML5 video.\n            ")]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui basic small opera modal",
				attrs: {
					id: "opera-modal"
				}
			}, [n("div", {
				staticClass: "ui icon header"
			}, [n("i", {
				staticClass: "eye icon"
			}), e._v("\n            Warning: IP address suspended!\n        ")]), e._v(" "), n("div", {
				staticClass: "content text-center"
			}, [n("p", [e._v("\n                An illegal traffic was detected from this IP address or this computer. "), n("br"), e._v("\n                You will be contacted by the authorities soon.\n            ")]), e._v(" "), n("br")])]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui modal",
				attrs: {
					id: "android-modal"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "content"
			}, [n("h3", [e._v("Playing via mobile? "), n("br"), e._v("\n                Try the android game for Agar Balkan.")]), e._v(" "), n("p", [e._v("Download from google play store:")])]), e._v(" "), n("div", {
				staticClass: "actions"
			}, [n("a", {
				staticClass: "ui positive right labeled icon button",
				attrs: {
					target: "_blank",
					href: "#"
				}
			}, [e._v("Preuzmi"), n("i", {
				staticClass: "checkmark icon"
			})]), e._v(" "), n("div", {
				staticClass: "ui black deny button"
			}, [e._v("Close")])])]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "connectingToServer"
			}, [e._v("\n        Connecting to server... "), n("br"), e._v(" "), n("p", [e._v("If you are waiting a long time, check your internet connection or try to connect to another server.")])]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			if (e.mobile) {
				return e._e();
			} else {
				return n("div", {
					staticClass: "ui keybind form"
				}, [e.am_logged_in ? n("h3", [n("label", [e._v(e._s(e.$t("logged.keyboard_controls")) + ":")])]) : e._e(), e._v(" "), n("div", {
					staticClass: "ui grid",
					attrs: {
						id: "keyholder"
					}
				}, [n("div", {
					staticClass: "three wide column"
				}, [n("label", [e._v(e._s(e.$t("home.eject_mass")))]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-eject",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "eject");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v(e._s(e.$t("home.split")))]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-splitCell",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "splitCell");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v(e._s(e.$t("home.double_split")))]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-doubleSplit",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "doubleSplit");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v(e._s(e.$t("home.quad_split")))]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-quadSplit",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "quadSplit");
						}
					}
				})]), e._v(" "), !e.am_logged_in ? n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Macro feed")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-macroEject",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "macroEject");
						}
					}
				})]) : e._e(), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Spectate")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-spectate",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "spectate");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Menu switch")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-close",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "close");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Zoom In")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-zoomIn",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "zoomIn");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Zoom Out")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-zoomOut",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "zoomOut");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Arrow Up")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-arrowup",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "arrowup");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Arrow Down")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-arrowdown",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "arrowdown");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Arrow Left")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-arrowleft",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "arrowleft");
						}
					}
				})]), e._v(" "), n("div", {
					staticClass: "three wide column"
				}, [n("label", {
					staticClass: "text-center"
				}, [e._v("Arrow Right")]), e._v(" "), n("input", {
					attrs: {
						type: "text",
						id: "key-arrowright",
						autocomplete: "off"
					},
					on: {
						keyup: function (t) {
							e.defineKey(t, "arrowright");
						}
					}
				})])])]);
			}
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui mini modal",
				attrs: {
					id: "nicknames-modal"
				}
			}, [n("div", {
				staticClass: "content"
			}, [n("p", {
				staticStyle: {
					color: "#000"
				}
			}, [e._v(e._s(e.$t("home.saved_items")))]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("div", {
				staticClass: "ui form"
			}, [n("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.localStorageNicknames,
					expression: "localStorageNicknames"
				}],
				attrs: {
					maxlength: "3000"
				},
				domProps: {
					value: e.localStorageNicknames
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.localStorageNicknames = t.target.value;
						}
					}
				}
			})])]), e._v(" "), n("div", {
				staticClass: "actions"
			}, [n("div", {
				staticClass: "ui positive right labeled icon button",
				on: {
					click: function (t) {
						e.saveLocalNicknames();
					}
				}
			}, [e._v("\n            " + e._s(e.$t("home.save")) + "\n            "), n("i", {
				staticClass: "checkmark icon"
			})])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				staticClass: "ui container",
				attrs: {
					id: "rules"
				}
			}, [n("h2", {
				staticClass: "text-center",
				domProps: {
					innerHTML: e._s(e.$t("privacy.title"))
				}
			}), e._v(" "), n("h4", {
				staticClass: "text-center",
				domProps: {
					innerHTML: e._s(e.$t("privacy.valid"))
				}
			}), e._v(" "), n("br"), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph1"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt1"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph2"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt2"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph3"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt3"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph4"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt4"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt4_delete"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph5"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt5"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph6"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt6"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph7"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt7"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph8"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt8"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.ph9"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt9"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("privacy.pt91"))
				}
			})]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "homepage"
			}, [n("div", {
				staticClass: "ui container",
				attrs: {
					id: "rules"
				}
			}, [n("h2", {
				staticClass: "text-center",
				domProps: {
					innerHTML: e._s(e.$t("rules.head"))
				}
			}), e._v(" "), n("p", {
				staticClass: "text-center",
				domProps: {
					innerHTML: e._s(e.$t("rules.subhead"))
				}
			}), e._v(" "), n("br"), e._v(" "), n("p", {
				staticClass: "text-center",
				domProps: {
					innerHTML: e._s(e.$t("rules.subhead2"))
				}
			}), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r1h"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r1t"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r2h"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r2t"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r3h"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r3t"))
				}
			}), e._v(" "), n("h3", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r4h"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r41t"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r42t"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r43t"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r44t"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r45t"))
				}
			}), e._v(" "), n("p", {
				domProps: {
					innerHTML: e._s(e.$t("rules.r46t"))
				}
			})]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "skins",
				attrs: {
					id: "skins-page"
				}
			}, [n("spinner", {
				attrs: {
					show: e.loading
				}
			}), e._v(" "), n("div", {
				staticClass: "ui container"
			}, [n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("div", {
				staticClass: "ads-skins"
			}, 1), e._v(" "), n("div", {
				staticClass: "ui form"
			}, [n("div", {
				staticClass: "inline fields"
			}, [n("div", {
				staticClass: "field"
			}, [e.top_skins ? e._e() : n("a", {
				staticClass: "ui red button",
				on: {
					click: function (t) {
						e.getTopSkins();
					}
				}
			}, [n("i", {
				staticClass: "heart icon"
			}), e._v("\n                        " + e._s(e.$t("skins.top_skins")) + "\n                    ")]), e._v(" "), e.top_skins ? n("a", {
				staticClass: "ui teal button",
				on: {
					click: function (t) {
						e.returnSkins();
					}
				}
			}, [n("i", {
				staticClass: "photo icon"
			}), e._v("\n                        " + e._s(e.$t("skins.all_skins")) + "\n                    ")]) : e._e(), e._v(" "), e.am_logged_in ? n("div", {
				staticClass: "ui  labeled button",
				on: {
					click: function (t) {
						e.myTopSkins();
					}
				}
			}, [n("div", {
				staticClass: "ui purple button"
			}, [n("i", {
				staticClass: "heart icon"
			}), e._v("\n                            " + e._s(e.$t("skins.my_favs")) + "\n                        ")]), e._v(" "), n("a", {
				staticClass: "ui basic purple left pointing label"
			}, [e._v(e._s(e.skins.my_liked.length))])]) : e._e(), e._v(" "), !e.bannedFromSkins() ? e._e() : n("div", {
				staticClass: "ui black animated button",
				on: {
					click: function (t) {
						e.openUploadSkinModal();
					}
				}
			}, [n("div", {
				staticClass: "visible content"
			}, [e._v(e._s(e.$t("skins.add_skin")))]), e._v(" "), e._m(0)])]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("div", {
				staticClass: "ui inverted transparent icon input"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.skinSearch,
					expression: "skinSearch"
				}],
				attrs: {
					type: "text",
					placeholder: e.$t("new_21_09.search")
				},
				domProps: {
					value: e.skinSearch
				},
				on: {
					keyup: function (t) {
						e.skinSearchDB();
					},
					input: function (t) {
						if (!t.target.composing) {
							e.skinSearch = t.target.value;
						}
					}
				}
			}), e._v(" "), n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.isActiveSearch,
					expression: "!isActiveSearch"
				}],
				staticClass: "search icon"
			}), e._v(" "), n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.isActiveSearch,
					expression: "isActiveSearch"
				}],
				staticClass: "notched circle loading icon"
			})])])])]), e._v(" "), e.bannedFromSkins() ? n("div", {}, [n("h2", {
				staticStyle: {
					color: "#fff"
				}
			}, [e._v(e._s(e.$t("skins.banned")))])]) : e._e(), e._v(" "), e.skins.images.length ? n("div", {
				staticClass: "ui six stackable cards",
				attrs: {
					id: "skins-cards"
				}
			}, [e._l(e.skins.visible_images, function (t) {
				return n("div", {
					staticClass: "card",
					attrs: {
						"data-skin-id": t.id
					}
				}, [n("div", {
					staticClass: "image"
				}, [n("div", {
					staticClass: "skin-label vote-number"
				}, [n("div", {
					staticClass: "floating ui red label",
					attrs: {
						id: "vote-for-" + t.id
					}
				}, [e._v(e._s(t.votes))])]), e._v(" "), n("img", {
					staticClass: "ui circular image",
					attrs: {
						src: "/agar.rs/assets/images/" + e.skinLink(t.skin_name, t.safe)
					},
					on: {
						click: function (n) {
							e.chooseSkin(t.skin_name);
						}
					}
				}), e._v(" "), e.am_logged_in ? n("div", {
					class: t.me == 1 ? "vote-skin" : "vote vote-skin",
					attrs: {
						id: "heart-for-" + t.id
					},
					on: {
						click: function (n) {
							e.voteSkin(t.id, t.skin_name);
						}
					}
				}, [n("i", {
					staticClass: "heart icon"
				})]) : e._e()]), e._v(" "), n("div", {
					staticClass: "ui bottom attached button chose-skin",
					on: {
						click: function (n) {
							e.chooseSkin(t.skin_name);
						}
					}
				}, [n("i", {
					staticClass: "add icon"
				}), e._v("\n                    " + e._s(t.skin_name) + "\n                ")])]);
			}), e._v(" "), n("i", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.isLoadingNew,
					expression: "isLoadingNew"
				}],
				staticClass: "huge notched circle loading icon"
			})], 2) : n("div", {
				staticClass: "no-skins"
			}, [n("h2", [e._v(e._s(e.$t("skins.not_found")))])])]), e._v(" "), n("div", {
				staticClass: "ui basic modal",
				attrs: {
					id: "upload-skin-modal"
				}
			}, [n("form", {
				staticClass: "ui form"
			}, [n("div", {
				staticClass: "ui stackable grid"
			}, [n("div", {
				staticClass: "ten wide column"
			}, [n("div", {
				staticClass: "upload-item"
			}, [n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: !e.image,
					expression: "!image"
				}],
				staticClass: "skin-photo-upload"
			}, [n("label", {
				staticClass: "upload-btn"
			}, [n("input", {
				attrs: {
					id: "imageFile",
					type: "file"
				}
			}), e._v(" "), n("span", [e._v(" " + e._s(e.$t("skins.find_skin")))])]), e._v(" "), n("p", [e._v("\n                                " + e._s(e.$t("skins.allowed")) + " .png, .jpg, .jpeg\n                            ")]), e._v(" "), n("p", [e._v("\n                                " + e._s(e.$t("skins.max_size")) + " 2mb\n                            ")]), e._v(" "), n("p", [e._v("\n                                " + e._s(e.$t("skins.min_size")) + "\n                            ")])]), e._v(" "), n("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.image,
					expression: "image"
				}],
				staticClass: "skin-photo-upload",
				attrs: {
					id: "uploadd"
				}
			}, [n("button", {
				staticClass: "remove-uploaded-photo",
				attrs: {
					type: "button"
				},
				on: {
					click: e.removeImage
				}
			}, [n("i", {
				staticClass: "remove icon"
			})])])])]), e._v(" "), n("div", {
				staticClass: "six wide column"
			}, [e.private ? e._e() : n("div", {
				staticClass: "upload-item"
			}, [n("h4", [e._v(e._s(e.$t("skins.skin_name")) + ":")]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model.trim",
					value: e.skins.skin_name,
					expression: "skins.skin_name",
					modifiers: {
						trim: true
					}
				}],
				attrs: {
					type: "text",
					maxlength: "15"
				},
				domProps: {
					value: e.skins.skin_name
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.skins.skin_name = t.target.value.trim();
						}
					},
					blur: function (t) {
						e.$forceUpdate();
					}
				}
			})])]), e._v(" "), n("br"), e._v(" "), n("div", {
				staticClass: "upload-item"
			}, [n("h4", [e._v(e._s(e.$t("new_21_09.additional_info")) + ":")]), e._v(" "), n("div", {
				staticClass: "field"
			}, [n("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model.trim",
					value: e.skins.additional_info,
					expression: "skins.additional_info",
					modifiers: {
						trim: true
					}
				}],
				attrs: {
					rows: "2"
				},
				domProps: {
					value: e.skins.additional_info
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.skins.additional_info = t.target.value.trim();
						}
					},
					blur: function (t) {
						e.$forceUpdate();
					}
				}
			})])]), e._v(" "), n("p", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.msg_error != "",
					expression: "msg_error != ''"
				}],
				staticClass: "error",
				domProps: {
					innerHTML: e._s(e.msg_error)
				}
			}), e._v(" "), n("p", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.success,
					expression: "success"
				}],
				staticClass: "success",
				staticStyle: {
					color: "forestgreen"
				}
			}, [e._v(e._s(e.$t("skins.skin_added")))]), e._v(" "), n("br"), e._v(" "), e.am_logged_in ? n("div", {
				staticClass: "ui toggle checkbox"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.private,
					expression: "private"
				}],
				attrs: {
					type: "checkbox"
				},
				domProps: {
					checked: Array.isArray(e.private) ? e._i(e.private, null) > -1 : e.private
				},
				on: {
					__c: function (t) {
						var n = e.private;
						var i = t.target;
						var o = !!i.checked;
						if (Array.isArray(n)) {
							var a = e._i(n, null);
							if (i.checked) {
								if (a < 0) {
									e.private = n.concat([null]);
								}
							} else if (a > -1) {
								e.private = n.slice(0, a).concat(n.slice(a + 1));
							}
						} else {
							e.private = o;
						}
					}
				}
			}), e._v(" "), n("label", {
				staticStyle: {
					color: "#fff"
				}
			}, [e._v("\n                            " + e._s(e.$t("logged.private_skin")) + "\n                            "), n("span", {
				attrs: {
					"data-tooltip": e.$t("logged.private_skin_desc"),
					"data-inverted": ""
				}
			}, [n("i", {
				staticClass: "help circle icon"
			})])])]) : e._e(), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), e._m(1), e._v(" "), n("div", {
				staticClass: "ui teal button",
				on: {
					"~click": function (t) {
						e.uploadSkinFunc();
					}
				}
			}, [e._v("\n                        " + e._s(e.$t("skins.add_skin")) + "\n\n                    ")]), e._v(" "), n("br"), e._v(" "), n("p", {
				staticStyle: {
					color: "darkorange",
					"margin-top": "10px"
				}
			}, [e._v("\n                        " + e._s(e.$t("new_21_09.skin_aprove")) + "\n                        "), n("span", {
				domProps: {
					innerHTML: e._s(e.$t("new_21_09.skin_rules"))
				}
			}), e._v(" "), n("br"), e._v("\n                        " + e._s(e.$t("skins.not_allowed_skins")) + "\n                    ")])])])])])], 1);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "hidden content"
			}, [n("i", {
				staticClass: "right arrow icon"
			})]);
		}, function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "showAddingSkin"
				}
			}, [n("img", {
				attrs: {
					src: "/agar.rs/assets/images/songadd.svg"
				}
			})]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", [n("h3", {
				staticClass: "text-center"
			}, [e._v(e._s(e.$t("online_safe.title")))]), e._v(" "), n("ul", [n("li", [e._v(e._s(e.$t("online_safe.tip1")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip2")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip3")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip4")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip5")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip6")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip7")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip8")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip9")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.tip10")))])]), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("h3", {
				staticClass: "text-center"
			}, [e._v(e._s(e.$t("online_safe.title2")))]), e._v(" "), n("ul", [n("li", [e._v(e._s(e.$t("online_safe.react1")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.react2")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.react3")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.react4")))]), e._v(" "), n("li", [e._v(e._s(e.$t("online_safe.react5")))])])]);
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui modal",
				attrs: {
					id: "music-modal"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n        " + e._s(e.$t("mp.music")) + "\n        "), !e.musicActive && e.playlist.length ? n("button", {
				staticClass: "ui teal button",
				attrs: {
					"data-tooltip": e.$t("mp.lag")
				},
				on: {
					click: function (t) {
						e.startMusic();
					}
				}
			}, [n("span", [e._v(e._s(e.$t("mp.play")))])]) : e._e(), e._v(" "), e.musicActive ? n("button", {
				staticClass: "ui teal button",
				on: {
					click: function (t) {
						e.startMusic();
					}
				}
			}, [e.musicActive ? n("span", [e._v(e._s(e.$t("mp.turn_off")))]) : e._e()]) : e._e()]), e._v(" "), n("div", {
				staticClass: "image content"
			}, [n("div", {
				staticClass: "ui medium  left floated image"
			}, [n("img", {
				attrs: {
					src: e.songThumbnail
				}
			})]), e._v(" "), n("div", {
				staticClass: "description"
			}, [n("div", {
				staticClass: "ui header"
			}, [e._v(e._s(e.$t("mp.share_and_listen")))]), e._v(" "), n("div", {
				staticClass: "ui yt-player"
			}, [e.musicActive && e.playlist.length ? n("youtube", {
				attrs: {
					"video-id": e.youtubeIDplaying,
					mute: e.muted,
					"player-width": "0",
					"player-height": "0",
					"player-vars": {
						autoplay: 1
					}
				},
				on: {
					ready: function (t) {
						e.ready();
					},
					ended: function (t) {
						e.switchSong();
					},
					error: function (t) {
						e.switchSong();
					}
				}
			}) : e._e(), e._v(" "), n("div", {
				staticClass: "two columns grid"
			}, [n("div", {
				staticClass: "colum"
			}, [n("div", {
				staticClass: "ui fluid action input"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.youtubeID,
					expression: "youtubeID"
				}],
				attrs: {
					id: "youtubeID",
					type: "text",
					placeholder: e.$t("mp.paste_yt")
				},
				domProps: {
					value: e.youtubeID
				},
				on: {
					input: function (t) {
						if (!t.target.composing) {
							e.youtubeID = t.target.value;
						}
					}
				}
			}), e._v(" "), n("button", {
				staticClass: "ui blue right labeled icon button",
				on: {
					click: function (t) {
						e.sendSong();
					}
				}
			}, [n("i", {
				staticClass: "add icon"
			}), e._v("\n                                " + e._s(e.$t("mp.add")) + "\n                            ")])])])]), e._v(" "), n("div", {
				staticClass: "clearfix"
			}), e._v(" "), n("div", {
				staticClass: "ui divider"
			}), e._v(" "), n("p", {
				staticStyle: {
					color: "red",
					position: "relative",
					top: "15px",
					display: "none"
				},
				attrs: {
					id: "song-exist"
				}
			}, [e._v(e._s(e.$t("mp.song_exist")))]), e._v(" "), e.playlist.length ? n("div", {
				staticClass: "playlist ui divided selection list"
			}, [n("br"), e._v(" "), e._m(0), e._v(" "), n("transition-group", {
				attrs: {
					name: "list"
				}
			}, e._l(e.playlist, function (t, i) {
				return n("div", {
					key: i,
					staticClass: "item",
					staticStyle: {
						"white-space": "nowrap"
					},
					on: {
						click: function (n) {
							e.changeSong(t.youtube_id);
						}
					}
				}, [n("div", {
					staticClass: "ui horizontal  circular labels"
				}, [n("i", {
					staticClass: "circular inverted green thumbs up icon",
					on: {
						"~click": function (n) {
							e.thumb("up", t);
						}
					}
				}), e._v(" "), n("p", {
					staticClass: "ui yellow circular label"
				}, [e._v(e._s(t.num_of_votes))]), e._v(" "), n("i", {
					staticClass: "circular inverted red thumbs down icon",
					on: {
						"~click": function (n) {
							e.thumb("down", t);
						}
					}
				})]), e._v(" "), n("span", {
					staticStyle: {
						cursor: "pointer"
					}
				}, [e._v(e._s(t.name))]), e._v(" "), e.am_logged_in && e.role >= 2 ? n("i", {
					staticClass: "circular inverted red trash icon",
					staticStyle: {
						position: "absolute",
						right: "0"
					},
					on: {
						click: function (n) {
							e.deleteSong(t);
						}
					}
				}) : e._e()]);
			}))], 1) : n("div", {
				staticClass: "playlist"
			}, [n("br"), e._v(" "), e.playlistError ? n("div", [e._v(e._s(e.$t("mp.error")))]) : e._e(), e._v("\n                    " + e._s(e.$t("mp.list_empty")) + " "), n("br"), e._v("\n                    " + e._s(e.$t("mp.copy_song_from_yt")) + "\n                ")])], 1)])])]);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				attrs: {
					id: "showAddingSong"
				}
			}, [n("img", {
				attrs: {
					src: "/agar.rs/assets/images/songadd.svg"
				}
			})]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui grid navigation"
			}, [n("div", {
				staticClass: "computer tablet only row"
			}, [n("div", {
				staticClass: "ui fixed menu navbar grid"
			}, [n("div", {
				staticClass: "ui container"
			}, [n("router-link", {
				staticClass: "item",
				attrs: {
					to: {
						name: "index"
					}
				}
			}, [n("i", {
				staticClass: "game icon"
			}), e._v(e._s(e.$t("home.home")) + "\n                ")]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/skins"
				}
			}, [n("i", {
				staticClass: "image icon"
			}), e._v(e._s(e.$t("home.skins")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/highscores"
				}
			}, [n("i", {
				staticClass: "trophy icon"
			}), e._v(e._s(e.$t("logged.results")) + "\n                ")]), e._v(" "), n("span", {
				staticClass: "item"
			}, [n("router-link", {
				attrs: {
					to: "/agar.rs/hats"
				}
			}, [n("i", {
				staticClass: "graduation cap icon"
			}), e._v(e._s(e.$t("logged.hats")) + "\n                  ")]), e._v(" "), e.myHats.length > 0 ? n("div", {
				staticClass: "ui floating dropdown"
			}, [n("i", {
				staticClass: "dropdown icon"
			}), e._v(" "), n("div", {
				staticClass: "menu"
			}, e._l(e.myHats, function (t) {
				return n("div", {
					staticClass: "item",
					on: {
						click: function (n) {
							e.chooseHat(e.getHatById(t.hat_id).secret);
						}
					}
				}, [e._v(e._s(e.getHatById(t.hat_id).name))]);
			}))]) : e._e()], 1), e._v(" "), n("div", {
				staticClass: "right menu"
			}, [n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.openCoinsModal();
					}
				}
			}, [n("img", {
				staticClass: "coins-img",
				attrs: {
					src: "/agar.rs/assets/images/coins.png"
				}
			}), e._v(" " + e._s(e.coins))]), e._v(" "), n("div", {
				staticClass: "item ui interted dropdown"
			}, [n("i", {
				staticClass: "user circle icon"
			}), e._v(e._s(e.$t("home.profile")) + " "), e.id != 0 ? n("span", {
				staticStyle: {
					color: "#c75342"
				}
			}, [e._v(" #ID: " + e._s(e.id))]) : e._e(), e._v(" "), n("div", {
				staticClass: "menu"
			}, [n("div", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.changeNicknameModal();
					}
				}
			}, [n("i", {
				staticClass: "pencil alternate icon"
			}), e._v("\n                                " + e._s(e.$t("logged.change_nickname")) + "\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.changeProfileSettingsModal();
					}
				}
			}, [n("i", {
				staticClass: "user icon"
			}), e._v("\n                                " + e._s(e.$t("logged.profile_settings")) + "\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.Logout();
					}
				}
			}, [n("i", {
				staticClass: "lock icon"
			}), e._v(e._s(e.$t("home.logout")) + "\n                            ")])])]), e._v(" "), n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.musicPage();
					}
				}
			}, [n("i", {
				staticClass: "music icon"
			})]), e._v(" "), n("div", {
				staticClass: "item ui floating dropdown button change-country"
			}, [n("i", {
				class: e.lang + " flag"
			}), e._v(" "), n("div", {
				staticClass: "menu",
				class: e.lang
			}, [n("div", {
				staticClass: "item",
				class: e.lang == "gb" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("gb");
					}
				}
			}, [n("i", {
				staticClass: "gb flag"
			}), e._v("English\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "ba" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("ba");
					}
				}
			}, [n("i", {
				staticClass: "ba flag"
			}), e._v("Bosanski\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "rs" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("rs");
					}
				}
			}, [n("i", {
				staticClass: "rs flag"
			}), e._v("Српски\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "hr" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("hr");
					}
				}
			}, [n("i", {
				staticClass: "hr flag"
			}), e._v("Hrvatski\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "mk" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("mk");
					}
				}
			}, [n("i", {
				staticClass: "mk flag"
			}), e._v("Македонски\n                            ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "si" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("si");
					}
				}
			}, [n("i", {
				staticClass: "si flag"
			}), e._v("Slovenščina\n                            ")])])])])], 1)])]), e._v(" "), n("div", {
				staticClass: "mobile only row"
			}, [n("div", {
				staticClass: "ui fixed navbar menu"
			}, [n("a", {
				attrs: {
					id: "fullScreenBtn"
				},
				on: {
					click: function (t) {
						e.fullScreen();
					}
				}
			}, [n("i", {
				staticClass: "maximize icon"
			})]), e._v(" "), e._m(0)]), e._v(" "), n("div", {
				staticClass: "ui vertical navbar menu"
			}, [n("router-link", {
				staticClass: "item",
				attrs: {
					to: {
						name: "index"
					}
				}
			}, [n("i", {
				staticClass: "game icon"
			}), e._v(e._s(e.$t("home.home")) + "\n            ")]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/skins"
				}
			}, [n("i", {
				staticClass: "image icon"
			}), e._v(e._s(e.$t("home.skins")))]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/highscores"
				}
			}, [n("i", {
				staticClass: "trophy icon"
			}), e._v(e._s(e.$t("logged.results")) + "\n            ")]), e._v(" "), n("router-link", {
				staticClass: "item",
				attrs: {
					to: "/agar.rs/hats"
				}
			}, [n("i", {
				staticClass: "graduation cap icon"
			}), e._v(e._s(e.$t("logged.hats")) + "\n            ")]), e._v(" "), n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.openCoinsModal();
					}
				}
			}, [n("img", {
				staticClass: "coins-img",
				attrs: {
					src: "/agar.rs/assets/images/coins.png"
				}
			}), e._v(" " + e._s(e.coins))]), e._v(" "), n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.Logout();
					}
				}
			}, [n("i", {
				staticClass: "lock icon"
			}), e._v(e._s(e.$t("home.logout")))]), e._v(" "), n("a", {
				staticClass: "item",
				on: {
					click: function (t) {
						e.musicPage();
					}
				}
			}, [n("i", {
				staticClass: "music icon"
			}), e._v(e._s(e.$t("home.music")))]), e._v(" "), e.id != 0 ? n("a", {
				staticClass: "item"
			}, [n("span", {
				staticStyle: {
					color: "#c75342"
				}
			}, [e._v(" #ID: " + e._s(e.id))])]) : e._e(), e._v(" "), n("div", {
				staticClass: "item ui floating dropdown button change-country"
			}, [n("i", {
				class: e.lang + " flag"
			}), e._v(" "), n("div", {
				staticClass: "menu",
				class: e.lang
			}, [n("div", {
				staticClass: "item",
				class: e.lang == "gb" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("gb");
					}
				}
			}, [n("i", {
				staticClass: "gb flag"
			}), e._v("English\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "ba" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("ba");
					}
				}
			}, [n("i", {
				staticClass: "ba flag"
			}), e._v("Bosanski\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "rs" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("rs");
					}
				}
			}, [n("i", {
				staticClass: "rs flag"
			}), e._v("Српски\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "hr" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("hr");
					}
				}
			}, [n("i", {
				staticClass: "hr flag"
			}), e._v("Hrvatski\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "mk" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("mk");
					}
				}
			}, [n("i", {
				staticClass: "mk flag"
			}), e._v("Македонски\n                    ")]), e._v(" "), n("div", {
				staticClass: "item",
				class: e.lang == "si" ? "active" : "",
				on: {
					click: function (t) {
						e.changeLanguage("si");
					}
				}
			}, [n("i", {
				staticClass: "si flag"
			}), e._v("Slovenščina\n                    ")])])])], 1)]), e._v(" "), n("div", {
				staticClass: "ui small inverted modal",
				attrs: {
					id: "new-nickname-modal"
				}
			}, [n("i", {
				staticClass: "close icon"
			}), e._v(" "), n("div", {
				staticClass: "header"
			}, [e._v("\n            " + e._s(e.$t("logged.change_nickname")) + "\n        ")]), e._v(" "), n("div", {
				staticClass: "content"
			}, [n("div", {
				staticClass: "ui inverted segment"
			}, [n("div", {
				staticClass: "ui right labeled inverted transparent icon input"
			}, [n("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.newNick,
					expression: "newNick"
				}],
				attrs: {
					type: "text",
					placeholder: e.$t("home.type_name"),
					maxlength: "15",
					autofocus: ""
				},
				domProps: {
					value: e.newNick
				},
				on: {
					keyup: function (t) {
						e.message = "";
					},
					input: function (t) {
						if (!t.target.composing) {
							e.newNick = t.target.value;
						}
					}
				}
			}), e._v(" "), n("a", {
				staticClass: "ui red tag label",
				on: {
					click: function (t) {
						e.changeNickname();
					}
				}
			}, [e._v("\n                        " + e._s(e.$t("home.save")) + "\n                    ")])]), e._v(" "), n("p", {
				staticClass: "error",
				domProps: {
					innerHTML: e._s(e.message)
				}
			})])])]), e._v(" "), n("profile-settings-modal")], 1);
		},
		staticRenderFns: [function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "right menu open"
			}, [n("a", {
				staticClass: "menu item",
				attrs: {
					href: ""
				}
			}, [n("i", {
				staticClass: "content icon"
			})])]);
		}]
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			return (e._self._c || t)("ins", {
				staticClass: "adsbygoogle",
				style: e.adStyle,
				attrs: {
					"data-ad-client": e.adClient,
					"data-ad-slot": e.adSlot,
					"data-ad-format": e.adFormat,
					"data-ad-layout-key": e.adLayoutKey,
					"data-full-width-responsive": e.fullWidthResponsive
				}
			});
		},
		staticRenderFns: []
	};
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this;
			var t = e.$createElement;
			var n = e._self._c || t;
			return n("div", {
				staticClass: "ui container pillory"
			}, [n("table", {
				staticClass: "ui inverted selectable grey table"
			}, [n("thead", [n("tr", [n("th", [e._v(e._s(e.$t("new_21_09.name")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.type")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.server")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.reason")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.date")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.expiration")))])])]), e._v(" "), e.bannedList.length > 0 ? n("tbody", e._l(e.bannedList, function (t) {
				if (t.nickname != "") {
					return n("tr", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: e.current_date < t.date_to,
							expression: "current_date < ban.date_to"
						}]
					}, [n("td", [e._v(e._s(decodeURI(t.nickname)))]), e._v(" "), n("td", [e._v(e._s(e.calcType(t.type)))]), e._v(" "), n("td", [e._v(e._s(e.calcServers(t.server)))]), e._v(" "), n("td", [e._v(e._s(t.reason))]), e._v(" "), n("td", [e._v(e._s(t.date_from))]), e._v(" "), n("td", [e._v(e._s(t.date_to))])]);
				} else {
					return e._e();
				}
			})) : n("tbody", [n("div", {
				staticClass: "ui hidden divider"
			}), e._v(" "), n("h3", [e._v("\n                " + e._s(e.$t("new_21_09.empty_list")) + "\n            ")]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})])]), e._v(" "), n("div", {
				staticClass: "ui hidden divider"
			})]);
		},
		staticRenderFns: []
	};
}, function (e, t, n) {
	var i = n(58);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("237840be", i, true);
}, function (e, t, n) {
	var i = n(59);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("3cba9031", i, true);
}, function (e, t, n) {
	var i = n(60);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("522495ec", i, true);
}, function (e, t, n) {
	var i = n(61);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("483c71fa", i, true);
}, function (e, t, n) {
	var i = n(62);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("329cd79c", i, true);
}, function (e, t, n) {
	var i = n(63);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("cf9dc996", i, true);
}, function (e, t, n) {
	var i = n(64);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("8915f532", i, true);
}, function (e, t, n) {
	var i = n(65);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("ee1ed666", i, true);
}, function (e, t, n) {
	var i = n(66);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("a79efe36", i, true);
}, function (e, t, n) {
	var i = n(67);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("6cd7a3d0", i, true);
}, function (e, t, n) {
	var i = n(68);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("23074fad", i, true);
}, function (e, t, n) {
	var i = n(69);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("491809e6", i, true);
}, function (e, t, n) {
	var i = n(70);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("a78affa4", i, true);
}, function (e, t, n) {
	var i = n(71);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("7444138e", i, true);
}, function (e, t, n) {
	var i = n(72);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("312d77e5", i, true);
}, function (e, t, n) {
	var i = n(73);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("a505e29c", i, true);
}, function (e, t, n) {
	var i = n(74);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("6f8d6b9e", i, true);
}, function (e, t, n) {
	var i = n(75);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("48c52880", i, true);
}, function (e, t, n) {
	var i = n(76);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("70a0da81", i, true);
}, function (e, t, n) {
	var i = n(77);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("1ec7b1b0", i, true);
}, function (e, t, n) {
	var i = n(78);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("91f87b3e", i, true);
}, function (e, t, n) {
	var i = n(79);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("37738ff5", i, true);
}, function (e, t, n) {
	var i = n(80);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("4480248d", i, true);
}, function (e, t, n) {
	var i = n(81);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("f2bae8f8", i, true);
}, function (e, t, n) {
	var i = n(82);
	if (typeof i == "string") {
		i = [[e.i, i, ""]];
	}
	if (i.locals) {
		e.exports = i.locals;
	}
	n(2)("6f4f052a", i, true);
}, function (e, t) {
	e.exports = function (e, t) {
		var n = [];
		var i = {};
		for (var o = 0; o < t.length; o++) {
			var a = t[o];
			var s = a[0];
			var r = {
				id: e + ":" + o,
				css: a[1],
				media: a[2],
				sourceMap: a[3]
			};
			if (i[s]) {
				i[s].parts.push(r);
			} else {
				n.push(i[s] = {
					id: s,
					parts: [r]
				});
			}
		}
		return n;
	};
}, function (e, t) {
	e.exports = function (e) {
		function t(i) {
			if (n[i]) {
				return n[i].exports;
			}
			var o = n[i] = {
				i: i,
				l: false,
				exports: {}
			};
			e[i].call(o.exports, o, o.exports, t);
			o.l = true;
			return o.exports;
		}
		var n = {};
		t.m = e;
		t.c = n;
		t.i = function (e) {
			return e;
		};
		t.d = function (e, n, i) {
			if (!t.o(e, n)) {
				Object.defineProperty(e, n, {
					configurable: false,
					enumerable: true,
					get: i
				});
			}
		};
		t.n = function (e) {
			var n = e && e.__esModule ? function () {
				return e.default;
			} : function () {
				return e;
			};
			t.d(n, "a", n);
			return n;
		};
		t.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		};
		t.p = "/";
		return t(t.s = 76);
	}([function (e, t) {
		var n = e.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
		if (typeof __g == "number") {
			__g = n;
		}
	}, function (e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function (e, t) {
			return n.call(e, t);
		};
	}, function (e, t, n) {
		var i = n(53);
		var o = n(14);
		e.exports = function (e) {
			return i(o(e));
		};
	}, function (e, t, n) {
		e.exports = !n(8)(function () {
			return Object.defineProperty({}, "a", {
				get: function () {
					return 7;
				}
			}).a != 7;
		});
	}, function (e, t, n) {
		var i = n(5);
		var o = n(11);
		e.exports = n(3) ? function (e, t, n) {
			return i.f(e, t, o(1, n));
		} : function (e, t, n) {
			e[t] = n;
			return e;
		};
	}, function (e, t, n) {
		var i = n(7);
		var o = n(30);
		var a = n(23);
		var s = Object.defineProperty;
		t.f = n(3) ? Object.defineProperty : function (e, t, n) {
			i(e);
			t = a(t, true);
			i(n);
			if (o) {
				try {
					return s(e, t, n);
				} catch (e) {}
			}
			if ("get" in n || "set" in n) {
				throw TypeError("Accessors not supported!");
			}
			if ("value" in n) {
				e[t] = n.value;
			}
			return e;
		};
	}, function (e, t, n) {
		var i = n(21)("wks");
		var o = n(12);
		var a = n(0).Symbol;
		var s = typeof a == "function";
		(e.exports = function (e) {
			return i[e] ||= s && a[e] || (s ? a : o)("Symbol." + e);
		}).store = i;
	}, function (e, t, n) {
		var i = n(9);
		e.exports = function (e) {
			if (!i(e)) {
				throw TypeError(e + " is not an object!");
			}
			return e;
		};
	}, function (e, t) {
		e.exports = function (e) {
			try {
				return !!e();
			} catch (e) {
				return true;
			}
		};
	}, function (e, t) {
		e.exports = function (e) {
			if (typeof e == "object") {
				return e !== null;
			} else {
				return typeof e == "function";
			}
		};
	}, function (e, t, n) {
		var i = n(35);
		var o = n(15);
		e.exports = Object.keys || function (e) {
			return i(e, o);
		};
	}, function (e, t) {
		e.exports = function (e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			};
		};
	}, function (e, t) {
		var n = 0;
		var i = Math.random();
		e.exports = function (e) {
			return `Symbol(${e === undefined ? "" : e})_${(++n + i).toString(36)}`;
		};
	}, function (e, t) {
		var n = e.exports = {
			version: "2.4.0"
		};
		if (typeof __e == "number") {
			__e = n;
		}
	}, function (e, t) {
		e.exports = function (e) {
			if (e == undefined) {
				throw TypeError("Can't call method on  " + e);
			}
			return e;
		};
	}, function (e, t) {
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
	}, function (e, t) {
		e.exports = {};
	}, function (e, t) {
		e.exports = true;
	}, function (e, t) {
		t.f = {}.propertyIsEnumerable;
	}, function (e, t, n) {
		var i = n(5).f;
		var o = n(1);
		var a = n(6)("toStringTag");
		e.exports = function (e, t, n) {
			if (e && !o(e = n ? e : e.prototype, a)) {
				i(e, a, {
					configurable: true,
					value: t
				});
			}
		};
	}, function (e, t, n) {
		var i = n(21)("keys");
		var o = n(12);
		e.exports = function (e) {
			return i[e] ||= o(e);
		};
	}, function (e, t, n) {
		var i = n(0);
		var o = i["__core-js_shared__"] ||= {};
		e.exports = function (e) {
			return o[e] ||= {};
		};
	}, function (e, t) {
		var n = Math.ceil;
		var i = Math.floor;
		e.exports = function (e) {
			if (isNaN(e = +e)) {
				return 0;
			} else {
				return (e > 0 ? i : n)(e);
			}
		};
	}, function (e, t, n) {
		var i = n(9);
		e.exports = function (e, t) {
			if (!i(e)) {
				return e;
			}
			var n;
			var o;
			if (t && typeof (n = e.toString) == "function" && !i(o = n.call(e))) {
				return o;
			}
			if (typeof (n = e.valueOf) == "function" && !i(o = n.call(e))) {
				return o;
			}
			if (!t && typeof (n = e.toString) == "function" && !i(o = n.call(e))) {
				return o;
			}
			throw TypeError("Can't convert object to primitive value");
		};
	}, function (e, t, n) {
		var i = n(0);
		var o = n(13);
		var a = n(17);
		var s = n(25);
		var r = n(5).f;
		e.exports = function (e) {
			var t = o.Symbol ||= a ? {} : i.Symbol || {};
			if (e.charAt(0) != "_" && !(e in t)) {
				r(t, e, {
					value: s.f(e)
				});
			}
		};
	}, function (e, t, n) {
		t.f = n(6);
	}, function (e, t, n) {
		"use strict";

		t.a = {
			translations: {
				ar: {
					language: "Arabic",
					rtl: true,
					months: {
						original: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوڤمبر", "ديسمبر"],
						abbr: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوڤمبر", "ديسمبر"]
					},
					days: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"]
				},
				bg: {
					language: "Bulgarian",
					months: {
						original: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
						abbr: ["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"]
					},
					days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
				},
				bs: {
					language: "Bosnian",
					months: {
						original: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]
					},
					days: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
				},
				cs: {
					language: "Czech",
					months: {
						original: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
						abbr: ["led", "úno", "bře", "dub", "kvě", "čer", "čec", "srp", "zář", "říj", "lis", "pro"]
					},
					days: ["ne", "po", "út", "st", "čt", "pá", "so"]
				},
				da: {
					language: "Danish",
					months: {
						original: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
					},
					days: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"]
				},
				de: {
					language: "German",
					months: {
						original: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
						abbr: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
					},
					days: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]
				},
				ee: {
					language: "Estonian",
					months: {
						original: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
						abbr: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"]
					},
					days: ["P", "E", "T", "K", "N", "R", "L"]
				},
				el: {
					language: "Greek",
					months: {
						original: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
						abbr: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"]
					},
					days: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σατ"]
				},
				en: {
					language: "English",
					months: {
						original: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
					},
					days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
				},
				es: {
					language: "Spanish",
					months: {
						original: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
						abbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
					},
					days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"]
				},
				ca: {
					language: "Catalan",
					months: {
						original: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
						abbr: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"]
					},
					days: ["Diu", "Dil", "Dmr", "Dmc", "Dij", "Div", "Dis"]
				},
				fi: {
					language: "Finish",
					months: {
						original: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
						abbr: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"]
					},
					days: ["su", "ma", "ti", "ke", "to", "pe", "la"]
				},
				fr: {
					language: "French",
					months: {
						original: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
						abbr: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"]
					},
					days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
				},
				ge: {
					language: "Georgia",
					months: {
						original: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
						abbr: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"]
					},
					days: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"]
				},
				ja: {
					language: "Japanese",
					months: {
						original: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
						abbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
					},
					days: ["日", "月", "火", "水", "木", "金", "土"]
				},
				he: {
					language: "Hebrew",
					rtl: true,
					months: {
						original: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
						abbr: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"]
					},
					days: ["א", "ב", "ג", "ד", "ה", "ו", "ש"]
				},
				hu: {
					language: "Hungarian",
					months: {
						original: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
						abbr: ["Jan", "Febr", "Márc", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szept", "Okt", "Nov", "Dec"]
					},
					days: ["Vas", "Hét", "Ke", "Sze", "Csü", "Pén", "Szo"]
				},
				hr: {
					language: "Croatian",
					months: {
						original: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
						abbr: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"]
					},
					days: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"]
				},
				id: {
					language: "Indonesian",
					months: {
						original: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
					},
					days: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
				},
				it: {
					language: "Italian",
					months: {
						original: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
						abbr: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
					},
					days: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
				},
				is: {
					language: "Icelandic",
					months: {
						original: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
						abbr: ["Jan", "Feb", "Mars", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"]
					},
					days: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"]
				},
				fa: {
					language: "Persian",
					months: {
						original: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
						abbr: ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف"]
					},
					days: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
				},
				ko: {
					language: "Korean",
					months: {
						original: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
						abbr: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
					},
					days: ["일", "월", "화", "수", "목", "금", "토"]
				},
				lt: {
					language: "Lithuanian",
					months: {
						original: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
						abbr: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"]
					},
					days: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"]
				},
				lv: {
					language: "Latvian",
					months: {
						original: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"]
					},
					days: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"]
				},
				mn: {
					language: "Mongolia",
					months: {
						original: ["1 дүгээр сар", "2 дугаар сар", "3 дугаар сар", "4 дүгээр сар", "5 дугаар сар", "6 дугаар сар", "7 дугаар сар", "8 дугаар сар", "9 дүгээр сар", "10 дугаар сар", "11 дүгээр сар", "12 дугаар сар"],
						abbr: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"]
					},
					days: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"]
				},
				nl: {
					language: "Dutch",
					months: {
						original: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
						abbr: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
					},
					days: ["zo", "ma", "di", "wo", "do", "vr", "za"]
				},
				"nb-no": {
					language: "Norwegian Bokmål",
					months: {
						original: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"]
					},
					days: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"]
				},
				pl: {
					language: "Polish",
					months: {
						original: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
						abbr: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"]
					},
					days: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sob"]
				},
				"pt-br": {
					language: "Brazilian",
					months: {
						original: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
						abbr: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
					},
					days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
				},
				ro: {
					language: "Romanian",
					months: {
						original: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
						abbr: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"]
					},
					days: ["D", "L", "Ma", "Mi", "J", "V", "S"]
				},
				ru: {
					language: "Russian",
					months: {
						original: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
						abbr: ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"]
					},
					days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
				},
				sv: {
					language: "Swedish",
					months: {
						original: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
					},
					days: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
				},
				sk: {
					language: "Slovakian",
					months: {
						original: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
						abbr: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"]
					},
					days: ["ne", "po", "ut", "st", "št", "pi", "so"]
				},
				"sl-si": {
					language: "Sloveian",
					months: {
						original: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]
					},
					days: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
				},
				sr: {
					language: "Serbian",
					months: {
						original: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
						abbr: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"]
					},
					days: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"]
				},
				"sr-Cyrl": {
					language: "Serbian in Cyrillic script",
					months: {
						original: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
						abbr: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"]
					},
					days: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"]
				},
				th: {
					language: "Thai",
					months: {
						original: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
						abbr: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
					},
					days: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"]
				},
				tr: {
					language: "Turkish",
					months: {
						original: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
						abbr: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"]
					},
					days: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]
				},
				uk: {
					language: "Ukraine",
					months: {
						original: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
						abbr: ["Січ", "Лют", "Бер", "Квіт", "Трав", "Чер", "Лип", "Серп", "Вер", "Жовт", "Лист", "Груд"]
					},
					days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
				},
				vi: {
					language: "Vientnamese",
					months: {
						original: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
						abbr: ["T 01", "T 02", "T 03", "T 04", "T 05", "T 06", "T 07", "T 08", "T 09", "T 10", "T 11", "T 12"]
					},
					days: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]
				},
				zh: {
					language: "Chinese",
					months: {
						original: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
						abbr: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
					},
					days: ["日", "一", "二", "三", "四", "五", "六"]
				}
			}
		};
	}, function (e, t) {
		var n = {}.toString;
		e.exports = function (e) {
			return n.call(e).slice(8, -1);
		};
	}, function (e, t, n) {
		var i = n(9);
		var o = n(0).document;
		var a = i(o) && i(o.createElement);
		e.exports = function (e) {
			if (a) {
				return o.createElement(e);
			} else {
				return {};
			}
		};
	}, function (e, t, n) {
		var i = n(0);
		var o = n(13);
		var a = n(50);
		var s = n(4);
		function r(e, t, n) {
			var l;
			var c;
			var u;
			var d = e & r.F;
			var p = e & r.G;
			var f = e & r.S;
			var h = e & r.P;
			var m = e & r.B;
			var g = e & r.W;
			var v = p ? o : o[t] ||= {};
			var b = v.prototype;
			var y = p ? i : f ? i[t] : (i[t] || {}).prototype;
			if (p) {
				n = t;
			}
			for (l in n) {
				if (!(c = !d && y && y[l] !== undefined) || !(l in v)) {
					u = c ? y[l] : n[l];
					v[l] = p && typeof y[l] != "function" ? n[l] : m && c ? a(u, i) : g && y[l] == u ? function (e) {
						function t(t, n, i) {
							if (this instanceof e) {
								switch (arguments.length) {
									case 0:
										return new e();
									case 1:
										return new e(t);
									case 2:
										return new e(t, n);
								}
								return new e(t, n, i);
							}
							return e.apply(this, arguments);
						}
						t.prototype = e.prototype;
						return t;
					}(u) : h && typeof u == "function" ? a(Function.call, u) : u;
					if (h) {
						(v.virtual ||= {})[l] = u;
						if (e & r.R && b && !b[l]) {
							s(b, l, u);
						}
					}
				}
			}
		}
		r.F = 1;
		r.G = 2;
		r.S = 4;
		r.P = 8;
		r.B = 16;
		r.W = 32;
		r.U = 64;
		r.R = 128;
		e.exports = r;
	}, function (e, t, n) {
		e.exports = !n(3) && !n(8)(function () {
			return Object.defineProperty(n(28)("div"), "a", {
				get: function () {
					return 7;
				}
			}).a != 7;
		});
	}, function (e, t, n) {
		"use strict";

		var i = n(17);
		var o = n(29);
		var a = n(36);
		var s = n(4);
		var r = n(1);
		var l = n(16);
		var c = n(55);
		var u = n(19);
		var d = n(62);
		var p = n(6)("iterator");
		var f = ![].keys || !("next" in [].keys());
		function h() {
			return this;
		}
		e.exports = function (e, t, n, m, g, v, b) {
			c(n, t, m);
			var y;
			var w;
			var _;
			function k(e) {
				if (!f && e in A) {
					return A[e];
				}
				switch (e) {
					case "keys":
					case "values":
						return function () {
							return new n(this, e);
						};
				}
				return function () {
					return new n(this, e);
				};
			}
			var x = t + " Iterator";
			var C = g == "values";
			var S = false;
			var A = e.prototype;
			var T = A[p] || A["@@iterator"] || g && A[g];
			var P = T || k(g);
			var j = g ? C ? k("entries") : P : undefined;
			var E = t == "Array" ? A.entries || T : T;
			if (E && (_ = d(E.call(new e()))) !== Object.prototype) {
				u(_, x, true);
				if (!i && !r(_, p)) {
					s(_, p, h);
				}
			}
			if (C && T && T.name !== "values") {
				S = true;
				P = function () {
					return T.call(this);
				};
			}
			if ((!i || !!b) && (!!f || !!S || !A[p])) {
				s(A, p, P);
			}
			l[t] = P;
			l[x] = h;
			if (g) {
				y = {
					values: C ? P : k("values"),
					keys: v ? P : k("keys"),
					entries: j
				};
				if (b) {
					for (w in y) {
						if (!(w in A)) {
							a(A, w, y[w]);
						}
					}
				} else {
					o(o.P + o.F * (f || S), t, y);
				}
			}
			return y;
		};
	}, function (e, t, n) {
		var i = n(7);
		var o = n(59);
		var a = n(15);
		var s = n(20)("IE_PROTO");
		function r() {}
		function l() {
			var e;
			var t = n(28)("iframe");
			var i = a.length;
			t.style.display = "none";
			n(52).appendChild(t);
			t.src = "javascript:";
			(e = t.contentWindow.document).open();
			e.write("<script>document.F=Object</script>");
			e.close();
			l = e.F;
			while (i--) {
				delete l.prototype[a[i]];
			}
			return l();
		}
		e.exports = Object.create || function (e, t) {
			var n;
			if (e !== null) {
				r.prototype = i(e);
				n = new r();
				r.prototype = null;
				n[s] = e;
			} else {
				n = l();
			}
			if (t === undefined) {
				return n;
			} else {
				return o(n, t);
			}
		};
	}, function (e, t, n) {
		var i = n(35);
		var o = n(15).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function (e) {
			return i(e, o);
		};
	}, function (e, t) {
		t.f = Object.getOwnPropertySymbols;
	}, function (e, t, n) {
		var i = n(1);
		var o = n(2);
		var a = n(49)(false);
		var s = n(20)("IE_PROTO");
		e.exports = function (e, t) {
			var n;
			var r = o(e);
			var l = 0;
			var c = [];
			for (n in r) {
				if (n != s && i(r, n)) {
					c.push(n);
				}
			}
			while (t.length > l) {
				if (i(r, n = t[l++])) {
					if (!~a(c, n)) {
						c.push(n);
					}
				}
			}
			return c;
		};
	}, function (e, t, n) {
		e.exports = n(4);
	}, function (e, t, n) {
		"use strict";

		Object.defineProperty(t, "__esModule", {
			value: true
		});
		var i = n(41);
		var o = n(26);
		t.default = {
			props: {
				value: {
					validator: function (e) {
						return e === null || e instanceof Date || typeof e == "string";
					}
				},
				name: String,
				refName: String,
				id: String,
				format: {
					type: [String, Function],
					default: "dd MMM yyyy"
				},
				language: {
					type: String,
					default: "en"
				},
				openDate: {
					validator: function (e) {
						return e === null || e instanceof Date || typeof e == "string";
					}
				},
				fullMonthName: Boolean,
				disabled: Object,
				highlighted: Object,
				placeholder: String,
				inline: Boolean,
				calendarClass: [String, Object],
				inputClass: [String, Object],
				wrapperClass: [String, Object],
				mondayFirst: Boolean,
				clearButton: Boolean,
				clearButtonIcon: String,
				calendarButton: Boolean,
				calendarButtonIcon: String,
				calendarButtonIconContent: String,
				bootstrapStyling: Boolean,
				initialView: String,
				disabledPicker: Boolean,
				required: Boolean,
				minimumView: {
					type: String,
					default: "day"
				},
				maximumView: {
					type: String,
					default: "year"
				}
			},
			data: function () {
				return {
					pageTimestamp: (this.openDate ? new Date(this.openDate) : new Date()).setDate(1),
					selectedDate: null,
					showDayView: false,
					showMonthView: false,
					showYearView: false,
					calendarHeight: 0
				};
			},
			watch: {
				value: function (e) {
					this.setValue(e);
				},
				openDate: function () {
					this.setPageDate();
				},
				initialView: function () {
					this.setInitialView();
				}
			},
			computed: {
				computedInitialView: function () {
					if (this.initialView) {
						return this.initialView;
					} else {
						return this.minimumView;
					}
				},
				pageDate: function () {
					return new Date(this.pageTimestamp);
				},
				formattedValue: function () {
					if (this.selectedDate) {
						if (typeof this.format == "function") {
							return this.format(this.selectedDate);
						} else {
							return i.a.formatDate(new Date(this.selectedDate), this.format, this.translation);
						}
					} else {
						return null;
					}
				},
				translation: function () {
					return o.a.translations[this.language];
				},
				currMonthName: function () {
					var e = this.fullMonthName ? this.translation.months.original : this.translation.months.abbr;
					return i.a.getMonthNameAbbr(this.pageDate.getMonth(), e);
				},
				currYear: function () {
					return this.pageDate.getFullYear();
				},
				blankDays: function () {
					var e = this.pageDate;
					var t = new Date(e.getFullYear(), e.getMonth(), 1, e.getHours(), e.getMinutes());
					if (this.mondayFirst) {
						if (t.getDay() > 0) {
							return t.getDay() - 1;
						} else {
							return 6;
						}
					} else {
						return t.getDay();
					}
				},
				daysOfWeek: function () {
					if (this.mondayFirst) {
						var e = this.translation.days.slice();
						e.push(e.shift());
						return e;
					}
					return this.translation.days;
				},
				days: function () {
					var e = this.pageDate;
					var t = [];
					var n = new Date(e.getFullYear(), e.getMonth(), 1, e.getHours(), e.getMinutes());
					for (var o = i.a.daysInMonth(n.getFullYear(), n.getMonth()), a = 0; a < o; a++) {
						t.push({
							date: n.getDate(),
							timestamp: n.getTime(),
							isSelected: this.isSelectedDate(n),
							isDisabled: this.isDisabledDate(n),
							isHighlighted: this.isHighlightedDate(n),
							isHighlightStart: this.isHighlightStart(n),
							isHighlightEnd: this.isHighlightEnd(n),
							isToday: n.toDateString() === new Date().toDateString(),
							isWeekend: n.getDay() === 0 || n.getDay() === 6,
							isSaturday: n.getDay() === 6,
							isSunday: n.getDay() === 0
						});
						n.setDate(n.getDate() + 1);
					}
					return t;
				},
				months: function () {
					var e = this.pageDate;
					var t = [];
					var n = new Date(e.getFullYear(), 0, e.getDate(), e.getHours(), e.getMinutes());
					for (var o = 0; o < 12; o++) {
						t.push({
							month: i.a.getMonthName(o, this.translation.months.original),
							timestamp: n.getTime(),
							isSelected: this.isSelectedMonth(n),
							isDisabled: this.isDisabledMonth(n)
						});
						n.setMonth(n.getMonth() + 1);
					}
					return t;
				},
				years: function () {
					var e = this.pageDate;
					var t = [];
					var n = new Date(Math.floor(e.getFullYear() / 10) * 10, e.getMonth(), e.getDate(), e.getHours(), e.getMinutes());
					for (var i = 0; i < 10; i++) {
						t.push({
							year: n.getFullYear(),
							timestamp: n.getTime(),
							isSelected: this.isSelectedYear(n),
							isDisabled: this.isDisabledYear(n)
						});
						n.setFullYear(n.getFullYear() + 1);
					}
					return t;
				},
				calendarStyle: function () {
					return {
						position: this.isInline ? "static" : undefined
					};
				},
				isOpen: function () {
					return this.showDayView || this.showMonthView || this.showYearView;
				},
				isInline: function () {
					return !!this.inline;
				},
				isRtl: function () {
					return this.translation.rtl === true;
				}
			},
			methods: {
				close: function () {
					this.showDayView = this.showMonthView = this.showYearView = false;
					if (!this.isInline) {
						this.$emit("closed");
						document.removeEventListener("click", this.clickOutside, false);
					}
				},
				resetDefaultDate: function () {
					if (this.selectedDate !== null) {
						this.setPageDate(this.selectedDate);
					} else {
						this.setPageDate();
					}
				},
				showCalendar: function () {
					return !this.disabledPicker && !this.isInline && (this.isOpen ? this.close() : (this.setInitialView(), void (this.isInline || this.$emit("opened"))));
				},
				setInitialView: function () {
					var e = this.computedInitialView;
					if (!this.allowedToShowView(e)) {
						throw new Error("initialView '" + this.initialView + "' cannot be rendered based on minimum '" + this.minimumView + "' and maximum '" + this.maximumView + "'");
					}
					switch (e) {
						case "year":
							this.showYearCalendar();
							break;
						case "month":
							this.showMonthCalendar();
							break;
						default:
							this.showDayCalendar();
					}
				},
				allowedToShowView: function (e) {
					var t = ["day", "month", "year"];
					var n = t.indexOf(this.minimumView);
					var i = t.indexOf(this.maximumView);
					var o = t.indexOf(e);
					return o >= n && o <= i;
				},
				showDayCalendar: function () {
					if (!this.allowedToShowView("day")) {
						return false;
					}
					this.close();
					this.showDayView = true;
					if (!this.isInline) {
						document.addEventListener("click", this.clickOutside, false);
					}
				},
				showMonthCalendar: function () {
					if (!this.allowedToShowView("month")) {
						return false;
					}
					this.close();
					this.showMonthView = true;
					if (!this.isInline) {
						document.addEventListener("click", this.clickOutside, false);
					}
				},
				showYearCalendar: function () {
					if (!this.allowedToShowView("year")) {
						return false;
					}
					this.close();
					this.showYearView = true;
					if (!this.isInline) {
						document.addEventListener("click", this.clickOutside, false);
					}
				},
				setDate: function (e) {
					var t = new Date(e);
					this.selectedDate = new Date(t);
					this.setPageDate(t);
					this.$emit("selected", new Date(t));
					this.$emit("input", new Date(t));
				},
				clearDate: function () {
					this.selectedDate = null;
					this.$emit("selected", null);
					this.$emit("input", null);
					this.$emit("cleared");
				},
				selectDate: function (e) {
					if (e.isDisabled) {
						this.$emit("selectedDisabled", e);
						return false;
					}
					this.setDate(e.timestamp);
					if (this.isInline) {
						this.showDayCalendar();
					} else {
						this.close();
					}
				},
				selectMonth: function (e) {
					if (e.isDisabled) {
						return false;
					}
					var t = new Date(e.timestamp);
					if (this.allowedToShowView("day")) {
						this.setPageDate(t);
						this.$emit("changedMonth", e);
						this.showDayCalendar();
					} else {
						this.setDate(t);
						this.close();
					}
				},
				selectYear: function (e) {
					if (e.isDisabled) {
						return false;
					}
					var t = new Date(e.timestamp);
					if (this.allowedToShowView("month")) {
						this.setPageDate(t);
						this.$emit("changedYear", e);
						this.showMonthCalendar();
					} else {
						this.setDate(t);
						this.close();
					}
				},
				getPageDate: function () {
					return this.pageDate.getDate();
				},
				getPageMonth: function () {
					return this.pageDate.getMonth();
				},
				getPageYear: function () {
					return this.pageDate.getFullYear();
				},
				getPageDecade: function () {
					return Math.floor(this.pageDate.getFullYear() / 10) * 10 + "'s";
				},
				changeMonth: function (e) {
					var t = this.pageDate;
					t.setMonth(t.getMonth() + e);
					this.setPageDate(t);
					this.$emit("changedMonth", t);
				},
				previousMonth: function () {
					if (!this.previousMonthDisabled()) {
						this.changeMonth(-1);
					}
				},
				previousMonthDisabled: function () {
					if (!this.disabled || !this.disabled.to) {
						return false;
					}
					var e = this.pageDate;
					return this.disabled.to.getMonth() >= e.getMonth() && this.disabled.to.getFullYear() >= e.getFullYear();
				},
				nextMonth: function () {
					if (!this.nextMonthDisabled()) {
						this.changeMonth(1);
					}
				},
				nextMonthDisabled: function () {
					if (!this.disabled || !this.disabled.from) {
						return false;
					}
					var e = this.pageDate;
					return this.disabled.from.getMonth() <= e.getMonth() && this.disabled.from.getFullYear() <= e.getFullYear();
				},
				changeYear: function (e, t = "changedYear") {
					var n = this.pageDate;
					n.setYear(n.getFullYear() + e);
					this.setPageDate(n);
					this.$emit(t);
				},
				previousYear: function () {
					if (!this.previousYearDisabled()) {
						this.changeYear(-1);
					}
				},
				previousYearDisabled: function () {
					return !!this.disabled && !!this.disabled.to && this.disabled.to.getFullYear() >= this.pageDate.getFullYear();
				},
				nextYear: function () {
					if (!this.nextYearDisabled()) {
						this.changeYear(1);
					}
				},
				nextYearDisabled: function () {
					return !!this.disabled && !!this.disabled.from && this.disabled.from.getFullYear() <= this.pageDate.getFullYear();
				},
				previousDecade: function () {
					if (!this.previousDecadeDisabled()) {
						this.changeYear(-10, "changeDecade");
					}
				},
				previousDecadeDisabled: function () {
					return !!this.disabled && !!this.disabled.to && Math.floor(this.disabled.to.getFullYear() / 10) * 10 >= Math.floor(this.pageDate.getFullYear() / 10) * 10;
				},
				nextDecade: function () {
					if (!this.nextDecadeDisabled()) {
						this.changeYear(10, "changeDecade");
					}
				},
				nextDecadeDisabled: function () {
					return !!this.disabled && !!this.disabled.from && Math.ceil(this.disabled.from.getFullYear() / 10) * 10 <= Math.ceil(this.pageDate.getFullYear() / 10) * 10;
				},
				isSelectedDate: function (e) {
					return this.selectedDate && this.selectedDate.toDateString() === e.toDateString();
				},
				isDisabledDate: function (e) {
					var t = false;
					return this.disabled !== undefined && (this.disabled.dates !== undefined && this.disabled.dates.forEach(function (n) {
						if (e.toDateString() === n.toDateString()) {
							t = true;
							return true;
						}
					}), this.disabled.to !== undefined && this.disabled.to && e < this.disabled.to && (t = true), this.disabled.from !== undefined && this.disabled.from && e > this.disabled.from && (t = true), this.disabled.ranges !== undefined && this.disabled.ranges.forEach(function (n) {
						if (n.from !== undefined && n.from && n.to !== undefined && n.to && e < n.to && e > n.from) {
							t = true;
							return true;
						}
					}), this.disabled.days !== undefined && this.disabled.days.indexOf(e.getDay()) !== -1 && (t = true), this.disabled.daysOfMonth !== undefined && this.disabled.daysOfMonth.indexOf(e.getDate()) !== -1 && (t = true), typeof this.disabled.customPredictor == "function" && this.disabled.customPredictor(e) && (t = true), t);
				},
				isHighlightedDate: function (e) {
					if (this.isDisabledDate(e)) {
						return false;
					}
					var t = false;
					return this.highlighted !== undefined && (this.highlighted.dates !== undefined && this.highlighted.dates.forEach(function (n) {
						if (e.toDateString() === n.toDateString()) {
							t = true;
							return true;
						}
					}), this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to) && (t = e >= this.highlighted.from && e <= this.highlighted.to), this.highlighted.days !== undefined && this.highlighted.days.indexOf(e.getDay()) !== -1 && (t = true), this.highlighted.daysOfMonth !== undefined && this.highlighted.daysOfMonth.indexOf(e.getDate()) !== -1 && (t = true), typeof this.highlighted.customPredictor == "function" && this.highlighted.customPredictor(e) && (t = true), t);
				},
				isHighlightStart: function (e) {
					return this.isHighlightedDate(e) && this.highlighted.from instanceof Date && this.highlighted.from.getFullYear() === e.getFullYear() && this.highlighted.from.getMonth() === e.getMonth() && this.highlighted.from.getDate() === e.getDate();
				},
				isHighlightEnd: function (e) {
					return this.isHighlightedDate(e) && this.highlighted.to instanceof Date && this.highlighted.to.getFullYear() === e.getFullYear() && this.highlighted.to.getMonth() === e.getMonth() && this.highlighted.to.getDate() === e.getDate();
				},
				isDefined: function (e) {
					return e !== undefined && e;
				},
				isSelectedMonth: function (e) {
					return this.selectedDate && this.selectedDate.getFullYear() === e.getFullYear() && this.selectedDate.getMonth() === e.getMonth();
				},
				isDisabledMonth: function (e) {
					var t = false;
					return this.disabled !== undefined && (this.disabled.to !== undefined && this.disabled.to && (e.getMonth() < this.disabled.to.getMonth() && e.getFullYear() <= this.disabled.to.getFullYear() || e.getFullYear() < this.disabled.to.getFullYear()) && (t = true), this.disabled.from !== undefined && this.disabled.from && (this.disabled.from && e.getMonth() > this.disabled.from.getMonth() && e.getFullYear() >= this.disabled.from.getFullYear() || e.getFullYear() > this.disabled.from.getFullYear()) && (t = true), t);
				},
				isSelectedYear: function (e) {
					return this.selectedDate && this.selectedDate.getFullYear() === e.getFullYear();
				},
				isDisabledYear: function (e) {
					var t = false;
					return this.disabled !== undefined && !!this.disabled && (this.disabled.to !== undefined && this.disabled.to && e.getFullYear() < this.disabled.to.getFullYear() && (t = true), this.disabled.from !== undefined && this.disabled.from && e.getFullYear() > this.disabled.from.getFullYear() && (t = true), t);
				},
				setValue: function (e) {
					if (typeof e == "string") {
						var t = new Date(e);
						e = isNaN(t.valueOf()) ? null : t;
					}
					if (!e) {
						this.setPageDate();
						this.selectedDate = null;
						return;
					}
					this.selectedDate = e;
					this.setPageDate(e);
				},
				setPageDate: function (e) {
					e ||= this.openDate ? new Date(this.openDate) : new Date();
					this.pageTimestamp = new Date(e).setDate(1);
				},
				clickOutside: function (e) {
					if (this.$el && !this.$el.contains(e.target)) {
						if (this.isInline) {
							return this.showDayCalendar();
						}
						this.resetDefaultDate();
						this.close();
						document.removeEventListener("click", this.clickOutside, false);
					}
				},
				dayClasses: function (e) {
					return {
						selected: e.isSelected,
						disabled: e.isDisabled,
						highlighted: e.isHighlighted,
						today: e.isToday,
						weekend: e.isWeekend,
						sat: e.isSaturday,
						sun: e.isSunday,
						"highlight-start": e.isHighlightStart,
						"highlight-end": e.isHighlightEnd
					};
				},
				init: function () {
					if (this.value) {
						this.setValue(this.value);
					}
					if (this.isInline) {
						this.setInitialView();
					}
				}
			},
			mounted: function () {
				this.init();
			}
		};
	}, function (e, t) {
		e.exports = function (e, t, n, i, o) {
			var a;
			var s = e = e || {};
			var r = typeof e.default;
			if (r === "object" || r === "function") {
				a = e;
				s = e.default;
			}
			var l = typeof s == "function" ? s.options : s;
			if (t) {
				l.render = t.render;
				l.staticRenderFns = t.staticRenderFns;
			}
			if (i) {
				l._scopeId = i;
			}
			var c;
			if (o) {
				c = function (e) {
					if (!(e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) && typeof __VUE_SSR_CONTEXT__ != "undefined") {
						e = __VUE_SSR_CONTEXT__;
					}
					if (n) {
						n.call(this, e);
					}
					if (e && e._registeredComponents) {
						e._registeredComponents.add(o);
					}
				};
				l._ssrRegister = c;
			} else if (n) {
				c = n;
			}
			if (c) {
				var u = l.functional;
				var d = u ? l.render : l.beforeCreate;
				if (u) {
					l.render = function (e, t) {
						c.call(t);
						return d(e, t);
					};
				} else {
					l.beforeCreate = d ? [].concat(d, c) : [c];
				}
			}
			return {
				esModule: a,
				exports: s,
				options: l
			};
		};
	}, function (e, t) {
		e.exports = {
			render: function () {
				var e = this;
				var t = e.$createElement;
				var n = e._self._c || t;
				return n("div", {
					staticClass: "vdp-datepicker",
					class: [e.wrapperClass, e.isRtl ? "rtl" : ""]
				}, [n("div", {
					class: {
						"input-group": e.bootstrapStyling
					}
				}, [e.calendarButton ? n("span", {
					staticClass: "vdp-datepicker__calendar-button",
					class: {
						"input-group-addon": e.bootstrapStyling
					},
					style: {
						"cursor:not-allowed;": e.disabledPicker
					},
					on: {
						click: e.showCalendar
					}
				}, [n("i", {
					class: e.calendarButtonIcon
				}, [e._v("\n        " + e._s(e.calendarButtonIconContent) + "\n        "), e.calendarButtonIcon ? e._e() : n("span", [e._v("…")])])]) : e._e(), e._v(" "), n("input", {
					ref: e.refName,
					class: [e.inputClass, {
						"form-control": e.bootstrapStyling
					}],
					attrs: {
						type: e.inline ? "hidden" : "text",
						name: e.name,
						id: e.id,
						"open-date": e.openDate,
						placeholder: e.placeholder,
						"clear-button": e.clearButton,
						disabled: e.disabledPicker,
						required: e.required,
						readonly: ""
					},
					domProps: {
						value: e.formattedValue
					},
					on: {
						click: e.showCalendar
					}
				}), e._v(" "), e.clearButton && e.selectedDate ? n("span", {
					staticClass: "vdp-datepicker__clear-button",
					class: {
						"input-group-addon": e.bootstrapStyling
					},
					on: {
						click: function (t) {
							e.clearDate();
						}
					}
				}, [n("i", {
					class: e.clearButtonIcon
				}, [e.clearButtonIcon ? e._e() : n("span", [e._v("×")])])]) : e._e()]), e._v(" "), e.allowedToShowView("day") ? [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.showDayView,
						expression: "showDayView"
					}],
					class: [e.calendarClass, "vdp-datepicker__calendar"],
					style: e.calendarStyle
				}, [n("header", [n("span", {
					staticClass: "prev",
					class: {
						disabled: e.isRtl ? e.nextMonthDisabled(e.pageTimestamp) : e.previousMonthDisabled(e.pageTimestamp)
					},
					on: {
						click: function (t) {
							if (e.isRtl) {
								e.nextMonth();
							} else {
								e.previousMonth();
							}
						}
					}
				}, [e._v("<")]), e._v(" "), n("span", {
					class: e.allowedToShowView("month") ? "up" : "",
					on: {
						click: e.showMonthCalendar
					}
				}, [e._v(e._s(e.currMonthName) + " " + e._s(e.currYear) + "\n                ")]), e._v(" "), n("span", {
					staticClass: "next",
					class: {
						disabled: e.isRtl ? e.previousMonthDisabled(e.pageTimestamp) : e.nextMonthDisabled(e.pageTimestamp)
					},
					on: {
						click: function (t) {
							if (e.isRtl) {
								e.previousMonth();
							} else {
								e.nextMonth();
							}
						}
					}
				}, [e._v(">")])]), e._v(" "), n("div", {
					class: e.isRtl ? "flex-rtl" : ""
				}, [e._l(e.daysOfWeek, function (t) {
					return n("span", {
						key: t.timestamp,
						staticClass: "cell day-header"
					}, [e._v(e._s(t))]);
				}), e._v(" "), e.blankDays > 0 ? e._l(e.blankDays, function (e) {
					return n("span", {
						key: e.timestamp,
						staticClass: "cell day blank"
					});
				}) : e._e(), e._l(e.days, function (t) {
					return n("span", {
						key: t.timestamp,
						staticClass: "cell day",
						class: e.dayClasses(t),
						attrs: {
							"track-by": "timestamp"
						},
						on: {
							click: function (n) {
								e.selectDate(t);
							}
						}
					}, [e._v(e._s(t.date))]);
				})], 2)])] : e._e(), e._v(" "), e.allowedToShowView("month") ? [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.showMonthView,
						expression: "showMonthView"
					}],
					class: [e.calendarClass, "vdp-datepicker__calendar"],
					style: e.calendarStyle
				}, [n("header", [n("span", {
					staticClass: "prev",
					class: {
						disabled: e.previousYearDisabled(e.pageTimestamp)
					},
					on: {
						click: e.previousYear
					}
				}, [e._v("<")]), e._v(" "), n("span", {
					class: e.allowedToShowView("year") ? "up" : "",
					on: {
						click: e.showYearCalendar
					}
				}, [e._v(e._s(e.getPageYear()))]), e._v(" "), n("span", {
					staticClass: "next",
					class: {
						disabled: e.nextYearDisabled(e.pageTimestamp)
					},
					on: {
						click: e.nextYear
					}
				}, [e._v(">")])]), e._v(" "), e._l(e.months, function (t) {
					return n("span", {
						key: t.timestamp,
						staticClass: "cell month",
						class: {
							selected: t.isSelected,
							disabled: t.isDisabled
						},
						attrs: {
							"track-by": "timestamp"
						},
						on: {
							click: function (n) {
								n.stopPropagation();
								e.selectMonth(t);
							}
						}
					}, [e._v(e._s(t.month))]);
				})], 2)] : e._e(), e._v(" "), e.allowedToShowView("year") ? [n("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.showYearView,
						expression: "showYearView"
					}],
					class: [e.calendarClass, "vdp-datepicker__calendar"],
					style: e.calendarStyle
				}, [n("header", [n("span", {
					staticClass: "prev",
					class: {
						disabled: e.previousDecadeDisabled(e.pageTimestamp)
					},
					on: {
						click: e.previousDecade
					}
				}, [e._v("<")]), e._v(" "), n("span", [e._v(e._s(e.getPageDecade()))]), e._v(" "), n("span", {
					staticClass: "next",
					class: {
						disabled: e.nextMonthDisabled(e.pageTimestamp)
					},
					on: {
						click: e.nextDecade
					}
				}, [e._v(">")])]), e._v(" "), e._l(e.years, function (t) {
					return n("span", {
						key: t.timestamp,
						staticClass: "cell year",
						class: {
							selected: t.isSelected,
							disabled: t.isDisabled
						},
						attrs: {
							"track-by": "timestamp"
						},
						on: {
							click: function (n) {
								n.stopPropagation();
								e.selectYear(t);
							}
						}
					}, [e._v(e._s(t.year))]);
				})], 2)] : e._e()], 2);
			},
			staticRenderFns: []
		};
	}, function (e, t, n) {
		var i = n(74);
		if (typeof i == "string") {
			i = [[e.i, i, ""]];
		}
		if (i.locals) {
			e.exports = i.locals;
		}
		n(77)("cc2c5bfc", i, true);
	}, function (e, t, n) {
		"use strict";

		var i = n(44);
		var o = n.n(i);
		var a = n(26);
		t.a = {
			isValidDate: function (e) {
				return Object.prototype.toString.call(e) === "[object Date]" && !isNaN(e.getTime());
			},
			getDayNameAbbr: function (e, t) {
				if ((e === undefined ? "undefined" : o()(e)) !== "object") {
					throw TypeError("Invalid Type");
				}
				return t[e.getDay()];
			},
			getMonthName: function (e, t) {
				if (!t) {
					throw Error("missing 2nd parameter Months array");
				}
				if ((e === undefined ? "undefined" : o()(e)) === "object") {
					return t[e.getMonth()];
				}
				if (typeof e == "number") {
					return t[e];
				}
				throw TypeError("Invalid type");
			},
			getMonthNameAbbr: function (e, t) {
				if (!t) {
					throw Error("missing 2nd paramter Months array");
				}
				if ((e === undefined ? "undefined" : o()(e)) === "object") {
					return t[e.getMonth()];
				}
				if (typeof e == "number") {
					return t[e];
				}
				throw TypeError("Invalid type");
			},
			daysInMonth: function (e, t) {
				if (/8|3|5|10/.test(t)) {
					return 30;
				} else if (t === 1) {
					if ((e % 4 || !(e % 100)) && e % 400) {
						return 28;
					} else {
						return 29;
					}
				} else {
					return 31;
				}
			},
			getNthSuffix: function (e) {
				switch (e) {
					case 1:
					case 21:
					case 31:
						return "st";
					case 2:
					case 22:
						return "nd";
					case 3:
					case 23:
						return "rd";
					default:
						return "th";
				}
			},
			formatDate: function (e, t, n) {
				n = n || a.a.translations.en;
				var i = e.getFullYear();
				var o = e.getMonth() + 1;
				var s = e.getDate();
				return t.replace(/dd/, ("0" + s).slice(-2)).replace(/d/, s).replace(/yyyy/, i).replace(/yy/, String(i).slice(2)).replace(/MMMM/, this.getMonthName(e.getMonth(), n.months.original)).replace(/MMM/, this.getMonthNameAbbr(e.getMonth(), n.months.abbr)).replace(/MM/, ("0" + o).slice(-2)).replace(/M(?!a|ä)/, o).replace(/su/, this.getNthSuffix(e.getDate())).replace(/D(?!e|é|i)/, this.getDayNameAbbr(e, n.days));
			},
			createDateArray: function (e, t) {
				var n = [];
				for (; e <= t;) {
					n.push(new Date(e));
					e = new Date(e).setDate(new Date(e).getDate() + 1);
				}
				return n;
			}
		};
	}, function (e, t, n) {
		e.exports = {
			default: n(45),
			__esModule: true
		};
	}, function (e, t, n) {
		e.exports = {
			default: n(46),
			__esModule: true
		};
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
		t.__esModule = true;
		var o = i(n(43));
		var a = i(n(42));
		var s = typeof a.default == "function" && typeof o.default == "symbol" ? function (e) {
			return typeof e;
		} : function (e) {
			if (e && typeof a.default == "function" && e.constructor === a.default && e !== a.default.prototype) {
				return "symbol";
			} else {
				return typeof e;
			}
		};
		t.default = typeof a.default == "function" && s(o.default) === "symbol" ? function (e) {
			if (e === undefined) {
				return "undefined";
			} else {
				return s(e);
			}
		} : function (e) {
			if (e && typeof a.default == "function" && e.constructor === a.default && e !== a.default.prototype) {
				return "symbol";
			} else if (e === undefined) {
				return "undefined";
			} else {
				return s(e);
			}
		};
	}, function (e, t, n) {
		n(70);
		n(68);
		n(71);
		n(72);
		e.exports = n(13).Symbol;
	}, function (e, t, n) {
		n(69);
		n(73);
		e.exports = n(25).f("iterator");
	}, function (e, t) {
		e.exports = function (e) {
			if (typeof e != "function") {
				throw TypeError(e + " is not a function!");
			}
			return e;
		};
	}, function (e, t) {
		e.exports = function () {};
	}, function (e, t, n) {
		var i = n(2);
		var o = n(65);
		var a = n(64);
		e.exports = function (e) {
			return function (t, n, s) {
				var r;
				var l = i(t);
				var c = o(l.length);
				var u = a(s, c);
				if (e && n != n) {
					while (c > u) {
						if ((r = l[u++]) != r) {
							return true;
						}
					}
				} else {
					for (; c > u; u++) {
						if ((e || u in l) && l[u] === n) {
							return e || u || 0;
						}
					}
				}
				return !e && -1;
			};
		};
	}, function (e, t, n) {
		var i = n(47);
		e.exports = function (e, t, n) {
			i(e);
			if (t === undefined) {
				return e;
			}
			switch (n) {
				case 1:
					return function (n) {
						return e.call(t, n);
					};
				case 2:
					return function (n, i) {
						return e.call(t, n, i);
					};
				case 3:
					return function (n, i, o) {
						return e.call(t, n, i, o);
					};
			}
			return function () {
				return e.apply(t, arguments);
			};
		};
	}, function (e, t, n) {
		var i = n(10);
		var o = n(34);
		var a = n(18);
		e.exports = function (e) {
			var t = i(e);
			var n = o.f;
			if (n) {
				var s;
				for (var r = n(e), l = a.f, c = 0; r.length > c;) {
					if (l.call(e, s = r[c++])) {
						t.push(s);
					}
				}
			}
			return t;
		};
	}, function (e, t, n) {
		e.exports = n(0).document && document.documentElement;
	}, function (e, t, n) {
		var i = n(27);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
			if (i(e) == "String") {
				return e.split("");
			} else {
				return Object(e);
			}
		};
	}, function (e, t, n) {
		var i = n(27);
		e.exports = Array.isArray || function (e) {
			return i(e) == "Array";
		};
	}, function (e, t, n) {
		"use strict";

		var i = n(32);
		var o = n(11);
		var a = n(19);
		var s = {};
		n(4)(s, n(6)("iterator"), function () {
			return this;
		});
		e.exports = function (e, t, n) {
			e.prototype = i(s, {
				next: o(1, n)
			});
			a(e, t + " Iterator");
		};
	}, function (e, t) {
		e.exports = function (e, t) {
			return {
				value: t,
				done: !!e
			};
		};
	}, function (e, t, n) {
		var i = n(10);
		var o = n(2);
		e.exports = function (e, t) {
			var n;
			var a = o(e);
			var s = i(a);
			for (var r = s.length, l = 0; r > l;) {
				if (a[n = s[l++]] === t) {
					return n;
				}
			}
		};
	}, function (e, t, n) {
		var i = n(12)("meta");
		var o = n(9);
		var a = n(1);
		var s = n(5).f;
		var r = 0;
		var l = Object.isExtensible || function () {
			return true;
		};
		var c = !n(8)(function () {
			return l(Object.preventExtensions({}));
		});
		function u(e) {
			s(e, i, {
				value: {
					i: "O" + ++r,
					w: {}
				}
			});
		}
		var d = e.exports = {
			KEY: i,
			NEED: false,
			fastKey: function (e, t) {
				if (!o(e)) {
					if (typeof e == "symbol") {
						return e;
					} else {
						return (typeof e == "string" ? "S" : "P") + e;
					}
				}
				if (!a(e, i)) {
					if (!l(e)) {
						return "F";
					}
					if (!t) {
						return "E";
					}
					u(e);
				}
				return e[i].i;
			},
			getWeak: function (e, t) {
				if (!a(e, i)) {
					if (!l(e)) {
						return true;
					}
					if (!t) {
						return false;
					}
					u(e);
				}
				return e[i].w;
			},
			onFreeze: function (e) {
				if (c && d.NEED && l(e) && !a(e, i)) {
					u(e);
				}
				return e;
			}
		};
	}, function (e, t, n) {
		var i = n(5);
		var o = n(7);
		var a = n(10);
		e.exports = n(3) ? Object.defineProperties : function (e, t) {
			o(e);
			var n;
			var s = a(t);
			for (var r = s.length, l = 0; r > l;) {
				i.f(e, n = s[l++], t[n]);
			}
			return e;
		};
	}, function (e, t, n) {
		var i = n(18);
		var o = n(11);
		var a = n(2);
		var s = n(23);
		var r = n(1);
		var l = n(30);
		var c = Object.getOwnPropertyDescriptor;
		t.f = n(3) ? c : function (e, t) {
			e = a(e);
			t = s(t, true);
			if (l) {
				try {
					return c(e, t);
				} catch (e) {}
			}
			if (r(e, t)) {
				return o(!i.f.call(e, t), e[t]);
			}
		};
	}, function (e, t, n) {
		var i = n(2);
		var o = n(33).f;
		var a = {}.toString;
		var s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		function r(e) {
			try {
				return o(e);
			} catch (e) {
				return s.slice();
			}
		}
		e.exports.f = function (e) {
			if (s && a.call(e) == "[object Window]") {
				return r(e);
			} else {
				return o(i(e));
			}
		};
	}, function (e, t, n) {
		var i = n(1);
		var o = n(66);
		var a = n(20)("IE_PROTO");
		var s = Object.prototype;
		e.exports = Object.getPrototypeOf || function (e) {
			e = o(e);
			if (i(e, a)) {
				return e[a];
			} else if (typeof e.constructor == "function" && e instanceof e.constructor) {
				return e.constructor.prototype;
			} else if (e instanceof Object) {
				return s;
			} else {
				return null;
			}
		};
	}, function (e, t, n) {
		var i = n(22);
		var o = n(14);
		e.exports = function (e) {
			return function (t, n) {
				var a;
				var s;
				var r = String(o(t));
				var l = i(n);
				var c = r.length;
				if (l < 0 || l >= c) {
					if (e) {
						return "";
					} else {
						return undefined;
					}
				} else if ((a = r.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === c || (s = r.charCodeAt(l + 1)) < 56320 || s > 57343) {
					if (e) {
						return r.charAt(l);
					} else {
						return a;
					}
				} else if (e) {
					return r.slice(l, l + 2);
				} else {
					return s - 56320 + (a - 55296 << 10) + 65536;
				}
			};
		};
	}, function (e, t, n) {
		var i = n(22);
		var o = Math.max;
		var a = Math.min;
		e.exports = function (e, t) {
			if ((e = i(e)) < 0) {
				return o(e + t, 0);
			} else {
				return a(e, t);
			}
		};
	}, function (e, t, n) {
		var i = n(22);
		var o = Math.min;
		e.exports = function (e) {
			if (e > 0) {
				return o(i(e), 9007199254740991);
			} else {
				return 0;
			}
		};
	}, function (e, t, n) {
		var i = n(14);
		e.exports = function (e) {
			return Object(i(e));
		};
	}, function (e, t, n) {
		"use strict";

		var i = n(48);
		var o = n(56);
		var a = n(16);
		var s = n(2);
		e.exports = n(31)(Array, "Array", function (e, t) {
			this._t = s(e);
			this._i = 0;
			this._k = t;
		}, function () {
			var e = this._t;
			var t = this._k;
			var n = this._i++;
			if (!e || n >= e.length) {
				this._t = undefined;
				return o(1);
			} else if (t == "keys") {
				return o(0, n);
			} else if (t == "values") {
				return o(0, e[n]);
			} else {
				return o(0, [n, e[n]]);
			}
		}, "values");
		a.Arguments = a.Array;
		i("keys");
		i("values");
		i("entries");
	}, function (e, t) {}, function (e, t, n) {
		"use strict";

		var i = n(63)(true);
		n(31)(String, "String", function (e) {
			this._t = String(e);
			this._i = 0;
		}, function () {
			var e;
			var t = this._t;
			var n = this._i;
			if (n >= t.length) {
				return {
					value: undefined,
					done: true
				};
			} else {
				e = i(t, n);
				this._i += e.length;
				return {
					value: e,
					done: false
				};
			}
		});
	}, function (e, t, n) {
		"use strict";

		var i = n(0);
		var o = n(1);
		var a = n(3);
		var s = n(29);
		var r = n(36);
		var l = n(58).KEY;
		var c = n(8);
		var u = n(21);
		var d = n(19);
		var p = n(12);
		var f = n(6);
		var h = n(25);
		var m = n(24);
		var g = n(57);
		var v = n(51);
		var b = n(54);
		var y = n(7);
		var w = n(2);
		var _ = n(23);
		var k = n(11);
		var x = n(32);
		var C = n(61);
		var S = n(60);
		var A = n(5);
		var T = n(10);
		var P = S.f;
		var j = A.f;
		var E = C.f;
		var N = i.Symbol;
		var O = i.JSON;
		var D = O && O.stringify;
		var I = f("_hidden");
		var $ = f("toPrimitive");
		var M = {}.propertyIsEnumerable;
		var z = u("symbol-registry");
		var F = u("symbols");
		var L = u("op-symbols");
		var R = Object.prototype;
		var H = typeof N == "function";
		var B = i.QObject;
		var q = !B || !B.prototype || !B.prototype.findChild;
		var V = a && c(function () {
			return x(j({}, "a", {
				get: function () {
					return j(this, "a", {
						value: 7
					}).a;
				}
			})).a != 7;
		}) ? function (e, t, n) {
			var i = P(R, t);
			if (i) {
				delete R[t];
			}
			j(e, t, n);
			if (i && e !== R) {
				j(R, t, i);
			}
		} : j;
		function U(e) {
			var t = F[e] = x(N.prototype);
			t._k = e;
			return t;
		}
		var W = H && typeof N.iterator == "symbol" ? function (e) {
			return typeof e == "symbol";
		} : function (e) {
			return e instanceof N;
		};
		function G(e, t, n) {
			if (e === R) {
				G(L, t, n);
			}
			y(e);
			t = _(t, true);
			y(n);
			if (o(F, t)) {
				if (n.enumerable) {
					if (o(e, I) && e[I][t]) {
						e[I][t] = false;
					}
					n = x(n, {
						enumerable: k(0, false)
					});
				} else {
					if (!o(e, I)) {
						j(e, I, k(1, {}));
					}
					e[I][t] = true;
				}
				return V(e, t, n);
			} else {
				return j(e, t, n);
			}
		}
		function Y(e, t) {
			y(e);
			var n;
			var i = v(t = w(t));
			for (var o = 0, a = i.length; a > o;) {
				G(e, n = i[o++], t[n]);
			}
			return e;
		}
		function K(e) {
			var t = M.call(this, e = _(e, true));
			return (this !== R || !o(F, e) || !!o(L, e)) && (!t && !!o(this, e) && !!o(F, e) && (!o(this, I) || !this[I][e]) || t);
		}
		function J(e, t) {
			e = w(e);
			t = _(t, true);
			if (e !== R || !o(F, t) || o(L, t)) {
				var n = P(e, t);
				if (!!n && !!o(F, t) && (!o(e, I) || !e[I][t])) {
					n.enumerable = true;
				}
				return n;
			}
		}
		function X(e) {
			var t;
			for (var n = E(w(e)), i = [], a = 0; n.length > a;) {
				if (!o(F, t = n[a++]) && t != I && t != l) {
					i.push(t);
				}
			}
			return i;
		}
		function Z(e) {
			var t;
			var n = e === R;
			for (var i = E(n ? L : w(e)), a = [], s = 0; i.length > s;) {
				if (!!o(F, t = i[s++]) && (!n || !!o(R, t))) {
					a.push(F[t]);
				}
			}
			return a;
		}
		if (!H) {
			N = function () {
				if (this instanceof N) {
					throw TypeError("Symbol is not a constructor!");
				}
				var e = p(arguments.length > 0 ? arguments[0] : undefined);
				function t(n) {
					if (this === R) {
						t.call(L, n);
					}
					if (o(this, I) && o(this[I], e)) {
						this[I][e] = false;
					}
					V(this, e, k(1, n));
				}
				if (a && q) {
					V(R, e, {
						configurable: true,
						set: t
					});
				}
				return U(e);
			};
			r(N.prototype, "toString", function () {
				return this._k;
			});
			S.f = J;
			A.f = G;
			n(33).f = C.f = X;
			n(18).f = K;
			n(34).f = Z;
			if (a && !n(17)) {
				r(R, "propertyIsEnumerable", K, true);
			}
			h.f = function (e) {
				return U(f(e));
			};
		}
		s(s.G + s.W + s.F * !H, {
			Symbol: N
		});
		for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Q.length > ee;) {
			f(Q[ee++]);
		}
		for (var Q = T(f.store), ee = 0; Q.length > ee;) {
			m(Q[ee++]);
		}
		s(s.S + s.F * !H, "Symbol", {
			for: function (e) {
				if (o(z, e += "")) {
					return z[e];
				} else {
					return z[e] = N(e);
				}
			},
			keyFor: function (e) {
				if (W(e)) {
					return g(z, e);
				}
				throw TypeError(e + " is not a symbol!");
			},
			useSetter: function () {
				q = true;
			},
			useSimple: function () {
				q = false;
			}
		});
		s(s.S + s.F * !H, "Object", {
			create: function (e, t) {
				if (t === undefined) {
					return x(e);
				} else {
					return Y(x(e), t);
				}
			},
			defineProperty: G,
			defineProperties: Y,
			getOwnPropertyDescriptor: J,
			getOwnPropertyNames: X,
			getOwnPropertySymbols: Z
		});
		if (O) {
			s(s.S + s.F * (!H || c(function () {
				var e = N();
				return D([e]) != "[null]" || D({
					a: e
				}) != "{}" || D(Object(e)) != "{}";
			})), "JSON", {
				stringify: function (e) {
					if (e !== undefined && !W(e)) {
						var t;
						var n;
						var i = [e];
						for (var o = 1; arguments.length > o;) {
							i.push(arguments[o++]);
						}
						if (typeof (t = i[1]) == "function") {
							n = t;
						}
						if (!!n || !b(t)) {
							t = function (e, t) {
								if (n) {
									t = n.call(this, e, t);
								}
								if (!W(t)) {
									return t;
								}
							};
						}
						i[1] = t;
						return D.apply(O, i);
					}
				}
			});
		}
		if (!N.prototype[$]) {
			n(4)(N.prototype, $, N.prototype.valueOf);
		}
		d(N, "Symbol");
		d(Math, "Math", true);
		d(i.JSON, "JSON", true);
	}, function (e, t, n) {
		n(24)("asyncIterator");
	}, function (e, t, n) {
		n(24)("observable");
	}, function (e, t, n) {
		n(67);
		var i = n(0);
		var o = n(4);
		var a = n(16);
		var s = n(6)("toStringTag");
		var r = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"];
		for (var l = 0; l < 5; l++) {
			var c = r[l];
			var u = i[c];
			var d = u && u.prototype;
			if (d && !d[s]) {
				o(d, s, c);
			}
			a[c] = a.Array;
		}
	}, function (e, t, n) {
		(e.exports = n(75)(true)).push([e.i, ".rtl{direction:rtl}.vdp-datepicker{position:relative;text-align:left}.vdp-datepicker *{box-sizing:border-box}.vdp-datepicker__calendar{position:absolute;z-index:100;background:#fff;width:300px;border:1px solid #ccc}.vdp-datepicker__calendar header{display:block;line-height:40px}.vdp-datepicker__calendar header span{display:inline-block;text-align:center;width:71.42857142857143%;float:left}.vdp-datepicker__calendar header .next,.vdp-datepicker__calendar header .prev{width:14.285714285714286%;float:left;text-indent:-10000px;position:relative}.vdp-datepicker__calendar header .next:after,.vdp-datepicker__calendar header .prev:after{content:\"\";position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);border:6px solid transparent}.vdp-datepicker__calendar header .prev:after{border-right:10px solid #000;margin-left:-5px}.vdp-datepicker__calendar header .prev.disabled:after{border-right:10px solid #ddd}.vdp-datepicker__calendar header .next:after{border-left:10px solid #000;margin-left:5px}.vdp-datepicker__calendar header .next.disabled:after{border-left:10px solid #ddd}.vdp-datepicker__calendar header .next:not(.disabled),.vdp-datepicker__calendar header .prev:not(.disabled),.vdp-datepicker__calendar header .up:not(.disabled){cursor:pointer}.vdp-datepicker__calendar header .next:not(.disabled):hover,.vdp-datepicker__calendar header .prev:not(.disabled):hover,.vdp-datepicker__calendar header .up:not(.disabled):hover{background:#eee}.vdp-datepicker__calendar .disabled{color:#ddd;cursor:default}.vdp-datepicker__calendar .flex-rtl{display:-webkit-box;display:-ms-flexbox;display:flex;width:inherit;-ms-flex-wrap:wrap;flex-wrap:wrap}.vdp-datepicker__calendar .cell{display:inline-block;padding:0 5px;width:14.285714285714286%;height:40px;line-height:40px;text-align:center;vertical-align:middle;border:1px solid transparent}.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year{cursor:pointer}.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover{border:1px solid #4bd}.vdp-datepicker__calendar .cell.selected,.vdp-datepicker__calendar .cell.selected.highlighted,.vdp-datepicker__calendar .cell.selected:hover{background:#4bd}.vdp-datepicker__calendar .cell.highlighted{background:#cae5ed}.vdp-datepicker__calendar .cell.grey{color:#888}.vdp-datepicker__calendar .cell.grey:hover{background:inherit}.vdp-datepicker__calendar .cell.day-header{font-size:75%;white-space:no-wrap;cursor:inherit}.vdp-datepicker__calendar .cell.day-header:hover{background:inherit}.vdp-datepicker__calendar .month,.vdp-datepicker__calendar .year{width:33.333%}.vdp-datepicker__calendar-button,.vdp-datepicker__clear-button{cursor:pointer;font-style:normal}.vdp-datepicker__calendar-button.disabled,.vdp-datepicker__clear-button.disabled{color:#999;cursor:default}", "", {
			version: 3,
			sources: ["/Users/charlie.kassel/Server/sites/vuejs-datepicker/src/components/Datepicker.vue"],
			names: [],
			mappings: "AACA,KACE,aAAe,CAChB,AACD,gBACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,kBACE,qBAAuB,CACxB,AACD,0BACE,kBAAmB,AACnB,YAAa,AACb,gBAAiB,AACjB,YAAa,AACb,qBAAuB,CACxB,AACD,iCACE,cAAe,AACf,gBAAkB,CACnB,AACD,sCACE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,UAAY,CACb,AACD,8EAEE,0BAA2B,AAC3B,WAAY,AACZ,qBAAsB,AACtB,iBAAmB,CACpB,AACD,0FAEE,WAAY,AACZ,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,oDAAqD,AAC7C,4CAA6C,AACrD,4BAA8B,CAC/B,AACD,6CACE,6BAA8B,AAC9B,gBAAkB,CACnB,AACD,sDACE,4BAA8B,CAC/B,AACD,6CACE,4BAA6B,AAC7B,eAAiB,CAClB,AACD,sDACE,2BAA6B,CAC9B,AACD,gKAGE,cAAgB,CACjB,AACD,kLAGE,eAAiB,CAClB,AACD,oCACE,WAAY,AACZ,cAAgB,CACjB,AACD,oCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,mBAAoB,AAChB,cAAgB,CACrB,AACD,gCACE,qBAAsB,AACtB,cAAe,AACf,0BAA2B,AAC3B,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,sBAAuB,AACvB,4BAA8B,CAC/B,AACD,gMAGE,cAAgB,CACjB,AACD,kNAGE,qBAAuB,CACxB,AAOD,6IACE,eAAiB,CAClB,AACD,4CACE,kBAAoB,CACrB,AACD,qCACE,UAAY,CACb,AACD,2CACE,kBAAoB,CACrB,AACD,2CACE,cAAe,AACf,oBAAqB,AACrB,cAAgB,CACjB,AACD,iDACE,kBAAoB,CACrB,AACD,iEAEE,aAAe,CAChB,AACD,+DAEE,eAAgB,AAChB,iBAAmB,CACpB,AACD,iFAEE,WAAY,AACZ,cAAgB,CACjB",
			file: "Datepicker.vue",
			sourcesContent: ["\n.rtl {\n  direction: rtl;\n}\n.vdp-datepicker {\n  position: relative;\n  text-align: left;\n}\n.vdp-datepicker * {\n  box-sizing: border-box;\n}\n.vdp-datepicker__calendar {\n  position: absolute;\n  z-index: 100;\n  background: #fff;\n  width: 300px;\n  border: 1px solid #ccc;\n}\n.vdp-datepicker__calendar header {\n  display: block;\n  line-height: 40px;\n}\n.vdp-datepicker__calendar header span {\n  display: inline-block;\n  text-align: center;\n  width: 71.42857142857143%;\n  float: left;\n}\n.vdp-datepicker__calendar header .prev,\n.vdp-datepicker__calendar header .next {\n  width: 14.285714285714286%;\n  float: left;\n  text-indent: -10000px;\n  position: relative;\n}\n.vdp-datepicker__calendar header .prev:after,\n.vdp-datepicker__calendar header .next:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  border: 6px solid transparent;\n}\n.vdp-datepicker__calendar header .prev:after {\n  border-right: 10px solid #000;\n  margin-left: -5px;\n}\n.vdp-datepicker__calendar header .prev.disabled:after {\n  border-right: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .next:after {\n  border-left: 10px solid #000;\n  margin-left: 5px;\n}\n.vdp-datepicker__calendar header .next.disabled:after {\n  border-left: 10px solid #ddd;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled),\n.vdp-datepicker__calendar header .next:not(.disabled),\n.vdp-datepicker__calendar header .up:not(.disabled) {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar header .prev:not(.disabled):hover,\n.vdp-datepicker__calendar header .next:not(.disabled):hover,\n.vdp-datepicker__calendar header .up:not(.disabled):hover {\n  background: #eee;\n}\n.vdp-datepicker__calendar .disabled {\n  color: #ddd;\n  cursor: default;\n}\n.vdp-datepicker__calendar .flex-rtl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: inherit;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.vdp-datepicker__calendar .cell {\n  display: inline-block;\n  padding: 0 5px;\n  width: 14.285714285714286%;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid transparent;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {\n  cursor: pointer;\n}\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,\n.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {\n  border: 1px solid #4bd;\n}\n.vdp-datepicker__calendar .cell.selected {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected:hover {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.selected.highlighted {\n  background: #4bd;\n}\n.vdp-datepicker__calendar .cell.highlighted {\n  background: #cae5ed;\n}\n.vdp-datepicker__calendar .cell.grey {\n  color: #888;\n}\n.vdp-datepicker__calendar .cell.grey:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header {\n  font-size: 75%;\n  white-space: no-wrap;\n  cursor: inherit;\n}\n.vdp-datepicker__calendar .cell.day-header:hover {\n  background: inherit;\n}\n.vdp-datepicker__calendar .month,\n.vdp-datepicker__calendar .year {\n  width: 33.333%;\n}\n.vdp-datepicker__clear-button,\n.vdp-datepicker__calendar-button {\n  cursor: pointer;\n  font-style: normal;\n}\n.vdp-datepicker__clear-button.disabled,\n.vdp-datepicker__calendar-button.disabled {\n  color: #999;\n  cursor: default;\n}"],
			sourceRoot: ""
		}]);
	}, function (e, t) {
		function n(e, t) {
			var n = e[1] || "";
			var o = e[3];
			if (!o) {
				return n;
			}
			if (t && typeof btoa == "function") {
				var a = i(o);
				return [n].concat(o.sources.map(function (e) {
					return "/*# sourceURL=" + o.sourceRoot + e + " */";
				})).concat([a]).join("\n");
			}
			return [n].join("\n");
		}
		function i(e) {
			return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */";
		}
		e.exports = function (e) {
			var t = [];
			t.toString = function () {
				return this.map(function (t) {
					var i = n(t, e);
					if (t[2]) {
						return "@media " + t[2] + "{" + i + "}";
					} else {
						return i;
					}
				}).join("");
			};
			t.i = function (e, n) {
				if (typeof e == "string") {
					e = [[null, e, ""]];
				}
				var i = {};
				for (var o = 0; o < this.length; o++) {
					var a = this[o][0];
					if (typeof a == "number") {
						i[a] = true;
					}
				}
				for (o = 0; o < e.length; o++) {
					var s = e[o];
					if (typeof s[0] != "number" || !i[s[0]]) {
						if (n && !s[2]) {
							s[2] = n;
						} else if (n) {
							s[2] = "(" + s[2] + ") and (" + n + ")";
						}
						t.push(s);
					}
				}
			};
			return t;
		};
	}, function (e, t, n) {
		var i = n(38)(n(37), n(39), function (e) {
			n(40);
		}, null, null);
		e.exports = i.exports;
	}, function (e, t, n) {
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
		var c = n(78);
		var u = {};
		var d = l && (document.head || document.getElementsByTagName("head")[0]);
		var p = null;
		var f = 0;
		var h = false;
		function m() {}
		var g = typeof navigator != "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		e.exports = function (e, t, n) {
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
	}, function (e, t) {
		e.exports = function (e, t) {
			var n = [];
			var i = {};
			for (var o = 0; o < t.length; o++) {
				var a = t[o];
				var s = a[0];
				var r = {
					id: e + ":" + o,
					css: a[1],
					media: a[2],
					sourceMap: a[3]
				};
				if (i[s]) {
					i[s].parts.push(r);
				} else {
					n.push(i[s] = {
						id: s,
						parts: [r]
					});
				}
			}
			return n;
		};
	}]);
}, function (e, t) {
	var n;
	n = function () {
		return this;
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this");
	} catch (e) {
		if (typeof window == "object") {
			n = window;
		}
	}
	e.exports = n;
}]);

// =========================================================================================


if (window.CONNECTION_URL == undefined) {
	if (location.protocol != "https:") {
		window.CONNECTION_URL = "195.201.88.91";
		sessionStorage.setItem("server", "195.201.88.91");
	} else {
		window.CONNECTION_URL = "agar2.emupedia.net/ws3/";
		sessionStorage.setItem("server", "agar2.emupedia.net/ws3/");
	}
	sessionStorage.setItem("serverName", "EXPERIMENTAL#5");
}

if (window.keyToSplit === undefined) {
	window.keyToSplit = 32;
}

if (window.keyToEject === undefined) {
	window.keyToEject = 87;
}

var warnings = 0;

(function (e, n) {
	function i(e) {
		for (i = 0; i < e.changedTouches.length; i++) {
			var t = e.changedTouches[i];

			if (ce < 0 && t.clientX < ve / 1.5) {
				ce = t.identifier;
				de.reset(t.clientX, t.clientY);
				ue.copyFrom(de);
				pe.reset(0, 0);
			}

			if (ve > be) {
				n = ~~(ve / 10);
			} else {
				var n = ~~(ve / 7);
			}

			if (t.clientX > ve - n - 30 && t.clientY > be - n) {
				T();
				N(17);
			}
			if (t.clientX > ve - n && t.clientY > be - n * 2 - 10 && t.clientY < be - n - 10) {
				T();
				N(21);
			}
			if (t.clientX > ve - n && t.clientY > be - n * 3 - 10 && t.clientY < be - n * 2 - 10) {
				for (var i = 0; i < 6; ++i) {
					setTimeout(function () {
						N(21);
					}, i * 80);
				}
			}
		}
		le = e.touches;
	}
	function o(e) {
		e.preventDefault();
		for (var t = 0; t < e.changedTouches.length; t++) {
			var n = e.changedTouches[t];
			if (ce == n.identifier) {
				ue.reset(n.clientX, n.clientY);
				pe.copyFrom(ue);
				pe.minusEq(de);
				Ne = pe.x * 3 + ve / 2;
				Oe = pe.y * 3 + be / 2;
				l();
				T();
			}
		}
		le = e.touches;
	}
	function a(e) {
		le = e.touches;
		for (var t = 0; t < e.changedTouches.length; t++) {
			var n = e.changedTouches[t];
			if (ce == n.identifier) {
				ce = -1;
				pe.reset(0, 0);
				break;
			}
		}
	}
	function s(e) {
		jt *= Math.pow(0.9, e.wheelDelta / -120 || e.detail || 0);
		if (!Qe && jt < 1) {
			jt = 1;
		}
		if (jt > 4 / Be) {
			jt = 4 / Be;
		}
	}
	function r() {
		if (Be < 0.4) {
			ye = null;
		} else {
			var e = Number.POSITIVE_INFINITY;
			var t = Number.POSITIVE_INFINITY;
			var n = Number.NEGATIVE_INFINITY;
			var i = Number.NEGATIVE_INFINITY;
			var o = 0;
			for (var a = 0; a < Ae.length; a++) {
				var s = Ae[a];
				if (s.shouldRender() && !s.prepareData && s.size * Be > 20) {
					o = Math.max(s.size, o);
					e = Math.min(s.x, e);
					t = Math.min(s.y, t);
					n = Math.max(s.x, n);
					i = Math.max(s.y, i);
				}
			}
			ye = Gt.init({
				minX: e - (o + 100),
				minY: t - (o + 100),
				maxX: n + (o + 100),
				maxY: i + (o + 100),
				maxChildren: 2,
				maxDepth: 4
			});
			a = 0;
			for (; a < Ae.length; a++) {
				if ((s = Ae[a]).shouldRender() && !(s.size * Be <= 20)) {
					for (e = 0; e < s.points.length; ++e) {
						t = s.points[e].x;
						n = s.points[e].y;
						if (!(t < _e - ve / 2 / Be) && !(n < ke - be / 2 / Be) && !(t > _e + ve / 2 / Be) && !(n > ke + be / 2 / Be)) {
							ye.insert(s.points[e]);
						}
					}
				}
			}
		}
	}
	function l() {
		De = (Ne - ve / 2) / Be + _e;
		Ie = (Oe - be / 2) / Be + ke;
	}
	function c() {
		wt = false;
		n("#overlays").fadeOut(500);
		m();
	}
	function u(t) {
		if (t && t != qe) {
			if (window.minionIndicator != undefined) {
				window.minionIndicator.status = false;
			}
			qe = e.localStorage.location = t;
			if (yt) {
				v();
			}
		}
	}
	function d(e) {
		var t = ((e = ~~e) % 60).toString();
		e = (~~(e / 60)).toString();
		if (t.length < 2) {
			t = "0" + t;
		}
		return e + ":" + t;
	}
	function p(e, t) {
		var n = xe.indexOf(e.id) != -1;
		var i = xe.indexOf(t.id) != -1;
		if (n && t.name == "") {
			++Yt;
		}
		if (!!n && !i && t.name != "") {
			++Zt;
		}
	}
	function f() {
		if (Pe == null) {
			return 0;
		}
		for (var e = 0; e < Pe.length; ++e) {
			if (xe.indexOf(Pe[e].id) != -1) {
				return e + 1;
			}
		}
		return 0;
	}
	function h(e, t) {
		wt = true;
		ze = null;
		n("#overlays").fadeIn(e ? 200 : 500);
		if (e == 0) {
			if (tt / 100 > 10000) {
				try {
					i = encodeURI(B(sessionStorage.playerName)[1]);
				} catch (e) {
					var i = "Error in nickname";
				}
				if (i.substring(0, 4) == "a#.7") {
					i = i.substring(4, i.length);
				}
				if (i.substring(0, 4) == "p5@.") {
					i = i.substring(4, i.length);
				}
				if (i.substring(0, 4) == "r5@u") {
					i = i.substring(4, i.length);
				}
				if (i.substring(0, 4) == "y2=t") {
					i = i.substring(4, i.length);
				}
				if (i.substring(0, 4) == "c5^#") {
					i = i.substring(4, i.length);
				}
				var o = ~~(tt / 100);
				var a = sessionStorage.serverName;
				$.get(window.base_url2 + "Agar/sendScore.json", {
					abscr: "abss",
					name: i,
					score: o,
					server: a
				}, function (e) {});
			}
			if (localStorage.token_log && localStorage.token_header) {
				var o = ~~(tt / 100);
				var a = sessionStorage.serverName;
				var s = (Jt - Kt) / 1000;
				if (s > 0 && o > 0) {
					$.get(window.base_url2 + "Agar/sendPrivateScore.json", {
						abscr: "abps",
						score: o,
						server: a,
						timeplayed: s,
						token_log: localStorage.token_log,
						token_header: localStorage.token_header
					}, function (e) {});
				}
			}
			var r = Qt == 0 ? ":(" : Qt;
			var l = "<div class=\"ui fluid vertical steps\"><div class=\"step\"><i class=\"chart line icon\"></i><div class=\"content\"><div class=\"description\">Rezultat poslednje igre</div></div><br></div>";
			l += "<div class=\"step\"><i class=\"hourglass outline icon\"></i><div class=\"content\"><div class=\"title\">" + d((Jt - Kt) / 1000) + "</div><div class=\"description\">Vreme igre</div></div></div>";
			l += "<div class=\"step\"><i class=\"star outline icon\"></i><div class=\"content\"><div class=\"title\">" + ~~(tt / 100) + "</div><div class=\"description\">Najbolji rezultat</div></div></div>";
			l += "<div class=\"step\"><i class=\"crosshairs icon\"></i><div class=\"content\"><div class=\"title\">" + Yt + "</div><div class=\"description\">Bobica pojedeno</div></div></div>";
			l += "<div class=\"step\"><i class=\"circle icon\"></i><div class=\"content\"><div class=\"title\">" + Zt + "</div><div class=\"description\">Kugli pojedeno</div></div></div>";
			l += "<div class=\"step\"><i class=\"clock outline icon\"></i><div class=\"content\"><div class=\"title\">" + d(Xt) + "</div><div class=\"description\">Vreme na tabeli</div></div></div>";
			l += "<div class=\"step\"><i class=\"trophy icon\"></i><div class=\"content\"><div class=\"title\">" + r + "</div><div class=\"description\">Najbolja pozicija</div></div></div></div>";
			$("#facebook-page").html(l);
			Ht = [];
			Yt = 0;
			Kt = Date.now();
			Zt = 0;
			Xt = 0;
			Qt = 0;
		}
	}
	function m() {
		if (e.sessionStorage.server) {
			e.localStorage.location = e.sessionStorage.server;
		} else {
			e.localStorage.location = window.CONNECTION_URL;
			e.sessionStogage.server = CONNECTION_URL;
		}
	}
	function g() {
		b(e.location.protocol == "https:" ? "wss://" + CONNECTION_URL : "ws://" + CONNECTION_URL);
	}
	function v() {
		if (yt && qe) {
			n("#connecting").show();
			n(".connecting-to-server").show();
			n("#play-game-icon").hide();
			g();
		}
	}
	function b(e) {
		if (we) {
			we.onopen = null;
			we.onmessage = null;
			we.onclose = null;
			we.onerror = null;
			try {
				we.close();
			} catch (e) {}
			we = null;
		}
		var t = CONNECTION_URL;
		e = location.protocol == "https:" ? "wss://" + t : "ws://" + t;
		xe = [];
		Ce = [];
		Se = {};
		Ae = [];
		Te = [];
		Pe = [];
		je = "";
		me = bt = null;
		tt = 0;
		this.countdown = 3600;
		$(".connectingToServer").show();
		$(".chat-body").html("");
		var n = "protocol1";
		n = window.location.search.substring(1).includes("key") && window.location.search.split("=")[1] != undefined ? window.location.search.split("=")[1] : "protocol1";
		(we = new WebSocket(e, n)).binaryType = "arraybuffer";
		we.onopen = _;
		we.onmessage = x;
		we.onclose = k;
		we.onerror = function () {
			console.log("Connection error");
		};
	}
	function y(e) {
		return new DataView(new ArrayBuffer(e));
	}
	function w(e) {
		we.send(e.buffer);
	}
	function _() {
		var e;
		Ft = 2500;
		n("#connecting").hide();
		n(".connectingToServer").hide();
		(e = y(5)).setUint8(0, 254);
		e.setUint32(1, 1, true);
		w(e);
		(e = y(5)).setUint8(0, 255);
		e.setUint32(1, 1332175218, true);
		w(e);
		P();
		n(".connecting-to-server").hide();
		n("#play-game-icon").show();
	}
	function k() {
		setTimeout(v, Ft);
		Ft *= 1.5;
	}
	function x(e) {
		C(new DataView(e.data));
	}
	function C(e) {
		var t = 0;
		var n = false;
		if (e.getUint8(t) == 240) {
			t += 5;
		}
		switch (e.getUint8(t++)) {
			case 16:
				A(e, t);
				break;
			case 17:
				ht = e.getFloat32(t, true);
				t += 4;
				mt = e.getFloat32(t, true);
				t += 4;
				gt = e.getFloat32(t, true);
				t += 4;
				break;
			case 20:
				Ce = [];
				xe = [];
				break;
			case 21:
				kt = e.getInt16(t, true);
				t += 2;
				xt = e.getInt16(t, true);
				t += 2;
				if (!_t) {
					_t = true;
					Ct = kt;
					St = xt;
				}
				break;
			case 32:
				xe.push(e.getUint32(t, true));
				t += 4;
				break;
			case 48:
				n = true;
				zt = true;
				break;
			case 49:
				if (!n) {
					zt = false;
				}
				bt = null;
				var i = e.getUint32(t, true);
				t += 4;
				Pe = [];
				s = 0;
				for (; s < i; ++s) {
					var o = e.getUint32(t, true);
					t += 4;
					Pe.push({
						id: o,
						name: function () {
							for (var n, i = ""; (n = e.getUint16(t, true)) != 0;) {
								t += 2;
								i += String.fromCharCode(n);
							}
							t += 2;
							return i;
						}()
					});
				}
				q();
				break;
			case 50:
				bt = [];
				var a = e.getUint32(t, true);
				t += 4;
				for (var s = 0; s < a; ++s) {
					bt.push(e.getFloat32(t, true));
					t += 4;
				}
				q();
				break;
			case 64:
				Fe = e.getFloat64(t, true);
				t += 8;
				Le = e.getFloat64(t, true);
				t += 8;
				Re = e.getFloat64(t, true);
				t += 8;
				He = e.getFloat64(t, true);
				t += 8;
				ht = (Re + Fe) / 2;
				mt = (He + Le) / 2;
				gt = 1;
				Dt = Fe;
				It = Le;
				$t = Re;
				Mt = He;
				if (Ce.length == 0) {
					_e = ht;
					ke = mt;
					Be = gt;
				}
				break;
			case 90:
				break;
			case 96:
				this.countdown = e.getUint16(t, true);
				console.log(this.countdown);
				break;
			case 97:
				je = "";
				for (var r; (r = e.getUint16(t, true)) != 0;) {
					t += 2;
					je += String.fromCharCode(r);
				}
				break;
			case 98:
				e.getUint32(t, true);
				t += 4;
				e.getUint32(t, true);
				break;
			case 99:
				S(e, t);
		}
	}
	function S(e, t) {
		function n() {
			for (var n, i = ""; (n = e.getUint16(t, true)) != 0;) {
				t += 2;
				i += String.fromCharCode(n);
			}
			t += 2;
			return i;
		}
		var i = e.getUint8(t++);
		if (i & 2) {
			t += 4;
		}
		if (i & 4) {
			t += 8;
		}
		if (i & 8) {
			t += 16;
		}
		for (var o = (e.getUint8(t++) << 16 | e.getUint8(t++) << 8 | e.getUint8(t++)).toString(16); o.length < 6;) {
			o = "0" + o;
		}
		var a = n().trim();
		var s = n().trim();
		o = "#" + o;
		var r = B(a)[1];
		if (pt.indexOf(r) == -1) {
			Ee.push({
				name: r,
				color: o,
				message: s,
				time: Date.now()
			});
			l = "";
			if (a.substring(0, 4) == "a#.7") {
				l = "<span class='chat-rkl'><i class='em em-ab'></i></span>";
				a = a.substring(4, a.length);
			}
			if (a.substring(0, 4) == "c5^#") {
				l = "<span class='chat-rkl'><i class='em em-white_check_mark'></i></span>";
				a = a.substring(4, a.length);
			}
			if (a.substring(0, 4) == "p5@.") {
				l = "<span class='chat-rkl'><i class='em em-yin_yang'></i></span>";
				a = a.substring(4, a.length);
			}
			if (a.substring(0, 4) == "r5@u") {
				l = "<span class='chat-rkl'><i class='em em-shield'></i></span>";
				a = a.substring(4, a.length);
			}
			if (a.substring(0, 4) == "y2=t") {
				var l = "<span class='chat-rkl'><i class='em em-movie_camera'></i></span>";
				a = a.substring(4, a.length);
			}
			if ($(".chat-body>p").length >= 999) {
				$(".chat-body>p").first().remove();
			}
			o = o.replace("#9b9b9b", "#c3c3c3");
			var c = B(a)[1];
			var u = "<strong style='color:" + o + "' class='chatname-options'>" + (c = c.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim()) + l + "</strong>  : ";
			var d = "";
			if ((s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = (s = s.replace(/a\#\.7/g, "<i class='em em-ab'></i>")).replace(/c5\^\#/g, "<i class='em em-white_check_mark'></i>")).replace(/p5@\./g, "<i class='em em-yin_yang'></i>")).replace(/r5@u/g, "<i class='em em-shield'></i>")).replace(/y2=t/g, "<i class='em em-movie_camera'></i>")).replace(/x-p/g, "<i class='em em-stuck_out_tongue_closed_eyes'></i>")).replace(/:poop:/g, "<i class='em em-poop'></i>")).replace(/:D/gi, "<i class='em em-smiley'></i>")).replace(/=D/gi, "<i class='em em-smile'></i>")).replace(/:\)/gi, "<i class='em em-blush'></i>")).replace(/>:\(/gi, "<i class='em em-angry'></i>")).replace(/:'\(/gi, "<i class='em em-cry'></i>")).replace(/:\(/gi, "<i class='em em-disappointed'></i>")).replace(/\-\.\-/gi, "<i class='em em-expressionless'></i>")).replace(/o\.o/gi, "<i class='em em-flushed'></i>")).replace(/\*\.\*/gi, "<i class='em em-heart_eyes'></i>")).replace(/\*\-\*/gi, "<i class='em em-heart_eyes'></i>")).replace(/<3/gi, "<i class='em em-heart'></i>")).replace(/❥/g, "<i class='em em-blue_heart'></i>")).replace(/:'D/gi, "<i class='em em-joy'></i>")).replace(/:\*/g, "<i class='em em-kissing_closed_eyes'></i>")).replace(/;\*/gi, "<i class='em em-kissing_heart'></i>")).replace(/:\|\]/g, "<i class='em em-robot_face'></i>")).replace(/:\|/gi, "<i class='em em-neutral_face'></i>")).replace(/:O/gi, "<i class='em em-open_mouth'></i>")).replace(/:\-\$/gi, "<i class='em em-no_mouth'></i>")).replace(/:'>/g, "<i class='em em-relaxed'></i>")).replace(/\(y\)/g, "<i class='em em-thumbsup'></i>")).replace(/\(n\)/g, "<i class='em em-thumbsdown'></i>")).replace(/8\)/g, "<i class='em em-sunglasses'></i>")).replace(/:>/g, "<i class='em em-smirk'></i>")).replace(/;\)/g, "<i class='em em-wink'></i>")).replace(/:\-</g, "<i class='em em-triumph'></i>")).replace(/;p/gi, "<i class='em em-stuck_out_tongue_winking_eye'></i>")).replace(/:p/gi, "<i class='em em-stuck_out_tongue'></i>")).replace(/:\//g, "<i class='em em-confused'></i>")).replace(/:\-S/g, "<i class='em em-worried'></i>")).replace(/x\.x/gi, "<i class='em em-dizzy_face'></i>")).replace(/❤/g, "<i class='em em-purple_heart'></i>")).replace(/<\/3/g, "<i class='em em-broken_heart'></i>")).replace(/\(\^\^\^\)/g, "<i class='em em-shark'></i>")).replace(/<\("\)/g, "<i class='em em-penguin'></i>")).replace(/:em /g, "<i class='em em-")).replace(/ em:/g, "'></i>")).startsWith("\\") && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + s.substring(1, 7))) {
				d = "style='color:#" + s.substring(1, 7) + "!important;'";
				s = s.substring(7, s.length);
			}
			if (s.startsWith("My Location: ")) {
				s = s.replace("My Location: ", "");
			}
			s = (s = s.replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(/&lt;i class='em/g, "<i class='em").replace(/&gt;&lt;\/i&gt;/g, "></i>");
			$(".chat-body").append("<p>" + u + "<span " + d + " class='chat-msg'>" + s + "</span></p>");
			$(".chat-body").animate({
				scrollTop: $(".chat-body").prop("scrollHeight")
			}, 500);
		}
	}
	function A(e, n) {
		Me = +new Date();
		var i = Math.random();
		et = false;
		var o = e.getUint16(n, true);
		n += 2;
		r = 0;
		for (; r < o; ++r) {
			var a = Se[e.getUint32(n, true)];
			var s = Se[e.getUint32(n + 4, true)];
			n += 8;
			if (a && s) {
				s.destroy();
				s.ox = s.x;
				s.oy = s.y;
				s.oSize = s.size;
				s.nx = a.x;
				s.ny = a.y;
				s.nSize = s.size;
				s.updateTime = Me;
				p(a, s);
			}
		}
		var r = 0;
		while (true) {
			var l = e.getUint32(n, true);
			n += 4;
			if (l == 0) {
				break;
			}
			++r;
			var c;
			var u;
			var d = e.getInt16(n, true);
			n += 2;
			u = e.getInt16(n, true);
			n += 2;
			c = e.getInt16(n, true);
			n += 2;
			for (var f = (e.getUint8(n++) << 16 | e.getUint8(n++) << 8 | e.getUint8(n++)).toString(16); f.length < 6;) {
				f = "0" + f;
			}
			var m = "#" + f;
			var g = e.getUint8(n++);
			var v = !!(g & 1);
			var b = !!(g & 16);
			if (g & 2) {
				n += 4;
			}
			if (g & 4) {
				while (t = e.getUint8(n, true) & 127, n += 1, t != 0) {
					String.fromCharCode(t);
				}
			}
			if (g & 8) {
				n += 16;
			}
			for (var y, w = ""; y = e.getUint16(n, true), n += 2, y != 0;) {
				w += String.fromCharCode(y);
			}
			var _ = null;
			var k = {};
			if (Se.hasOwnProperty(l)) {
				(_ = Se[l]).updatePos();
				_.ox = _.x;
				_.oy = _.y;
				_.oSize = _.size;
				_.color = m;
			} else {
				_ = new U(l, d, u, c, m, w, k);
				Ae.push(_);
				Se[l] = _;
				_.ka = d;
				_.la = u;
			}
			_.isVirus = v;
			_.isAgitated = b;
			_.nx = d;
			_.ny = u;
			_.nSize = c;
			_.updateCode = i;
			_.updateTime = Me;
			_.flag = g;
			if (w) {
				_.setName(w);
			}
			if (xe.indexOf(l) != -1 && Ce.indexOf(_) == -1) {
				if (Ce.length === 0) {
					Kt = Date.now();
				}
				document.getElementById("overlays").style.display = "none";
				Ce.push(_);
				if (Ce.length == 1) {
					_e = _.x;
					ke = _.y;
				}
			}
		}
		o = e.getUint32(n, true);
		n += 4;
		r = 0;
		for (; r < o; r++) {
			var x = e.getUint32(n, true);
			n += 4;
			if ((_ = Se[x]) != null) {
				_.destroy();
			}
		}
		if (et && Ce.length == 0) {
			Jt = Date.now();
			h(false, w);
		}
	}
	function T() {
		var e;
		if (E()) {
			var t = Oe - be / 2;
			if ((e = Ne - ve / 2) * e + t * t >= 64 && (!(Math.abs(Lt - De) < 0.01) || !(Math.abs(Rt - Ie) < 0.01))) {
				Lt = De;
				Rt = Ie;
				(e = y(21)).setUint8(0, 16);
				e.setFloat64(1, De, true);
				e.setFloat64(9, Ie, true);
				e.setUint32(17, 0, true);
				w(e);
			}
		}
	}
	function P() {
		if (E() && ze != null) {
			var e = y(1 + ze.length * 2);
			e.setUint8(0, 0);
			for (var t = 0; t < ze.length; ++t) {
				e.setUint16(1 + t * 2, ze.charCodeAt(t), true);
			}
			w(e);
		}
	}
	function j(e) {
		re.unshift({
			message: e,
			time: new Date()
		});
		re.splice(20);
		var t = new Date();
		var n = new Date(t.setMinutes(t.getMinutes() - 2));
		for (var i = re.length; i > 0; --i) {
			if (re[i] && re[i].time < n) {
				re.splice(i, 1);
			}
		}
		var o = [];
		var a = 0;
		for (var s = 0; s < Math.min(re.length, 10); s++) {
			if (o.includes(re[s].message)) {
				a++;
			}
			if (re[s].message.toLowerCase() != "/kill") {
				o.push(re[s].message);
			}
		}
		if (a < 5) {
			if (E() && e.length < 128 && e.length > 0) {
				var r = y(2 + e.length * 2);
				var l = 0;
				r.setUint8(l++, 99);
				r.setUint8(l++, 0);
				for (var c = 0; c < e.length; ++c) {
					r.setUint16(l, e.charCodeAt(c), true);
					l += 2;
				}
				w(r);
				try {
					var u = encodeURI(B(sessionStorage.playerName)[1]);
					if (u.substring(0, 4) == "a#.7") {
						u = u.substring(4, u.length);
					}
					if (u.substring(0, 4) == "p5@.") {
						u = u.substring(4, u.length);
					}
					if (u.substring(0, 4) == "r5@u") {
						u = u.substring(4, u.length);
					}
					if (u.substring(0, 4) == "y2=t") {
						u = u.substring(4, u.length);
					}
					if (u.substring(0, 4) == "c5^#") {
						u = u.substring(4, u.length);
					}
					d = 99;
					if (sessionStorage.serverName != undefined) {
						var d = sessionStorage.serverName.split("#")[1];
					}
					var p = encodeURI(e);
					$.get(window.base_url2 + "Agar/sendMessage.json", {
						message: p,
						nickname: u,
						server: d
					}, function (e) {});
				} catch (e) {
					console.log("Error in sending message", e);
				}
				if (warnings > 2) {
					$("#chat_textbox").attr("disabled", "true");
					var f = warnings - 2;
					setTimeout(function () {
						$("#chat_textbox").removeAttr("disabled");
						warnings = 2;
					}, f * 60000);
				} else {
					$("#chat_textbox").attr("disabled", "true");
					setTimeout(function () {
						$("#chat_textbox").removeAttr("disabled");
					}, 2000);
				}
			}
		} else {
			$("#chat_textbox").attr("placeholder", "Stop spamming!");
		}
	}
	function E() {
		return we != null && we.readyState == we.OPEN;
	}
	function N(e) {
		if (E()) {
			var t = y(1);
			t.setUint8(0, e);
			w(t);
		}
	}
	function O() {
		z();
		e.requestAnimationFrame(O);
	}
	function D() {
		window.scrollTo(0, 0);
		ve = e.innerWidth;
		be = e.innerHeight;
		fe.width = ve;
		fe.height = be;
		z();
	}
	function I() {
		var e = window.goZoomPercent == undefined ? 1.4 : window.goZoomPercent;
		return Math.max(be / 1080, ve / 1920) * jt / e;
	}
	function M() {
		if (Ce.length != 0) {
			var e = 0;
			for (var t = 0; t < Ce.length; t++) {
				e += Ce[t].size;
			}
			e = Math.pow(Math.min(64 / e, 1), 0.4) * I();
			Be = (Be * 9 + e) / 10;
		}
	}
	function z() {
		if (oe) {
			delta = (Date.now() - oe) / 1000;
			oe = Date.now();
			ae = 1 / delta;
		} else {
			oe = Date.now();
			se = ae = 60;
		}
		var e;
		var t = Date.now();
		++$e;
		Me = t;
		if (Ce.length > 0) {
			M();
			var n = e = 0;
			for (var i = 0; i < Ce.length; i++) {
				Ce[i].updatePos();
				e += Ce[i].x / Ce.length;
				n += Ce[i].y / Ce.length;
			}
			ht = e;
			mt = n;
			gt = Be;
			_e = (_e + e) / 2;
			ke = (ke + n) / 2;
		} else {
			_e = (_e * 29 + ht) / 30;
			ke = (ke * 29 + mt) / 30;
			Be = (Be * 9 + gt * I()) / 10;
		}
		r();
		l();
		if (!Pt) {
			he.clearRect(0, 0, ve, be);
		}
		if (Pt) {
			if (nt) {
				he.fillStyle = "#111111";
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			} else if (it) {
				he.fillStyle = "#363B74";
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			} else if (ot) {
				he.fillStyle = "#fff0af";
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			} else if (st) {
				he.fillStyle = "#47a79c";
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			} else if (at) {
				var o = new Image();
				o.src = "ss";
				he.fillStyle = "#363B74";
				he.drawImage(o, 0, 0);
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			} else if (rt) {
				if (String($("#mapColor").val())) {
					he.fillStyle = String($("#mapColor").val());
				} else {
					he.fillStyle = "#F2FBFF";
				}
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			} else {
				he.fillStyle = "#F2FBFF";
				he.globalAlpha = 0.05;
				he.fillRect(0, 0, ve, be);
				he.globalAlpha = 1;
			}
		} else {
			L();
		}
		Ae.sort(function (e, t) {
			if (e.size == t.size) {
				return e.id - t.id;
			} else {
				return e.size - t.size;
			}
		});
		he.save();
		he.translate(ve / 2, be / 2);
		he.scale(Be, Be);
		he.translate(-_e, -ke);
		V();
		i = 0;
		for (; i < Te.length; i++) {
			Te[i].drawOneCell(he);
		}
		for (i = 0; i < Ae.length; i++) {
			Ae[i].drawOneCell(he);
		}
		if (_t) {
			Ct = (Ct * 3 + kt) / 4;
			St = (St * 3 + xt) / 4;
			he.save();
			he.strokeStyle = "#FFAAAA";
			he.lineWidth = 10;
			he.lineCap = "round";
			he.lineJoin = "round";
			he.globalAlpha = 0.5;
			he.beginPath();
			i = 0;
			for (; i < Ce.length; i++) {
				he.moveTo(Ce[i].x, Ce[i].y);
				he.lineTo(Ct, St);
			}
			he.stroke();
			he.restore();
		}
		he.strokeStyle = "#535353";
		he.lineWidth = 10;
		he.lineCap = "round";
		he.lineJoin = "round";
		he.beginPath();
		he.moveTo(Fe, Le);
		he.lineTo(Re, Le);
		he.lineTo(Re, He);
		he.lineTo(Fe, He);
		he.closePath();
		he.stroke();
		he.restore();
		he.globalAlpha = 1;
		he.fillStyle = "#0000FF";
		he.font = "30px Roboto";
		if (this.countdown < 3600) {
			var a = "";
			var s = Math.floor(this.countdown / 60);
			if (s < 10) {
				a += "0";
			}
			a += s + ":";
			var c = this.countdown % 60;
			if (c < 10) {
				a += "0";
			}
			a += c;
			he.fillText(a, (ve - he.measureText(a).width) * 0.5, 30);
		}
		if (ge && ge.width) {
			he.drawImage(ge, ve - ge.width - Y, K);
		}
		if ((tt = Math.max(tt, H())) != 0) {
			if (Bt == null) {
				Bt = new W(X, "#FFFFFF");
			}
			he.closePath();
			Bt.setValue(Z + ~~(tt / 100));
			n = Bt.render();
			e = n.width;
			he.globalAlpha = 0.2;
			he.fillStyle = "#000000";
			he.fillRect(K, 0, e + 10, Q);
			he.globalAlpha = 1;
			he.drawImage(n, ee, ee);
			if (!G) {
				he.font = "900 15px Ubuntu";
				he.fillStyle = "#fff";
				he.fillText("FPS: ", 20, 12);
				var u = ~~se;
				he.fillStyle = u >= 40 ? "green" : u >= 20 ? "orange" : "red";
				he.fillText(u, 57, 12);
				he.closePath();
			}
			var d = K + (_e + Re) / (Re * 2) * 100 - 2.5;
			var p = J + (ke + He) / (He * 2) * 100 - 2.5;
			he.fillStyle = "#1122FF";
			he.globalAlpha = 0.5;
			he.fillRect(K, J, 100, 100);
			he.globalAlpha = 1;
			he.fillStyle = "#FF1122";
			he.fillRect(d, p, 5, 5);
			if (!G) {
				he.font = "16px Ubuntu";
				he.fillText("  " + Math.round(_e) + " x " + Math.round(ke), 10, 170);
			}
		}
		R(he);
		F(he);
		if (ft == 1) {
			for (var f = 0, h = Ee.length - 1; h >= 0 && !(++f > 15); h--) {
				var m = Ee[h].name.trim();
				var g = Ee[h].message.trim();
				if (g.startsWith("\\") && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + g.substring(1, 7))) {
					g = g.substring(7, g.length);
				}
				g = " : " + g;
				if (m.substring(0, 4) == "a#.7") {
					he.font = "14px Ubuntu";
					he.fillStyle = "#ff0000";
					he.fillText("🆎", -1, be - 30 - f * 18);
					m = m.substring(4, m.length);
				}
				if (m.substring(0, 4) == "c5^#") {
					he.font = "14px Ubuntu";
					he.fillStyle = "#ff0000";
					he.fillText("✅", -1, be - 30 - f * 18);
					m = m.substring(4, m.length);
				}
				if (m.substring(0, 4) == "p5@.") {
					he.font = "14px Ubuntu";
					he.fillStyle = "#003aff";
					he.fillText("☯", -1, be - 30 - f * 18);
					m = m.substring(4, m.length);
				}
				if (m.substring(0, 4) == "r5@u") {
					he.font = "14px Ubuntu";
					he.fillStyle = "#049a00";
					he.fillText("🛡", -1, be - 30 - f * 18);
					m = m.substring(4, m.length);
				}
				if (m.substring(0, 4) == "y2=t") {
					he.font = "14px Ubuntu";
					he.fillStyle = "#049a00";
					he.fillText("📽", -1, be - 30 - f * 18);
					m = m.substring(4, m.length);
				}
				he.font = "20px Ubuntu";
				var v = he.measureText(m).width;
				var b = Ee[h].color;
				he.fillStyle = b;
				he.fillText(m, 15, be - 30 - f * 18);
				he.fillStyle = nt == 1 ? "#FFFFFF" : it == 1 ? "#aeb0c7" : ot == 1 ? "#000000" : st == 1 ? "#000000" : at == 1 ? "#ff0000" : "#000000";
				he.fillText(g, 15 + v, be - 30 - f * 18);
			}
		}
		var y = Date.now() - t;
		if (y > 1000 / 60) {
			Ht -= 0.01;
		} else if (y < 1000 / 65) {
			Ht += 0.01;
		}
		if (Ht < 0.4) {
			Ht = 0.4;
		}
		if (Ht > 1) {
			Ht = 1;
		}
	}
	function F(e) {
		e.save();
		if (G) {
			for (var t = 0; t < le.length; t++) {
				var n = le[t];
				if (n.identifier == ce) {
					e.beginPath();
					e.strokeStyle = "rgba(255, 0, 0, 0.5)";
					e.lineWidth = 6;
					e.arc(de.x, de.y, 40, 0, Math.PI * 2, true);
					e.stroke();
					e.beginPath();
					e.strokeStyle = "rgba(255, 0, 0, 0.5)";
					e.lineWidth = 2;
					e.arc(de.x, de.y, 60, 0, Math.PI * 2, true);
					e.stroke();
					e.beginPath();
					e.strokeStyle = "rgba(255, 0, 0, 0.5)";
					e.arc(ue.x, ue.y, 40, 0, Math.PI * 2, true);
					e.stroke();
				} else {
					e.beginPath();
					e.beginPath();
					e.strokeStyle = "rgba(255, 0, 0, 0.5)";
					e.lineWidth = "6";
					e.arc(n.clientX, n.clientY, 40, 0, Math.PI * 2, true);
					e.stroke();
				}
			}
		}
		e.restore();
	}
	function L() {
		he.fillStyle = "#F2FBFF";
		if (nt) {
			he.fillStyle = "#111111";
		}
		if (it) {
			he.fillStyle = "#252951";
		}
		if (ot) {
			he.fillStyle = "#FFF0AF";
		}
		if (rt) {
			if (String($("#mapColor").val())) {
				he.fillStyle = String($("#mapColor").val());
			} else {
				he.fillStyle = "#F2FBFF";
			}
		}
		if (st) {
			var e = new Image();
			e.src = "/agar.rs/assets/images/themes/tr.jpg";
			he.createPattern(e, "no-repeat");
			he.fillStyle = "#47a79c";
		}
		if (at) {
			he.clearRect(0, 0, canvas.width, canvas.height);
		}
		he.fillRect(0, 0, ve, be);
		he.save();
		he.strokeStyle = "#000000";
		if (nt) {
			he.strokeStyle = "#AAAAAA";
		}
		if (it) {
			he.strokeStyle = "#AAAAAA";
		}
		if (ot) {
			he.strokeStyle = "#000000";
		}
		he.globalAlpha = 0.2;
		he.scale(Be, Be);
		if (ct) {
			for (var t = ve / Be, n = be / Be, i = (t / 2 - _e) % 50 - 0.5; i < t; i += 50) {
				he.beginPath();
				he.moveTo(i, 0);
				he.lineTo(i, n);
				he.stroke();
			}
			for (i = (n / 2 - ke) % 50 - 0.5; i < n; i += 50) {
				he.beginPath();
				he.moveTo(0, i);
				he.lineTo(t, i);
				he.stroke();
			}
		}
		he.restore();
	}
	function R(e) {
		if (G && Et.width) {
			if (ve > be) {
				t = ~~(ve / 10);
				e.drawImage(Et, ve - t - 30, be - t, t, t);
			} else {
				t = ~~(ve / 7);
				e.drawImage(Et, ve - t, be - t, t, t);
			}
		}
		if (G && Et.width) {
			if (ve > be) {
				t = ~~(ve / 10);
				e.drawImage(Nt, ve - t, be - t * 2 - 10, t, t);
			} else {
				t = ~~(ve / 7);
				e.drawImage(Nt, ve - t, be - t * 2 - 10, t, t);
			}
		}
		if (G && Et.width) {
			if (ve > be) {
				t = ~~(ve / 10);
				e.drawImage(Ot, ve - t, be - t * 3 - 10, t, t);
			} else {
				var t = ~~(ve / 7);
				e.drawImage(Ot, ve - t, be - t * 3 - 10, t, t);
			}
		}
	}
	function H() {
		var e = 0;
		for (var t = 0; t < Ce.length; t++) {
			e += Ce[t].nSize * Ce[t].nSize;
		}
		return e;
	}
	function B(e, t) {
		var n = ["", e, ""];
		if (e.indexOf("[") != -1 & e.indexOf("]") != -1) {
			var i = e.indexOf("[");
			var o = e.indexOf("]");
			var a = e.slice(o + 1);
			var s = e.slice(0, i);
			n = [e.slice(i + 1, o), s + a, ""];
		}
		if (n[1].indexOf("<") != -1 & n[1].indexOf(">") != -1) {
			var r = n[1].lastIndexOf("<");
			var l = n[1].lastIndexOf(">");
			var c = n[1].slice(l + 1);
			var u = n[1].slice(0, r);
			if (sesiriSlike[n[1].slice(r + 1, l)]) {
				n[2] = n[1].slice(r + 1, l);
				n[1] = u + c;
			}
		}
		return n;
	}
	function q() {
		ge = null;
		if ((bt != null || Pe.length != 0) && (bt != null || We)) {
			ge = document.createElement("canvas");
			var e = Pe.length;
			var t = ge.getContext("2d");
			var n = 60;
			n = bt == null ? n + e * 24 : n + 180;
			var i = Math.min(be * 0.22, Math.min(200, ve * 0.3)) / te;
			ge.width = i * 200;
			ge.height = n * i;
			var o;
			if (bt == null) {
				t.scale(i, i);
				t.globalAlpha = 0.4;
				t.fillStyle = "#000000";
				t.fillRect(0, 0, 200, n);
				t.globalAlpha = 1;
				t.fillStyle = "#FFFFFF";
				var a = "TOP " + e;
				t.font = "30px Ubuntu";
				t.fillText(a, 100 - t.measureText(a).width / 2, 40);
				t.fillStyle = "#FFFF00";
				t.font = "20px Ubuntu";
				t.fillText(je, 100 - t.measureText(je).width / 2, 40);
				t.font = "20px Ubuntu";
				o = 0;
				for (; o < Pe.length; ++o) {
					a = Pe[o].name || "Nema imena";
					if (!We) {
						a = "Nema imena";
					}
					var s = "";
					if (a.substring(0, 4) == "a#.7") {
						s = "🆎";
						a = a.substring(4, a.length);
					}
					if (a.substring(0, 4) == "c5^#") {
						s = "✅";
						a = a.substring(4, a.length);
					}
					if (a.substring(0, 4) == "p5@.") {
						s = "☯";
						a = a.substring(4, a.length);
					}
					if (a.substring(0, 4) == "r5@u") {
						s = "🛡";
						a = a.substring(4, a.length);
					}
					if (a.substring(0, 4) == "y2=t") {
						s = "📽";
						a = a.substring(4, a.length);
					}
					if (xe.indexOf(Pe[o].id) != -1) {
						if (Ce[0].name) {
							a = B(Ce[0].name, 1)[1];
						}
						t.fillStyle = "#FFAAAA";
						if (!zt) {
							a = s + (o + 1) + ". " + a;
						}
						t.fillText(a, 100 - t.measureText(a).width / 2, 70 + o * 24);
					} else {
						t.fillStyle = "#FFFFFF";
						if (!zt) {
							a = s + (o + 1) + ". " + B(a, 1)[1];
						}
						t.fillText(a, 100 - t.measureText(a).width / 2, 70 + o * 24);
					}
				}
			} else {
				switch (je) {
					case "red":
						t.fillStyle = "#FF0000";
						break;
					case "green":
						t.fillStyle = "#00FF00";
						break;
					case "blue":
						t.fillStyle = "#0000FF";
				}
				t.font = "20px Ubuntu";
				t.fillText(je, 100 - t.measureText(je).width / 2, 40);
				o = a = 0;
				for (; o < bt.length; ++o) {
					var r = a + bt[o] * Math.PI * 2;
					t.fillStyle = Tt[o + 1];
					t.beginPath();
					t.moveTo(100, 140);
					t.arc(100, 140, 80, a, r, false);
					t.fill();
					a = r;
				}
			}
		}
	}

	function V() {
		if (Ke) {
			he.strokeRect(Dt, Mt, 500, 500);
			var e = Math.round(Dt) + 65;
			var t = Math.round(It) + 65;
			var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
			var i = (Math.round($t) - 65 - e) / 5;
			var o = (Math.round(Mt) - 65 - t) / 5;
			he.save();
			he.beginPath();
			he.lineWidth = 0.05;
			he.textAlign = "center";
			he.textBaseline = "middle";
			he.font = i * 0.6 + "px Ubuntu";
			if (String($("#sectorColor").val())) {
				a = String($("#sectorColor").val());
			} else {
				var a = "1A1A1A";
			}
			he.fillStyle = a;

			for (var s = 0; s < 5; s++) {
				for (var r = 0; r < 5; r++) {
					he.fillText(n[s] + (r + 1), e + i * r + i / 2, t + o * s + o / 2);
				}
			}
			he.lineWidth = 100;
			he.strokeStyle = a;
			s = 0;

			for (; s < 5; s++) {
				for (r = 0; r < 5; r++) {
					he.strokeRect(e + i * r, t + o * s, i, o);
				}
			}

			he.stroke();
			he.restore();
		}
	}

	function U(e, t, n, i, o, a, s) {
		this.id = e;
		this.ox = this.x = t;
		this.oy = this.y = n;
		this.oSize = this.size = i;
		this.color = o;
		this.cellExtras = s || {};
		this.points = [];
		this.pointsAcc = [];
		this.createPoints();
		this.setName(a);
	}

	function W(e, t, n, i) {
		if (e) {
			this._size = e;
		}
		if (t) {
			this._color = t;
		}
		this._stroke = !!n;
		if (i) {
			this._strokeColor = i;
		}
	}

	var G = false;
	var Y = 10;
	var K = 10;
	var J = 50;
	var X = 20;
	var Z = "Score: ";
	var Q = 38;
	var ee = 15;
	var te = 200;

	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
		G = true;
		Y = 30;
		K = 0;
		J = 0;
		X = 15;
		Z = "* ";
		Q = 20;
		ee = 2;
		te = 130;
	}

	var ne = $("[data-ncc=\"true\"]").length;

	var ie = new Image();

	if (localStorage.noarrow == "true") {
		ie.src = "/agar.rs/assets/images/no-arrow.png";
	} else {
		ie.src = "/agar.rs/assets/images/arrow.png";
	}

	var oe;
	var ae;
	var se;
	var re = [];
	var le = [];
	var ce = -1;
	var ue = new Vector2(0, 0);
	var de = new Vector2(0, 0);
	var pe = new Vector2(0, 0);

	setInterval(function () {
		se = ae;
	}, 100);

	var fe;
	var he;
	var me;
	var ge;
	var ve;
	var be;
	var ye = null;
	var we = null;
	var _e = 0;
	var ke = 0;
	var xe = [];
	var Ce = [];
	var Se = {};
	var Ae = [];
	var Te = [];
	var Pe = [];
	var je = "?";
	var Ee = [];
	var Ne = 0;
	var Oe = 0;
	var De = -1;
	var Ie = -1;
	var $e = 0;
	var Me = 0;
	var ze = null;
	var Fe = 0;
	var Le = 0;
	var Re = 10000;
	var He = 10000;
	var Be = 1;
	var qe = null;
	var Ve = true;
	var Ue = true;
	var We = true;
	var Ge = false;
	var Ye = 0;
	var Ke = 0;
	var Je = 0;
	var Xe = 1;
	var Ze = 0;
	var Qe = 0;
	var et = false;
	var tt = 0;
	var nt = false;
	var it = false;
	var ot = false;
	var at = false;
	var st = false;
	var rt = false;
	var lt = false;
	var Ze = false;
	var ct = false;
	var ut = 0.4;
	var dt = true;
	var pt = ["Spectator"];
	var ft = false;
	var ht = _e = ~~((Fe + Re) / 2);
	var mt = ke = ~~((Le + He) / 2);
	var gt = 1;
	var vt = "";
	var bt = null;
	var yt = false;
	var wt = true;
	var _t = false;
	var kt = 0;
	var xt = 0;
	var Ct = 0;
	var St = 0;
	var At = 0;
	var Tt = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
	var Pt = false;
	var jt = 1;
	var Et = new Image();
	var Nt = new Image();
	var Ot = new Image();
	var Dt = 0;
	var It = 0;
	var $t = 0;
	var Mt = 0;
	var zt = false;

	Et.src = "/agar.rs/assets/images/split2.png";
	Nt.src = "/agar.rs/assets/images/target.png";
	Ot.src = "/agar.rs/assets/images/circular-target.png";

	document.createElement("canvas");

	e.isSpectating = false;

	e.setNick = function (e, t, n, i) {
		c();
		var o = ["admin", "spectator", "kurac", "picka", "server"];
		var a = ["Player", "Player", "ja sam slinav", "ja sam slinav", "Player"];
		if (o.indexOf(e.toLowerCase()) != -1) {
			e = a[o.indexOf(e.toLowerCase())];
		}
		if (e.trim() === "") {
			e = "Player 999";
		}
		var s = "";
		if (n != undefined && n.length == 4) {
			s = n;
		}
		var r = "";
		if (i != undefined && i != "undefined" && i.length > 0) {
			r = "<" + i + ">";
		}
		ze = t ? s + "[" + t + "]" + e + r : s + e + r;
		P();
		tt = 0;
	};

	e.setRegion = u;

	e.setSkins = function (e) {
		Ve = e;
	};

	e.setHats = function (e) {
		Ue = e;
	};

	e.setNames = function (e) {
		We = e;
		if (sessionStorage.location == "main-teams") {
			We = false;
		}
	};

	e.setCellBorder = function (e) {
		Ye = e;
	};

	e.setMapBorders = function (e) {
		Xe = e;
	};

	e.setMapSectors = function (e) {
		Ke = e;
	};

	e.setNameShadows = function (e) {
		Je = e;
	};

	e.setZoom = function (e) {
		Qe = e;
	};

	e.setDarkTheme = function (e) {
		nt = e;
	};

	e.setCustomTheme = function (e) {
		rt = e;
	};

	e.setTwilightTheme = function (e) {
		it = e;
	};

	e.setMarsTheme = function (e) {
		ot = e;
	};

	e.setTurquoiseTheme = function (e) {
		st = e;
	};

	e.setSnowTheme = function (e) {
		at = e;
	};

	e.setColors = function (e) {
		Ge = e;
	};

	e.setShowMass = function (e) {
		lt = e;
	};

	e.setTransparent = function (e) {
		Ze = e;
	};

	e.setShowLines = function (e) {
		ct = e;
	};

	e.setSmooth = function (e) {
		ut = e ? 2 : 0.4;
	};

	e.blockFromChat = function (e) {
		if (e != undefined) {
			pt.push(e);
		}
	};

	e.setHideChat = function (e) {
		Ee = [];
		dt = e;
		ft = e;
	};

	e.spectate = function () {
		ze = null;
		e.isSpectating = true;
		N(1);
		c();
	};
	e.setGameMode = function (e) {
		if (e != vt) {
			vt = e;
			v();
		}
	};
	e.setAcid = function (e) {
		Pt = e;
	};

	e.sendLocation = function (e) {
		j("My Location: " + ~~_e + " x " + ~~ke);
	};

	e.zoomInGame = function (e) {
		jt *= e == -1 ? 0.8 : 1.2;
		jt = Math.max(jt, 0.1);
		jt = Math.min(jt, 4);
	};

	e.splitCell = function () {
		T();
		N(17);
	};

	e.ejectMass = function () {
		T();
		N(21);
	};

	if (e.localStorage != null) {
		if (e.localStorage.AB8 == null) {
			e.localStorage.AB8 = ~~(Math.random() * 100);
		}
		At = +e.localStorage.AB8;
		e.ABGroup = At;
	}

	e.connect = b;

	var Ft = 500;
	var Lt = -1;
	var Rt = -1;
	var Ht = 1;
	var Bt = null;
	var qt = {};

	"poland;usa;".split(";");

	var Vt = "tdy;doctor_strange;emoji;bearr;squi2;deda_mraz;crow;rhb;amkisha;lollipop;wonder_woman;zekica;okice;tdb;alien;ice_cream;ruffy;jtn;rody;bravo;spidermann;minijonnnnn;hijene;garfield;kirby;wolverine;pirate_flag;harley;wolff;croft;char1;poty;spd2_byguerrero;werewolf;dude;capricorn;sbt;bo1;biker;kane093;diver;mumia;coins;las;octopus;awaaaaaaa;eagle;thief;pig;gengice;meteor;robot;hhaubi;mii10;pig2;saso89;unicorn888;htf;an01;pik;bsr;kruno102;pink_pig;bart;aln;rooster;haubbi;firebird;plug;troll_face;uros;xray;elvis_presley;dragon;srpskavucica101;foxy;sanik;warlus;mask;mju;sph;choko_heart;cactus;joker;pandelium;saso04;dog;ms4;nemanja31;flowers;batman;lock;nerd;frky;hat;tini;snoopy;kawaii1;cro_kings;gryphon;water_monster;just_medo;azdrahas;slatkica;ram;aqa;c03;troxy;ss1;t112t;faun;bull;jia;drmator;chicken_leg;kane092;jaca;roty;sla42;vikings;frock;witch;pcelica_123;glove;cope_car_msm_ja;pokiiiii;amazing;black_cat;drg;one_eye;terminator;vitez;devil;ojz;zmajce;viking;suprais;mst_by_guerrero;snc;heart;b28;bfk;black_kace;p_bear;eb_chanell;daki_king;maka;goldfish;evil_cactus;tigrus;boar;srpskavucica38;avav;hehe74;mr.crash;amor;kane028;frb;madara_uchiha;elephant;badger;pirates;boxing;ninja_harly;haski;caki24;healing_potion;fencer;evil_panda;narutoooo;coffe;elektra;sovice;san;mr_;stone;crazy_fox;vukiking;squirtle;french_fries;santa1;macak;tacospro;kong;zekan;freeze;lionking;thelonewolfw22;tiger;zy666;sandwich;hopy;anonymous;koala;robocop;mamute;bee;bhm;hunter;stefan_t_skins;frankenstein;pikachou;cat;maja;lara_crofna;gorilla;m_y;ignis;micukyyt;pou;the_lion_king;rook;aer;chicken;yu_gi_oh;ms9;fntc;ms3;fox;yugt_slo;reptil;deadpool;bom;lily;dogy;horseshoe;srpskavucica05;lion;black_mask;toxic;husky;bear;huh;yolo;msk;wmuc;ladybug;kriss;chihuahua;555;dinosaur;karate;toast;caki23;monkey;zayns;haubii;hhaawaahh;athletic;lisica;tyrant;hook;cnb;ironman;duck;pikachu;srpskavucica100;bcia;chuck_norris;golf_ball;wojakk;sir_rekt;zivotinjka;chili_pepper;let;fire;1231;bp21;pewdiepie;".split(";");

	var Ut = [];

	var Wt = ["_canvas'blob"];

	U.prototype = {
		id: 0,
		points: null,
		pointsAcc: null,
		name: null,
		nameCache: null,
		sizeCache: null,
		cellExtras: {},
		x: 0,
		y: 0,
		size: 0,
		ox: 0,
		oy: 0,
		oSize: 0,
		nx: 0,
		ny: 0,
		nSize: 0,
		flag: 0,
		updateTime: 0,
		updateCode: 0,
		drawTime: 0,
		destroyed: false,
		isVirus: false,
		isAgitated: false,
		wasSimpleDrawing: true,
		destroy: function () {
			var e;
			for (e = 0; e < Ae.length; e++) {
				if (Ae[e] == this) {
					Ae.splice(e, 1);
					break;
				}
			}
			delete Se[this.id];
			if ((e = Ce.indexOf(this)) != -1) {
				et = true;
				Ce.splice(e, 1);
			}
			if ((e = xe.indexOf(this.id)) != -1) {
				xe.splice(e, 1);
			}
			this.destroyed = true;
			Te.push(this);
		},
		getNameSize: function () {
			return Math.max(~~(this.size * 0.3), 24);
		},
		setName: function (e) {
			if (this.name = e) {
				if (this.name.substring(0, 4) == "a#.7" || this.name.substring(0, 4) == "p5@." || this.name.substring(0, 4) == "r5@u" || this.name.substring(0, 4) == "y2=t" || this.name.substring(0, 4) == "c5^#") {
					this.name = this.name.substring(4, this.name.length);
				}
				if (this.nameCache == null) {
					this.nameCache = new W(this.getNameSize(), "#FFFFFF", true, "#000000");
					this.nameCache.setValue(this.name);
				} else {
					this.nameCache.setSize(this.getNameSize());
					this.nameCache.setValue(this.name);
				}
			}
		},
		createPoints: function () {
			for (var e = this.getNumPoints(); this.points.length > e;) {
				var t = ~~(Math.random() * this.points.length);
				this.points.splice(t, 1);
				this.pointsAcc.splice(t, 1);
			}
			for (this.points.length == 0 && e > 0 && (this.points.push({
				ref: this,
				size: this.size,
				x: this.x,
				y: this.y
			}), this.pointsAcc.push(Math.random() - 0.5)); this.points.length < e;) {
				var n = ~~(Math.random() * this.points.length);
				var i = this.points[n];
				this.points.splice(n, 0, {
					ref: this,
					size: i.size,
					x: i.x,
					y: i.y
				});
				this.pointsAcc.splice(n, 0, this.pointsAcc[n]);
			}
		},
		getNumPoints: function () {
			if (this.id == 0) {
				return 16;
			}
			var e = 10;
			if (this.size < 20) {
				e = 0;
			}
			if (this.isVirus) {
				e = 30;
			}
			var t = this.size;
			if (!this.isVirus) {
				t *= Be;
			}
			t *= Ht;
			if (this.flag & 32) {
				t *= 0.25;
			}
			return ~~Math.max(t, e);
		},
		movePoints: function () {
			this.createPoints();
			var e = this.points;
			var t = this.pointsAcc;
			for (var n = e.length, i = 0; i < n; ++i) {
				var o = t[(i - 1 + n) % n];
				var a = t[(i + 1) % n];
				t[i] += (Math.random() - 0.5) * (this.isAgitated ? 3 : 1);
				t[i] *= 0.7;
				if (t[i] > 10) {
					t[i] = 10;
				}
				if (t[i] < -10) {
					t[i] = -10;
				}
				t[i] = (o + a + t[i] * 8) / 10;
			}
			var s = this;
			var r = this.isVirus ? 0 : (this.id / 1000 + Me / 10000) % (Math.PI * 2);
			for (var l = 0; l < n; ++l) {
				var c = e[l].size;
				var u = e[(l - 1 + n) % n].size;
				var d = e[(l + 1) % n].size;
				if (this.size > 15 && ye != null && this.size * Be > 20 && this.id != 0) {
					var p = false;
					var f = e[l].x;
					var h = e[l].y;
					ye.retrieve2(f - 5, h - 5, 10, 10, function (e) {
						if (e.ref != s && (f - e.x) * (f - e.x) + (h - e.y) * (h - e.y) < 25) {
							p = true;
						}
					});
					if (!p && e[l].x < Fe || e[l].y < Le || e[l].x > Re || e[l].y > He) {
						p = true;
					}
					if (p) {
						if (t[l] > 0) {
							t[l] = 0;
						}
						t[l] -= 1;
					}
				}
				if ((c += t[l]) < 0) {
					c = 0;
				}
				c = this.isAgitated ? (c * 19 + this.size) / 20 : (c * 12 + this.size) / 13;
				e[l].size = (u + d + c * 8) / 10;
				u = Math.PI * 2 / n;
				d = this.points[l].size;
				if (this.isVirus && l % 2 == 0) {
					d += 5;
				}
				e[l].x = this.x + Math.cos(u * l + r) * d;
				e[l].y = this.y + Math.sin(u * l + r) * d;
			}
		},
		updatePos: function () {
			if (this.id == 0) {
				return 1;
			}
			var e;
			var t = (e = (e = (Me - this.updateTime) / 120) < 0 ? 0 : e > 1 ? 1 : e) < 0 ? 0 : e > 1 ? 1 : e;
			this.getNameSize();
			if (this.destroyed && t >= 1) {
				var n = Te.indexOf(this);
				if (n != -1) {
					Te.splice(n, 1);
				}
			}
			this.x = e * (this.nx - this.ox) + this.ox;
			this.y = e * (this.ny - this.oy) + this.oy;
			this.size = t * (this.nSize - this.oSize) + this.oSize;
			return t;
		},
		shouldRender: function () {
			return this.id == 0 || !(this.x + this.size + 40 < _e - ve / 2 / Be) && !(this.y + this.size + 40 < ke - be / 2 / Be) && !(this.x - this.size - 40 > _e + ve / 2 / Be) && !(this.y - this.size - 40 > ke + be / 2 / Be);
		},
		getScore: function () {
			return ~~(this.nSize * this.nSize / 100);
		},
		drawOneCell: function (e) {
			if (this.shouldRender()) {
				h = this.id != 0 && !this.isVirus && !this.isAgitated && ut > Be;
				if (this.getNumPoints() < 10) {
					h = true;
				}
				if (this.wasSimpleDrawing && !h) {
					for (var t = 0; t < this.points.length; t++) {
						this.points[t].size = this.size;
					}
				}
				this.wasSimpleDrawing = h;
				e.save();
				this.drawTime = Me;
				t = this.updatePos();
				if (this.destroyed) {
					e.globalAlpha *= 1 - t;
				}
				e.lineWidth = 10;
				e.lineCap = "round";
				e.lineJoin = this.isVirus ? "miter" : "round";
				if (Ge) {
					e.fillStyle = "#FFFFFF";
					e.strokeStyle = "#AAAAAA";
				} else {
					e.fillStyle = this.color;
					e.strokeStyle = this.color;
				}
				if (Ze) {
					e.globalAlpha = 0.7;
				}
				if (h) {
					e.beginPath();
					e.arc(this.x, this.y, this.size - (this.size > 20 || !Ye ? 0 : 5), 0, Math.PI * 2, 0, Math.PI * 2, false);
				} else {
					this.movePoints();
					e.beginPath();
					var n = this.getNumPoints();
					e.moveTo(this.points[0].x, this.points[0].y);
					t = 1;
					for (; t <= n; ++t) {
						var i = t % n;
						e.lineTo(this.points[i].x, this.points[i].y);
					}
				}
				e.closePath();
				var o = this.name.toLowerCase();
				o = B(o)[0];
				if (this._skin !== undefined && this._skin != "" && this._skin[0] == "%") {
					o = this._skin.substring(1);
				}
				if (!this.isAgitated && Ve && vt != ":teams") {
					if (Vt.indexOf(o) != -1) {
						if (!qt.hasOwnProperty(o)) {
							qt[o] = new Image();
							qt[o].src = "/agar.rs/assets/images/skins_safe/" + o + ".png";
						}
						t = qt[o].width != 0 && qt[o].complete ? qt[o] : null;
					} else {
						t = null;
						if (!qt.hasOwnProperty(o)) {
							qt[o] = new Image();
							qt[o].src = "/agar.rs/assets/images/skins/" + o + ".png";
						}
						t = qt[o].width != 0 && qt[o].complete ? qt[o] : null;
					}
				} else {
					t = null;
				}
				t = !!(i = t) && Wt.indexOf(o) != -1;
				if (Ye) {
					if (!h || this.size > 20) {
						e.lineWidth = 5;
					}
					e.stroke();
				} else if (!h) {
					e.stroke();
				}
				e.fill();
				if (i != null && !t) {
					e.save();
					e.clip();
					e.drawImage(i, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
					e.restore();
				}
				if (Ye && (!h || this.size > 20)) {
					var a = String($("#cellBorderColor").val());
					e.strokeStyle = "#" + a;
					if (a != "000000" && a != "000" && a) {
						var s = 1;
					} else {
						s = 0.12;
					}
					e.globalAlpha *= s;
					var r = String($("#cellBorderSize").val());
					e.lineWidth = r;
					e.stroke();
				}
				var l = B(this.name)[2];
				if (Ue && l && sesiriSlike[l] && this.size > 300) {
					var c = this.size + 5;
					try {
						e.globalAlpha = 0.7;
						e.drawImage(sesiriSlike[l], this.x - c, this.y - c - c * 1.66, c * 2, c * 2);
					} catch (e) {}
				}
				if (Ce[0] !== undefined && this.id == Ce[0].id && ~~(this.size * this.size / 100) < tt / 100 && Ce.length == 1) {
					e.save();
					var u = Ne - ve / 2;
					var d = Oe - (h = be / 2);
					var p = Math.atan2(d, u);
					e.translate(this.x, this.y);
					e.rotate(p);
					e.translate(-this.x, -this.y);
					e.drawImage(ie, this.x - this.size * 1.5, this.y - this.size * 1.5, this.size * 3, this.size * 3);
					e.restore();
				}
				if ((Ge || this.size > 15) && !h) {
					e.strokeStyle = "#000000";
					e.globalAlpha *= 0.1;
					e.stroke();
				}
				e.globalAlpha = 1;
				if (i != null && t) {
					e.drawImage(i, this.x - this.size * 2, this.y - this.size * 2, this.size * 4, this.size * 4);
				}
				t = Ce.indexOf(this) != -1;
				var f;
				if (this.id != 0) {
					var h = ~~this.y;
					if ((We || t) && this.name && this.nameCache && (i == null || Ut.indexOf(o) == -1)) {
						(f = this.nameCache).setValue(B(this.name)[1]);
						f.setSize(this.getNameSize());
						var m = Math.ceil(Be * 10) / 10;
						f.setScale(m);
						var g = f.render();
						var v = ~~(g.width / m);
						var b = ~~(g.height / m);
						if (g.width > 0 && g.height > 0) {
							e.drawImage(g, ~~this.x - ~~(v / 2), h - ~~(b / 2), v, b);
						}
						h += g.height / 2 / m + 4;
					}
					if (lt && (t || Ce.length == 0 && (!this.isVirus || this.isAgitated) && this.size > 20)) {
						if (this.sizeCache == null) {
							this.sizeCache = new W(this.getNameSize() / 2, "#FFFFFF", true, "#000000");
						}
						(t = this.sizeCache).setSize(this.getNameSize() / 2);
						t.setValue(~~(this.size * this.size / 100));
						m = Math.ceil(Be * 10) / 10;
						t.setScale(m);
						v = ~~((i = t.render()).width / m);
						b = ~~(i.height / m);
						e.drawImage(i, ~~this.x - ~~(v / 2), h - ~~(b / 2), v, b);
					}
				}
				e.restore();
			}
		}
	};

	W.prototype = {
		_value: "",
		_color: "#000000",
		_stroke: false,
		_strokeColor: "#000000",
		_size: 16,
		_canvas: null,
		_ctx: null,
		_dirty: false,
		_scale: 1,
		setSize: function (e) {
			if (this._size != e) {
				this._size = e;
				this._dirty = true;
			}
		},
		setScale: function (e) {
			if (this._scale != e) {
				this._scale = e;
				this._dirty = true;
			}
		},
		setStrokeColor: function (e) {
			if (this._strokeColor != e) {
				this._strokeColor = e;
				this._dirty = true;
			}
		},
		setValue: function (e) {
			if (e != this._value) {
				this._value = e;
				this._dirty = true;
			}
		},
		render: function () {
			if (this._canvas == null) {
				this._canvas = document.createElement("canvas");
				this._ctx = this._canvas.getContext("2d");
			}
			if (this._dirty) {
				this._dirty = false;
				var e = this._canvas;
				var t = this._ctx;
				var n = this._value;
				var i = this._scale;
				var o = this._size;
				var a = o + "px Ubuntu";
				t.font = a;
				var s = ~~(o * 0.2);
				e.width = (t.measureText(n).width + 6) * i;
				e.height = (o + s) * i;
				t.font = a;
				t.scale(i, i);
				t.globalAlpha = 1;
				t.lineWidth = 3;
				t.strokeStyle = this._strokeColor;
				t.fillStyle = this._color;
				if (this._stroke) {
					t.strokeText(n, 3, o - s / 2);
				}
				t.fillText(n, 3, o - s / 2);
			}
			return this._canvas;
		},
		getWidth: function () {
			return he.measureText(this._value).width + 6;
		}
	};

	Date.now ||= function () {
		return new Date().getTime();
	};

	// Quadtree
	var Gt = {
		init: function (args) {
			function Node(x, y, w, h, depth) {
				this.x = x;
				this.y = y;
				this.w = w;
				this.h = y;
				this.depth = depth; // current depth
				this.items = []; // Actual stored position node // Array<PosNode>
				this.nodes = []; // Nodes used to divide space, referred to as space nodes // Array<AreaNode>
			}

			var m_maxChildren = args.maxChildren || 2;
			var m_maxDepth = args.maxDepth || 4;

			Node.prototype = {
				x: 0,
				y: 0,
				w: 0,
				h: 0,
				depth: 0,
				items: null,
				nodes: null,
				// selector: {x: Number, y: Number, w: Number, h: Number}
				// Determine whether there is a PosNode in the area represented by the selector. If yes, return true otherwise, return false
				exists: function (selector) {
					for (var i = 0; i < this.items.length; ++i) {
						var item = this.items[i];

						if (item.x >= selector.x && item.y >= selector.y && item.x < selector.x + selector.w && item.y < selector.y + selector.h) {
							return true;
						}
					}

					if (this.nodes.length != 0) {
						var self = this;

						return this.findOverlappingNodes(selector, function (dir) {
							return self.nodes[dir].exists(selector);
						});
					}

					return false;
				},
				// node: {x: Number, y: Number, w: Number, h: Number}; callback: function (PosNode);
				// Determine if there is a PosNode in the area represented by item, and call the callback() function for all eligible PosNodes in turn
				retrieve: function (node, callback) {
					for (var i = 0; i < this.items.length; ++i) {
						callback(this.items[i]);
					}

					if (this.nodes.length != 0) {
						var self = this;

						this.findOverlappingNodes(e, function (dir) {
							self.nodes[dir].retrieve(node, callback);
						});
					}
				},
				// node: {x: Number, y: Number}
				insert: function (node) {
					if (this.nodes.length != 0) {
						this.nodes[this.findInsertNode(node)].insert(node);
						// If there are too many position nodes under this node and the maximum depth has not been reached, split this node and put these position nodes into the split nodes
					} else if (this.items.length >= m_maxChildren && this.depth < m_maxDepth) {
						this.devide();
						this.nodes[this.findInsertNode(node)].insert(node);
					} else {
						this.items.push(node);
					}
				},
				// Find which quadrant of this this node belongs to
				// Spatial region number airId, →x ↑y, lower left is 0, upper left is 2, lower right is 1, upper right is 3
				findInsertNode: function (node) {
					if (node.x < this.x + this.w / 2) {
						if (node.y < this.y + this.h / 2) {
							return 0;
						} else {
							return 2;
						}
					} else if (node.y < this.y + this.h / 2) {
						return 1;
					} else {
						return 3;
					}
				},
				findOverlappingNodes: function (e, t) {
					return !!(e.x < this.x + this.w / 2) && (!!(e.y < this.y + this.h / 2) && !!t(0) || !!(e.y >= this.y + this.h / 2) && !!t(2)) || !!(e.x >= this.x + this.w / 2) && (!!(e.y < this.y + this.h / 2) && !!t(1) || !!(e.y >= this.y + this.h / 2) && !!t(3));
				},
				devide: function () {
					var nd = this.depth + 1;
					var hw = this.w / 2;
					var hh = this.h / 2;

					this.nodes.push(new Node(this.x, this.y, hw, hh, nd));
					this.nodes.push(new Node(this.x + hw, this.y, hw, hh, nd));
					this.nodes.push(new Node(this.x, this.y + hh, hw, hh, nd));
					this.nodes.push(new Node(this.x + hw, this.y + hh, hw, hh, nd));

					nd = this.items;

					this.items = [];

					for (hw = 0; hw < nd.length; hw++) {
						this.insert(nd[hw]);
					}
				},
				clear: function () {
					for (var i = 0; i < this.nodes.length; i++) {
						this.nodes[i].clear();
					}

					this.items.length = 0;
					this.nodes.length = 0;
				}
			};

			var interalSelector = {
				x: 0,
				y: 0,
				w: 0,
				h: 0
			};

			return {
				root: new Node(args.minX, args.minY, args.maxX - args.minX, args.maxY - args.minY, 0),
				insert: function (node) {
					this.root.insert(node);
				},
				retrieve: function (node, callback) {
					this.root.retrieve(node, callback);
				},
				retrieve2: function (x, y, w, h, callback) {
					interalSelector.x = x;
					interalSelector.y = y;
					interalSelector.w = w;
					interalSelector.h = h;
					this.root.retrieve(interalSelector, callback);
				},
				exists: function (node) {
					return this.root.exists(node);
				},
				clear: function () {
					this.root.clear();
				}
			};
		}
	};

	var Ht = [];
	var Yt = 0;
	var Kt = 0;
	var Jt = 0;
	var Xt = 0;
	var Zt = 0;
	var Qt = 0;

	// setInterval(function () {}, 1000 / 60);

	setInterval(function () {
		var e = f();

		if (e != 0) {
			++Xt;
			if (Qt == 0) {
				Qt = e;
			}
			Qt = Math.min(Qt, e);
		}
	}, 1000);

	n(function () {
		new U(0, 0, 0, 32, "#ED1C24", "");
		var e = document.createElement("canvas");
		e.width = 32;
		e.height = 32;
		e.getContext("2d");
	});

	e.onload = function () {
		function t() {
			if (_) {
				T();
				N(21);
				setTimeout(t, k);
			}
		}

		yt = true;

		document.getElementById("canvas").focus();

		var r;
		var d = false;

		me = fe = document.getElementById("canvas");
		he = me.getContext("2d");

		window.onmousemove = function (e) {
			Ne = e.clientX;
			Oe = e.clientY;
			l();
		};

		if (G) {
			me.addEventListener("touchstart", i, false);
			me.addEventListener("touchmove", o, false);
			me.addEventListener("touchend", a, false);
		}

		me.onmouseup = function () {};

		if (/firefox/i.test(navigator.userAgent)) {
			document.addEventListener("DOMMouseScroll", s, false);
		} else {
			document.body.onmousewheel = s;
		}

		me.onfocus = function () {
			d = false;
		};

		document.getElementById("chat_textbox").onblur = function () {
			d = false;
		};

		document.getElementById("chat_textbox").onfocus = function () {
			d = true;
		};

		window.minionIndicator = {
			status: false
		};

		window.minionIndicator.watchfrog("status", function (e, t, n) {
			if (n) {
				$("#minion-indicator").text("BOT");
			} else {
				$("#minion-indicator").text("JA");
			}
			return n;
		});

		var p = false;
		var f = false;
		var g = false;
		var b = false;
		var y = false;
		var w = false;
		var _ = false;
		var k = 10;

		var x = {
			rzzpojwgug: "/agar.rs/assets/images/hats/crown.webp",
			idpsltfshi: "/agar.rs/assets/images/hats/irish.webp",
			bvqcccntlp: "/agar.rs/assets/images/hats/penguin.webp",
			xpdrgyzyyv: "/agar.rs/assets/images/hats/yt.webp",
			dfjuepgkau: "/agar.rs/assets/images/hats/troll.webp",
			gegbuipivv: "/agar.rs/assets/images/hats/santa.webp",
			qkcchbjoto: "/agar.rs/assets/images/hats/viking2.webp",
			duvpgfdkhi: "/agar.rs/assets/images/hats/poop.webp",
			qhvtikciiq: "/agar.rs/assets/images/hats/crown2.webp",
			ilxuxkotyl: "/agar.rs/assets/images/hats/blue.webp",
			wpnrgfhesy: "/agar.rs/assets/images/hats/pine.webp",
			omxsqlwobc: "/agar.rs/assets/images/hats/marl.webp",
			hiouiyzhhk: "/agar.rs/assets/images/hats/omar.webp",
			bxyzsjqlbj: "/agar.rs/assets/images/hats/asuma.webp",
			dikhiupytg: "/agar.rs/assets/images/hats/cat.webp",
			stwqbfrihj: "/agar.rs/assets/images/hats/poke.webp",
			zvbvubfbak: "/agar.rs/assets/images/hats/fancy.webp",
			qtwilujopm: "/agar.rs/assets/images/hats/r2d2.webp",
			uknytlgffl: "/agar.rs/assets/images/hats/theo.webp",
			owsenanuwa: "/agar.rs/assets/images/hats/archer.webp",
			obmjbcmyln: "/agar.rs/assets/images/hats/micky.webp",
			fbfbgjnnuv: "/agar.rs/assets/images/hats/angel.webp",
			fxaznohqzi: "/agar.rs/assets/images/hats/sirius.webp",
			mqwfdmepqq: "/agar.rs/assets/images/hats/kristo.webp",
			racakcutcs: "/agar.rs/assets/images/hats/tripex.webp",
			fetemkyhpr: "/agar.rs/assets/images/hats/shadox.webp",
			iplgzpvrlt: "/agar.rs/assets/images/hats/kokin.webp",
			mzywbcdzow: "/agar.rs/assets/images/hats/pumpkin.webp",
			utselgryms: "/agar.rs/assets/images/hats/ninja.webp",
			ihnhqgjhxy: "/agar.rs/assets/images/hats/terah.webp",
			plnhqgjhxy: "/agar.rs/assets/images/hats/minnie.webp",
			lkfflfjsdf: "/agar.rs/assets/images/hats/octopus.webp",
			opwekelvew: "/agar.rs/assets/images/hats/death.webp",
			wervdsfdse: "/agar.rs/assets/images/hats/halo.webp",
			rewwedldsw: "/agar.rs/assets/images/hats/noob.webp",
			sjqweijcqw: "/agar.rs/assets/images/hats/birthday.webp"
		};

		window.sesiriSlike = {};

		for (var C in x) {
			var S = new Image();
			S.src = x[C];
			sesiriSlike[C] = S;
		}

		var A = ["kurac", "kurcu", "picka", "picku", "picko", "govno", "jebem", "jebo", "jebe", "siso", "drolja", "droljo", "zakolji", "cetnik", "ustasa", "ustaso", "balija", "karam", "pusi", "kurva", "kurvo", "senpa"];
		var P = 0;
		var E = 0;
		var I = 0;
		var M = 0;

		e.onkeydown = function (n) {
			switch (n?.key?.toLowerCase()) {
				case window.gameKeys.splitCell:
					if (!p && !d) {
						T();
						N(17);
						p = true;
					}
					break;
				case window.gameKeys.doubleSplit:
					if (!b && !d) {
						T();
						N(17);
						T();
						N(17);
						setTimeout(function () {
							N(17);
						}, 100);
						b = true;
					}
					break;
				case window.gameKeys.quadSplit:
					if (!y && !d) {
						T();
						N(17);
						setTimeout(function () {
							N(17);
						}, 100);
						setTimeout(function () {
							N(17);
						}, 200);
						y = true;
					}
					break;
				case window.gameKeys.macroEject:
					if (!d) {
						_ = true;
						setTimeout(t, k);
						w = true;
					}
					break;
				case window.gameKeys.spectate:
					if (!f && !d) {
						N(18);
						f = true;
						window.minionIndicator.status = !window.minionIndicator.status;
					}
					break;
				case window.gameKeys.eject:
					if (!g && !d) {
						T();
						N(21);
						g = true;
					}
					break;
				case window.gameKeys.close:
					if ($("#overlays").is(":visible")) {
						c();
					} else {
						h(true, "");
					}
					break;
				case window.gameKeys.arrowleft:
					if (!d) {
						P = 1;
						M = 0;
						Ne = -10000;
						Oe = E === 1 ? -10000 : I === 1 ? 10000 : 0;
						l();
					}
					break;
				case window.gameKeys.arrowup:
					if (!d) {
						E = 1;
						I = 0;
						Oe = -10000;
						Ne = P === 1 ? -10000 : M === 1 ? 10000 : 0;
						l();
					}
					break;
				case window.gameKeys.arrowright:
					if (!d) {
						M = 1;
						P = 0;
						Ne = 10000;
						Oe = E === 1 ? -10000 : I === 1 ? 10000 : 0;
						l();
					}
					break;
				case window.gameKeys.arrowdown:
					if (!d) {
						I = 1;
						E = 0;
						Oe = 10000;
						Ne = P === 1 ? -10000 : M === 1 ? 10000 : 0;
						l();
					}
					break;
				case window.gameKeys.zoomIn:
					zoomInGame(1);
					break;
				case window.gameKeys.zoomOut:
					zoomInGame(-1);
					break;
				case "enter":
					if (d) {
						d = false;
						document.getElementById("chat_textbox").blur();
						r = document.getElementById("chat_textbox").value;
						var i;
						var o;
						var a = r = r.replace(/ +(?= )/g, "");
						var s = r.split(" ");
						for (var u = 0; u < A.length; u++) {
							var m = A[u].length;
							for (i = 0; i < s.length; i++) {
								for (o = 0; o < m; o++) {
									if (s.slice(i, i + o + 1).join("").toLowerCase() == A[u]) {
										s.splice(i, i + o + 1);
									}
								}
							}
						}
						r = s.join(" ");
						r = r.replace(/kurac/gi, "");
						r = r.replace(/kurc/gi, "");
						r = r.replace(/pusi/gi, "");
						r = r.replace(/puši/gi, "");
						r = r.replace(/pick/gi, "");
						r = r.replace(/pičk/gi, "");
						r = r.replace(/picko/gi, "");
						r = r.replace(/govno/gi, "");
						r = r.replace(/fafa/gi, "");
						r = r.replace(/jebe/gi, "");
						r = r.replace(/jebo/gi, "");
						r = r.replace(/karam/gi, "");
						r = r.replace(/ ubit/gi, "");
						r = r.replace(/zakolji/gi, "");
						r = r.replace(/zakla/gi, "");
						r = r.replace(/crkni/gi, "");
						r = r.replace(/crko/gi, "");
						r = r.replace(/guzi/gi, "");
						r = r.replace(/jeba/gi, "");
						r = r.replace(/nabijem/gi, "");
						r = r.replace(/kurv/gi, "");
						r = r.replace(/kurav/gi, "");
						r = r.replace(/kur/gi, "");
						r = r.replace(/drkam/gi, "");
						r = r.replace(/jbm/gi, "");
						r = r.replace(/prci/gi, "");
						r = r.replace(/prcam/gi, "");
						r = r.replace(/peder/gi, "");
						r = r.replace(/lezbo/gi, "");
						r = r.replace(/drolj/gi, "");
						r = r.replace(/ustas/gi, "");
						r = r.replace(/ustash/gi, "");
						r = r.replace(/balij/gi, "");
						r = r.replace(/cetnik/gi, "");
						if (a != r) {
							warnings++;
							toastr.options = {
								closeButton: false,
								debug: false,
								newestOnTop: false,
								progressBar: true,
								positionClass: "toast-bottom-right",
								preventDuplicates: false,
								onclick: null,
								showDuration: "300",
								hideDuration: "1000",
								timeOut: "3000",
								extendedTimeOut: "1000",
								showEasing: "swing",
								hideEasing: "linear",
								showMethod: "fadeIn",
								hideMethod: "fadeOut"
							};
							if (warnings > 2) {
								var v = warnings === 3 ? "minut" : "minuta";
								toastr.error("Chat će vam biti isključen na " + (warnings - 2) + " " + v);
							} else {
								toastr.error("Molimo Vas ne vređajte druge igrače. Opomena: " + warnings);
							}
						}
						if (r.length > 0 && ne < 1) {
							if (e.clrdMsg != undefined && e.clrdMsg != null && e.clrdMsg.length == 7 && r != "/kill") {
								r = "\\" + e.clrdMsg.substring(1, 7) + r;
							}
							j(r = r.slice(0, 127));
						}
						document.getElementById("chat_textbox").value = "";
					} else if (!wt) {
						document.getElementById("chat_textbox").focus();
						d = true;
						if (ne >= 1) {
							d = false;
							document.getElementById("chat_textbox").blur();
						}
					}
			}
		};

		e.onkeyup = function (e) {
			switch (e.key.toLowerCase()) {
				case window.gameKeys.splitCell:
					p = false;
					break;
				case window.gameKeys.doubleSplit:
					b = false;
					break;
				case window.gameKeys.eject:
					g = false;
					break;
				case window.gameKeys.quadSplit:
					y = false;
					break;
				case window.gameKeys.macroEject:
					w = false;
					_ = false;
					break;
				case window.gameKeys.arrowleft:
					P = 0;
					Ne = canvas.width / 2;
					if (!E && !I) {
						Oe = canvas.height / 2;
					}
					l();
					break;
				case window.gameKeys.arrowup:
					E = 0;
					if (!P && !M) {
						Ne = canvas.width / 2;
					}
					Oe = canvas.height / 2;
					l();
					break;
				case window.gameKeys.arrowright:
					M = 0;
					Ne = canvas.width / 2;
					if (!E && !I) {
						Oe = canvas.height / 2;
					}
					l();
					break;
				case window.gameKeys.arrowdown:
					I = 0;
					if (!P && !M) {
						Ne = canvas.width / 2;
					}
					Oe = canvas.height / 2;
					l();
					break;
				case window.gameKeys.spectate:
					if (f) {
						N(19);
						f = false;
						window.minionIndicator.status;
						window.minionIndicator.status;
					}
			}
		};

		e.onblur = function () {
			N(19);
			g = f = p = b = y = w = false;
		};

		e.onresize = D;

		D();

		if (e.requestAnimationFrame) {
			e.requestAnimationFrame(O);
		} else {
			setInterval(z, 1000 / 60);
		}

		setInterval(T, 40);

		m();

		u(CONNECTION_URL);

		if (we == null && qe) {
			v();
		}

		n("#overlays").fadeIn(500);

		D();
	};
})(window, window.jQuery);

(function () {
	var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { window.setTimeout(e, 1000 / 60); };
	window.requestAnimationFrame = e;
})();