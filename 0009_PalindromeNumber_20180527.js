/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const mStr = x.toString()

  let low = 0
  let high = mStr.length -1

  while (low < high) {
    if (mStr[low] !== mStr[high]) return false
    low = low + 1
    high = high - 1
  }

  return true
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
