module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "ui container pillory"
    }, [n("table", {
      staticClass: "ui inverted selectable grey table"
    }, [n("thead", [n("tr", [n("th", [e._v(e._s(e.$t("new_21_09.name")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.type")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.server")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.reason")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.date")))]), e._v(" "), n("th", [e._v(e._s(e.$t("new_21_09.expiration")))])])]), e._v(" "), e.bannedList.length > 0 ? n("tbody", e._l(e.bannedList, function (t) {
      if (t.nickname != "") {
        return n("tr", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.current_date < t.date_to,
            expression: "current_date < ban.date_to"
          }]
        }, [n("td", [e._v(e._s(decodeURI(t.nickname)))]), e._v(" "), n("td", [e._v(e._s(e.calcType(t.type)))]), e._v(" "), n("td", [e._v(e._s(e.calcServers(t.server)))]), e._v(" "), n("td", [e._v(e._s(t.reason))]), e._v(" "), n("td", [e._v(e._s(t.date_from))]), e._v(" "), n("td", [e._v(e._s(t.date_to))])]);
      } else {
        return e._e();
      }
    })) : n("tbody", [n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("h3", [e._v("\n                " + e._s(e.$t("new_21_09.empty_list")) + "\n            ")]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    })])]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    })]);
  },
  staticRenderFns: []
};