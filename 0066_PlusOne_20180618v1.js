/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let t = 1
  for (let i = digits.length - 1; i > -1; i = i - 1) {
    let s = digits[i] + t

    digits[i] = (digits[i] + t) % 10
    s === 10 ? t = 1 : t = 0
  }
  if (t === 1) digits = [1, ...digits]
  return digits
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
