/**
 *  * @param {number[]} nums
 *  * @param {number} target
 *  * @return {number[]}
 * */
var twoSum = function(nums, target) {
  var map = [];

  for (var i=0; i<nums.length; i++) {
    var value = nums[i];
    var difference = target - value;

    if (map[difference] >= 0) return [ map[difference], i];
    map[value] = i;
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