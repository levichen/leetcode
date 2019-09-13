/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return []

  nums.sort((a, b) => a - b)

  const result = []

  for (let i = 0; i < nums.length - 3; i = i + 1) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      for (let j = i + 1; j < nums.length - 2; j = j + 1) {
        if (j === i + 1 || nums[j] > nums[j - 1]) {
          let left = j + 1
          let right = nums.length - 1

          while (left < right) {
            const sum = nums[i] + nums[j] + nums[left] + nums[right]

            if (sum === target) {
              result.push([nums[i], nums[j], nums[left], nums[right]])
              let nowIndex = right
              while (nums[right] === nums[nowIndex]) right = right - 1

              nowIndex = left
              while (nums[left] === nums[nowIndex]) left = left + 1
            } else if (sum > target) {
              let nowIndex = right
              while (nums[right] === nums[nowIndex]) right = right - 1
            } else {
              let nowIndex = left
              while (nums[left] === nums[nowIndex]) left = left + 1
            }
          }
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
    const result = fourSum([1, 0, -1, 0, -2, 2], 0)

    expect(result).to.be.deep.equal([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ])
  })

  it('Test2', function () {
    const result = fourSum([0, 0, 0, 0], 0)

    expect(result).to.be.deep.equal([
      [0, 0, 0, 0]
    ])
  })
})

/** **** End Testing ******/
