/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort();

  for (var i=0; i<nums.length; i=i+2) {
    if (nums[i] !== nums[i+1]) return nums[i];
  }
};

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Single Number', function() {
  it('Test1', function() {
    var input = [1, 2, 2, 3, 1];
    var result = singleNumber(input);
  
    expect(result).to.equal(3);
  });
});

/****** End Testing ******/