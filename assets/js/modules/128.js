module.exports = {
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