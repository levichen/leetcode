/**
 * @param {number} value
 */
function LinkedListNode (value) {
  this.value = value
  this.minValue = null
  this.next = null
}

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  /** @type {LinkedListNode} */
  this.head = null
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let newNode = new LinkedListNode(x)

  if (this.head === null) {
    newNode.minValue = newNode.value
  } else {
    newNode.minValue = Math.min(newNode.value, this.head.minValue)
    newNode.next = this.head
  }

  this.head = newNode
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.head !== null) {
    this.head = this.head.next
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.head !== null) return this.head.value
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.head !== null) return this.head.minValue
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-3)

    expect(minStack.getMin()).to.be.equal(-3)
    minStack.pop()

    expect(minStack.top()).to.be.equal(0)
    expect(minStack.getMin()).to.be.equal(-2)
  })

  it('Test2', function () {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0)
    minStack.push(-1)

    expect(minStack.getMin()).to.be.equal(-2)
    expect(minStack.top()).to.be.equal(-1)
    minStack.pop()

    expect(minStack.getMin()).to.be.equal(-2)
  })

  it('Test3', function () {
    const minStack = new MinStack()
    minStack.push(2147483646)
    minStack.push(2147483646)
    minStack.push(2147483647)

    expect(minStack.top()).to.be.equal(2147483647)
    minStack.pop()
    expect(minStack.getMin()).to.be.equal(2147483646)
    minStack.pop()
    expect(minStack.getMin()).to.be.equal(2147483646)
    minStack.pop()
    minStack.push(2147483647)
    expect(minStack.top()).to.be.equal(2147483647)
    expect(minStack.getMin()).to.be.equal(2147483647)
    minStack.push(-2147483648)
    expect(minStack.top()).to.be.equal(-2147483648)
    expect(minStack.getMin()).to.be.equal(-2147483648)
    minStack.pop()
    expect(minStack.getMin()).to.be.equal(2147483647)
  })
})

/** **** End Testing ******/
