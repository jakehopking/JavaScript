$(document).ready(function($) {
	console.log(my_max([1,56,2,3,-1,0]));
	$('.vowelCount').find('em').text(vowel_count());
});


// Math.max.apply finds largest number in an array. The null (or Math) is required.
function my_max(input) {
	return Math.max.apply(null, input);
};

function vowel_count() {
	var text = prompt("Paste text to be analysed here:", " "),
		upperCase = text.toUpperCase(),
		textSplit = upperCase.split(""),
		// vowels = ["A", "E", "I", "O", "U"],
		numVowels = 0;

	for (var i = 0; i < textSplit.length; i++) {
		if (textSplit[i] == "A" || textSplit[i] == "E" || textSplit[i] == "I" || textSplit[i] == "O" || textSplit[i] == "U") {
			numVowels++;
		}
		return numVowels;
	}	
};