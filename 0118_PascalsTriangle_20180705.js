/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return []
  let arr = [[1]]
  for (let i = 1; i < numRows; i = i + 1) {
    arr[i] = []
    for (let j = 0; j <= i; j = j + 1) {
      let n1 = arr[i - 1][j - 1] || 0
      let n2 = arr[i - 1][j] || 0
      arr[i][j] = n1 + n2
    }
  }

  return arr
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = generate(5)
    const expectResult = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

    expect(result).to.be.deep.equal(expectResult)
  })

  it('Test2', function () {
    const result = generate(0)
    const expectResult = []

    expect(result).to.be.deep.equal(expectResult)
  })
})

/** **** End Testing ******/
