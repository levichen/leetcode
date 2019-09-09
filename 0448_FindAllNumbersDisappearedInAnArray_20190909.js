/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const len = nums.length
  const result = []

  for (let i = 0; i < len; i = i + 1) {
    const index = Math.abs(nums[i]) - 1

    if (nums[index] > 0) nums[index] = -nums[index]
  }

  for (let i = 0; i < len; i = i + 1) {
    if (nums[i] > 0) result.push(i + 1)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])

    expect(result).to.be.deep.equal([5, 6])
  })
})

/** **** End Testing ******/
