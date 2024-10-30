/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let result = 0
  let sumOfAltitude = 0

  for (let i = 0; i < gain.length; i++) {
    sumOfAltitude += gain[i]
    if (result < sumOfAltitude) result = sumOfAltitude
  }

  return result
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = largestAltitude([-5, 1, 5, 0, -7])

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = largestAltitude([-4, -3, -2, -1, 4, 3, 2])

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
