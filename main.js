#! /usr/bin/env node
// Importing inquirer and Chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colorfull Welcome message
console.log(chalk.bold.blue("\n \t\t Code With Coder - Word Counter"));
console.log("=".repeat(60));
// Prompt the user to enter a sentence 
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence"
    }
]);
// Trimming the sentence and splitting into words based on "spaces"
let words = answer.sentence.trim().split(" ");
// Analysis of user input sentence 
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.magenta(words.length)} `));
console.log("=".repeat(60));
