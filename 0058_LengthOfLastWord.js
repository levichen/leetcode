/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
return 0    
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const result = lengthOfLastWord('')

    expect(result).to.be.equal(0)
  })
})

/** **** End Testing ******/
