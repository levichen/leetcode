/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const diff = Math.abs(num1.length - num2.length)
  let result = ''

  let zero = ''
  for (let i = 0; i < diff; i = i + 1) {
    zero = `${zero}0`
  }

  if (num1.length > num2.length) {
    num2 = `${zero}${num2}`
  } else {
    num1 = `${zero}${num1}`
  }

  let bit = 0
  for (let i = num1.length - 1; i >= 0; i = i - 1) {
    let dig = parseInt(num1[i]) + parseInt(num2[i]) + bit
    result = `${dig % 10}${result}`
    bit = Math.floor(dig / 10)
  }
  if (bit !== 0) result = `1${result}`

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = addStrings('999999', '2777')

    expect(result).to.be.equal('1002776')
  })

  it('Test2', function () {
    const result = addStrings('999999', '1')

    expect(result).to.be.equal('1000000')
  })
})

/** **** End Testing ******/
