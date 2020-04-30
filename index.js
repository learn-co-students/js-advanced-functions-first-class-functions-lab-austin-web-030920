const arr = ["josh", "rob", "bri", "joan", "sara", "josephine"]

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};  

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return (fare) => {
        return fare * int;
    };
};

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
};

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers (drivers, fn) {
    return fn(drivers);
};