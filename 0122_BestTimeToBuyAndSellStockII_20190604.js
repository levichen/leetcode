/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0

  if (prices.length === 0 || prices.length === 1) return 0

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - prices[i - 1]
    if (profit > 0) maxProfit = maxProfit + profit
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

    expect(result).to.be.equal(7)
  })

  it('Test2', function () {
    const result = maxProfit([1, 2, 3, 4, 5])

    expect(result).to.be.equal(4)
  })

  it('Test3', function () {
    const result = maxProfit([7, 6, 4, 3, 1])

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
