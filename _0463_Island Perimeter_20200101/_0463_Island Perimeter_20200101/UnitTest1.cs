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
        public void Test0()
        {
            // arrange
            int[][] input =
            {
            };

            // act
            int result = _target.IslandPerimeter(input);

            // assert
            Assert.AreEqual(result, 0);
        }

        [Test]
        public void Test1()
        {
            // arrange
            int[][] input =
            {
                new int[] {0, 1, 0, 0},
                new int[] {1, 1, 1, 0},
                new int[] {0, 1, 0, 0},
                new int[] {1, 1, 0, 0}
            };

            // act
            int result = _target.IslandPerimeter(input);

            // assert
            Assert.AreEqual(result, 16);
        }
    }

    public class Solution
    {
        public int IslandPerimeter(int[][] grid)
        {
            var result = 0;
            var colLength = grid.Length;
            
            for (var i = 0; i < colLength; i += 1)
            {
                var rowLength = grid[i].Length;
                
                for (var j = 0; j < rowLength; j += 1)
                {
                    if (grid[i][j] != 1) continue;
                    
                    // left
                    if (j == 0 || grid[i][j - 1] == 0) result += 1; 
                    // top
                    if (i == 0 || grid[i - 1][j] == 0) result += 1;
                    // right
                    if (j == rowLength - 1 || grid[i][j + 1] == 0) result += 1;
                    // bottom
                    if (i == colLength - 1 || grid[i + 1][j] == 0) result += 1;
                }
            }

            return result;
        }
    }
}