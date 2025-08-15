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
    }, [e.fromApp ? n("a", {
      attrs: {
        id: "fullScreenBtn2"
      },
      on: {
        click: function (t) {
          e.fullScreen();
        }
      }
    }, [n("i", {
      staticClass: "maximize icon"
    })]) : e._e(), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/",
        exact: ""
      }
    }, [n("i", {
      staticClass: "game icon"
    }), e._v(e._s(e.$t("home.home")))]), e._v(" "), n("router-link", {
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
    }), e._v(e._s(e.$t("logged.results")) + "\n                ")]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/hats"
      }
    }, [n("i", {
      staticClass: "graduation cap icon"
    }), e._v(e._s(e.$t("logged.hats")) + "\n                    ")]), e._v(" "), n("div", {
      staticClass: "right menu"
    }, [e._m(0), e._v(" "), n("a", {
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
    }), e._v("Slovenščina\n                            ")])])])], 1)], 1)])]), e._v(" "), n("div", {
      staticClass: "mobile only row"
    }, [n("div", {
      staticClass: "ui fixed navbar menu"
    }, [e.fromApp ? e._e() : n("a", {
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
    })]), e._v(" "), e._m(1)]), e._v(" "), n("div", {
      staticClass: "ui vertical navbar menu"
    }, [n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/",
        exact: ""
      }
    }, [n("i", {
      staticClass: "game icon"
    }), e._v(e._s(e.$t("home.home")))]), e._v(" "), n("router-link", {
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
        to: "/agar.rs/login"
      }
    }, [n("i", {
      staticClass: "lock icon"
    }), e._v(e._s(e.$t("home.login")))]), e._v(" "), n("router-link", {
      staticClass: "item",
      attrs: {
        to: "/agar.rs/register"
      }
    }, [n("i", {
      staticClass: "lock icon"
    }), e._v(e._s(e.$t("login.register")) + "\n            ")]), e._v(" "), n("a", {
      staticClass: "item",
      on: {
        click: function (t) {
          e.musicPage();
        }
      }
    }, [n("i", {
      staticClass: "music icon"
    }), e._v(e._s(e.$t("home.music")))]), e._v(" "), n("div", {
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
    }), e._v("Slovenščina\n                    ")])])])], 1)])]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "item ui link dropdown",
      attrs: {
        id: "another-version-dropdown"
      }
    }, [n("i", {
      staticClass: "external alternate icon"
    }), e._v(" "), n("div", {
      staticClass: "menu"
    }, [n("div", {
      staticClass: "item"
    }, [n("a", {
      attrs: {
        href: "#",
        target: "_blank"
      }
    }, [e._v("Beta")])]), e._v(" "), n("div", {
      staticClass: "item"
    }, [n("a", {
      attrs: {
        href: "#",
        target: "_blank"
      }
    }, [e._v("Lite")])]), e._v(" "), n("div", {
      staticClass: "item"
    }, [n("a", {
      attrs: {
        href: "#",
        target: "_blank"
      }
    }, [e._v("\n                                    Android\n                                ")])]), e._v(" "), n("div", {
      staticClass: "item"
    }, [n("a", {
      attrs: {
        href: "#",
        target: "_blank"
      }
    }, [e._v("\n                                    Facebook\n                                ")])])])]);
  }, function () {
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