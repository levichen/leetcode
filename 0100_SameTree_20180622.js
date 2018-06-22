function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
}
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test 0100 v20180622', function () {
  it('Test1', function () {
    const result = isSameTree(null, null)

    expect(result).to.be.true
  })

  it('Test2', function () {
    let t1 = new TreeNode(1)
    let t2 = new TreeNode(1)
    const result = isSameTree(t1, t2)

    expect(result).to.be.true
  })

  it('Test3', function () {
    let t1 = new TreeNode(2)
    t1.left = new TreeNode(1)
    t1.right = new TreeNode(3)
    let t2 = new TreeNode(2)
    t2.left = new TreeNode(1)
    t2.right = new TreeNode(3)
    const result = isSameTree(t1, t2)

    expect(result).to.be.true
  })

  it('Test4', function () {
    let t1 = new TreeNode(2)
    t1.left = new TreeNode(1)
    t1.right = new TreeNode(3)
    let t2 = new TreeNode(2)
    t2.left = new TreeNode(1)
    t2.right = new TreeNode(4)
    const result = isSameTree(t1, t2)

    expect(result).to.be.false
  })

  it('Test5', function () {
    let t1 = new TreeNode(1)
    t1.left = new TreeNode(2)
    let t2 = new TreeNode(1)
    t2.right = new TreeNode(2)
    const result = isSameTree(t1, t2)

    expect(result).to.be.false
  })
})

/** **** End Testing ******/
