/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let idx = 0
  let changed = false

  for (let i=1; i <= nums.length; i=i+1, idx=idx+1) {
    if (nums[idx] === val) {
      changed = true
      for (let j=i; j < nums.length; j++, i++) {
        if (nums[j] !== val) break
      }

      if (i === nums.length) break

      let tmp = nums[idx]
      nums[idx] = nums[i] 
      nums[i] = tmp
    }
  }

  if (changed === false) idx = nums.length

  return idx
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const arr = [3, 2, 2, 3]
    const result = removeElement(arr, 3)

    expect(result).to.be.equal(2)
  })

  it('Test2', function () {
    const arr = [3, 1, 1, 3, 3, 2]
    const result = removeElement(arr, 3)

    expect(result).to.be.equal(3)
  })

  it('Test3', function () {
    const arr = [1, 3, 2, 3, 2, 2, 1, 1]
    const result = removeElement(arr, 3)

    expect(result).to.be.equal(6)
  })

  it('Test4', function () {
    const arr = [3, 3, 3, 3]
    const result = removeElement(arr, 3)

    expect(result).to.be.equal(0)
  })

  it('Test5', function () {
    const arr = []
    const result = removeElement(arr, 3)

    expect(result).to.be.equal(0)
  })

  it('Test6', function () {
    const arr = [2]
    const result = removeElement(arr, 3)

    expect(result).to.be.equal(1)
  })

  it('Test7', function () {
    const arr = [2, 2, 2, 2]

    const result = removeElement(arr, 3)

    expect(result).to.be.equal(4)
  })

  it('Test8', function () {
    const arr = [1]

    const result = removeElement(arr, 1)

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
