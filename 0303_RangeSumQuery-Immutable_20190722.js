/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sum = []
  this.sum[0] = nums[0]

  for (let i = 1; i < nums.length; i = i + 1) {
    this.sum[i] = this.sum[i - 1] + nums[i]
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sum[j] - (this.sum[i - 1] || 0)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    var obj = new NumArray([-2, 0, 3, -5, 2, -1])

    expect(obj.sumRange(0, 2)).to.be.equal(1)
    expect(obj.sumRange(2, 5)).to.be.equal(-1)
    expect(obj.sumRange(0, 5)).to.be.equal(-3)
  })
})

/** **** End Testing ******/
