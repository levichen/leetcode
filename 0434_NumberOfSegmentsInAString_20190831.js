/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  const str = s.trim()

  if (str === '') return 0

  return str.split(/\s+/).length
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = countSegments('   Hello, my name is John  ')

    expect(result).to.be.equal(5)
  })

  it('Test2', function () {
    const result = countSegments('')

    expect(result).to.be.equal(0)
  })

  it('Test3', function () {
    const result = countSegments(' ')

    expect(result).to.be.equal(0)
  })

  it('Test4', function () {
    const result = countSegments(', , , ,        a, eaefa')

    expect(result).to.be.equal(6)
  })

  it('Test5', function () {
    const result = countSegments('Hello, my name is John')

    expect(result).to.be.equal(5)
  })
})

/** **** End Testing ******/
