using System;
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
            Assert.AreEqual(3, _target.FindMaxConsecutiveOnes(new int[] {1, 1, 0, 1, 1, 1}));
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(2, _target.FindMaxConsecutiveOnes(new int[] {1, 0, 1, 1, 0, 1}));
        }
    }

    public class Solution
    {
        public int FindMaxConsecutiveOnes(int[] nums)
        {
            var result = int.MinValue;
            var tmp = 0;

            foreach (var num in nums)
            {
                if (num == 0)
                {
                    result = Math.Max(result, tmp);
                    tmp = 0;
                }
                else
                {
                    tmp += 1;
                }
            }

            result = Math.Max(result, tmp);

            return result;
        }
    }
}