function computeUpdates(objectPull) {
	var playerObject = objectPull.player;
	var ballObject = objectPull.ball;
	
	setInteractor(playerObject, ballObject);
	setInteractor(objectPull.up, ballObject);
	setInteractor(objectPull.left, ballObject);
	setInteractor(objectPull.right, ballObject);
}

function setInteractor(rect, point) {
	if (rect.intersects(point)) {
		var dist_up = Math.max(rect.x - point.x, -rect.x + point.x);
		var dist_down = Math.max(rect.x + rect.w - point.x, -rect.x - rect.w + point.x);
		var dist_left = Math.max(rect.y - point.y, -rect.y + point.y);
		var dist_right = Math.max(rect.y + rect.h - point.y, -rect.y - rect.h + point.y);
		
		var dist_min = Math.min(dist_up, dist_down, dist_left, dist_right);
		if (dist_min == dist_up || dist_min == dist_down) point.dx *= (-1);
		if (dist_min == dist_left || dist_min == dist_right) point.dy *= (-1);
		
		point.update = function() {
			this.x += this.dx;
			this.y += this.dy;
		};
		for (var i = 1; i < 4; ++i) {
			point.update();
		}
	}
}

function buildObjectPull(objectPull, gameCanvas) {
	gameCanvas.append(
		objectPull, 
		"map", 
		new Rect(0, 0, 480, 270, "white", function() { 
			this.x += 0;
			this.y += 0;
		})
	);
	
	gameCanvas.append(
		objectPull, 
		"up", 
		new Rect(0, 0, 480, 3, "red", function() { 
			this.x += 0;
			this.y += 0;
		})
	);
	gameCanvas.append(
		objectPull, 
		"right", 
		new Rect(480, 0, 3, 270, "red", function() { 
			this.x += 0;
			this.y += 0;
		})
	);
	gameCanvas.append(
		objectPull, 
		"left", 
		new Rect(0, 0, 3, 270, "red", function() { 
			this.x += 0;
			this.y += 0;
		})
	);
	
	gameCanvas.append(
		objectPull, 
		"player", 
		new Rect(250, 260, 50, 5, "red", function() { 
			this.x += 0;
			this.y += 0;
		})
	);
	gameCanvas.append(
		objectPull, 
		"ball", 
		new Circle(50, 50, 1, "red", function() {
			this.dx = 1;
			this.dy = 1; 
			this.x += this.dx;
			this.y += this.dy;
		})
	);
}
