module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", [n("div", {
      class: [e.oldChat ? "oldChat" : "chat", e.theme + " "]
    }, [n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.oldChat,
        expression: "!oldChat"
      }],
      staticClass: "chat-header"
    }, [n("div", {
      staticClass: "block-user",
      staticStyle: {
        display: "none"
      }
    }, [e._v("\n              " + e._s(e.$t("home.block")) + " "), n("span", {
      staticClass: "block-name"
    }, [e._v(" ?")]), e._v(" "), n("button", {
      staticClass: "ui right floated small green button",
      attrs: {
        type: "button"
      },
      on: {
        click: function (t) {
          e.block();
        }
      }
    }, [e._v(e._s(e.$t("home.yes")))]), e._v(" "), n("button", {
      staticClass: "ui right floated small red button",
      attrs: {
        type: "button"
      },
      on: {
        click: function (t) {
          e.cancelBlock();
        }
      }
    }, [e._v(e._s(e.$t("home.no")))])]), e._v(" "), e.minimized ? n("span", [n("strong", {
      staticStyle: {
        color: "#fff"
      }
    }, [e._v("Chat")])]) : n("div", {
      staticClass: "chat-left-actions"
    }, [e.color != null && e.color != "" ? n("i", {
      staticClass: "large circle icon",
      style: "color:" + e.color,
      on: {
        click: function (t) {
          e.pickColor();
        }
      }
    }) : e._e(), e._v(" "), e.color != null && e.color != "" ? n("input", {
      attrs: {
        id: "chat-color-picker",
        type: "color"
      },
      domProps: {
        value: e.color
      },
      on: {
        change: e.saveColor
      }
    }) : e._e(), e._v(" "), n("i", {
      staticClass: "circular inverted zoom out link icon cursor",
      on: {
        click: function (t) {
          e.zoomFont("out");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "circular inverted zoom link icon cursor",
      on: {
        click: function (t) {
          e.zoomFont("in");
        }
      }
    })]), e._v(" "), e.on_mobile ? e._e() : n("div", {
      staticClass: "chat-center-actions"
    }, [n("i", {
      staticClass: "circular inverted image outline link icon cursor",
      attrs: {
        title: e.$t("home.without_skins")
      },
      on: {
        click: function (t) {
          e.goSkinsShow();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "circular inverted eye slash outline link icon cursor",
      attrs: {
        title: e.$t("home.transparent")
      },
      on: {
        click: function (t) {
          e.goTransparent();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "circular inverted barcode link icon cursor",
      attrs: {
        title: e.$t("home.without_lines")
      },
      on: {
        click: function (t) {
          e.goLines();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "circular inverted expand arrows alternate link icon cursor",
      attrs: {
        title: e.$t("options.infinity_zoom")
      },
      on: {
        click: function (t) {
          e.goInfiniteScroll();
        }
      }
    })]), e._v(" "), n("div", {
      staticClass: "chat-right-actions"
    }, [n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.minimized,
        expression: "!minimized"
      }],
      staticClass: "circular inverted window minimize link icon cursor",
      on: {
        click: function (t) {
          e.minimize();
        }
      }
    }), e._v(" "), n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.minimized,
        expression: "minimized"
      }],
      staticClass: "circular window inverted maximize link icon cursor",
      on: {
        click: function (t) {
          e.maximize();
        }
      }
    })])]), e._v(" "), n("div", {
      staticStyle: {
        clear: "both"
      }
    }), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.oldChat,
        expression: "!oldChat"
      }],
      staticClass: "chat-body",
      style: "font-size:" + e.fontSize + "px"
    }), e._v(" "), n("div", {
      staticClass: "chat-footer"
    }, [n("div", {
      staticClass: "ui icon input",
      attrs: {
        id: "chat_textbox-wrap"
      }
    }, [n("input", {
      attrs: {
        type: "text",
        id: "chat_textbox",
        maxlength: "70",
        placeholder: e.$t("home.enter_to_chat")
      }
    }), e._v(" "), n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.oldChat,
        expression: "!oldChat"
      }],
      staticClass: "circular inverted marker link icon",
      on: {
        click: function (t) {
          e.sendLocation();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "circular inverted smile outline link icon cursor",
      on: {
        click: function (t) {
          e.emoji = !e.emoji;
        }
      }
    })])])]), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.emoji,
        expression: "emoji"
      }],
      attrs: {
        id: "emoji-list"
      }
    }, [n("div", {
      staticClass: "center"
    }, [n("i", {
      staticClass: "em em-stuck_out_tongue_closed_eyes",
      on: {
        click: function (t) {
          e.insertEmoji("x-p");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-poop",
      on: {
        click: function (t) {
          e.insertEmoji(":poop:");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-smiley",
      on: {
        click: function (t) {
          e.insertEmoji(":D");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-smile",
      on: {
        click: function (t) {
          e.insertEmoji("=D");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-blush",
      on: {
        click: function (t) {
          e.insertEmoji(":)");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-angry",
      on: {
        click: function (t) {
          e.insertEmoji(">:(");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-cry",
      on: {
        click: function (t) {
          e.insertEmoji(":'(");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-disappointed",
      on: {
        click: function (t) {
          e.insertEmoji(":(");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-expressionless",
      on: {
        click: function (t) {
          e.insertEmoji("-.-");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-flushed",
      on: {
        click: function (t) {
          e.insertEmoji("o.o");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-heart_eyes",
      on: {
        click: function (t) {
          e.insertEmoji("*.*");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-blue_heart",
      on: {
        click: function (t) {
          e.insertEmoji("❥");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-heart",
      on: {
        click: function (t) {
          e.insertEmoji("<3");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-joy",
      on: {
        click: function (t) {
          e.insertEmoji(":'D");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-kissing_closed_eyes",
      on: {
        click: function (t) {
          e.insertEmoji(":*");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-kissing_heart",
      on: {
        click: function (t) {
          e.insertEmoji(";*");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-robot_face",
      on: {
        click: function (t) {
          e.insertEmoji(":|]");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-neutral_face",
      on: {
        click: function (t) {
          e.insertEmoji(":|");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-open_mouth",
      on: {
        click: function (t) {
          e.insertEmoji(":O");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-no_mouth",
      on: {
        click: function (t) {
          e.insertEmoji(":-$");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-relaxed",
      on: {
        click: function (t) {
          e.insertEmoji(":'>");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-thumbsup",
      on: {
        click: function (t) {
          e.insertEmoji("(y)");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-thumbsdown",
      on: {
        click: function (t) {
          e.insertEmoji("(n)");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-sunglasses",
      on: {
        click: function (t) {
          e.insertEmoji("8)");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-smirk",
      on: {
        click: function (t) {
          e.insertEmoji(":>");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-wink",
      on: {
        click: function (t) {
          e.insertEmoji(";)");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-triumph",
      on: {
        click: function (t) {
          e.insertEmoji(":-<");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-stuck_out_tongue_winking_eye",
      on: {
        click: function (t) {
          e.insertEmoji(";p");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-stuck_out_tongue",
      on: {
        click: function (t) {
          e.insertEmoji(":p");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-confused",
      on: {
        click: function (t) {
          e.insertEmoji(":/");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-worried",
      on: {
        click: function (t) {
          e.insertEmoji(":-S");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-dizzy_face",
      on: {
        click: function (t) {
          e.insertEmoji("x.x");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-purple_heart",
      on: {
        click: function (t) {
          e.insertEmoji("❤");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-broken_heart",
      on: {
        click: function (t) {
          e.insertEmoji("</3");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-shark",
      on: {
        click: function (t) {
          e.insertEmoji("(^^^)");
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "em em-penguin",
      on: {
        click: function (t) {
          e.insertEmoji("<(\")");
        }
      }
    })])])]);
  },
  staticRenderFns: []
};