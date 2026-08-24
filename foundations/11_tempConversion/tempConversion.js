const convertToCelsius = function(tempFahr) {
  const tempCels = parseFloat(((tempFahr - 32) * (5/9)).toFixed(1));
  return tempCels;
};

const convertToFahrenheit = function(tempCels) {
  const tempFahr = parseFloat((tempCels * (9/5) + 32).toFixed(1));
  return tempFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
