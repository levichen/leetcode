/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Index = m - 1
  let nums2Index = n - 1
  let index = m + n - 1

  while (nums1Index >= 0 && nums2Index >= 0) {
    if (nums1[nums1Index] >= nums2[nums2Index]) {
      nums1[index] = nums1[nums1Index]
      nums1Index = nums1Index - 1
    } else {
      nums1[index] = nums2[nums2Index]
      nums2Index = nums2Index - 1
    }

    index = index - 1
  }

  while (nums2Index >= 0) {
    nums1[index] = nums2[nums2Index]
    nums2Index = nums2Index - 1
    index = index - 1
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 5, 6]
    merge(arr1, arr1.length, arr2, arr2.length)

    expect(arr1).to.be.deep.equal([1, 2, 2, 3, 5, 6])
  })

  it('Test2', function () {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    merge(arr1, arr1.length, arr2, arr2.length)

    expect(arr1).to.be.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('Test3', function () {
    const arr1 = [4, 5, 6]
    const arr2 = [1, 2, 3]
    merge(arr1, arr1.length, arr2, arr2.length)

    expect(arr1).to.be.deep.equal([1, 2, 3, 4, 5, 6])
  })

  it('Test4', function () {
    const arr1 = []
    const arr2 = []
    merge(arr1, arr1.length, arr2, arr2.length)

    expect(arr1).to.be.deep.equal([])
  })

  it('Test5', function () {
    const arr1 = [1]
    const arr2 = [2]
    merge(arr1, arr1.length, arr2, arr2.length)

    expect(arr1).to.be.deep.equal([1, 2])
  })
})

/** **** End Testing ******/
