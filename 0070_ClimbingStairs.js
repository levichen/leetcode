/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 1
  let sec = 2
  let result = 0

  if (n === 1 || n === 2) return n

  for (let i = 3; i <= n; i++) {
    result = first + sec
    first = sec
    sec = result
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('1 === 1', function () {
    const result = climbStairs(1)

    expect(result).to.be.equal(1)
  })

  it('2 === 2', function () {
    const result = climbStairs(2)

    expect(result).to.be.equal(2)
  })

  it('3 === 3', function () {
    const result = climbStairs(3)

    expect(result).to.be.equal(3)
  })

  it('4 === 5', function () {
    const result = climbStairs(4)

    expect(result).to.be.equal(5)
  })

  it('5 === 7', function () {
    const result = climbStairs(5)

    expect(result).to.be.equal(8)
  })
})

/** **** End Testing ******/
