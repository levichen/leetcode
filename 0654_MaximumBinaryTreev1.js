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
var constructMaximumBinaryTree = function (nums) {
  return buildTree(nums, 0, nums.length - 1)
}

function buildTree (nums, left, right) {
  let maxNumber = nums[left]
  let maxNumberIndex = left

  if (left > right) return null

  // find max number and index
  for (let i = left + 1; i <= right; i = i + 1) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i]
      maxNumberIndex = i
    }
  }

  let root = new TreeNode(nums[maxNumberIndex])
  root.left = buildTree(nums, left, maxNumberIndex - 1)
  root.right = buildTree(nums, maxNumberIndex + 1, right)
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
    const result = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])

    expect(result.val).to.be.equal(6)
    expect(result.left.val).to.be.equal(3)
    expect(result.right.val).to.be.equal(5)
    expect(result.left.right.val).to.be.equal(2)
    expect(result.left.right.right.val).to.be.equal(1)
    expect(result.right.left.val).to.be.equal(0)
  })

  it('Test2', function () {
    const result = constructMaximumBinaryTree([])

    expect(result).to.be.equal(null)
  })

  it('Test3', function () {
    const result = constructMaximumBinaryTree([1, 2, 3, 4, 5])

    expect(result.val).to.be.equal(5)
    expect(result.left.val).to.be.equal(4)
    expect(result.left.left.val).to.be.equal(3)
    expect(result.left.left.left.val).to.be.equal(2)
    expect(result.left.left.left.left.val).to.be.equal(1)
  })
})

/** **** End Testing ******/
