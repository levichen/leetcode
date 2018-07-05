/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows === 0) return [];
  
  var result = [[1]];

  for (var i=1; i < numRows; i=i+1) {
    result[i] = [1];

    for (var j=1; j <= i; j=j+1) {
      var n1 = result[i-1][j-1];
      var n2 = result[i-1][j] ? result[i-1][j] : 0; 

      result[i][j] = n1 + n2;
    }
  }

  return result;
};

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Pascals Traiangle', function() {
  it('Test numRows = 0', function() {
    var numRows = 0;
    var result = generate(numRows);
  
    expect(result).to.deep.equal([]);
  });

  it('Test numRows = 1', function() {
    var numRows = 1;
    var result = generate(numRows);
  
    expect(result).to.deep.equal([[1]]);
  });

  it('Test numRows = 2', function() {
    var numRows = 2;
    var result = generate(numRows);
  
    expect(result).to.deep.equal([[1], [1,1]]);
  });

  it('Test numRows = 3', function() {
    var numRows = 3;
    var result = generate(numRows);
  
    expect(result).to.deep.equal([[1], [1,1], [1,2,1]]);
  });

  it('Test numRows = 4', function() {
    var numRows = 4;
    var result = generate(numRows);
  
    expect(result).to.deep.equal([[1], [1,1], [1,2,1], [1,3,3,1]]);
  });
});

/****** End Testing ******/
