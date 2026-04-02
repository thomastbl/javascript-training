const fibonacci = function (n_number) {
  let fibonacciArray = [0, 1];
  n_number = Number(n_number);

  if (n_number >= 0) {
    for (let n = 2; n <= n_number; n++) {
      fibonacciArray[n] = fibonacciArray[n - 1] + fibonacciArray[n - 2];
    }

    return fibonacciArray[n_number];
  } else {
    return "OOPS";
  }
};
// one - two - n
// Do not edit below this line
module.exports = fibonacci;
