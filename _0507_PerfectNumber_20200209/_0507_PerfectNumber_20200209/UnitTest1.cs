using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
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
            Assert.AreEqual(true, _target.CheckPerfectNumber(28));
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(false, _target.CheckPerfectNumber(4));
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual(false, _target.CheckPerfectNumber(12));
        }

        [Test]
        public void Test4()
        {
            Assert.AreEqual(false, _target.CheckPerfectNumber(1));
        }
    }

    public class Solution
    {
        public bool CheckPerfectNumber(int num)
        {
            if (num <= 1) return false;

            var sum = 1;
            var sqrt = Math.Sqrt(num);

            for (var i = 2; i <= sqrt; i++)
            {
                if (num % i == 0)
                {
                    sum += i;
                    if (i * i != num) sum += (num / i);
                }
            }

            return num == sum;
        }
    }
}