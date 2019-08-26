/**
 * @param {number} val
 * @param {Node[]} children
 */
function Node (val, children) {
  /** @type {number} */
  this.val = val
  /** @type {Node[]} */
  this.children = children
};

module.exports = Node
