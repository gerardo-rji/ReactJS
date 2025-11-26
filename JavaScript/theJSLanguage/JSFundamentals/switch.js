import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Rewrite the "switch" into an "if"
let browser = await rl.question('What browser do you use? ')

if (browser === 'Edge') {
  console.log('You\'ve got the Edge!')
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  console.log('Okay we support these browsers too')
} else {
  console.log('We hope that this page looks ok!')
}

// Rewrite "if" into "switch"
let a = +await rl.question('a? ')

switch (a) {
  case 0:
    console.log(0)
    break
  case 1:
    console.log(1)
    break
  case 2:
  case 3:
    console.log("2,3")
    break
}

rl.close();