import { login } from './login.js'

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', loginForm_onSubmit)

async function loginForm_onSubmit(e) {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    const success = await login(email, password)
    console.log(`loginForm_onSubmit  success:`, success)

    if (success) {
        window.location.href = '../index.php'
    }
}
