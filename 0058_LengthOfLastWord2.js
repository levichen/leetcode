/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let len = 0
  let tail = s.length - 1

  while (tail >=0 && s[tail] == ' ') {
    tail = tail - 1
  }

  while (tail >=0 && s[tail] != ' ') {
    len = len + 1
    tail = tail - 1
  }

  return len
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = lengthOfLastWord('')

    expect(result).to.be.equal(0)
  })

  it('Test2', function () {
    const result = lengthOfLastWord('123')

    expect(result).to.be.equal(3)
  })

  it('Test3', function () {
    const result = lengthOfLastWord('123 456777')

    expect(result).to.be.equal(6)
  })

  it('Test4', function () {
    const result = lengthOfLastWord('a ')

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
