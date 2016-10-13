/**
 * @param {string} s
 * @return {number}
 */

var mStr = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var titleToNumber = function(s) {
    var result = 0;

    for (var i=0; i < s.length; i=i+1) {
      result = result * 26 + mStr.indexOf(s[i]); 
    }

    return result;
};

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Convert To Title', function() {
  it('Expect `Z` equal 26', function() {
    var input = 'Z';
    var result = titleToNumber(input);
  
    expect(result).to.equal(26);
  });

  it('Expect `B` equal 2', function() {
    var input = 'B';
    var result = titleToNumber(input);
  
    expect(result).to.equal(2);
  });

  it('Expect `AA` equal 27', function() {
    var input = 'AA';
    var result = titleToNumber(input);
  
    expect(result).to.equal(27);
  });

  it('Expect `AZ` equal 52', function() {
    var input = 'AZ';
    var result = titleToNumber(input);
  
    expect(result).to.equal(52);
  });

  it('Expect `BA` equal 53', function() {
    var input = 'BA';
    var result = titleToNumber(input);
  
    expect(result).to.equal(53);
  });

  it('Expect `ZZ` equal 702', function() {
    var input = 'ZZ';
    var result = titleToNumber(input);
  
    expect(result).to.equal(702);
  });

  it('Expect `AAA` equal 703', function() {
    var input = 'AAA';
    var result = titleToNumber(input);
  
    expect(result).to.equal(703);
  });

  it('Expect `AAB` equal 704', function() {
    var input = 'AAB';
    var result = titleToNumber(input);
  
    expect(result).to.equal(704);
  });

  it('Expect `ZY` equal 701', function() {
    var input = 'ZY';
    var result = titleToNumber(input);
  
    expect(result).to.equal(701);
  });

  it('Expect `CRXO` equal 65535', function() {
    var input = 'CRXO';
    var result = titleToNumber(input);
  
    expect(result).to.equal(65535);
  });
});

/****** End Testing ******/