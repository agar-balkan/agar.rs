module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage"
    }, [n("div", {
      staticClass: "page-section"
    }, [n("div", {
      attrs: {
        id: "helloDialog"
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h1", {
      staticClass: "site-name"
    }, [e._v("\n\n                           A"), n("span", [e._v("gar")]), e._v(" B"), n("span", [e._v("alkan")]), n("div", [e._v("OpenSource")]), e._v(" "), e.am_logged_in ? n("span", {
      attrs: {
        "data-tooltip": "Klikni da preuzmeš dnevni bonus"
      }
    }, [n("i", {
      staticClass: "gift icon",
      on: {
        click: function (t) {
          e.GetDailyBonus();
        }
      }
    })]) : e._e(), e._v(" "), n("div", {
      staticClass: "clearfix"
    })])])]), e._v(" "), n("div", {
      staticClass: "main-page-wrap"
    }, [n("div", {
      staticClass: "ui grid"
    }, [n("div", {
      staticClass: "mobile-row-1 seven wide mobile column six wide tablet column six wide computer column six wide large screen column",
      attrs: {
        id: "nickname-column"
      }
    }, [n("div", [e.hat && e.hat != "" && e.hatDisplay ? n("img", {
      attrs: {
        id: "hat",
        src: e.hatLink
      }
    }) : e._e(), e._v(" "), n("div", {
      staticClass: "skin-reveal-wrap"
    }, [n("i", {
      staticClass: "angle left icon",
      on: {
        click: e.prevSkin
      }
    }), e._v(" "), n("div", {
      attrs: {
        id: "skin-reveal"
      }
    }, [n("div", {
      staticClass: "visible content",
      style: "background-image:url(/agar.rs/assets/images/skins/" + e.safeSN(e.globalSkinName) + ".png)"
    }, [e.am_logged_in ? n("h3", {
      staticClass: "text-nickname"
    }, [e._v(e._s(e.safeName(e.loggedNickName)))]) : n("input", {
      attrs: {
        type: "text",
        id: "nickname",
        placeholder: e.$t("home.type_name"),
        maxlength: e.maxNickName,
        autofocus: ""
      },
      domProps: {
        value: e.nickname
      },
      on: {
        input: e.updateNickname
      }
    })])]), e._v(" "), n("i", {
      staticClass: "angle right icon",
      on: {
        click: e.nextSkin
      }
    })]), e._v(" "), n("div", {
      staticClass: "clearfix"
    }), e._v(" "), n("div", {
      staticClass: "text-center"
    }, [n("input", {
      class: e.globalSkinName.length == 16 ? "no-skin-name" : "",
      attrs: {
        type: "text",
        id: "skin",
        placeholder: e.$t("home.skin"),
        maxlength: e.maxNickName
      },
      domProps: {
        value: e.globalSkinName
      },
      on: {
        input: e.updateGlobalSkinName
      }
    })]), e._v(" "), n("div", {
      attrs: {
        id: "fancy-nick-icons"
      }
    }, [n("i", {
      staticClass: "connectdevelop link icon",
      attrs: {
        title: "Fancy Nick"
      },
      on: {
        click: function (t) {
          e.openFancyNickModal();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "save link icon",
      attrs: {
        title: "My Nicknames"
      },
      on: {
        click: function (t) {
          e.openSavedNick();
        }
      }
    }), e._v(" "), e.am_logged_in ? n("button", {
      staticClass: "icon-btn private-skin-ico",
      attrs: {
        type: "button",
        "data-tooltip": e.$t("logged.your_private_skins"),
        "data-position": "bottom center",
        "data-inverted": ""
      },
      on: {
        click: function (t) {
          e.openPrivateSkinsModal();
        }
      }
    }, [n("i", {
      staticClass: "image icon"
    })]) : e._e()])])]), e._v(" "), n("div", {
      staticClass: "mobile-row-2 two wide mobile column four wide tablet column five wide computer column five wide large screen column",
      attrs: {
        id: "skin-column"
      }
    }, [n("button", {
      staticClass: "play-game-btn",
      attrs: {
        type: "button"
      },
      on: {
        click: function (t) {
          e.startGame();
        }
      }
    }, [n("i", {
      staticClass: "notched circle loading icon connecting-to-server",
      staticStyle: {
        display: "none"
      }
    }), e._v(" "), n("i", {
      staticClass: "play icon",
      attrs: {
        id: "play-game-icon"
      }
    })]), e._v(" "), n("button", {
      staticClass: "icon-btn spec-btn",
      attrs: {
        type: "button",
        "data-tooltip": e.$t("home.spectate"),
        "data-position": "bottom center",
        "data-inverted": ""
      },
      on: {
        click: function (t) {
          e.spec();
        }
      }
    }, [n("i", {
      staticClass: "unhide icon"
    })]), e._v(" "), n("button", {
      staticClass: "icon-btn settings-btn",
      attrs: {
        type: "button",
        "data-tooltip": e.$t("options.all_settings"),
        "data-position": "bottom center",
        "data-inverted": "",
        onclick: "$('#more-settings').modal('show'); return false;"
      }
    }, [n("i", {
      staticClass: "settings icon"
    })]), e._v(" "), e.am_logged_in ? n("router-link", {
      staticClass: "icon-btn my-statistic-btn",
      attrs: {
        to: "/agar.rs/me",
        tag: "button",
        type: "button",
        "data-tooltip": e.$t("logged.my_statistic"),
        "data-position": "bottom center",
        "data-inverted": ""
      },
      on: {
        click: function (t) {
          e.spec();
        }
      }
    }, [n("i", {
      staticClass: "chart line icon"
    })]) : e._e()], 1), e._v(" "), n("div", {
      staticClass: "mobile-row-3 seven wide mobile column six wide tablet column five wide computer column five wide large screen column"
    }, [n("server-list"), e._v(" "), n("settings", {
      staticClass: "home-settings"
    })], 1)])]), e._v(" "), e.am_logged_in ? n("div", {
      attrs: {
        id: "logged-in-checkboxes"
      }
    }, [n("div", {
      staticClass: "ui toggle checkbox badge-checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.rankDisplay
      },
      on: {
        change: function (t) {
          e.toggleBadge();
        }
      }
    }), e._v(" "), n("label", [n("h4", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.rank != "" && e.rank != null,
        expression: "rank != '' && rank != null"
      }],
      staticClass: "header"
    }, [e._v(" " + e._s(e.$t("new_21_09.badge")) + ": " + e._s(e._f("ranking")(e.rank)))])])]), e._v(" "), e.hat && e.hat != "" ? n("div", {
      staticClass: "ui toggle checkbox hat-checkbox"
    }, [n("input", {
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: e.hatDisplay
      },
      on: {
        change: function (t) {
          e.toggleHat();
        }
      }
    }), e._v(" "), n("label", [n("h4", {
      staticClass: "header"
    }, [e._v(e._s(e.$t("logged.hat")))])])]) : e._e()]) : e._e(), e._v(" "), n("i", {
      staticClass: "animated infinite pulse chevron down\nicon",
      attrs: {
        id: "scroll-down"
      }
    }), e._v(" "), n("div", {
      staticClass: "clearfix"
    }), e._v(" "), e.fromApp ? e._e() : n("div", {
      staticClass: "sixteen wide tablet column sixteen wide large screen column "
    }, [n("div", {
      staticClass: "homepage-ad",
      staticStyle: {
        height: "90px!important",
        position: "relative",
        "z-index": "1"
      }
    }, 1), e._v(" "), n("div", {
      staticClass: "clearfix"
    })])])]), e._v(" "), n("div", {
      staticClass: "page-section second-section"
    }, [n("div", {
      staticClass: "ui container"
    }, [n("div", {
      staticClass: "ui stackable grid"
    }, [n("div", {
      staticClass: "clearfix"
    }), e._v(" "), e.fromApp ? e._e() : n("div", {
      staticClass: "eight wide tablet column eight wide computer column seven wide large screen column"
    }, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2)]), e._v(" "), n("div", {
      staticClass: "eight wide tablet column eight wide computer column seven wide large screen column"
    }, [n("div", {
      staticClass: "safe-internet"
    }, [n("safe-internet")], 1)])])]), e._v(" "), n("div", {
      staticClass: "clearfix"
    }), e._v(" "), n("div", {
      staticClass: "ui container"
    }, [n("div", {
      staticClass: "footer-links"
    }, [n("router-link", {
      attrs: {
        tag: "a",
        to: "/agar.rs/rules"
      }
    }, [n("i", {
      staticClass: "warning sign icon"
    }), e._v(e._s(e.$t("home.rules")) + "\n                   ")]), e._v(" "), n("router-link", {
      attrs: {
        tag: "a",
        to: "/agar.rs/privacy_policy"
      }
    }, [n("i", {
      staticClass: "info sign icon"
    }), e._v(e._s(e.$t("privacy.title")) + "\n                   ")]), e._v(" "), n("router-link", {
      attrs: {
        tag: "a",
        to: "/agar.rs/pillory"
      }
    }, [n("i", {
      staticClass: "ban icon"
    }), e._v(e._s(e.$t("new_21_09.pillory")) + "\n                   ")]), e._v(" ")], 1)]), e._v(" "), n("div", {
      staticClass: "clearfix"
    })]), e._v(" "), n("div", {
      staticClass: "swal-to-go"
    }), e._v(" "), n("saved-nicknames"), e._v(" "), n("div", {
      staticClass: "ui basic modal",
      attrs: {
        id: "set-nick-modal"
      }
    }, [n("div", {
      staticClass: "ui icon header"
    }, [n("i", {
      staticClass: "id badge icon"
    }), e._v("\n               " + e._s(e.$t("home.type_name")) + "\n           ")]), e._v(" "), n("div", {
      staticClass: "content"
    }, [n("p", [e._v(e._s(e.$t("logged.type_nick_desc")))]), e._v(" "), n("div", {
      staticClass: "ui icon input pn-input"
    }, [n("input", {
      attrs: {
        type: "text",
        id: "nickname-modal-input",
        placeholder: e.$t("home.type_name"),
        maxlength: e.maxNickName,
        autofocus: ""
      },
      on: {
        keydown: function (t) {
          e.modalNameEmpty = false;
        }
      }
    })]), e._v(" "), n("p", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.modalNameEmpty,
        expression: "modalNameEmpty"
      }],
      staticClass: "error"
    }, [e._v(e._s(e.$t("logged.no_name")))])]), e._v(" "), n("div", {
      staticClass: "actions"
    }, [n("div", {
      staticClass: "ui green inverted button",
      on: {
        click: function (t) {
          e.SaveNickname();
        }
      }
    }, [n("i", {
      staticClass: "checkmark icon"
    }), e._v("\n                   " + e._s(e.$t("logged.save")) + "\n               ")]), e._v(" "), n("div", {
      staticClass: "ui red basic inverted button",
      on: {
        click: function (t) {
          e.Logout();
        }
      }
    }, [n("i", {
      staticClass: "remove icon"
    }), e._v("\n                   " + e._s(e.$t("home.logout")) + "\n               ")])])]), e._v(" "), n("div", {
      staticClass: "ui modal",
      attrs: {
        id: "player-private-skins-modal"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n               " + e._s(e.$t("logged.your_private_skins")) + "\n           ")]), e._v(" "), n("div", {
      staticClass: "content"
    }, [n("div", {}, e._l(e.privateSkins, function (t) {
      return n("img", {
        class: [t.skin_name == e.activeSkin ? "active" : "", "private-skins ui image"],
        attrs: {
          src: "/agar.rs/assets/images/skins/" + t.skin_name + ".png"
        },
        on: {
          click: function (n) {
            e.activateSkin(t.skin_name);
          }
        }
      });
    })), e._v(" "), e.privateSkins.length == 0 ? n("p", [e._v("\n                   " + e._s(e.$t("logged.no_private_skins")) + "\n               ")]) : e._e(), e._v(" "), n("div", {
      staticClass: "clearfix"
    })])])], 1);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      attrs: {
        id: "facebook-page"
      }
    }, [n("iframe", {
      staticStyle: {
        border: "none",
        width: "100%"
      },
      attrs: {
        src: "/agar.rs/data/news.html"
      }
    })]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("a", {
      staticClass: "discord-link",
      attrs: {
        href: "#",
        target: "_blank"
      }
    }, [n("img", {
      staticClass: "ui pull right",
      attrs: {
        alt: "Discord",
        src: "/agar.rs/assets/images/discord.png"
      }
    })]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("a", {
      staticClass: "instagram-link",
      attrs: {
        href: "#",
        target: "_blank"
      }
    }, [n("img", {
      attrs: {
        src: "/agar.rs/assets/images/instagram.png"
      }
    })]);
  }]
};