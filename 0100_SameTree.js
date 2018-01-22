/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null && q !== null || p !== null && q === null) return false

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Is Same Tree', function () {
  it('Test1', function () {
    var tree1 = new TreeNode(1)
    var tree2 = new TreeNode(1)

    var result = isSameTree(tree1, tree2)
    expect(result).to.be.true
  })

  it('Test2', function () {
    var arr1 = []
    var arr2 = []
    var tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(3)

    var tree2 = new TreeNode(1)
    tree2.left = new TreeNode(2)
    tree2.right = new TreeNode(3)

    var result = isSameTree(tree1, tree2)
    expect(result).to.be.true
  })
})

/****** End Testing ******/
