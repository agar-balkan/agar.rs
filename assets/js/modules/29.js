Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function () {
    return {};
  },
  created: function () {
    var e = this.$route.params.id;
    if (e == -1) {
      this.$router.replace({
        name: "index"
      });
    } else {
      this.$router.replace({
        params: {
          id: e
        },
        name: "loggedLink"
      });
    }
  }
};