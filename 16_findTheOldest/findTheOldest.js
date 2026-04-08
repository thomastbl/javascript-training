const findTheOldest = function (array) {
  return array.reduce((acc, currentPerson) => {
    if (acc.yearOfDeath === undefined) {
      acc.yearOfDeath = new Date().getFullYear();
    }
    if (currentPerson.yearOfDeath === undefined) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }

    if (
      acc.yearOfDeath - acc.yearOfBirth <
      currentPerson.yearOfDeath - currentPerson.yearOfBirth
    ) {
      return currentPerson;
    } else {
      return acc;
    }
  }, array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
