function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  return arr.reduce((acc, v) => acc + v, 0);
}

function multiply(arr) {
  return arr.reduce((acc, v) => acc * v, 1);
}

function power(a, b) {
  return a ** b;
}

function factorial(num) {
  let total = 1;
  for (let i = 1; i < num + 1; i++) {
    total *= i;
  }
  return total;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
