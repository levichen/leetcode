const ListNode = require('./ListNode')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let preNode = null
  let currentNode = head
  let nextNode = null

  while (currentNode !== null) {
    nextNode = currentNode.next
    currentNode.next = preNode
    preNode = currentNode
    currentNode = nextNode
  }

  return preNode
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const node = new ListNode(1)
    node.next = new ListNode(2)
    node.next.next = new ListNode(3)
    node.next.next.next = new ListNode(4)
    node.next.next.next.next = new ListNode(5)

    const result = reverseList(node)

    expect(result.val).to.be.equal(5)
    expect(result.next.val).to.be.equal(4)
    expect(result.next.next.val).to.be.equal(3)
    expect(result.next.next.next.val).to.be.equal(2)
    expect(result.next.next.next.next.val).to.be.equal(1)
  })

  it('Test2', function () {
    const node = new ListNode(1)

    const result = reverseList(node)

    expect(result.val).to.be.equal(1)
  })
})

/** **** End Testing ******/
