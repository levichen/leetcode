/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let minGap = Math.pow(2, 31)
  let result

  for (let i = 0; i < nums.length - 2; i = i + 1) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      let left = i + 1
      let right = nums.length - 1

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]
        const gap = Math.abs(target - sum)

        if (gap < minGap) {
          minGap = gap
          result = sum
        }

        if (sum < target) {
          left = left + 1
        } else {
          right = right - 1
        }
      }
    }
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = threeSumClosest([-1, 2, 1, -4], 1)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const result = threeSumClosest([100, 200, 300], 1)

    expect(result).to.be.equal(600)
  })

  it('Test3', function () {
    const result = threeSumClosest([-1, -1 - 1, -2, -4, -5], -12)

    expect(result).to.be.equal(-11)
  })

  it('Test4', function () {
    const result = threeSumClosest([13, 2, 0, -14, -20, 19, 8, -5, -13, -3, 20, 15, 20, 5, 13, 14, -17, -7, 12, -6, 0, 20, -19, -1, -15, -2, 8, -2, -9, 13, 0, -3, -18, -9, -9, -19, 17, -14, -19, -4, -16, 2, 0, 9, 5, -7, -4, 20, 18, 9, 0, 12, -1, 10, -17, -11, 16, -13, -14, -3, 0, 2, -18, 2, 8, 20, -15, 3, -13, -12, -2, -19, 11, 11, -10, 1, 1, -10, -2, 12, 0, 17, -19, -7, 8, -19, -17, 5, -5, -10, 8, 0, -12, 4, 19, 2, 0, 12, 14, -9, 15, 7, 0, -16, -5, 16, -12, 0, 2, -16, 14, 18, 12, 13, 5, 0, 5, 6], -59)

    expect(result).to.be.equal(-58)
  })
})

/** **** End Testing ******/
