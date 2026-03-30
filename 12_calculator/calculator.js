const add = function (numA, numB) {
  return numA + numB;
};

const subtract = function (numA, numB) {
  return numA - numB;
};

const sum = function (array) {
  return array.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
