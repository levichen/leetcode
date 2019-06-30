/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length

  reserve(nums, 0, nums.length - 1)
  reserve(nums, 0, k - 1)
  reserve(nums, k, nums.length - 1)
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reserve = function (nums, start, end) {
  while (start < end) {
    let t1 = nums[start]
    nums[start] = nums[end]
    nums[end] = t1

    start = start + 1
    end = end - 1
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 1)

    expect(arr).to.be.deep.equal([7, 1, 2, 3, 4, 5, 6])
  })

  it('Test2', function () {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 8)

    expect(arr).to.be.deep.equal([7, 1, 2, 3, 4, 5, 6])
  })
})

/** **** End Testing ******/
