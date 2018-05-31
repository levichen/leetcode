/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  let pre = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(pre) !== 0) {
      pre = pre.slice(0, pre.length - 1)
    }
  }

  return pre
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = longestCommonPrefix(['a', 'acc', 'ab'])

    expect(result).to.be.equal('a')
  })

  it('Test2', function () {
    const result = longestCommonPrefix([])

    expect(result).to.be.equal('')
  })

  it('Test3', function () {
    const result = longestCommonPrefix(['ab', 'ab', 'ab'])

    expect(result).to.be.equal('ab')
  })

  it('Test4', function () {
    const result = longestCommonPrefix(['ab', 'abccc', 'abc'])

    expect(result).to.be.equal('ab')
  })

  it('Test5', function () {
    const result = longestCommonPrefix(['flower', 'flow', 'flight'])

    expect(result).to.be.equal('fl')
  })
})

/** **** End Testing ******/
