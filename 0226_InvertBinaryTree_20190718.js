const TreeNode = require('./TreeNode')

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root
  let nodes = [root]

  while (nodes.length !== 0) {
    const len = nodes.length

    for (let i = 0; i < len; i = i + 1) {
      let cNode = nodes.shift()
      if (cNode.left) nodes.push(cNode.left)
      if (cNode.right)nodes.push(cNode.right)

      let tNode = cNode.left
      cNode.left = cNode.right
      cNode.right = tNode
    }
  }

  return root
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(4)
    root.left = new TreeNode(2)
    root.right = new TreeNode(7)

    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(3)

    root.right.left = new TreeNode(6)
    root.right.right = new TreeNode(9)

    const result = invertTree(root)

    expect(result.val).to.be.equal(4)
    expect(result.left.val).to.be.equal(7)
    expect(result.right.val).to.be.equal(2)

    expect(result.left.left.val).to.be.equal(9)
    expect(result.left.right.val).to.be.equal(6)

    expect(result.right.left.val).to.be.equal(3)
    expect(result.right.right.val).to.be.equal(1)
  })

  it('Test2', function () {
    const root = null

    const result = invertTree(root)

    expect(result).to.be.equal(null)
  })

  it('Test3', function () {
    const root = new TreeNode(4)

    const result = invertTree(root)

    expect(result.val).to.be.equal(4)
  })

  it('Test4', function () {
    const root = new TreeNode(4)
    root.left = new TreeNode(2)

    const result = invertTree(root)

    expect(result.val).to.be.equal(4)
    expect(result.right.val).to.be.equal(2)
    expect(result.left).to.be.equal(null)
  })

  it('Test5', function () {
    const root = new TreeNode(4)
    root.left = new TreeNode(2)
    root.right = new TreeNode(7)

    root.left.left = new TreeNode(1)

    root.right.left = new TreeNode(6)

    const result = invertTree(root)

    expect(result.val).to.be.equal(4)
    expect(result.left.val).to.be.equal(7)
    expect(result.right.val).to.be.equal(2)

    expect(result.left.left).to.be.equal(null)
    expect(result.left.right.val).to.be.equal(6)

    expect(result.right.left).to.be.equal(null)
    expect(result.right.right.val).to.be.equal(1)
  })
})

/** **** End Testing ******/
