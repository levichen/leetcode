/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root.left.left.val !== null || root.left.right.val !== null) invertTree(root.left);
  if (root.right.left.val !== null || root.right.right.val !== null) invertTree(root.right);
  
  changeNode(root);

  return root;
};

var changeNode = function(tree) {
  var tmp = tree.left.val;
  tree.left.val = tree.right.val;
  tree.right.val = tmp;
}

var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null && q !== null || p !== null && q === null) return false;

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function dfs(root) {
  if (root.left !== null) dfs(root.left);
  console.log(root.val);
  if (root.right !== null) dfs(root.right);
}

/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test Invert Tree', function() {
  it('Test1', function() {
    var tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    var tree2 = new TreeNode(1);
    tree2.left = new TreeNode(3);
    tree2.right = new TreeNode(2);

    var newTree = invertTree(tree1);
    var result = isSameTree(newTree, tree2);
    expect(result).to.be.true;
  });

  it('Test2', function() {
    var tree1 = new TreeNode(4);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(7);
    
    tree1.left.left = new TreeNode(1);
    tree1.left.right = new TreeNode(3);
    tree1.right.left = new TreeNode(6);
    tree1.right.right = new TreeNode(9);

    dfs(tree1);

    var tree2 = new TreeNode(4);
    tree2.left = new TreeNode(7);
    tree2.right = new TreeNode(2);
    tree2.left.left = new TreeNode(9);
    tree2.left.right = new TreeNode(6);
    tree2.right.left = new TreeNode(3);
    tree2.right.right = new TreeNode(1);

    console.log(11111);
    dfs(tree2)
    console.log(11111);
    var newTree = invertTree(tree1);
    dfs(newTree);
    var result = isSameTree(newTree, tree2);
    expect(result).to.be.true;
  });
});

/****** End Testing ******/
