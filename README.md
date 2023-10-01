# Top X

Top X is a simple project that allows you to find the top X largest numbers, and also, the smallest! It uses a heap-based selection algorithm to find the numbers from an input file.

## Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

Then follow these steps:

1. Clone the repository and cd into the directory.

2. Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. And the following to build:
   ```bash
   npm build
   ```

## Usage
### Running the Application

To run, use the following command:

   ```bash
   npm run
   ```

You'll be prompted with a CLI menu to begin. It should look like this:

```bash
➜  top-x git:(main) ✗ npm start

> top-x@1.0.0 start /Users/carlawilby/Dev/top-x
> ts-node src/index.ts

  _____    ___    ____           __  __
 |_   _|  / _ \  |  _ \          \ \/ /
   | |   | | | | | |_) |  _____   \  / 
   | |   | |_| | |  __/  |_____|  /  \ 
   |_|    \___/  |_|             /_/\_\
                                       
Hello and welcome to TOPX - where everything is possible!
...As long as it's selecting the top X largest numbers from a file!

What would you like to do?
1. Generate a test file
2. Find the top X largest numbers
3. Find the bottom X smallest numbers - bonus fun!
4. Exit
```
Enter a number from 1 to 4 to begin. I recommend starting with generating a file to use. If not, the preset file will be used.

## Running Tests
To run the unit tests, use the following command:


   ```bash
   npm test
   ```