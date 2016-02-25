var cursorX = 0;
var cursorY = 0;

var mouseMove = {
	onMouseMove : function(event) {
		cursorX = event.pageX;
		cursorY = event.pageY;
	},
	getAmplitude : function(rect) {
		var mid = rect.x + rect.w / 2;
		if (cursorX > mid) {
			return 2;
		} else {
			return -2;
		}
	}
};

function updateOnMouseMove(playerObject) {
	playerObject.update = function() {
		var v = mouseMove.getAmplitude(playerObject);
		
		if (v) {
			this.dx = v;
		} 
		if (this.dx === undefined) {
			this.x += 0
		} else {
			this.x += this.dx;
		}
	};
}
