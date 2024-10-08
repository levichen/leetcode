/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return ""

  const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }

  return str1.substring(0, gcd(str1.length, str2.length))
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = gcdOfStrings("ABCABC", "ABC")

    expect(result).to.be.equal("ABC")
  })

  it('Test2', function () {
    const result = gcdOfStrings("ABABAB", "ABAB")

    expect(result).to.be.equal("AB")
  })

  it('Test3', function () {
    const result = gcdOfStrings("LEET", "CODE")

    expect(result).to.be.equal("")
  })
})

/** **** End Testing ******/
