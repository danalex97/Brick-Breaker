function startGame() {
	gameCanvas.start();
	document.body.insertBefore(gameCanvas.canvas, document.body.firstChild);
	gameCanvas.append("rect", new Rect(5, 5, 50, 50, "red", function() { 
		this.x += 1;
		this.y += 1;
	}));
	gameCanvas.append("circle", new Circle(5, 5, 50, "red", function() {
		this.x += 2;
		this.y += 2;
	}));
	
	setInterval(function() {
		gameCanvas.clear();
		for (var key in objectPull) {
			gameCanvas.update(key);
		}
	}, 10);
}

var gameCanvas = {
	canvas : document.createElement("canvas"),
	objectList : {},
	start : function() {
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.ctx = this.canvas.getContext("2d");
	},
	append : function(objectName, gameObject) {
		objectPull[objectName] = gameObject;
		objectPull[objectName].draw(this.ctx, this.canvas);
	},
	getObject : function(objectName) {
		return objectPull[objectName];
	},
	update : function(objectName) {
		var gameObject = this.getObject(objectName);
		gameObject.update();
		gameObject.draw(this.ctx, this.canvas);
	},
	clear : function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};

var objectPull = {};
