function ListNode (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = null
  let head = null
  let c = 0

  while (l1 !== null || l2 !== null) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0

    let m = (n1 + n2 + c) % 10

    if (l3 === null) {
      l3 = new ListNode(m)
      head = l3
    } else {
      let tL = new ListNode(m)
      l3.next = tL
      l3 = tL
    }

    c = Math.floor((n1 + n2 + c) / 10)

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (c !== 0) l3.next = new ListNode(c)

  return head
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let n1 = new ListNode(3)
    let n2 = new ListNode(4)
    let n3 = new ListNode(2)
    n2.next = n1
    n3.next = n2

    let p1 = new ListNode(4)
    let p2 = new ListNode(6)
    let p3 = new ListNode(5)
    p2.next = p1
    p3.next = p2

    const result = addTwoNumbers(n3, p3)

    expect(result.val).to.be.equal(7)
    expect(result.next.val).to.be.equal(0)
    expect(result.next.next.val).to.be.equal(8)
  })

  it('Test2', function () {
    let n1 = new ListNode(3)
    let n2 = new ListNode(4)
    let n3 = new ListNode(2)
    n2.next = n1
    n3.next = n2

    let p0 = new ListNode(8)
    let p1 = new ListNode(4)
    let p2 = new ListNode(6)
    let p3 = new ListNode(5)
    p1.next = p0
    p2.next = p1
    p3.next = p2

    const result = addTwoNumbers(n3, p3)

    expect(result.val).to.be.equal(7)
    expect(result.next.val).to.be.equal(0)
    expect(result.next.next.val).to.be.equal(8)
    expect(result.next.next.next.val).to.be.equal(8)
  })

  it('Test3', function () {
    let n1 = new ListNode(5)
    let p1 = new ListNode(5)

    const result = addTwoNumbers(n1, p1)

    expect(result.val).to.be.equal(0)
    expect(result.next.val).to.be.equal(1)
  })

  it('Test4', function () {
    let n1 = new ListNode(1)
    let p1 = new ListNode(9)
    let p2 = new ListNode(9)
    p2.next = p1

    const result = addTwoNumbers(n1, p2)

    expect(result.val).to.be.equal(0)
    expect(result.next.val).to.be.equal(0)
    expect(result.next.next.val).to.be.equal(1)
  })
})

/** **** End Testing ******/
