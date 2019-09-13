/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  let result = map[digits[0]]

  for (let i = 1; i < digits.length; i = i + 1) {
    const tmp = []
    for (let j = 0; j < result.length; j = j + 1) {
      for (let h = 0; h < map[digits[i]].length; h = h + 1) {
        tmp.push(`${result[j]}${map[digits[i]][h]}`)
      }
    }
    result = tmp
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = letterCombinations('23')

    expect(result).to.be.deep.equal(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })

  it('Test2', function () {
    const result = letterCombinations('2')

    expect(result).to.be.deep.equal(['a', 'b', 'c'])
  })

  it('Test3', function () {
    const result = letterCombinations('')

    expect(result).to.be.deep.equal([])
  })
})

/** **** End Testing ******/
