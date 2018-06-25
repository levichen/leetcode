function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null || root.val === null) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = maxDepth(root)

    expect(result).to.be.equal(3)
  })
})

/** **** End Testing ******/
