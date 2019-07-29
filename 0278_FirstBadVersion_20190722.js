
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n

    while (left < right) {
      let middle = Math.floor((left + right) / 2)
      if (isBadVersion(middle)) right = middle
      else left = middle + 1
    }

    return left
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = solution(num => num >= 6)(10)

    expect(result).to.be.equal(6)
  })

  it('Test2', function () {
    const result = solution(num => num >= 7)(10)

    expect(result).to.be.equal(7)
  })

  it('Test3', function () {
    const result = solution(num => num >= 7)(1)

    expect(result).to.be.equal(1)
  })

  it('Test4', function () {
    const result = solution(num => num >= 1)(2)

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
