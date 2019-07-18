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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var findMiddleNode = function (current) {
  let fast = current
  let slow = current

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let middleNode = findMiddleNode(head)
  let rNode = reverseList(middleNode)

  while (rNode !== null) {
    if (rNode.val !== head.val) return false

    head = head.next
    rNode = rNode.next
  }

  return true
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
    node.next.next.next.next = new ListNode(2)
    node.next.next.next.next.next = new ListNode(1)

    const result = isPalindrome(node)

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
