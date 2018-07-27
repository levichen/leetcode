/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let lastNoneZeroIndex = 0, current = 0; current < nums.length; current++) {
    if (nums[current] !== 0) {
      let tmp = nums[current]
      nums[current] = nums[lastNoneZeroIndex]
      nums[lastNoneZeroIndex] = tmp
      lastNoneZeroIndex = lastNoneZeroIndex + 1
    }
  }

  return nums
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let nums = [0, 1, 0, 3, 12]
    const result = moveZeroes(nums)

    expect(result).to.be.deep.equal([1, 3, 12, 0, 0])
  })

  it('Test2', function () {
    let nums = [1, 3, 12]
    const result = moveZeroes(nums)

    expect(result).to.be.deep.equal([1, 3, 12])
  })

  it('Test3', function () {
    let nums = [0, 1, 0, 3, 0, 12]
    const result = moveZeroes(nums)

    expect(result).to.be.deep.equal([1, 3, 12, 0, 0, 0])
  })
})

/** **** End Testing ******/
