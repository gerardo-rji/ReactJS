import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('Enter a number: ');
console.log(`You typed: ${answer}`);

rl.close();