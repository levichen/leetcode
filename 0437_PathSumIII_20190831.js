const TreeNode = require('./TreeNode')

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root === null || root === undefined) return 0

  return pathSumWithRoot(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

var pathSumWithRoot = function (root, sum) {
  if (root === undefined || root === null) return 0

  return (root.val === sum ? 1 : 0) + pathSumWithRoot(root.left, sum - root.val) + pathSumWithRoot(root.right, sum - root.val)
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(10)
    root.left = new TreeNode(5)
    root.right = new TreeNode(-3)

    root.left.left = new TreeNode(3)
    root.left.right = new TreeNode(2)

    root.left.left.left = new TreeNode(3)
    root.left.left.right = new TreeNode(-2)

    root.left.right.right = new TreeNode(1)

    root.right.right = new TreeNode(11)

    const result = pathSum(root, 8)

    expect(result).to.be.equal(3)
  })

  it('Test2', function () {
    const result = pathSum(null, 8)

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const root = new TreeNode(-2)
    root.right = new TreeNode(-3)

    const result = pathSum(root, -3)

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
