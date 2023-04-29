async function fetchRooms() {
    try {
        const response = await fetch('../api/fetch-rooms.php')

        const { success, data } = await response.json()
        if (!success) return

        return data.rooms
    } catch (error) {
        console.error(error)
        return null
    }
}

export { fetchRooms }
