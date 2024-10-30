/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (i - 1 >= 0 && flowerbed[i - 1] == 1) {
      continue;
    }
    if (i + 1 < flowerbed.length && flowerbed[i + 1] == 1) {
      continue;
    }
    if (flowerbed[i] == 0) {
      flowerbed[i] = 1;
      --n;
    }

    if (n <= 0) {
      return true;
    }
  }

  return false;
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = canPlaceFlowers([1, 0, 0, 0, 1], 1)

    expect(result).to.be.equal(true)
  })

  it('Test2', function () {
    const result = canPlaceFlowers([1, 0, 0, 0, 1], 2)

    expect(result).to.be.equal(false)
  })

  it('Test3', function () {
    const result = canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)

    expect(result).to.be.equal(false)
  })

  it('Test4', function () {
    const result = canPlaceFlowers([0], 1)

    expect(result).to.be.equal(true)
  })
})

/** **** End Testing ******/
