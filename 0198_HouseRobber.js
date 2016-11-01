/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;

  var a = 0;
  var b = 0;

  for (var i=0; i<nums.length; i=i+1) {
    if (i % 2 === 0) {
      a = max(a + nums[i], b);
    } else {
      b = max(b + nums[i], a);
    }
  }

  return max(a, b);
};

var max = function(num1, num2) {
  if (num1 >= num2) return num1;
  return num2;
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test House Robber', function() {
  it('Test nums = []', function() {
    var nums = [];
    var result = rob(nums);
  
    expect(result).to.equal(0);
  });

  it('Test nums = [1, 6, 10, 20, 3, 4]', function() {
    var nums = [1, 6, 10, 20, 3, 4];
    var result = rob(nums);
  
    expect(result).to.equal(30);
  });

  it('Test nums = [1, 2, 1, 1, 100, 1]', function() {
    var nums = [1, 2, 1, 1, 100, 1];
    var result = rob(nums);
  
    expect(result).to.equal(102);
  });
});

/****** End Testing ******/