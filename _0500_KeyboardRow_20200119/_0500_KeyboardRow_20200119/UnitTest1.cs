using System.Collections;
using System.Collections.Generic;
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
            string[] input = {"Hello", "Alaska", "Dad", "Peace"};

            Assert.AreEqual(new string[] {"Alaska", "Dad"}, _target.FindWords(input));
            Assert.Pass();
        }
    }

    public class Solution
    {
        public string[] FindWords(string[] words)
        {
            List<string> result = new List<string>();

            var map = new Dictionary<char, int>();
            string[] lines =
            {
                "qwertyuiop",
                "asdfghjkl",
                "zxcvbnm"
            };

            for (int i = 0; i < lines.Length; i++)
            {
                var line = lines[i];
                foreach (var ch in line)
                {
                    map.Add(ch, i);
                }
            }

            foreach (var w in words)
            {
                var word = w.ToLower();
                var currentLine = map[word[0]];
                var isInSameLine = true;

                for (var j = 1; j < word.Length; j++)
                {
                    if (currentLine == map[word[j]]) continue;
                    isInSameLine = false;
                    break;
                }

                if (isInSameLine) result.Add(w);
            }

            return result.ToArray();
        }
    }
}