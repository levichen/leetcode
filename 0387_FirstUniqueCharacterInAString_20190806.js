/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = {}

  for (let i = 0; i < s.length; i = i + 1) {
    const char = s[i]
    if (map[char] === undefined) map[char] = 0

    map[char] = map[char] + 1
  }

  for (let i = 0; i < s.length; i = i + 1) {
    const char = s[i]

    if (map[char] === 1) return i
  }

  return -1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = firstUniqChar('aabb')

    expect(result).to.be.equal(-1)
  })

  it('Test2', function () {
    const result = firstUniqChar('leetcode')

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const result = firstUniqChar('loveleetcode')

    expect(result).to.be.equal(2)
  })
})

/** **** End Testing ******/
