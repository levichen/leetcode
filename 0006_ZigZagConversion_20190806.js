/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = ''

  if (numRows === 1) return s

  for (let i = 0; i < numRows; i = i + 1) {
    const num = []
    const maxValue = (numRows - 1) * 2

    if (i === 0 || i === numRows - 1) {
      num[0] = maxValue
    } else {
      num[0] = maxValue - i * 2
      num[1] = i * 2
    }

    let idx = i
    let counter = -1

    while (idx < s.length) {
      result = result + s[idx]

      counter = counter + 1
      counter = counter % num.length

      idx = idx + num[counter]
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
    const result = convert('PAYPALISHIRING', 3)

    expect(result).to.be.equal('PAHNAPLSIIGYIR')
  })

  it('Test2', function () {
    const result = convert('PAYPALISHIRING', 4)

    expect(result).to.be.equal('PINALSIGYAHRPI')
  })

  it('Test3', function () {
    const result = convert('A', 1)

    expect(result).to.be.equal('A')
  })

  it('Test4', function () {
    const result = convert('AB', 1)

    expect(result).to.be.equal('AB')
  })
})

/** **** End Testing ******/
