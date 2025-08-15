(function (e, n) {
  n(exports);
})(0, function (e) {
  "use strict";

  function t(e) {
    var t = e.replace(i, "$1");
    if (t.includes(";")) {
      var n = t.split(";");
      t = n[1].includes("%") ? ("http://youtube.com" + decodeURIComponent(n[1])).replace(i, "$1") : n[0];
    } else if (t.includes("#")) {
      t = t.split("#")[0];
    }
    return t;
  }
  function n(e = "") {
    var t = e.match(o);
    if (!t) {
      return 0;
    }
    var n = t[0];
    var i = t[1];
    var a = t[2];
    if (a !== undefined) {
      a = parseInt(a, 10);
      i = parseInt(i, 10);
    } else if (n.includes("m")) {
      i = parseInt(i, 10);
      a = 0;
    } else {
      a = parseInt(i, 10);
      i = 0;
    }
    return a + i * 60;
  }
  String.prototype.includes ||= function () {
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
  var i = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
  var o = /t=(\d+)[ms]?(\d+)?s?/;
  var a = {
    scripts: [],
    events: {},
    run: function () {
      var e = this;
      this.scripts.forEach(function (t) {
        t(e.YT);
      });
      this.scripts = [];
    },
    register: function (e) {
      var t = this;
      if (this.YT) {
        this.Vue.nextTick(function () {
          e(t.YT);
        });
      } else {
        this.scripts.push(e);
      }
    }
  };
  var s = 0;
  var r = {
    props: {
      playerHeight: {
        type: [String, Number],
        default: "390"
      },
      playerWidth: {
        type: [String, Number],
        default: "640"
      },
      playerVars: {
        type: Object,
        default: function () {
          return {
            autoplay: 0,
            time: 0
          };
        }
      },
      videoId: {
        type: String
      },
      mute: {
        type: Boolean,
        default: false
      }
    },
    render: function (e) {
      return e("div", [e("div", {
        attrs: {
          id: this.elementId
        }
      })]);
    },
    template: "<div><div :id=\"elementId\"></div></div>",
    watch: {
      playerWidth: "setSize",
      playerHeight: "setSize",
      videoId: "update",
      mute: "setMute"
    },
    data: function () {
      s += 1;
      return {
        elementId: "youtube-player-" + s,
        player: {}
      };
    },
    methods: {
      setSize: function () {
        this.player.setSize(this.playerWidth, this.playerHeight);
      },
      setMute: function (e) {
        if (e) {
          this.player.mute();
        } else {
          this.player.unMute();
        }
      },
      update: function (e) {
        var t = (this.playerVars.autoplay ? "load" : "cue") + "VideoById";
        if (this.player.hasOwnProperty(t)) {
          this.player[t](e);
        } else {
          setTimeout(function () {
            this.update(e);
          }.bind(this), 100);
        }
      }
    },
    mounted: function () {
      var e = this;
      a.register(function (t) {
        var n = e;
        var i = n.playerHeight;
        var o = n.playerWidth;
        var s = n.playerVars;
        var r = n.videoId;
        e.player = new t.Player(e.elementId, {
          height: i,
          width: o,
          playerVars: s,
          videoId: r,
          events: {
            onReady: function (t) {
              e.setMute(e.mute);
              e.$emit("ready", t.target);
            },
            onStateChange: function (t) {
              if (t.data !== -1) {
                e.$emit(a.events[t.data], t.target);
              }
            },
            onError: function (t) {
              e.$emit("error", t.target);
            }
          }
        });
      });
    },
    beforeDestroy: function () {
      if (this.player !== null && this.player.destroy) {
        this.player.destroy();
      }
      delete this.player;
    }
  };
  e.YouTubePlayer = r;
  e.getIdFromURL = t;
  e.getTimeFromURL = n;
  e.default = function (e, i = {
    global: true
  }) {
    a.Vue = e;
    r.ready = r.mounted;
    if (i.global) {
      e.component("youtube", r);
    }
    e.prototype.$youtube = {
      getIdFromURL: t,
      getTimeFromURL: n
    };
    var o = document.createElement("script");
    o.src = "https://www.youtube.com/player_api";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(o, s);
    window.onYouTubeIframeAPIReady = function () {
      a.YT = YT;
      var t = YT.PlayerState;
      a.events[t.ENDED] = "ended";
      a.events[t.PLAYING] = "playing";
      a.events[t.PAUSED] = "paused";
      a.events[t.BUFFERING] = "buffering";
      a.events[t.CUED] = "cued";
      e.nextTick(function () {
        a.run();
      });
    };
  };
  Object.defineProperty(e, "__esModule", {
    value: true
  });
});