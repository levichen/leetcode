using System;
using System.Collections.Generic;
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
                5, 3
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
        public int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int x)
        {
            val = x;
        }
    }

    public class Solution
    {
        public int[] FindMode(TreeNode root)
        {
            if (root == null) return new int[] { };
            
            var stack = new Stack<TreeNode>();
            var result = new List<int>();
            var map = new Dictionary<int, int>();
            var maxValue = int.MinValue;

            stack.Push(root);

            while (stack.Count != 0)
            {
                var node = stack.Pop();

                if (!map.ContainsKey(node.val))
                {
                    map.Add(node.val, 0);
                }

                map[node.val] += 1;

                maxValue = Math.Max(maxValue, map[node.val]);

                if (node.left != null) stack.Push(node.left);
                if (node.right != null) stack.Push(node.right);
            }

            foreach (var keyValuePair in map)
            {
                if (maxValue.Equals(keyValuePair.Value)) result.Add(keyValuePair.Key);
            }

            return result.ToArray();
        }
    }
}