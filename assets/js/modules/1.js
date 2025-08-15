module.exports = function () {
  var e = [];
  e.toString = function () {
    var e = [];
    for (var t = 0; t < this.length; t++) {
      var n = this[t];
      if (n[2]) {
        e.push("@media " + n[2] + "{" + n[1] + "}");
      } else {
        e.push(n[1]);
      }
    }
    return e.join("");
  };
  e.i = function (t, n) {
    if (typeof t == "string") {
      t = [[null, t, ""]];
    }
    var i = {};
    for (var o = 0; o < this.length; o++) {
      var a = this[o][0];
      if (typeof a == "number") {
        i[a] = true;
      }
    }
    for (o = 0; o < t.length; o++) {
      var s = t[o];
      if (typeof s[0] != "number" || !i[s[0]]) {
        if (n && !s[2]) {
          s[2] = n;
        } else if (n) {
          s[2] = "(" + s[2] + ") and (" + n + ")";
        }
        e.push(s);
      }
    }
  };
  return e;
};