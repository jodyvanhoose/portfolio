using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeBrew
{
    public class Recipe
    {
        public string RecipeName;
        public string RecipeStyle;
        public decimal BatchSize = 0;
        public string YeastType;
        public string Notes;
        public bool HasAdditionalFermentable;
        public string AdditionalFermentable;
        public decimal AdditionalFermentableWeight;

        public decimal ParseToDecimal(decimal someInput)
        {
            string input = Console.ReadLine();

            if (decimal.TryParse(input, out decimal output))
            {
                return output;
            }
            else
            {
                return 0;
            }
        }

        public int ParseToInt(decimal someInput)
        {
            string input = Console.ReadLine();

            if (int.TryParse(input, out int output))
            {
                return output;
            }
            else
            {
                return 0;
            }
        }
    }

}
