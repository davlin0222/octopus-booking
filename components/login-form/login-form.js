import { login } from '../../services/login.js'

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', loginForm_onSubmit)

function loginForm_onSubmit(e) {
    e.preventDefault()

    login()
}
