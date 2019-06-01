/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]

	const result = [1]

	for (let i = 0; i <= rowIndex; i = i + 1) {
    for (let j = i; j >= 1; j = j - 1) {
      const n1 = result[j - 1] || 0
			const n2 = result[j] || 0

			result[j] = n1 + n2
		}
  }

  return result
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = getRow(1)

		expect(result).to.be.deep.equal([1, 1])
	})

	it('Test2', function () {
    const result = getRow(0)

		expect(result).to.be.deep.equal([1])
	})

	it('Test3', function () {
    const result = getRow(3)

		expect(result).to.be.deep.equal([1, 3, 3, 1])
	})
})

/** **** End Testing ******/
