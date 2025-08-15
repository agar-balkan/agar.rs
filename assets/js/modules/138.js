module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui modal",
      attrs: {
        id: "music-modal"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n        " + e._s(e.$t("mp.music")) + "\n        "), !e.musicActive && e.playlist.length ? n("button", {
      staticClass: "ui teal button",
      attrs: {
        "data-tooltip": e.$t("mp.lag")
      },
      on: {
        click: function (t) {
          e.startMusic();
        }
      }
    }, [n("span", [e._v(e._s(e.$t("mp.play")))])]) : e._e(), e._v(" "), e.musicActive ? n("button", {
      staticClass: "ui teal button",
      on: {
        click: function (t) {
          e.startMusic();
        }
      }
    }, [e.musicActive ? n("span", [e._v(e._s(e.$t("mp.turn_off")))]) : e._e()]) : e._e()]), e._v(" "), n("div", {
      staticClass: "image content"
    }, [n("div", {
      staticClass: "ui medium  left floated image"
    }, [n("img", {
      attrs: {
        src: e.songThumbnail
      }
    })]), e._v(" "), n("div", {
      staticClass: "description"
    }, [n("div", {
      staticClass: "ui header"
    }, [e._v(e._s(e.$t("mp.share_and_listen")))]), e._v(" "), n("div", {
      staticClass: "ui yt-player"
    }, [e.musicActive && e.playlist.length ? n("youtube", {
      attrs: {
        "video-id": e.youtubeIDplaying,
        mute: e.muted,
        "player-width": "0",
        "player-height": "0",
        "player-vars": {
          autoplay: 1
        }
      },
      on: {
        ready: function (t) {
          e.ready();
        },
        ended: function (t) {
          e.switchSong();
        },
        error: function (t) {
          e.switchSong();
        }
      }
    }) : e._e(), e._v(" "), n("div", {
      staticClass: "two columns grid"
    }, [n("div", {
      staticClass: "colum"
    }, [n("div", {
      staticClass: "ui fluid action input"
    }, [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.youtubeID,
        expression: "youtubeID"
      }],
      attrs: {
        id: "youtubeID",
        type: "text",
        placeholder: e.$t("mp.paste_yt")
      },
      domProps: {
        value: e.youtubeID
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.youtubeID = t.target.value;
          }
        }
      }
    }), e._v(" "), n("button", {
      staticClass: "ui blue right labeled icon button",
      on: {
        click: function (t) {
          e.sendSong();
        }
      }
    }, [n("i", {
      staticClass: "add icon"
    }), e._v("\n                                " + e._s(e.$t("mp.add")) + "\n                            ")])])])]), e._v(" "), n("div", {
      staticClass: "clearfix"
    }), e._v(" "), n("div", {
      staticClass: "ui divider"
    }), e._v(" "), n("p", {
      staticStyle: {
        color: "red",
        position: "relative",
        top: "15px",
        display: "none"
      },
      attrs: {
        id: "song-exist"
      }
    }, [e._v(e._s(e.$t("mp.song_exist")))]), e._v(" "), e.playlist.length ? n("div", {
      staticClass: "playlist ui divided selection list"
    }, [n("br"), e._v(" "), e._m(0), e._v(" "), n("transition-group", {
      attrs: {
        name: "list"
      }
    }, e._l(e.playlist, function (t, i) {
      return n("div", {
        key: i,
        staticClass: "item",
        staticStyle: {
          "white-space": "nowrap"
        },
        on: {
          click: function (n) {
            e.changeSong(t.youtube_id);
          }
        }
      }, [n("div", {
        staticClass: "ui horizontal  circular labels"
      }, [n("i", {
        staticClass: "circular inverted green thumbs up icon",
        on: {
          "~click": function (n) {
            e.thumb("up", t);
          }
        }
      }), e._v(" "), n("p", {
        staticClass: "ui yellow circular label"
      }, [e._v(e._s(t.num_of_votes))]), e._v(" "), n("i", {
        staticClass: "circular inverted red thumbs down icon",
        on: {
          "~click": function (n) {
            e.thumb("down", t);
          }
        }
      })]), e._v(" "), n("span", {
        staticStyle: {
          cursor: "pointer"
        }
      }, [e._v(e._s(t.name))]), e._v(" "), e.am_logged_in && e.role >= 2 ? n("i", {
        staticClass: "circular inverted red trash icon",
        staticStyle: {
          position: "absolute",
          right: "0"
        },
        on: {
          click: function (n) {
            e.deleteSong(t);
          }
        }
      }) : e._e()]);
    }))], 1) : n("div", {
      staticClass: "playlist"
    }, [n("br"), e._v(" "), e.playlistError ? n("div", [e._v(e._s(e.$t("mp.error")))]) : e._e(), e._v("\n                    " + e._s(e.$t("mp.list_empty")) + " "), n("br"), e._v("\n                    " + e._s(e.$t("mp.copy_song_from_yt")) + "\n                ")])], 1)])])]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      attrs: {
        id: "showAddingSong"
      }
    }, [n("img", {
      attrs: {
        src: "/agar.rs/assets/images/songadd.svg"
      }
    })]);
  }]
};