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