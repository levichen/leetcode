/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let operations = 0
  let map = new Map()

  for (let num of nums) {
    let target = k - num

    if (map.get(target) > 0) {
      operations++
      map.set(target, map.get(target) - 1)
    } else {
      map.set(num, (map.get(num) || 0) + 1)
    }
  }

  return operations
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = maxOperations([1, 2, 3, 4], 5)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const result = maxOperations([3, 1, 3, 4, 3], 6)

    expect(result).to.be.equal(1)
  })
})

/** **** End Testing ******/
