// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
      return fare * multiplier;
    };
  }

  function fareDoubler(fare) {
    return fare * 2;
  }

  function fareTripler(fare) {
    return fare * 3;
  }

  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }

  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }