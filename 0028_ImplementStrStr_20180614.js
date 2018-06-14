/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const haystackLen = haystack.length
  const needleLen = needle.length
  const threshold = haystackLen - needleLen

  if (threshold < 0) return -1
  if (needle === '') return 0

  for (let i = 0; i <= threshold; i = i + 1) {
    if (haystack.slice(i, i + needleLen) === needle) return i
  }

  return -1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = strStr('123', 'a')

    expect(result).to.be.equal(-1)
  })

  it('Test2', function () {
    const result = strStr('hello', 'll')

    expect(result).to.be.equal(2)
  })

  it('Test3', function () {
    const result = strStr('hello', 'lo')

    expect(result).to.be.equal(3)
  })

  it('Test4', function () {
    const result = strStr('hello', 'he')

    expect(result).to.be.equal(0)
  })

  it('Test5', function () {
    const result = strStr('h', 'h')

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
