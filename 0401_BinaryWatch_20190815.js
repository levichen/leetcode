/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  const bits = []
  const result = []

  for (let i = 0; i < 60; i = i + 1) {
    const bit = countBit(i)
    if (bits[bit] === undefined) bits[bit] = []

    bits[bit].push(i)
  }

  for (let i = 0; i <= num; i = i + 1) {
    const hour = i
    const min = num - i

    if (hour > 5 || min > 5) continue

    for (let j = 0; j < bits[hour].length; j = j + 1) {
      const hourBit = bits[hour][j]
      if (hourBit < 12) {
        for (let k = 0; k < bits[min].length; k = k + 1) {
          let minBit = bits[min][k]
          if (minBit < 10) minBit = `0${minBit}`

          result.push(`${hourBit}:${minBit}`)
        }
      }
    }
  }

  return result
}

/**
 * @param {number} num
 * @return {number}
 */
var countBit = function (num) {
  let count = 0

  while (num !== 0) {
    if (num & 1) count = count + 1
    num = num >> 1
  }

  return count
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = readBinaryWatch(1).sort((a, b) => a > b)
    const expectResult = ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32'].sort((a, b) => a > b)

    expect(result).to.be.deep.equal(expectResult)
  })

  it('Test2', function () {
    // const result = readBinaryWatch(6).sort((a, b) => a > b)
    // const expectResult = ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32'].sort((a, b) => a > b)

    // expect(result).to.be.deep.equal(expectResult)
  })
})

/** **** End Testing ******/
