using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeBrew
{
    public class HomeBrewTool
    {
        public double CalculateABV(double og, double fg)
        {
            // Calculates the ABV from the original gravity and final gravity
            double ABV = ABV = (og - fg) * 131.25;
            return ABV;
        }

        // Brix converted to Specfic Gravity first and then calcualte abv
        public static void BrixAbv()
        {
            Console.Clear();
            TitleScreen.Title();

            Console.WriteLine("Enter your inital Brix reading: ");
            Console.WriteLine("(Ex: 14)");
            double InitalBrixReading = Convert.ToDouble(Console.ReadLine());

            var firstBrixReading = new BrixConverter();

            double OriginalGravity = firstBrixReading.BrixToSpecficGravity(InitalBrixReading);

            Console.WriteLine("Enter your Final Brix reading: ");
            Console.WriteLine("(Ex: 4)");
            double FinalBrixReading = Convert.ToDouble(Console.ReadLine());

            double FinalGravity = firstBrixReading.BrixToSpecficGravity(FinalBrixReading);
            var abvCalc = new HomeBrewTool();

            string ABV = abvCalc.CalculateABV(OriginalGravity, FinalGravity).ToString("0.0");

            TitleScreen.MugLoadingAnimation();
            TitleScreen.Title();

            Console.WriteLine($"Your brew's approximate alcohol: {ABV}%");
            Console.WriteLine("Press enter to continue");
            Console.ReadLine();
        }

        // Specfic Gravity calculate abv
        public static void SpecficGravityAbv()
        {
            Console.Clear();
            TitleScreen.Title();

            Console.WriteLine("Enter your Original Gravity reading: ");
            Console.WriteLine("(Ex: 1.050)");
            double OriginalGravity = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Enter your Final Gravity reading: ");
            Console.WriteLine("(Ex: 1.005)");
            double FinalGravity = Convert.ToDouble(Console.ReadLine());

            var abvCalc = new HomeBrewTool();

            string ABV = abvCalc.CalculateABV(OriginalGravity, FinalGravity).ToString("0.0");

            TitleScreen.MugLoadingAnimation();
            TitleScreen.Title();

            Console.WriteLine($"Your brew's approximate alcohol: {ABV}%");
            Console.WriteLine("Press enter to continue");
            Console.ReadLine();
        }

        // Formula to calculate specfic gravity from extract ..... used in GetSpecficGravityFromExtract()
        public decimal SpecficGravityFromExtractFormula(decimal lmePounds, decimal dmePounds, int gallons)
        {
            decimal TotalPoints;
            decimal TotalLmePoints;
            decimal TotalDmePoints;
            decimal LmePoints = 36;
            decimal DmePoints = 44;
            
            TotalLmePoints = (LmePoints * lmePounds) / gallons;
            TotalDmePoints = (DmePoints * dmePounds) / gallons;
            TotalPoints = TotalLmePoints + TotalDmePoints;

            return TotalPoints / 1000.0m + 1;
        }

        // Calculate specfic gravity from malt extract
        public static void GetSpecficGravityFromExtract()
        {
            decimal LmePounds;
            decimal DmePounds;
            int Gallons;
            string SpecficGravity;

            Console.WriteLine("Enter liquid malt extract weight in pounds: ");
            Console.WriteLine("(Ex: 3.3)");
            string input = Console.ReadLine();
            LmePounds = decimal.TryParse(input, out decimal output) ? output : 0;

            Console.WriteLine("Enter dried malt extract weight in pounds: ");
            Console.WriteLine("(Ex: 2)");
            input = Console.ReadLine();
            DmePounds = decimal.TryParse(input, out output) ? output : 0;

            Console.WriteLine("Enter size of brew in gallons: ");
            Console.WriteLine("(Ex: 5)");
            input = Console.ReadLine();
            Gallons = int.TryParse(input, out int intOutput) ? intOutput : 0;

            var hbTool = new HomeBrewTool();
            SpecficGravity = hbTool.SpecficGravityFromExtractFormula(LmePounds, DmePounds, Gallons).ToString("0.000");

            TitleScreen.MugLoadingAnimation();
            TitleScreen.Title();

            Console.WriteLine($"Your estimated specfic gravity is {SpecficGravity}");

            Console.WriteLine("Press enter to continue");
            Console.ReadKey();
        }
    }
}
