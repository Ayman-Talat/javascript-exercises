const convertToCelsius = function(fahrenheitDegree) {
  let degree = (fahrenheitDegree - 32) * 5/9;
  return Math.round(degree * 10) / 10;
};

const convertToFahrenheit = function(celsiusDegree) {
  degree = (celsiusDegree * 9/5) + 32;
  return Math.round(degree * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
