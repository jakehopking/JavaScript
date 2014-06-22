// http://projecteuler.net/problem=1

var sumTwoNumbers = function (num1, num2, toNumber) {
    var sum = 0;
    for (var i = 0; i < toNumber; i++) {
        if (i % num1 === 0 || i % num2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
};


console.log(sumTwoNumbers(3, 5, 1000));

// or 

$('p').html(sumTwoNumbers(3, 5, 1000));