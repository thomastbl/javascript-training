const sumAll = function (numA, numB) {
  let result = 0;

  if (numA < 0 || numB < 0) {
    return "ERROR";
  } else if (numA <= numB) {
    for (let i = numA; i <= numB; i++) {
      result += i;
    }
    return result;
  } else {
    for (let i = numA; i >= numB; i--) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
