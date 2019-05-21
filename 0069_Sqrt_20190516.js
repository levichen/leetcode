/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1
  let right = x
  let answer = 0

  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    let square = mid * mid

    if (square === x) {
      return mid
    } else if (square < x) {
      answer = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return answer
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('mySqrt(4) === 2', function () {
    const result = mySqrt(4)

    expect(result).to.be.equal(2)
  })

  it('mySqrt(8) === 2', function () {
    const result = mySqrt(8)

    expect(result).to.be.equal(2)
  })

  it('mySqrt(9) === 3', function () {
    const result = mySqrt(9)

    expect(result).to.be.equal(3)
  })

  it('mySqrt(15) === 3', function () {
    const result = mySqrt(15)

    expect(result).to.be.equal(3)
  })

  it('mySqrt(16) === 4', function () {
    const result = mySqrt(16)

    expect(result).to.be.equal(4)
  })
})

/** **** End Testing ******/
