module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    return n("div", {
      staticClass: "homepage skin-preview"
    }, [n("div", {
      staticClass: "ui centered card"
    }, [n("div", {
      staticClass: "image"
    }, [n("img", {
      attrs: {
        src: "/agar.rs/assets/images/skins/" + e.name + ".png"
      },
      on: {
        click: function (t) {
          e.chooseSkin(e.name);
        }
      }
    })]), e._v(" "), n("div", {
      staticClass: "text-center content"
    }, [n("h3", {
      staticClass: "header",
      on: {
        click: function (t) {
          e.chooseSkin(e.name);
        }
      }
    }, [e._v(e._s(e.name))])]), e._v(" "), n("div", {
      staticClass: "text-center extra content"
    }, [n("a", {
      staticClass: "ui button",
      attrs: {
        href: "/agar.rs/assets/images/skins/" + e.name + ".png",
        download: ""
      }
    }, [e._v("Preuzmi skin")])])])]);
  },
  staticRenderFns: []
};