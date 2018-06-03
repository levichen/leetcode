/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []

  if (s === '') return true

  for (let strIndex = 0; strIndex < s.length; strIndex++) {
    const char = s[strIndex]
    if (char === '(') {
      stack.push(')')
    } else if (char === '{') {
      stack.push('}')
    } else if (char === '[') {
      stack.push(']')
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false
      }
    }
  }

  if (stack.length !== 0) return false
  return true
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Roman To Integer', function () {
  it('Test1. Input empty should return true', function () {
    expect(isValid('')).to.be.true
  })

  it('Test2. Input () should return true', function () {
    expect(isValid('()')).to.be.true
  })

  it('Test3. Input (){}[] should return true', function () {
    expect(isValid('(){}[]')).to.be.true
  })

  it('Test4. Input ({[]}){}[] should return true', function () {
    expect(isValid('({[]}){}[]')).to.be.true
  })

  it('Test5. Input ({[}){}[] should return false', function () {
    expect(isValid('({[}){}[]')).to.be.false
  })

  it('Test6. Input [ should return false', function () {
    expect(isValid('[')).to.be.false
  })
})

/** **** End Testing ******/
