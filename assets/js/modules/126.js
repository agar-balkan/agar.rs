module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui small inverted modal",
      attrs: {
        id: "profile-settings-modal"
      }
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n        " + e._s(e.$t("logged.profile_settings")) + "\n    ")]), e._v(" "), n("div", {
      staticClass: "content"
    }, [n("div", {
      staticClass: "ui inverted segment"
    }, [n("div", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.updateSettings();
        },
        keydown: function (t) {
          e.status = -1;
        }
      }
    }, [n("div", [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.email,
        expression: "email"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("login.email"),
        type: "email"
      },
      domProps: {
        value: e.email
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.email = t.target.value;
          }
        }
      }
    })]), e._v(" "), n("div", [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.updateProfileForm.password,
        expression: "updateProfileForm.password"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("forgotPassword.new_password"),
        type: "password"
      },
      domProps: {
        value: e.updateProfileForm.password
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.updateProfileForm.password = t.target.value;
          }
        }
      }
    })]), e._v(" "), n("div", [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.updateProfileForm.passwordConfirm,
        expression: "updateProfileForm.passwordConfirm"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("forgotPassword.repeat_password"),
        type: "password"
      },
      domProps: {
        value: e.updateProfileForm.passwordConfirm
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.updateProfileForm.passwordConfirm = t.target.value;
          }
        }
      }
    })]), e._v(" "), n("button", {
      staticClass: "start-btn",
      attrs: {
        disabled: e.status == 0,
        type: "button"
      },
      on: {
        click: function (t) {
          e.updateSettings();
        }
      }
    }, [n("i", {
      staticClass: "spinner loading icon",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "loading-send"
      }
    }), e._v("\n                    " + e._s(e.$t("logged.save")) + "\n                ")]), e._v(" "), e.status != -1 ? n("div", {
      class: [e.status == 1 ? "positive" : "negative", "message "]
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                        " + e._s(e.message) + "\n                    ")])]) : e._e()])]), e._v(" "), n("div", {
      staticClass: "ui inverted segment"
    }, [n("button", {
      staticClass: "start-btn",
      attrs: {
        disabled: e.status == 0,
        type: "button"
      },
      on: {
        click: function (t) {
          e.deleteFB();
        }
      }
    }, [n("i", {
      staticClass: "spinner loading icon",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "loading-delete-fb"
      }
    }), e._v("\n                    " + e._s(e.$t("options.delete_facebook")) + "\n                ")]), e._v(" "), n("button", {
      staticClass: "start-btn",
      attrs: {
        disabled: e.status == 0,
        type: "button"
      },
      on: {
        click: function (t) {
          e.deleteProfile();
        }
      }
    }, [n("i", {
      staticClass: "spinner loading icon",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "loading-delete"
      }
    }), e._v("\n                    " + e._s(e.$t("options.delete_profile")) + "\n                ")])])])]);
  },
  staticRenderFns: []
};