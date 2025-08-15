Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "VueAds",
  props: {
    adClient: {
      type: String,
      required: true
    },
    adSlot: {
      type: String,
      required: true
    },
    adFormat: {
      type: String,
      required: false,
      default: "auto"
    },
    adLayoutKey: {
      type: String,
      required: false,
      default: ""
    },
    adStyle: {
      type: String,
      required: false,
      default: "display: block"
    },
    fullWidthResponsive: {
      type: String,
      required: false,
      default: "true"
    }
  },
  mounted: function () {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("ads error" + this.adSlot + ": " + e);
    }
  }
};