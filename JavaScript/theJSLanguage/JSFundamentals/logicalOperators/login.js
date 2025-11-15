let user = prompt('Login: ', '')
let password

if (user === 'Admin') {
  password = prompt('Password: ', '')

    password === 'TheMaster' ? alert('Welcome!')
      : (password === '' || password === null) ? alert('Canceled')
        : alert('Wrong password!')

} else if (user === '' || user === null) {
  alert('Canceled')
} else {
  alert('I don\'t know you')
}