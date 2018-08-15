/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX_INTEGER = 2147483647
  let isNativeNumber = false
  let result = 0

  if (x < 0) {
    x = Math.abs(x)
    isNativeNumber = true
  }

  while (x !== 0) {
    const t = x % 10
    result = result * 10 + t
    if (result > MAX_INTEGER) return 0
    x = (x - t) / 10
  }

  if (isNativeNumber) return -result
  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = reverse(123)

    expect(result).to.be.equal(321)
  })

  it('Test2', function () {
    const result = reverse(-123)

    expect(result).to.be.equal(-321)
  })

  it('Test3', function () {
    const result = reverse(2147483647)

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
