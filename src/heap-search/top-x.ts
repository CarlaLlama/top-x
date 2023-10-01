import * as fs from 'fs';
import * as readline from 'readline';
import heap from 'heap';

export async function findTopXNumbers(file_path: string, x: number): Promise<number[]> {
    const minHeap = new heap<number>((a, b) => a - b);

    const readStream = fs.createReadStream(file_path, { encoding: 'utf8' });
    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        const number = parseInt(line, 10);
        if (minHeap.size() < x) {
            minHeap.push(number);
        } else {
            if (minHeap.peek() !== undefined && number > minHeap.peek()!) {
                minHeap.pop();
                minHeap.push(number);
            }
        }
    }

    const topX: number[] = [];
    while (minHeap.size() > 0) {
        topX.unshift(minHeap.pop() as number);
    }

    if (topX.length === 0) {
        throw new Error(`File is empty`);
    }

    if (topX.length !== x) {
        throw new Error(`Could not find ${x} top numbers, as there are only ${topX.length} numbers in the file.`);
    }

    return topX;
}
