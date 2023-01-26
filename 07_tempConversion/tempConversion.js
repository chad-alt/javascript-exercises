const convertToCelsius = function(fahrenheit) {
  let poop = (fahrenheit - 32) / 1.8
  return Math.round(poop * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let num = celsius * 9/5 + 32;
  return Math.round(num * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
  