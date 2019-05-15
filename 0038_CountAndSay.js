/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1'

  for (let i = 1; i < n; i++) {
    result = cas(result)
  }

  return result
}

/**
 * @param {string} str
 * @return {string}
 */
var cas = function (str) {
  let i = 0
  let result = ''

  while (i < str.length) {
    let subStr = str[i]
    let count = 1

    while (i < str.length && str[i] === str[i + 1]) {
      count = count + 1
      i = i + 1
    }
    result = `${result}${count}${subStr}`
    count = 0
    i = i + 1
  }

  return result
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
