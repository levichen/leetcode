/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (nums.length === 1) return nums[0]

  let arr = nums.sort((a, b) => b - a)
  let counter = 1
  const MAX_NUM = arr[0]

  for (let i = 1; i < arr.length; i = i + 1) {
    if (arr[i - 1] !== arr[i]) counter = counter + 1

    if (counter === 3) return arr[i]
  }

  return MAX_NUM
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = thirdMax([1, 2, 3])

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = thirdMax([1, 2, 2, 3])

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = thirdMax([3])

    expect(result).to.be.equal(3)
  })
})

/** **** End Testing ******/
