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
        keydown: function (t) {
          e.registerForm.errors.clear(t.target.name);
        },
        submit: function (t) {
          t.preventDefault();
          e.Register();
        }
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h3", [e._v(e._s(e.$t("login.register_head")))])])]), e._v(" "), n("br"), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.registerForm.nickname,
        expression: "registerForm.nickname"
      }],
      staticClass: "form-control",
      attrs: {
        title: e.$t("logged.type_nick_desc"),
        id: "nickname",
        name: "nickname",
        placeholder: e.$t("home.type_name"),
        type: "text",
        maxlength: "15",
        autofocus: ""
      },
      domProps: {
        value: e.registerForm.nickname
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.registerForm.nickname = t.target.value;
          }
        }
      }
    }), e._v(" "), e.registerForm.errors.has("nickname") ? n("p", {
      staticClass: "error-text"
    }, [e._v(e._s(e.registerForm.errors.get("nickname")))]) : e._e(), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.registerForm.email,
        expression: "registerForm.email"
      }],
      staticClass: "form-control",
      attrs: {
        name: "email",
        placeholder: e.$t("login.email"),
        type: "text"
      },
      domProps: {
        value: e.registerForm.email
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.registerForm.email = t.target.value;
          }
        }
      }
    }), e._v(" "), e.registerForm.errors.has("email") ? n("p", {
      staticClass: "error-text"
    }, [e._v(e._s(e.registerForm.errors.get("email")))]) : e._e(), e._v(" "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.registerForm.password,
        expression: "registerForm.password"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("login.type_password"),
        type: "password"
      },
      domProps: {
        value: e.registerForm.password
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.registerForm.password = t.target.value;
          }
        }
      }
    }), e._v(" "), e.registerForm.errors.has("password") ? n("p", {
      staticClass: "error-text",
      attrs: {
        name: "password"
      }
    }, [e._v(e._s(e.registerForm.errors.get("password")))]) : e._e(), e._v(" "), n("button", {
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
    }), e._v("\n                " + e._s(e.$t("login.register")) + "\n            ")]), e._v(" "), e.fromApp ? e._e() : n("div", {
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
    }, [e._v(e._s(e.$t("new_21_09.login_facebook")))])])])]);
  },
  staticRenderFns: []
};