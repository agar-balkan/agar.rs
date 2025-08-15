Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "ban",
  components: {},
  data: function () {
    return {
      form: new Form({
        email: "",
        message: ""
      }),
      reportStatus: null,
      reasonToBan: window.reasonToBan,
      bannedDateTo: window.bannedDateTo
    };
  },
  mounted: function () {},
  computed: {},
  created: function () {
    document.title = "You are banned!";
  },
  updated: function () {},
  methods: {
    contactBan: function () {
      var e = this;
      this.form.get_json(base_url2 + "Agar/reportBug.json").then(function (t) {
        e.reportStatus = t;
        e.form.email = "";
        e.form.message = "";
      }, function (t) {
        e.reportStatus = 0;
      });
    }
  }
};