/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const allowedSign = '-+'
  const allowedDig = '0123456789'
  const MAX_NUMBER = 2147483647
  const MIN_NUMBER = -2147483648

  let isNegtiveNumber = false
  let startIndex = 0
  let result = 0
  let myStr = str.trim()

  if (allowedSign.indexOf(myStr[0]) !== -1) startIndex = 1
  if (myStr[0] === '-') isNegtiveNumber = true

  for (let i = startIndex; i < myStr.length; i = i + 1) {
    const char = myStr[i]
    if (allowedDig.indexOf(char) === -1) break

    result = result * 10 + parseInt(char)
  }

  if (isNegtiveNumber) result = -result

  if (result < MIN_NUMBER) return MIN_NUMBER
  if (result > MAX_NUMBER) return MAX_NUMBER

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = myAtoi('   42  ')

    expect(result).to.be.equal(42)
  })

  it('Test2', function () {
    const result = myAtoi('   -42  ')

    expect(result).to.be.equal(-42)
  })

  it('Test3', function () {
    const result = myAtoi('   +42  ')

    expect(result).to.be.equal(42)
  })

  it('Test4', function () {
    const result = myAtoi('+4193 with words')

    expect(result).to.be.equal(4193)
  })

  it('Test5', function () {
    const result = myAtoi('-4193 with words')

    expect(result).to.be.equal(-4193)
  })

  it('Test6', function () {
    const result = myAtoi('4193 with words')

    expect(result).to.be.equal(4193)
  })

  it('Test7', function () {
    const result = myAtoi('words and 987')

    expect(result).to.be.equal(0)
  })

  it('Test8', function () {
    const result = myAtoi('-91283472332')

    expect(result).to.be.equal(-2147483648)
  })
})

/** **** End Testing ******/
