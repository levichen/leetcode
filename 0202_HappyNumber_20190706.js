/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n
  let fast = n

  do {
    slow = getDigitalNumber(slow)
    fast = getDigitalNumber(fast)
    fast = getDigitalNumber(fast)
  } while (slow !== fast)

  if (slow === 1) return true
  else return false
}

/**
 * @param {number} n
 * @return {number}
 */
var getDigitalNumber = function (n) {
  let result = 0

  while (n !== 0) {
    let tmp = n % 10
    result = result + (tmp * tmp)
    n = parseInt(n / 10)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = getDigitalNumber(100)

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = getDigitalNumber(123)

    expect(result).to.be.equal(14)
  })

  it('Test3', function () {
    const result = isHappy(19)

    expect(result).to.be.equal(true)
  })

  it('Test5', function () {
    const result = isHappy(20)

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
