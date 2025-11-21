// Last loop value
let i = 3

while (i) {
  alert(i--) // 3, 2, 1
}

// Which values does the while loop show?
i = 0
while (++i < 5) alert(i) // 1, 2, 3, 4

i = 0
while (i++ < 5) alert(i) // 1, 2, 3, 4, 5

// Which values get shown by the "for" loop?

for (let i = 0; i < 5; i++) alert(i) // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert(i) // 0, 1, 2, 3, 4

// Output even numbers in the loop

for (let i = 2; i <= 10; i += 2) alert(i)

for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) continue
  alert(i)
}

// Replace "for" with "while"

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` )
}

i = 0
while (i < 3) {
  alert(`number ${i}!`)
  ++i
}

// Repeat until the input is correct
let num;
do {
  num = prompt('Enter a number greater than 100: ', '0')
} while (num <= 100 || num === null)

// Output prime numbers
num = +prompt('Enter a number: ', '0')

nextPrime:
for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime
  }
  alert(i)
}