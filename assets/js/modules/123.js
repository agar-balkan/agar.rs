module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage"
    }, [n("div", {
      attrs: {
        id: "loginPage"
      }
    }, [e.reset == 0 ? n("form", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.forgotPassword();
        },
        keydown: function (t) {
          e.status = -1;
        }
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h3", [e._v(e._s(e.$t("forgotPassword.question")))])])]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.forgotPasswordForm.email,
        expression: "forgotPasswordForm.email"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("login.email"),
        type: "email",
        autofocus: ""
      },
      domProps: {
        value: e.forgotPasswordForm.email
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.forgotPasswordForm.email = t.target.value;
          }
        }
      }
    }), e._v(" "), n("button", {
      staticClass: "start-btn",
      attrs: {
        type: "submit"
      }
    }, [n("i", {
      staticClass: "spinner loading icon",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "loading-login"
      }
    }), e._v("\n                " + e._s(e.$t("contact.report")) + "\n            ")]), e._v(" "), e.status == 0 ? n("div", {
      staticClass: "ui negative message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                    " + e._s(e.$t("forgotPassword.email_not_exist")) + "\n                ")])]) : e._e(), e._v(" "), e.status == 1 ? n("div", {
      staticClass: "ui positive message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                    " + e._s(e.$t("forgotPassword.email_sent")) + "\n                ")])]) : e._e()]) : e._e(), e._v(" "), e.reset == 1 ? n("form", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.updatePasswod();
        },
        keydown: function (t) {
          e.status = -1;
        }
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h3", [e._v(e._s(e.$t("forgotPassword.change_password")))])])]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.forgotPasswordForm.password,
        expression: "forgotPasswordForm.password"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("forgotPassword.new_password"),
        type: "password",
        autofocus: ""
      },
      domProps: {
        value: e.forgotPasswordForm.password
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.forgotPasswordForm.password = t.target.value;
          }
        }
      }
    }), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.forgotPasswordForm.passwordConfirm,
        expression: "forgotPasswordForm.passwordConfirm"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("forgotPassword.repeat_password"),
        type: "password"
      },
      domProps: {
        value: e.forgotPasswordForm.passwordConfirm
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.forgotPasswordForm.passwordConfirm = t.target.value;
          }
        }
      }
    }), e._v(" "), n("button", {
      staticClass: "start-btn",
      attrs: {
        type: "submit"
      }
    }, [n("i", {
      staticClass: "spinner loading icon",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "loading-login"
      }
    }), e._v("\n                 " + e._s(e.$t("forgotPassword.reset")) + "\n             ")]), e._v(" "), e.status == 0 ? n("div", {
      staticClass: "ui negative message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                     " + e._s(e.$t("forgotPassword.wrong_code")) + "\n                 ")])]) : e._e(), e._v(" "), e.status == 1 ? n("div", {
      staticClass: "ui positive message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                     " + e._s(e.$t("forgotPassword.password_changed")) + "\n                 ")])]) : e._e(), e._v(" "), e.status == 2 ? n("div", {
      staticClass: "ui negative message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                     " + e._s(e.$t("forgotPassword.passwords_do_not_match")) + "\n                 ")])]) : e._e()]) : e._e(), e._v(" "), e.reset == -1 ? n("div", {
      staticClass: "message-status"
    }, [e.status == 1 ? n("div", {
      staticClass: "ui positive message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                   " + e._s(e.$t("forgotPassword.password_changed")) + "\n               ")])]) : e._e(), e._v(" "), e.status == 0 ? n("div", {
      staticClass: "ui negative message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                   " + e._s(e.$t("forgotPassword.wrong_code")) + "\n               ")])]) : e._e()]) : e._e()])]);
  },
  staticRenderFns: []
};