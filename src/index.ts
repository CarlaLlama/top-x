import chalk from "chalk";
import readline from "readline";
import { display, showIntro, showMenu } from "./menu";
import { generateTestCasesOption, runHeapFunctionOption } from "./menu/options";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function enterMenu() {
    try {
        let answer = await new Promise<string>((resolve) => {
            rl.question("", (answer) => {
                resolve(answer);
            });
        });

        while (answer !== "q") {
            switch (answer) {
                case "1":
                    await generateTestCasesOption(rl);
                    break;
                case "2":
                    await runHeapFunctionOption('top', rl);
                    break;
                case "3":
                    await runHeapFunctionOption('bottom', rl);
                    break;
                case "4":
                    display(chalk.blue, "Bye! :(");
                    return;
                default:
                    display(chalk.red, "Sorry, I'm not sure what you mean. Please specify a number like 1, 2, 3 or even 4.");
            }
            showMenu();
            answer = await new Promise<string>((resolve) => {
                rl.question("", (answer) => {
                    resolve(answer);
                });
            });
        }
    } finally {
        rl.close();
    }
}

showIntro();
showMenu();
enterMenu();
