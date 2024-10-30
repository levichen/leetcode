/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let nonZeroIndex = 0;   

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i]
      nonZeroIndex++
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0
  }
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).to.deep.equal([1, 3, 12, 0, 0]);
  });

  it('Test2', function () {
    let nums = [0, 0, 1];
    moveZeroes(nums);
    expect(nums).to.deep.equal([1, 0, 0]);
  });

  it('Test3', function () {
    let nums = [1, 0, 1];
    moveZeroes(nums);
    expect(nums).to.deep.equal([1, 1, 0]);
  });

  it('Test4', function () {
    let nums = [0, 0, 0, 0, 0];
    moveZeroes(nums);
    expect(nums).to.deep.equal([0, 0, 0, 0, 0]);
  });

  it('Test5', function () {
    let nums = [1, 2, 3, 4, 5];
    moveZeroes(nums);
    expect(nums).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('Test6', function () {
    let nums = [0, 0, 0, 1, 2];
    moveZeroes(nums);
    expect(nums).to.deep.equal([1, 2, 0, 0, 0]);
  });

  it('Test7', function () {
    let nums = [2, 1];
    moveZeroes(nums);
    expect(nums).to.deep.equal([2, 1]);
  });

  it('Test8', function () {
    let nums = [0, 1, 0, 0, 1];
    moveZeroes(nums);
    expect(nums).to.deep.equal([1, 1, 0, 0, 0]);
  });

  it('Test9', function () {
    let nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
    moveZeroes(nums);
    expect(nums).to.deep.equal([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });

  it('Test10', function () {
    let nums = [0];
    moveZeroes(nums);
    expect(nums).to.deep.equal([0]);
  });
})

/** **** End Testing ******/
