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
    }, [n("form", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.Login();
        },
        keydown: function (t) {
          e.wrongCredentials = false;
        }
      }
    }, [e._m(0), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.loginForm.email,
        expression: "loginForm.email"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("login.email_username"),
        type: "text",
        autofocus: ""
      },
      domProps: {
        value: e.loginForm.email
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.loginForm.email = t.target.value;
          }
        }
      }
    }), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.loginForm.password,
        expression: "loginForm.password"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("login.type_password"),
        type: "password"
      },
      domProps: {
        value: e.loginForm.password
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.loginForm.password = t.target.value;
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
    }), e._v("\n                " + e._s(e.$t("login.login")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("div", {
      staticClass: "ui horizontal divider"
    }, [e._v("\n                " + e._s(e.$t("new_21_09.or")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("button", {
      staticClass: "login-facebook",
      attrs: {
        type: "button"
      },
      on: {
        click: function (t) {
          e.facebookLogin();
        }
      }
    }, [e._v(e._s(e.$t("new_21_09.login_facebook")))]), e._v(" "), n("p", {
      staticClass: "forgot-password-link"
    }, [n("router-link", {
      attrs: {
        to: "/agar.rs/forgot-password"
      }
    }, [e._v(e._s(e.$t("forgotPassword.question")))])], 1), e._v(" "), e.wrongCredentials ? n("div", {
      staticClass: "ui negative message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                    " + e._s(e.$t("login.wrong_credentials")) + "\n                ")])]) : e._e()])])]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "form-group"
    }, [n("div")]);
  }]
};