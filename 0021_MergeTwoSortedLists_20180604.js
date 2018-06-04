function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0)
  let current = head

  if (l2 === null) return l1
  if (l1 === null) return l2

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  }

  if (l1 !== null) current.next = l1
  if (l2 !== null) current.next = l2

  return head.next
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

function verifySameList (l1, l2) {
  while (l1 !== null && l2 !== null) {
    expect(l1.val).to.be.equal(l2.val)
    l1 = l1.next
    l2 = l2.next
  }
}
describe('Test Cases', function () {
  it('Test1', function () {
    let n1 = new ListNode(1)
    n1.next = new ListNode(2)
    n1.next.next = new ListNode(4)

    let n2 = null

    let result = mergeTwoLists(n1, n2)

    verifySameList(result, n1)
  })

  it('Test2', function () {
    let n1 = new ListNode(1)
    n1.next = new ListNode(2)
    n1.next.next = new ListNode(4)

    let n2 = null

    let result = mergeTwoLists(n2, n1)

    verifySameList(result, n1)
  })

  it('Test3', function () {
    let n1 = new ListNode(1)
    n1.next = new ListNode(2)
    n1.next.next = new ListNode(4)

    let n2 = new ListNode(1)
    n2.next = new ListNode(3)
    n2.next.next = new ListNode(4)

    let n3 = new ListNode(1)
    n3.next = new ListNode(1)
    n3.next.next = new ListNode(2)
    n3.next.next.next = new ListNode(3)
    n3.next.next.next.next = new ListNode(4)
    n3.next.next.next.next.next = new ListNode(4)

    let result = mergeTwoLists(n1, n2)
    verifySameList(result, n3)
  })

  it('Test4', function () {
    let n1 = new ListNode(1)
    n1.next = new ListNode(2)

    let n2 = new ListNode(1)
    n2.next = new ListNode(3)
    n2.next.next = new ListNode(4)
    n2.next.next.next = new ListNode(5)

    let n3 = new ListNode(1)
    n3.next = new ListNode(1)
    n3.next.next = new ListNode(2)
    n3.next.next.next = new ListNode(3)
    n3.next.next.next.next = new ListNode(4)
    n3.next.next.next.next.next = new ListNode(5)

    let result = mergeTwoLists(n1, n2)
    verifySameList(result, n3)
  })
})

/** **** End Testing ******/
