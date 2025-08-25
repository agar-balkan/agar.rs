// by WM, QQ: 348915654
// cocos2d-js v3.10
// app.js
// PosNode is the actual point
// AreaNode represents the point in space

var g_versionStr = "v1.0";
//var g_timestamp = +new Date; // Timestamp, originally used for cell rotation, not currently used

// Minimum and maximum points of the wall
// Coordinate system is →x ↑y
var g_leftPos = 50; // min x
var g_bottomPos = 50; // min y
var g_rightPos = 600; // max x
var g_topPos = 600; // max y

// Quadtree
var Quad = {
	init: function (args) {
		function Node(x, y, w, h, depth) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.depth = depth; // Current depth
			this.items = []; // Actual stored position nodes // Array<PosNode>
			this.nodes = []; // Nodes used to divide space, referred to as area nodes // Array<AreaNode>
		}

		var m_maxChildren = args.maxChildren || 2, m_maxDepth = args.maxDepth || 4;

		Node.prototype = {
			x: 0,
			y: 0,
			w: 0,
			h: 0,
			depth: 0,
			items: null,
			nodes: null,

			// selector: {x: Number, y: Number, w: Number, h: Number}
			// Check if there is a PosNode in the area represented by selector. Return true if so
			exists: function (selector) {
				for (var i = 0; i < this.items.length; ++i) {
					var item = this.items[i];
					if (item.x >= selector.x && item.y >= selector.y && item.x < selector.x + selector.w && item.y < selector.y + selector.h) return true;
				}
				if (0 != this.nodes.length) {
					var self = this;
					return this.findOverlappingNodes(selector, function (dir) {
						return self.nodes[dir].exists(selector)
					})
				}
				return false;
			},

			// item: {x: Number, y: Number, w: Number, h: Number}; callback: function (PosNode)
			// Determine whether there is an item in the area represented by item
			retrieve: function (item, callback) {
				for (var i = 0; i < this.items.length; ++i) callback(this.items[i]);
				if (0 != this.nodes.length) {
					var self = this;
					this.findOverlappingNodes(item, function (dir) {
						self.nodes[dir].retrieve(item, callback)
					})
				}
			},

			// a: {x: Number, y: Number}
			insert: function (a) {
				if (0 != this.nodes.length) {
					this.nodes[this.findInsertNode(a)].insert(a);
				} else {
					// If there are too many nodes under this node and the maximum depth has not been reached, split this node and put these nodes into the split nodes
					if (this.items.length >= m_maxChildren && this.depth < m_maxDepth) {
						this.devide();
						this.nodes[this.findInsertNode(a)].insert(a);
					} else {
						this.items.push(a);
					}
				}
			},

			// Find which quadrant of this this node a belongs to
			// Spatial area number airId, →x ↑y, bottom left is 0, top left is 2, bottom right is 1, top right is 3
			findInsertNode: function (a) {
				return a.x < this.x + this.w / 2 ? a.y < this.y + this.h / 2 ? 0 : 2 : a.y < this.y + this.h / 2 ? 1 : 3;
			},

			// a: {x: Number, y: Number, w: Number, h: Number}; b: function (dir);
			// This function determines which area a represents and calls it
			findOverlappingNodes: function (a, b) {
				return a.x < this.x + this.w / 2 && (a.y < this.y + this.h / 2 && b(0) || a.y >= this.y + this.h / 2 && b(2))
			},

			devide: function () {
				var a = this.depth + 1,
					c = this.w / 2,
					d = this.h / 2;
				this.nodes.push(new Node(this.x, this.y, c, d, a));
				this.nodes.push(new Node(this.x + c, this.y, c, d, a));
				this.nodes.push(new Node(this.x, this.y + d, c, d, a));
				this.nodes.push(new Node(this.x + c, this.y + d, c, d, a));
				a = this.items;
				this.items = [];
				for (c = 0; c < a.length; c++) this.insert(a[c]);
			},

			clear: function () {
				for (var a = 0; a < this.nodes.length; a++) this.nodes[a].clear();
				this.items.length = 0;
				this.nodes.length = 0;
			}
		};

		var internalSelector = { x: 0, y: 0, w: 0, h: 0 };

		return {
			root: new Node(args.minX, args.minY, args.maxX - args.minX, args.maxY - args.minY, 0),

			insert: function (a) {
				this.root.insert(a);
			},

			retrieve: function (a, b) {
				this.root.retrieve(a, b);
			},

			retrieve2: function (a, b, c, d, callback) {
				internalSelector.x = a;
				internalSelector.y = b;
				internalSelector.w = c;
				internalSelector.h = d;
				this.root.retrieve(internalSelector, callback);
			},

			exists: function (a) {
				return this.root.exists(a);
			},

			clear: function () {
				this.root.clear();
			}
		}
	}
};

// Global variable for storing quadtree
var g_qTree = null;

// Cell
var Cell = cc.Class.extend({
	m_id: 0,
	m_x: 0,
	m_y: 0,
	m_size: 100, // Cell radius
	m_pointsNum: 128, // Number of points
	m_points: null, // @private
	m_pointsAcc: null, // @private
	m_isVirus: false, // If true, the cell will appear jagged
	m_isAgitated: false, // If activated, the cell will vibrate more vigorously
	m_drawNode: null,

	ctor: function () {
		this.m_points = [];
		this.m_pointsAcc = [];
		this.CreatePoints();
	},

	Destroy: function () {
		this.m_points = null;
		this.m_pointsAcc = null;
	},

	GetNumPoints: function () {
		return this.m_pointsNum;
	},

	CreatePoints: function () {
		var sampleNum = 0;
		var rand = 0;
		var rand2 = 0;
		var point = null;

		sampleNum = this.GetNumPoints();
		for (; this.m_points.length > sampleNum;) {
			rand = ~~(Math.random() * this.m_points.length);
			this.m_points.splice(rand, 1);
			this.m_pointsAcc.splice(rand, 1);
		}
		if (this.m_points.length == 0 && sampleNum > 0) {
			this.m_points.push({
				ref: this,
				size: this.m_size,
				x: this.m_x,
				y: this.m_y
			});
			this.m_pointsAcc.push(Math.random() - 0.5);
		}
		while (this.m_points.length < sampleNum) {
			rand2 = ~~(Math.random() * this.m_points.length);
			point = this.m_points[rand2];
			this.m_points.splice(rand2, 0, {
				ref: this,
				size: point.size,
				x: point.x,
				y: point.y
			});
			this.m_pointsAcc.splice(rand2, 0, this.m_pointsAcc[rand2]);
		}
	},

	MovePoints: function () {
		this.CreatePoints();
		var points = null;
		var pointsAcc = null;
		var numPoints = 0;
		var i = 0;
		var posAcc1 = 0;
		var posAcc2 = 0;
		var ref = null;
		var isVirus = 0;
		var j = 0;
		var f = 0;
		var e = 0;
		var m = 0;
		var isCollide = false;
		var posX = 0;
		var posY = 0;

		for (points = this.m_points, pointsAcc = this.m_pointsAcc, numPoints = points.length, i = 0;
			 i < numPoints; i++) {
			posAcc1 = pointsAcc[(i - 1 + numPoints) % numPoints];
			posAcc2 = pointsAcc[(i + 1 + numPoints) % numPoints];
			pointsAcc[i] += (Math.random() - 0.5) * (this.m_isAgitated ? 3 : 1); // Random change in radius comes from here
			pointsAcc[i] *= 0.7;
			if (pointsAcc[i] > 10) {
				pointsAcc[i] = 10;
			}
			if (pointsAcc[i] < -10) {
				pointsAcc[i] = 10;
			}
			pointsAcc[i] = (posAcc1 + posAcc2 + 8 * pointsAcc[i]) / 10;
		}

		// isVirus is used for the accumulated angle in this loop. If it is a virus, the accumulated angle is not calculated.
		// for (ref = this, isVirus = this.m_isVirus ? 0 : (this.m_id / 1000 + g_timestamp / 10000) % (2 * Math.PI), j = 0; j < numPoints; j++) {
		for (ref = this, j = 0; j < numPoints; j++) {
			f = points[j].size;
			e = points[(j - 1 + numPoints) % numPoints].size;
			m = points[(j + 1 + numPoints) % numPoints].size;

			{ // Check if there is a collision with other points
				isCollide = false;
				posX = points[j].x;
				posY = points[j].y;
				// Collision with other nodes
				if (g_qTree != null) {
					g_qTree.retrieve2(posX - 5, posY - 5, 10, 10, function (node) {
						if (node.ref != ref &&
							((posX - node.x) * (posX - node.x) + (posY - node.y) * (posY - node.y) < 25)) {
							isCollide = true;
						}
					})
				}
				// Collision with wall
				if (!isCollide && posX < g_leftPos || posX > g_rightPos || posY < g_bottomPos || posY > g_topPos) {
					isCollide = true;
				}
				if (isCollide) {
					if (pointsAcc[j] > 0) {
						pointsAcc[j] = 0;
					}
					pointsAcc[j] -= 1;
				}
			}

			f += pointsAcc[j]; // Radius change
			if (f < 0) {
				f = 0;
			}
			f = this.m_isAgitated ? (19 * f + this.m_size) / 20 : (12 * f + this.m_size) / 13; // Radius changes to this.m_size
			points[j].size = (e + m + 8 * f) / 10; // Radius changes based on the radii of the two sides // Each side occupies one part, and the point itself occupies eight parts

			e = 2 * Math.PI / numPoints; // Angle of a single part
			m = this.m_points[j].size; // Radius
			// If it is a virus, a jagged effect can also be displayed
			if (this.m_isVirus && 0 == j % 2) {
				m += 5;
			}
			// This is the formula for a circle
			points[j].x = this.m_x + Math.cos(e * j + isVirus) * m;
			points[j].y = this.m_y + Math.sin(e * j + isVirus) * m;
		}
	},

	ShouldRender: function () {
		return true;
	},

	DrawOneCell: function (drawNode) {
		if (this.ShouldRender()) {
			this.MovePoints();
			var d = this.GetNumPoints();
			var c = 0;
			var e = 0;
			var verts = [];

			for (c = 1; c <= d; c++) {
				e = c % d;
				verts.push(cc.p(this.m_points[e].x, this.m_points[e].y));
			}
			drawNode.clear();
			drawNode.drawPoly(verts, cc.color.WHITE, 2, cc.color.BLACK);
		}
	},
	HaHaTest: function () {

	}
});

var g_mainLogic = null;

var HelloWorldLayer = cc.Layer.extend({
	sprite: null,
	m_cells: null,
	ctor: function () {
		//////////////////////////////
		// 1. super init first
		this._super();

		/////////////////////////////
		// 2. add a menu item with "X" image, which is clicked to quit the program
		// you may modify it.
		// ask the window size
		var size = cc.winSize;

		// add a "close" icon to exit the progress. it's an autorelease object
		var closeItem = new cc.MenuItemImage(
			res.CloseNormal_png,
			res.CloseSelected_png,
			function () {
				cc.log("Menu is clicked!");
			}, this);
		closeItem.attr({
			x: size.width - 20,
			y: 20,
			anchorX: 0.5,
			anchorY: 0.5
		});

		var menu = new cc.Menu(closeItem);
		menu.x = 0;
		menu.y = 0;
		this.addChild(menu, 1);

		/////////////////////////////
		// 3. add your codes below...
		// add a label shows "Hello World"
		// create and initialize a label
		var helloLabel = new cc.LabelTTF(g_versionStr, "Arial", 38);
		// position the label on the center of the screen
		helloLabel.x = size.width / 2;
		helloLabel.y = 0;
		// add the label as a child to this layer
		this.addChild(helloLabel, 5);

		// add "HelloWorld" splash screen"
		this.sprite = new cc.Sprite(res.HelloWorld_png);
		this.sprite.attr({
			x: size.width / 2,
			y: size.height / 2,
			scale: 0.5,
			rotation: 180
		});
		this.addChild(this.sprite, 0);

		this.sprite.runAction(
			cc.sequence(
				cc.rotateTo(2, 0),
				cc.scaleTo(2, 1, 1)
			)
		);
		helloLabel.runAction(
			cc.spawn(
				cc.moveBy(2.5, cc.p(0, size.height - 40)),
				cc.tintTo(2.5, 255, 125, 0)
			)
		);

		this.scheduleUpdate();
		g_mainLogic = this;
		this.MyInit();

		return true;
	},

	update: function (dt) {
		this._super(dt);
		var cell = null;

		// g_timestamp = +new Date; // +new Date is the new timestamp

		this.BuildQTree(); // Construct the quadtree, rebuild it each time through the loop

		for (var i = 0; i < this.m_cells.length; i++) {
			cell = this.m_cells[i];
			cell.DrawOneCell(cell.m_drawNode); // Update the cell node position and draw the cell
		}
	},

	BuildQTree: function () {
		var a = Number.POSITIVE_INFINITY; // minX
		var b = Number.POSITIVE_INFINITY; // minY
		var c = Number.NEGATIVE_INFINITY; // maxX
		var d = Number.NEGATIVE_INFINITY; // maxY
		var e = 0; // maxRadius

		var cell = null;
		var posX = 0;
		var posY = 0;

		for (var i = 0; i < this.m_cells.length; i++) {
			cell = this.m_cells[i];
			if (cell.ShouldRender()) { // The judgment condition will also be expanded
				a = Math.min(cell.m_x, a);
				b = Math.min(cell.m_y, b);
				c = Math.max(cell.m_x, c);
				d = Math.max(cell.m_y, d);
				e = Math.max(cell.m_size, e);
			}
		}
		g_qTree = Quad.init({
			minX: a - (e + 100),
			minY: b - (e + 100),
			maxX: c + (e + 100),
			maxY: d + (e + 100),
			maxChildren: 2,
			maxDepth: 4
		});
		for (var i = 0; i < this.m_cells.length; i++) {
			cell = this.m_cells[i];
			if (cell.ShouldRender()) { // The judgment condition will be extended
				for (var j = 0; j < cell.m_points.length; j++) {
					posX = cell.m_points[j].x;
					posY = cell.m_points[j].y;
					if (true) { // The judgment condition will be extended
						g_qTree.insert(cell.m_points[j]);
					}
				}
			}
		}
	},

	MyInit: function () {
		var winSize = cc.winSize;
		var cell = null;
		var drawNode = null;

		this.m_cells = [];

		// Create virus
		cell = new Cell();
		cell.m_isVirus = true;
		cell.m_size = 100;
		cell.m_pointsNum = 128;
		cell.m_x = 120;
		cell.m_y = 120;
		drawNode = new cc.DrawNode();
		this.addChild(drawNode, 100);
		cell.m_drawNode = drawNode;
		this.m_cells.push(cell);

		// Create cells
		cell = new Cell();
		cell.m_isVirus = false;
		cell.m_size = 50;
		cell.m_pointsNum = 64;
		cell.m_x = 240;
		cell.m_y = 80;
		drawNode = new cc.DrawNode();
		this.addChild(drawNode, 90);
		cell.m_drawNode = drawNode;
		this.m_cells.push(cell);

		// Create cells
		cell = new Cell();
		cell.m_isVirus = false;
		cell.m_size = 120;
		cell.m_pointsNum = 128;
		cell.m_x = 400;
		cell.m_y = 300;
		drawNode = new cc.DrawNode();
		this.addChild(drawNode, 110);
		cell.m_drawNode = drawNode;
		this.m_cells.push(cell);

		// Create cells
		cell = new Cell();
		cell.m_isVirus = false;
		cell.m_size = 50;
		cell.m_pointsNum = 64;
		cell.m_x = 400;
		cell.m_y = 160;
		drawNode = new cc.DrawNode();
		this.addChild(drawNode, 90);
		cell.m_drawNode = drawNode;
		this.m_cells.push(cell);
	}
});

var HelloWorldScene = cc.Scene.extend({
	onEnter: function () {
		this._super();
		var layer = new HelloWorldLayer();
		this.addChild(layer);
	}
});