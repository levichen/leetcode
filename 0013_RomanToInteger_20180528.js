/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const pos = 'IVXLCDM'
  const romanIntMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let i = 0
  let sum = 0
  while (i < s.length) {
    if (i + 1 < s.length && pos.indexOf(s[i]) < pos.indexOf(s[i + 1])) {
      sum = sum + (romanIntMap[s[i + 1]] - romanIntMap[s[i]])
      i = i + 2
    } else {
      sum = sum + romanIntMap[s[i]]
      i = i + 1
    }
  }

  return sum
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
