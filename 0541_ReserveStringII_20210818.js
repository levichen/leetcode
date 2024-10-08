/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split('')

  for (let i = 0; i < s.length; i = i + 1) {
    console.log(s[i])
  }
  return ''
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = reverseStr('abcdefg', 2)

    expect(result).to.be.equal('bacdfeg')
  })
})

/** **** End Testing ******/
