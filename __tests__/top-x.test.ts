import { findTopXNumbers } from '../src/heap-search/top-x';

describe('findTopXNumbers', () => {
    it('should find the top X numbers from a file', async () => {
        const file_path = './__tests__/test_numbers.txt';
        const x = 3;

        const result = await findTopXNumbers(file_path, x);

        const expectedValues = [10000, 9999, 9993];

        expect(result).toHaveLength(x);
        expect(result).toEqual(expectedValues);
    });

    it('should handle cases where X is greater than the number of elements in the file', async () => {
        const file_path = './__tests__/test_numbers.txt';
        const x = 2000;

        await expect(async () => { 
            await findTopXNumbers(file_path, x);
        }).rejects.toThrow(`Could not find ${x} top numbers, as there are only 1000 numbers in the file.`);
    });

    it('should handle empty input file', async () => {
        const file_path = './__tests__/empty_file.txt';
        const x = 5;

        await expect(async () => { 
            await findTopXNumbers(file_path, x);
        }).rejects.toThrowError(`File is empty`);
    });
});
