/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 1. find max length between a and b
  const maxLength = a.length > b.length ? a.length : b.length
  const aLen = maxLength - a.length
  const bLen = maxLength - b.length
  let t = '0'
  let result = ''

  // 2. add zero until a and b length are the same
  for (let i = 0; i < aLen; i = i + 1) { a = '0' + a }

  for (let i = 0; i < bLen; i = i + 1) { b = '0' + b }

  // 3. add
  for (let i = a.length - 1; i > -1; i = i - 1) {
    let tmp = a[i] + b[i] + t
    let oneNumber = tmp.split('1').length - 1

    if (oneNumber === 3) {
      t = '1'
      result = '1' + result
    } else if (oneNumber === 2) {
      t = '1'
      result = '0' + result
    } else if (oneNumber === 1) {
      t = '0'
      result = '1' + result
    } else {
      t = '0'
      result = '0' + result
    }
  }
  if (t === '1') result = '1' + result

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test 0067 v20180621', function () {
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
