/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var MAX_RESULT = 2147483648
  var MIN_RESULT = -2147483648
  var result = 0

  if (x < 0) {
    result = parseInt('-' + x.toString().split('').reverse().join('').slice(0, -1))
  } else {
    result = parseInt(x.toString().split('').reverse().join(''))
  }

  if (result > MAX_RESULT || result < MIN_RESULT) {
    return 0
  } else {
    return result
  }
}

/****** End Program ******/

/****** Start Testing ******/

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

/****** End Testing ******/
