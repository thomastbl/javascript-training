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

const multiply = function (array) {
  return array.reduce((acc, value) => {
    return acc * value;
  }, 1);
};

const power = function (numA, numB) {
  return numA ** numB;
};

const factorial = function (numA) {
  let n = 1;
  let fn = 1;
  while (numA >= n) {
    fn = fn * n;
    n++;
  }
  return fn;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
