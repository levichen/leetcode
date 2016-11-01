/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num ===1) return true;

  var mStr = num.toString(4);
  
  return /^10+$/.test(mStr);
};

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Quick Sort', function() {
  it('Expect 4 is true', function() {
    var input = 4;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.true;
  });

  it('Expect 16 is true', function() {
    var input = 16;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.true;
  });

  it('Expect 256 is true', function() {
    var input = 256;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.true;
  });

  it('Expect 8 is false', function() {
    var input = 8;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.false;
  });

  it('Expect 2 is false', function() {
    var input = 2;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.false;
  });

  it('Expect 0 is false', function() {
    var input = 0;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.false;
  });

  it('Expect 1 is true', function() {
    var input = 1;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.true;
  });

  it('Expect 5 is false', function() {
    var input = 5;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.false;
  });

  it('Expect 17 is false', function() {
    var input = 17;
    var result = isPowerOfFour(input);
  
    expect(result).to.be.false;
  });
});

/****** End Testing ******/