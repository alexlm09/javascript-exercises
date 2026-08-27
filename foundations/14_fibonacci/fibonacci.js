const fibonacci = function(index) {

  if (+index < 0) {
    return "OOPS";
  } else if (+index === 0) {
    return 0;
  }

  let lastNum = 0;
  let currentNum = 1;

  for (let i = 2; i <= +index; i++) {

    let sum = lastNum + currentNum;
    lastNum = currentNum;
    currentNum = sum;
  }

  return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
