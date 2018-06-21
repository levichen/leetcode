/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = ''
  let aIndex = a.length - 1
  let bIndex = b.length - 1
  let carry = 0

  while (aIndex > -1 || bIndex > -1 || carry === 1) {
    carry = carry + (aIndex > -1 ? parseInt(a[aIndex--]) : 0)
    carry = carry + (bIndex > -1 ? parseInt(b[bIndex--]) : 0)

    result = (carry % 2).toString() + result
    carry = Math.floor(carry / 2)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test 0067 v20180621_2', function () {
  it('Test1', function () {
    const result = addBinary('11', '1')

    expect(result).to.be.equal('100')
  })

  it('Test2', function () {
    const result = addBinary('1010', '1011')

    expect(result).to.be.equal('10101')
  })

  it('Test3', function () {
    const result = addBinary('1', '111')

    expect(result).to.be.equal('1000')
  })

  it('Test4', function () {
    const result = addBinary('000', '111')

    expect(result).to.be.equal('111')
  })
})

/** **** End Testing ******/
