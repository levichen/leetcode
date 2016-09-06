
//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;

  var walker = head.next;
  var runner = head.next.next;

  while (1) {
    if (walker.next === null) return false;
    if (runner.next === null || runner.next.next === null) return false;
    
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) return true;
  }

  return false;
};


/****** End Program ******/

/****** Start Testing ******/

var chai = require('chai');
var expect = chai.expect;

describe('Test has cycle', function () {
  it('When input null should return false', function () {
    var input = null;
    var result = hasCycle(input);

    expect(result).to.be.false;
  });

  it('When input [1, 2] should return false', function () {
    var input = new ListNode(1);
    input.next = new ListNode(2);

    var result = hasCycle(input);

    expect(result).to.be.false;
  });

  it('When input [1, 2, 1, 2...] should return true', function () {
    var input = new ListNode(1);
    input.next = new ListNode(2);
    input.next.next = input;

    var result = hasCycle(input);

    expect(result).to.be.true;
  });
});

/****** End Testing ******/