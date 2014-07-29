$(document).ready(function() {
	pollBox();
});

var pollBox = function() {
	var $dataPollToggleState = $("[data-pollToggle]"),
		$dataPollBox = $("[data-poll='pollBox']"),
		$dataPollToggleClose;

	$dataPollToggleState.click(function(e) {
		e.preventDefault();
		if ($dataPollToggleState.attr('data-pollToggle') == 'open') {
			$(this).closest($dataPollBox).animate({
			left: '+=312',
			},
			300,
			function() {
				$(this).closest($dataPollBox).find($dataPollToggleState).attr('data-pollToggle', 'close');
			});
		} else {
			$(this).closest($dataPollBox).animate({
			left: '-=312',
			},
			300,
			function() {
				$(this).closest($dataPollBox).find($dataPollToggleState).attr('data-pollToggle', 'open');
			});
		}
		
	});
}