const removeFromArray = function(arr, ...args) {
  const filteredArr = arr.filter(x => !args.includes(x));

  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
