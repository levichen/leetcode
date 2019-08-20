/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let top1 = null
  let top2 = null
  let top3 = null

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    if (element === top1 || element === top2 || element === top3) continue

    if (top1 === null || element > top1) {
      top3 = top2
      top2 = top1
      top1 = element
    } else if (top2 === null || element > top2) {
      top3 = top2
      top2 = element
    } else if (top3 === null || element > top3) {
      top3 = element
    }
  }

  if (top3 !== null) return top3
  return top1
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = thirdMax([1, 2, 3])

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = thirdMax([1, 2, 2, 3])

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = thirdMax([3])

    expect(result).to.be.equal(3)
  })
})

/** **** End Testing ******/
