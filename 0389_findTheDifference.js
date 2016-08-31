/**
 * @param {string} string1
 * @param {string} string2
 * @return {string}
 */
var findTheDifference = function(string1, string2) {
  var mStr = 'abcdefghijklmnopqrstuvwxyz';

  for (var i=0; i<mStr.length; i++) {
    var ch = mStr[i];
    var count1 = countChartInString(string1, ch);
    var count2 = countChartInString(string2, ch);

    if (count1 !== count2) return ch;
  }
}

var countChartInString = function (target, ch) {
  return (target.match(new RegExp(ch, "g")) || []).length;
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Find The Difference', function() {
  it('Test1', function() {
    var string1 = "abc";
    var string2 = "abct"
    var result = findTheDifference(string1, string2);
  
    expect(result).to.equal("t");
  });
});

/****** End Testing ******/
