/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const hash = {}

  for (let i = 0; i < s.length; i = i + 1) {
    const sCode = s[i].charCodeAt(0)
    const tCode = t[i].charCodeAt(0)

    if (hash[sCode] === undefined) hash[sCode] = 0
    if (hash[tCode] === undefined) hash[tCode] = 0

    hash[sCode] = hash[sCode] + 1
    hash[tCode] = hash[tCode] - 1
  }

  for (const key in hash) {
    if (hash[key] !== 0) return false
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test0', function () {
    const result = isAnagram('anagram', 'nagara')

    expect(result).to.be.equal(false)
  })

  it('Test1', function () {
    const result = isAnagram('anagram', 'nagaram')

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = isAnagram('rat', 'car')

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
