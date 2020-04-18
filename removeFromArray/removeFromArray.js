const removeFromArray = function (arr, ...values) {
  xarr = [...arr];
  values.forEach((value) => {
    let index = xarr.indexOf(value);
    if (index >= 0) {
      xarr.splice(index, 1);
    }
  });
  return xarr;
};

module.exports = removeFromArray;
