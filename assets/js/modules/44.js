Object.defineProperty(exports, "__esModule", {
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
var o = require("./3.js");
exports.default = {
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