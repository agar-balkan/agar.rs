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
  mounted: function () {},
  computed: {},
  created: function () {
    document.title = "Contribution - Agar Balkan";
    $(document).ready(function () {
      $(".ui.dropdown").dropdown();
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
    });
    window.onbeforeunload = function () {
      return false;
    };
  },
  updated: function () {},
  methods: {
    selectDonation: function (e) {
      $("#donate-select").val(e);
      $("#donate-form").submit();
    },
    contactUs: function () {
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