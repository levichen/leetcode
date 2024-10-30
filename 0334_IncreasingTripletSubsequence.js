/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let first = Number.MAX_SAFE_INTEGER
  let second = Number.MAX_SAFE_INTEGER    

  for (let num of nums) {
    if (num <= first) {
      first = num
    } else if (num <= second) {
      second = num
    } else {
      return true
    }
  }

  return false
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Example 1', function () {
    const result = increasingTriplet([1, 2, 3, 4, 5]);
    expect(result).to.be.equal(true);
  });

  it('Example 2', function () {
    const result = increasingTriplet([5, 4, 3, 2, 1]);
    expect(result).to.be.equal(false);
  });

  it('Example 3', function () {
    const result = increasingTriplet([2, 1, 5, 0, 4, 6]);
    expect(result).to.be.equal(true);
  });
})

/** **** End Testing ******/
