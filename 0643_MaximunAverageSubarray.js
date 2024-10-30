/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let windowSum = 0
  for (let i = 0; i < k; i++) {
    windowSum += nums[i]
  }

  let maxSum = windowSum
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum + nums[i] - nums[i - k]
    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum / k
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
    expect(result).to.be.equal(12.75);
  });

  it('Test2', function () {
    const result = findMaxAverage([5, 5, 5, 5, 5], 1);
    expect(result).to.be.equal(5);
  });

  it('Test3', function () {
    const result = findMaxAverage([0, 4, 0, 3, 2], 2);
    expect(result).to.be.equal(2.5);
  });

  it('Test4', function () {
    const result = findMaxAverage([-1, -12, -5, -6, -50, -3], 3);
    expect(result).to.be.equal(-6);
  });

  it('Test5', function () {
    const result = findMaxAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
    expect(result).to.be.equal(8);
  });

  it('Test6', function () {
    const result = findMaxAverage([1, 2, 3, 4, 5], 5);
    expect(result).to.be.equal(3);
  });

  it('Test7', function () {
    const result = findMaxAverage([1, 2, 3, 4, 5], 3);
    expect(result).to.be.equal(4);
  });

  it('Test8', function () {
    const result = findMaxAverage([1, 2, 3, 4, 5], 2);
    expect(result).to.be.equal(4.5);
  });

  it('Test9', function () {
    const result = findMaxAverage([1, 2, 3, 4, 5], 1);
    expect(result).to.be.equal(5);
  });

  it('Test10', function () {
    const result = findMaxAverage([1, 12, -5, -6, 50, 3], 1);
    expect(result).to.be.equal(50);
  });
})

/** **** End Testing ******/
