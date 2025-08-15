module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "darkLightOk"
    }, [n("div", {
      staticClass: "ui main begin"
    }, [n("div", {
      staticClass: "overlays",
      attrs: {
        id: "overlays"
      }
    }, [e.am_logged_in ? n("div", [e.noHeadTailVar ? e._e() : n("navigation-logged")], 1) : n("div", [e.noHeadTailVar ? e._e() : n("navigation")], 1), e._v(" "), n("transition", {
      attrs: {
        name: "slide",
        "enter-active-class": e.enterActiveClass
      }
    }, [n("router-view", {
      key: e.$route.fullPath,
      staticClass: "view",
      attrs: {
        am_i_logged: e.fastLoginCheck
      }
    })], 1), e._v(" "), e.backgroundCanvas && !e.lowGraphics ? n("canvas", {
      attrs: {
        id: "nokey"
      }
    }) : e._e()], 1)]), e._v(" "), n("chat-box", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.hidden_chat,
        expression: "!hidden_chat"
      }]
    }), e._v(" "), n("jukebox", {
      attrs: {
        playedrun: e.playedrun,
        muted: e.muted
      },
      on: {
        jukebox: e.musicEmit
      }
    }), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.musicActive,
        expression: "musicActive"
      }],
      staticClass: "music-player"
    }, [n("div", {
      staticClass: "music-player-overlay",
      on: {
        click: function (t) {
          e.mute();
        }
      }
    }, [n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.muted,
        expression: "muted"
      }],
      staticClass: "play icon"
    }), e._v(" "), n("i", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.muted,
        expression: "!muted"
      }],
      staticClass: "mute icon"
    })])]), e._v(" "), n("div", {
      staticClass: "ui custom popup bottom right transition hidden"
    }, [e._v("\n        " + e._s(e.musicData.name) + "\n    ")]), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.musicActive && !e.playedrun && !e.on_mobile,
        expression: "!musicActive && !playedrun && !on_mobile"
      }],
      staticClass: "music-player2",
      attrs: {
        "data-tooltip": e.$t("mp.play_playlist"),
        "data-inverted": "",
        "data-position": "bottom right"
      },
      on: {
        click: function (t) {
          e.playedrun = true;
        }
      }
    }, [e._m(0)]), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.on_mobile,
        expression: "on_mobile"
      }],
      staticClass: "in-game-options"
    }, [n("i", {
      staticClass: "ui large inverted home icon",
      on: {
        click: function (t) {
          e.gotoMenu();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "ui large inverted circle wechat icon",
      on: {
        click: function (t) {
          e.goHideChat();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "ui large inverted circle star icon",
      on: {
        click: function (t) {
          e.goNames();
        }
      }
    }), e._v(" "), n("i", {
      staticClass: "ui large inverted circle plus icon",
      attrs: {
        onclick: "zoomInGame(1)"
      }
    }), e._v(" "), n("i", {
      staticClass: "ui large inverted circle minus icon",
      attrs: {
        onclick: "zoomInGame(-1)"
      }
    })]), e._v(" "), n("div", {
      attrs: {
        id: "restart-timer"
      }
    }), e._v(" "), n("more-settings"), e._v(" "), n("div", {
      staticClass: "ui mini modal",
      attrs: {
        id: "tutorial-modal"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "content"
    }, [e._m(1), e._v(" "), n("p", [e._v(e._s(e.$t("home.press")) + " "), n("strong", [e._v("SPACE")]), e._v(" " + e._s(e.$t("home.to_split")))]), e._v(" "), n("p", [e._v(e._s(e.$t("home.press")) + " "), n("strong", [e._v("W")]), e._v(" " + e._s(e.$t("home.to_eject")))])])]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e.minionServer ? n("div", {
      attrs: {
        id: "minion-indicator"
      }
    }, [e._v("\n        To change control to/from the bot: Q\n    ")]) : e._e()], 1);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "music-player-overlay2"
    }, [n("i", {
      staticClass: "ui large inverted circle play icon"
    })]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("video", {
      attrs: {
        width: "400",
        controls: "",
        preload: "none"
      }
    }, [n("source", {
      attrs: {
        src: "/agar.rs/assets/tutorial.mp4",
        type: "video/mp4"
      }
    }), e._v("\n                Your browser does not support HTML5 video.\n            ")]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui basic small opera modal",
      attrs: {
        id: "opera-modal"
      }
    }, [n("div", {
      staticClass: "ui icon header"
    }, [n("i", {
      staticClass: "eye icon"
    }), e._v("\n            Warning: IP address suspended!\n        ")]), e._v(" "), n("div", {
      staticClass: "content text-center"
    }, [n("p", [e._v("\n                An illegal traffic was detected from this IP address or this computer. "), n("br"), e._v("\n                You will be contacted by the authorities soon.\n            ")]), e._v(" "), n("br")])]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui modal",
      attrs: {
        id: "android-modal"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "content"
    }, [n("h3", [e._v("Playing via mobile? "), n("br"), e._v("\n                Try the android game for Agar Balkan.")]), e._v(" "), n("p", [e._v("Download from google play store:")])]), e._v(" "), n("div", {
      staticClass: "actions"
    }, [n("a", {
      staticClass: "ui positive right labeled icon button",
      attrs: {
        target: "_blank",
        href: "#"
      }
    }, [e._v("Preuzmi"), n("i", {
      staticClass: "checkmark icon"
    })]), e._v(" "), n("div", {
      staticClass: "ui black deny button"
    }, [e._v("Close")])])]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "connectingToServer"
    }, [e._v("\n        Connecting to server... "), n("br"), e._v(" "), n("p", [e._v("If you are waiting a long time, check your internet connection or try to connect to another server.")])]);
  }]
};