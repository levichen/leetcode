const TreeNode = require('./TreeNode')

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (true) {
    const value = root.val

    if (p.val > value && q.val > value) {
      root = root.right
    } else if (p.val < value && q.val < value) {
      root = root.left
    } else {
      return root
    }
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    root.right.left = new TreeNode(7)
    root.right.left = new TreeNode(9)

    const result = lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4))

    expect(result.val).to.be.equal(2)
  })

  it('Test2', function () {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    root.right.left = new TreeNode(7)
    root.right.left = new TreeNode(9)

    const result = lowestCommonAncestor(root, new TreeNode(3), new TreeNode(9))

    expect(result.val).to.be.equal(6)
  })

  it('Test3', function () {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    root.right.left = new TreeNode(7)
    root.right.left = new TreeNode(9)

    const result = lowestCommonAncestor(root, new TreeNode(2), new TreeNode(6))

    expect(result.val).to.be.equal(6)
  })
})

/** **** End Testing ******/
