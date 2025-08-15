module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui container"
    }, [n("table", {
      staticClass: "ui inverted celled table"
    }, [n("thead", [n("tr", [n("th", [e._v(e._s(e.$t("statistic.server")))]), e._v(" "), n("th", [e._v(e._s(e.$t("statistic.max_score")))]), e._v(" "), n("th", [e._v(e._s(e.$t("statistic.best_time_played")))]), e._v(" "), n("th", [e._v(e._s(e.$t("statistic.all_plays")))])])]), e._v(" "), n("tbody", e._l(e.private_score, function (t) {
      return n("tr", [n("td", [n("div", {
        staticClass: "ui ribbon label"
      }, [e._v(e._s(t.server))])]), e._v(" "), n("td", [e._v(e._s(e.threeDigits(t.max_score)))]), e._v(" "), n("td", [e._v(e._s(e.Cb(t.max_time)))]), e._v(" "), n("td", [e._v(e._s(t.games_played))])]);
    }))])]);
  },
  staticRenderFns: []
};