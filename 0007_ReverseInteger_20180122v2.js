/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // Get the max integer number by express not just hard code
  var MAX_RESULT = Math.pow(2, 31) - 1

  // Reserve the ingeger
  var result = x.toString().split('').reverse().join('')

  // Check if there is - in the string
  if (result.indexOf('-') > -1) {
    // if yes, just remove in the end of string then add to in front of string
    // because this string is native number
    result = '-' + result.slice(0, -1)
  }

  // convert string to integer
  result = parseInt(result)

  // check if the result within integer range
  if (result > MAX_RESULT || result < -(MAX_RESULT + 1)) {
    return 0
  } else {
    return result
  }
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Reserve Integer', function () {
  it('Expect reverse method could handle integer', function () {
    expect(reverse(123456)).to.be.equal(654321)
  })

  it('Expect reverse method could handle native number', function () {
    expect(reverse(-123456)).to.be.equal(-654321)
  })

  it('Expect reverse method could handle native number with zero', function () {
    expect(reverse(-1000)).to.be.equal(-1)
  })

  it('Expect reverse method could handle integer with zero', function () {
    expect(reverse(1000)).to.be.equal(1)
  })

  it('Expect reverse method could handle 32 bit limiation', function () {
    expect(reverse(1534236469)).to.be.equal(0)
  })

  it('Expect reverse method could handle 32 bit limiation', function () {
    expect(reverse(-1534236469)).to.be.equal(0)
  })

  it('Expect reverse method could handle 32 bit limiation', function () {
    expect(reverse(1563847412)).to.be.equal(0)
  })

  it('Expect reverse method could handle 32 bit limiation', function () {
    expect(reverse(-1563847412)).to.be.equal(0)
  })
})

/** **** End Testing ******/
