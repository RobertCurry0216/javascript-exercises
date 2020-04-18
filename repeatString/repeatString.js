const repeatString = function (str, count) {
  if (count < 0) {
    return "ERROR";
  }
  let strOut = "";
  for (let i = 0; i < count; i++) {
    strOut += str;
  }
  return strOut;
};

module.exports = repeatString;
