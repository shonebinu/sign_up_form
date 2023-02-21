const confirmPassword = document.querySelector('#conPass')
const password = document.querySelector('#pass')

confirmPassword.addEventListener('input', () => {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords doesn't match")
  } else {
    confirmPassword.setCustomValidity("")
  }
})

document.querySelector('button').addEventListener('submit', (e) => {
  if (!confirmPassword.checkValidity()) {
    e.preventDefault()
  }
})