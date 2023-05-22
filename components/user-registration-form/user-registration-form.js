import { createUser } from '../../assets/js/users.js'

const form = document.querySelector('.user-registration-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const form = e.target

    const userData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
    }
    console.log(`form.addEventListener  userData:`, userData)

    const success = await createUser(userData)

    if (success) {
        // User created successfully
        console.log('User created successfully!')
        // Add any further actions or redirections here
    } else {
        // Error occurred while creating user
        console.error('Error creating user.')
        // Handle the error or show an appropriate message to the user
    }
})
