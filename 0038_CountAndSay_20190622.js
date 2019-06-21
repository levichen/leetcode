/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1'
  for (let i = 2; i <= n; i = i + 1) {
    result = cas(result)
  }

  return result
}

/**
 * @param {string} str
 * @return {string}
 */
var cas = function (str) {
  let index = 0
  let tmp = ''

  while (index < str.length) {
    let subStr = str[index]
    index = index + 1
    let counter = 1

    while (str[index] === subStr && index < str.length) {
      counter = counter + 1
      index = index + 1
    }

    tmp = `${tmp}${counter}${subStr}`
  }

  return tmp
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('1 = 1', function () {
    const result = countAndSay(1)

    expect(result).to.be.equal('1')
  })

  it('2 = 11', function () {
    const result = countAndSay(2)

    expect(result).to.be.equal('11')
  })

  it('3 = 21', function () {
    const result = countAndSay(3)

    expect(result).to.be.equal('21')
  })

  it('4 = 1211', function () {
    const result = countAndSay(4)

    expect(result).to.be.equal('1211')
  })

  it('5 = 111221', function () {
    const result = countAndSay(5)

    expect(result).to.be.equal('111221')
  })

  it('6 = 312211', function () {
    const result = countAndSay(6)

    expect(result).to.be.equal('312211')
  })
})

/** **** End Testing ******/
