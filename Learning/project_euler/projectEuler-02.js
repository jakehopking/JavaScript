// http://projecteuler.net/problem=2

var sequence = [1,2];

var fibonacci = function(toNumber) {
  var position = 0;
  while (sequence[sequence.length - 1] < toNumber) {
    sequence.push(sequence[position] + sequence[position + 1])
    position++;
  }
  return sequence;
}

fibonacci(4000000);

$('p.array').html(sequence.join(", "));

var sumEvenFibonacciNumbers = function (num1) {
    var sum = 0;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] % num1 === 0) {
            sum = sum + sequence[i];
        }
    }
    return sum;
};

$('p.sum').html(sumEvenFibonacciNumbers(2));

// Project Euler best practive way

var projectEulerFibonacci = function(limit) {
  var sum = 0, a = 1, b = 1;
  while (b < limit) {
    if (b % 2 === 0) {
      sum = sum + b;
    }
    var h = a + b;
    a = b;
    b = h;
  }
  return sum;
}

$('p.peWay').html(projectEulerFibonacci(4000000));


// <p class="array"></p>
// <p class="sum"></p>
// <p class="peWay"></p>
