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
            int[] nums1 = {4, 1, 2};
            int[] nums2 = {1, 3, 4, 2};

            Assert.AreEqual(new int[]
            {
                -1, 3, -1
            }, _target.NextGreaterElement(nums1, nums2));
        }

        [Test]
        public void Test2()
        {
            int[] nums1 = {2, 4};
            int[] nums2 = {1, 2, 3, 4};

            Assert.AreEqual(new int[]
            {
                3, -1
            }, _target.NextGreaterElement(nums1, nums2));
        }

        [Test]
        public void Test3()
        {
            int[] nums1 = {4, 1, 2};
            int[] nums2 = {1, 2, 3, 4};

            Assert.AreEqual(new int[]
            {
                -1, 2, 3
            }, _target.NextGreaterElement(nums1, nums2));
        }
    }

    public class Solution
    {
        public int[] NextGreaterElement(int[] nums1, int[] nums2)
        {
            var result = new List<int>();
            var numberIndices = new Dictionary<int, int>();

            for (var i = 0; i < nums2.Length; i++)
            {
                numberIndices[nums2[i]] = i;
            }

            foreach (var n1 in nums1)
            {
                result.Add(-1);

                for (var j = numberIndices[n1]; j < nums2.Length; j++)
                {
                    if (nums2[j] > n1)
                    {
                        result[result.Count - 1] = nums2[j];
                        break;
                    }
                }
            }

            return result.ToArray();
        }
    }
}