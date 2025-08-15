module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    var n = e._self._c || t;
    if (e.mobile) {
      return e._e();
    } else {
      return n("div", {
        staticClass: "ui keybind form"
      }, [e.am_logged_in ? n("h3", [n("label", [e._v(e._s(e.$t("logged.keyboard_controls")) + ":")])]) : e._e(), e._v(" "), n("div", {
        staticClass: "ui grid",
        attrs: {
          id: "keyholder"
        }
      }, [n("div", {
        staticClass: "three wide column"
      }, [n("label", [e._v(e._s(e.$t("home.eject_mass")))]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-eject",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "eject");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v(e._s(e.$t("home.split")))]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-splitCell",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "splitCell");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v(e._s(e.$t("home.double_split")))]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-doubleSplit",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "doubleSplit");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v(e._s(e.$t("home.quad_split")))]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-quadSplit",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "quadSplit");
          }
        }
      })]), e._v(" "), !e.am_logged_in ? n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Macro feed")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-macroEject",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "macroEject");
          }
        }
      })]) : e._e(), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Spectate")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-spectate",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "spectate");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Menu switch")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-close",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "close");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Zoom In")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-zoomIn",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "zoomIn");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Zoom Out")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-zoomOut",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "zoomOut");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Arrow Up")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-arrowup",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "arrowup");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Arrow Down")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-arrowdown",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "arrowdown");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Arrow Left")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-arrowleft",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "arrowleft");
          }
        }
      })]), e._v(" "), n("div", {
        staticClass: "three wide column"
      }, [n("label", {
        staticClass: "text-center"
      }, [e._v("Arrow Right")]), e._v(" "), n("input", {
        attrs: {
          type: "text",
          id: "key-arrowright",
          autocomplete: "off"
        },
        on: {
          keyup: function (t) {
            e.defineKey(t, "arrowright");
          }
        }
      })])])]);
    }
  },
  staticRenderFns: []
};