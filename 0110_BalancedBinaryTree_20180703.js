/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return findDepth(root) !== -1
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function findDepth (root) {
  if (root === null) return 0

  const leftHeight = findDepth(root.left)
  if (leftHeight === -1) return -1
  const rightHeight = findDepth(root.right)
  if (rightHeight === -1) return -1

  if (Math.abs(leftHeight - rightHeight) > 1) return -1
  return Math.max(leftHeight, rightHeight) + 1
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test IS Balanced Tree', function () {
  it('Expect result will be false', function () {
    var node = new TreeNode(5)
    node.left = new TreeNode(3)
    node.right = new TreeNode(6)
    node.left.left = new TreeNode(2)
    node.left.left.left = new TreeNode(1)

    var result = isBalanced(node)

    expect(result).to.be.false
  })

  it('Expect result will be true', function () {
    var node = new TreeNode(2)
    node.left = new TreeNode(1)
    node.right = new TreeNode(3)

    var result = isBalanced(node)
    expect(result).to.be.true
  })

  it('Expect result will be false', function () {
    var node = new TreeNode(1)
    node.left = new TreeNode(2)
    node.right = new TreeNode(2)

    node.left.left = new TreeNode(3)
    node.left.right = new TreeNode(3)

    node.left.left.left = new TreeNode(4)
    node.left.left.right = new TreeNode(4)

    var result = isBalanced(node)

    expect(result).to.be.false
  })
})

/** **** End Testing ******/
