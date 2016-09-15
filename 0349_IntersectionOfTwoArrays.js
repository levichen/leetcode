/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var isExistArray = [false, false, false, false, false, false, false, false, false, false];
  var result = [];

  // Check nums1 alway shorter than nums2
  if (nums1.length > nums2.length) swap(nums1, nums2);

  nums1.map(function(element) {
    if (nums2.indexOf(element) > -1) isExistArray[element] = true;
  });

  isExistArray.map(function(value, key) {
    if (value) result.push(key);
  });
  
  return result;
};

var swap = function swap(arr1, arr2) {
  var tmp = arr1;
  tmp = arr2;
  arr2 = arr1;
  arr1 = tmp;
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test intersection', function() {
  it('Expect input [1, 2, 2, 1] and [2, 2] will equal [2]', function() {
    var nums1 = [1, 2, 2, 1];
    var nums2 = [2, 2];

    var result = intersection(nums1, nums2);
  
    expect(result).to.deep.equal([2]);
  });

  it('Expect input [2, 2] and [1, 2, 2, 1] will equal [2]', function() {
    var nums1 = [2, 2];
    var nums2 = [1, 2, 2, 1];    

    var result = intersection(nums1, nums2);
  
    expect(result).to.deep.equal([2]);
  });

  it('Expect input [2, 2] and [] will equal []', function() {
    var nums1 = [2, 2];
    var nums2 = [];    

    var result = intersection(nums1, nums2);
  
    expect(result).to.deep.equal([]);
  });
});

/****** End Testing ******/