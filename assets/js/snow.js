function snow() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var e = 0; e < flakeCount; e++) {
		var t = flakes[e];
		var n = mX;
		var i = mY;
		var o = t.x;
		var a = t.y;
		var s = Math.sqrt((o - n) * (o - n) + (a - i) * (a - i));

		if (s < 150) {
			var r = (n - o) / s;
			var l = (i - a) / s;
			var c = 150 / (s * s) / 2;
			t.velX -= c * r;
			t.velY -= c * l;
		} else {
			t.velX *= 0.98;

			if (t.velY <= t.speed) {
				t.velY = t.speed;
			}

			t.velX += Math.cos(t.step += 0.05) * t.stepSize;
		}

		ctx.fillStyle = "rgba(255,255,255," + t.opacity + ")";

		t.y += t.velY;
		t.x += t.velX;

		if (t.y >= canvas.height || t.y <= 0) {
			reset(t);
		}

		if (t.x >= canvas.width || t.x <= 0) {
			reset(t);
		}

		ctx.beginPath();
		ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
		ctx.fill();
	}

	requestAnimationFrame(snow);
}

function reset(e) {
	e.x = Math.floor(Math.random() * canvas.width);
	e.y = 0;
	e.size = Math.random() * 3 + 2;
	e.speed = Math.random() * 1 + 0.5;
	e.velY = e.speed;
	e.velX = 0;
	e.opacity = Math.random() * 0.5 + 0.3;
}

function init() {
	for (var e = 0; e < flakeCount; e++) {
		var t = Math.floor(Math.random() * canvas.width);
		var n = Math.floor(Math.random() * canvas.height);
		var i = Math.random() * 3 + 2;
		var o = Math.random() * 1 + 0.5;
		var a = Math.random() * 0.5 + 0.3;

		flakes.push({
			speed: o,
			velY: o,
			velX: 0,
			x: t,
			y: n,
			size: i,
			stepSize: Math.random() / 30,
			step: 0,
			opacity: a
		});
	} /*snow()*/
}

var flakes = [];
var canvas = document.getElementById("nokey");
var ctx = canvas.getContext("2d");
var flakeCount = 100;
var mX = -100;
var mY = -100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("mousemove", function (e) {
	mX = e.clientX;
	mY = e.clientY;
});

window.addEventListener("resize", function () {
	canvas.width = window.innerWidth - 20;
	canvas.height = window.innerHeight;
});

init();