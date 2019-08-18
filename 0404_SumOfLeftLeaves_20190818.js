const TreeNode = require('./TreeNode')

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 0

  const nodes = [root]
  let result = 0

  while (nodes.length > 0) {
    const currentNode = nodes.shift()
    if (currentNode.left !== null) {
      if (currentNode.left.left === null && currentNode.left.right === null) {
        result = result + currentNode.left.val
      }

      nodes.push(currentNode.left)
    }

    if (currentNode.right !== null) nodes.push(currentNode.right)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test0', function () {
    const root = null

    const result = sumOfLeftLeaves(root)

    expect(result).to.be.equal(0)
  })

  it('Test1', function () {
    const root = new TreeNode(3)

    const result = sumOfLeftLeaves(root)

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)

    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = sumOfLeftLeaves(root)

    expect(result).to.be.equal(24)
  })
})

/** **** End Testing ******/
