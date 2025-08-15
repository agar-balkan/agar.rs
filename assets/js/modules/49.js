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