Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function () {
    return {
      toggleColors: false
    };
  },
  computed: {
    choosenTheme: function () {
      if (localStorage.theme === undefined) {
        return "tema2";
      } else {
        return this.$store.state.main.theme;
      }
    }
  },
  methods: {
    changeTheme: function (e) {
      this.$store.dispatch("changeTheme", e);
    },
    goToFun: function () {
      this.$router.replace({
        path: "/agar.rs/fun"
      });
    }
  },
  mounted: function () {}
};