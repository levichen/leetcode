/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hash = {}

  for (let i = 0; i < nums.length; i = i + 1) {
    if (hash[nums[i]] !== undefined) return true
    hash[nums[i]] = i
  }

  return false
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = containsDuplicate([1, 2, 3, 1])

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = containsDuplicate([1, 2, 3, 4])

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])

    expect(result).to.be.equal(true)
  })

  it('Test4', function () {
    const result = containsDuplicate([1])

    expect(result).to.be.equal(false)
  })

  it('Test5', function () {
    const result = containsDuplicate([])

    expect(result).to.be.equal(false)
  })
})

/** **** End Testing ******/
