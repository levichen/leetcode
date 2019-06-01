/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0

  let minNumber = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i = i + 1) {
    minNumber = Math.min(minNumber, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minNumber)
  }

  return maxProfit
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = maxProfit([7, 1, 5, 3, 6, 4])

    expect(result).to.be.equal(5)
  })

  it('Test2', function () {
    const result = maxProfit([7, 6, 4, 3, 1])

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const result = maxProfit([])

    expect(result).to.be.equal(0)
  })

  it('Test5', function () {
    const result = maxProfit([7, 2, 5, 1, 6, 4])

    expect(result).to.be.equal(5)
  })
})

/** **** End Testing ******/
