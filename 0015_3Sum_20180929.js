/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i = i + 1) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      let left = i + 1
      let right = nums.length - 1

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]

        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]])

          right = findCurrentRightIndex(nums, right)
          left = findCurrentLeftIndex(nums, left)
        } else if (sum > 0) {
          right = findCurrentRightIndex(nums, right)
        } else {
          left = findCurrentLeftIndex(nums, left)
        }
      }
    }
  }

  return result
}

/**
 * @param {number[]} nums
 * @param {number} currentIndex
 * @return {number}
 */
var findCurrentRightIndex = function (nums, rightIndex) {
  let currentIndex = rightIndex

  while (nums[currentIndex] === nums[rightIndex]) rightIndex = rightIndex - 1

  return rightIndex
}

/**
 * @param {number[]} nums
 * @param {number} currentIndex
 * @return {number}
 */
var findCurrentLeftIndex = function (nums, leftIndex) {
  let currentIndex = leftIndex

  while (nums[currentIndex] === nums[leftIndex]) leftIndex = leftIndex + 1

  return leftIndex
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = threeSum([-1, 0, 1, 2, -1, -4])

    expect(result).to.be.deep.equal([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
  })

  it('Test2', function () {
    const result = threeSum([0, 0, 0])

    expect(result).to.be.deep.equal([
      [0, 0, 0]
    ])
  })

  it('Test3', function () {
    const result = threeSum([-2, 0, 0, 2, 2])

    expect(result).to.be.deep.equal([
      [-2, 0, 2]
    ])
  })
})

/** **** End Testing ******/
