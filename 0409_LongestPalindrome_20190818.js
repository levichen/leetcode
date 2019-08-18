/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const len = s.length
  const map = {}
  let count = 0
  if (len === 1) return 1

  for (let i = 0; i < len; i = i + 1) {
    const char = s[i]

    if (map[char] === undefined || map[char] === 0) {
      map[char] = 1
    } else {
      map[char] = map[char] - 1
      count = count + 2
    }
  }
  if (count === 0) return 1
  if (len > count) count = count + 1

  return count
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = longestPalindrome('abccccdd')

    expect(result).to.be.equal(7)
  })

  it('Test2', function () {
    const result = longestPalindrome('cdcd')

    expect(result).to.be.equal(4)
  })

  it('Test3', function () {
    const result = longestPalindrome('Aa')

    expect(result).to.be.equal(1)
  })

  it('Test4', function () {
    const result = longestPalindrome('a')

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
