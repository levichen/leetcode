/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const map = []
  const result = []

  for (let i = 0; i <= n; i = i + 3) {
    map[i] = 3
  }

  for (let i = 0; i <= n; i = i + 5) {
    if (map[i] === undefined) {
      map[i] = 5
    } else {
      map[i] = 15
    }
  }

  for (let i = 1; i <= n; i = i + 1) {
    if (map[i] === 15) {
      result.push('FizzBuzz')
    } else if (map[i] === 5) {
      result.push('Buzz')
    } else if (map[i] === 3) {
      result.push('Fizz')
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
