/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const hash = {}

  for (let i = 0; i < numbers.length; i = i + 1) {
    const number = numbers[i]

    if (hash[number] !== undefined) {
      return [hash[number] + 1, i + 1]
    } else {
      hash[target - number] = i
    }
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = twoSum([2, 5, 7, 11, 15], 9)

    expect(result).to.be.deep.equal([1, 3])
  })

  it('Test2', function () {
    const result = twoSum([2, 7, 11, 15], 9)

    expect(result).to.be.deep.equal([1, 2])
  })
})

/** **** End Testing ******/
