/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {}
  const answer = []

  for (let i = 0; i < nums1.length; i = i + 1) {
    if (map[nums1[i]] === undefined) map[nums1[i]] = 1
    else map[nums1[i]] = map[nums1[i]] + 1
  }

  for (let i = 0; i < nums2.length; i = i + 1) {
    if (map[nums2[i]]) {
      map[nums2[i]] = map[nums2[i]] - 1
      answer.push(nums2[i])
    }
  }

  return answer
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let result = intersect([1, 2, 2, 1], [2, 2])

    result = result.sort((a, b) => a > b)

    expect(result).to.be.deep.equal([2, 2])
  })

  it('Test2', function () {
    let result = intersect([4, 9, 5], [9, 4, 9, 8, 4])

    result = result.sort((a, b) => a > b)

    expect(result).to.be.deep.equal([4, 9])
  })
})

/** **** End Testing ******/
