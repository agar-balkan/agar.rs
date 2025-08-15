module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage"
    }, [e.game == "" ? n("div", {
      staticClass: "game-list"
    }, [n("div", {
      staticClass: "ui three stackable cards"
    }, [n("div", {
      staticClass: "teal card",
      on: {
        click: function (t) {
          e.changeGame(1);
        }
      }
    }, [e._m(0), e._v(" "), e._m(1)]), e._v(" "), n("div", {
      staticClass: "teal card",
      on: {
        click: function (t) {
          e.changeGame(2);
        }
      }
    }, [e._m(2), e._v(" "), e._m(3)])])]) : n("iframe", {
      attrs: {
        src: e.game
      }
    })]);
  },
  staticRenderFns: [function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "image"
    }, [n("img", {
      attrs: {
        src: "/agar.rs/assets/images/games/fun.jpg"
      }
    })]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "content"
    }, [n("p", {
      staticClass: "ui centered header"
    }, [e._v("Kuglice")])]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "image"
    }, [n("img", {
      attrs: {
        src: "/agar.rs/assets/images/games/racing.png"
      }
    })]);
  }, function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "content"
    }, [n("p", {
      staticClass: "ui centered header"
    }, [e._v("Trke")])]);
  }]
};