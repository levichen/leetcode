/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let counter = 0

  while (n) {
    n = parseInt(n / 5)
    counter = counter + n
  }

  return counter
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('3! = 6, 0', function () {
    const result = trailingZeroes(3)

    expect(result).to.be.equal(0)
  })

  it('5! = 120, 1', function () {
    const result = trailingZeroes(5)

    expect(result).to.be.equal(1)
  })

  it('6! = 720, 1', function () {
    const result = trailingZeroes(6)

    expect(result).to.be.equal(1)
  })

  it('50! 12', function () {
    const result = trailingZeroes(50)

    expect(result).to.be.equal(12)
  })
})

/** **** End Testing ******/
