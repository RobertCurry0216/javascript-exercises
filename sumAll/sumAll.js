const sumAll = function (value1, value2) {
  if (!Number.isInteger(value1) || !Number.isInteger(value2)) {
    return "ERROR";
  }
  if (value1 < 0 || value2 < 0) {
    return "ERROR";
  }
  let total = 0;
  let start = Math.min(value1, value2);
  let stop = Math.max(value1, value2);
  for (let i = start; i <= stop; i++) {
    total += i;
  }
  return total;
};

module.exports = sumAll;
