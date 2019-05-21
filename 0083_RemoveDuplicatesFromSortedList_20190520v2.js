/**
 * Definition for singly-linked list.
 */
function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next == null) return head

  let currentNode = head

  while (currentNode !== null) {
    if (currentNode.next == null) break

    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next
    } else {
      currentNode = currentNode.next
    }
  }

  return head
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let nodes = new ListNode(1)
    nodes.next = new ListNode(1)
    nodes.next.next = new ListNode(2)
    nodes.next.next.next = new ListNode(3)
    nodes.next.next.next.next = new ListNode(3)

    const result = deleteDuplicates(nodes)

    expect(result.val).to.be.equal(1)
    expect(result.next.val).to.be.equal(2)
    expect(result.next.next.val).to.be.equal(3)
  })

  it('Test2', function () {
    let nodes = new ListNode(1)
    nodes.next = new ListNode(1)
    nodes.next.next = new ListNode(2)

    const result = deleteDuplicates(nodes)

    expect(result.val).to.be.equal(1)
    expect(result.next.val).to.be.equal(2)
  })

  it('Test3', function () {
    const result = deleteDuplicates(null)

    expect(result).to.be.equal(null)
  })

  it('Test4', function () {
    let nodes = new ListNode(1)
    const result = deleteDuplicates(nodes)

    expect(result.val).to.be.equal(1)
  })
})

/** **** End Testing ******/
