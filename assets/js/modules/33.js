Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "SavedNicknames",
  data: function () {
    return {
      localStorageNicknames: ""
    };
  },
  mounted: function () {
    if (localStorage.savedNicknames != undefined) {
      this.localStorageNicknames = localStorage.savedNicknames;
    }
  },
  methods: {
    saveLocalNicknames: function () {
      localStorage.setItem("savedNicknames", this.localStorageNicknames);
    }
  }
};