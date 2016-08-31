/**
 * @param {string} mStr
 * @return {string}
 */
var stringQuickSort = function(mStr) {
  return mStr;
}



/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Quick Sort', function() {
  it('Test1', function() {
    var input = "abc";
    var result = stringQuickSort(input);
  
    expect(result).to.equal("abc");
  });
});

/****** End Testing ******/