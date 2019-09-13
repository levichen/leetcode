/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length === 0) return 0
  if (chars.length === 1) return 1

  let index = 0
  let result = 0

  while (index < chars.length) {
    let currentChar = chars[index]
    let count = 0

    while (index < chars.length && chars[index] === currentChar) {
      index = index + 1
      count = count + 1
    }

    chars[result] = currentChar
    result = result + 1

    let countInString = count.toString()

    if (count !== 1) {
      for (let i = 0; i < countInString.length; i = i + 1) {
        chars[result] = countInString[i]
        result = result + 1
      }
    }
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const input = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
    const result = compress(input)

    // expect(input).to.be.deep.equal(['a', '2', 'b', '2', 'c', '3'])
    expect(result).to.be.equal(6)
  })

  it('Test2', function () {
    const input = ['a']
    const result = compress(input)

    // expect(input).to.be.deep.equal('a')
    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const input = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
    const result = compress(input)

    // expect(input).to.be.deep.equal(['a', 'b', '1', '2'])
    expect(result).to.be.equal(4)
  })

  it('Test4', function () {
    const input = []
    const result = compress(input)

    // expect(input).to.be.deep.equal([])
    expect(result).to.be.equal(0)
  })

  it('Test5', function () {
    const input = ['a', 'a', 'a', 'b', 'b', 'a', 'a']
    const result = compress(input)

    // expect(input).to.be.deep.equal(['a', '3', 'b', '2', 'a', '2'])
    expect(result).to.be.equal(6)
  })
})

/** **** End Testing ******/
