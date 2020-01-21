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
        public void Test2()
        {
            Assert.AreEqual(1, _target.FindComplement(2));
        }

        [Test]
        public void Test1()
        {
            Assert.AreEqual(2, _target.FindComplement(5));
        }
    }

    public class Solution
    {
        public int FindComplement(int num)
        {
            var mask = ~0;

            while ((mask & num) >= 1) mask <<= 1;

            return ~mask & ~num;
        }
    }
}