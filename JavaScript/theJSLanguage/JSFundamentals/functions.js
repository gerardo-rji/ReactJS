import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Rewrite the function using '?' or '||'
function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?')
}

function checkAge2(age) {
  return age > 18 || confirm('Did parents allow you?')
}

//  Function min(a, b)
function min(a, b) {
  return a < b ? a : b
}

// Function pow(x,n)
function pow(x, n) {
  return (n <= 0)
    ? `Power ${n} is not supported, use a positive integer`
    : x ** n
}

let x = await rl.question('x? ')
let n = await rl.question('n? ')

console.log(pow(x, n))

// Rewrite with arrow functions
let ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
  'Do you agree?',
  () => alert('You agreed!'),
  () => alert('You canceled the execution')
)

rl.close();