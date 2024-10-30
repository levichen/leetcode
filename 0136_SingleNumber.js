/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0

  for (let num of nums) {
    result ^= num
  }

  return result
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = singleNumber([2, 2, 1])

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = singleNumber([4, 1, 2, 1, 2])

    expect(result).to.be.equal(4)
  })

  it('Test3', function () {
    const result = singleNumber([1])

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
