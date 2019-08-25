/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const char = '0123456789abcdef'
  let result = ''

  if (num === 0) return '0'

  while (num !== 0) {
    result = `${char[num & 15]}${result}`
    num = num >>> 4
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = toHex(26)

    expect(result).to.be.equal('1a')
  })

  it('Test2', function () {
    const result = toHex(0)

    expect(result).to.be.equal('0')
  })

  it('Test3', function () {
    const result = toHex(-1)

    expect(result).to.be.equal('ffffffff')
  })
})

/** **** End Testing ******/
