Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  components: {},
  data: function () {
    return {
      form: new Form({
        email: "",
        message: ""
      }),
      reportStatus: null
    };
  },
  mounted: function () {
    $.ajaxSetup({
      cache: false
    });
    $.getScript("//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12", function () {
      FB.init({
        appId: "100000000000000",
        version: "v2.12",
        autoLogAppEvents: true,
        xfbml: true
      });
    });
  },
  computed: {},
  created: function () {
    document.title = "Contact - Agar Balkan";
    $(document).ready(function () {});
  },
  updated: function () {},
  methods: {
    reportBug: function () {
      $("#loading-send").show();
      var e = this;
      if (e.form.email != "" && e.form.message != "") {
        this.form.get_json(base_url2 + "Agar/reportBug.json").then(function (t) {
          e.reportStatus = t;
          e.form.email = "";
          e.form.message = "";
          $("#loading-send").hide();
        }, function (t) {
          e.reportStatus = 0;
        });
      } else {
        this.reportStatus = 0;
      }
    }
  }
};