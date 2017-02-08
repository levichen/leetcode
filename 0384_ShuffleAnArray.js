
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  var arr = this.nums.slice(0);

  for (var i = 0; i<arr.length; i++) {
    var index = Math.floor(Math.random() * (arr.length - i));
    swap(arr, i+index, i);
  }

  return arr;
};

var swap = function swap(arr, index1, index2) {
  var tmp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = tmp;
}


/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Shuffle An Array', function() {
  it('Expect origin array should be same, after shuffle', function() {
    var nums = [1, 4, 2, 3, 6, 7];

    var sol = new Solution(nums);
    expect(sol.reset()).to.deep.equal(nums);
    expect(sol.shuffle()).to.not.equal(nums);
    expect(sol.reset()).to.deep.equal(nums);
    expect(sol.shuffle()).to.not.equal(nums);
    expect(sol.reset()).to.deep.equal(nums);
  });
});

/****** End Testing ******/

