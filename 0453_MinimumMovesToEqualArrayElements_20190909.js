/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let counter = 0
  if (nums.length === 0) return counter

  let minNumber = nums[0]

  for (let i = 1; i < nums.length; i = i + 1) {
    minNumber = Math.min(minNumber, nums[i])
  }

  for (let i = 0; i < nums.length; i = i + 1) {
    counter = counter + (nums[i] - minNumber)
  }

  return counter
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = minMoves([])

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const result = minMoves([1, 1])

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const result = minMoves([1, 2])

    expect(result).to.be.equal(1)
  })

  it('Test4', function () {
    const result = minMoves([1, 2, 3])

    expect(result).to.be.equal(3)
  })

  it('Test5', function () {
    const result = minMoves([1, 3, 4])

    expect(result).to.be.equal(5)
  })

  it('Test5', function () {
    const result = minMoves([1, 2147483647])

    expect(result).to.be.equal(2147483646)
  })
})

/** **** End Testing ******/
