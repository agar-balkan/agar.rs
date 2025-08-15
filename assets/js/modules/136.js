module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "skins",
      attrs: {
        id: "skins-page"
      }
    }, [n("spinner", {
      attrs: {
        show: e.loading
      }
    }), e._v(" "), n("div", {
      staticClass: "ui container"
    }, [n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("div", {
      staticClass: "ads-skins"
    }, 1), e._v(" "), n("div", {
      staticClass: "ui form"
    }, [n("div", {
      staticClass: "inline fields"
    }, [n("div", {
      staticClass: "field"
    }, [e.top_skins ? e._e() : n("a", {
      staticClass: "ui red button",
      on: {
        click: function (t) {
          e.getTopSkins();
        }
      }
    }, [n("i", {
      staticClass: "heart icon"
    }), e._v("\n                        " + e._s(e.$t("skins.top_skins")) + "\n                    ")]), e._v(" "), e.top_skins ? n("a", {
      staticClass: "ui teal button",
      on: {
        click: function (t) {
          e.returnSkins();
        }
      }
    }, [n("i", {
      staticClass: "photo icon"
    }), e._v("\n                        " + e._s(e.$t("skins.all_skins")) + "\n                    ")]) : e._e(), e._v(" "), e.am_logged_in ? n("div", {
      staticClass: "ui  labeled button",
      on: {
        click: function (t) {
          e.myTopSkins();
        }
      }
    }, [n("div", {
      staticClass: "ui purple button"
    }, [n("i", {
      staticClass: "heart icon"
    }), e._v("\n                            " + e._s(e.$t("skins.my_favs")) + "\n                        ")]), e._v(" "), n("a", {
      staticClass: "ui basic purple left pointing label"
    }, [e._v(e._s(e.skins.my_liked.length))])]) : e._e(), e._v(" "), !e.bannedFromSkins() ? e._e() : n("div", {
      staticClass: "ui black animated button",
      on: {
        click: function (t) {
          e.openUploadSkinModal();
        }
      }
    }, [n("div", {
      staticClass: "visible content"
    }, [e._v(e._s(e.$t("skins.add_skin")))]), e._v(" "), e._m(0)])]), e._v(" "), n("div", {
      staticClass: "field"
    }, [n("div", {
      staticClass: "ui inverted transparent icon input"
    }, [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.skinSearch,
        expression: "skinSearch"
      }],
      attrs: {
        type: "text",
        placeholder: e.$t("new_21_09.search")
      },
      domProps: {
        value: e.skinSearch
      },
      on: {
        keyup: function (t) {
          e.skinSearchDB();
        },
        input: function (t) {
          if (!t.target.composing) {
            e.skinSearch = t.target.value;
          }
        }
      }
    }), e._v(" "), n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.isActiveSearch,
        expression: "!isActiveSearch"
      }],
      staticClass: "search icon"
    }), e._v(" "), n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.isActiveSearch,
        expression: "isActiveSearch"
      }],
      staticClass: "notched circle loading icon"
    })])])])]), e._v(" "), e.bannedFromSkins() ? n("div", {}, [n("h2", {
      staticStyle: {
        color: "#fff"
      }
    }, [e._v(e._s(e.$t("skins.banned")))])]) : e._e(), e._v(" "), e.skins.images.length ? n("div", {
      staticClass: "ui six stackable cards",
      attrs: {
        id: "skins-cards"
      }
    }, [e._l(e.skins.visible_images, function (t) {
      return n("div", {
        staticClass: "card",
        attrs: {
          "data-skin-id": t.id
        }
      }, [n("div", {
        staticClass: "image"
      }, [n("div", {
        staticClass: "skin-label vote-number"
      }, [n("div", {
        staticClass: "floating ui red label",
        attrs: {
          id: "vote-for-" + t.id
        }
      }, [e._v(e._s(t.votes))])]), e._v(" "), n("img", {
        staticClass: "ui circular image",
        attrs: {
          src: "/agar.rs/assets/images/" + e.skinLink(t.skin_name, t.safe)
        },
        on: {
          click: function (n) {
            e.chooseSkin(t.skin_name);
          }
        }
      }), e._v(" "), e.am_logged_in ? n("div", {
        class: t.me == 1 ? "vote-skin" : "vote vote-skin",
        attrs: {
          id: "heart-for-" + t.id
        },
        on: {
          click: function (n) {
            e.voteSkin(t.id, t.skin_name);
          }
        }
      }, [n("i", {
        staticClass: "heart icon"
      })]) : e._e()]), e._v(" "), n("div", {
        staticClass: "ui bottom attached button chose-skin",
        on: {
          click: function (n) {
            e.chooseSkin(t.skin_name);
          }
        }
      }, [n("i", {
        staticClass: "add icon"
      }), e._v("\n                    " + e._s(t.skin_name) + "\n                ")])]);
    }), e._v(" "), n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.isLoadingNew,
        expression: "isLoadingNew"
      }],
      staticClass: "huge notched circle loading icon"
    })], 2) : n("div", {
      staticClass: "no-skins"
    }, [n("h2", [e._v(e._s(e.$t("skins.not_found")))])])]), e._v(" "), n("div", {
      staticClass: "ui basic modal",
      attrs: {
        id: "upload-skin-modal"
      }
    }, [n("form", {
      staticClass: "ui form"
    }, [n("div", {
      staticClass: "ui stackable grid"
    }, [n("div", {
      staticClass: "ten wide column"
    }, [n("div", {
      staticClass: "upload-item"
    }, [n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.image,
        expression: "!image"
      }],
      staticClass: "skin-photo-upload"
    }, [n("label", {
      staticClass: "upload-btn"
    }, [n("input", {
      attrs: {
        id: "imageFile",
        type: "file"
      }
    }), e._v(" "), n("span", [e._v(" " + e._s(e.$t("skins.find_skin")))])]), e._v(" "), n("p", [e._v("\n                                " + e._s(e.$t("skins.allowed")) + " .png, .jpg, .jpeg\n                            ")]), e._v(" "), n("p", [e._v("\n                                " + e._s(e.$t("skins.max_size")) + " 2mb\n                            ")]), e._v(" "), n("p", [e._v("\n                                " + e._s(e.$t("skins.min_size")) + "\n                            ")])]), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.image,
        expression: "image"
      }],
      staticClass: "skin-photo-upload",
      attrs: {
        id: "uploadd"
      }
    }, [n("button", {
      staticClass: "remove-uploaded-photo",
      attrs: {
        type: "button"
      },
      on: {
        click: e.removeImage
      }
    }, [n("i", {
      staticClass: "remove icon"
    })])])])]), e._v(" "), n("div", {
      staticClass: "six wide column"
    }, [e.private ? e._e() : n("div", {
      staticClass: "upload-item"
    }, [n("h4", [e._v(e._s(e.$t("skins.skin_name")) + ":")]), e._v(" "), n("div", {
      staticClass: "field"
    }, [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: e.skins.skin_name,
        expression: "skins.skin_name",
        modifiers: {
          trim: true
        }
      }],
      attrs: {
        type: "text",
        maxlength: "15"
      },
      domProps: {
        value: e.skins.skin_name
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.skins.skin_name = t.target.value.trim();
          }
        },
        blur: function (t) {
          e.$forceUpdate();
        }
      }
    })])]), e._v(" "), n("br"), e._v(" "), n("div", {
      staticClass: "upload-item"
    }, [n("h4", [e._v(e._s(e.$t("new_21_09.additional_info")) + ":")]), e._v(" "), n("div", {
      staticClass: "field"
    }, [n("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: e.skins.additional_info,
        expression: "skins.additional_info",
        modifiers: {
          trim: true
        }
      }],
      attrs: {
        rows: "2"
      },
      domProps: {
        value: e.skins.additional_info
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.skins.additional_info = t.target.value.trim();
          }
        },
        blur: function (t) {
          e.$forceUpdate();
        }
      }
    })])]), e._v(" "), n("p", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.msg_error != "",
        expression: "msg_error != ''"
      }],
      staticClass: "error",
      domProps: {
        innerHTML: e._s(e.msg_error)
      }
    }), e._v(" "), n("p", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.success,
        expression: "success"
      }],
      staticClass: "success",
      staticStyle: {
        color: "forestgreen"
      }
    }, [e._v(e._s(e.$t("skins.skin_added")))]), e._v(" "), n("br"), e._v(" "), e.am_logged_in ? n("div", {
      staticClass: "ui toggle checkbox"
    }, [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.private,
        expression: "private"
      }],
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(e.private) ? e._i(e.private, null) > -1 : e.private
      },
      on: {
        __c: function (t) {
          var n = e.private;
          var i = t.target;
          var o = !!i.checked;
          if (Array.isArray(n)) {
            var a = e._i(n, null);
            if (i.checked) {
              if (a < 0) {
                e.private = n.concat([null]);
              }
            } else if (a > -1) {
              e.private = n.slice(0, a).concat(n.slice(a + 1));
            }
          } else {
            e.private = o;
          }
        }
      }
    }), e._v(" "), n("label", {
      staticStyle: {
        color: "#fff"
      }
    }, [e._v("\n                            " + e._s(e.$t("logged.private_skin")) + "\n                            "), n("span", {
      attrs: {
        "data-tooltip": e.$t("logged.private_skin_desc"),
        "data-inverted": ""
      }
    }, [n("i", {
      staticClass: "help circle icon"
    })])])]) : e._e(), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), e._m(1), e._v(" "), n("div", {
      staticClass: "ui teal button",
      on: {
        "~click": function (t) {
          e.uploadSkinFunc();
        }
      }
    }, [e._v("\n                        " + e._s(e.$t("skins.add_skin")) + "\n\n                    ")]), e._v(" "), n("br"), e._v(" "), n("p", {
      staticStyle: {
        color: "darkorange",
        "margin-top": "10px"
      }
    }, [e._v("\n                        " + e._s(e.$t("new_21_09.skin_aprove")) + "\n                        "), n("span", {
      domProps: {
        innerHTML: e._s(e.$t("new_21_09.skin_rules"))
      }
    }), e._v(" "), n("br"), e._v("\n                        " + e._s(e.$t("skins.not_allowed_skins")) + "\n                    ")])])])])])], 1);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "hidden content"
    }, [n("i", {
      staticClass: "right arrow icon"
    })]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      attrs: {
        id: "showAddingSkin"
      }
    }, [n("img", {
      attrs: {
        src: "/agar.rs/assets/images/songadd.svg"
      }
    })]);
  }]
};