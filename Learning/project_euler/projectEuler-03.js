// http://projecteuler.net/problem=3

// Number and its square root
var number = 600851475143,
    numberSqrtCeil = Math.ceil(Math.sqrt(number));

// Populate an array with zeros
var zeroFilledSieve = function (length){
  var zeroArray = [];
  for (var i = 0; i < length; i++) {
    zeroArray[i] = 0;
  }
  return zeroArray;
};

// Creates an array of zeros of number sqrt length
var arrayLength = numberSqrtCeil;
var sieve = zeroFilledSieve(arrayLength);
sieve[0] = 1;
sieve[1] = 1;

// Prime number generator (any sieve[position] === 0 is a prime number)
var primeNumberSieve = function () {
  for (var i = 2; i < sieve.length; i++) {
    if (sieve[i] === 0) {
      //prime
      for (var x=i+i; x < sieve.length; x+=i) {
        sieve[x] = 1;
      }
    }
  }
};
primeNumberSieve();

// Outputs array (each 1 corresponds to a prime number in the arrays[position])
// $('p.result').html(sieve.join(', '));

// This is where we find the answer!!
// Produces list of primes to check against number

var findLargePrimeFactor = function (num) {
  var largest = 2;
  for (var i = 2; i < sieve.length; i+=1) {
    if (sieve[i] === 0) {
      //$('p.result').html(i);
      // Puts the number through our prime number sieve. Returns largest prime factor.
      if (num % i === 0) {
        //$('p.result').html(i);
        // console.log();
        largest = i;
      }
    }
  }
  return largest;
};

$('p.result').html(findLargePrimeFactor(number));

// <p class="array"></p>
// <p class="result"></p>
// <p class="final"></p>

