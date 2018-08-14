/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapping = {}

  for (let i = 0; i < nums.length; i = i + 1) {
    const element = nums[i]
    if (mapping[element] !== undefined) {
      return [mapping[element], i]
    }

    mapping[target - element] = i
  }
  return []
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = twoSum([2, 7, 11, 15], 9)

    expect(result).to.be.deep.equal([0, 1])
  })

  it('Test2', function () {
    const result = twoSum([2, 11, 7, 15], 9)

    expect(result).to.be.deep.equal([0, 2])
  })
})

/** **** End Testing ******/
