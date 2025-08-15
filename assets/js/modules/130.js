module.exports = {
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