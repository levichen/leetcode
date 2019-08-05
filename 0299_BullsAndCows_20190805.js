/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let a = 0
  let b = 0
  let map = {}

  for (let i = 0; i < secret.length; i = i + 1) {
    if (secret[i] === guess[i]) {
      a = a + 1
    } else {
      if (map[secret[i]] === undefined) map[secret[i]] = 0
      if (map[guess[i]] === undefined) map[guess[i]] = 0

      if (map[secret[i]] < 0) b = b + 1
      if (map[guess[i]] > 0) b = b + 1

      map[secret[i]] = map[secret[i]] + 1
      map[guess[i]] = map[guess[i]] - 1
    }
  }

  return `${a}A${b}B`
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = getHint('1123', '0111')

    expect(result).to.be.equal('1A1B')
  })

  it('Test2', function () {
    const result = getHint('1123', '4567')

    expect(result).to.be.equal('0A0B')
  })

  it('Test3', function () {
    const result = getHint('1807', '7810')

    expect(result).to.be.equal('1A3B')
  })

  it('Test4', function () {
    const result = getHint('12', '23')

    expect(result).to.be.equal('0A1B')
  })

  it('Test5', function () {
    const result = getHint('1234', '3478')

    expect(result).to.be.equal('0A2B')
  })
})

/** **** End Testing ******/
