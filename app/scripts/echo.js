(function(document) {
"use strict";

var css = "";
var resizing = true;

var loop = {
	resizeId: 0,
	set: function setRecursiveLoop(prop, callback, args, interval) {
		this[prop] = setTimeout(function recurse() {
			callback.apply(null, args);
			this.set(prop, callback, args, interval);
		}, interval).apply(this);
	},
	clear: function clearRecursiveLoop(prop) {
		clearTimeout(this[prop]);
	}
};

window.addEventListener("resize", windowResizeEvent, false);

function windowResizeEvent(event) {
	var pauseId = setTimeout(function doResize() {
		console.log("resize happened");
	}, 1100);
}

})(wrap(document));
