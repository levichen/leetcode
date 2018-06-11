/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let idx = 0
  for (let i = 1; i < nums.length; i = i + 1) {
    if (nums[i] !== nums[idx]) {
      idx = idx + 1
      nums[idx] = nums[i]
    }
  }

  return idx + 1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = removeDuplicates([1, 2, 3, 4])

    expect(result).to.be.equal(4)
  })

  it('Test2', function () {
    const result = removeDuplicates([1, 1, 2, 2, 3, 3, 4])

    expect(result).to.be.equal(4)
  })
})

/** **** End Testing ******/
