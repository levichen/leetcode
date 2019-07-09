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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const fakeHead = new ListNode(-1)
  fakeHead.next = head

  let preNode = fakeHead
  let currentNode = head

  while (currentNode !== null) {
    if (currentNode.val === val) {
      preNode.next = currentNode.next
    } else {
      preNode = preNode.next
    }

    currentNode = currentNode.next
  }

  return fakeHead.next
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
    node.next.next.next = new ListNode(3)
    node.next.next.next.next = new ListNode(4)
    node.next.next.next.next.next = new ListNode(5)

    const result = removeElements(node, 3)

    expect(result.val).to.be.equal(1)
    expect(result.next.val).to.be.equal(2)
    expect(result.next.next.val).to.be.equal(4)
    expect(result.next.next.next.val).to.be.equal(5)
  })

  it('Test2', function () {
    const node = new ListNode(1)
    node.next = new ListNode(2)
    node.next.next = new ListNode(3)
    node.next.next.next = new ListNode(3)

    const result = removeElements(node, 3)

    expect(result.val).to.be.equal(1)
    expect(result.next.val).to.be.equal(2)
    expect(result.next.next).to.be.equal(null)
  })

  it('Test3', function () {
    const node = new ListNode(3)
    node.next = new ListNode(3)
    node.next.next = new ListNode(4)
    node.next.next.next = new ListNode(5)

    const result = removeElements(node, 3)

    expect(result.val).to.be.equal(4)
    expect(result.next.val).to.be.equal(5)
    expect(result.next.next).to.be.equal(null)
  })

  it('Test4', function () {
    const node = new ListNode(1)
    node.next = new ListNode(2)
    node.next.next = new ListNode(6)
    node.next.next.next = new ListNode(3)
    node.next.next.next.next = new ListNode(4)
    node.next.next.next.next.next = new ListNode(5)
    node.next.next.next.next.next.next = new ListNode(6)

    const result = removeElements(node, 6)

    expect(result.val).to.be.equal(1)
    expect(result.next.val).to.be.equal(2)
    expect(result.next.next.val).to.be.equal(3)
    expect(result.next.next.next.val).to.be.equal(4)
    expect(result.next.next.next.next.val).to.be.equal(5)
    expect(result.next.next.next.next.next).to.be.equal(null)
  })

  it('Test5', function () {
    const node = new ListNode(1)
    node.next = new ListNode(2)

    const result = removeElements(node, 2)

    expect(result.val).to.be.equal(1)
    expect(result.next).to.be.equal(null)
  })

  it('Test6', function () {
    const node = new ListNode(1)

    const result = removeElements(node, 1)

    expect(result).to.be.equal(null)
  })
})

/** **** End Testing ******/
