/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = ''
  let word = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      word = s[i] + word
    } else if (word.length > 0) {
      result += (result.length > 0 ? ' ' : '') + word;
      word = ''
    }
  }

  if (word.length > 0) {
    result += (result.length > 0 ? ' ' : '') + word;
  }

  return result
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = reverseWords("the sky is blue")

    expect(result).to.be.equal("blue is sky the")
  })

  it('Test2', function () {
    const result = reverseWords("  hello world  ")

    expect(result).to.be.equal("world hello")
  })

  it('Test3', function () {
    const result = reverseWords("a good   example")

    expect(result).to.be.equal("example good a")
  })
})

/** **** End Testing ******/
