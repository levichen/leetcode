function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false

  var walker = head.next
  var runner = head.next.next

  while (1) {
    if (walker.next === null) return false
    if (runner.next === null || runner.next.next === null) return false

    walker = walker.next
    runner = runner.next.next
    if (walker === runner) return true
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('20180714: Linked List Cycle', function () {
  it('Test1', function () {
    const root = new ListNode(1)
    root.next = new ListNode(2)
    root.next.next = new ListNode(3)
    root.next.next.next = root
    const result = hasCycle(root)

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const root = new ListNode(1)
    root.next = new ListNode(2)
    root.next.next = new ListNode(3)
    const result = hasCycle(root)

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const root = new ListNode(3)
    root.next = new ListNode(2)
    root.next.next = new ListNode(0)
    root.next.next.next = new ListNode(-4)
    const result = hasCycle(root)

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
