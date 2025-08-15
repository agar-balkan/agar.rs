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
      form: new Form({})
    };
  },
  computed: o({}, (0, a.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    },
    role: function (e) {
      return e.main.role;
    },
    hat: function (e) {
      return e.main.hat;
    },
    coins: function (e) {
      return e.main.coins;
    },
    hats: function (e) {
      return e.main.hatList;
    }
  }), {
    sortedArray: function () {
      return this.hats.list.sort(function (e, t) {
        if (e.is_my === t.is_my) {
          return e.price - t.price;
        } else if (e.is_my) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }),
  mounted: function () {
    $(".ui.card .image").dimmer({
      on: "hover"
    });
  },
  created: function () {
    document.title = "Hats - Agar Balkan";
    this.getHats();
  },
  updated: function () {
    $(".ui.card .image").dimmer({
      on: "hover"
    });
  },
  methods: {
    byPrice: function (e) {
      return e.slice().sort(function (e, t) {
        if (e.is_my === t.is_my) {
          return e.price - t.price;
        } else if (e.is_my) {
          return -1;
        } else {
          return 1;
        }
      });
    },
    buyHat: function (e) {
      var t = this;
      var n = "";
      var i = "";
      if (Number(this.coins) <= Number(e.price)) {
        n = "error";
        i = "You don't have enough gold coins.";
        swal({
          type: n,
          text: i,
          imageUrl: "/agar.rs/assets/images/hats/" + e.link + ".webp",
          imageAlt: e.name,
          showCloseButton: true,
          showConfirmButton: false,
          customClass: "buyHat"
        });
        return 0;
      }
      if (localStorage.token_header && localStorage.token_log) {
        var o = this;
        var a = {
          id: e.id,
          token_header: localStorage.token_header,
          token_log: localStorage.token_log
        };
        swal({
          title: "Are you sure you want to buy a hat?",
          imageAlt: e.name,
          imageUrl: "/agar.rs/assets/images/hats/" + e.link + ".webp",
          text: "Name: " + e.name + " | Price: " + e.price,
          showCancelButton: true,
          imageClass: "hat-in-swal",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Da",
          cancelButtonText: "Ne"
        }).then(function (s) {
          if (s.value) {
            swal.showLoading();
            t.form.get_json(base_url2 + "Home/buyHat.json", a).then(function (t) {
              if (t.status == 1) {
                swal.hideLoading();
                swal.close();
                n = "success";
                i = "Uspešno ste kupili kapu";
                for (var s = 0; s < o.hats.list.length; s++) {
                  if (a.id == o.hats.list[s].id) {
                    o.hats.list[s].is_my = true;
                  }
                }
                $(".ui.card .image").dimmer({
                  on: "hover"
                });
                var r = Number(o.coins) - Number(e.price);
                o.$store.dispatch("setCoins", {
                  coins: r
                });
              } else {
                n = "error";
                i = t.msg;
              }
              swal({
                type: n,
                text: i,
                imageUrl: "/agar.rs/assets/images/hats/" + e.link + ".webp",
                imageAlt: e.name,
                showCloseButton: true,
                showConfirmButton: false,
                customClass: "buyHat",
                onClose: function () {
                  if (n == "success") {
                    o.chooseHat(e.secret);
                  }
                }
              });
            }, function (e) {});
          }
        });
      }
    },
    getHats: function () {
      var e = this;
      var t = {};
      if (localStorage.token_header && localStorage.token_log) {
        t = {
          token_header: localStorage.token_header,
          token_log: localStorage.token_log
        };
      }
      this.form.get_json(base_url2 + "Home/getHatlist.json", t).then(function (t) {
        var n = {
          list: [],
          my: []
        };
        n.list = t.hats;
        n.my = t.my;
        if (t.my != undefined) {
          for (var i = 0; i < n.my.length; i++) {
            for (var o = 0; o < n.list.length; o++) {
              if (n.list[o].id == n.my[i].hat_id) {
                n.list[o].is_my = true;
              }
            }
          }
        }
        e.$store.dispatch("updateHatList", {
          list: n.list,
          my: n.my
        });
        e.loading = false;
      }, function (e) {});
    },
    chooseHat: function (e) {
      var t = atob(e);
      this.$store.commit("CHANGE_HAT", {
        name: t
      });
      this.$router.push("/agar.rs/");
    }
  }
};