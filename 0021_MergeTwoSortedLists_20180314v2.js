// Definition for singly-linked list.
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
  if (l2 === null) return l1
  if (l1 === null) return l2

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Merge Two Sorted Lists', function () {
  it('Expect Input One Empty List should return correct answer', function () {
    let list = new ListNode(1)
    list.next = new ListNode(2)
    list.next.next = new ListNode(3)
    list.next.next.next = new ListNode(4)

    var result = mergeTwoLists(list, null)

    while (result.next !== null) {
      expect(result.val).to.be.equal(list.val)
      result = result.next
      list = list.next
    }
  })

  it('Expect Input One Empty List should return correct answer', function () {
    let list = new ListNode(1)
    list.next = new ListNode(2)
    list.next.next = new ListNode(3)
    list.next.next.next = new ListNode(4)

    var result = mergeTwoLists(null, list)

    while (result.next !== null) {
      expect(result.val).to.be.equal(list.val)
      result = result.next
      list = list.next
    }
  })

  it('Test2', function () {
    let l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(6)

    let l2 = new ListNode(1)
    l2.next = new ListNode(2)
    l2.next.next = new ListNode(3)
    l2.next.next.next = new ListNode(8)

    let expectResult = new ListNode(1)
    expectResult.next = new ListNode(1)
    expectResult.next.next = new ListNode(2)
    expectResult.next.next.next = new ListNode(2)
    expectResult.next.next.next.next = new ListNode(3)
    expectResult.next.next.next.next.next = new ListNode(6)
    expectResult.next.next.next.next.next.next = new ListNode(8)

    let result = mergeTwoLists(l1, l2)
    while (result.next !== null) {
      expect(result.val).to.be.equal(expectResult.val)
      result = result.next
      expectResult = expectResult.next
    }
  })

  it('Test3', () => {
    let l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(4)

    let l2 = new ListNode(1)
    l2.next = new ListNode(3)
    l2.next.next = new ListNode(4)

    let expectResult = new ListNode(1)
    expectResult.next = new ListNode(1)
    expectResult.next.next = new ListNode(2)
    expectResult.next.next.next = new ListNode(3)
    expectResult.next.next.next.next = new ListNode(4)

    let result = mergeTwoLists(l1, l2)
    while (result.next !== null) {
      expect(result.val).to.be.equal(expectResult.val)
      result = result.next
      expectResult = expectResult.next
    }
  })
})

/** **** End Testing ******/
