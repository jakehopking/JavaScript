$(document).ready(function() {
	$('body').prepend('<h1>Sketch Pad</h1>');
	initNewGrid();
	// gridPaint();
	gridPaintRandom();
	gridReset();
	$("p.test").text("Random colour test").css({
		'background-color': 'white',
		'color': randomRGB()
	});
});

var randomRGB = function () {
	var randomColourNumber = function () {
		return Math.floor((Math.random() * 256) + 1);
	};
	return "rgb(" + randomColourNumber() + ", " + randomColourNumber() + ", " + randomColourNumber() + ")";
};

var newGrid = function (gridSize) {
	var gridSquare = "<div class='square'></div>";
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			$(".grid").append(gridSquare);
		}
	}
};

var initNewGrid = function () {
	$(".controls").on('click', '.newGrid', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".square").remove();
		var gridSize = prompt("Specify grid size", "16");
		newGrid(gridSize);
	});
};

var gridPaint = function () {
	$(".grid").on('mouseenter', '.square', function() {
		/* Act on the event */
		$(this).addClass('painted');
	});
};

var gridReset = function() {
	$(".controls").on('click', '.reset', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".painted").removeClass('painted');
		$(".paintedRandom").removeClass('paintedRandom').removeAttr('style');
	});
};

var gridPaintRandom = function () {
	$(".grid").on('mouseenter', '.square', function() {
		/* Act on the event */
		$(this).addClass('paintedRandom');
		$(this).css('background-color', randomRGB());
	});
};







