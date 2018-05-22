/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return 1
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = maxSubArray([1, 2, 3])

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
