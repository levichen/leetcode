const Node = require('./Node')

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const stack = [root]
  const result = []

  if (root === null) return []

  let len = stack.length
  while (len > 0) {
    const level = []

    for (let i = 0; i < len; i = i + 1) {
      const currentNode = stack.shift()
      if (currentNode.children !== undefined) {
        for (let j = 0; j < currentNode.children.length; j = j + 1) {
          stack.push(currentNode.children[j])
        }
      }
      level.push(currentNode.val)
    }

    result.push(level)
    len = stack.length
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new Node(1)
    const level2 = [new Node(3), new Node(2), new Node(4)]
    const level3 = [new Node(5), new Node(6)]

    root.children = level2
    root.children[0].children = level3

    const result = levelOrder(root)

    expect(result).to.be.deep.equal([[1], [3, 2, 4], [5, 6]])
  })

  it('Test2', function () {
    const root = new Node(1)
    const level2 = [new Node(3), new Node(2), new Node(4)]
    const level21 = [new Node(7)]
    const level3 = [new Node(5), new Node(6)]

    root.children = level2
    root.children[0].children = level3
    root.children[1].children = level21

    const result = levelOrder(root)

    expect(result).to.be.deep.equal([[1], [3, 2, 4], [5, 6, 7]])
  })

  it('Test3', function () {
    const result = levelOrder(null)

    expect(result).to.be.deep.equal([])
  })
})

/** **** End Testing ******/
