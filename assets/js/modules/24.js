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
var a = function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}(require("./94.js"));
exports.default = {
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