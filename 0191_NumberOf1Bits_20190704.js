/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let counter = 0

  while (n !== 0) {
    counter = counter + (n & 1)
    n = n >>> 1
  }

  return counter
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = hammingWeight(11)

    expect(result).to.be.equal(3)
  })

  it('Test2', function () {
    const result = hammingWeight(8)

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = hammingWeight(0)

    expect(result).to.be.equal(0)
  })

  it('Test4', function () {
    const result = hammingWeight(4294967293)

    expect(result).to.be.equal(31)
  })
})

/** **** End Testing ******/
