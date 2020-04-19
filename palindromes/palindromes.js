const palindromes = function (str) {
  str = str
    .toLowerCase()
    .split("")
    .filter((c) => /[a-zA-Z]/.test(c))
    .join("");
  return str == str.split("").reverse().join("");
};

module.exports = palindromes;
