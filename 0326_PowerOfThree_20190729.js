/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) return false

  while (n !== 0 && n !== 1) {
    if (n % 3 !== 0) return false
    n = n / 3
  }

  return true
}

/**
   * Your NumArray object will be instantiated and called as such:
   * var obj = new NumArray(nums)
   * var param_1 = obj.sumRange(i,j)
   */
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isPowerOfThree(0)

    expect(result).to.be.equal(false)
  })

  it('Test2', function () {
    const result = isPowerOfThree(3)

    expect(result).to.be.equal(true)
  })

  it('Test3', function () {
    const result = isPowerOfThree(24)

    expect(result).to.be.equal(false)
  })

  it('Test4', function () {
    const result = isPowerOfThree(27)

    expect(result).to.be.equal(true)
  })

  it('Test5', function () {
    const result = isPowerOfThree(1)

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
