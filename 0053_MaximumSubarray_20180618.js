/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0
  let maxSum = nums[0]
  let counter = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (counter < 0) counter = 0

    counter = counter + nums[i]

    maxSum = Math.max(maxSum, counter)
  }

  return maxSum
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test 0053 v20180618', function () {
  it('Test1', function () {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

    expect(result).to.be.equal(6)
  })

  it('Test2', function () {
    const result = maxSubArray([-1, 9])

    expect(result).to.be.equal(9)
  })

  it('Test3', function () {
    const result = maxSubArray([9, -1])

    expect(result).to.be.equal(9)
  })

  it('Test4', function () {
    const result = maxSubArray([-1])

    expect(result).to.be.equal(-1)
  })

  it('Test5', function () {
    const result = maxSubArray([-1, -2, -3])

    expect(result).to.be.equal(-1)
  })

  it('Test6', function () {
    const result = maxSubArray([-1, 1, 2, 1])

    expect(result).to.be.equal(4)
  })

  it('Test7', function () {
    const result = maxSubArray([8, -19, 5, -4, 20])

    expect(result).to.be.equal(21)
  })

  it('Test8', function () {
    const result = maxSubArray([-2, 3, 1, 3])

    expect(result).to.be.equal(7)
  })
})

/** **** End Testing ******/
