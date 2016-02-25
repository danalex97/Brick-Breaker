function copyAttr(from, to) {
	for (var attr in from) {
		to[attr] = from[attr];
	}
}

var Rect = function(x, y, w, h, color, update) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;
	this.draw = function (ctx, canvas) {
		ctx.beginPath();
		ctx.lineWidth = "4";
		ctx.strokeStyle = color;
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.stroke();
	};
	this.update = update; 
	this.inside = function(x, y) {
		return this.x < x && x < this.x + this.w && this.y < y && y < this.y + this.h;
	};
	this.intersects = function(object) {
		if (object instanceof Circle) {
			return this.inside(object.x, object.y);
		}
		return false;
	};
};

var FillRect = function(x, y, w, h, color, update) {
	copyAttr(Rect.prototype, this.prototype);
	this.draw = function (ctx, canvas) {
		ctx.beginPath();
		ctx.lineWidth = "4";
		ctx.fillStyle = color;
		ctx.fillRect(x, y, w, h);
		ctx.stroke();
	};
};

var Circle = function(x, y, r, color, update) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = color;
	this.draw = function (ctx, canvas) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		ctx.lineWidth = "4";
		ctx.stroke();
	};
	this.update = update;
};
