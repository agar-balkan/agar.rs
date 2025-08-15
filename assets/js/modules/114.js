module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage"
    }, [n("div", {
      staticClass: "cont-page",
      attrs: {
        id: "contact"
      }
    }, [n("div", {
      staticClass: "ui stackable two column grid"
    }, [n("div", {
      staticClass: "column"
    }, [n("form", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.reportBug();
        }
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h2", [e._v(e._s(e.$t("contact.report_contact")))])])]), e._v(" "), n("div", {
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
    }, [n("i", {
      staticClass: "spinner loading icon",
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "loading-send"
      }
    }), e._v("\n                        " + e._s(e.$t("contact.report")) + "\n                    ")]), e._v(" "), e.reportStatus == 1 ? n("div", {
      staticClass: "ui positive message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                            " + e._s(e.$t("contact.success")) + "\n                        ")])]) : e._e(), e._v(" "), e.reportStatus == 0 ? n("div", {
      staticClass: "ui negative message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                            " + e._s(e.$t("contact.error")) + "\n                        ")])]) : e._e()])]), e._v(" "), e._m(0)])])]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "column"
    }, [n("div", {
      staticClass: "facebook-chat"
    }, [n("div", {
      staticClass: "fb-page",
      attrs: {
        "data-href": "#",
        "data-tabs": "messages",
        "data-height": "315",
        "data-small-header": "true",
        "data-adapt-container-width": "true",
        "data-hide-cover": "false",
        "data-show-facepile": "true"
      }
    }, [n("blockquote", {
      staticClass: "fb-xfbml-parse-ignore",
      attrs: {
        cite: "#"
      }
    }, [n("a", {
      attrs: {
        href: "#"
      }
    }, [e._v("Agar Balkan")])])])])]);
  }]
};