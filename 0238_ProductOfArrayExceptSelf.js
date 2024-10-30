/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = []

  let leftProduct = 1
  for (let i =0 ; i < nums.length; i++) {
    result[i] = leftProduct
    leftProduct *= nums[i]
  }

  let rightProduct = 1
  for (let i = nums.length - 1; i >=0; i--) {
   result[i] *= rightProduct 
   if (result [i] === -0) result[i] = 0

   rightProduct *= nums[i]
  }


  return result
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = productExceptSelf([1, 2, 3, 4])

    expect(result).to.deep.equal([24, 12, 8, 6])
  })

  it('Test2', function () {
    const result = productExceptSelf([-1, 1, 0, -3, 3])

    expect(result).to.deep.equal([0, 0, 9, 0, 0])
  })

  it('Test3', function () {
    const result = productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    expect(result).to.deep.equal([3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200, 362880])
  })

  it('Test4', function () {
    const result = productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0])

    expect(result).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3628800])
  })
})

/** **** End Testing ******/
