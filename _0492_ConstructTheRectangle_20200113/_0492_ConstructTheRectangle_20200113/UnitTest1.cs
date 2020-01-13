using System;
using NUnit.Framework;

namespace _0492_ConstructTheRectangle_20200113
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
            Assert.AreEqual(new int[] {4, 3}, _target.ConstructRectangle(12));
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(new int[] {17, 1}, _target.ConstructRectangle(17));
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual(new int[] {2, 2}, _target.ConstructRectangle(4));
        }

        [Test]
        public void Test4()
        {
            Assert.AreEqual(new int[] {2, 1}, _target.ConstructRectangle(2));
        }
    }

    public class Solution
    {
        public int[] ConstructRectangle(int area)
        {
            var sqrt = (int) Math.Sqrt(area);

            while (area % sqrt != 0)
            {
                sqrt -= 1;
            }

            return new[] {area / sqrt, sqrt};
        }
    }
}