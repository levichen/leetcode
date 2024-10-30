/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // get the max candies
  const max = Math.max(...candies)

  // check if the kid can have the max candies
  return candies.map(candy => candy + extraCandies >= max)
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = kidsWithCandies([2, 3, 5, 1, 3], 3)

    expect(result).to.deep.equal([true, true, true, false, true])
  })

  it('Test1', function () {
    const result = kidsWithCandies([4, 2, 1, 1, 2], 1)

    expect(result).to.deep.equal([true, false, false, false, false])
  })

  it('Test1', function () {
    const result = kidsWithCandies([12, 1, 12], 10)

    expect(result).to.deep.equal([true, false, true])
  })
})

/** **** End Testing ******/
