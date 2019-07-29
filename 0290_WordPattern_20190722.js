/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const patternMap = {}
  const strMap = {}

  const arr = str.split(' ')

  if (arr.length !== pattern.length) return false

  for (let i = 0; i < pattern.length; i = i + 1) {
    if (patternMap[pattern[i]] === undefined && strMap[arr[i]] === undefined) {
      patternMap[pattern[i]] = arr[i]
      strMap[arr[i]] = pattern[i]
    } else if (patternMap[pattern[i]] !== arr[i] || strMap[arr[i]] !== pattern[i]) {
      return false
    }
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = wordPattern('abba', 'dog cat cat dog')

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = wordPattern('abba', 'dog cat cat fish')

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = wordPattern('aaaa', 'dog cat cat dog')

    expect(result).to.be.equal(false)
  })

  it('Test4', function () {
    const result = wordPattern('abba', 'dog dog dog dog')

    expect(result).to.be.equal(false)
  })

  it('Test5', function () {
    const result = wordPattern('aaaa', 'dog dog dog dog')

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
