/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let count = 0

  for (let i = 0; i < points.length; i = i + 1) {
    const map = {}
    for (let j = 0; j < points.length; j = j + 1) {
      if (i !== j) {
        const distance = getDistance(points[i], points[j])

        if (map[distance] === undefined) map[distance] = 0

        map[distance] = map[distance] + 1
      }
    }

    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        const element = map[key]

        count = count + (element * (element - 1))
      }
    }
  }

  return count
}

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @return {number}
 */
var getDistance = function (p1, p2) {
  const x = p2[0] - p1[0]
  const y = p2[1] - p1[1]

  return x * x + y * y
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = getDistance([0, 0], [1, 0])

    expect(result).to.be.equal(1)
  })

  it('Test2', function () {
    const result = getDistance([2, 0], [1, 0])

    expect(result).to.be.equal(1)
  })

  it('Test3', function () {
    const result = numberOfBoomerangs([[0, 0], [1, 0], [2, 0]])

    expect(result).to.be.equal(2)
  })

  it('Test4', function () {
    const result = numberOfBoomerangs([[0, 0], [1, 0], [2, 0], [1, 1]])

    expect(result).to.be.equal(8)
  })

  it('Test5', function () {
    const result = numberOfBoomerangs([])

    expect(result).to.be.equal(0)
  })

  it('Test6', function () {
    const result = numberOfBoomerangs([[0, 0], [1, 0]])

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
