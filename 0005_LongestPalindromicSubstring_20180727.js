/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  for (let i = s.length; i > -1; i--) {
    for (let j = 0; j + i <= s.length; j++) {
      let tStr = s.slice(j, j + i)
      if (isPalindrome(tStr)) return tStr
    }
  }

  return ''
}

function isPalindrome (mStr) {
  for (let i = 0; i < mStr.length / 2; i++) {
    if (mStr[i] !== mStr[mStr.length - 1 - i]) return false
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test0', function () {
    const result = isPalindrome('baab')

    expect(result).to.be.equal(true)
  })

  it('Test0', function () {
    const result = isPalindrome('baaab')

    expect(result).to.be.equal(true)
  })

  it('Test0', function () {
    const result = isPalindrome('bacb')

    expect(result).to.be.equal(false)
  })

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
