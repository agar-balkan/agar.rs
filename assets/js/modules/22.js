function i(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
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
var a = require("./3.js");
var s = i(require("./101.js"));
var r = i(require("./110.js"));
var l = i(require("./95.js"));
var c = i(require("./109.js"));
var u = i(require("./96.js"));
var d = i(require("./85.js"));
var p = i(require("./84.js"));
var f = i(require("./98.js"));
var h = i(require("./102.js"));
var m = i(require("./107.js"));
var g = i(require("./106.js"));
var v = i(require("./97.js"));
var b = i(require("./99.js"));
var y = i(require("./104.js"));
var w = i(require("./83.js"));
var _ = i(require("./89.js"));
var k = i(require("./108.js"));
var x = i(require("./105.js"));
var C = i(require("./103.js"));
var S = i(require("./100.js"));
var A = i(require("./87.js"));
var T = i(require("./86.js"));
exports.default = {
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