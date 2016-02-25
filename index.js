function startGame() {
	gameCanvas.start();
	document.body.insertBefore(gameCanvas.canvas, document.body.firstChild);
	
	buildObjectPull(objectPull, gameCanvas);
	
	setInterval(function() {
		gameCanvas.clear();
		computeUpdates(objectPull);
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
	append : function(objectPull, objectName, gameObject) {
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
