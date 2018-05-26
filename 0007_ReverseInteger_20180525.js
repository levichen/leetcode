/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX_INTEGER = 2147483647

  let result = 0
  let isNativeNumber = false

  if (x < 0) {
    x = Math.abs(x)
    isNativeNumber = true
  }

  while (x !== 0) {
    let t = x % 10
    result = result * 10 + t
    if (result > MAX_INTEGER) return 0
    x = (x - t) / 10
  }

  if (isNativeNumber) return -result
  else return result
};
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
})

/** **** End Testing ******/
