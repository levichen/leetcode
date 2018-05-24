/**
 * Make sure how long is this array.
 *    1. if is short array, just just nest loop to find the answer
 *    2. if is a long array, just the following solution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i = i + 1) {
    const value = target - nums[i]

    if (map[ value ] !== undefined) return [map[ value ], i]
    map[nums[i]] = i
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = twoSum([2, 7, 11, 15], 26)

    expect(result).to.be.deep.equal([2, 3])
  })
})

/** **** End Testing ******/
