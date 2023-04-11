var Fn9e = function (hq2x) {
  if (hq2x < -128) {
    return Fn9e(128 - (-128 - hq2x))
  } else if (hq2x >= -128 && hq2x <= 127) {
    return hq2x
  } else if (hq2x > 127) {
    return Fn9e(-129 + hq2x - 127)
  } else {
    throw new Error("1001")
  }
};
var ctk6e = function (hq2x, bn0x) {
  return Fn9e(hq2x + bn0x)
};
var cth6b = function (biz7s, bmr7k) {
  if (biz7s == null) {
    return null
  }
  if (bmr7k == null) {
    return biz7s
  }
  var sx6r = [];
  var ctf6Z = bmr7k.length;
  for (var i = 0, bt0x = biz7s.length; i < bt0x; i++) {
    sx6r[i] = ctk6e(biz7s[i], bmr7k[i % ctf6Z])
  }
  return sx6r
};
var ctc6W = function (biA7t) {
  if (biA7t == null) {
    return biA7t
  }
  var sx6r = [];
  var csY6S = biA7t.length;
  for (var i = 0, bt0x = csY6S; i < bt0x; i++) {
    sx6r[i] = Fn9e(0 - biA7t[i])
  }
  return sx6r
};
var csW6Q = function (bmC7v, Po4s) {
  bmC7v = Fn9e(bmC7v);
  Po4s = Fn9e(Po4s);
  return Fn9e(bmC7v ^ Po4s)
};
var bOW2x = function (Xp6j, bmT7M) {
  if (Xp6j == null || bmT7M == null || Xp6j.length != bmT7M.length) {
    return Xp6j
  }
  var sx6r = [];
  var csS6M = Xp6j.length;
  for (var i = 0, bt0x = csS6M; i < bt0x; i++) {
    sx6r[i] = csW6Q(Xp6j[i], bmT7M[i])
  }
  return sx6r
};
var bOX2x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
var csQ6K = function (dq1x) {
  var Pm4q = [];
  Pm4q.push(bOX2x[dq1x >>> 4 & 15]);
  Pm4q.push(bOX2x[dq1x & 15]);
  return Pm4q.join("")
};
var bOY2x = function (wZ7S) {
  var bt0x = wZ7S.length;
  if (wZ7S == null || bt0x < 0) {
    return new String("")
  }
  var Pm4q = [];
  for (var i = 0; i < bt0x; i++) {
    Pm4q.push(csQ6K(wZ7S[i]))
  }
  return Pm4q.join("")
};
var bPa2x = function (biy7r) {
  if (biy7r == null || biy7r.length == 0) {
    return biy7r
  }
  var bnh7a = new String(biy7r);
  var sx6r = [];
  var bt0x = bnh7a.length / 2;
  var bn0x = 0;
  for (var i = 0; i < bt0x; i++) {
    var qg5l = parseInt(bnh7a.charAt(bn0x++), 16) << 4;
    var pT5Y = parseInt(bnh7a.charAt(bn0x++), 16);
    sx6r[i] = Fn9e(qg5l + pT5Y)
  }
  return sx6r
};
var bPb2x = function (cQ1x) {
  if (cQ1x == null || cQ1x == undefined) {
    return cQ1x
  }
  var QZ4d = encodeURIComponent(cQ1x);
  var wZ7S = [];
  var bPh2x = QZ4d.length;
  for (var i = 0; i < bPh2x; i++) {
    if (QZ4d.charAt(i) == "%") {
      if (i + 2 < bPh2x) {
        wZ7S.push(bPa2x(QZ4d.charAt(++i) + "" + QZ4d.charAt(++i))[0])
      } else {
        throw new Error("1009")
      }
    } else {
      wZ7S.push(QZ4d.charCodeAt(i))
    }
  }
  return wZ7S
};
var csB6v = function (xN7G) {
  var X0x = 0;
  X0x += (xN7G[0] & 255) << 24;
  X0x += (xN7G[1] & 255) << 16;
  X0x += (xN7G[2] & 255) << 8;
  X0x += xN7G[3] & 255;
  return X0x
};
var cNL9C = function (X0x) {
  var xN7G = [];
  xN7G[0] = X0x >>> 24 & 255;
  xN7G[1] = X0x >>> 16 & 255;
  xN7G[2] = X0x >>> 8 & 255;
  xN7G[3] = X0x & 255;
  return xN7G
};
var csw6q = function (dd1x, bnu7n, bt0x) {
  var dH1x = [];
  if (dd1x == null || dd1x.length == 0) {
    return dH1x
  }
  if (dd1x.length < bt0x) {
    throw new Error("1003")
  }
  for (var i = 0; i < bt0x; i++) {
    dH1x[i] = dd1x[bnu7n + i]
  }
  return dH1x
};
var bnA7t = function (dd1x, bnu7n, sO6I, csv6p, bt0x) {
  if (dd1x == null || dd1x.length == 0) {
    return sO6I
  }
  if (sO6I == null) {
    throw new Error("1004")
  }
  if (dd1x.length < bt0x) {
    throw new Error("1003")
  }
  for (var i = 0; i < bt0x; i++) {
    sO6I[csv6p + i] = dd1x[bnu7n + i]
  }
  return sO6I
};
var css6m = function (bt0x) {
  var bx0x = [];
  for (var i = 0; i < bt0x; i++) {
    bx0x[i] = 0
  }
  return bx0x
};
var csr6l = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
var Ph4l = 64;
var bir7k = 64;
var bPo2x = 4;
var csp6j = function (sl5q) {
  var bPr2x = [];
  if (sl5q == null || sl5q == undefined || sl5q.length == 0) {
    return css6m(bir7k)
  }
  if (sl5q.length >= bir7k) {
    return csw6q(sl5q, 0, bir7k)
  } else {
    for (var i = 0; i < bir7k; i++) {
      bPr2x[i] = sl5q[i % sl5q.length]
    }
  }
  return bPr2x
};
var csj6d = function (bip7i) {
  if (bip7i == null || bip7i.length % Ph4l != 0) {
    throw new Error("1005")
  }
  var boe7X = [];
  var bn0x = 0;
  var csi6c = bip7i.length / Ph4l;
  for (var i = 0; i < csi6c; i++) {
    boe7X[i] = [];
    for (var j = 0; j < Ph4l; j++) {
      boe7X[i][j] = bip7i[bn0x++]
    }
  }
  return boe7X
};
var csg6a = function (bPs2x) {
  var qg5l = bPs2x >>> 4 & 15;
  var pT5Y = bPs2x & 15;
  var bn0x = qg5l * 16 + pT5Y;
  return csr6l[bn0x]
};
var bPt2x = function (bon7g) {
  if (bon7g == null) {
    return null
  }
  var bPu2x = [];
  for (var i = 0, bt0x = bon7g.length; i < bt0x; i++) {
    bPu2x[i] = csg6a(bon7g[i])
  }
  return bPu2x
};
var bPv2x = function (Pa4e, sl5q) {
  if (Pa4e == null) {
    return null
  }
  if (Pa4e.length == 0) {
    return []
  }
  if (Pa4e.length % Ph4l != 0) {
    throw new Error("1005")
  }
  sl5q = csp6j(sl5q);
  var bos8k = sl5q;
  var bot8l = csj6d(Pa4e);
  var Sp4t = [];
  var crZ6T = bot8l.length;
  for (var i = 0; i < crZ6T; i++) {
    var bow8o = bPt2x(bot8l[i]);
    bow8o = bPt2x(bow8o);
    var boy8q = bOW2x(bow8o, bos8k);
    var crY6S = cth6b(boy8q, ctc6W(bos8k));
    boy8q = bOW2x(crY6S, sl5q);
    bnA7t(boy8q, 0, Sp4t, i * Ph4l, Ph4l);
    bos8k = bot8l[i]
  }
  var bPx2x = [];
  bnA7t(Sp4t, Sp4t.length - bPo2x, bPx2x, 0, bPo2x);
  var bt0x = csB6v(bPx2x);
  if (bt0x > Sp4t.length) {
    throw new Error("1006")
  }
  var sx6r = [];
  bnA7t(Sp4t, 0, sx6r, 0, bt0x);
  return sx6r
};
var crN6H = function (bil7e, J0x) {
  if (bil7e == null) {
    return null
  }
  var bPE2x = new String(bil7e);
  if (bPE2x.length == 0) {
    return []
  }
  var Pa4e = bPa2x(bPE2x);
  if (J0x == null || J0x == undefined) {
    throw new Error("1007")
  }
  var sl5q = bPb2x(J0x);
  return bPv2x(Pa4e, sl5q)
};

export default function (data) {
  var boN8F = crN6H(data, 'fuck~#$%^&*(458');
  var Kh3x = new String(bOY2x(boN8F));
  var An8f = [];
  var boR8J = Kh3x.length / 2;
  var bn0x = 0;
  for (var i = 0; i < boR8J; i++) {
    An8f.push("%");
    An8f.push(Kh3x.charAt(bn0x++));
    An8f.push(Kh3x.charAt(bn0x++))
  }
  return JSON.parse(decodeURIComponent(An8f.join("")))
}
