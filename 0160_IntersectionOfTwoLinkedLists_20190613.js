/**
 * @param {number} val
 */
function ListNode (val) {
  /** @type {number} */
  this.val = val
  /** @type {ListNode} */
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null

  let listA = headA
  let listB = headB

  while (listA !== listB) {
    listA = listA !== null ? listA.next : headB
    listB = listB !== null ? listB.next : headA
  }

  return listA
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let sameNodes = new ListNode(1)
    sameNodes.next = new ListNode(8)
    sameNodes.next.next = new ListNode(4)
    sameNodes.next.next.next = new ListNode(5)

    let headA = new ListNode(4)
    headA.next = sameNodes

    let headB = new ListNode(5)
    headB.next = new ListNode(0)
    headB.next.next = sameNodes

    let resultNode = getIntersectionNode(headA, headB)

    while (resultNode === null) {
      expect(resultNode).to.be.equal(sameNodes)
      resultNode = resultNode.next
      sameNodes = sameNodes.next
    }
  })

  it('Test2', function () {
    let sameNodes = new ListNode(2)
    sameNodes.next = new ListNode(4)

    let headA = new ListNode(0)
    headA.next = new ListNode(9)
    headA.next.next = new ListNode(1)
    headA.next.next.next = sameNodes

    let headB = new ListNode(3)
    headB.next = sameNodes

    let resultNode = getIntersectionNode(headA, headB)
    while (resultNode === null) {
      expect(resultNode).to.be.equal(sameNodes)
      resultNode = resultNode.next
      sameNodes = sameNodes.next
    }
  })

  it('Test3', function () {
    let headA = new ListNode(2)
    headA.next = new ListNode(6)
    headA.next.next = new ListNode(4)

    let headB = new ListNode(1)
    headB.next = new ListNode(5)

    const result = getIntersectionNode(headA, headB)

    expect(result).to.be.equal(null)
  })

  it('Test4', function () {
    const result = getIntersectionNode(null, null)

    expect(result).to.be.equal(null)
  })
})

/** **** End Testing ******/
