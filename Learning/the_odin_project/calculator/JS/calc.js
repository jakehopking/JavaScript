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
	calcDisplay: 0,

	// Reset calculator (clear arrays etc)
	operandPush: function(thisOperand) {
		calculator.operand.push(thisOperand);

	},
	operatorPush: function(thisOperator) {
		calculator.operator.push(thisOperator);
	},
	joinNumbers: function() {

	},
	reset: function() {
		calculator.operator = [];
		calculator.operand = [];
		calculator.calcDisplay = 0;
	},
	equals: function() {
		// calculator.operand[1] = result 
		calculator.operator = [];
	},
	buttonNumber: function() {

	},
	buttonAction: function() {

	}
}

$(document).ready(function() {
	// $(".operand").on("click", function() {
	// 	var $operand = $(this).text().trim();
	// 	$('#calcScreen').val(calculator.operandPush($operand));
	// });
	$(".operand").on("click", function() {
		var $operand = $(this).text().trim();
		$('#calcScreen').val(calculator.operandPush($operand));
	});
	$(".operator").on("click", function() {
		var $operator = $(this).text().trim();
		$('#calcScreen').val(calculator.operatorPush($operator));
	});
});








