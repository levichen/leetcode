/**
 *  * @param {number[]} nums
 *  * @param {number} target
 *  * @return {number[]}
 * */
var twoSum = function(nums, target) {
  for (var i = 0; i<=nums.length; i++) {
    for (var j =i+1; j<=nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Two Sum', function() {
  it('Expect result will be [0, 1]', function() {
    var nums = [2, 7, 11, 15];
    var target = 9
    var result = twoSum(nums, target);
  
    expect(result).to.deep.equal([0, 1]);
  });

  it('Expect result will be [0, 1]', function() {
    var nums = [0, 0];
    var target = 0
    var result = twoSum(nums, target);
  
    expect(result).to.deep.equal([0, 1]);
  });
});

/****** End Testing ******/