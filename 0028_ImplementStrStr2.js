/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const haystackLen = haystack.length
  const needleLen = needle.length
  const threshold = haystackLen - needleLen

  if (haystackLen < needleLen) return -1
  if (needle === '') return 0

  for (let i = 0; i <= threshold; i = i + 1) {
    const t = i + needleLen

    if (haystack.slice(i, t) === needle) return i
  }

  return -1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = strStr('hello', '')

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const result = strStr('hello', 'll')

    expect(result).to.be.equal(2)
  })

  it('Test3', function () {
    const result = strStr('hello', 'llk')

    expect(result).to.be.equal(-1)
  })

  it('Test4', function () {
    const result = strStr('hello', 'lo')

    expect(result).to.be.equal(3)
  })

  it('Test5', function () {
    const result = strStr('', 'a')

    expect(result).to.be.equal(-1)
  })
})

/** **** End Testing ******/
