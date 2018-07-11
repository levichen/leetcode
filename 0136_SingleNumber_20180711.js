/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length; i = i + 1) {
    result = result ^ nums[i]
  }

  return result
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Single Number', function () {
  it('Test1', function () {
    var input = [1, 2, 2, 3, 1]
    var result = singleNumber(input)

    expect(result).to.equal(3)
  })
})

/** **** End Testing ******/
