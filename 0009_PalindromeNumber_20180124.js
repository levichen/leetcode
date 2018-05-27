/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // the native integer is not palindrome
  // and the number which are time of ten are either
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false

  var num = 0

  // if use the string reserve method will cause overflow issue
  while (x > num) {
    // use this way to reserve the integer
    num = num * 10 + x % 10
    x = parseInt(x / 10)
  }

  /**
   * Example: x = 12321
   * Step1.
   *  x = 12321
   *  num = 0
   *
   * Step2.
   *  x = 1232
   *  num = 1
   *
   * Step3
   *  x = 123
   *  num = 12
   *
   * Step4
   *  x = 12
   *  num 123
   *
   * Break the while loop
   *
   * check if x === num or x === num / 10
   *
  */

  return (num === x) || (x === parseInt(num / 10))
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test is paln drome', function () {
  it('Expect return fasle when input native integer', function () {
    expect(isPalindrome(-1)).to.be.false
  })

  it('Expect return fasle when input times of ten', function () {
    expect(isPalindrome(1230)).to.be.false
  })

  it('Expect return fasle when input times of ten', function () {
    expect(isPalindrome(12300)).to.be.false
  })

  it('Expect return true when input 1001', function () {
    expect(isPalindrome(1001)).to.be.true
  })

  it('Leetcode test case: should return false', function () {
    expect(isPalindrome(-2147483648)).to.be.false
  })

  it('Leetcode test case: should return true', function () {
    expect(isPalindrome(1)).to.be.true
  })

  it('12321 should return true', function () {
    expect(isPalindrome(12321)).to.be.true
  })
})

/** **** End Testing ******/
