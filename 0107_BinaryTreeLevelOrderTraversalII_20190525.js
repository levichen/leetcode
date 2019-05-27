
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return []

  /** @type {number[][]} */
  const result = []
  /** @type {TreeNode[]} */
  const queue = []
  queue.push(root)

  while (queue.length !== 0) {
    /** @type {number} */
    const queueSize = queue.length
    /** @type {number[]} */
    const levelList = []

    for (let i = 0; i < queueSize; i = i + 1) {
      /** @type {TreeNode} */
      const currentNode = queue.shift()

      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)

      levelList.push(currentNode.val)
    }

    result.unshift(levelList)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)

    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(2)

    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = levelOrderBottom(root)

    expect(result).to.be.deep.equal([[1, 2, 15, 7], [9, 20], [3]])
  })

  it('Test2', function () {
    const result = levelOrderBottom(null)

    expect(result).to.be.deep.equal([])
  })
})

/** **** End Testing ******/
