module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage"
    }, [n("div", {
      attrs: {
        id: "contact"
      }
    }, [n("form", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.contactBan();
        }
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h2", [e._v(e._s(e.$t("contact.banned")))]), e._v(" "), e.reasonToBan != null ? n("p", [e._v("Razlog: " + e._s(e.reasonToBan))]) : e._e(), e._v(" "), e.bannedDateTo != null ? n("p", [e._v("Istek bana: " + e._s(e.bannedDateTo))]) : e._e(), e._v(" "), n("p", [e._v(e._s(e.$t("contact.banned_desc")))]), e._v(" "), n("a", {
      staticStyle: {
        color: "#fff",
        "text-decoration": "underline"
      },
      attrs: {
        href: "#"
      }
    }, [e._v("Agar Balkan")])])]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("div", {
      staticClass: "ui input"
    }, [n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.form.email,
        expression: "form.email"
      }],
      staticClass: "form-control",
      attrs: {
        placeholder: e.$t("contact.your_email"),
        type: "text",
        autofocus: ""
      },
      domProps: {
        value: e.form.email
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.form.email = t.target.value;
          }
        }
      }
    })]), e._v(" "), n("div", {
      staticClass: "ui form"
    }, [n("div", {
      staticClass: "field"
    }, [n("label", [e._v(e._s(e.$t("contact.messsage")))]), e._v(" "), n("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.form.message,
        expression: "form.message"
      }],
      domProps: {
        value: e.form.message
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.form.message = t.target.value;
          }
        }
      }
    })])]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("button", {
      staticClass: "start-btn",
      attrs: {
        disabled: e.form.message.length == 0,
        type: "submit"
      }
    }, [e._v(e._s(e.$t("contact.report")))]), e._v(" "), e.reportStatus == 1 ? n("div", {
      staticClass: "ui positive message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                    " + e._s(e.$t("contact.success")) + "\n                ")])]) : e._e(), e._v(" "), e.reportStatus == 0 ? n("div", {
      staticClass: "ui negative message"
    }, [n("i", {
      staticClass: "close icon"
    }), e._v(" "), n("div", {
      staticClass: "header"
    }, [e._v("\n                    " + e._s(e.$t("contact.error")) + "\n                ")])]) : e._e()])])]);
  },
  staticRenderFns: []
};