const caesar = function (str, shift) {
  return str
    .split("")
    .map((c) => c.charCodeAt(0))
    .map((v) => {
      if (!((64 < v && v < 91) || (96 < v && v < 123)))
        return String.fromCharCode(v);
      const offset = v >= 97 ? 96 : 64;
      const newCode = ((v - offset + shift + 26) % 26) + offset;
      return String.fromCharCode(newCode);
    })
    .join("");
};

module.exports = caesar;
