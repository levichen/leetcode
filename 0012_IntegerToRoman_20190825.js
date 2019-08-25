/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const mapping = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  const romans = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let result = ''

  for (let i = 0; i < mapping.length; i = i + 1) {
    while (true) {
      const element = romans[mapping[i]]
      if (num - element < 0) break

      result = `${result}${mapping[i]}`
      num = num - element
    }
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = intToRoman(3)

    expect(result).to.be.equal('III')
  })

  it('Test2', function () {
    const result = intToRoman(4)

    expect(result).to.be.equal('IV')
  })

  it('Test3', function () {
    const result = intToRoman(9)

    expect(result).to.be.equal('IX')
  })

  it('Test4', function () {
    const result = intToRoman(58)

    expect(result).to.be.equal('LVIII')
  })

  it('Test5', function () {
    const result = intToRoman(1994)

    expect(result).to.be.equal('MCMXCIV')
  })
})

/** **** End Testing ******/
