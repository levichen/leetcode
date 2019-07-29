/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let sum = 0
  for (let index = i; index <= j; index = index + 1) {
    sum = sum + this.nums[index]
  }

  return sum
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
