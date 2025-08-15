function i(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o;
var a = function (e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = e[n];
      }
    }
  }
  t.default = e;
  return t;
}(require("./8.js"));
var s = {
  activeServer: "",
  minionServer: false,
  servers: [{
    name: "FFA#1",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 1,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "MINIONS#2",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 2,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: true,
    banned_type: 0
  }, {
    name: "INSTANT MERGE#3",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 3,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "MEGA SPLIT#4",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 4,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "EXPERIMENTAL#5",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 5,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "RAINBOW#6",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 6,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "VIRUS MINES#7",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 7,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "OLD EXP#8",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 8,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "TEAMS#9",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 9,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }, {
    name: "SELF-FEED#10",
    ip: "195.201.88.91",
    ips: "agar2.emupedia.net/ws3/",
    shortUrl: 10,
    currentPlayers: 0,
    allPlayers: 0,
    spectators: 0,
    maxPlayers: 0,
    gamePort: "",
    hidden_from_world: false,
    minionServer: false,
    banned_type: 0
  }]
};
var r = {
  allServers: function (e) {
    return e.servers;
  },
  activeServer: function (e) {
    return e.activeServer;
  },
  minionServer: function (e) {
    return e.minionServer;
  }
};
var l = {
  changeServer: function (e, t) {
    var n = e.commit;
    var i = e.state;
    var o = e.rootState;
    var s = t;
    if (i.servers[s] == undefined || i.servers[s].hidden_from_world && !o.main.am_logged_in) {
      s = 0;
    }
    if (location.protocol != "https:") {
      r = i.servers[s].ip + ":" + i.servers[s].gamePort;
    } else {
      var r = i.servers[s].ips + (i.servers[s].gamePort !== "" ? ":" + i.servers[s].gamePort : "");
    }
    var l = i.servers[s].shortUrl;
    var c = i.servers[s].name;
    var u = i.servers[s].minionServer;
    window.CONNECTION_URL = r;
    sessionStorage.setItem("sessionUrl", l);
    sessionStorage.setItem("server", r);
    sessionStorage.setItem("serverName", c);
    n(a.CHANGE_SERVER, {
      serverName: c
    });
    n(a.CHANGE_SERVER_TYPE, {
      minionServer: u
    });
    if (t !== undefined) {
      setRegion(r);
    }
  },
  getPlayerStats: function (e) {
    e.commit;
    var t = e.state;
    var n = e.rootState;
    var i = "data/servers.json?v=" + +new Date();
    n.main.form.get_json(i).then(function (e) {
      for (var n in e) {
        (function (n) {
          if (e[n].index) {
            var i = t.servers.find(function (t) {
              return t.shortUrl === e[n].index;
            });
            if (i) {
              i.allPlayers = e[n].current_players;
              i.maxPlayers = e[n].max_players;
            }
          }
        })(n);
      }
    }, function (e) {
      console.log("Servers stats does not work: => " + e);
    });
  },
  setBanOnServer: function (e, t, n) {
    e.commit;
  }
};
o = {};
i(o, a.CHANGE_SERVER, function (e, t) {
  var n = t.serverName;
  e.activeServer = n;
});
i(o, a.CHANGE_SERVER_TYPE, function (e, t) {
  var n = t.minionServer;
  e.minionServer = n;
});
var c = o;
exports.default = {
  state: s,
  getters: r,
  actions: l,
  mutations: c
};