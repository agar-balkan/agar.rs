module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.show,
        expression: "show"
      }],
      class: [e.show ? "ui active dimmer" : "ui dimmer", "fixed"]
    }, [n("div", {
      staticClass: "ui text loader"
    }, [e._v("Učitavanje...")])]);
  },
  staticRenderFns: []
};