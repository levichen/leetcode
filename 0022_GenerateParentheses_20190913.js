/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  getParenthesis(result, '', 0, 0, n)

  return result
}

/**
 * @param {string[]} result
 * @param {string} str
 * @param {number} openCounter
 * @param {number} closeCounter
 * @param {number} resultSize
 */
var getParenthesis = function (result, str, openCounter, closeCounter, resultSize) {
  if (str.length === resultSize * 2) {
    result.push(str)
    return
  }

  if (openCounter < resultSize) {
    getParenthesis(result, str + '(', openCounter + 1, closeCounter, resultSize)
  }

  if (closeCounter < openCounter) {
    getParenthesis(result, str + ')', openCounter, closeCounter + 1, resultSize)
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = generateParenthesis(3)

    expect(result).to.be.deep.equal([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()'
    ])
  })
})

/** **** End Testing ******/
