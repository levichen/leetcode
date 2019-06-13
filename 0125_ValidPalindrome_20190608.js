/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true

  const alphanumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'

  let low = 0
  let high = s.length - 1

  while (high >= low) {
    let lowChar = s[low].toLowerCase()
    let highChar = s[high].toLowerCase()

    let isLowCharDigitalOrLetter = alphanumericCharacters.indexOf(lowChar) === -1
    let isHighCharDigitalOrLetter = alphanumericCharacters.indexOf(highChar) === -1

    if (isLowCharDigitalOrLetter) {
      low = low + 1
    } else if (isHighCharDigitalOrLetter) {
      high = high - 1
    } else {
      if (lowChar !== highChar) {
        return false
      }

      low = low + 1
      high = high - 1
    }
  }

  return true
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isPalindrome('race a car')

    expect(result).to.be.equal(false)
  })

  it('Test2', function () {
    const result = isPalindrome('A man, a plan, a canal: Panama')

    expect(result).to.be.equal(true)
  })

  it('Test3', function () {
    const result = isPalindrome('')

    expect(result).to.be.equal(true)
  })

  it('Test4', function () {
    const result = isPalindrome('OP')

    expect(result).to.be.equal(false)
  })

  it('Test5', function () {
    const result = isPalindrome('0P')

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
