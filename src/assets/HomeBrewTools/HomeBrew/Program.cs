using System;
using System.Threading;

namespace HomeBrew
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "HomeBrew Tool";

            //TitleScreen.MugAnimation();

            //Console.ReadLine();


            // Program start
            Console.Clear();
            TitleScreen.Title(); 
            Menu.MainMenu();

            // Variables for selecting menu options
            string UserInput = Console.ReadLine();
            string RecipeSelect = "1";
            string BrixSelect = "2";
            string AbvSelect = "3";
            string GravitySelect = "4";
            string ExitProgram = "0";
            

            // Master Loop - While not exit - execute this loop
            while(UserInput != ExitProgram)
            {
                // Recipe 
                if (UserInput == RecipeSelect)
                {
                    Console.Clear();
                    TitleScreen.Title();
                    Menu.RecipeMenu();
                    
                    string BeerRecipe = "1";
                    string MeadRecipe = "2";
                    string RecipeExit = "0";
                    string RecipeSelection = Console.ReadLine();

                    if (RecipeSelection == BeerRecipe)
                    {
                        var myBeer = new BeerRecipe();
                        myBeer.BuildBeerRecipe(myBeer);
                        myBeer.DisplayBeerRecipe(myBeer);
                    }
                    else if (RecipeSelection == MeadRecipe)
                    {
                        var myMead = new MeadRecipe();
                        myMead.BuildMeadRecipe(myMead);
                        myMead.DisplayMeadRecipe(myMead);
                    }
                    else if(RecipeSelection == RecipeExit)
                    {
                        Console.Clear();
                        TitleScreen.Title();
                        Menu.MainMenu();
                    }
                    else
                    {
                        Console.WriteLine("Invalid input");
                    }

                }
                // Homebrew tools

                // Brix Converter
                else if (UserInput == BrixSelect)
                {
                    Console.Clear();
                    TitleScreen.Title();
                    Menu.BrixConverterMenu();

                    double BrixReading = Convert.ToDouble(Console.ReadLine());

                    var brixConversion = new BrixConverter();

                    string BrixToGravityReading = brixConversion.BrixToSpecficGravity(BrixReading).ToString("0.000");

                    TitleScreen.MugLoadingAnimation();
                    TitleScreen.Title();

                    Console.WriteLine($"Your Brix reading of {BrixReading} is {BrixToGravityReading} specfic gravity.");
                    Console.WriteLine("Press enter to continue");
                    Console.ReadLine();

                }

                // hb tool for getting specfic gravity from malt extract
                else if (UserInput == GravitySelect)
                {
                    Console.Clear();
                    TitleScreen.Title();
                    HomeBrewTool.GetSpecficGravityFromExtract();
                }

                // ABV calculator
                else if (UserInput == AbvSelect)
                {
                    Console.Clear();
                    TitleScreen.Title();
                    Menu.AbvMenu();

                    string AbvUserInput = Console.ReadLine().ToLower();
                    string SpecficGravityMeasurement = "1";
                    string BrixMeasurement = "2";
                    string ExitToMainMenu = "0";

                    while (AbvUserInput != ExitToMainMenu)
                    {
                        if (AbvUserInput == SpecficGravityMeasurement)
                        {
                            HomeBrewTool.SpecficGravityAbv();
                            AbvUserInput = ExitToMainMenu;
                        }
                        else if (AbvUserInput == BrixMeasurement)
                        {
                            HomeBrewTool.BrixAbv();
                            AbvUserInput = ExitToMainMenu;
                        }
                        else
                        {
                            Console.Clear();
                            TitleScreen.Title();
                            Menu.AbvMenu();

                            Console.WriteLine(" Sorry invalid input");
                            Console.Write("Your input: ");
                            AbvUserInput = Console.ReadLine().ToLower();
                        }
                    }
                    Console.Clear();
                    TitleScreen.Title();
                    Menu.MainMenu();

                    
                }

                // Invalid input
                else
                {
                    Console.Clear();
                    TitleScreen.Title();
                    Console.WriteLine("Sorry invalid input");
                    Console.WriteLine("Press enter to continue");
                    Console.ReadLine();
                    
                    
                }
                Console.Clear();
                TitleScreen.Title();
                Menu.MainMenu();
                UserInput = Console.ReadLine();
            }



            // Program End
            Console.Clear();
            TitleScreen.Title();
            Console.WriteLine("Thanks for using the Homebrew Tool!");
            Console.WriteLine("Exiting Program");
            Environment.Exit(0);
            
        }
    }
}
