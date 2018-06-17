/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  let middle = 0

  while (low <= high) {
    middle = Math.round((low + high) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return low
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = searchInsert([1, 3, 5, 6], 5)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const result = searchInsert([1, 3, 5, 6], 7)

    expect(result).to.be.equal(4)
  })

  it('Test3', function () {
    const result = searchInsert([1, 2, 3, 4, 5, 6], 2)

    expect(result).to.be.equal(1)
  })

  it('Test4', function () {
    const result = searchInsert([1, 3, 5, 6], 2)

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
