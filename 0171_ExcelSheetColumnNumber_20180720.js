/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const ch = '-ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const base26 = 26
  let result = 0

  for (let i = s.length - 1, pow = 1; i > -1; i = i - 1, pow = pow * base26) {
    result = result + pow * ch.indexOf(s[i])
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = titleToNumber('AB')

    expect(result).to.be.equal(28)
  })

  it('Test2', function () {
    const result = titleToNumber('A')

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = titleToNumber('ZY')

    expect(result).to.be.equal(701)
  })
})

/** **** End Testing ******/
