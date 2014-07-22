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
	operatorPress: [],
	operatorStore: [],
	operandPress: [],
	operandStore: [],
	display: 0,

	// Reset calculator (clear arrays etc)
	reset: function() {
		calculator.operatorPress = [];
		calculator.operatorStore = [];
		calculator.operandPress = [];
		calculator.operandStore = [];
		calculator.display = 0;
	},
	equals: function() {
		calculator.storeNumber();
		if (calculator.operandStore.length == 2 && calculator.operatorStore.length == 1) {
			var num1 = calculator.operandStore[1],
				num2 = calculator.operandStore[0],
				numAction = calculator.operatorStore[0];
			
			if (numAction == "+") {
				result = Math.add(num1, num2);
				calculator.display = result;
				calculator.storeResult(result);
			} else if (numAction == "-") {
				result = Math.subtract(num1, num2);
				calculator.display = result;
				calculator.storeResult(result);
			} else if (numAction == "*") {
				result = Math.multiply(num1, num2);
				calculator.display = result;
				calculator.storeResult(result);
			} else if (numAction == "/") {
				result = Math.divide(num1, num2);
				calculator.display = result;
				calculator.storeResult(result);
			}
			calculator.operandStore[1] = undefined;
			calculator.operandPress = [];
			return calculator.display;
		}
	},
	storeNumber: function() {
		var joinedNumber = parseInt(calculator.operandPress.join(''));
		if (calculator.operandStore.length == 1) {
			calculator.operandStore[1] = joinedNumber;
		} else {
			calculator.operandStore[0] = joinedNumber;
		}
	},
	storeResult: function(result) {
		calculator.operandStore[0] = result;
	},
	buttonNumber: function(number) {
		calculator.operandPress.push(number);
		calculator.display = calculator.operandPress.join('');
		return calculator.display;
	},
	buttonAction: function(action) {
		calculator.operatorStore[0] = action;
		calculator.operatorPress[0] = action;
		if (calculator.operandStore.length == 2) {
			calculator.operandStore[1] = calculator.display;
		}
		calculator.display = calculator.operatorPress.join('');
		calculator.storeNumber();
		// calculator.operatorPress = [];
		calculator.operandPress = [];
		return calculator.display;
	}
}

$(document).ready(function() {
	$(".operand").on("click", function() {
		var $operand = $(this).text().trim();
		$('#calcScreen').val(calculator.buttonNumber($operand));
	});
	$(".operator").on("click", function() {
		var $operator = $(this).text().trim();
		$('#calcScreen').val(calculator.buttonAction($operator));
	});
	$(".reset").on("click", function() {
		$('#calcScreen').val(calculator.reset());
	});
	$(".equals").on("click", function() {
		$('#calcScreen').val(calculator.equals());
	});
});








