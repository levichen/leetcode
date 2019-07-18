/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.stack = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    return this.stack.pop()
  }
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const stack = new MyStack()

    stack.push(1)
    stack.push(2)
    expect(stack.top()).to.be.equal(2)
    expect(stack.pop()).to.be.equal(2)
    expect(stack.empty()).to.be.equal(false)
    expect(stack.pop()).to.be.equal(1)
    expect(stack.empty()).to.be.equal(true)
  })
})

/** **** End Testing ******/
