/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (s.length < 1) return s

  const VOWELS = 'aeiouAEIOU'

  let left = 0
  let right = s.length - 1
  let str = s.split('')

  while (left < right) {
    while (VOWELS.indexOf(str[left]) === -1 && left < s.length) left = left + 1

    if (left >= right) break

    while (VOWELS.indexOf(str[right]) === -1 && right > -1) right = right - 1

    let tmp = str[left]
    str[left] = str[right]
    str[right] = tmp

    left = left + 1
    right = right - 1
  }

  return str.join('')
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = reverseVowels('hello')

    expect(result).to.be.equal('holle')
  })

  it('Test2', function () {
    const result = reverseVowels('leetcode')

    expect(result).to.be.equal('leotcede')
  })

  it('Test3', function () {
    const result = reverseVowels('first')

    expect(result).to.be.equal('first')
  })

  it('Test4', function () {
    const result = reverseVowels('')

    expect(result).to.be.equal('')
  })

  it('Test5', function () {
    const result = reverseVowels('Aa')

    expect(result).to.be.equal('aA')
  })

  it('Test6', function () {
    const result = reverseVowels('.,')

    expect(result).to.be.equal('.,')
  })
})

/** **** End Testing ******/
