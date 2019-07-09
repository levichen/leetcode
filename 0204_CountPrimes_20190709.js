/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const primes = []
  let counter = 0

  for (let i = 2; i < n; i = i + 1) {
    if (primes[i] === undefined) {
      counter = counter + 1

      for (let j = i * 2; j < n; j = j + i) {
        primes[j] = false
      }
    }
  }

  return counter
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = countPrimes(10)

    expect(result).to.be.equal(4)
  })

  it('Test2', function () {
    const result = countPrimes(2)

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
