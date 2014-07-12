$(document).ready(function($) {
	console.log(my_max([1,56,2,3,-1,0]))
});


// Math.max.apply finds largest number in an array. The null (or Math) is required.
var my_max = function(input) {
	return Math.max.apply(null, input);
};