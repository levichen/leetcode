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
            Assert.AreEqual(3, _target.FindMaxConsecutiveOnes(new int {1, 1, 0, 1, 1, 1}))};
        }
    }

    public class Solution
    {
        public int FindMaxConsecutiveOnes(int[] nums)
        {
            int result = Int32.MinValue;
        }
    }
}