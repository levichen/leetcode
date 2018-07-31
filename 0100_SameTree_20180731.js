function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(3)

    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(2)
    tree2.right = new TreeNode(3)

    const result = isSameTree(tree1, tree2)

    expect(result).to.be.true
  })

  it('Test2', function () {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)

    const tree2 = new TreeNode(1)
    tree2.right = new TreeNode(2)

    const result = isSameTree(tree1, tree2)

    expect(result).to.be.false
  })

  it('Test3', function () {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(1)

    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(1)
    tree2.right = new TreeNode(2)

    const result = isSameTree(tree1, tree2)

    expect(result).to.be.false
  })
})

/** **** End Testing ******/
