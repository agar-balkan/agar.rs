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
    return {
      fontSize: 16,
      minimized: false,
      emoji: false,
      chatForm: new Form({})
    };
  },
  computed: i({}, (0, o.mapState)({
    theme: function (e) {
      return e.main.theme;
    },
    on_mobile: function (e) {
      return e.main.on_mobile;
    },
    options: function (e) {
      return e.main.settings.options;
    },
    oldChat: function (e) {
      return e.main.settings.options.oldChat;
    },
    color: function (e) {
      return e.main.color;
    }
  })),
  updated: function () {},
  methods: i({}, (0, o.mapActions)(["goSkins", "goSkinsShow", "goTransparent", "goLines", "goInfiniteScroll"]), {
    zoomFont: function (e) {
      if (e == "in") {
        this.fontSize++;
      } else {
        this.fontSize--;
      }
    },
    minimize: function () {
      this.minimized = true;
      $(".chat-body").hide();
      $(".chat-footer").hide();
      $(".chat").css({
        height: "50px"
      });
    },
    pickColor: function () {
      document.getElementById("chat-color-picker").style.left = "0px";
      document.getElementById("chat-color-picker").focus();
      document.getElementById("chat-color-picker").value = this.color;
      document.getElementById("chat-color-picker").click();
    },
    maximize: function () {
      this.minimized = false;
      if (self.on_mobile) {
        e = "170px";
      } else {
        var e = "250px";
      }
      $(".chat-body").show();
      $(".chat-footer").show();
      $(".chat").css({
        height: e
      });
    },
    sendLocation: function () {
      window.sendLocation();
      $("#chat_textbox-wrap .marker").css("visibility", "hidden");
      setTimeout(function () {
        $("#chat_textbox-wrap .marker").css("visibility", "visible");
      }, 2000);
    },
    block: function () {
      if ($(".block-name").text() != "") {
        window.blockFromChat($(".block-name").text());
      }
      $(".block-user").hide();
      $(".block-name").text("");
    },
    cancelBlock: function () {
      $(".block-user").hide();
      $(".block-name").text("");
    },
    insertEmoji: function (e) {
      $("#chat_textbox").val($("#chat_textbox").val() + e).focus();
    },
    saveColor: function (e) {
      this.$store.dispatch("setColor", {
        color: e.target.value
      });
      if (localStorage.token_header && localStorage.token_log) {
        var t = {
          color: e.target.value,
          token_header: localStorage.token_header,
          token_log: localStorage.token_log
        };
        this.chatForm.get_json(base_url2 + "Home/updateColor.json", t).then(function (e) {}, function (e) {});
      }
    }
  }),
  created: function () {},
  mounted: function () {
    $(document).ready(function () {
      $(".chat").draggable();
      $(".chat").resizable({
        animate: 0,
        containment: "#canvas"
      });
      $("#chat_textbox-wrap .heart").click(function () {
        $("#chat_textbox").val($("#chat_textbox").val() + "❤").focus();
      });
      $("body").on("contextmenu", ".chat", function (e) {
        return false;
      });
      $("body").on("contextmenu", "strong.chatname-options", function (e) {
        if (sessionStorage.playerName != $(e.target).text()) {
          $(".block-user").show();
          $(".block-name").text($(e.target).text());
        }
      });
    });
  }
};