const ListNode = require('./ListNode')

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let str1 = ''
  let str2 = ''

  while (head !== null) {
    str1 = `${str1}${head.val}`
    str2 = `${head.val}${str2}`
    head = head.next
  }

  return str1 === str2
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
