/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length

  for (let i = 0; i < k; i = i + 1) {
    let t1 = nums[0]
    for (let j = 1; j < nums.length; j = j + 1) {
      let t2 = nums[j]
      nums[j] = t1
      t1 = t2
    }

    nums[0] = t1
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 1)

    expect(arr).to.be.deep.equal([7, 1, 2, 3, 4, 5, 6])
  })

  it('Test2', function () {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 8)

    expect(arr).to.be.deep.equal([7, 1, 2, 3, 4, 5, 6])
  })
})

/** **** End Testing ******/
