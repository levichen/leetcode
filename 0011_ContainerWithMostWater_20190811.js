/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let result = 0

  while (left < right) {
    const minNumber = Math.min(height[left], height[right])

    result = Math.max(result, minNumber * (right - left))

    if (height[left] < height[right]) left = left + 1
    else right = right - 1
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])

    expect(result).to.be.equal(49)
  })

  it('Test2', function () {
    const result = maxArea([1, 1])

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
