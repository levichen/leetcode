/**
 * @param {number} val
 */
function TreeNode (val) {
  /** @type {number} */
  this.val = val
  /** @type {TreeNode} */
  this.left = null
  /** @type {TreeNode} */
  this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 1

  let rootLevel = 0
  /** @type {TreeNode[]} */
  let queue = []
  queue.push(root)

  while (queue.length !== 0) {
    let subLevel = queue.length

    rootLevel = rootLevel + 1
    for (let i = 0; i < subLevel; i = i + 1) {
      const currentNode = queue.shift()

      if (currentNode.left === null && currentNode.right === null) return rootLevel
      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
    }
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = null

    const result = minDepth(root)

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const root = new TreeNode(3)

    const result = minDepth(root)

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const root = new TreeNode(3)
    root.left = new TreeNode(2)

    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = minDepth(root)

    expect(result).to.be.equal(2)
  })

  it('Test4', function () {
    const root = new TreeNode(3)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(1)

    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = minDepth(root)

    expect(result).to.be.equal(3)
  })

  it('Test5', function () {
    const root = new TreeNode(3)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(1)
    root.left.left.left = new TreeNode(9)

    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = minDepth(root)

    expect(result).to.be.equal(3)
  })
})

/** **** End Testing ******/
