import * as fs from 'fs';
import chalk from "chalk";
import { display } from '../menu';

export function generateTestFile(filename: string, count: number) {
    const stream = fs.createWriteStream(filename);

    for (let i = 0; i < count; i++) {
        const randomNum = Math.floor(Math.random() * 10000) + 1;
        stream.write(`${randomNum}\n`);
    }

    stream.end();
    display(chalk.green, `Test file '${filename}' generated successfully.`);
}
