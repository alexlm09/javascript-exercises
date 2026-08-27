const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currNum) => total + currNum , 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currNum) => total * currNum , 1);
};

const power = function(a, b) {
  let total = a;
	for (let i = 1; i < b; i++) {
    total *= a;
  }

  return total;
};

const factorial = function(num) {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
