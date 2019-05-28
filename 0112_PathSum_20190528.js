/**
 * @param {number} val
 */
function TreeNode (val) {
  /** @type {number} */
  this.val = val
  /** @type {TreeNode} */
  this.left = null
  /** @type {TreeNode} */
  this.right = null
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false

  sum = sum - root.val
  // consider if this node is leaf
  if (sum === 0 && root.left === null && root.right === null) {
    return true
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(3)
    root.left = new TreeNode(2)

    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = hasPathSum(root, 5)

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const root = new TreeNode(5)
    root.left = new TreeNode(4)
    root.left.left = new TreeNode(11)
    root.left.left.left = new TreeNode(7)
    root.left.left.right = new TreeNode(2)

    root.right = new TreeNode(8)
    root.right.left = new TreeNode(13)
    root.right.right = new TreeNode(4)
    root.right.right.right = new TreeNode(1)

    const result = hasPathSum(root, 22)

    expect(result).to.be.equal(true)
  })

  // consider root === null is nothing
  it('Test3', function () {
    const result = hasPathSum(null, 0)

    expect(result).to.be.equal(false)
  })

  // consider root === null is nothing
  it('Test4', function () {
    const result = hasPathSum(null, 1)

    expect(result).to.be.equal(false)
  })

  // consider 2 levels tree
  it('Test5', function () {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)

    const result = hasPathSum(root, 1)

    expect(result).to.be.equal(false)
  })

  // Consider native number
  it('Test6', function () {
    const root = new TreeNode(-2)
    root.right = new TreeNode(-3)

    const result = hasPathSum(root, -5)

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
