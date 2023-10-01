import * as fs from 'fs';
import * as readline from 'readline';
import heap from 'heap';

export async function findBottomXNumbers(file_path: string, x: number): Promise<number[]> {
    const maxHeap = new heap<number>((a, b) => b - a);

    const readStream = fs.createReadStream(file_path, { encoding: 'utf8' });
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const number = parseInt(line, 10);
        if (maxHeap.size() < x) {
            maxHeap.push(number);
        } else {
            if (maxHeap.peek() !== undefined && number < maxHeap.peek()!) {
                maxHeap.pop();
                maxHeap.push(number);
            }
        }
    }

    const bottomX: number[] = [];
    while (maxHeap.size() > 0) {
        bottomX.unshift(maxHeap.pop() as number);
    }

    if (bottomX.length === 0) {
        throw new Error(`File is empty`);
    }

    if (bottomX.length !== x) {
        throw new Error(`Could not find ${x} bottom numbers, as there are only ${bottomX.length} numbers in the file.`);
    }

    return bottomX;
}
