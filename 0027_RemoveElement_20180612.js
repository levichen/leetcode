/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let idx = 0
  for (let i = 0; i < nums.length; i = i + 1) {
    if (nums[i] !== val) {
      nums[idx] = nums[i]
      idx = idx + 1
    }
  }

  return idx
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = removeElement([3, 2, 2, 3], 3)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

    expect(result).to.be.equal(5)
  })

  it('Test3', function () {
    const result = removeElement([2, 2, 2, 2, 2, 2, 2, 2], 2)

    expect(result).to.be.equal(0)
  })

  it('Test4', function () {
    const result = removeElement([], 2)

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
