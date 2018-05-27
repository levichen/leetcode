/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false

  const org = x
  let rev = 0

  while (x !== 0) {
    let t = x % 10
    rev = rev * 10 + t
    x = (x - t) / 10
  }

  return org === rev
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isPalindrome(11)

    expect(result).to.be.true
  })

  it('Test2', function () {
    const result = isPalindrome(1)

    expect(result).to.be.true
  })

  it('Test3', function () {
    const result = isPalindrome(121)

    expect(result).to.be.true
  })

  it('Test4', function () {
    const result = isPalindrome(12321)

    expect(result).to.be.true
  })

  it('Test5', function () {
    const result = isPalindrome(-12321)

    expect(result).to.be.false
  })
})

/** **** End Testing ******/
