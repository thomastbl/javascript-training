const convertToCelsius = function (fahrenheitTemp) {
  if (((fahrenheitTemp - 32) * (5 / 9)) % 2 === 0) {
    return (fahrenheitTemp - 32) * (5 / 9);
  } else {
    return Number(((fahrenheitTemp - 32) * (5 / 9)).toFixed(1));
  }
};

const convertToFahrenheit = function (celsiusTemp) {
  if ((celsiusTemp * (9 / 5) + 32) % 2 === 0) {
    return celsiusTemp * (9 / 5) + 32;
  } else {
    return Number((celsiusTemp * (9 / 5) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
