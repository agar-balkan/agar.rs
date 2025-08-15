module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui mini modal",
      attrs: {
        id: "nicknames-modal"
      }
    }, [n("div", {
      staticClass: "content"
    }, [n("p", {
      staticStyle: {
        color: "#000"
      }
    }, [e._v(e._s(e.$t("home.saved_items")))]), e._v(" "), n("div", {
      staticClass: "ui divider"
    }), e._v(" "), n("div", {
      staticClass: "ui form"
    }, [n("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.localStorageNicknames,
        expression: "localStorageNicknames"
      }],
      attrs: {
        maxlength: "3000"
      },
      domProps: {
        value: e.localStorageNicknames
      },
      on: {
        input: function (t) {
          if (!t.target.composing) {
            e.localStorageNicknames = t.target.value;
          }
        }
      }
    })])]), e._v(" "), n("div", {
      staticClass: "actions"
    }, [n("div", {
      staticClass: "ui positive right labeled icon button",
      on: {
        click: function (t) {
          e.saveLocalNicknames();
        }
      }
    }, [e._v("\n            " + e._s(e.$t("home.save")) + "\n            "), n("i", {
      staticClass: "checkmark icon"
    })])])]);
  },
  staticRenderFns: []
};