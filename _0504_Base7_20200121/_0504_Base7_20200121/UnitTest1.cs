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
            Assert.AreEqual("202", _target.ConvertToBase7(100));
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual("0", _target.ConvertToBase7(0));
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual("-10", _target.ConvertToBase7(-7));
        }
    }

    public class Solution
    {
        public string ConvertToBase7(int num)
        {
            if (num == 0) return "0";

            var result = "";
            var prefix = "";

            if (num < 0)
            {
                prefix = "-";
                num = Math.Abs(num);
            }

            while (num != 0)
            {
                result = (num % 7) + result;
                num /= 7;
            }

            return prefix + result;
        }
    }
}