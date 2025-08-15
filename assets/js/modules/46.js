Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "pillory",
  components: {},
  data: function () {
    return {
      form: new Form({}),
      bannedList: [],
      current_date: new Date().toISOString().slice(0, 19).replace("T", " ")
    };
  },
  mounted: function () {
    this.getBannedList();
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  },
  computed: {},
  created: function () {
    document.title = "Hall of Shame - Agar Balkan";
    $(document).ready(function () {});
  },
  updated: function () {},
  methods: {
    getBannedList: function () {
      var e = this;
      new Date().toISOString().slice(0, 19).replace("T", " ");
      this.form.get_json(base_url2 + "Agar/getBannedList.json", {}).then(function (t) {
        if (t.status === 1) {
          e.bannedList = t.banned;
        }
      }, function (e) {});
    },
    calcType: function (e) {
      if (e == 1) {
        return "Igra";
      } else if (e == 2) {
        return "Chat";
      } else if (e == 3) {
        return "Skinovi";
      } else {
        return undefined;
      }
    },
    calcServers: function (e) {
      if (e == "") {
        return "Svi";
      } else {
        return e;
      }
    }
  }
};