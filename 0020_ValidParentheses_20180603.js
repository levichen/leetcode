/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let left = '({['
  let right = ')}]'

  if (s.length === 0) return true

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let index = left.indexOf(char)

    if (index > -1) {
      stack.push(right[index])
    } else if (stack.length === 0 || stack.pop() !== char){
      return false
    }
  }

  return stack.length === 0
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = isValid('({})')

    expect(result).to.be.true
  })

  it('Test2', function () {
    const result = isValid('()')

    expect(result).to.be.true
  })

  it('Test3', function () {
    const result = isValid('')

    expect(result).to.be.true
  })

  it('Test4', function () {
    const result = isValid('(){}[]')

    expect(result).to.be.true
  })

  it('Test5', function () {
    const result = isValid('({[]')

    expect(result).to.be.false
  })
})

/** **** End Testing ******/
