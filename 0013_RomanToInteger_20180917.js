/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanChart = 'IVXLCDM'
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0
  let index = 0

  while (index < s.length) {
    if ((index + 1) < s.length && romanChart.indexOf(s[index]) < romanChart.indexOf(s[index + 1])) {
      result += map[s[index + 1]] - map[s[index]]
      index = index + 2
    } else {
      result += map[s[index]]
      index = index + 1
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
    const result = romanToInt('I')

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = romanToInt('III')

    expect(result).to.be.equal(3)
  })

  it('Test3', function () {
    const result = romanToInt('XIII')

    expect(result).to.be.equal(13)
  })

  it('Test4', function () {
    const result = romanToInt('XIX')

    expect(result).to.be.equal(19)
  })

  it('Test5', function () {
    const result = romanToInt('XXIV')

    expect(result).to.be.equal(24)
  })

  it('Test6', function () {
    const result = romanToInt('MCMXCIV')

    expect(result).to.be.equal(1994)
  })

  it('Test7', function () {
    const result = romanToInt('MCMXCIII')

    expect(result).to.be.equal(1993)
  })
})

/** **** End Testing ******/
