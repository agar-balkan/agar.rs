Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var i in n) {
      if (Object.prototype.hasOwnProperty.call(n, i)) {
        e[i] = n[i];
      }
    }
  }
  return e;
};
var o = require("./3.js");
exports.default = {
  data: function () {
    return {};
  },
  computed: i({}, (0, o.mapState)({
    am_logged_in: function (e) {
      return e.main.am_logged_in;
    },
    mobile: function (e) {
      return e.main.on_mobile;
    }
  })),
  updated: function () {},
  methods: {
    defaultKeyboardKeys: function () {
      $("#keyholder > div").each(function () {
        var e = $(this).find("input");
        var t = e.attr("id").split("-")[1];
        if (window.gameKeys[t] == " ") {
          $("#key-" + t).val("SPACE");
        } else {
          $("#key-" + t).val(window.gameKeys[t]);
        }
        e.focus(function () {
          $(this).val("");
        });
        e.focusout(function () {
          if ($(this).val() == "") {
            $(this).val(window.gameKeys[t]);
            if (window.gameKeys[t] == " ") {
              $("#key-" + t).val("SPACE");
            }
          }
        });
      });
    },
    defineKey: function (e, t) {
      e.preventDefault();
      var n = e.key.toLowerCase();
      for (var i in window.gameKeys) {
        if (window.gameKeys[i] != null && n == window.gameKeys[i]) {
          e.target.value = "";
          return 0;
        }
      }
      e.target.value = "";
      window.gameKeys[t] = n;
      localStorage.setItem("gameKeys", JSON.stringify(window.gameKeys));
      e.target.value = n == " " ? "SPACE" : n;
    }
  },
  created: function () {},
  mounted: function () {
    var e = this;
    $(document).ready(function () {
      e.defaultKeyboardKeys();
    });
  }
};