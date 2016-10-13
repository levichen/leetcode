/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = 0;

  for (var i=0; i<nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
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