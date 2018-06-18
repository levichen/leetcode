/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0

  let maxNumber = nums[0]
  let counter = nums[0]

  for (let i = 1; i < nums.length; i = i + 1) {
    let num = nums[i]

    if (num > maxNumber && maxNumber > 0) {
      counter = counter + num
      maxNumber = Math.max(maxNumber, counter)
    } else if (num > maxNumber) {
      counter = num
      maxNumber = Math.max(maxNumber, counter)
    } else if (num + counter > 0) {
      counter = counter + num
      maxNumber = Math.max(maxNumber, counter)
    } else {
      counter = 0
    }
  }

  return maxNumber
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = maxSubArray([1, 2, 3])

    expect(result).to.be.equal(6)
  })

  it('Test2', function () {
    const result = maxSubArray([])

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const result = maxSubArray([0, -1])

    expect(result).to.be.equal(0)
  })

  it('Test4', function () {
    const result = maxSubArray([0, -1, 0, 0, 6])

    expect(result).to.be.equal(6)
  })

  it('Test5', function () {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

    expect(result).to.be.equal(6)
  })

  it('Test6', function () {
    const result = maxSubArray([-1])

    expect(result).to.be.equal(-1)
  })

  it('Test7', function () {
    const result = maxSubArray([-2, 1])

    expect(result).to.be.equal(1)
  })

  it('Test8', function () {
    const result = maxSubArray([-2, -1])

    expect(result).to.be.equal(-1)
  })

  it('Test9', function () {
    const result = maxSubArray([-1, -2])

    expect(result).to.be.equal(-1)
  })

  it('Test10', function () {
    const result = maxSubArray([-2, 3, 1, 3])

    expect(result).to.be.equal(7)
  })
})

/** **** End Testing ******/
