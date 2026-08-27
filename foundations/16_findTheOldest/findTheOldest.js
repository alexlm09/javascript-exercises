const findTheOldest = function(arr) {
  return arr.reduce((total, curr, index) => {
    const yearDeath = curr.yearOfDeath ?? new Date().getFullYear();
    curr['yearOfDeath'] = yearDeath;
    const yearsOld = yearDeath - curr.yearOfBirth;

    if (index === 0) {
      return curr;
    }

    if (yearsOld > (total.yearOfDeath - total.yearOfBirth)) {
      return curr;
    }

    return total;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
