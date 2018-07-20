/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let indexA = a.length - 1
  let indexB = b.length - 1
  let carry = 0
  let result = ''

  while (indexA > -1 || indexB > -1 || carry > 0) {
    carry = carry + (indexA > -1 ? parseInt(a[indexA--]) : 0)
    carry = carry + (indexB > -1 ? parseInt(b[indexB--]) : 0)

    result = (carry % 2).toString() + result
    carry = Math.floor(carry / 2)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = addBinary('11', '1')

    expect(result).to.be.equal('100')
  })

  it('Test2', function () {
    const result = addBinary('0', '0')

    expect(result).to.be.equal('0')
  })

  it('Test3', function () {
    const result = addBinary('111', '0')

    expect(result).to.be.equal('111')
  })

  it('Test4', function () {
    const result = addBinary('111', '111')

    expect(result).to.be.equal('1110')
  })
})

/** **** End Testing ******/
