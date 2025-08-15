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
      forgotPasswordForm: new Form({
        email: "",
        password: "",
        passwordConfirm: ""
      }),
      status: -1,
      reset: 0
    };
  },
  computed: i({}, (0, o.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    }
  })),
  mounted: function () {
    if (this.am_logged_in) {
      this.$router.replace({
        path: "/agar.rs/",
        name: "index"
      });
    }
    if (this.$route.name == "resetPassword" && this.$route.params.code) {
      this.reset = 1;
      this.checkCode(this.$route.params.code);
    }
  },
  created: function () {
    document.title = "Forgot password - Agar Balkan";
  },
  updated: function () {},
  methods: {
    checkCode: function (e) {
      if (e != "") {
        var t = this;
        var n = {
          code: e
        };
        this.forgotPasswordForm.get_json(base_url2 + "Home/checkCode.json", n).then(function (e) {
          if (Number(e.status) == 1) {
            t.reset = 1;
          } else {
            t.reset = -1;
            t.status = 0;
          }
        }, function (e) {
          t.reset = -1;
          t.status = 0;
        });
      } else {
        this.reset = -1;
        this.status = 0;
      }
    },
    updatePasswod: function () {
      $("#loading-login").show();
      var e = this;
      var t = {
        code: this.$route.params.code,
        password: this.forgotPasswordForm.password,
        passwordConfirm: this.forgotPasswordForm.passwordConfirm
      };
      if (t.password != "" && t.passwordConfirm != "" && t.password == t.passwordConfirm) {
        this.forgotPasswordForm.get_json(base_url2 + "Home/newPasswordFromForgot.json", t).then(function (t) {
          if (Number(t.status) == 1) {
            e.status = 1;
            e.reset = -1;
          } else {
            e.status = 0;
            e.reset = -1;
          }
        }, function (t) {
          e.status = -1;
          e.reset = -1;
        });
      } else {
        $("#loading-login").hide();
        this.status = 2;
      }
    },
    forgotPassword: function () {
      $("#loading-login").show();
      var e = this;
      var t = {
        email: this.forgotPasswordForm.email
      };
      if (t.email != "") {
        this.forgotPasswordForm.get_json(base_url2 + "Home/ResetPassword.json", t).then(function (t) {
          $("#loading-login").hide();
          if (Number(t.status) == 1) {
            e.status = 1;
            e.forgotPasswordForm.email = "";
          } else {
            e.status = 0;
          }
        }, function (e) {
          $("#loading-login").hide();
        });
      } else {
        this.status = 0;
        $("#loading-login").hide();
      }
    }
  }
};