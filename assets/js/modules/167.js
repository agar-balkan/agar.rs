module.exports = function (e, t) {
  var n = [];
  var i = {};
  for (var o = 0; o < t.length; o++) {
    var a = t[o];
    var s = a[0];
    var r = {
      id: e + ":" + o,
      css: a[1],
      media: a[2],
      sourceMap: a[3]
    };
    if (i[s]) {
      i[s].parts.push(r);
    } else {
      n.push(i[s] = {
        id: s,
        parts: [r]
      });
    }
  }
  return n;
};