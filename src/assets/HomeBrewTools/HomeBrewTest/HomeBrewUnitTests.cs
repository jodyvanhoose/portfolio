using System;
using Xunit;
using HomeBrew;

namespace HomeBrewTest
{
    public class HomeBrewUnitTests
    {
        [Fact]
        public void ABV_Calculates_Correctly()
        {
            //Arrange
            HomeBrewTool abv = new HomeBrewTool();


            //Act
            string actual = abv.CalculateABV(1.042, 1.005).ToString("0.0");
            string actual2 = abv.CalculateABV(1.058, 1.010).ToString("0.0");


            //Assert
            Assert.Equal("4.9", actual);
            Assert.Equal("6.3", actual2);
        }
        
        [Fact]
        public void Brix_Converts_To_Specfic_Gravity_Test()
        {
            // Arrange
            BrixConverter brix = new BrixConverter();

            // Act
            string actual = brix.BrixToSpecficGravity(11).ToString("0.000");


            // Assert
            Assert.Equal("1.044", actual);
        }

        [Fact]
        public void Specfic_Gravity_From_Extract_Formula()
        {
            // Arrange
            var hbTool = new HomeBrewTool();

            // Act
            string actual = hbTool.SpecficGravityFromExtractFormula(3, 1, 5).ToString("0.000");
            string actual2 = hbTool.SpecficGravityFromExtractFormula(3.3m, 2, 5).ToString("0.000");

            // Assert
            Assert.Equal("1.030", actual);
            Assert.Equal("1.041", actual2);
        }
    }
}
