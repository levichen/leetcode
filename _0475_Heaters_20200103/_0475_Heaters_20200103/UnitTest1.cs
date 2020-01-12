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
            Assert.AreEqual(1, _target.FindRadius(new int[] {1, 2, 3}, new int[] {2}));
        }
        
        [Test]
        public void Test2()
        {
            Assert.AreEqual(1, _target.FindRadius(new int[] {1, 2, 3, 4}, new int[] {1,4}));
        }
    }

    public class Solution
    {
        public int FindRadius(int[] houses, int[] heaters)
        {
            Array.Sort(heaters);
            var result = int.MinValue;

            foreach (var house in houses)
            {
                var closestHeaterIndex = Array.BinarySearch(heaters, house);

                if (closestHeaterIndex < 0)
                {
                    closestHeaterIndex = -(closestHeaterIndex + 1);
                }

                var leftRadius = int.MaxValue;
                var rightRadius = int.MaxValue;

                if (closestHeaterIndex < heaters.Length)
                {
                    leftRadius = heaters[closestHeaterIndex] - house;
                }

                if (closestHeaterIndex - 1 >= 0)
                {
                    rightRadius = house - heaters[closestHeaterIndex - 1];
                }

                result = Math.Max(result, Math.Min(leftRadius, rightRadius));
            }


            return result;
        }
    }
}