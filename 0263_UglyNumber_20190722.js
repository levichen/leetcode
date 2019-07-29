/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num < 1) return false

  while (num % 2 === 0) num = num / 2
  while (num % 3 === 0) num = num / 3
  while (num % 5 === 0) num = num / 5

  return num === 1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isUgly(2 * 2 * 2)

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = isUgly(3 * 3 * 3)

    expect(result).to.be.equal(true)
  })

  it('Test3', function () {
    const result = isUgly(5 * 5 * 5)

    expect(result).to.be.equal(true)
  })

  it('Test4', function () {
    const result = isUgly(1)

    expect(result).to.be.equal(true)
  })

  it('Test5', function () {
    const result = isUgly(-1)

    expect(result).to.be.equal(false)
  })

  it('Test6', function () {
    const result = isUgly(0)

    expect(result).to.be.equal(false)
  })

  it('Test7', function () {
    const result = isUgly(2 * 3 * 5 * 7)

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
