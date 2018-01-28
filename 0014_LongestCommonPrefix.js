/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  const headStr = strs[0]
  let prefix = ''
  for (let strIndex = 0; strIndex < headStr.length; strIndex++) {
    let char = headStr[strIndex]
    for (let strCounter = 1; strCounter < strs.length; strCounter++) {
      if (strs[strCounter][strIndex] !== char) return prefix
    }

    prefix = prefix + char
  }

  return prefix
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Roman To Integer', function () {
  it('Test1. Should return a', function () {
    const strs = ['a', 'ab', 'acc', 'a']
    expect(longestCommonPrefix(strs)).to.be.equal('a')
  })

  it('Test2. Should return "" ', function () {
    const strs = ['a', 'bab', 'cacc', 'a']
    expect(longestCommonPrefix(strs)).to.be.equal('')
  })

  it('Test3. Should return "" ', function () {
    const strs = []
    expect(longestCommonPrefix(strs)).to.be.equal('')
  })

  it('Test4. Should return "aa" ', function () {
    const strs = ['aa', 'aa']
    expect(longestCommonPrefix(strs)).to.be.equal('aa')
  })
})

/** **** End Testing ******/
