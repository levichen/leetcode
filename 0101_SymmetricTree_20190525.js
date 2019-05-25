function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true

  return isSymmetricTree(root.left, root.right)
}

/**
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
var isSymmetricTree = function (tree1, tree2) {
  if (tree1 === null && tree2 === null) return true
  if (tree1 === null || tree2 === null) return false

  return (tree1.val === tree2.val) &&
          isSymmetricTree(tree1.left, tree2.right) &&
          isSymmetricTree(tree1.right, tree2.left)
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(2)

    root.left.left = new TreeNode(3)
    root.left.right = new TreeNode(4)

    root.right.left = new TreeNode(4)
    root.right.right = new TreeNode(3)

    const result = isSymmetric(root)

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(2)

    root.left.right = new TreeNode(3)
    root.right.right = new TreeNode(3)

    const result = isSymmetric(root)

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(2)

    root.left.right = new TreeNode(3)
    root.right.left = new TreeNode(3)

    const result = isSymmetric(root)

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
