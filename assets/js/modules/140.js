module.exports = {
  render: function () {
    var e = this;
    var t = e.$createElement;
    return (e._self._c || t)("ins", {
      staticClass: "adsbygoogle",
      style: e.adStyle,
      attrs: {
        "data-ad-client": e.adClient,
        "data-ad-slot": e.adSlot,
        "data-ad-format": e.adFormat,
        "data-ad-layout-key": e.adLayoutKey,
        "data-full-width-responsive": e.fullWidthResponsive
      }
    });
  },
  staticRenderFns: []
};