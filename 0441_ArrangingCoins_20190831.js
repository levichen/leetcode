/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i = 0
  while (true) {
    n = n - i
    if (n < 0) return i - 1
    i = i + 1
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = arrangeCoins(5)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const result = arrangeCoins(8)

    expect(result).to.be.equal(3)
  })

  it('Test3', function () {
    const result = arrangeCoins(0)

    expect(result).to.be.equal(0)
  })

  it('Test4', function () {
    const result = arrangeCoins(1)

    expect(result).to.be.equal(1)
  })

  it('Test5', function () {
    const result = arrangeCoins(10)

    expect(result).to.be.equal(4)
  })
})

/** **** End Testing ******/
