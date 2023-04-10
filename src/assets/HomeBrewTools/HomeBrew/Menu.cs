using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spectre.Console;

namespace HomeBrew
{
    public class Menu
    {
        public static void MainMenu()
        {
            Console.WriteLine("Welcome to the Pawtucket Homebrew Tool!");
            Console.WriteLine();
            Console.WriteLine("Menu options");
            AnsiConsole.MarkupLine("[olive]-------------------------------[/]");
            AnsiConsole.MarkupLine("Buid a Recipe:          Press [green]1[/]");
            AnsiConsole.MarkupLine("[olive]-------------------------------[/]");
            Console.WriteLine("Brix to Specfic");
            AnsiConsole.MarkupLine("Gravity Converter:      Press [green]2[/]");
            AnsiConsole.MarkupLine("[olive]-------------------------------[/]");
            AnsiConsole.MarkupLine("ABV Calculator:         Press [green]3[/]");
            AnsiConsole.MarkupLine("[olive]-------------------------------[/]");
            Console.WriteLine("Determine Specfic Gravity");
            AnsiConsole.MarkupLine("With Malt Extract:      Press [green]4[/]");
            AnsiConsole.MarkupLine("[olive]-------------------------------[/]");
            AnsiConsole.MarkupLine("Exit:                   Press [green]0[/]");
            AnsiConsole.MarkupLine("[olive]-------------------------------[/]");
            
        }

        public static void RecipeMenu()
        {
            Console.WriteLine("Recipe Builder");
            AnsiConsole.MarkupLine("[olive]--------------[/]");
            Console.WriteLine("Menu options");
            AnsiConsole.MarkupLine("[olive]--------------------------[/]");
            AnsiConsole.MarkupLine("Beer Recipe:       Press [green]1[/]");
            AnsiConsole.MarkupLine("[olive]--------------------------[/]");
            AnsiConsole.MarkupLine("Mead Recipe:       Press [green]2[/]");
            AnsiConsole.MarkupLine("[olive]--------------------------[/]");
            AnsiConsole.MarkupLine("Exit:              Press [green]0[/]");
            AnsiConsole.MarkupLine("[olive]--------------------------[/]");
        }

        public static void AbvMenu()
        {
            Console.WriteLine("Welcome to the homebew tools.");
            Console.WriteLine("ABV Calculator");
            Console.WriteLine();
            Console.WriteLine("Please choose your choice of measurement");
            AnsiConsole.MarkupLine("[olive]----------------------------------------[/]");
            AnsiConsole.MarkupLine("Specfic Gravity: [green]1[/]");
            AnsiConsole.MarkupLine("[olive]------------------[/]");
            AnsiConsole.MarkupLine("Brix:            [green]2[/]");
            AnsiConsole.MarkupLine("[olive]------------------[/]");
            AnsiConsole.MarkupLine("Main Menu:       [green]0[/]");
            AnsiConsole.MarkupLine("[olive]------------------[/]");
        }

        public static void BrixConverterMenu()
        {
            Console.WriteLine("Welcome to the homebrew tools.");
            Console.WriteLine("Brix to Specfic Gravity Converter");
            AnsiConsole.MarkupLine("[olive]---------------------------------[/]");
            Console.WriteLine("Enter your Brix reading: ");
            Console.WriteLine("(Ex: 12)");
        }
    }
}
