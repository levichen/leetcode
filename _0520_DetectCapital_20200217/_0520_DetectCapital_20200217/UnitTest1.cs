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
            Assert.AreEqual(true, _target.DetectCapitalUse("USA"));
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(true, _target.DetectCapitalUse("Usa"));
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual(true, _target.DetectCapitalUse("usa"));
        }

        [Test]
        public void Test4()
        {
            Assert.AreEqual(false, _target.DetectCapitalUse("usA"));
        }
    }

    public class Solution
    {
        public bool DetectCapitalUse(string word)
        {
            var isAllUpper = true;
            var isAllLower = true;
            var isTitle = !char.IsLower(word[0]);

            for (var i = 0; i < word.Length; i++)
            {
                if (char.IsUpper(word[i])) isAllLower = false;
                if (char.IsLower(word[i])) isAllUpper = false;
                if (i != 0 && char.IsUpper(word[i])) isTitle = false;
            }

            return isAllLower || isAllUpper || isTitle;
        }
    }
}