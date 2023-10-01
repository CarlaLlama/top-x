import chalk from "chalk";
import { ChalkFunction } from "chalk";
import figlet from "figlet";

export function showIntro(){
    display(chalk.bold.green, (
            figlet.textSync("TOP-X", { horizontalLayout: "full" })
        )
    );
    display(chalk.bold.green,
        "Hello and welcome to TOPX - where everything is possible!");
    display(
        chalk.italic.green,
        "...As long as it's selecting the top X largest numbers from a file!"
    );
}

export function showMenu(){
    console.log("");

    display(chalk.whiteBright, "What would you like to do?");
    display(chalk.white, "1. Generate a test file");
    display(chalk.white, "2. Find the top X largest numbers");
    display(chalk.white, "3. Find the bottom X smallest numbers - bonus fun!");
    display(chalk.white, "4. Exit");
}

export function display(color: ChalkFunction, message: string){
    console.log(color(message));
}
