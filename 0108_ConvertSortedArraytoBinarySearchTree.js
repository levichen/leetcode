/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return bst(nums, 0, nums.length - 1);
};

function bst(arr, left, right) {
  if (left > right) return null;

  var mid = Math.floor((left + right) / 2);

  var newNode = new TreeNode(arr[mid]);
  newNode.left = bst(arr, left, mid - 1);
  newNode.right = bst(arr, mid + 1, right);
  
  return newNode;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Sorted Array To BST', function () {
  it('Expect result will be [0, 1, 2]', function () {
    var nums = [0, 1, 2];

    var ans = new TreeNode(1);
    ans.left = new TreeNode(0);
    ans.right = new TreeNode(2);

    var result = sortedArrayToBST(nums);

    expect(result).to.deep.equal(ans);
  });
});

/****** End Testing ******/