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
  name: "skinPreview",
  components: {},
  data: function () {
    return {
      name: ""
    };
  },
  mounted: function () {
    if (this.$route.params.name) {
      this.name = this.$route.params.name;
    }
  },
  computed: i({}, (0, o.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    }
  })),
  created: function () {
    $(document).ready(function () {});
  },
  updated: function () {},
  methods: {
    chooseSkin: function (e) {
      this.$store.dispatch("setGlobalSkinName", {
        name: e
      });
      this.$store.commit("ACTIVE_SKIN", e);
      this.$router.push("/agar.rs/");
    }
  }
};