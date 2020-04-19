let findTheOldest = function (arr) {
  return arr.reduce((acc, e) => {
    if (!acc) return e;
    const now = new Date();
    const accAge = (acc.yearOfDeath || now.getFullYear()) - acc.yearOfBirth;
    const eAge = (e.yearOfDeath || now.getFullYear()) - e.yearOfBirth;
    if (accAge < eAge) {
      return e;
    }
    return acc;
  });
};

module.exports = findTheOldest;
