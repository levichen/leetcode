/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = []
  result[0] = 0

  for (let i = 1; i <= n; i = i + 1) {
    result[i] = result[i >> 1] + (i & 1)
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = countBits(2)

    expect(result).to.be.deep.equal([0, 1, 1])
  })

  it('Test2', function () {
    const result = countBits(5)

    expect(result).to.be.deep.equal([0, 1, 1, 2, 1, 2])
  })

  it('Test3', function () {
    const result = countBits(8)

    expect(result).to.be.deep.equal([0, 1, 1, 2, 1, 2, 2, 3, 1])
  })
})

/** **** End Testing ******/
