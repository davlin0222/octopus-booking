export async function fetchUsers() {
    try {
        const response = await fetch(`../api/fetch-users.php`)

        const text = await response.text()
        // console.log(`login  text:`, text)
        const { success, data } = JSON.parse(text)
        // console.log(`fetchBookings  data.userId:`, data.userId)

        if (!success) return

        return data.users
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function deleteUser(userId) {
    try {
        const response = await fetch(`../api/delete-user.php?id=${userId}`)

        const text = await response.text()
        console.log(`login  text:`, text)
        // const { success, data } = JSON.parse(text)
        // console.log(`fetchBookings  data.userId:`, data.userId)

        // if (!success) return

        // return data.users
    } catch (error) {
        console.error(error)
        return null
    }
}
