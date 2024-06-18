const findTheOldest = function(people) {
  return people.reduce((max, person) => {
    const currentDate = new Date().getFullYear();
    const age = person.yearOfDeath === undefined ? currentDate - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
    return age > max[1] ? [person, age]: max;
  }, [undefined, 0])[0];
};

// Do not edit below this line
module.exports = findTheOldest;
