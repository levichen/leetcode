/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const dict = {}

  for (let i = 0; i < magazine.length; i = i + 1) {
    const char = magazine[i]
    if (dict[char] === undefined) dict[char] = 0

    dict[char] = dict[char] + 1
  }

  for (let i = 0; i < ransomNote.length; i = i + 1) {
    const char = ransomNote[i]
    if (dict[char] === undefined) return false
    dict[char] = dict[char] - 1

    if (dict[char] < 0) return false
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = canConstruct('a', 'b')

    expect(result).to.be.equal(false)
  })

  it('Test2', function () {
    const result = canConstruct('aa', 'ab')

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = canConstruct('aa', 'aab')

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
