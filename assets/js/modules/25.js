Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function () {
    return {
      lang: window.lang,
      lang_country: "gb",
      languages: ["rs", "hr", "ba", "mk", "si"],
      fromApp: false
    };
  },
  mounted: function () {
    $(".right.menu.open").on("click", function (e) {
      e.preventDefault();
      $(".ui.vertical.menu").fadeToggle();
    });
    $(".ui.dropdown").dropdown();
    this.getCountry();
    if (window.location.origin.includes("m.agar.rs")) {
      this.fromApp = true;
    }
  },
  methods: {
    changeLanguage: function (e) {
      document.cookie = "lang=" + e + ";";
      window.i18n.locale = e;
      this.lang = e;
      $(".change-country").removeClass("active visible").find(".menu").addClass("hidden").css("display", "none");
    },
    getCountry: function () {
      var e = ("; " + document.cookie).split("; lang=");
      if (e.length == 2) {
        var t = e.pop().split(";").shift();
      }
      if (t) {
        window.lang = t;
      }
      var n = this;
      n.changeLanguage("gb");
    },
    musicPage: function () {
      $("#music-modal").modal("show");
    },
    fullScreen: function () {
      try {
        document.documentElement.webkitRequestFullScreen();
      } catch (e) {}
    },
    openCoinsModal: function () {
      swal({
        title: "",
        html: "<strong>Prizes for the <a href=\"/agar.rs/highscores\" target=\"_blank\">best results: </a></strong><br /><br /><u>Daily Rewards:</u><br /><br />1st place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>500</strong><br />2nd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>300</strong><br />3rd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>200</strong><br /><br /><u>Monthly Rewards:</u><br /><br />1st place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>10.000</strong><br />2nd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>7.000</strong><br />3rd place <img class=\"coins-img\" src=\"/agar.rs/assets/images/coins.png\" /><strong>5.000</strong><br /><br /><small>Rewards are valid only for logged-in players on the leaderboard and are awarded on the first of every month.</small>",
        showCloseButton: true,
        showConfirmButton: false
      });
    }
  }
};