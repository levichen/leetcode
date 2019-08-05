/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0
  let right = num

  if (num === 1) return true

  while (left < right - 1) {
    const mid = Math.floor((left + right) / 2)
    const sqrt = mid * mid

    if (sqrt === num) return true
    if (sqrt > num) right = mid
    if (sqrt < num) left = mid
  }

  return false
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isPerfectSquare(16)

    expect(result).to.be.equal(true)
  })

  it('Test1', function () {
    const result = isPerfectSquare(7)

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
