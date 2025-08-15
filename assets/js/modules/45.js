Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "fun",
  components: {},
  data: function () {
    return {
      game: "",
      game1: "/fun/index.html",
      game2: "/games/racing/"
    };
  },
  mounted: function () {
    if (this.$route.params.id != undefined) {
      if (this.$route.params.id == 1) {
        this.game = this.game1;
      }
      if (this.$route.params.id == 2) {
        this.game = this.game2;
      }
    } else {
      this.game = "";
    }
  },
  computed: {},
  created: function () {},
  updated: function () {},
  methods: {
    changeGame: function (e) {
      if (e === 1) {
        this.game = this.game1;
      }
      if (e === 2) {
        this.game = this.game2;
      }
      this.$router.push("/agar.rs/fun/" + e);
    }
  },
  watch: {
    $route: function (e, t) {
      if (e.name == "fun") {
        this.game = "";
      }
    }
  }
};