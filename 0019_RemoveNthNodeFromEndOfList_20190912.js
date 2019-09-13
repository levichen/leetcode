const ListNode = require('./ListNode')

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const start = new ListNode()
  start.next = head

  let fast = start
  let slow = start

  for (let i = 1; i <= n + 1; i = i + 1) {
    fast = fast.next
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return start.next
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const root = new ListNode(1)
    root.next = new ListNode(2)
    root.next.next = new ListNode(3)
    root.next.next.next = new ListNode(4)
    root.next.next.next.next = new ListNode(5)

    const result = removeNthFromEnd(root, 2)

    expect(result.val).to.be.equal(1)
    expect(result.next.val).to.be.equal(2)
    expect(result.next.next.val).to.be.equal(3)
    expect(result.next.next.next.val).to.be.equal(5)
  })
})

/** **** End Testing ******/
