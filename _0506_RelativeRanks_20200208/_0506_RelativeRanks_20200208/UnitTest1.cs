using System;
using System.Collections.Generic;
using System.Globalization;
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
            var nums = new int[] {5, 3, 1, 2, 4};

            Assert.AreEqual(new string[]
            {
                "Gold Medal", "Bronze Medal", "5", "4", "Silver Medal"
            }, _target.FindRelativeRanks(nums));
        }
    }
}

public class Solution
{
    public string[] FindRelativeRanks(int[] nums)
    {
        var dict = new Dictionary<int, int>();
        var result = new string[nums.Length];

        for (var i = 0; i < nums.Length; i++)
        {
            dict[nums[i]] = i;
        }

        var data = nums.OrderByDescending(x => x).ToArray();

        for (var i = 0; i < data.Length; i++)
        {
            var index = dict[data[i]];

            switch (i)
            {
                case 0:
                    result[index] = "Gold Medal";
                    break;
                case 1:
                    result[index] = "Silver Medal";
                    break;
                case 2:
                    result[index] = "Bronze Medal";
                    break;
                default:
                    result[index] = (i+1).ToString();
                    break;
            }
        }

        return result;
    }
}