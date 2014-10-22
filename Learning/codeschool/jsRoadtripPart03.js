// CodeSchool execises: http://javascript-roadtrip-part3.codeschool.com/
// The following are my solutions to the exercises given


// Part 03; Level 01; Challenge 05
var fear = fearGenerated(1, 3, 5);
var fearMessage;

if(fear < 200) {
	fearMessage = function() {
		return confirm("Fear Level: LOW\n"+
			"Should be no problem at all...mwahaha.\n"+
			"Still wanna ride?"
		);
	};
} else if (fear <=300) {

	fearMessage = function() {
		return confirm("Fear Level: MEDIUM\n"+
			"You may want to rethink this one, man. MWAHAHA!\n"+
			"Think you'll make it?"
		);
	};
} else if (fear <= 400) {

	fearMessage = function() {
		return confirm("Fear Level: HIGH\n"+
			"ABANDON ALL HOPE!!\n"+
			"Have a death wish?"
		);
	};
}

var startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
	return confirmToGo();
}

alert("startRide = " + startRide);


// Part 03; Level 01; Challenge 07
var passengers = [ ["Thomas", "Meeks"], ["Gregg", "Pollack"], ["Christine", "Wong"], ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(
	function (cell) {
		return cell.join(' ');
	}
);

console.log(modifiedNames);


// Part 03; Level 01; Challenge 08
var modifiedNames = [ "Thomas Meeks", 
                      "Gregg Pollack", 
                      "Christine Wong", 
                      "Dan McGaw" ];

modifiedNames.map (
	function (name) {
		alert("Yo, " + name + "!");
	}
);


// Part 03; Level 01; Challenge 09
var puzzlers = [
  function(input) {
  	return (input * 3) - 8;
  },
  function(input) {
  	return Math.pow((input + 2), 3);
  },
  function(input) {
  	return (input * input) - 9;
  },
  function(input) {
  	return input % 4;
  }
];

// Part 03; Level 01; Challenge 11
function adventureSelector ( userChoice ){
  if (userChoice === 1) {
    return function() {
    	alert("You've selected the Vines of Doom!\nHope you have a swingin' time.");
    };
  } else if (userChoice === 2) {
    return function() {
    	alert("Looks like you want the Lake of Despair!\nWatch out for crocs. And I ain't talkin' about shoes.");	
    };
  } else {
    return function() {
    	alert("The Caves of Catastrophe, really?\nAlright, well....nice knowing you.");
    };
  }
}


// Part 03; Level 01; Challenge 11
adventureSelector(3)();

// Part 03; Level 01; Challenge 13
var puzzlers = [
  function ( a ) { return 8*a - 10; },
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function (number, queue) {

  var qLength = queue.lenght;
  for (var i = 0; i < qLenth; i++) {
  	number = queue.shift()(number);
  }
	return number;
};

alert(applyAndEmpty(start, puzzlers));


// Part 03; Level 01; Challenge 14
var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var solution = puzzlers[puzzlers[1](3)](puzzlers[3](9));
alert("The answer is " + solution);

