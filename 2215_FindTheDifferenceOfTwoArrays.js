/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  let result = [[], []]

  for (const value of set1) {
    if (!set2.has(value)) result[0].push(value)
  }

  for (const value of set2) {
    if (!set1.has(value)) result[1].push(value)
  }

  return result
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = findDifference([1, 2, 3], [2, 4, 6])

    expect(result).to.deep.equal([[1, 3], [4, 6]])
  })

  it('Test1', function () {
    const result = findDifference([1, 2, 3, 3], [1, 1, 2, 2])

    expect(result).to.deep.equal([[3], []])
  })
})

/** **** End Testing ******/
