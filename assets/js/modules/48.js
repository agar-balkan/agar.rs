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
var o = i(require("./5.js"));
var a = i(require("./168.js"));
var s = i(require("./4.js"));
exports.default = {
  components: {
    Spinner: o.default,
    Datepicker: a.default,
    VueAds: s.default
  },
  data: function () {
    return {
      loading: true,
      list: {
        ffa1: [],
        mn2: [],
        im3: [],
        ffa4: [],
        ex5: [],
        rnbw6: [],
        vm7: [],
        oe8: [],
        pffa1: [],
        pmn2: [],
        pim3: [],
        pffa4: [],
        pex5: [],
        prnbw6: [],
        pvm7: [],
        poe8: []
      },
      startDay: null,
      endDay: null,
      format: "d MMMM yyyy",
      form: new Form({}),
      role: 0
    };
  },
  mounted: function () {
    $(document).ready(function () {
      $(".menu .item").tab();
    });
    this.role = this.$store.state.main.role;
  },
  created: function () {
    document.title = "Best results - Agar Balkan";
    this.getPrivateList();
    this.getList();
  },
  updated: function () {
    $(".menu .item").tab();
  },
  methods: {
    getMonday: function (e) {
      var t = (e = new Date(e)).getDay();
      var n = e.getDate() - t + (t == 0 ? -6 : 1);
      return new Date(e.setDate(n));
    },
    safeName: function (e) {
      if (e == null) {
        return "";
      }
      if (e.indexOf("<") != -1 & e.indexOf(">") != -1) {
        var t = e.lastIndexOf("<");
        var n = e.lastIndexOf(">");
        var i = e.slice(n + 1);
        e = e.slice(0, t) + i;
      }
      return e;
    },
    formatDate: function (e) {
      var t = new Date(e);
      var n = "" + (t.getMonth() + 1);
      var i = "" + t.getDate();
      var o = t.getFullYear();
      if (n.length < 2) {
        n = "0" + n;
      }
      if (i.length < 2) {
        i = "0" + i;
      }
      return [i, n, o].join("-");
    },
    getToday: function () {
      var e = this;
      this.form.get_json("data/score/day.json").then(function (t) {
        e.loading = false;
        if (t.status == 1) {
          e.list.pffa1 = t.list[0];
          e.list.pmn2 = t.list[1];
          e.list.pim3 = t.list[2];
          e.list.pffa4 = t.list[3];
          e.list.pex5 = t.list[4];
          e.list.prnbw6 = t.list[5];
          e.list.pvm7 = t.list[6];
          e.list.poe8 = t.list[7];
          e.startDay = new Date(t.from);
          e.endDay = new Date(t.end);
          $(".menu .item").tab();
        }
      }, function (e) {});
    },
    getPrivateList: function () {
      var e = this;
      this.form.get_json("data/score/private.json").then(function (t) {
        e.loading = false;
        if (t.status == 1) {
          e.list.pffa1 = t.list[0];
          e.list.pmn2 = t.list[1];
          e.list.pim3 = t.list[2];
          e.list.pffa4 = t.list[3];
          e.list.pex5 = t.list[4];
          e.list.prnbw6 = t.list[5];
          e.list.pvm7 = t.list[6];
          e.list.poe8 = t.list[7];
          e.startDay = new Date(t.from);
          e.endDay = new Date(t.end);
          $(".menu .item").tab();
        }
      }, function (e) {});
    },
    getList: function () {
      var e = this;
      this.form.get_json("data/score/public.json").then(function (t) {
        e.loading = false;
        if (t.status == 1) {
          e.list.ffa1 = t.list[0];
          e.list.mn2 = t.list[1];
          e.list.im3 = t.list[2];
          e.list.ffa4 = t.list[3];
          e.list.ex5 = t.list[4];
          e.list.rnbw6 = t.list[5];
          e.list.vm7 = t.list[6];
          e.list.oe8 = t.list[7];
          e.startDay = new Date(t.from);
          e.endDay = new Date(t.end);
        }
        $(".menu .item").tab();
      }, function (e) {});
    },
    numberFormat: function (e) {
      return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    classItem: function (e) {
      if (e == 1) {
        return "item first";
      } else if (e == 2) {
        return "item second";
      } else if (e == 3) {
        return "item third";
      } else {
        return "item";
      }
    },
    deleteScore: function (e, t) {
      var n = this;
      var i = {
        score: e,
        server: t
      };
      this.form.get_json(base_url2 + "Agar/deleteScore.json", i).then(function (i) {
        switch (t) {
          case "FFA#1":
            for (o = 0; o < n.list.ffa1.length; o++) {
              if (n.list.ffa1[o].score == e) {
                n.list.ffa1.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.pffa1.length; o++) {
              if (n.list.pffa1[o].score == e) {
                n.list.pffa1.splice(o, 1);
              }
            }
            break;
          case "MINIONS#2":
            for (o = 0; o < n.list.mn2.length; o++) {
              if (n.list.mn2[o].score == e) {
                n.list.mn2.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.pmn2.length; o++) {
              if (n.list.pmn2[o].score == e) {
                n.list.pmn2.splice(o, 1);
              }
            }
            break;
          case "INSTANT MERGE#3":
            for (o = 0; o < n.list.im3.length; o++) {
              if (n.list.im3[o].score == e) {
                n.list.im3.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.pim3.length; o++) {
              if (n.list.pim3[o].score == e) {
                n.list.pim3.splice(o, 1);
              }
            }
            break;
          case "MEGA SPLIT#4":
            for (o = 0; o < n.list.ffa4.length; o++) {
              if (n.list.ffa4[o].score == e) {
                n.list.ffa4.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.pffa4.length; o++) {
              if (n.list.pffa4[o].score == e) {
                n.list.pffa4.splice(o, 1);
              }
            }
            break;
          case "EXPERIMENTAL#5":
            for (o = 0; o < n.list.ex5.length; o++) {
              if (n.list.ex5[o].score == e) {
                n.list.ex5.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.pex5.length; o++) {
              if (n.list.pex5[o].score == e) {
                n.list.pex5.splice(o, 1);
              }
            }
            break;
          case "RAINBOW#6":
            for (o = 0; o < n.list.rnbw6.length; o++) {
              if (n.list.rnbw6[o].score == e) {
                n.list.rnbw6.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.prnbw6.length; o++) {
              if (n.list.prnbw6[o].score == e) {
                n.list.prnbw6.splice(o, 1);
              }
            }
            break;
          case "VIRUS MINES#7":
            for (o = 0; o < n.list.vm7.length; o++) {
              if (n.list.vm7[o].score == e) {
                n.list.vm7.splice(o, 1);
              }
            }
            for (o = 0; o < n.list.pvm7.length; o++) {
              if (n.list.pvm7[o].score == e) {
                n.list.pvm7.splice(o, 1);
              }
            }
            break;
          case "OLD EXP#8":
            for (o = 0; o < n.list.oe8.length; o++) {
              if (n.list.oe8[o].score == e) {
                n.list.oe8.splice(o, 1);
              }
            }
            for (var o = 0; o < n.list.poe8.length; o++) {
              if (n.list.poe8[o].score == e) {
                n.list.poe8.splice(o, 1);
              }
            }
        }
      }, function (e) {});
    }
  }
};