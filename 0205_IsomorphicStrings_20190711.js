/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashS = {}
  const hashT = {}

  for (let i = 0; i < s.length; i = i + 1) {
    if (hashS[s[i]] !== hashT[t[i]]) return false

    hashS[s[i]] = i
    hashT[t[i]] = i
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isIsomorphic('egg', 'add')

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = isIsomorphic('foo', 'bar')

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = isIsomorphic('paper', 'title')

    expect(result).to.be.equal(true)
  })

  it('Test4', function () {
    const result = isIsomorphic('a', 'b')

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
