/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let result = 0
  const bits = (x ^ y).toString(2)

  for (let i = 0; i < bits.length; i = i + 1) {
    if (bits[i] === '1') result = result + 1
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
