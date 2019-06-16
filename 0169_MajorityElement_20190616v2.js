/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majory = nums[0]
  let counter = 1

  for (let i = 1; i < nums.length; i = i + 1) {
    if (counter === 0 || majory === nums[i]) {
      counter = counter + 1
      majory = nums[i]
    } else {
      counter = counter - 1
    }
  }

  return majory
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = majorityElement([3, 2, 3])

    expect(result).to.be.equal(3)
  })

  it('Test2', function () {
    const result = majorityElement([2, 2, 1, 1, 1, 2, 2])

    expect(result).to.be.equal(2)
  })

  it('Test3', function () {
    const result = majorityElement([32, 41, 21, 29, 7, 53, 97, 76, 71, 53, 53, 53, 72, 53, 53, 14, 22, 53, 67, 53, 53, 53, 54, 98, 53, 46, 53, 53, 62, 53, 76, 20, 60, 53, 31, 53, 53, 53, 95, 27, 53, 53, 53, 53, 36, 59, 40, 53, 53, 64, 53, 53, 53, 21, 53, 51, 53, 53, 2, 53, 53, 53, 53, 53, 50, 53, 53, 53, 23, 88, 3, 53, 61, 19, 53, 68, 53, 35, 42, 53, 53, 48, 34, 54, 53, 75, 53, 53, 50, 44, 92, 41, 71, 53, 53, 82, 53, 53, 14, 53])

    expect(result).to.be.equal(53)
  })
})

/** **** End Testing ******/
