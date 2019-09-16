/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const len = s.length

  if (len < 2) return false

  for (let i = 0; i < len / 2; i = i + 1) {
    const subString = s.slice(0, i + 1)
    const subStringLength = subString.length
    let isMatch = true

    for (let j = i + 1; j < len; j = j + subStringLength) {
      const comparedString = s.slice(j, j + subStringLength)

      if (subString !== comparedString) {
        isMatch = false
        break
      }
    }

    if (isMatch) return true
  }

  return false
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = repeatedSubstringPattern('abab')

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = repeatedSubstringPattern('aba')

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = repeatedSubstringPattern('abcabcabcabc')

    expect(result).to.be.equal(true)
  })

  it('Test4', function () {
    const result = repeatedSubstringPattern('abadabadabad')

    expect(result).to.be.equal(true)
  })

  it('Test5', function () {
    const result = repeatedSubstringPattern('abadabadabac')

    expect(result).to.be.equal(false)
  })

  it('Test6', function () {
    const result = repeatedSubstringPattern('a')

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
