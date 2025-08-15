module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui grid navigation"
    }, [n("div", {
      staticClass: "computer tablet only row"
    }, [n("div", {
      staticClass: "ui fixed menu navbar grid"
    }, [n("div", {
      staticClass: "ui container"
    }, [n("router-link", {
      staticClass: "item",
      attrs: {
        to: {
          name: "index"
        }
      }
    }, [n("i", {
      staticClass: "game icon"
    }), e._v(e._s(e.$t("home.home")) + "\n                ")]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/skins"
      }
    }, [n("i", {
      staticClass: "image icon"
    }), e._v(e._s(e.$t("home.skins")))]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/highscores"
      }
    }, [n("i", {
      staticClass: "trophy icon"
    }), e._v(e._s(e.$t("logged.results")) + "\n                ")]), e._v(" "), n("span", {
      staticClass: "item"
    }, [n("router-link", {
      attrs: {
        to: "/agar.rs/hats"
      }
    }, [n("i", {
      staticClass: "graduation cap icon"
    }), e._v(e._s(e.$t("logged.hats")) + "\n                  ")]), e._v(" "), e.myHats.length > 0 ? n("div", {
      staticClass: "ui floating dropdown"
    }, [n("i", {
      staticClass: "dropdown icon"
    }), e._v(" "), n("div", {
      staticClass: "menu"
    }, e._l(e.myHats, function (t) {
      return n("div", {
        staticClass: "item",
        on: {
          click: function (n) {
            e.chooseHat(e.getHatById(t.hat_id).secret);
          }
        }
      }, [e._v(e._s(e.getHatById(t.hat_id).name))]);
    }))]) : e._e()], 1), e._v(" "), n("div", {
      staticClass: "right menu"
    }, [n("a", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.openCoinsModal();
        }
      }
    }, [n("img", {
      staticClass: "coins-img",
      attrs: {
        src: "/agar.rs/assets/images/coins.png"
      }
    }), e._v(" " + e._s(e.coins))]), e._v(" "), n("div", {
      staticClass: "item ui interted dropdown"
    }, [n("i", {
      staticClass: "user circle icon"
    }), e._v(e._s(e.$t("home.profile")) + " "), e.id != 0 ? n("span", {
      staticStyle: {
        color: "#c75342"
      }
    }, [e._v(" #ID: " + e._s(e.id))]) : e._e(), e._v(" "), n("div", {
      staticClass: "menu"
    }, [n("div", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.changeNicknameModal();
        }
      }
    }, [n("i", {
      staticClass: "pencil alternate icon"
    }), e._v("\n                                " + e._s(e.$t("logged.change_nickname")) + "\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.changeProfileSettingsModal();
        }
      }
    }, [n("i", {
      staticClass: "user icon"
    }), e._v("\n                                " + e._s(e.$t("logged.profile_settings")) + "\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.Logout();
        }
      }
    }, [n("i", {
      staticClass: "lock icon"
    }), e._v(e._s(e.$t("home.logout")) + "\n                            ")])])]), e._v(" "), n("a", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.musicPage();
        }
      }
    }, [n("i", {
      staticClass: "music icon"
    })]), e._v(" "), n("div", {
      staticClass: "item ui floating dropdown button change-country"
    }, [n("i", {
      class: e.lang + " flag"
    }), e._v(" "), n("div", {
      staticClass: "menu",
      class: e.lang
    }, [n("div", {
      staticClass: "item",
      class: e.lang == "gb" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("gb");
        }
      }
    }, [n("i", {
      staticClass: "gb flag"
    }), e._v("English\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "ba" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("ba");
        }
      }
    }, [n("i", {
      staticClass: "ba flag"
    }), e._v("Bosanski\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "rs" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("rs");
        }
      }
    }, [n("i", {
      staticClass: "rs flag"
    }), e._v("Српски\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "hr" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("hr");
        }
      }
    }, [n("i", {
      staticClass: "hr flag"
    }), e._v("Hrvatski\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "mk" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("mk");
        }
      }
    }, [n("i", {
      staticClass: "mk flag"
    }), e._v("Македонски\n                            ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "si" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("si");
        }
      }
    }, [n("i", {
      staticClass: "si flag"
    }), e._v("Slovenščina\n                            ")])])])])], 1)])]), e._v(" "), n("div", {
      staticClass: "mobile only row"
    }, [n("div", {
      staticClass: "ui fixed navbar menu"
    }, [n("a", {
      attrs: {
        id: "fullScreenBtn"
      },
      on: {
        click: function (t) {
          e.fullScreen();
        }
      }
    }, [n("i", {
      staticClass: "maximize icon"
    })]), e._v(" "), e._m(0)]), e._v(" "), n("div", {
      staticClass: "ui vertical navbar menu"
    }, [n("router-link", {
      staticClass: "item",
      attrs: {
        to: {
          name: "index"
        }
      }
    }, [n("i", {
      staticClass: "game icon"
    }), e._v(e._s(e.$t("home.home")) + "\n            ")]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/skins"
      }
    }, [n("i", {
      staticClass: "image icon"
    }), e._v(e._s(e.$t("home.skins")))]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/highscores"
      }
    }, [n("i", {
      staticClass: "trophy icon"
    }), e._v(e._s(e.$t("logged.results")) + "\n            ")]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/hats"
      }
    }, [n("i", {
      staticClass: "graduation cap icon"
    }), e._v(e._s(e.$t("logged.hats")) + "\n            ")]), e._v(" "), n("a", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.openCoinsModal();
        }
      }
    }, [n("img", {
      staticClass: "coins-img",
      attrs: {
        src: "/agar.rs/assets/images/coins.png"
      }
    }), e._v(" " + e._s(e.coins))]), e._v(" "), n("a", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.Logout();
        }
      }
    }, [n("i", {
      staticClass: "lock icon"
    }), e._v(e._s(e.$t("home.logout")))]), e._v(" "), n("a", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.musicPage();
        }
      }
    }, [n("i", {
      staticClass: "music icon"
    }), e._v(e._s(e.$t("home.music")))]), e._v(" "), e.id != 0 ? n("a", {
      staticClass: "item"
    }, [n("span", {
      staticStyle: {
        color: "#c75342"
      }
    }, [e._v(" #ID: " + e._s(e.id))])]) : e._e(), e._v(" "), n("div", {
      staticClass: "item ui floating dropdown button change-country"
    }, [n("i", {
      class: e.lang + " flag"
    }), e._v(" "), n("div", {
      staticClass: "menu",
      class: e.lang
    }, [n("div", {
      staticClass: "item",
      class: e.lang == "gb" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("gb");
        }
      }
    }, [n("i", {
      staticClass: "gb flag"
    }), e._v("English\n                    ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "ba" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("ba");
        }
      }
    }, [n("i", {
      staticClass: "ba flag"
    }), e._v("Bosanski\n                    ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "rs" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("rs");
        }
      }
    }, [n("i", {
      staticClass: "rs flag"
    }), e._v("Српски\n                    ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "hr" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("hr");
        }
      }
    }, [n("i", {
      staticClass: "hr flag"
    }), e._v("Hrvatski\n                    ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "mk" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("mk");
        }
      }
    }, [n("i", {
      staticClass: "mk flag"
    }), e._v("Македонски\n                    ")]), e._v(" "), n("div", {
      staticClass: "item",
      class: e.lang == "si" ? "active" : "",
      on: {
        click: function (t) {
          e.changeLanguage("si");
        }
      }
    }, [n("i", {
      staticClass: "si flag"
    }), e._v("Slovenščina\n                    ")])])])], 1)]), e._v(" "), n("div", {
      staticClass: "ui small inverted modal",
      attrs: {
        id: "new-nickname-modal"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n            " + e._s(e.$t("logged.change_nickname")) + "\n        ")]), e._v(" "), n("div", {
      staticClass: "content"
    }, [n("div", {
      staticClass: "ui inverted segment"
    }, [n("div", {
      staticClass: "ui right labeled inverted transparent icon input"
    }, [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.newNick,
        expression: "newNick"
      }],
      attrs: {
        type: "text",
        placeholder: e.$t("home.type_name"),
        maxlength: "15",
        autofocus: ""
      },
      domProps: {
        value: e.newNick
      },
      on: {
        keyup: function (t) {
          e.message = "";
        },
        input: function (t) {
          if (!t.target.composing) {
            e.newNick = t.target.value;
          }
        }
      }
    }), e._v(" "), n("a", {
      staticClass: "ui red tag label",
      on: {
        click: function (t) {
          e.changeNickname();
        }
      }
    }, [e._v("\n                        " + e._s(e.$t("home.save")) + "\n                    ")])]), e._v(" "), n("p", {
      staticClass: "error",
      domProps: {
        innerHTML: e._s(e.message)
      }
    })])])]), e._v(" "), n("profile-settings-modal")], 1);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "right menu open"
    }, [n("a", {
      staticClass: "menu item",
      attrs: {
        href: ""
      }
    }, [n("i", {
      staticClass: "content icon"
    })])]);
  }]
};