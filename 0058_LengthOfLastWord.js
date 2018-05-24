/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const s2 = s.trim()
  const arr = s2.split(' ')
  return arr[arr.length - 1].length
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
