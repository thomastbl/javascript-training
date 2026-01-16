const sumAll = function (numA, numB) {
  let result = 0;

  if (
    numA < 0 ||
    numB < 0 ||
    !Number.isInteger(numA) ||
    !Number.isInteger(numB) ||
    typeof numA !== "number" ||
    typeof numB !== "number"
  ) {
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
