module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui modal",
      attrs: {
        id: "more-settings"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n        " + e._s(e.$t("options.all_settings")) + "\n\n        "), n("div", {
      staticClass: "reset-settings"
    }, [n("a", {
      staticClass: "start-btn",
      on: {
        click: function (t) {
          e.resetSettings();
        }
      }
    }, [e._v(e._s(e.$t("home.reset_settings")))])])]), e._v(" "), n("div", {
      staticClass: "content"
    }, [n("div", {
      staticClass: "ui stackable three column grid"
    }, [n("div", {
      staticClass: "column"
    }, [n("h3", [e._v(e._s(e.$t("options.cells_and_controls")))]), e._v(" "), n("div", {
      staticClass: "options"
    }, [n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.transparentCells
      },
      on: {
        change: function (t) {
          e.goTransparent();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.transparent")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.hideHats
      },
      on: {
        change: function (t) {
          e.goHats();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.hide_hats")) + "\n                            ")])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.showSkins
      },
      on: {
        change: function (t) {
          e.goSkinsShow();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.without_skins")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.mouseControl
      },
      on: {
        change: function (t) {
          e.mouseControlFn();
        }
      }
    }), e._v(" "), n("label", [e._v("\n                            " + e._s(e.$t("home.mouse_control")) + "\n                            "), n("span", {
      attrs: {
        "data-tooltip": e.$t("home.mouse_control_desc"),
        "data-inverted": ""
      }
    }, [n("i", {
      staticClass: "help circle icon"
    })])])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.arrowDirection
      },
      on: {
        change: function (t) {
          e.goArrow();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.pointing_arrow")) + "\n                            "), n("span", {
      attrs: {
        "data-tooltip": e.$t("home.pointing_arrow_desc"),
        "data-inverted": ""
      }
    }, [n("i", {
      staticClass: "info circle icon"
    })])])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.showMass
      },
      on: {
        change: function (t) {
          e.goShowMass();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.show_current_score")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.smoothView
      },
      on: {
        change: function (t) {
          e.goSmooth();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.smoth_view")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.cellBorder
      },
      on: {
        change: function (t) {
          e.goCellBorder();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("options.cell_border")) + "\n                            ")])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.colors
      },
      on: {
        change: function (t) {
          e.goColors();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("options.hide_colors")) + "\n                            ")])])])]), e._v(" "), n("div", {
      staticClass: "column"
    }, [n("h3", [e._v(e._s(e.$t("options.map")))]), e._v(" "), n("div", {
      staticClass: "options"
    }, [n("div", {
      staticClass: "color-option"
    }, [n("input", {
      attrs: {
        id: "mapColor",
        type: "color"
      },
      domProps: {
        value: e.options.mapColor
      },
      on: {
        change: function (t) {
          e.changeMapColor(t.target.value);
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("options.map_color")) + "\n                            ")])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.showLines
      },
      on: {
        change: function (t) {
          e.goLines();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.without_lines")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.acidMode
      },
      on: {
        change: function (t) {
          e.goAcid();
        }
      }
    }), e._v(" "), n("label", [e._v("Acid mode")])]), e._v(" "), n("div", {
      staticClass: "ui divider"
    }), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.sectorsVisible
      },
      on: {
        change: function (t) {
          e.goSectors();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("options.show_sectors")) + "\n                            ")])]), e._v(" "), n("div", {
      staticClass: "color-option"
    }, [n("input", {
      attrs: {
        id: "sectorColor",
        type: "color"
      },
      domProps: {
        value: e.options.sectorsColor
      },
      on: {
        change: function (t) {
          e.changeSectorColor(t.target.value);
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("options.sector_color")) + "\n                            ")])]), e._v(" "), n("div", {
      staticClass: "ui divider"
    }), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.infiniteScroll
      },
      on: {
        change: function (t) {
          e.goInfiniteScroll();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("options.infinity_zoom")) + "\n                            ")])]), e._v(" "), n("p", [n("i", {
      staticClass: "circular inverted zoom out link icon cursor",
      on: {
        click: function (t) {
          e.gameViewZoom("out");
        }
      }
    }), n("i", {
      staticClass: "circular inverted zoom link icon cursor",
      on: {
        click: function (t) {
          e.gameViewZoom("in");
        }
      }
    }), e._v("\n                        " + e._s(e.$t("home.game_view")) + "\n                    ")]), e._v(" "), e._m(0)])]), e._v(" "), n("div", {
      staticClass: "column"
    }, [n("h3", [e._v(e._s(e.$t("options.other")))]), e._v(" "), n("div", {
      staticClass: "options"
    }, [n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.hideChat
      },
      on: {
        change: function (t) {
          e.goHideChat();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.hide_chat")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.oldChat
      },
      on: {
        change: function (t) {
          e.goOldChat();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("new_21_09.old_chat")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.showResults
      },
      on: {
        change: function (t) {
          e.goNames();
        }
      }
    }), e._v(" "), n("label", [e._v(e._s(e.$t("home.show_table")))])]), e._v(" "), n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.options.backgroundCanvas
      },
      on: {
        change: function (t) {
          e.backgroundCanvasFn();
        }
      }
    }), e._v(" "), n("label", [e._v(" " + e._s(e.$t("new_21_09.background_canvas")))])])])])]), e._v(" "), n("div", {
      staticClass: "ui divider"
    }), e._v(" "), n("keybinds", {
      staticClass: "keybind-public"
    })], 1)]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui indicating tiny progress",
      attrs: {
        "data-total": "10",
        id: "game-view"
      }
    }, [n("div", {
      staticClass: "bar"
    })]);
  }]
};