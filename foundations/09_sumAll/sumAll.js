const sumAll = function(int1, int2) {
  if (!Number.isInteger(int1) | !Number.isInteger(int2) | int1 < 0 | int2 < 0) {
    return 'ERROR';
  }

  const num1 = (int1 <= int2) ? int1 : int2;
  const num2 = (int2 >= int1) ? int2 : int1;
  const rangeInts = [];

  for (let i = num1; i <= num2; i++) {
    rangeInts.push(i);
  }

  const sumInts = rangeInts.reduce((total, curr) => total + curr);
  return sumInts;
};

// Do not edit below this line
module.exports = sumAll;
