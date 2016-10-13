/**
 * @param {number} n
 * @return {string}
 */
var mStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var convertToTitle = function (n) {
  if (n === 0) return "";

  var p = --n % 26;
  n = Math.floor(n / 26);

  return convertToTitle(n) + mStr[p];
};

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Convert To Title', function () {
  it('Expect 26 equal `Z`', function () {
    var input = 26;
    var result = convertToTitle(input);

    expect(result).to.equal("Z");
  });

  it('Expect 2 equal `B`', function () {
    var input = 2;
    var result = convertToTitle(input);

    expect(result).to.equal("B");
  });

  it('Expect 27 equal `AA`', function () {
    var input = 27;
    var result = convertToTitle(input);

    expect(result).to.equal("AA");
  });

  it('Expect 52 equal `AZ`', function () {
    var input = 52;
    var result = convertToTitle(input);

    expect(result).to.equal("AZ");
  });

  it('Expect 53 equal `BA`', function () {
    var input = 53;
    var result = convertToTitle(input);

    expect(result).to.equal("BA");
  });

  it('Expect 702 equal `ZZ`', function () {
    var input = 702;
    var result = convertToTitle(input);

    expect(result).to.equal("ZZ");
  });

  it('Expect 703 equal `AAA`', function () {
    var input = 703;
    var result = convertToTitle(input);

    expect(result).to.equal("AAA");
  });

  it('Expect 704 equal `AAB`', function () {
    var input = 704;
    var result = convertToTitle(input);

    expect(result).to.equal("AAB");
  });

  it('Expect 701 equal `ZY`', function () {
    var input = 701;
    var result = convertToTitle(input);

    expect(result).to.equal("ZY");
  });

  it('Expect 65535 equal `CRXO`', function () {
    var input = 65535;
    var result = convertToTitle(input);

    expect(result).to.equal("CRXO");
  });
});

/****** End Testing ******/