/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = []
  let fizz = 0
  let buzz = 0

  for (let i = 1; i <= n; i = i + 1) {
    fizz = fizz + 1
    buzz = buzz + 1
    if (fizz === 3 && buzz === 5) {
      result.push('FizzBuzz')
      fizz = 0
      buzz = 0
    } else if (buzz === 5) {
      result.push('Buzz')
      buzz = 0
    } else if (fizz === 3) {
      result.push('Fizz')
      fizz = 0
    } else {
      result.push(`${i}`)
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
    const result = fizzBuzz(15)

    expect(result).to.be.deep.equal([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ])
  })
})

/** **** End Testing ******/
