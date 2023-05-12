// Code your solution in this file!
const returnFirstTwoDrivers = arr => arr.slice(0,2) 

const returnLastTwoDrivers = arr => arr.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (int) {
  return fare => fare * int
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (driversArr, func) {
  return func(driversArr)
}