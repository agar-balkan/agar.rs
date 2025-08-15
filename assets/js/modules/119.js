module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "hats",
      attrs: {
        id: "hats-page"
      }
    }, [n("spinner", {
      attrs: {
        show: e.loading
      }
    }), e._v(" "), n("div", {
      staticClass: "ui container"
    }, [n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("div", {
      staticClass: "ads-skins"
    }, 1)]), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("div", {
      staticClass: "ui container"
    }, [n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("div", {
      staticClass: "ui grid"
    }, [e._l(e.sortedArray, function (t) {
      if (t.special == "sale") {
        return n("div", {
          staticClass: "sixteen wide mobile column eight wide tablet column four wide computer column"
        }, [n("div", {
          staticClass: "hats-list"
        }, [n("div", {
          staticClass: "ui card",
          staticStyle: {
            margin: "0 auto"
          }
        }, [n("div", {
          staticClass: "content"
        }, [n("p", {
          staticClass: "header"
        }, [e._v(e._s(t.name))])]), e._v(" "), n("div", {
          staticClass: "blurring dimmable image",
          class: t.is_my ? "buyed" : ""
        }, [e.am_logged_in ? n("div", {
          staticClass: "ui dimmer"
        }, [n("div", {
          staticClass: "content"
        }, [n("div", {
          staticClass: "center"
        }, [t.is_my ? n("div", {
          staticClass: "ui inverted button",
          on: {
            click: function (n) {
              e.chooseHat(t.secret);
            }
          }
        }, [e._v(e._s(e.$t("hats.choose")) + "\n                                        ")]) : n("div", {
          staticClass: "ui inverted button",
          on: {
            click: function (n) {
              e.buyHat(t);
            }
          }
        }, [e._v(e._s(e.$t("hats.buy")) + "\n                                        ")])])])]) : e._e(), e._v(" "), n("img", {
          attrs: {
            src: "/agar.rs/assets/images/hats/" + t.link + ".webp"
          }
        })]), e._v(" "), n("div", {
          staticClass: "extra content"
        }, [n("strong", [n("img", {
          staticClass: "coins-img",
          attrs: {
            src: "/agar.rs/assets/images/coins.png"
          }
        }), e._v("\n                                " + e._s(t.price) + " /\n                                "), n("i", {
          staticClass: "clock outline icon"
        }), e._v("\n                                " + e._s(Number(t.price) >= 50000 ? "30" : "7") + " " + e._s(e.$t("hats.days")) + "\n                            ")])])])])]);
      } else {
        return e._e();
      }
    }), e._v(" "), n("div", {
      staticClass: "sixteen wide mobile column eight wide tablet column four wide computer column"
    }, 1)], 2), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    }), e._v(" "), n("em", {
      staticClass: "info"
    }), e._v(" "), n("div", {
      staticClass: "ui hidden divider"
    })])], 1);
  },
  staticRenderFns: []
};