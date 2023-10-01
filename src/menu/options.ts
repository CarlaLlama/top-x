import chalk from "chalk";
import readline from 'readline';
import { display } from ".";
import { generateTestFile } from "../file-generator";
import { findTopXNumbers } from "../heap-search/top-x";

export async function generateTestCasesOption(rl: readline.Interface) {
    display(chalk.yellow, "Super! Let's generate a test file!");
    display(chalk.green, "How many numbers would you like to generate?");
    const numbers = await new Promise<string>((resolve) => {
        rl.question("", (numbers) => {
            resolve(numbers);
        });
    });
    generateTestFile('test_numbers.txt', parseInt(numbers, 10));
    console.log("");
    display(chalk.yellow, "You did it! You can find your numbers in test_numbers.txt!");
    display(chalk.green, "To use them to find the top x numbers, please use option 2");
}

export async function runHeapFunctionOption(option: 'top' | 'bottom', rl: readline.Interface) {
    display(chalk.yellow, `Alrighty! Let's find the ${option} X numbers!`);
    display(chalk.green, "What is the X numbers you'd like to find?");
    const topLimit = await new Promise<string>((resolve) => {
        rl.question("", (numbers) => {
            resolve(numbers);
        });
    });
    if (topLimit === "0") {
        display(chalk.red, `Sorry, you can't find the ${option} 0 numbers!`);
        return;
    }
    const list = await findTopXNumbers('test_numbers.txt', parseInt(topLimit, 10))
    const isPlural = list.length > 1
    display(chalk.green, `Here ${isPlural ? 'are': 'is'} the ${option} ${list.length} number${isPlural ? 's' : ''}!`);
    for(const number of list){
        display(chalk.whiteBright, number.toString());
    }
}
