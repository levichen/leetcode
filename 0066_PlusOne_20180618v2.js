/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i > -1; i = i - 1) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1
      return digits
    }

    digits[i] = 0
  }
  return [1, ...digits]
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = plusOne([1, 2, 4])

    expect(result).to.be.deep.equal([1, 2, 5])
  })

  it('Test2', function () {
    const result = plusOne([1])

    expect(result).to.be.deep.equal([2])
  })

  it('Test3', function () {
    const result = plusOne([9])

    expect(result).to.be.deep.equal([1, 0])
  })

  it('Test4', function () {
    const result = plusOne([9, 9])

    expect(result).to.be.deep.equal([1, 0, 0])
  })
})

/** **** End Testing ******/
