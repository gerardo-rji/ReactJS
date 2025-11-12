// if (a string with zero)
if ("0") {
  alert('Hello') // yes
}

// The name of JavaScript
let officialName = prompt('What\'s the "official" name of JavaScript?', '')

if (officialName === 'ECMAScript') {
  alert('Right!')
} else {
  alert('You don\'t know? "ECMAScript"!')
}

// Show the sign
let num = prompt('Enter a number: ', '0')

if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else {
  alert(0)
}

// Rewrite 'if' into '?'
let result = (a + b - 4) ? 'Below' : 'Over'

// Rewrite 'if..else' into '?'
let message = (login === 'Employee') ? 'Hello' :
  (login === 'Director') ? 'Greetings' :
    (login === '') ? 'No login' :
      '';