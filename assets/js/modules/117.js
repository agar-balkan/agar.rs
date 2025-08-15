module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage"
    }, [n("div", {
      staticClass: "ui container",
      attrs: {
        id: "contribute"
      }
    }, [n("div", {
      staticClass: "ui stackable internally celled grid"
    }, [n("div", {
      staticClass: "six wide column"
    }, [n("div", {
      staticClass: "ui raised segment"
    }, [n("h3", [n("i", {
      staticClass: "money icon"
    }), e._v(" " + e._s(e.$t("contribute.donate")))]), e._v(" "), n("div", {
      staticClass: "ui stackable grid"
    }, [n("div", {
      staticClass: "ten wide column"
    }, [n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("p", [e._v(e._s(e.$t("contribute.donate_desc")))]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("img", {
      staticClass: "paypal-donate-image",
      attrs: {
        src: "https://www.digitaltrends.com/wp-content/uploads/2011/12/Paypal_button1.jpg"
      }
    })]), e._v(" "), n("div", {
      staticClass: "six wide column"
    }, [n("p", [e._v(e._s(e.$t("contribute.select_amount")))]), e._v(" "), n("div", [n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("a", {
      staticClass: "ui large tag label",
      on: {
        click: function (t) {
          e.selectDonation("Option 1 -");
        }
      }
    }, [e._v("\n                      €1.00\n                    ")]), e._v(" "), n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("a", {
      staticClass: "ui large tag label",
      on: {
        click: function (t) {
          e.selectDonation("Option 2 -");
        }
      }
    }, [e._v("\n                      €3.00\n                    ")]), e._v(" "), n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("a", {
      staticClass: "ui large tag label",
      on: {
        click: function (t) {
          e.selectDonation("Option 3 -");
        }
      }
    }, [e._v("\n                      €5.00\n                    ")]), e._v(" "), n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("a", {
      staticClass: "ui large tag label",
      on: {
        click: function (t) {
          e.selectDonation("Option 4 -");
        }
      }
    }, [e._v("\n                      €10.00\n                    ")]), e._v(" "), n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("a", {
      staticClass: "ui large tag label",
      on: {
        click: function (t) {
          e.selectDonation("Option 5 -");
        }
      }
    }, [e._v("\n                      €20.00\n                    ")])])])]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    })])]), e._v(" "), n("div", {
      staticClass: "five wide column"
    }, [n("div", {
      staticClass: "ui raised segment"
    }, [n("h3", [n("i", {
      staticClass: "world icon"
    }), e._v(" " + e._s(e.$t("contribute.translate")))]), e._v(" "), n("p", [e._v("\n\n                   " + e._s(e.$t("contribute.translate_desc")) + "\n                ")])]), e._v(" "), n("div", {
      staticClass: "ui divider"
    }), e._v(" "), n("div", {
      staticClass: "ui raised segment"
    }, [n("h3", [n("i", {
      staticClass: "facebook icon"
    }), e._v(" " + e._s(e.$t("contribute.follow")))]), e._v(" "), n("p"), n("div", {
      staticClass: "fb-like",
      attrs: {
        "data-href": "#",
        "data-width": "300",
        "data-layout": "standard",
        "data-action": "like",
        "data-size": "large",
        "data-show-faces": "true",
        "data-share": "true"
      }
    }), e._v(" "), n("p")])]), e._v(" "), n("div", {
      staticClass: "five wide column"
    }, [n("div", {
      staticClass: "ui raised segment"
    }, [n("form", {
      attrs: {
        role: "form",
        name: "info"
      },
      on: {
        submit: function (t) {
          t.preventDefault();
          e.contactUs();
        }
      }
    }, [n("div", {
      staticClass: "form-group"
    }, [n("div", [n("h3", [n("i", {
      staticClass: "question circle icon"
    }), e._v(" " + e._s(e.$t("contact.report_contact")))])])]), e._v(" "), n("div", {
      staticClass: "label-divider"
    }), e._v(" "), n("div", {
      staticClass: "ui form"
    }, [n("div", {
      staticClass: "field"
    }, [n("label", [e._v(e._s(e.$t("contact.your_email")))]), e._v(" "), n("div", {
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
    })])]), e._v(" "), n("div", {
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
      staticClass: "label-divider"
    }), e._v(" "), n("button", {
      staticClass: "ui secondary fluid button",
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
    }), e._v("\n                      " + e._s(e.$t("contact.report")) + "\n                  ")]), e._v(" "), e.reportStatus == 1 ? n("div", {
      staticClass: "ui positive message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                          " + e._s(e.$t("contact.success")) + "\n                      ")])]) : e._e(), e._v(" "), e.reportStatus == 0 ? n("div", {
      staticClass: "ui negative message"
    }, [n("div", {
      staticClass: "header"
    }, [e._v("\n                          " + e._s(e.$t("contact.error")) + "\n                      ")])]) : e._e()])])])])]), e._v(" "), e._m(0), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    })]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("form", {
      staticStyle: {
        display: "none"
      },
      attrs: {
        id: "donate-form",
        action: "https://www.paypal.com/cgi-bin/webscr",
        method: "post",
        target: "_blank"
      }
    }, [n("input", {
      attrs: {
        type: "hidden",
        name: "cmd",
        value: "_s-xclick"
      }
    }), e._v(" "), n("input", {
      attrs: {
        type: "hidden",
        name: "hosted_button_id",
        value: "MYWWNL86EGNKE"
      }
    }), e._v(" "), n("table", [n("tr", [n("td", [n("input", {
      attrs: {
        type: "hidden",
        name: "on0",
        value: "Iznos donacije:"
      }
    }), e._v("Iznos donacije:")])]), n("tr", [n("td", [n("select", {
      attrs: {
        id: "donate-select",
        name: "os0"
      }
    }, [n("option", {
      attrs: {
        value: "Option 1 -"
      }
    }, [e._v("Option 1 - €1.00 EUR")]), e._v(" "), n("option", {
      attrs: {
        value: "Option 2 -"
      }
    }, [e._v("Option 2 - €3.00 EUR")]), e._v(" "), n("option", {
      attrs: {
        value: "Option 3 -"
      }
    }, [e._v("Option 3 - €5.00 EUR")]), e._v(" "), n("option", {
      attrs: {
        value: "Option 4 -"
      }
    }, [e._v("Option 4 - €10.00 EUR")]), e._v(" "), n("option", {
      attrs: {
        value: "Option 5 -"
      }
    }, [e._v("Option 5 - €20.00 EUR")])])])])]), e._v(" "), n("input", {
      attrs: {
        type: "hidden",
        name: "currency_code",
        value: "EUR"
      }
    }), e._v(" "), n("input", {
      attrs: {
        type: "image",
        src: "https://www.psarts.org/wp-content/uploads/2015/08/JVG-Europe-paypal-donation-button.png",
        border: "0",
        name: "submit",
        alt: "PayPal - The safer, easier way to pay online!"
      }
    }), e._v(" "), n("img", {
      attrs: {
        alt: "",
        border: "0",
        src: "https://www.paypalobjects.com/en_US/i/scr/pixel.gif",
        width: "1",
        height: "1"
      }
    })]);
  }]
};