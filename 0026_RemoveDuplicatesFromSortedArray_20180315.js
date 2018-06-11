/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let idx = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[idx] !== nums[i]) {
      idx++
      nums[idx] = nums[i]
    }
  }

  return idx + 1
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Is Same Tree', function () {
  it('Test1', function () {
    var result = removeDuplicates([0, 1, 1, 1, 1, 2])
    expect(result).to.be.equal(3)
  })

  it('Test2', function () {
    var result = removeDuplicates([0, 1, 1, 1, 1, 1, 1])
    expect(result).to.be.equal(2)
  })

  it('Test3', function () {
    var result = removeDuplicates([1, 1, 1, 1, 1, 1, 1])
    expect(result).to.be.equal(1)
  })

  it('Test4', function () {
    var result = removeDuplicates([1, 2, 3, 4, 5, 6, 7])
    expect(result).to.be.equal(7)
  })
})

/** **** End Testing ******/
