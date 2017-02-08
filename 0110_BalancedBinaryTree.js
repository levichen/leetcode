/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (findDepth(root) === -1) return false;
  return true;
};

function findDepth(node) {
  if (!node) return 0;

  var leftDepth = findDepth(node.left);
  if (leftDepth === -1) return -1;

  var rightDepth = findDepth(node.right);
  if (rightDepth === -1) return -1;

  if (Math.abs(leftDepth - rightDepth) > 1) return -1;

  return Math.max(leftDepth, rightDepth) + 1;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test IS Balanced Tree', function () {
  it('Expect result will be false', function () {
    var node = new TreeNode(5);
    node.left = new TreeNode(3);
    node.right = new TreeNode(6);
    node.left.left = new TreeNode(2);
    node.left.left.left = new TreeNode(1);

    var result = isBalanced(node);

    expect(result).to.be.false;
  });

  it('Expect result will be true', function () {
    var node = new TreeNode(2);
    node.left = new TreeNode(1);
    node.right = new TreeNode(3);

    var result = isBalanced(node);
    expect(result).to.be.true;
  })
});

/****** End Testing ******/