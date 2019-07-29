const TreeNode = require('./TreeNode')

/**
 * @param {TreeNode} root
 * @param {string} str
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let arr = []
  dfs(root, arr, '')

  return arr
}

/**
 * @param {TreeNode} root
 * @param {string[]} arr
 * @param {string} str
 */
var dfs = function (root, arr, str) {
  if (root !== null) {
    if (str === '') str = `${root.val}`
    else str = `${str}->${root.val}`
  } else {
    return
  }

  if (root.left !== null) dfs(root.left, arr, str)
  if (root.right !== null) dfs(root.right, arr, str)

  if (root.left === null && root.right === null) {
    arr.push(str)
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)

    root.left.left = new TreeNode(4)
    root.left.left.right = new TreeNode(6)

    root.left.right = new TreeNode(5)

    const result = binaryTreePaths(root)

    expect(result).to.be.deep.equal(['1->2->4->6', '1->2->5', '1->3'])
  })
})

/** **** End Testing ******/
