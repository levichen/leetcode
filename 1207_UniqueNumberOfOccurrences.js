/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let numberOccurrences = new Map()
  let occurrencesSet = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (numberOccurrences.has(arr[i])) {
      numberOccurrences.set(arr[i], numberOccurrences.get(arr[i]) + 1)
    } else {
      numberOccurrences.set(arr[i], 1)
    }
  }

  for (let count of numberOccurrences.values()) {
    if (occurrencesSet.has(count)) return false
    occurrencesSet.add(count)
  }

  return true
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = uniqueOccurrences([1, 2, 2, 1, 1, 3])

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = uniqueOccurrences([1, 2])

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
