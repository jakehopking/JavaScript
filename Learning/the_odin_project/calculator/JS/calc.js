$(document).ready(function($) {
	// console.log(my_max([1,56,2,3,-1,0]));
	// $('.vowelCount').find('em').text(vowel_count(prompt("How many vowels in this text:", " ")));
	// $(".reverseString").find('em').text(string_reverser(prompt("Text to reverse:", "Here...")));
});


// Math.max.apply finds largest number in an array. The null (or Math) is required.
function my_max(input) {
	return Math.max.apply(null, input);
};

// Count the number of vowels in a given string (quite inefficient with ||. Will optimise when update to compare against an array)
function vowel_count(analyseMe) {
	var text = analyseMe,
		upperCase = text.toUpperCase(),
		textSplit = upperCase.split(""),
		// vowels = ["A", "E", "I", "O", "U"],
		numVowels = 0;
		
	for (var i = 0; i < textSplit.length; i++) {
		if (textSplit[i] == "A" || textSplit[i] == "E" || textSplit[i] == "I" || textSplit[i] == "O" || textSplit[i] == "U") {
			numVowels++;
		}
	}	
	return numVowels;
};

function string_reverser(reverseMe) {
	var tempArray = [];

	for (var i = 0, strLength = reverseMe.length; i <= strLength; i ++) {
		tempArray.push(reverseMe.charAt(strLength - i));
	}
	return tempArray.join('');
};

var $operand = $("button").find(".operand");
	$operator = $("button").find(".operator");

$operator.on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	calculator.keyPush
});

// Setup basic mathematic functions
var Math = {
	add: function(num1, num2) {
		return num1 + num2;
	},
	subtract: function(num1, num2) {
		return num1 - num2;
	},
	multiply: function(num1, num2) {
		return num1 * num2;
	},
	divide: function(num1, num2) {
		return num1 / num2;
	}
}

// Make the calculator!!
var calculator = {
	operator: [],
	operand: [],
	output: 0,

	// Reset calculator (clear arrays etc)
	reset: function() {
		calculator.operator = [];
		calculator.operand = [];
		calculator.output = 0;
	},
	keyPush: function(key) {
		if (key == $operator) {
			calculator.operator.push(this);
		}
		else if (key == $operand) {
			calculator.operand.push(this);
		}
	}
}

$(document).ready(function() {

});








