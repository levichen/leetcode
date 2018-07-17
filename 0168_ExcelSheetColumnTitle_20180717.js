/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const base26 = ch.length
  let result = ''

  while (n !== 0) {
    result = ch[ --n % base26 ] + result
    n = Math.floor(n / base26)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = convertToTitle(0)

    expect(result).to.be.equal('')
  })

  it('Test2', function () {
    const result = convertToTitle(1)

    expect(result).to.be.equal('A')
  })

  it('Test3', function () {
    const result = convertToTitle(26)

    expect(result).to.be.equal('Z')
  })

  it('Test4', function () {
    const result = convertToTitle(28)

    expect(result).to.be.equal('AB')
  })

  it('Test5', function () {
    const result = convertToTitle(701)

    expect(result).to.be.equal('ZY')
  })
})

/** **** End Testing ******/
