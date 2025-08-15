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
  components: {},
  data: function () {
    return {
      private_score: [],
      form: new Form({})
    };
  },
  computed: i({}, (0, o.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    },
    ranks: function (e) {
      return e.main.ranks;
    },
    loggedNickName: function (e) {
      return e.main.loggedNickName;
    },
    rank: function (e) {
      return e.main.rank;
    },
    rankGame: function (e) {
      return e.main.rankGame;
    }
  })),
  mounted: function () {
    this.am_logged_in;
    this.getMyStats();
  },
  created: function () {
    document.title = "My statistics - Agar Balkan";
  },
  updated: function () {},
  methods: {
    getMyStats: function () {
      var e = this;
      var t = {
        token_header: localStorage.token_header,
        token_log: localStorage.token_log
      };
      this.form.get_json(base_url2 + "Agar/getMyPrivateScore.json", t).then(function (t) {
        if (t.status == 1) {
          e.private_score = t.private_score;
        }
      }, function (e) {});
    },
    threeDigits: function (e) {
      for (var t = e.split(",")[0].split("").reverse(), n = [], i = 0; i < t.length; i++) {
        if ((i + 1) % 3 == 0) {
          n.push(t[i]);
          n.push(".");
        } else {
          n.push(t[i]);
        }
      }
      return n.reverse().join("");
    },
    msToTime: function (e) {
      var t = (e = (e - e % 1000) / 1000) % 60 < 10 ? "0" + e % 60 : e % 60;
      var n = (e = (e - t) / 60) % 60 < 10 ? "0" + e % 60 : e % 60;
      return (e - n) / 60 + ":" + n + ":" + t;
    },
    toHHMMSS: function (e) {
      return new Date(e * 1000).toISOString().slice(11, -5);
    },
    Cb: function (e) {
      var t = ((e = ~~e) % 60).toString();
      e = (~~(e / 60)).toString();
      if (t.length < 2) {
        t = "0" + t;
      }
      return e + ":" + t;
    }
  }
};