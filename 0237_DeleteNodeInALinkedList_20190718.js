const ListNode = require('./ListNode')

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const node = new ListNode(4)
    node.next = new ListNode(5)
    node.next.next = new ListNode(1)
    node.next.next.next = new ListNode(9)

    deleteNode(node.next)

    expect(node.val).to.be.equal(4)
    expect(node.next.val).to.be.equal(1)
    expect(node.next.next.val).to.be.equal(9)
  })

  it('Test2', function () {
    const node = new ListNode(4)
    node.next = new ListNode(5)
    node.next.next = new ListNode(1)
    node.next.next.next = new ListNode(9)

    deleteNode(node.next.next)

    expect(node.val).to.be.equal(4)
    expect(node.next.val).to.be.equal(5)
    expect(node.next.next.val).to.be.equal(9)
  })
})

/** **** End Testing ******/
