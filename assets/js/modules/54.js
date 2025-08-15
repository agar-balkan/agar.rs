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
Object.defineProperty(exports, "__esModule", {
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
}(require("./8.js"));
var r = function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}(require("./57.js"));
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
exports.default = {
  state: l,
  getters: c,
  actions: u,
  mutations: d
};