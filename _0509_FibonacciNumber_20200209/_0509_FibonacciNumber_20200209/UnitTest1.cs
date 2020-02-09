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
            Assert.AreEqual(0, _target.Fib(0));
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(1, _target.Fib(1));
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual(1, _target.Fib(2));
        }

        [Test]
        public void Test4()
        {
            Assert.AreEqual(8, _target.Fib(6));
        }
    }

    public class Solution
    {
        public int Fib(int n)
        {
            if (n == 0 || n == 1) return n;

            var pre1 = 0;
            var pre2 = 1;
            var result = 0;

            for (var i = 2; i <= n; i++)
            {
                result = pre1 + pre2;
                pre1 = pre2;
                pre2 = result;
            }

            return result;
        }
    }
}