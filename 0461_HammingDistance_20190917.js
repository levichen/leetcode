/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let result = 0

  while (x !== 0 || y !== 0) {
    if ((x & 1) ^ (y & 1)) result = result + 1

    x = x >> 1
    y = y >> 1
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = hammingDistance(1, 4)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const result = hammingDistance(0, 5)

    expect(result).to.be.equal(2)
  })

  it('Test3', function () {
    const result = hammingDistance(0, 0)

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
