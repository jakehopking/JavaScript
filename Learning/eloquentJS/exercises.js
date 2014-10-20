// Eloquent Javascrips 2nd Edition: http://eloquentjavascript.net/
// The following are my solutions to the exercises given

// Chapter 02

// Ex 2.2
var fizzBuzzGen = function(toNum) {
    var fizz = "Fizz", buzz = "Buzz", fizzBuzz = "FizzBuzz";
    for (var i = 3; i <= toNum; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(fizzBuzz + " " + i);
        } else if (i % 5 == 0) {
            console.log(buzz + " " + i);
        } else if (i % 3 == 0) {
            console.log(fizz + " " + i);
        }
    }
}
console.log(fizzBuzzGen(15));

// Ex 2.3
var makeGrid = function(gridSize) {
    var grid = "";
    for (var x = 0; x < gridSize; x++) {
        for (var y = 0; y < gridSize; y++) {
            if ((x + y) % 2 == 0) {
                grid += "[]";
            } else {
                grid += "  ";
            }
        }
        grid += "\n";
    }
    return grid;
}
console.log(makeGrid(12));