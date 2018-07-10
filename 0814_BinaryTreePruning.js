/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (root === null) return null
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)

  if (root.left === null && root.right === null && root.val === 0) return null
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
    const result = pruneTree(null)

    expect(result).to.be.equal(null)
  })

  it('Test2', function () {
    let root = new TreeNode(1)
    root.right = new TreeNode(0)
    root.right.left = new TreeNode(0)
    root.right.right = new TreeNode(1)

    console.log(root)
    const result = pruneTree(root)

    expect(result.val).to.be.equal(1)
    expect(result.right.val).to.be.equal(0)
    expect(result.right.right.val).to.be.equal(1)
    expect(result.right.left).to.be.equal(null)
  })
})

/** **** End Testing ******/
