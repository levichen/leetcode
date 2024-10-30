/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0
    let rightSum = 0

    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i]
        if (leftSum === rightSum) return i
        leftSum += nums[i]
    }

    return -1
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
    it('Test1', function () {
        const result = pivotIndex([1, 7, 3, 6, 5, 6])

        expect(result).to.deep.equal(3)
    })

    it('Test2', function () {
        const result = pivotIndex([1, 2, 3])

        expect(result).to.deep.equal(-1)
    })

    it('Test3', function () {
        const result = pivotIndex([2, 1, -1])

        expect(result).to.deep.equal(0)
    })
})

/** **** End Testing ******/
