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
var s = i(require("./92.js"));
var r = i(require("./93.js"));
var l = i(require("./90.js"));
var c = i(require("./91.js"));
var u = i(require("./4.js"));
exports.default = {
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
        window.setRegion(t);
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