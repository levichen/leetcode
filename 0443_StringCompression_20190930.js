/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length < 2) return chars.length

  let char = chars[0]
  let charCounter = 1
  let inPlaceIndex = 0

  for (let i = 1; i <= chars.length; i = i + 1) {
    if (char !== chars[i] || i === chars.length) {
      chars[inPlaceIndex] = char
      char = chars[i]

      const currentCharCountInString = charCounter.toString()

      for (let j = 0; j < currentCharCountInString.length; j = j + 1) {
        inPlaceIndex = inPlaceIndex + 1
        chars[inPlaceIndex] = currentCharCountInString[j]
      }

      charCounter = 0
    }
    charCounter = charCounter + 1
  }

  return inPlaceIndex
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
