function i(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = Object.assign || function (e) {
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
var a = require("./3.js");
var s = i(require("./5.js"));
var r = i(require("./4.js"));
exports.default = {
  components: {
    Spinner: s.default,
    VueAds: r.default
  },
  data: function () {
    return {
      loading: true,
      top_skins: false,
      my_skins: false,
      skins: new Form({
        images: [],
        visible_images: [],
        my_liked: [],
        skin_name: "",
        additional_info: ""
      }),
      skinSearch: "",
      isActiveSearch: false,
      scrollCalled: 0,
      isLoadingNew: false,
      image: false,
      imgFile: null,
      msg_error: "",
      success_uploaded: "",
      success: false,
      myCrop: null,
      private: false
    };
  },
  computed: o({}, (0, a.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    },
    role: function (e) {
      return e.main.role;
    }
  })),
  mounted: function () {
    var e = this;
    if (this.$route.hash == "#private") {
      $("#upload-skin-modal").modal("show");
      this.private = true;
    }
    $(document).ready(function () {
      function t(t) {
        if (t.files && t.files[0]) {
          var n = new FileReader();
          n.onload = function (t) {
            e.image = true;
            e.myCrop.croppie("bind", {
              url: t.target.result
            }).then(function () {
              $("#upload-skin-modal").modal("refresh");
            });
          };
          n.readAsDataURL(t.files[0]);
        } else {
          console.log("Sorry - you're browser doesn't support the FileReader API");
        }
      }
      $.getScript("/agar.rs/assets/js/croppie.min.js", function (t, n, i) {
        e.myCrop = $("#uploadd").croppie({
          viewport: {
            width: 400,
            height: 400,
            type: "circle"
          },
          format: "png",
          boundary: {
            width: 450,
            height: 400
          }
        });
      });
      $("#imageFile").on("change", function () {
        t(this);
      });
    });
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  },
  created: function () {
    document.title = "Skins - Agar Balkan";
    this.getMyVotes();
    this.getSkinsDB();
  },
  updated: function () {
    var e = this;
    $("#skins-cards").scroll(function (t) {
      if (e.scrollCalled == 0 && $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && e.skinSearch.length < 3 && !e.top_skins && !e.my_skins) {
        e.scrollCalled = 1;
        e.getSkinsDBNext();
      }
    });
  },
  methods: {
    getMyVotes: function () {
      if (localStorage.token_header && localStorage.token_log) {
        var e = this;
        var t = {
          user_id: localStorage.user_id,
          token_header: localStorage.token_header,
          token_log: localStorage.token_log
        };
        this.skins.get_json(base_url2 + "Skins/myLikedSkins.json", t).then(function (t) {
          if (t.status == 1) {
            e.skins.my_liked = t.list;
          }
        }, function (e) {});
      }
    },
    getSkinsDB: function () {
      var e = this;
      this.skins.get_json(base_url2 + "Skins/getSkinList.json").then(function (t) {
        e.skins.images = t.list;
        for (var n in e.skins.images) {
          e.skins.images[n].me = 0;
        }
        e.skins.visible_images = e.skins.images;
        e.loading = false;
      }, function (e) {});
    },
    getTopSkins: function () {
      this.top_skins = true;
      this.my_skins = false;
      this.isLoadingNew = true;
      this.skins.visible_images = [];
      var e = this;
      this.skins.get_json(base_url2 + "Skins/topRatedSkinList.json").then(function (t) {
        e.skins.visible_images = t.top;
        e.isLoadingNew = false;
        e.loading = false;
      }, function (e) {});
    },
    myTopSkins: function () {
      this.skins.visible_images = this.skins.my_liked.slice(0);
      this.my_skins = true;
      this.top_skins = true;
    },
    returnSkins: function () {
      this.top_skins = false;
      this.skins.visible_images = this.skins.images;
    },
    getSkinsDBNext: function () {
      var e = this;
      this.isLoadingNew = true;
      var t = {};
      t.position = $(".card").last().attr("data-skin-id");
      this.skins.get_json(base_url2 + "Skins/getSkinListNext.json", t).then(function (t) {
        e.skins.visible_images = e.skins.visible_images.concat(t.list);
        for (var n in e.skins.visible_images) {
          if (e.skins.visible_images[n].me == undefined) {
            e.skins.visible_images[n].me = 0;
          }
        }
        e.scrollCalled = 0;
        e.isLoadingNew = false;
      }, function (e) {});
    },
    skinSearchDB: function () {
      var e = this;
      if (this.skinSearch.length == 0) {
        this.skins.visible_images = this.skins.images.slice();
      }
      if (this.skinSearch.length > 2) {
        this.isActiveSearch = true;
        var t = {
          term: this.skinSearch
        };
        this.skins.visible_images = [];
        this.skins.get_json(base_url2 + "Skins/searchSkin.json", t).then(function (t) {
          if (t.status == 1) {
            e.skins.visible_images = t.list.slice();
            for (var n in e.skins.visible_images) {
              if (e.skins.visible_images[n].me == undefined) {
                e.skins.visible_images[n].me = 0;
              }
            }
            for (var i in e.skins.my_liked);
            e.isActiveSearch = false;
          }
        }, function (e) {});
      }
    },
    chooseSkin: function (e) {
      this.$store.dispatch("setGlobalSkinName", {
        name: e
      });
      this.$store.commit("ACTIVE_SKIN", e);
      this.$router.push("/agar.rs/");
    },
    voteSkin: function (e, t) {
      var n = this;
      var i = this;
      var o = {
        user_id: localStorage.user_id,
        token_header: localStorage.token_header,
        token_log: localStorage.token_log,
        skin_id: e
      };
      $("#heart-for-" + e).toggleClass("vote");
      this.skins.get_json(base_url2 + "Skins/voteSkin.json", o).then(function (o) {
        if (o.status == 1) {
          var a = n.findIndexById(e);
          if (o.vote == 1) {
            if (Number($("#vote-for-" + e).text()) == undefined) {
              $("#vote-for-" + e).text("1");
            } else {
              n.skins.my_liked.push({
                skin_name: t,
                id: e,
                me: 1
              });
              if (a != -1) {
                n.skins[a].me = 1;
                n.skins[a].votes = String(Number(n.skins[a].votes) + 1);
              }
            }
          } else {
            $("#vote-for-" + e).text(Number($("#vote-for-" + e).text()) - 1);
            for (var s = 0; s < i.skins.my_liked.length; s++) {
              if (n.skins.my_liked[s].id == e) {
                n.skins.my_liked.splice(s, 1);
              }
            }
            n.skins[a].me = 0;
            n.skins[a].votes = String(Number(n.skins[a].votes) - 1);
            console.log("unlinile ", n.skins[a].votes);
          }
        }
      }, function (e) {
        console.log("error", e);
      });
    },
    findIndexById: function (e) {
      for (var t in this.skins) {
        if (this.skins[t].id == e) {
          return t;
        }
      }
      return -1;
    },
    openUploadSkinModal: function () {
      $("#upload-skin-modal").modal("show");
    },
    onFileChange: function (e) {
      var t = e.target.files || e.dataTransfer.files;
      if (t.length) {
        this.imgFile = t[0];
      }
    },
    removeImage: function (e) {
      this.image = false;
      this.myCrop = null;
      self.myCrop = $("#uploadd").croppie();
      window.location.reload();
    },
    skinPreview: function (e) {
      this.$router.replace("/agar.rs/skin/" + e);
    },
    uploadSkinFunc: function () {
      var e = this;
      if (this.private == 1) {
        var t = {
          user_id: localStorage.user_id,
          token_header: localStorage.token_header,
          token_log: localStorage.token_log,
          additional_info: this.skins.additional_info
        };
        $("#showAddingSkin").show();
        this.myCrop.croppie("result", {
          type: "blob",
          size: "{400, 400}"
        }).then(function (n) {
          var i = new File([n], "priv.png", {
            type: "image/png",
            lastModified: Date.now()
          });
          var o = JSON.stringify(t);
          var a = new FormData();
          a.append("skin_json", o);
          a.append("userfile", i);
          e.skins.get_json(base_url2 + "Skins/addPrivateSkin.json", a, 1).then(function (t) {
            $("#showAddingSkin").hide();
            if (t.status == 1) {
              e.success = true;
              e.skins.skin_name = "";
              e.image = "";
              setTimeout(function () {
                e.success = false;
              }, 5000);
            } else {
              e.msg_error = t.message;
            }
          }, function (e) {
            console.log("error", e);
          });
        });
      } else if ((t = {
        name: this.skins.skin_name,
        additional_info: this.skins.additional_info
      }).name.length >= 3 && t.name.length <= 15) {
        $("#showAddingSkin").show();
        var n = {};
        this.myCrop.croppie("result", {
          type: "blob",
          size: "{400, 400}"
        }).then(function (i) {
          var o = new File([i], "testt.png", {
            type: "image/png",
            lastModified: Date.now()
          });
          n.image = o;
          var a = JSON.stringify(t);
          var s = new FormData();
          s.append("skin_json", a);
          s.append("userfile", o);
          e.skins.get_json(base_url2 + "Skins/addSkin.json", s, 1).then(function (t) {
            $("#showAddingSkin").hide();
            if (t.status == 1) {
              e.success = true;
              e.skins.skin_name = "";
              e.image = "";
              setTimeout(function () {
                e.success = false;
              }, 5000);
            } else {
              e.msg_error = t.message;
            }
          }, function (e) {
            console.log("error", e);
          });
        });
      } else {
        e.msg_error = "Error. The length of the skin name must be between 3 and 15 characters.";
      }
    },
    skinLink: function (e, t) {
      if (Number(t)) {
        return "skins_safe/" + e + ".png";
      } else {
        return "skins/" + e + ".png";
      }
    },
    bannedFromSkins: function () {
      return localStorage.bfs == "true";
    }
  }
};