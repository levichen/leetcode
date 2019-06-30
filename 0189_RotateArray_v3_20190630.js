/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const arr = []
  const len = nums.length
  k = k % len

  for (let i = 0; i < len; i = i + 1) {
    let newIndex = (i + k) % len
    arr[newIndex] = nums[i]
  }

  for (let i = 0; i < len; i = i + 1) {
    nums[i] = arr[i]
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
