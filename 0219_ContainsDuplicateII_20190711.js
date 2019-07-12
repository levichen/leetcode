/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hash = {}

  for (let i = 0; i < nums.length; i = i + 1) {
    if (hash[nums[i]] !== undefined && i - hash[nums[i]] <= k) {
      return true
    }

    hash[nums[i]] = i
  }

  return false
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = containsNearbyDuplicate([1, 2, 3, 1], 3)

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = containsNearbyDuplicate([1, 0, 1, 1], 1)

    expect(result).to.be.equal(true)
  })

  it('Test3', function () {
    const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
