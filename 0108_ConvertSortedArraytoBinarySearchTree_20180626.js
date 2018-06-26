/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return bts(nums, 0, nums.length - 1)
}

function bts (nums, left, right) {
  if (left > right) return null

  const mid = Math.floor((left + right) / 2)

  let root = new TreeNode(nums[mid])
  root.left = bts(nums, left, mid - 1)
  root.right = bts(nums, mid + 1, right)

  return root
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const nums = [1, 2, 3]

    const result = sortedArrayToBST(nums)

    expect(result.val).to.be.equal(2)
    expect(result.left.val).to.be.equal(1)
    expect(result.right.val).to.be.equal(3)
  })

  it('Test2', function () {
    const nums = [-10, -3, 0, 5, 9]

    const result = sortedArrayToBST(nums)

    expect(result.val).to.be.equal(0)
    expect(result.left.val).to.be.equal(-10)
    expect(result.left.right.val).to.be.equal(-3)
    expect(result.right.val).to.be.equal(5)
    expect(result.right.right.val).to.be.equal(9)
  })
})

/** **** End Testing ******/
