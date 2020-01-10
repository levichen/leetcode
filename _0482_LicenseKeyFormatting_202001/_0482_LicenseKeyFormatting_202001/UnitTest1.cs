using System;
using System.Linq;
using NUnit.Framework;

namespace _0482_LicenseKeyFormatting_202001
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
            Assert.AreEqual("5F3Z-2E9W", _target.LicenseKeyFormatting("5F3Z-2e-9-w", 4));
        }
        
        [Test]
        public void Test2()
        {
            Assert.AreEqual("2-5G-3J", _target.LicenseKeyFormatting("2-5g-3-J", 2));
        }
    }

    public class Solution
    {
        public string LicenseKeyFormatting(string str, int num)
        {
            double lenOfStr = str.Length;
            double sharedGroupLength = str.Length;

            while (sharedGroupLength / num == 0)
            {
                sharedGroupLength = sharedGroupLength - 1;
            }
            
            double firstGroupLength = sharedGroupLength;

            if (sharedGroupLength != str.Length)
            {
                firstGroupLength = str.Length - sharedGroupLength;
            }

            var result = "";
            var index = 0;
            
            while (firstGroupLength != 0)
            {
                if (str[index] != '-')
                {
                    result = string.Concat(result, str[index]);
                    firstGroupLength -= 1;
                }

                index += 1;
            }

            return result;
        }
    }
}