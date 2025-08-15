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
}(require("./88.js"));
exports.default = {
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