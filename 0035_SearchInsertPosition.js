/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0

  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] >= target) return i
  }

  return nums.length
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = searchInsert([], 2)

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const result = searchInsert([1, 3, 5, 6], 2)

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = searchInsert([1, 3, 5, 6], 7)

    expect(result).to.be.equal(4)
  })

  it('Test4', function () {
    const result = searchInsert([1, 3, 5, 6], 0)

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
