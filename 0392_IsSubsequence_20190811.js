/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let startIndex = 0
  for (let i = 0; i < s.length; i = i + 1) {
    let j
    for (j = startIndex; j < t.length; j = j + 1) {
      if (s[i] === t[j]) {
        startIndex = j + 1
        break
      }
    }
    if (j === t.length) return false
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isSubsequence('abc', 'ahbgdc')

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = isSubsequence('axc', 'ahbgdc')

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
