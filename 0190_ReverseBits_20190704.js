/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0
  const sign = n & 1

  n = n >> 1

  for (let i = 0; i < 31; i = i + 1) {
    // get least bit
    const leastBit = n & 1
    n = n >> 1

    // shipt result and + least bit
    result = (result << 1) | leastBit
  }

  if (sign) {
    result = result + Math.pow(2, 31)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = reverseBits(43261596)

    expect(result).to.be.equal(964176192)
  })

  it('Test2', function () {
    const result = reverseBits(0)

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const result = reverseBits(4294967293)

    expect(result).to.be.equal(3221225471)
  })
})

/** **** End Testing ******/
