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
			return 1;
		} else {
			return -1;
		}
	}
};
