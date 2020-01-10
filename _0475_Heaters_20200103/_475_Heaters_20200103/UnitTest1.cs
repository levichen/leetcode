using System;
using System.Linq;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        private Solution _solution;

        [SetUp]
        public void Setup()
        {
            _solution = new Solution();
        }

        [Test]
        public void Test1()
        {
            int[] houses = {1, 2, 3};
            int[] heaters = {2};

            int result = _solution.FindRadius(houses, heaters);

            Assert.AreEqual(1, result);
        }


        [Test]
        public void Test2()
        {
            int[] houses = {1, 2, 3, 4};
            int[] heaters = {1, 4};

            int result = _solution.FindRadius(houses, heaters);

            Assert.AreEqual(1, result);
        }

        [Test]
        public void Test3()
        {
            int[] houses = {1, 2, 3, 4, 5};
            int[] heaters = {1, 5};

            int result = _solution.FindRadius(houses, heaters);

            Assert.AreEqual(2, result);
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