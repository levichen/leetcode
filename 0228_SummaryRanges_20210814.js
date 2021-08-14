/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 1) return [nums[0].toString()]

  let low = nums[0]
  let t = nums[0]
  const result = []

  for (let i = 1; i <= nums.length; i = i + 1) {
    if (nums[i] - t !== 1) {
      if (low === t) {
        result.push(`${low}`)
      } else {
        result.push(`${low}->${t}`)
      }
      low = nums[i]
    }
    t = nums[i]
  }

  return result
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = summaryRanges([0])

    expect(result).to.be.deep.equal(['0'])
  })

  it('Test2', function () {
    const result = summaryRanges([1])

    expect(result).to.be.deep.equal(['1'])
  })

  it('Test3', function () {
    const result = summaryRanges([0, 1, 2, 4, 5, 7])

    expect(result).to.be.deep.equal(['0->2', '4->5', '7'])
  })

  it('Test4', function () {
    const result = summaryRanges([0, 2, 3, 4, 6, 8, 9])

    expect(result).to.be.deep.equal(['0', '2->4', '6', '8->9'])
  })

  it('Test5', function () {
    const result = summaryRanges([-1])

    expect(result).to.be.deep.equal(['-1'])
  })
})

/** **** End Testing ******/
