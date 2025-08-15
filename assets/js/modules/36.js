Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function () {
    return {
      lang: window.lang,
      message: "",
      status: -1,
      updateProfileForm: new Form({
        password: "",
        passwordConfirm: ""
      })
    };
  },
  computed: {
    email: {
      get: function () {
        return this.$store.state.main.email;
      },
      set: function (e) {
        this.$store.commit("setEmail", e);
      }
    }
  },
  mounted: function () {},
  methods: {
    validateEmail: function (e) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
    },
    updateSettings: function () {
      var e = this;
      var t = {
        email: this.email,
        token_header: localStorage.token_header,
        token_log: localStorage.token_log,
        password: this.updateProfileForm.password,
        passwordConfirm: this.updateProfileForm.passwordConfirm
      };
      if (t.email != "" && this.validateEmail(t.email)) {
        if ((t.password == "" || t.passwordConfirm == "") && (t.password != "" || t.passwordConfirm != "")) {
          this.message = "Passwords do not match.";
          this.status = 0;
          return 0;
        }
        if (t.password != "" && t.passwordConfirm != "" && t.password != t.passwordConfirm) {
          this.message = "Passwords do not match.";
          this.status = 0;
        } else {
          $("#loading-send").show();
          this.updateProfileForm.get_json(base_url2 + "Home/changeProfileInfo.json", t).then(function (t) {
            if (Number(t.status) == 1) {
              e.status = 1;
              e.updateProfileForm.password = "";
              e.updateProfileForm.passwordConfirm = "";
              e.message = "Information on the profile has been changed!";
            } else {
              e.status = 0;
              e.message = t.msg;
            }
            $("#loading-send").hide();
          }, function (t) {
            e.message = "Server error. Try again.";
            e.status = 0;
            $("#loading-send").hide();
          });
        }
      } else {
        this.message = "E-mail nije ispravan.";
        this.status = 0;
      }
    },
    deleteProfile: function () {
      var e = this;
      $("#loading-delete").show();
      var t = {
        token_header: localStorage.token_header,
        token_log: localStorage.token_log
      };
      this.updateProfileForm.get_json(base_url2 + "Home/deleteAccount.json", t).then(function (t) {
        $("#loading-delete").hide();
        if (Number(t.status) == 1) {
          e.status = 1;
          e.message = "Account successfully deleted!".setTimeout(function () {
            e.logout();
          }, 5000);
        }
      }, function (t) {
        e.message = "Server error. Try again.";
        e.status = -1;
        $("#loading-delete").hide();
      });
    },
    deleteFB: function () {
      var e = this;
      $("#loading-delete-fb").show();
      var t = {
        token_header: localStorage.token_header,
        token_log: localStorage.token_log
      };
      this.updateProfileForm.get_json(base_url2 + "Home/deleteFBProfile.json", t).then(function (t) {
        $("#loading-delete-fb").hide();
        if (Number(t.status) == 1) {
          e.status = 1;
          e.message = "Account data successfully deleted!".setTimeout(function () {
            e.logout();
          }, 5000);
        }
      }, function (t) {
        e.message = "Server error. Try again.";
        e.status = -1;
        $("#loading-delete-fb").hide();
      });
    },
    logout: function () {
      this.$store.dispatch("setPrivateSkins", {
        list: []
      });
      this.$store.dispatch("setColor", {
        color: null
      });
      this.$store.dispatch("setId", {
        id: 0
      });
      this.$store.dispatch("Logout").then(function (e) {
        window.location.href = "/agar.rs/";
      });
    }
  }
};