/**
 * @param {array} arr
 * @return {array}
 */
var qsort = function(arr) {
  var left = 0;
  var right = arr.length - 1;

  myQsort(arr, left, right);
}

var myQsort = function (arr, left, right) {
  if (left < right) {
    var cpLeft = left;
    var cpRight = right;
    var pivot = arr[left];

    while (left < right) {
      while (left < right && arr[right] > pivot) right--;
      while (left < right && arr[left] < pivot) left++;
      swap(arr, left, right);
    }
    
    myQsort(arr, cpLeft, right - 1);
    myQsort(arr, right + 1, cpRight);
  }
}

var swap = function(arr, i, j) {
  if (arr.length === 1) return arr;

  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test swap', function() {
  it('Test1', function() {
    var input = [1, 2];
    swap(input, 0, 1);

    expect(input).to.deep.equal([2, 1]);
  });

  it('Test2', function() {
    var input = ['a', 'b', 'c', 'd', 'e'];
    swap(input, 1, 3);

    expect(input).to.deep.equal(['a', 'd', 'c', 'b', 'e']);
  });

  it('Test3', function() {
    var input = ['a'];
    swap(input, 0, 0);

    expect(input).to.deep.equal(['a']);
  });
});

describe('Test Quick Sort', function() {
  it('Test1', function() {
    var input = [8, 7];
    qsort(input);
  
    expect(input).to.deep.equal([7, 8]);
  });

  it('Test2', function() {
    var input = [6, 5, 7, 8, 4, 3, 1];
    qsort(input);
  
    expect(input).to.deep.equal([1, 3, 4, 5, 6, 7 ,8]);
  });

  it('Test3', function() {
    var input = ['c', 'a', 'e', 'd', 'b', 'f'];
    qsort(input);
  
    expect(input).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});

/****** End Testing ******/
