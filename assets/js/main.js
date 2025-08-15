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

var flakes = [];
var canvas = document.getElementById("nokey");
var ctx = canvas.getContext("2d");
var flakeCount = 100;
var mX = -100;
var mY = -100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("mousemove", function (e) {
	mX = e.clientX;
	mY = e.clientY;
});

window.addEventListener("resize", function () {
	canvas.width = window.innerWidth - 20;
	canvas.height = window.innerHeight;
});