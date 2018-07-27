
let startIndex = 0
let maxLength = 0

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  startIndex = 0
  maxLength = 0
  for (let i = 0; i < s.length; i++) {
    extendFromCenter(s, i, i, startIndex, maxLength) // for odd
    extendFromCenter(s, i, i + 1, startIndex, maxLength) // for even
  }
  return s.slice(startIndex, startIndex + maxLength)
}

/**
 * @param {string} mStr
 * @param {number} low
 * @param {number} high
 */
function extendFromCenter (mStr, low, high) {
  while (low > -1 && high < mStr.length && mStr[low] === mStr[high]) {
    low = low - 1
    high = high + 1
  }

  if ((high - low - 1) > maxLength) {
    startIndex = low + 1
    maxLength = high - low - 1
  }
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = longestPalindrome('babad')

    expect(result).to.be.equal('bab')
  })

  it('Test2', function () {
    const result = longestPalindrome('cbbd')

    expect(result).to.be.equal('bb')
  })

  it('Test3', function () {
    const result = longestPalindrome('a')

    expect(result).to.be.equal('a')
  })

  it('Test4', function () {
    const result = longestPalindrome('aa')

    expect(result).to.be.equal('aa')
  })
})

/** **** End Testing ******/
