(function(document) {
"use strict";

var css = "";
var resizeTimer = 0;

window.addEventListener("resize", windowResizeEvent, false);

function windowResizeEvent(event) {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function doResize() {
		console.log("resize completed");
	}, 1100);
}

})(wrap(document));
