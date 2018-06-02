/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 1
  let substring = s[0]

  if (s.length === 0) return 0

  for (let i = 1; i<s.length; i++) {
    if (substring.indexOf(s[i]) === -1 && substring.length + 1 > maxLength) {
      maxLength = maxLength + 1
    } else {
      while (substring.indexOf(s[i]) !== -1) {
        substring = substring.slice(1, substring.length)
      }
    }
    substring = substring + s[i]
  }

  return maxLength
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = lengthOfLongestSubstring("abcabcbb")

    expect(result).to.be.equal(3)
  })

  it('Test2', function () {
    const result = lengthOfLongestSubstring("bbbb")

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = lengthOfLongestSubstring("pwwkew")

    expect(result).to.be.equal(3)
  })

  it('Test4', function () {
    const result = lengthOfLongestSubstring("")

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
