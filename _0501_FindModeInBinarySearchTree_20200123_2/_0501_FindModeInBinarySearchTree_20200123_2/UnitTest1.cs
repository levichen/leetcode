using System;
using System.Collections.Generic;
using System.ComponentModel.Design.Serialization;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        private Solution _target;

        [SetUp]
        public void Setup()
        {
            _target = new Solution();
        }

        [Test]
        public void Test1()
        {
            var nodes = new TreeNode(1)
            {
                right = new TreeNode(2)
                {
                    right = new TreeNode(2)
                }
            };

            Assert.AreEqual(new[]
            {
                2
            }, _target.FindMode(nodes));
        }

        [Test]
        public void Test2()
        {
            var nodes = new TreeNode(7)
            {
                right = new TreeNode(9),
                left = new TreeNode(5)
                {
                    left = new TreeNode(3)
                    {
                        left = new TreeNode(2)
                        {
                            left = new TreeNode(1)
                        },
                        right = new TreeNode(3)
                        {
                            right = new TreeNode(3)
                        }
                    },
                    right = new TreeNode(5)
                    {
                        right = new TreeNode(5)
                        {
                            right = new TreeNode(6)
                        }
                    }
                }
            };

            Assert.AreEqual(new[]
            {
                3, 5
            }, _target.FindMode(nodes));
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual(new int[] { }, _target.FindMode(null));
        }
    }


    public class TreeNode
    {
        public readonly int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int x)
        {
            val = x;
        }
    }

    public class Solution
    {
        private int _currentNodeValue = 0;
        private int _currentNodeCount = 0;
        private int _maxNodeCount = 0;

        private readonly List<int> _result = new List<int>();

        public int[] FindMode(TreeNode root)
        {
            InOrder(root);

            return _result.ToArray();
        }

        private void HandleNodeValue(TreeNode node)
        {
            if (node.val != _currentNodeValue)
            {
                _currentNodeValue = node.val;
                _currentNodeCount = 0;
            }

            _currentNodeCount += 1;

            if (_currentNodeCount > _maxNodeCount)
            {
                _maxNodeCount = _currentNodeCount;
                _currentNodeValue = node.val;

                _result.Clear();
                _result.Add(_currentNodeValue);
            }
            else if (_currentNodeCount == _maxNodeCount)
            {
                _result.Add(_currentNodeValue);
            }
        }

        private void InOrder(TreeNode node)
        {
            if (node == null) return;

            InOrder(node.left);
            HandleNodeValue(node);
            InOrder(node.right);
        }
    }
}