/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  let i = 0, j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i++];
    }
    if (j < word2.length) {
      result += word2[j++];
    }
  }

  return result;
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = mergeAlternately("abc", "pqr")

    expect(result).to.be.equal("apbqcr")
  })

  it('Test2', function () {
    const result = mergeAlternately("ab", "pqrs")

    expect(result).to.be.equal("apbqrs")
  })

  it('Test3', function () {
    const result = mergeAlternately("abcd", "pq")

    expect(result).to.be.equal("apbqcd")
  })
})

/** **** End Testing ******/
