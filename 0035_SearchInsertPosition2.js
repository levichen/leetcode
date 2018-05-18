/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) high = mid - 1
    else low = mid + 1
  }

  return low
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
