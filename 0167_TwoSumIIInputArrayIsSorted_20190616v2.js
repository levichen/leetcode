/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const value = numbers[left] + numbers[right]

    if (value === target) {
      return [left + 1, right + 1]
    } else if (value < target) {
      left = left + 1
    } else {
      right = right - 1
    }
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = twoSum([2, 5, 7, 11, 15], 9)

    expect(result).to.be.deep.equal([1, 3])
  })

  it('Test2', function () {
    const result = twoSum([2, 7, 11, 15], 9)

    expect(result).to.be.deep.equal([1, 2])
  })
})

/** **** End Testing ******/
