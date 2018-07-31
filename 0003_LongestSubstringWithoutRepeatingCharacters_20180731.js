/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length
  // put chart position in this map
  const map = {}
  let maxLen = 0
  let left = 0

  for (let right = 0; right < len; right++) {
    const current = s[right]
    // if find there his char exists, left = map[s[i]] + 1 (the last found position)
    if (map[current] !== undefined) {
      left = Math.max(left, map[current] + 1)
    }

    // point/re-point postion of current char
    map[current] = right

    // check if right - left + 1 greather than max
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = lengthOfLongestSubstring('')

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const result = lengthOfLongestSubstring('1')

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = lengthOfLongestSubstring('abcabcbb')

    expect(result).to.be.equal(3)
  })

  it('Test4', function () {
    const result = lengthOfLongestSubstring('bbbbb')

    expect(result).to.be.equal(1)
  })

  it('Test5', function () {
    const result = lengthOfLongestSubstring('pwwkew')

    expect(result).to.be.equal(3)
  })

  it('Test6', function () {
    const result = lengthOfLongestSubstring('dvdf')

    expect(result).to.be.equal(3)
  })

  it('Test7', function () {
    const result = lengthOfLongestSubstring('abba')

    expect(result).to.be.equal(2)
  })
})

/** **** End Testing ******/
