import { createUser } from '../../assets/js/users.js'

const form = document.querySelector('.user-registration-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const form = e.target

    const userData = {
        roleId: form.role.value,
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
    }
    console.log(`form.addEventListener  userData:`, userData)

    const success = await createUser(userData)

    if (!success) return

    window.location.href = 'user-management.php'
})
