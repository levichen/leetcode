using System.Text;
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
            var license = str.Replace("-", "").ToUpper();

            var length = license.Length;
            var remainder = length % num;

            for (var i = length - num; i > 0; i -= num)
            {
                license = license.Insert(i, "-");
            }

            return license;
        }
    }
}