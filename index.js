const exampleDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
const firstTwoDrivers = returnFirstTwoDrivers(exampleDrivers);
console.log(firstTwoDrivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const lastTwoDrivers = returnLastTwoDrivers(exampleDrivers);
console.log(lastTwoDrivers);

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };

 /* const fareDoubler = function(fare) {
    return fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
  }; */

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
  };