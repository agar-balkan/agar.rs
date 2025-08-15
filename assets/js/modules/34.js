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
  data: function () {
    return {
      tab: 0,
      hovered: 0
    };
  },
  computed: i({}, (0, o.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    },
    lowGraphics: function (e) {
      return e.main.lowGraphics;
    },
    activeServer: function (e) {
      return e.servers.activeServer;
    },
    first_server: function (e) {
      return e.servers.servers[0].name;
    }
  }), (0, o.mapGetters)({
    servers: "allServers"
  }), {
    microsoftBrowsers: function () {
      return /MSIE|Edge/i.test(navigator.userAgent);
    }
  }),
  methods: i({}, (0, o.mapActions)(["getPlayerStats", "changeServer"]), {
    tabSelect: function (e) {
      this.tab = e;
    },
    chServer: function (e, t, n) {
      if (n) {
        this.$store.dispatch("changeServer", e);
        if (!t) {
          this.$router.replace("/agar.rs/");
        }
      } else if (this.activeServer == "") {
        this.$store.dispatch("changeServer", e);
      }
      this.$store.dispatch("getPlayerStats");
    },
    maxPlayers: function (e, t, n) {
      if (e > 0 && t > 0) {
        if (e >= t && this.activeServer == n) {
          toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: "toast-bottom-right",
            preventDuplicates: true,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
          };
          toastr.warning("Server " + n + " je pun!", "error");
        }
        return Math.min(e, t);
      } else {
        return 0;
      }
    },
    getServerInfo: function (e, t) {
      $(".srv-name").text(t.split("#")[0]);
      if (e !== -1) {
        $(".srv-info-data").text(this.servers[e].allPlayers + " / " + this.servers[e].maxPlayers);
      }
      for (var n = 0; n < 10; n++) {
        if (t == this.servers[n].name) {
          $(".srv-info-data").text(this.servers[n].allPlayers + " / " + this.servers[n].maxPlayers);
          return this.servers[n].allPlayers + " / " + this.servers[n].maxPlayers;
        }
      }
    }
  }),
  created: function () {},
  mounted: function () {
    var e = this;
    $(document).ready(function () {
      if (e.$route.params.id !== undefined) {
        e.chServer(e.$route.params.id - 1, true, true);
      } else {
        var t = [0, 3, 4, 5];
        var n = t[Math.floor(Math.random() * t.length)];
        e.chServer(n, true, false);
      }
    });
  }
};