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
  let stack = []

  for (let i = 0; i < nums.length; i = i + 1) {
    let current = new TreeNode(nums[i])
    while (stack.length > 0 && stack[stack.length - 1].val < nums[i]) {
      current.left = stack.pop()
    }

    if (stack.length > 0) {
      stack[stack.length - 1].right = current
    }

    stack.push(current)
  }

  if (stack.length > 0) {
    return stack[0]
  } else {
    return null
  }
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
