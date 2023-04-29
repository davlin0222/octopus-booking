async function login(email, password) {
    try {
        const response = await fetch('../api/login.php', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const { success } = await response.json()
        return success
    } catch (error) {
        console.error(error)
        return false
    }
}
export { login }
